"""Fail if any relative href/src in the built site points at a missing file.

Usage: python3 check_links.py <site-dir>
"""
import os
import sys
from functools import lru_cache
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

SKIP_PREFIXES = ("#", "mailto:", "tel:", "javascript:", "data:")


class Refs(HTMLParser):
    """Collect href/src values from real tags; escaped markup such as &lt;a href="/x"&gt; in a lesson is text."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs = set()

    def handle_starttag(self, tag, attrs):
        self.refs.update(v for k, v in attrs if k in ("href", "src") and v is not None)

    handle_startendtag = handle_starttag


def refs_in(page: Path) -> set:
    parser = Refs()
    parser.feed(page.read_text(encoding="utf-8", errors="replace"))
    parser.close()
    return parser.refs


def is_local(ref: str) -> bool:
    if not ref or ref.startswith(SKIP_PREFIXES):
        return False
    # Template placeholders inside inline <script> blocks, e.g. href="m${i}.html".
    if "${" in ref or "'+" in ref or "+'" in ref or "{{" in ref:
        return False
    parts = urlsplit(ref)
    return not parts.scheme and not parts.netloc and bool(parts.path)


@lru_cache(maxsize=None)
def listing(directory: Path) -> frozenset:
    return frozenset(os.listdir(directory))


def exists_exact(path: Path, root: Path) -> bool:
    """Case-sensitive check that path exists inside root, so Windows/macOS runs match GitHub Pages."""
    # abspath, not resolve(): on Windows resolve() rewrites names to their on-disk case.
    path = Path(os.path.abspath(path))
    if not path.exists():
        return False
    try:
        parts = path.relative_to(root).parts
    except ValueError:
        return False  # climbs out of the site with ../
    current = root
    for name in parts:
        if name not in listing(current):
            return False
        current = current / name
    return True


def main(site: Path) -> int:
    root = Path(os.path.abspath(site))
    broken = []
    pages = sorted(site.rglob("*.html"))
    for page in pages:
        for ref in refs_in(page):
            if not is_local(ref):
                continue
            where = f"{page.relative_to(site).as_posix()} -> {ref}"
            path = unquote(urlsplit(ref).path)
            if path.startswith("/"):
                # A project site is served from /<repo>/, so root-relative links miss it.
                broken.append(f"{where}  (root-relative; use a relative path)")
                continue
            target = page.parent / path
            if path.endswith("/"):
                target = target / "index.html"
            if not exists_exact(target, root):
                broken.append(where)

    print(f"Checked {len(pages)} pages.")
    if broken:
        print(f"{len(broken)} broken link(s):")
        for line in sorted(broken):
            print(f"  {line}")
        return 1
    print("No broken links.")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    sys.exit(main(Path(sys.argv[1])))
