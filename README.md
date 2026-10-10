# 100-days-playlist

Combined study notes for four 100-day tracks: Machine Learning, Deep Learning, NLP and System Design.

**Live site:** <https://karanjain1601.github.io/100-days-playlist/>

| Track | Folder |
| --- | --- |
| Machine Learning — A Doctoral Lecture Series | [`100ML/`](100ML/) |
| 100 Days of Deep Learning | [`100-days-deep-learning/`](100-days-deep-learning/) |
| 100 Days of NLP | [`100NLP/`](100NLP/) |
| 100 Days of System Design | [`100SystemDesign/`](100SystemDesign/) |

Open [`index.html`](index.html) locally, or use the live site.

## Deployment

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) publishes the site to GitHub Pages on every push to `main`. Pull requests run the same build and link check but don't deploy.

The build copies `index.html` and the four track folders into `_site/`, then runs [`.github/scripts/check_links.py`](.github/scripts/check_links.py), which fails on any relative link pointing at a missing file. The check is case-sensitive, like GitHub Pages. The `.zip` archives and `100DL/` (an older copy of the Deep Learning track) are not published.

Run the link check locally:

```sh
mkdir -p _site && cp -r index.html 100ML 100-days-deep-learning 100NLP 100SystemDesign _site/
python3 .github/scripts/check_links.py _site
```
