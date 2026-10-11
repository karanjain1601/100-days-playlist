# 100 Days of DSA + Competitive Programming in Python
### Complete YouTube playlist blueprint — 142 lessons across 100 days

---

## 0. How this series is built

**142 lessons / 100 days.** 58 days carry one lesson; 42 days carry two (usually a *concept* video followed by an *implementation + problems* video). Every lesson below is tagged with its day, so you can upload one video a day for 100 days or batch two on heavy days.

**Assumptions baked in** (change them if they don't match your channel):
- Language: Python 3.11+. CPython for teaching, PyPy noted wherever it matters on Codeforces.
- Runtime: 25–75 min for teaching lessons, 90–150 min for the ten contest/editorial days. Total series ≈ **132 hours** (verified sum of the per-lesson targets).
- Judges used: **CSES** (structured, no rating noise), **Codeforces** (contests + EDU), **AtCoder** (DP/ABC), **LeetCode** (interview overlap), **CodeChef/USACO** (long-form).
- Every lesson ships code to a public GitHub repo, folder `dayXXX/`.

**Weekly rhythm:** 6 teaching days + 1 contest/upsolve day. Nine full contest-and-editorial days are built into the schedule (L25, L35, L46, L61, L80, L102, L116, L127, L134) plus a capstone (L142).

### Legend for each lesson entry

```
L{lesson} · Day {day} · {Title} — {target runtime}
TIMELINE   in-video chapter markers (paste straight into your description)
TEACH      the exact concepts to cover, in order
CODE       what you type on screen, live
PROBLEMS   problems solved on camera / assigned
GOAL       the measurable outcome for the viewer
```

### Phase map

| Phase | Lessons | Days | Theme |
|---|---|---|---|
| 0 | L1–L10 | 1–7 | Setup, Python-for-CP, complexity, bit tricks, debugging |
| 1 | L11–L25 | 8–17 | Arrays, prefix sums, two pointers, sorting, binary search, greedy |
| 2 | L26–L35 | 18–24 | Hashing, stacks, queues, linked lists, heaps, intervals |
| 3 | L36–L46 | 25–32 | Strings: hashing, KMP, Z, Manacher, tries, Aho-Corasick, suffix arrays |
| 4 | L47–L61 | 33–43 | Recursion, backtracking, D&C, trees, BST, LCA, centroid decomposition |
| 5 | L62–L80 | 44–56 | Graphs: traversal, shortest paths, DSU, MST, SCC, 2-SAT, matching, flows |
| 6 | L81–L102 | 57–71 | Dynamic programming, game theory, DP optimizations |
| 7 | L103–L116 | 72–81 | Sparse table, BIT, segment trees, sqrt decomposition, Mo's, HLD, treaps |
| 8 | L117–L127 | 82–89 | Number theory, combinatorics, matrix exponentiation, linear algebra, FFT |
| 9 | L128–L134 | 90–94 | Computational geometry |
| 10 | L135–L142 | 95–100 | Randomization, offline tricks, constructives, interactives, contest craft |

---

## PHASE 0 — Foundations: Python as a Competitive Weapon
**Days 1–7 · L1–L10**

---

**L1 · Day 1 · Course Roadmap: What 100 Days Actually Buys You — 30 min**

`00:00` who this is for (3 tracks: interviews, Codeforces rating, ICPC/IOI) · `04:00` the 142-lesson map on screen · `10:00` why Python is viable in CP and where it isn't · `15:00` accounts to create now (Codeforces, AtCoder, CSES, LeetCode, CodeChef) · `20:00` how to watch: 1 lesson → 3 problems → 1 revision note · `25:00` the GitHub repo + problem sheet tour · `28:00` Day 2 preview

- **TEACH:** the difference between DSA (correctness + complexity) and CP (speed + tricks under time pressure); realistic outcome curves — Codeforces 1400–1700 and 400+ solved problems is the honest 100-day target for a beginner, not grandmaster; Python's real limits (≈10⁷ simple ops/sec CPython, ≈10⁸ PyPy) and when to switch to C++; the upsolving contract (never leave a contest problem unsolved for more than 48h).
- **CODE:** nothing — this is the map video. Show the repo structure and the tracking spreadsheet template.
- **PROBLEMS:** CSES *Weird Algorithm*, *Missing Number*, *Repetitions* — solved cold to establish a baseline.
- **GOAL:** viewer has all judge accounts, cloned repo, and a written 100-day commitment.

---

**L2 · Day 1 · Environment, Template & Fast I/O That Won't TLE — 45 min**

`00:00` why `input()` costs you problems · `03:00` VS Code + Python setup, snippets, keybindings · `10:00` `sys.stdin.readline` vs `sys.stdin.buffer.read().split()` benchmark, live · `20:00` writing the universal CP template · `28:00` output buffering: `sys.stdout.write`, `'\n'.join(map(str,ans))`, why 10⁵ prints kill you · `34:00` `sys.setrecursionlimit`, threading trick for deep recursion · `39:00` CPython vs PyPy on Codeforces: how to pick at submit time · `43:00` local test runner script

- **TEACH:** the four I/O tiers with measured timings (naive `input()` → `readline` → `buffer.readline` → bulk `buffer.read().split()`); token-stream parsing pattern with an index pointer; reading a grid, reading multi-testcase input, reading until EOF; `int` parsing cost; why f-strings in a loop are slower than one join; the `threading.stack_size(1<<27)` + `Thread` recursion workaround and its caveats; interpreter choice (PyPy ≈10–30× faster on tight loops but slower startup and worse on big-int math).
- **CODE:** build `template.py` from scratch — bulk reader class, `MOD`, `dbg()` that respects a `LOCAL` env var, `main()` guard; a `run.sh` that pipes `in.txt` through the solution and diffs against `exp.txt`.
- **PROBLEMS:** CSES *Increasing Array*, *Distinct Numbers* (deliberately re-submit with slow I/O to show the TLE, then fix).
- **GOAL:** viewer has a personal template that never loses points to I/O.

---

**L3 · Day 2 · Python's Built-in Data Structures and Their Real Complexities — 55 min**

`00:00` the hidden-cost problem · `02:30` `list`: dynamic array, amortised append, why `insert(0,x)`/`pop(0)` is O(n) · `12:00` `tuple` and hashability, why tuples make great DP keys · `17:00` `dict`: open addressing, average O(1), worst-case O(n), insertion order guarantee · `26:00` `set` and `frozenset`, set algebra costs · `32:00` `str`: immutability, why `s += c` in a loop is quadratic, `join` instead · `39:00` `collections.deque`: O(1) both ends, O(n) indexing · `45:00` slicing copies — the accidental O(n²) · `50:00` cheat-sheet table + memory footprint (`sys.getsizeof`, why a list of 10⁶ ints costs ~40 MB)

- **TEACH:** amortised analysis of list growth (over-allocation factor); hash collision behaviour and the CP consequence (anti-hash tests → covered in L26); `in` on list O(n) vs set O(1) as the single most common beginner mistake; when a 2D list must be built with `[[0]*m for _ in range(n)]` and never `[[0]*m]*n`; array module and when to prefer it for memory; `bytearray` for grids.
- **CODE:** micro-benchmark harness with `timeit` comparing list-as-queue vs deque at n=10⁵; the aliasing bug demo.
- **PROBLEMS:** CSES *Distinct Numbers*, *Sum of Two Values*, LeetCode 1 *Two Sum* — each solved twice (naive, then with the right container).
- **GOAL:** viewer can state the complexity of every operation they type.

---

**L4 · Day 2 · The Standard Library Arsenal: collections, itertools, heapq, bisect, functools, math — 60 min**

`00:00` "the stdlib is your unfair advantage" · `03:00` `collections`: Counter, defaultdict, deque, namedtuple — with CP use-cases each · `16:00` `bisect`: bisect_left/right, insort, and the four questions bisect answers · `26:00` `heapq`: heappush/pop, heapify, nlargest, the negation trick for max-heaps, tuple keys · `36:00` `itertools`: permutations, combinations, product, accumulate, groupby, pairwise · `47:00` `functools`: lru_cache/cache for memoisation, cmp_to_key for custom comparators, reduce · `54:00` `math`: gcd, lcm, isqrt, comb, perm, factorial, inf — and why `isqrt` beats `int(x**0.5)`

- **TEACH:** `accumulate` as a one-line prefix sum (with `initial=0` and a custom operator); `groupby` requires sorted input; `cmp_to_key` for the "sort by pairwise rule" trick (e.g. largest concatenated number); `lru_cache(maxsize=None)` vs manual dict memo (recursion-limit and speed trade-off); why `math.comb` is exact but slow mod p; `float` traps — never compare floats with `==`, prefer integer arithmetic.
- **CODE:** solve one problem five ways using five different stdlib tools; write a `sortedcontainers`-free workaround for "need a sorted multiset" (heap + lazy deletion / BIT preview).
- **PROBLEMS:** CSES *Ferris Wheel*, *Concert Tickets* (bisect), *Josephus Problem I*, LeetCode 179 *Largest Number* (cmp_to_key).
- **GOAL:** viewer stops reimplementing what ships with Python.

---

**L5 · Day 3 · Time & Space Complexity, and Estimating Limits in Python — 50 min**

`00:00` why constraints tell you the algorithm · `04:00` Big-O, Big-Θ, Big-Ω, little-o — formally, then informally · `13:00` counting operations: loops, nested loops, while-halving, recursion trees · `22:00` amortised vs average vs worst case (list append, dict lookup, DSU) · `29:00` space complexity, recursion stack cost, in-place algorithms · `35:00` **the constraint table**: n≤10 → O(n!), n≤20 → O(2ⁿ), n≤500 → O(n³), n≤5000 → O(n²), n≤10⁵ → O(n log n), n≤10⁶ → O(n), n≤10⁹ → O(log n)/O(√n) — with the Python correction factor of ~10 · `43:00` reading the time limit: 1s ≈ 10⁷ Python ops, 2s PyPy ≈ 10⁸ · `47:00` how to reverse-engineer the intended solution from constraints alone

- **TEACH:** master theorem statement with the three cases, applied to merge sort, binary search, Karatsuba; why constant factors matter far more in Python than in C++ (attribute lookups, boxing, interpreter overhead); the practice of hoisting `append = res.append` out of a loop; measuring with `time.perf_counter` and Codeforces' own "custom invocation".
- **CODE:** write a script that plots measured runtime vs n for four different algorithms on the same problem, and show the curves crossing.
- **PROBLEMS:** given 6 problem statements, viewer must name the intended complexity before coding (worksheet in repo).
- **GOAL:** viewer reads constraints first and never writes a doomed solution.

---

**L6 · Day 4 · Recursion & Memoisation, Properly — 60 min**

`00:00` recursion as a contract, not magic · `04:00` base case, recursive case, progress guarantee · `10:00` the call stack visualised (drawing + `traceback`) · `18:00` recursion trees and why naive Fibonacci is O(φⁿ) · `24:00` memoisation top-down: dict, array, `@cache` · `33:00` tabulation bottom-up and the mechanical conversion between the two · `41:00` tail recursion, and why Python has no TCO — converting to iteration with an explicit stack · `49:00` the 1000-frame `RecursionError`, `setrecursionlimit`, and the iterative-DFS habit that saves you in graph lessons · `55:00` recursion on multiple arguments, state design preview

- **TEACH:** structural vs generative recursion; how to define a state so that transitions are total functions of the state; converting recursive DFS into an explicit stack machine (the "(node, child_index)" pattern you will reuse in L55 and L89); mutual recursion; why memo keys must be immutable; measuring memo hit rate.
- **CODE:** Fibonacci in 5 variants with timings; a generic `@memo` decorator written by hand; recursive → iterative transformation of a tree traversal, done line by line.
- **PROBLEMS:** CSES *Tower of Hanoi*, *Grid Paths* (counting), LeetCode 509, 70, 322; AtCoder DP-A *Frog 1* both ways.
- **GOAL:** viewer can convert any recursion to iteration and back.

---

**L7 · Day 5 · Bit Manipulation I: Operators, Masks, and the Classic Tricks — 50 min**

`00:00` binary in 90 seconds · `03:00` `&  |  ^  ~  <<  >>` with truth tables and live examples · `12:00` get/set/clear/toggle the i-th bit · `19:00` `x & (x-1)`, `x & -x`, `x | (x+1)` — derive each on the whiteboard, don't memorise · `28:00` popcount: `bin(x).count('1')`, `int.bit_count()` (3.10+), and manual SWAR · `34:00` XOR properties: self-inverse, commutative — the "find the unique number" family · `41:00` Python specifics: arbitrary-precision ints, `~x` and negative numbers, two's complement emulation with `& 0xFFFFFFFF`, `int.bit_length()` · `47:00` common bugs: precedence, shifting by ≥ width

- **TEACH:** why bitwise ops are O(1) only for machine-word ints — in Python big ints cost O(bits/64), which matters in L115; parity tricks; swapping without temp (and why you shouldn't); using an int as a boolean array; `bit_length` for fast log₂.
- **CODE:** implement all bit primitives as one-liners with asserts; solve "single number" I/II/III on camera.
- **PROBLEMS:** CSES *Bit Strings*, *Gray Code*; LeetCode 136, 137, 260, 191, 338, 231, 268.
- **GOAL:** viewer manipulates bits fluently without lookup.

---

**L8 · Day 5 · Bit Manipulation II: Subset Enumeration and Bitmask Thinking — 55 min**

`00:00` sets as integers · `04:00` enumerating all 2ⁿ subsets with `for mask in range(1<<n)` · `12:00` iterating the elements of a mask; iterating **submasks** with `sub = (sub-1) & mask` and its 3ⁿ total cost — proved on screen · `24:00` supersets, complement within a universe · `30:00` counting bits over all masks in O(2ⁿ) via `dp[m] = dp[m>>1] + (m&1)` · `36:00` bitmask as a DP state — a teaser for L91 (TSP) · `43:00` XOR basis / linear independence over GF(2), intuition only (full treatment L125) · `50:00` `frozenset` vs int mask: memory and speed comparison

- **TEACH:** the bijection between subsets and integers; the submask enumeration proof (each element is in mask-only, sub-only, or neither → 3ⁿ); meet-in-the-middle preview; Gray code order and when it helps; using masks to encode small grids/profiles.
- **CODE:** submask enumerator with a live counter proving 3ⁿ; subset-sum over 2ⁿ subsets; a 4×4 grid encoded in a 16-bit int.
- **PROBLEMS:** CSES *Apple Division*, *Two Sets*, *Elevator Rides* (attempt now, revisit after L91), LeetCode 78, 90, 1863.
- **GOAL:** viewer thinks of small sets as integers by reflex.

---

**L9 · Day 6 · The Problem-Solving Framework: From Statement to Accepted — 50 min**

`00:00` the failure mode: coding before thinking · `03:00` step 1 read: constraints, output format, edge cases, multi-test · `10:00` step 2 restate in one sentence; step 3 hand-solve the samples · `17:00` step 4 brute force always, on paper — it defines correctness · `23:00` step 5 find structure: monotonicity, invariants, symmetry, small cases → OEIS · `32:00` step 6 optimise: which of the ~12 techniques applies · `38:00` proof tools: invariant, induction, exchange argument, contradiction, pigeonhole, extremal principle · `46:00` when to abandon a problem (and the 20-minute rule in contests)

- **TEACH:** the "what does the answer look like" question; brute-force-then-observe as a legitimate research method (print outputs for n=1..8, look for a pattern); the exchange argument template used later for every greedy proof; invariants for constructive problems; why "it passes samples" is not evidence; keeping a personal mistake log.
- **CODE:** live-solve an unseen 1200-rated Codeforces problem narrating every framework step, including the false starts.
- **PROBLEMS:** three ad-hoc problems solved framework-first, no hints.
- **GOAL:** viewer has a repeatable procedure instead of intuition-only.

---

**L10 · Day 7 · Debugging, Stress Testing & Never Failing on Test 47 — 45 min**

`00:00` the wrong-answer-on-test-47 nightmare · `03:00` assertion-driven development · `08:00` writing a random test **generator** (`random.seed`, controlled size, edge-heavy distributions) · `16:00` the stress-test loop: brute vs fast, diff, shrink the failing case · `26:00` shrinking a counterexample to something you can read · `31:00` typical Python bugs: mutable default args, shallow copy, integer division, off-by-one in ranges, shadowing, late binding in lambdas · `38:00` reading judge verdicts: WA vs TLE vs RE vs MLE vs IE, and what each implies · `42:00` `pdb`, prints to `stderr`, and why `print` debugging is fine if it goes to stderr

- **TEACH:** the four-file setup (`gen.py`, `brute.py`, `sol.py`, `stress.sh`); property-based checks when there's no unique answer (verify the answer's validity, not equality); testing interactive problems locally (preview of L138); checking for overflow-free reasoning (rarely needed in Python — a genuine Python advantage worth stating).
- **CODE:** write the full stress harness; plant a deliberate bug in a sorting solution and let the harness find it on camera.
- **PROBLEMS:** re-solve two earlier problems and stress-test them; fix a provided buggy solution from the repo.
- **GOAL:** viewer can find any wrong-answer bug without seeing the judge's test.

---

## PHASE 1 — Arrays, Sorting, Searching, Greedy
**Days 8–17 · L11–L25**

---

**L11 · Day 8 · Arrays & Simulation: The Boring Skill That Wins Contests — 40 min**

`00:00` why 30% of Div3 problems are pure array handling · `03:00` indexing, negative indices, slicing semantics, `range` gotchas · `10:00` in-place vs copy; rotation three ways (slice, deque, reversal trick) · `19:00` 2D arrays: construction, row/col traversal, transpose, rotate 90°, spiral · `28:00` simulation discipline: state variables, loop invariants, when to simulate vs derive a formula · `35:00` boundary handling with sentinels and padding

- **TEACH:** the reversal algorithm for rotation (reverse whole, reverse parts) with proof; flattening 2D→1D indexing `i*m+j` and when it's faster in Python; when a "simulate n steps" problem hides a cycle (detect the cycle, jump ahead — links to L74/L119).
- **CODE:** rotate matrix in place; spiral print; cycle-detection-in-simulation on camera.
- **PROBLEMS:** CSES *Weird Algorithm*, *Palindrome Reorder*; LeetCode 48, 54, 189, 66, 41.
- **GOAL:** zero index errors under time pressure.

---

**L12 · Day 8 · Prefix Sums: The First Real Superpower — 45 min**

`00:00` the "many range-sum queries" problem · `03:00` build `pre[i+1]=pre[i]+a[i]`, query `pre[r+1]-pre[l]` — derive, don't state · `11:00` off-by-one discipline: 0-indexed vs 1-indexed prefix arrays (pick one for life) · `17:00` prefix XOR, prefix product (and the zero problem), prefix min/max limitations · `24:00` **prefix-sum + hashmap**: counting subarrays with sum k, sum divisible by k, equal 0s/1s · `35:00` prefix sums on a condition (count of vowels, count ≤ x) · `40:00` `itertools.accumulate` and when to still write it manually

- **TEACH:** the invariant that prefix sums answer any *associative, invertible* operation; the residue-counting argument for "divisible by k"; why min/max needs sparse tables instead (forward pointer to L103).
- **CODE:** all three hashmap variants live; a subtle bug where the empty prefix isn't seeded in the counter.
- **PROBLEMS:** CSES *Subarray Sums I/II*, *Subarray Divisibility*, *Maximum Subarray Sum*; LeetCode 560, 974, 525, 1524.
- **GOAL:** viewer recognises "count subarrays with property P" as a prefix-sum problem instantly.

---

**L13 · Day 9 · 2D Prefix Sums & Difference Arrays — 50 min**

`00:00` submatrix sums in O(1) · `04:00` 2D prefix construction, inclusion–exclusion rectangle formula derived on grid paper · `15:00` maximum-sum submatrix in O(n³) by fixing row pairs · `23:00` **difference arrays**: range update O(1), final array by one prefix pass · `32:00` the "n intervals of +1, find max overlap" pattern — the sweep-line seed · `39:00` 2D difference arrays (range update on a rectangle) · `46:00` when to use difference vs BIT (offline all-updates-then-query vs interleaved)

- **TEACH:** the +/− pattern of 2D inclusion–exclusion and how to remember it; converting "add x to [l,r]" into two point events; the interleaving test that decides difference array vs Fenwick tree (L104).
- **CODE:** 2D prefix class; ranged-increment problem; rectangle-increment on a 1000×1000 grid.
- **PROBLEMS:** CSES *Forest Queries*, *Range Update Queries*; LeetCode 304, 1109, 370, 2536, 1074.
- **GOAL:** viewer converts range updates to O(1) reflexively.

---

**L14 · Day 10 · Two Pointers — 50 min**

`00:00` the O(n²)→O(n) hook · `03:00` **the precondition**: monotone predicate as the pointer advances (state it, prove it) · `10:00` pattern A opposite ends: pair sum in sorted array, container with most water, reverse/partition · `21:00` pattern B same direction: remove duplicates, merge two sorted arrays, intersection of sorted sets · `31:00` pattern C fast/slow on sequences (preview of Floyd, L31) · `36:00` 3-sum and 4-sum: sort + fix + two pointers, duplicate handling done carefully · `45:00` failure cases: when monotonicity breaks and you need a heap or BIT instead

- **TEACH:** the amortised argument (each pointer moves ≤ n times → O(n)); why sorting first is legitimate only if order is irrelevant to the answer; the duplicate-skipping idiom that everyone gets wrong in 3-sum.
- **CODE:** 3-sum from scratch with dedup; merge step of merge sort as a two-pointer exercise.
- **PROBLEMS:** CSES *Sum of Two Values*, *Apartments*, *Ferris Wheel*, *Collecting Numbers*; LeetCode 15, 11, 42, 986; Codeforces EDU "Two Pointers Method" steps 1–2.
- **GOAL:** viewer states the monotonicity condition before writing the loop.

---

**L15 · Day 11 · Sliding Window: Fixed and Variable — 55 min**

`00:00` windows vs two pointers — the distinction · `04:00` fixed-size window: rolling sum/average, first-window-then-slide · `13:00` variable window: the shrink-while-invalid template (expand right, shrink left, update answer) · `24:00` the three questions that identify a window problem: contiguous? monotone validity? cheap add/remove? · `31:00` windows with a Counter (at most k distinct, permutation matching, minimum window substring) · `43:00` windows on sums with non-negative constraint, and why negatives break it (→ prefix + heap/BIT instead) · `50:00` the canonical template card

- **TEACH:** the invariant "window `[l,r]` is the longest valid window ending at r"; add/remove symmetry when maintaining Counters; the exact reason "shortest subarray with sum ≥ S" fails with negative numbers, and the deque/prefix fix.
- **CODE:** one template, four problems refactored onto it.
- **PROBLEMS:** CSES *Playlist*, *Distinct Values Subarrays*; LeetCode 3, 76, 209, 424, 438, 567, 1004, 340.
- **GOAL:** one memorised template that solves the whole family.

---

**L16 · Day 11 · Monotonic Deque: Sliding Window Maximum & Friends — 45 min**

`00:00` why a heap gives O(n log n) and we want O(n) · `04:00` the monotonic-decreasing deque invariant, drawn step by step · `14:00` implementation with indices (not values) for correct expiry · `22:00` sliding window minimum, and both-at-once · `27:00` sliding window median with two heaps + lazy deletion (contrast) · `35:00` deque as a DP optimiser — the seed for L98 · `41:00` complexity: each index pushed and popped once

- **TEACH:** why we store indices; why popping from the back preserves correctness (a smaller newer element dominates); the amortised O(n) proof; generalisation to "min over a sliding window of a DP array".
- **CODE:** `sliding_max(a, k)` written twice — once buggy with values, once correct with indices.
- **PROBLEMS:** CSES *Sliding Window Median*, *Sliding Window Cost*; LeetCode 239, 1425, 862, 1696.
- **GOAL:** viewer implements the deque trick from memory in 5 minutes.

---

**L17 · Day 12 · Sorting From Scratch I: Quadratic Sorts, Merge Sort, Inversions — 55 min**

`00:00` why implement sorts you'll never use · `03:00` bubble, selection, insertion — code, complexity, stability, best/worst cases · `16:00` insertion sort's real use: nearly-sorted data and small-n cutoffs inside Timsort · `21:00` **merge sort**: divide, conquer, merge; recursion tree; O(n log n) proof · `33:00` stability of merge sort, proven by the tie-break in merge · `38:00` counting inversions during merge — full derivation · `47:00` merge sort on linked lists (preview L31); external sorting idea

- **TEACH:** loop invariants for each quadratic sort; the merge subroutine as the two-pointer skill from L14; inversions as a distance-to-sorted metric and its appearance in Codeforces problems ("min adjacent swaps"); bottom-up iterative merge sort.
- **CODE:** all four sorts with an operation counter; inversion counter tested against a brute force via the L10 harness.
- **PROBLEMS:** CSES *Collecting Numbers II*; LeetCode 912, 493, 315, 327; Codeforces "count inversions" classics.
- **GOAL:** viewer can derive O(n log n) and count inversions unaided.

---

**L18 · Day 12 · Sorting From Scratch II: Quicksort, Quickselect, Linear Sorts, Timsort — 55 min**

`00:00` quicksort's partition step (Lomuto and Hoare, both coded) · `12:00` average O(n log n) vs worst O(n²); randomised pivot; why sorted input kills naive quicksort · `21:00` **quickselect** for k-th order statistic, average O(n), and median-of-medians existence proof (no code) · `31:00` counting sort, radix sort (LSD), bucket sort — with their assumptions stated loudly · `42:00` Timsort: runs, galloping merge, why Python's `sorted` is stable and fast · `48:00` custom keys: tuples, `-x` for descending, `cmp_to_key`, multi-key sorts, sorting by frequency

- **TEACH:** the exact conditions that make counting/radix linear (small integer range) and why that's a CP trap; stability's practical importance; why `sorted(a, key=...)` beats a comparator in Python; the anti-quicksort test as a live example of adversarial input.
- **CODE:** quickselect; radix sort on 10⁶ 32-bit ints benchmarked vs `sorted`; a 3-key sort of records.
- **PROBLEMS:** CSES *Stick Lengths*, *Towers*, *Restaurant Customers*; LeetCode 215, 347, 75, 164, 179.
- **GOAL:** viewer chooses the right sort and writes any comparator.

---

**L19 · Day 13 · Binary Search I: On Sorted Arrays — 50 min**

`00:00` the halving idea and its O(log n) bound · `04:00` writing it once, correctly: `[lo, hi)` half-open convention, invariant, termination proof · `15:00` the four questions: first ≥ x, first > x, last < x, last ≤ x — one implementation, four wrappers · `26:00` `bisect_left`/`bisect_right` mapped onto those four · `32:00` binary search on answers **in an array** (rotated array, peak element, first bad version) · `41:00` common bugs: infinite loops, wrong mid, `(lo+hi)//2` and Python's unbounded ints (no overflow — a genuine advantage) · `46:00` binary search over a 2D sorted matrix

- **TEACH:** the loop invariant discipline that makes binary search boring; why picking one convention forever eliminates 90% of bugs; monotone predicate framing `pred(i)` false…false,true…true.
- **CODE:** one `bisect`-equivalent written by hand with asserts against `bisect_left` on random data.
- **PROBLEMS:** CSES *Concert Tickets*; LeetCode 704, 33, 34, 153, 162, 74, 4; Codeforces EDU "Binary Search" steps 1–2.
- **GOAL:** bug-free binary search on the first attempt, always.

---

**L20 · Day 14 · Binary Search II: Binary Search on the Answer — 55 min**

`00:00` the reframe: search the answer space, not the array · `05:00` the recipe — guess X, write `feasible(X)`, prove monotonicity, search · `14:00` classic 1: minimum capacity / max load (ship packages, Koko, split array) · `26:00` classic 2: maximise the minimum (aggressive cows, magnetic force) · `35:00` classic 3: k-th smallest in a sorted matrix / k-th smallest pair distance (count ≤ X with two pointers) · `46:00` combining with prefix sums and greedy checks · `51:00` how to spot it: "minimise the maximum", "maximum minimum", "at least k with…"

- **TEACH:** proving `feasible` is monotone is the whole problem; the count-based check pattern (`count(≤X) ≥ k`); nested binary search + two pointers complexity O(n log(range)).
- **CODE:** three problems using the identical skeleton, changing only `feasible`.
- **PROBLEMS:** CSES *Array Division*, *Factory Machines*, *Multiplication Table*; LeetCode 410, 875, 1011, 1482, 1552, 719, 378.
- **GOAL:** viewer converts optimisation statements into feasibility checks.

---

**L21 · Day 14 · Binary Search III: Real Numbers, Ternary Search, Advanced Patterns — 45 min**

`00:00` binary search on floats: fixed iteration count (100 iters) vs epsilon, and why iterations are safer · `09:00` precision traps and formatting output · `14:00` **ternary search** on unimodal functions: derivation, the two-probe step, integer ternary search pitfalls · `26:00` convexity/unimodality as the precondition, with a counterexample · `31:00` binary search on a *predicate over a data structure* (search-descent teaser for L108) · `37:00` parallel binary search idea (offline, many queries at once) · `42:00` binary lifting as binary search on a tree (teaser L57/L63)

- **TEACH:** why `while hi-lo > eps` can loop forever with doubles; ternary search on integers via `while hi-lo > 2`; golden-section as an alternative; the difference between unimodal and monotone.
- **CODE:** float ternary search for a geometry-style minimisation; integer ternary search with the safe tail.
- **PROBLEMS:** Codeforces ternary-search classics (e.g. *Ternary Search* EDU set); CSES *Minimum Euclidean Distance* (revisit L132); LeetCode 1231, 1891.
- **GOAL:** viewer handles continuous and unimodal search safely.

---

**L22 · Day 15 · Greedy I: The Method and Its Proofs — 50 min**

`00:00` greedy defined: local choice, never revisited · `04:00` why greedy needs proof — a plausible-but-wrong greedy demonstrated and killed by a counterexample · `12:00` **exchange argument** template, applied fully to activity selection · `24:00` **greedy stays ahead** (induction on prefix), applied to fractional knapsack · `33:00` matroid/optimal-substructure intuition (why Kruskal works — forward ref L72) · `39:00` sorting as the greedy enabler: choosing the right key · `45:00` when greedy fails and DP is required — the diagnostic question

- **TEACH:** the two standard proof structures in full rigour; the "counterexample hunt" as a 2-minute pre-code habit; recognising the 0/1 knapsack as the canonical greedy failure.
- **CODE:** activity selection; fractional knapsack; a deliberately wrong greedy stress-tested against DP with the L10 harness — the failing case appears live.
- **PROBLEMS:** CSES *Movie Festival*, *Stick Lengths*, *Missing Coin Sum*, *Tasks and Deadlines*; LeetCode 55, 45, 621, 135.
- **GOAL:** viewer never submits an unproven greedy again.

---

**L23 · Day 15 · Greedy II: Intervals, Scheduling, and Heap-Greedy — 50 min**

`00:00` the interval toolkit · `03:00` sort by end → max non-overlapping; sort by start → merging; sort by start, heap of ends → minimum rooms · `15:00` job scheduling with deadlines and profits (sort by profit + DSU/slot trick — DSU version revisited L70) · `26:00` minimum platforms / max overlap via events, connecting back to L13 · `32:00` heap-greedy family: connect ropes, task scheduler, IPO, reorganise string, k-th cheapest · `43:00` two-pointer greedy: boats to save people, assign cookies · `47:00` deciding the sort key: a checklist

- **TEACH:** why "sort by end time" is the right key for activity selection (exchange proof from L22 reused); regret/replacement greedy (push then pop the worst — course schedule III); when a greedy needs a heap because the choice set changes.
- **CODE:** minimum meeting rooms three ways; course-schedule-III regret greedy narrated.
- **PROBLEMS:** CSES *Nested Ranges Check/Count*, *Room Allocation*, *Reading Books*; LeetCode 56, 253, 435, 630, 621, 1642, 502.
- **GOAL:** viewer solves any interval problem in under 10 minutes.

---

**L24 · Day 16 · Coordinate Compression, Offline Sorting & Event Sweeps — 45 min**

`00:00` "values up to 10⁹, n up to 10⁵" — the compression signal · `04:00` compression via `sorted(set(...))` + dict / `bisect` · `12:00` compressing pairs and preserving order semantics; handling ties, half-open intervals · `20:00` **event sweep**: turn each object into (+1 at l, −1 at r+1), sort, sweep · `29:00` offline query processing: sort queries by right endpoint, answer in one pass (the pattern behind L104's BIT tricks and L111's Mo) · `38:00` when offline is impossible (forced online / interactive)

- **TEACH:** compression is a bijection to `[0,k)` and must be applied consistently to queries too; the sweep-line skeleton reused in L35, L133, L140; the phrase "if all queries are known in advance" as the trigger for offline thinking.
- **CODE:** compress-and-sweep on a "count intersecting intervals" problem; a generic `compress()` utility for the repo.
- **PROBLEMS:** CSES *Traffic Lights* (with a sorted container substitute), *Nested Ranges Count*; LeetCode 218 (preview), 731, 1288.
- **GOAL:** viewer removes value-range constraints from any problem.

---

**L25 · Day 17 · Contest Day 1 + Full Editorial (Arrays → Greedy) — 90 min**

`00:00` rules: 5 problems, 2 hours, no hints — pause here and compete · `05:00` [timer] · then editorial: `05:00` P1 prefix sums · `20:00` P2 two pointers · `35:00` P3 binary search on answer · `52:00` P4 greedy with proof · `70:00` P5 mixed (compression + sweep) · `84:00` scoreboard analysis, common mistakes, what to re-watch

- **TEACH:** contest habits — read all problems first, sort by difficulty guess, when to switch, penalty math; how to write an editorial for yourself.
- **CODE:** all five solutions typed live at contest pace.
- **PROBLEMS:** a curated 5-problem Codeforces gym/virtual set (linked in repo), ratings 800–1400.
- **GOAL:** 3+/5 solved means Phase 1 is consolidated; otherwise a listed re-watch plan.

---

## PHASE 2 — Linear Data Structures
**Days 18–24 · L26–L35**

---

**L26 · Day 18 · Hashing & Hash Maps: Internals and Anti-Hash Attacks — 50 min**

`00:00` what a hash table actually is · `04:00` hash function → bucket, collisions, chaining vs open addressing; CPython's probing · `14:00` load factor, resizing, amortised O(1); worst case O(n) · `21:00` `__hash__`/`__eq__`, hashable keys, why `hash(int)` is identity-ish in CPython · `28:00` **anti-hash tests on Codeforces**: how hacks against `dict` with integer keys work, and the fix (XOR with a random 64-bit salt, or use a `list` indexed by compressed value) · `38:00` `Counter` and `defaultdict` patterns: frequency, grouping, canonical forms (sorted string, char-count tuple) · `46:00` set operations for CP: dedup, membership, difference

- **TEACH:** the exact reason a solution can pass in practice and get hacked (collision-forcing key sets); randomised salting idiom; grouping by an invariant (anagram signature) as a recurring technique; memory cost of dicts vs lists.
- **CODE:** a hash map implemented from scratch with chaining; a demo where 10⁵ adversarial keys make `dict` quadratic, then the salt fix.
- **PROBLEMS:** CSES *Distinct Numbers*, *Sum of Two Values*; LeetCode 49, 128, 1, 560, 895; a Codeforces problem known for anti-hash hacks.
- **GOAL:** viewer uses dicts confidently and defends them in contests.

---

**L27 · Day 19 · Stacks: Implementation and Core Applications — 40 min**

`00:00` LIFO, and why `list` is already a perfect stack in Python · `04:00` push/pop/peek/empty, and the `IndexError` discipline · `09:00` balanced parentheses, multiple bracket types, longest valid substring · `18:00` expression evaluation: infix → postfix (shunting-yard), postfix evaluation, operator precedence table · `30:00` undo stacks, backtracking state, min-stack (two-stack and encoded-value tricks) · `36:00` recursion ↔ stack equivalence, restated from L6

- **TEACH:** stack invariants; shunting-yard fully derived, not memorised; min-stack with pairs vs the arithmetic trick; when a stack replaces recursion to dodge `RecursionError`.
- **CODE:** shunting-yard calculator supporting `+ - * / ^ ( )` and unary minus; min-stack.
- **PROBLEMS:** LeetCode 20, 32, 155, 150, 224, 227, 71, 394.
- **GOAL:** viewer builds a working expression parser.

---

**L28 · Day 19 · Monotonic Stack: Next Greater Element and the Histogram Family — 55 min**

`00:00` the O(n²) "next greater" problem · `04:00` the monotonic stack invariant (decreasing stack of indices), traced on paper · `13:00` next greater / next smaller / previous greater / previous smaller — one function, four variants, sentinel handling · `24:00` **largest rectangle in histogram**: full derivation with left/right boundary arrays and the single-pass version · `36:00` maximal rectangle in a binary matrix (histogram per row) · `43:00` sum of subarray minimums — the "contribution technique" (count subarrays where each element is the min) · `51:00` amortised O(n) proof; stock span, daily temperatures, trapping rain water

- **TEACH:** the contribution/counting-over-elements reframe, which reappears in combinatorics (L121); strict vs non-strict comparisons and duplicate handling (the classic off-by-one that double-counts); why sentinels of ±∞ simplify boundary logic.
- **CODE:** the four-variant helper; histogram twice (two-array and one-pass); subarray minimum sums with dedup logic explained.
- **PROBLEMS:** LeetCode 496, 503, 739, 84, 85, 907, 42, 1856; CSES *Advertisement* / *Nearest Smaller Values*.
- **GOAL:** viewer recognises monotonic-stack problems from the phrase "nearest greater/smaller".

---

**L29 · Day 20 · Queues, Deques, Circular Buffers — 40 min**

`00:00` FIFO and why `list.pop(0)` is a trap · `04:00` `collections.deque` internals (doubly-linked blocks), O(1) ends, O(n) middle indexing · `12:00` circular queue with a fixed array: head/tail/size arithmetic, full vs empty ambiguity · `22:00` queue via two stacks; stack via two queues (amortised analysis of both) · `31:00` monotonic deque recap; BFS preview — the queue as the engine of level-order traversal · `36:00` priority queue vs queue: choosing by problem phrasing

- **TEACH:** modular index arithmetic; amortised O(1) proof for two-stack queue; where deques appear later (BFS L63, 0-1 BFS L65, DP optimisation L98).
- **CODE:** circular buffer class with asserts; two-stack queue.
- **PROBLEMS:** LeetCode 622, 232, 225, 933, 862; CSES *Josephus Problem II* (with a BIT revisit in L105).
- **GOAL:** correct O(1) queue behaviour in every future graph lesson.

---

**L30 · Day 21 · Linked Lists I: Structure and Core Operations — 45 min**

`00:00` when a linked list beats an array (and why CP rarely uses them, but interviews always do) · `05:00` node class, singly linked list: traverse, insert head/tail/middle, delete by value/position · `18:00` dummy-head technique — the single biggest bug-remover · `24:00` doubly linked list, sentinels, O(1) arbitrary deletion · `33:00` array-based linked lists (`nxt[]`, `prv[]` arrays) — the CP-idiomatic form, far faster in Python · `40:00` complexity table vs dynamic array

- **TEACH:** pointer-rewiring order (why you must save `nxt` before overwriting); dummy nodes for head-modifying operations; the array-of-indices representation used in "remove elements in order" CP problems.
- **CODE:** full singly and doubly linked list classes; the array-based version solving a deletion-order problem.
- **PROBLEMS:** LeetCode 707, 203, 83, 21, 2, 24, 1472.
- **GOAL:** no null-pointer bugs; comfort with pointer surgery.

---

**L31 · Day 21 · Linked Lists II: Cycles, Reversal, and LRU/LFU — 55 min**

`00:00` reversal iteratively (three pointers) and recursively · `10:00` reverse in k-groups, reverse a sublist · `19:00` **Floyd's tortoise and hare**: cycle detection, finding the entry node — with the full mathematical proof of why the second phase works · `32:00` middle node, palindrome check, intersection of two lists, removing the n-th from end · `41:00` merge sort on a linked list in O(n log n) / O(1) extra space · `48:00` **LRU cache** = dict + doubly linked list, and LFU with frequency buckets

- **TEACH:** the Floyd proof (distances a, b, c and the modular argument) — do it properly, it's asked constantly; why merge sort is the sort of choice for lists; `OrderedDict.move_to_end` as the shortcut, plus the from-scratch version interviewers want.
- **CODE:** Floyd both phases; LRU from scratch with a hand-built DLL; LFU.
- **PROBLEMS:** LeetCode 206, 25, 92, 141, 142, 876, 234, 160, 19, 148, 146, 460; CSES cycle-finding on functional graphs (revisit L119).
- **GOAL:** viewer derives Floyd's algorithm on a whiteboard.

---

**L32 · Day 22 · Heaps I: Binary Heap From Scratch — 50 min**

`00:00` the priority-queue abstraction · `03:00` complete binary tree in an array: parent `(i-1)//2`, children `2i+1`, `2i+2` · `10:00` sift-up (insert) and sift-down (extract) with the invariant drawn each step · `22:00` **heapify in O(n)** — the proof by summing heights, done fully · `30:00` heapsort, in-place, and why it's unstable · `36:00` `heapq` API mapped to the from-scratch version; min-heap only → negation for max-heaps, tuple keys and the tie-break trap (unorderable second elements) · `45:00` when a heap is the wrong tool (need deletion by key / order statistics → BIT/treap, L105/L112)

- **TEACH:** heap property vs BST property; sift-down height-sum proof; comparison count vs insert-one-by-one O(n log n); decrease-key absence in `heapq` and the two workarounds (lazy deletion, indexed heap).
- **CODE:** `MinHeap` class with `push`, `pop`, `heapify`, `peek`, tested against `heapq` on random ops; heapsort.
- **PROBLEMS:** CSES *Sliding Window Cost*; LeetCode 703, 1046, 912 (heapsort variant), 215.
- **GOAL:** viewer implements a heap and explains O(n) heapify.

---

**L33 · Day 22 · Heaps II: k-Way Merge, Top-K, Streaming Median, Lazy Deletion — 50 min**

`00:00` heap patterns catalogue · `03:00` merge k sorted lists/arrays with a size-k heap · `12:00` top-k largest / k-th smallest; `nlargest` vs heap-of-size-k vs quickselect — a decision table with timings · `22:00` **two-heap median** of a stream: balance invariant, rebalancing rules · `33:00` lazy deletion pattern (a "deleted" counter dict + cleanup at the top) — how to fake `remove()` · `41:00` two heaps for "min and max" simultaneously; heap + greedy regret pattern recap · `46:00` heap with indices for Dijkstra (forward ref L67)

- **TEACH:** the size-k heap argument for top-k; median invariant proof; lazy deletion amortised cost; when a heap of tuples needs a tie-break counter to stay comparable.
- **CODE:** streaming median class; lazy-deletion heap used for "sliding window minimum with arbitrary removals".
- **PROBLEMS:** LeetCode 23, 295, 480, 373, 632, 767, 1642.
- **GOAL:** viewer picks between heap, sort, and quickselect correctly.

---

**L34 · Day 23 · Intervals & Sweep Line With Data Structures — 50 min**

`00:00` the interval problem taxonomy: merge, intersect, cover, stab, count · `06:00` merge overlapping intervals; insert into sorted intervals; interval intersection of two lists (two pointers) · `18:00` minimum number of points to stab all intervals; minimum intervals to cover a range (greedy + proof) · `28:00` **sweep line with a heap**: max overlap, meeting rooms II, employee free time · `38:00` sweep line with a counter/difference array for integer coordinates (link L13) · `44:00` the skyline problem, fully derived (events + max-heap with lazy deletion)

- **TEACH:** half-open `[l, r)` convention to kill boundary bugs; event ordering when start and end coincide (which comes first, and why it depends on the question); sweep as a template: events → sort → process → maintain structure.
- **CODE:** skyline live; employee free time; a generic `sweep(events, on_add, on_remove)` helper.
- **PROBLEMS:** LeetCode 56, 57, 986, 253, 759, 218, 1229, 452; CSES *Restaurant Customers*, *Room Allocation*.
- **GOAL:** viewer solves the skyline problem unaided.

---

**L35 · Day 24 · Contest Day 2 + Editorial (Linear Data Structures) — 90 min**

`00:00` rules: 5 problems, 2 hours · then editorial: `05:00` P1 monotonic stack · `20:00` P2 heap-greedy · `35:00` P3 sliding window + Counter · `50:00` P4 sweep line · `68:00` P5 linked-list/simulation hybrid · `82:00` mistake review + the "which structure?" flowchart

- **TEACH:** a decision flowchart — need order? need extremes? need range aggregate? need nearest-greater? → structure; how to recover from choosing the wrong structure 40 minutes in.
- **CODE:** five solutions at contest pace.
- **PROBLEMS:** curated set, ratings 1100–1600.
- **GOAL:** 3+/5, and a printed structure-selection flowchart.

---

## PHASE 3 — Strings: From Basics to Suffix Structures
**Days 25–32 · L36–L46**

---

**L36 · Day 25 · String Fundamentals & Python-Specific Traps — 45 min**

`00:00` strings as immutable sequences · `04:00` slicing, `find`, `count`, `split`, `strip`, `replace` — and their O(n) costs · `12:00` the quadratic concatenation trap; `join`, `io.StringIO`, `list` of chars · `19:00` `ord`/`chr`, alphabet indexing `ord(c)-97`, frequency arrays of size 26 vs Counter (speed comparison) · `27:00` palindromes: two-pointer check, "almost palindrome", palindrome by deleting one char · `34:00` anagrams: sorted signature vs count signature; grouping · `40:00` lexicographic order, comparison of strings, `min`/`max` on strings, next permutation on strings

- **TEACH:** immutability consequences for algorithm design; why 26-length lists beat dicts in hot loops; canonical forms as a hashing idea (→ L37); `str` vs `bytes` in fast I/O (bytes are faster and comparable).
- **CODE:** frequency-array vs Counter benchmark; palindrome family; next lexicographic permutation from scratch.
- **PROBLEMS:** CSES *Palindrome Reorder*, *Creating Strings*; LeetCode 125, 680, 242, 49, 5 (brute now, Manacher in L40), 31.
- **GOAL:** fluent, non-quadratic string handling.

---

**L37 · Day 26 · String Hashing (Polynomial Rolling Hash) & Rabin–Karp — 55 min**

`00:00` "compare substrings in O(1)" · `04:00` polynomial hash definition, choice of base and modulus (prime near 2⁶¹, or double hashing with two 10⁹-ish mods) · `14:00` prefix hashes + powers → substring hash in O(1), derived on screen · `24:00` **Rabin–Karp** pattern matching, rolling update, expected O(n+m) · `33:00` collision probability, birthday paradox math, why single 10⁹ mod is hackable and double hashing or a random base fixes it · `42:00` applications: count distinct substrings of length k, longest common substring via binary search + hashing, palindrome check by hashing forward/backward, 2D pattern matching by hashing rows · `52:00` hashing vs KMP vs Z: a decision table

- **TEACH:** the exact modular arithmetic (negative mod handling, precomputed inverse powers or right-aligned hashes); randomising the base per run to defeat anti-hash tests; the "binary search the answer + hash set" combo, which is a top-5 CP pattern.
- **CODE:** `Hashing` class (prefix hashes, `get(l, r)`, double-mod option); longest common substring of two strings via binary search + hash sets.
- **PROBLEMS:** CSES *String Matching*, *Finding Borders*, *Finding Periods*, *Longest Palindrome*; Codeforces hashing classics; LeetCode 1044, 187, 214.
- **GOAL:** viewer treats substring equality as O(1).

---

**L38 · Day 27 · KMP and the Prefix Function — 55 min**

`00:00` the naive matcher's O(nm) worst case, demonstrated · `05:00` **prefix function π** defined: longest proper prefix that is also a suffix · `12:00` computing π in O(n): the incremental argument with the fallback loop, traced fully on `"aabaaab"` · `26:00` amortised linear proof (π increases by ≤1 per step, total decrease bounded) · `32:00` pattern matching with `pattern + '#' + text` · `39:00` applications: shortest period of a string, count occurrences of each prefix, string compression, borders enumeration · `48:00` the KMP automaton (transition table) and its use in DP over strings (forward ref L88)

- **TEACH:** the failure-link intuition ("where do I retry without re-reading?"); why the separator must not appear in either string; period = n − π[n] when n % (n − π[n]) == 0; building the automaton in O(n·Σ).
- **CODE:** `prefix_function`, `kmp_search`, `kmp_automaton`; period computation.
- **PROBLEMS:** CSES *Finding Borders*, *Finding Periods*, *Required Substring* (with L92); LeetCode 28, 214, 459, 1392, 686.
- **GOAL:** viewer derives π rather than memorising the code.

---

**L39 · Day 27 · The Z-Function — 45 min**

`00:00` Z defined: longest common prefix of s and s[i:] · `05:00` naive O(n²), then the [l, r] window optimisation with all three cases drawn · `18:00` linearity proof · `24:00` Z-based pattern matching; Z vs π equivalence (convert one to the other) · `31:00` applications: distinct substrings count intuition, string periodicity, compression, "is t a rotation of s", longest palindromic prefix combined with reverse · `40:00` when Z beats KMP for readability

- **TEACH:** the z-box maintenance rules stated as invariants; converting between Z and π both ways as an exercise; the rotation trick via `s+s`.
- **CODE:** `z_function` written twice (naive for testing, fast for use) and stress-tested against each other.
- **PROBLEMS:** CSES *Finding Patterns*, *String Matching*; Codeforces Z-function set; LeetCode 796, 1392.
- **GOAL:** Z-function implemented from memory, correctly.

---

**L40 · Day 28 · Manacher's Algorithm: All Palindromic Substrings in O(n) — 50 min**

`00:00` palindrome problems inventory · `04:00` expand-around-centre O(n²) baseline and the odd/even split · `12:00` the `#a#b#` transformation trick that unifies odd and even · `19:00` **Manacher**: mirror property, right boundary, the three cases with drawings · `33:00` linear-time proof · `38:00` outputs: radius array → longest palindromic substring, count of all palindromic substrings, palindromic prefix/suffix, "can it be split into k palindromes" (with DP, L87) · `46:00` Manacher vs hashing vs Eertree (palindromic tree) — brief comparison

- **TEACH:** the mirror-index reasoning in full; converting radii back to original indices without off-by-one errors; counting palindromic substrings as sum of radii.
- **CODE:** Manacher with the transformed string; count-all-palindromes; stress-tested against the O(n²) version.
- **PROBLEMS:** CSES *Longest Palindrome*; LeetCode 5, 647, 214, 1745; Codeforces palindrome-counting problems.
- **GOAL:** O(n) palindrome structure, fully understood.

---

**L41 · Day 29 · Trie (Prefix Tree) — 50 min**

`00:00` why a trie beats a hash set for prefix queries · `04:00` node design: dict-of-children vs 26-array vs flat arrays (`nxt[node][c]`) — memory/speed comparison in Python · `14:00` insert, search, `startsWith`, delete (with counters), count words with prefix · `26:00` autocomplete / longest common prefix of a set · `33:00` word break and word search II (trie + backtracking/DP) · `41:00` compressed trie / radix tree idea, and where suffix trees come from (→ L45) · `46:00` memory blow-ups and the flat-array fix for 10⁶ nodes in Python

- **TEACH:** the flat-array trie (`trie = [[0]*26]`, append rows) as the only trie that survives Python performance limits; storing counts at nodes vs terminal flags; deletion by decrementing counts rather than removing nodes.
- **CODE:** dict-based `Trie` class, then the flat-array CP version; word search II.
- **PROBLEMS:** CSES *Word Combinations*; LeetCode 208, 211, 212, 139, 648, 720, 1268.
- **GOAL:** two trie implementations, and knowing when to use which.

---

**L42 · Day 29 · Binary Trie & XOR Problems — 50 min**

`00:00` XOR as bitwise independence · `04:00` binary trie over the bits of numbers (MSB→LSB), insert/query · `13:00` **maximum XOR pair**: greedy descent taking the opposite bit · `22:00` maximum XOR subarray using prefix XOR + trie · `30:00` count pairs with XOR < k / in a range; k-th maximum XOR · `38:00` deletions via counts; persistent binary trie for range queries (preview L109) · `44:00` XOR basis teaser: maximum XOR of any subset (full theory L125)

- **TEACH:** why the greedy descent is optimal (bit significance dominates); prefix-XOR reduction of subarray problems to pair problems; fixed bit-width discipline (pad to 30 or 60 bits).
- **CODE:** `BinaryTrie` with insert/erase/max_xor/count_less; maximum XOR subarray.
- **PROBLEMS:** LeetCode 421, 1707, 1938, 2479; CSES/Codeforces XOR classics.
- **GOAL:** any XOR-pair problem becomes routine.

---

**L43 · Day 30 · Aho–Corasick: Multi-Pattern Matching — 55 min**

`00:00` matching k patterns at once · `04:00` build the trie of patterns · `10:00` **suffix links** (failure links) via BFS — the generalisation of KMP's π, derived side by side with L38 · `22:00` output/dictionary links for reporting all matches · `30:00` automaton form: `go[node][c]` precomputed for O(1) transitions · `38:00` complexity O(Σ|pᵢ| · Σ + |text| + matches) · `43:00` applications: forbidden-substring counting with DP on automaton states (links to L88/L92), spam filtering, count occurrences of each pattern · `50:00` when hashing is simpler

- **TEACH:** the BFS order requirement for link construction; DP over (position, automaton node) as the reason Aho–Corasick appears in hard problems; memory management for large alphabets.
- **CODE:** full Aho–Corasick class; "count strings of length n avoiding all patterns" DP on camera.
- **PROBLEMS:** CSES *Counting Patterns*, *Pattern Positions*; Codeforces Aho–Corasick DP problems; LeetCode 1408 (simple), 616.
- **GOAL:** viewer builds the automaton and runs DP on it.

---

**L44 · Day 31 · Suffix Array: Construction and LCP — 60 min**

`00:00` what a suffix array is and why it replaces suffix trees in practice · `05:00` naive O(n² log n) construction · `10:00` **O(n log² n) doubling** with sorting by (rank, rank+2^k) pairs — the cyclic-shift framing, drawn as a table · `26:00` O(n log n) with counting sort inside the doubling (radix version), and honest Python timings · `36:00` **Kasai's algorithm** for the LCP array in O(n), with the `h ≥ h_prev − 1` proof · `48:00` `sa` + `lcp` as a "sorted dictionary of all substrings" mental model · `54:00` Python reality check: for n ≤ 2·10⁵ use the doubling version; beyond that, consider hashing or PyPy

- **TEACH:** the sentinel character; rank arrays and re-ranking; why pairs of ranks give the next power of two; Kasai's amortised argument in full.
- **CODE:** `suffix_array(s)` doubling + `kasai(s, sa)`, stress-tested against `sorted(range(n), key=lambda i: s[i:])`.
- **PROBLEMS:** CSES *Distinct Substrings*, *Repeating Substring*, *Substring Order I*; Codeforces EDU "Suffix Array" steps 1–2.
- **GOAL:** a working suffix array + LCP in the viewer's library.

---

**L45 · Day 31 · Suffix Array Applications & Automaton Overview — 50 min**

`00:00` the application catalogue · `03:00` count distinct substrings = n(n+1)/2 − Σ lcp · `10:00` longest repeated substring; longest common substring of two strings (concatenate with separator, scan LCP with origin check) · `20:00` k-th lexicographic substring; substring order queries · `28:00` LCP of arbitrary suffixes = RMQ over the LCP array (sparse table, forward ref L103) · `34:00` pattern search via binary search on the suffix array in O(m log n) · `40:00` **suffix automaton / suffix tree**: what they are, what they add (online construction, distinct-substring counting, minimal automaton), when to reach for them, with a pointer to a from-scratch build in the repo · `47:00` decision guide: hashing vs Z/KMP vs suffix array vs automaton

- **TEACH:** the separator-and-origin technique for two-string problems; RMQ-on-LCP as the bridge between strings and range-query structures; honest advice that suffix automata are rarely needed below CF 2200.
- **CODE:** longest common substring; k-th substring; binary-search pattern matching.
- **PROBLEMS:** CSES *Substring Distribution*, *Substring Order II*, *String Functions*; LeetCode 1044, 718.
- **GOAL:** viewer solves suffix-array applications by combining primitives.

---

**L46 · Day 32 · Contest Day 3 + Editorial (Strings) — 90 min**

`00:00` rules: 5 string problems, 2.5 hours · editorial: `05:00` P1 hashing + binary search · `22:00` P2 prefix function application · `38:00` P3 trie/XOR · `55:00` P4 Manacher or palindromic DP · `72:00` P5 suffix array application · `85:00` "which string tool?" decision tree, common bugs (mod arithmetic, sentinel, off-by-one)

- **TEACH:** picking the simplest tool that fits; how to verify string algorithms with the L10 stress harness (always compare against `s[i:j]` brute force).
- **CODE:** five solutions live.
- **PROBLEMS:** curated string set, ratings 1300–1900.
- **GOAL:** 3+/5 and a personal `strings.py` library file.

---

## PHASE 4 — Recursion, Backtracking, Divide & Conquer, Trees
**Days 33–43 · L47–L61**

---

**L47 · Day 33 · Generating Subsets, Permutations, Combinations — 45 min**

`00:00` the three combinatorial generators · `03:00` subsets: recursive include/exclude tree, bitmask loop, `itertools.combinations` — all three, with the recursion tree drawn · `14:00` permutations: swap-based, used-array based, Heap's algorithm mention; handling duplicates by sorting + skip rule · `26:00` combinations C(n,k) and the "choose from index i onward" pattern · `33:00` combination sum with repetition; partitions of an integer · `39:00` counting vs generating: when 2ⁿ is fine (n ≤ 22) and when to count instead (→ DP, L81)

- **TEACH:** the canonical "start index" parameter that prevents duplicate sets; duplicate-skip condition `if i > start and a[i] == a[i-1]: continue` and why it's correct only on sorted input; complexity O(n·2ⁿ) including output cost.
- **CODE:** all generators; duplicate handling demonstrated with a failing then fixed case.
- **PROBLEMS:** CSES *Creating Strings*, *Apple Division*, *Two Sets*; LeetCode 78, 90, 46, 47, 39, 40, 77, 216.
- **GOAL:** all three generators written without hesitation.

---

**L48 · Day 33 · Backtracking I: Search With Pruning — 55 min**

`00:00` backtracking = DFS over a decision tree with undo · `04:00` the template: choose → explore → un-choose; why undo must exactly mirror choose · `12:00` **N-Queens**: column/diagonal sets, the `r-c` and `r+c` diagonal trick, counting vs listing · `26:00` **Sudoku solver**: candidate sets per row/col/box, most-constrained-cell heuristic · `40:00` word search on a grid with visited marking and in-place mutation · `48:00` pruning taxonomy: feasibility pruning, bound pruning, symmetry breaking, ordering heuristics — each with a measured node-count reduction

- **TEACH:** measuring pruning effectiveness by counting visited nodes before/after; symmetry breaking (fix the first queen to half the board); why in-place mutation + restore beats copying state in Python.
- **CODE:** N-Queens (count for n=8..12 with timings), Sudoku with MRV heuristic.
- **PROBLEMS:** CSES *Chessboard and Queens*, *Grid Paths* (the 48-move pruning problem); LeetCode 51, 52, 37, 79, 212, 131, 93.
- **GOAL:** viewer prunes deliberately and measures the effect.

---

**L49 · Day 34 · Backtracking II: Branch & Bound, Meet in the Middle, Iterative Deepening — 50 min**

`00:00` when pruning isn't enough · `04:00` **branch and bound**: maintain best-so-far, compute an optimistic bound, cut · `14:00` bin packing / partition to k equal subsets with bounds and memo of visited masks · `24:00` **meet in the middle**: split into halves, enumerate 2^(n/2) each, combine by sorting/hashing/two pointers — subset-sum in O(2^(n/2) log) · `38:00` bidirectional BFS as MITM on graphs (forward ref L63) · `43:00` iterative deepening DFS and IDA* sketch; when depth limits beat breadth
- **TEACH:** bound quality vs computation cost trade-off; the combine step as the real skill in MITM (sort one half + binary search / two pointers); memoising visited states with `frozenset`/int masks.
- **CODE:** subset-sum MITM for n=40; partition-to-k-subsets with bounding.
- **PROBLEMS:** CSES *Meet in the Middle*, *Elevator Rides*; LeetCode 698, 473, 1723, 805.
- **GOAL:** viewer solves n=40 subset problems.

---

**L50 · Day 35 · Divide & Conquer as a Paradigm — 50 min**

`00:00` divide, conquer, combine — and the recurrence it creates · `05:00` **master theorem** with all three cases, applied to 5 recurrences on screen · `16:00` recursion-tree method for non-standard recurrences; Akra–Bazzi mention · `22:00` D&C examples: binary search, merge sort, quickselect, exponentiation by squaring · `31:00` Karatsuba multiplication derived (3 multiplications instead of 4) · `40:00` Strassen mention; closest pair of points sketch (full in L132); D&C on trees preview (centroid, L60) · `46:00` D&C optimisation in DP preview (L99); CDQ divide & conquer preview (L136)

- **TEACH:** identifying the combine cost as the deciding factor; why some problems are D&C-shaped even without an obvious split (answer-splitting vs input-splitting); solving recurrences by substitution.
- **CODE:** Karatsuba on big integers vs Python's built-in; fast exponentiation both recursive and iterative.
- **PROBLEMS:** CSES *Exponentiation I/II*; LeetCode 50, 241, 932, 240; inversion counting revisited from L17.
- **GOAL:** viewer solves recurrences and recognises D&C structure.

---

**L51 · Day 36 · Binary Trees: Representation and All Traversals — 50 min**

`00:00` tree terminology: root, depth, height, ancestor, subtree, leaf, complete/perfect/balanced/degenerate · `08:00` node class; array representation for heaps/segment trees; adjacency for general trees · `14:00` preorder, inorder, postorder — recursive, then **iterative with an explicit stack** (all three, since Python recursion dies at depth 10⁴) · `28:00` level-order BFS with level separation · `35:00` **Morris traversal** in O(1) space with threaded links · `44:00` building a tree from preorder+inorder, from level order, from a parent array

- **TEACH:** the postorder-iterative pattern (two stacks vs reversed preorder vs state flags); inorder of a BST is sorted (the fact that powers half of Phase 4); recursion-limit workaround in practice.
- **CODE:** all six traversal variants tested for equality on random trees; build-from-traversals.
- **PROBLEMS:** LeetCode 94, 144, 145, 102, 105, 106, 889, 1008, 449.
- **GOAL:** iterative traversals written from memory.

---

**L52 · Day 36 · Binary Tree Problem Patterns — 55 min**

`00:00` the "return-from-child" pattern: what each recursive call should return · `06:00` height, balanced check, count nodes, count leaves · `14:00` **diameter** via height (the two-value return trick), max path sum · `26:00` views: left/right/top/bottom, boundary traversal, vertical order · `36:00` LCA of a binary tree (the naive recursive version), path to a node, distance between nodes · `45:00` serialise/deserialise; subtree checks; symmetric/mirror; invert · `51:00` the universal tree-recursion template card

- **TEACH:** designing the return value (often a tuple: "best-through-me" and "best-anywhere-below"); why global-vs-return matters for testability; converting each pattern to iterative if depth is large.
- **CODE:** diameter and max-path-sum derived from the same skeleton; serialise/deserialise.
- **PROBLEMS:** LeetCode 104, 110, 543, 124, 236, 297, 199, 987, 101, 226, 863, 662.
- **GOAL:** viewer designs the recursive contract before coding.

---

**L53 · Day 37 · Binary Search Trees — 50 min**

`00:00` the BST invariant · `04:00` search, insert, delete (all three delete cases, drawn), predecessor/successor · `18:00` inorder = sorted; validating a BST (bounds method vs inorder method, and the classic wrong solution) · `27:00` k-th smallest with subtree sizes (order-statistic tree) · `35:00` range queries, floor/ceil, closest value, trimming, converting sorted array ↔ balanced BST · `44:00` why an unbalanced BST degenerates to O(n), motivating L54

- **TEACH:** the two-child delete via successor replacement; augmenting nodes with subtree size and keeping it correct under insert/delete; BST vs hash map trade-offs (ordered operations).
- **CODE:** full BST class with size augmentation and `kth()`; validation both ways.
- **PROBLEMS:** LeetCode 700, 701, 450, 98, 230, 235, 108, 285, 270, 938, 1038.
- **GOAL:** a correct, augmented BST implementation.

---

**L54 · Day 38 · Balanced BSTs: AVL, Red-Black Concepts, and a Working Treap — 60 min**

`00:00` why balance matters, with a degenerate-insert demo · `05:00` rotations (left/right) derived from the invariant · `13:00` **AVL**: balance factors, the four rebalance cases, O(log n) height proof · `27:00` red-black trees: the five properties and why they give O(log n) — concepts only, no code (be honest about it) · `35:00` **treap**: BST by key, heap by random priority; expected O(log n) proof sketch · `44:00` treap `split`/`merge` — the two primitives that replace insert/delete/rotate · `54:00` what treaps buy you in CP: ordered multiset, k-th element, range reversal (→ L112)

- **TEACH:** rotations as invariant-preserving local surgery; randomisation replacing explicit balancing; why Python has no built-in balanced BST and the practical alternatives (BIT over values, `sortedcontainers` where allowed, treap otherwise).
- **CODE:** AVL insert with all four cases; treap with split/merge and `kth`.
- **PROBLEMS:** LeetCode 1046 (alternative framing), 220, 715; CSES *Salary Queries* (BIT version in L105, treap version here).
- **GOAL:** a working treap in the library.

---

**L55 · Day 39 · Trees as Graphs: Rooting, DFS Order, Euler Tour — 50 min**

`00:00` a tree is a connected acyclic graph: n−1 edges, unique paths · `05:00` adjacency-list input parsing for trees; 1-indexed conventions · `10:00` rooting a tree: parent, depth, subtree size via one DFS · `18:00` **iterative DFS for trees** (the pattern that survives n=2·10⁵ in Python) — written carefully, twice: pre-order pass and post-order accumulation via reversed order · `30:00` **Euler tour / flattening**: `tin`/`tout`, and the fact that a subtree is a contiguous range · `40:00` ancestor test in O(1) with tin/tout; mapping subtree queries to array range queries (the bridge to Phase 7) · `46:00` BFS on trees, level sizes, bipartite colouring of a tree

- **TEACH:** why flattening is the single most valuable tree technique (subtree → range); the reversed-BFS-order trick for bottom-up accumulation without recursion; handling forests and multiple test cases without resetting O(n) arrays wrongly.
- **CODE:** `root_tree()` returning parent/depth/size/order; Euler tour with tin/tout; subtree-sum queries on the flattened array.
- **PROBLEMS:** CSES *Subordinates*, *Tree Matching*, *Subtree Queries* (revisit in L105), *Distinct Colors* (revisit L59).
- **GOAL:** iterative tree DFS and Euler tour as reflexes.

---

**L56 · Day 39 · Tree Diameter, Centroid, and Rerooting Basics — 50 min**

`00:00` three ways to find the **diameter**: two BFS passes (with proof), DP with two deepest children, and via centroid · `16:00` the two-BFS correctness proof, done properly · `22:00` eccentricity of every node = max distance in either direction → the rerooting idea · `30:00` **centroid** of a tree: definition, existence proof (subtree ≤ n/2), O(n) finding · `40:00` tree centre vs centroid vs barycentre — the distinction people get wrong · `45:00` all-nodes-farthest-distance in O(n) (down + up DP) — the appetiser for L90

- **TEACH:** why two-BFS fails on general graphs but works on trees; centroid existence proof; the down/up decomposition that generalises to rerooting DP.
- **CODE:** diameter both ways with cross-checks; centroid finder; `dist_to_farthest[]` for all nodes.
- **PROBLEMS:** CSES *Tree Diameter*, *Tree Distances I/II*, *Finding a Centroid*; LeetCode 310, 543, 1245.
- **GOAL:** three diameter algorithms and a correct centroid routine.

---

**L57 · Day 40 · LCA I: Binary Lifting — 55 min**

`00:00` the LCA problem and its query volume · `04:00` naive walk-up O(n); the depth-equalise idea · `10:00` **binary lifting** table `up[k][v]` = 2^k-th ancestor: build in O(n log n) with `up[k][v] = up[k-1][up[k-1][v]]` · `22:00` k-th ancestor query in O(log n) · `28:00` LCA query: lift to equal depth, then descend the powers while ancestors differ · `38:00` distance between nodes = depth u + depth v − 2·depth LCA · `43:00` lifting with aggregates: max/min/sum edge on a path in O(log n) · `50:00` memory layout in Python (list of lists vs flat list) and iterative construction

- **TEACH:** the "descend from the highest power" loop and why the final step gives the LCA's child; augmenting the lifting table with any associative operation; jump pointers on functional graphs (successor after k steps) — the same table.
- **CODE:** `LCA` class (build, kth_ancestor, lca, dist, path_max); tested against a naive LCA.
- **PROBLEMS:** CSES *Company Queries I/II*, *Distance Queries*, *Planets Queries I*; LeetCode 1483, 236.
- **GOAL:** binary lifting written from scratch in 10 minutes.

---

**L58 · Day 41 · LCA II: Euler Tour + Sparse Table, and Applications — 50 min**

`00:00` LCA as a range-minimum problem · `05:00` the Euler tour of depths; LCA(u,v) = argmin depth in the tour range · `14:00` sparse table for O(1) RMQ (full construction here; general theory in L103) · `24:00` O(n log n) build / O(1) query vs binary lifting's O(log n) query — a benchmark · `31:00` applications: path decomposition into two upward paths, "is w on the path u→v", meeting point of three nodes, k-th node on a path (with lifting) · `41:00` auxiliary/virtual trees (compressed tree of k marked nodes) — a powerful trick worth knowing · `47:00` offline LCA with DSU (Tarjan's) mention

- **TEACH:** the tour-index bookkeeping (`first[v]`); the three-node meeting-point formula; virtual tree construction via sorting by tin + LCA of consecutive nodes.
- **CODE:** Euler+sparse-table LCA; "is w on path u-v" predicate; virtual tree builder.
- **PROBLEMS:** CSES *Distance Queries*, *Counting Paths* (with L59/L107); Codeforces virtual-tree problems.
- **GOAL:** two LCA implementations and confident path reasoning.

---

**L59 · Day 41 · Small-to-Large Merging (DSU on Tree) — 50 min**

`00:00` the problem: per-subtree set/counter queries · `05:00` naive merge O(n²); **small-to-large**: always merge the smaller set into the larger · `13:00` the O(n log n) proof (each element moves ≤ log n times) — done fully, it's a beautiful argument · `22:00` implementation with dicts/sets and pointer swapping (`if len(a) < len(b): a, b = b, a`) · `31:00` distinct colours in each subtree; most frequent value per subtree · `38:00` **DSU on tree (Sack)**: the heavy-child-keep technique, O(n log n) with a global counter array · `46:00` when to prefer Euler tour + Mo's (L111) or merge-sort trees (L108) instead

- **TEACH:** why keeping the heavy child's structure and re-adding light children costs O(n log n); reusing one global array instead of per-node dicts; the identical argument's appearance in HLD and treap merging.
- **CODE:** small-to-large distinct colours; the Sack version of the same problem, with timings.
- **PROBLEMS:** CSES *Distinct Colors*; Codeforces "Lomsat gelral"-style subtree-mode problems; LeetCode 2003.
- **GOAL:** viewer proves and implements small-to-large.

---

**L60 · Day 42 · Centroid Decomposition — 55 min**

`00:00` counting paths through a tree in near-linear time · `05:00` the decomposition: find centroid, solve for paths through it, recurse on components · `15:00` O(log n) depth proof; the "removed" marking and recomputed sizes · `25:00` the per-centroid counting routine (collect depths, count pairs with depth sum ≤ k via sorting/two pointers, subtract same-branch pairs) · `38:00` centroid tree as a structure: ancestors of v in the centroid tree are O(log n), enabling "nearest marked node" queries · `48:00` complexity O(n log n) or O(n log² n) depending on the per-level work

- **TEACH:** the inclusion–exclusion over branches that prevents double counting; the centroid-tree-ancestor property that makes dynamic distance queries possible; recognising "count pairs/paths with a distance property" as the signal.
- **CODE:** centroid decomposition skeleton + "count paths of length ≤ k"; nearest-marked-node with the centroid tree.
- **PROBLEMS:** CSES *Fixed-Length Paths I/II*; Codeforces *Xenia and Tree* (nearest red node); classic path-counting problems.
- **GOAL:** viewer implements centroid decomposition for a path-counting problem.

---

**L61 · Day 43 · Contest Day 4 + Editorial (Trees & Recursion) — 90 min**

`00:00` rules: 5 problems, 2.5 hours · editorial: `05:00` P1 tree DFS/flattening · `20:00` P2 LCA application · `36:00` P3 backtracking with pruning · `52:00` P4 subtree aggregation (small-to-large) · `70:00` P5 diameter/rerooting variant · `84:00` the tree-technique decision tree; recursion-limit incident review

- **TEACH:** choosing between lifting, Euler-tour, flattening, and decomposition by query type; the checklist for tree input parsing bugs.
- **CODE:** five solutions live, all iterative where depth could exceed 10⁴.
- **PROBLEMS:** curated tree set, ratings 1400–1900.
- **GOAL:** 3+/5 and a `trees.py` library file.

---

## PHASE 5 — Graphs
**Days 44–56 · L62–L80**

---

**L62 · Day 44 · Graph Representations & Input Handling — 45 min**

`00:00` vocabulary: directed/undirected, weighted, simple, multigraph, degree, path, cycle, connected, DAG, tree, bipartite · `10:00` adjacency matrix (O(V²) memory, O(1) edge test) vs **adjacency list** (O(V+E)) vs edge list — with a memory table for V=10⁵ · `20:00` Python-idiomatic adjacency: list of lists, `defaultdict(list)`, and the **CSR / flat-array** form (`head`, `nxt`, `to`) that is 3–5× faster · `31:00` reading m edges fast with the bulk reader from L2; 0- vs 1-indexing discipline · `37:00` self-loops, multi-edges, and the bugs they cause · `41:00` graph properties: handshake lemma, edges in a tree, max edges in a simple graph

- **TEACH:** choosing representation by density; building CSR in two passes (count degrees, prefix sums, fill); why `defaultdict` in a hot loop costs you.
- **CODE:** three representations of the same graph; CSR builder benchmarked against list-of-lists at V=2·10⁵.
- **PROBLEMS:** CSES *Building Roads* (parse-heavy), plus a degree/handshake warm-up.
- **GOAL:** graph input parsed correctly and fast, every time.

---

**L63 · Day 44 · BFS and Unweighted Shortest Paths — 55 min**

`00:00` BFS as level-by-level exploration · `04:00` the algorithm with `deque`, `dist[]`, `parent[]`; visited-on-push (never visited-on-pop) · `14:00` proof that BFS gives shortest paths in unweighted graphs (induction on distance) · `21:00` **path reconstruction** via parent array · `27:00` **multi-source BFS**: seed all sources at distance 0 (rotting oranges, nearest exit, "distance to nearest X") · `36:00` BFS on grids: 4/8 directions, bounds checking, direction arrays · `43:00` bidirectional BFS and its √ improvement; BFS on implicit state graphs (word ladder, jump games, puzzle states) · `50:00` complexity O(V+E) and where Python loses time

- **TEACH:** the visited-on-push invariant with a demo of the bug when violated; multi-source as a super-source reduction; encoding states as tuples/ints for implicit graphs.
- **CODE:** BFS with reconstruction; multi-source grid BFS; word ladder with a preprocessing trick.
- **PROBLEMS:** CSES *Message Route*, *Labyrinth*, *Counting Rooms*, *Monsters*; LeetCode 102, 127, 994, 542, 1091, 752.
- **GOAL:** BFS + reconstruction + multi-source, all fluent.

---

**L64 · Day 45 · DFS: Components, Cycle Detection, Bipartiteness — 55 min**

`00:00` DFS recursive, then **iterative with an explicit stack** (mandatory in Python) · `12:00` the three-colour scheme (white/grey/black) and what each transition means · `20:00` connected components in undirected graphs; counting, labelling, component sizes · `27:00` **cycle detection**: undirected (visited neighbour that isn't the parent, with multi-edge care) vs directed (grey node = back edge) · `38:00` finding and printing an actual cycle · `45:00` **bipartite check** / 2-colouring via BFS or DFS, odd-cycle certificate · `51:00` DFS tree edge classification (tree/back/forward/cross) — the foundation for L73/L74

- **TEACH:** why the parent check fails with parallel edges and how to fix it (track edge index); producing the cycle as a certificate, not just a boolean; the grey-node argument for directed cycles.
- **CODE:** iterative DFS; component labeller; directed cycle extractor; bipartite checker with certificate.
- **PROBLEMS:** CSES *Building Teams*, *Round Trip*, *Round Trip II*, *Counting Rooms*; LeetCode 200, 547, 785, 207, 802.
- **GOAL:** iterative DFS and both cycle detections, with certificates.

---

**L65 · Day 46 · Grids, 0-1 BFS, and Implicit State-Space Search — 50 min**

`00:00` grids as graphs: implicit adjacency, no edge list needed · `06:00` flood fill, island counting, perimeter/area, multi-layer grids (keys/doors as extra state dimensions) · `16:00` **0-1 BFS** with a deque: push-front for weight 0, push-back for weight 1 — correctness argument · `28:00` when 0-1 BFS replaces Dijkstra (weights in {0,1}, or {0,k}) · `33:00` small-weight BFS with buckets (Dial's algorithm) · `39:00` state-space search: encode the state, define transitions, BFS/Dijkstra over states (sliding puzzle, minimum moves with modes) · `46:00` A* / heuristics — one paragraph, honestly scoped

- **TEACH:** state = (position, extra flags) and why extra dimensions are the answer to "with at most k obstacles removed" problems; deque invariant proof for 0-1 BFS; memory estimates for large state spaces.
- **CODE:** 0-1 BFS on a grid with removable walls; sliding puzzle solver with state hashing.
- **PROBLEMS:** CSES *Monsters*, *Labyrinth*; LeetCode 1091, 1293, 864, 773, 934, 2290.
- **GOAL:** viewer designs state spaces and applies 0-1 BFS.

---

**L66 · Day 47 · Topological Sort and DAG DP — 50 min**

`00:00` DAGs and dependency ordering · `04:00` **Kahn's algorithm** (in-degree queue), cycle detection as a byproduct · `14:00` DFS-based topological order (reverse postorder), and the proof of correctness · `22:00` lexicographically smallest topological order (heap instead of queue); counting topological orders (bitmask DP, → L91) · `29:00` **DP on a DAG**: longest path, number of paths, min/max cost — all in topological order · `40:00` course scheduling, build systems, dependency resolution; detecting the impossible case · `45:00` longest path in a general graph is NP-hard — the contrast that makes DAGs special

- **TEACH:** why DP needs a DAG (no cyclic dependencies); memoised DFS as an implicit topological order; handling multiple valid orders and problems that require a specific one.
- **CODE:** Kahn + DFS versions; longest path and path counting on a DAG.
- **PROBLEMS:** CSES *Course Schedule*, *Longest Flight Route*, *Game Routes*, *Investigation*; LeetCode 207, 210, 269, 329, 1462, 1857.
- **GOAL:** topological sort both ways, plus DAG DP.

---

**L67 · Day 47 · Dijkstra's Algorithm — 55 min**

`00:00` weighted shortest paths, non-negative weights · `05:00` the greedy invariant and its proof (why the popped minimum is final) · `14:00` implementation with `heapq`: lazy deletion via the `if d > dist[v]: continue` guard — the single most important line · `24:00` O((V+E) log V) analysis; array-based O(V²) for dense graphs · `31:00` path reconstruction; **why Dijkstra fails with negative edges**, shown with a concrete counterexample · `38:00` variants: k-th shortest path, second shortest path, count of shortest paths, min-max edge on a path, Dijkstra on state graphs (position, fuel/time/parity) · `50:00` Python performance: tuples in the heap, avoiding `dist` dict, PyPy notes

- **TEACH:** lazy vs eager (decrease-key) heaps; multi-dimensional Dijkstra as the answer to "shortest path with k discounts"; counting shortest paths with a parallel counter array.
- **CODE:** Dijkstra with reconstruction; "count shortest paths + min/max flights" combined-state version.
- **PROBLEMS:** CSES *Shortest Routes I*, *Flight Discount*, *Flight Routes*, *Investigation*; LeetCode 743, 787, 1631, 778, 1514, 505.
- **GOAL:** Dijkstra with all four common variants.

---

**L68 · Day 48 · Bellman–Ford, Negative Cycles, SPFA — 50 min**

`00:00` when weights go negative · `05:00` **Bellman–Ford**: V−1 relaxation rounds, why V−1 is exactly enough (shortest simple path has ≤ V−1 edges) · `16:00` **negative cycle detection** in round V; extracting the cycle via parent pointers and a V-step walk-back · `26:00` early termination when no relaxation happens; O(VE) cost · `32:00` shortest path with exactly/at most k edges (the layered DP form of Bellman–Ford) · `39:00` **SPFA** (queue-based) — fast in practice, O(VE) worst case, and the honest warning that it gets killed on Codeforces · `45:00` applications: arbitrage detection, difference constraints (`x_j − x_i ≤ c` → edge), feasibility of constraint systems

- **TEACH:** the difference-constraints reduction (a genuinely underused CP weapon); why "reachable from a negative cycle" needs a second propagation pass; layered-graph interpretation of Bellman–Ford as DP over edge count.
- **CODE:** Bellman–Ford with cycle extraction; currency arbitrage; difference-constraint solver.
- **PROBLEMS:** CSES *Cycle Finding*, *High Score*; LeetCode 787 (k-edge version), 1928.
- **GOAL:** negative cycles handled and difference constraints recognised.

---

**L69 · Day 49 · All-Pairs Shortest Paths: Floyd–Warshall and Johnson — 50 min**

`00:00` the APSP problem · `04:00` **Floyd–Warshall**: the "intermediate vertices ≤ k" DP formulation — derive the triple loop, don't memorise the loop order · `16:00` why k must be the outermost loop (proof by the DP dimension) · `21:00` negative cycle detection (`d[i][i] < 0`), unreachable handling with `inf` · `27:00` transitive closure / reachability (bitset version → L115), graph diameter, minimax path (bottleneck shortest path) · `36:00` incremental updates: adding an edge/vertex in O(V²) · `42:00` **Johnson's algorithm**: reweighting with Bellman–Ford potentials + V Dijkstras, for sparse graphs with negative edges · `47:00` choosing among BFS / 0-1 BFS / Dijkstra / Bellman–Ford / Floyd–Warshall — the decision table

- **TEACH:** Floyd–Warshall as DP where the loop order *is* the DP order; the potential/reweighting idea (reused in MCMF, L79); path reconstruction with a `nxt[i][j]` matrix.
- **CODE:** Floyd–Warshall with reconstruction; bottleneck paths; the potentials trick demonstrated.
- **PROBLEMS:** CSES *Shortest Routes II*; LeetCode 1334, 399, 1462, 2101.
- **GOAL:** the full shortest-path decision table, memorised.

---

**L70 · Day 50 · Disjoint Set Union I — 50 min**

`00:00` the dynamic connectivity problem · `05:00` naive parent array, O(n) find · `10:00` **union by size/rank** → O(log n); **path compression** → amortised O(log n); together → O(α(n)), effectively O(1) · `24:00` the α(n) result stated honestly (proof out of scope, intuition given) · `28:00` implementation: iterative find with two-pass compression, or path halving; array-based for speed · `36:00` components count, component sizes, "is same set" queries · `42:00` classic uses: cycle detection in undirected graphs, redundant connection, accounts merge, friend circles · `47:00` DSU with extra data (size, min/max, sum, parity)

- **TEACH:** why recursion in `find` is dangerous in Python (depth) and how to write it iteratively; DSU with parity for bipartiteness ("is this graph 2-colourable under incremental edges"); DSU with weights/offsets.
- **CODE:** `DSU` class (find, union, size, count) plus a parity variant; benchmarked with and without the optimisations.
- **PROBLEMS:** CSES *Road Construction*; LeetCode 547, 684, 721, 990, 1319, 839, 128 (DSU version).
- **GOAL:** a fast, iterative DSU in the library.

---

**L71 · Day 50 · DSU II: Rollback, Offline Tricks, Kruskal Reconstruction Tree — 50 min**

`00:00` what DSU cannot do: deletion · `04:00` **DSU with rollback** (union by size only, no compression, keep an operation stack) — O(log n) per op · `14:00` offline dynamic connectivity via divide & conquer on the time axis, with rollback · `26:00` **offline query processing**: sort queries by weight/time, add edges incrementally (the "answer queries in a useful order" pattern from L24) · `34:00` **Kruskal reconstruction tree**: build a binary tree over merges; path-maximum queries become LCA queries · `44:00` DSU on values for "next unused index" (the union-find-as-pointer trick), used for painting/assignment problems

- **TEACH:** why path compression breaks rollback; the D&C-over-time segment structure; KRT as the answer to "minimum bottleneck path" for many queries; the "next free slot" idiom.
- **CODE:** rollback DSU; offline "queries sorted by weight" problem; KRT + LCA bottleneck queries.
- **PROBLEMS:** CSES *New Roads Queries*, *Dynamic Connectivity*; Codeforces offline-DSU problems; LeetCode 1697, 1102 (DSU version).
- **GOAL:** viewer handles offline connectivity and bottleneck queries.

---

**L72 · Day 51 · Minimum Spanning Trees — 55 min**

`00:00` MST definition, uniqueness conditions · `05:00` **cut property** and **cycle property** — proved, because every MST algorithm follows from them · `15:00` **Kruskal**: sort edges + DSU, O(E log E) · `24:00` **Prim**: heap-based O(E log V), and the dense O(V²) array version · `34:00` Borůvka's algorithm (and why it matters for parallel/theoretical results) · `39:00` variants: maximum spanning tree, MST with one forced edge, **second-best MST**, minimum bottleneck spanning tree (= MST), counting MSTs (mention), MST on a complete geometric graph (Manhattan trick) · `50:00` applications: clustering, network design, "connect all points" problems

- **TEACH:** cut/cycle property proofs as the source of both algorithms; second-best MST via max-edge-on-path queries (LCA from L57, or KRT from L71); the equivalence of MST and minimum bottleneck tree.
- **CODE:** Kruskal and Prim; second-best MST end to end.
- **PROBLEMS:** CSES *Road Reparation*, *Road Construction*; LeetCode 1584, 1489, 1135, 778 (bottleneck view).
- **GOAL:** both MST algorithms plus second-best MST.

---

**L73 · Day 52 · Bridges, Articulation Points, Biconnected Components — 55 min**

`00:00` critical edges and vertices — where they matter (network reliability, 2-edge-connectivity) · `06:00` DFS tree, tree edges vs back edges, `tin[]` and `low[]` defined precisely · `18:00` **bridge condition**: `low[child] > tin[node]`; parallel-edge handling via edge indices · `28:00` **articulation point condition**: `low[child] >= tin[node]`, plus the root special case (≥2 children) · `38:00` implementation iteratively (mandatory for n=10⁵ in Python) · `46:00` **bridge tree** (2-edge-connected components contracted → a tree) and what it unlocks; biconnected components via an edge stack · `52:00` applications: "add minimum edges to make the graph bridgeless", critical connections

- **TEACH:** the `low` value as "highest ancestor reachable"; why the root is special for articulation points; contracting components to get a tree, then using tree techniques from Phase 4.
- **CODE:** iterative Tarjan for bridges + APs; bridge tree construction.
- **PROBLEMS:** CSES *Necessary Roads*, *Necessary Cities*; LeetCode 1192, 1568; Codeforces bridge-tree problems.
- **GOAL:** iterative bridge/AP finder plus a bridge tree.

---

**L74 · Day 52 · Strongly Connected Components and Condensation — 55 min**

`00:00` strong connectivity in directed graphs · `05:00` **Kosaraju**: DFS for finish order, reverse the graph, DFS in reverse finish order — with the correctness proof via the condensation DAG · `20:00` **Tarjan's SCC**: one pass, `low`-link + stack + on-stack flags · `34:00` iterative implementations of both · `41:00` **condensation graph** is a DAG: build it, then run topological DP · `47:00` applications: 2-SAT (next lesson), minimum vertices to reach all (source SCCs), maximum sum path with cycles collapsed, "is the whole graph strongly connected", functional graph structure (cycles + trees) · `52:00` Kosaraju vs Tarjan: which to memorise (pick one, know the other exists)

- **TEACH:** the finish-order lemma; condensation as the standard reduction "cycles → single nodes → DAG DP"; functional graphs (each node one outgoing edge) and their rho shape, tying back to L31's Floyd.
- **CODE:** both algorithms cross-validated; condensation + longest path on it.
- **PROBLEMS:** CSES *Planets and Kingdoms*, *Coin Collector*, *Flight Routes Check*, *Planets Cycles*; LeetCode 1129 (alternative framing), 2360.
- **GOAL:** SCC + condensation + DAG DP as one combined tool.

---

**L75 · Day 53 · 2-SAT — 50 min**

`00:00` boolean satisfiability with 2 literals per clause — solvable in linear time · `05:00` the implication graph: `(a ∨ b)` becomes `¬a → b` and `¬b → a` · `14:00` variable-to-node encoding (`2i` and `2i+1`) · `20:00` **the theorem**: satisfiable iff no variable and its negation are in the same SCC — proved · `28:00` extracting an assignment from the reverse topological order of the condensation · `36:00` modelling practice: "at most one of", "exactly one of" (with care), forced values, conflicting pairs, geometric/interval conflicts · `45:00` where 2-SAT shows up in contests, and why 3-SAT is hopeless

- **TEACH:** the assignment rule (choose the literal whose component comes later); translating natural-language constraints into implications systematically; the "pair of options per object" signal.
- **CODE:** `TwoSat` class (add_clause, add_at_most_one, solve) built on L74's SCC; a modelling problem solved end to end.
- **PROBLEMS:** CSES *Giant Pizza*; Codeforces 2-SAT problems; a scheduling-conflict modelling exercise.
- **GOAL:** viewer recognises and models 2-SAT problems.

---

**L76 · Day 53 · Eulerian Paths and Circuits — 50 min**

`00:00` the Königsberg bridges · `05:00` existence conditions: undirected (all even degrees for a circuit; exactly two odd for a path) and directed (in=out for all; or one +1/−1 pair) + connectivity of non-isolated vertices · `18:00` **Hierholzer's algorithm** iteratively, with the edge-consumption pointer and the reversed-output stack · `32:00` complexity O(V+E); multi-edge handling · `37:00` applications: **de Bruijn sequences**, reconstructing a string from k-mers (genome assembly), domino/word chains, "draw without lifting the pen" · `45:00` Chinese postman and Hamiltonian path — stated as the hard contrast (NP-hard; bitmask DP in L91)

- **TEACH:** why the naive recursive Hierholzer blows the stack and how the iterative version works; the used-edge iterator that keeps it linear; degree bookkeeping for the directed case.
- **CODE:** Hierholzer for both directed and undirected; de Bruijn sequence generator.
- **PROBLEMS:** CSES *Mail Delivery*, *Teleporters Path*, *De Bruijn Sequence*; LeetCode 332, 753.
- **GOAL:** Euler path/circuit built correctly, both variants.

---

**L77 · Day 54 · Bipartite Matching: Kuhn's Algorithm and the Theorems — 55 min**

`00:00` matchings, augmenting paths, maximum matching · `06:00` **Kuhn's algorithm**: try to augment from each left vertex via DFS, O(V·E) · `18:00` the alternating/augmenting path theorem (Berge): a matching is maximum iff no augmenting path exists · `26:00` **König's theorem**: max matching = min vertex cover in bipartite graphs; constructing the cover from the matching · `36:00` **Hall's marriage theorem** and its use in proofs · `42:00` maximum independent set = V − max matching (bipartite); **minimum path cover on a DAG** = V − matching · `50:00` Hopcroft–Karp existence (O(E√V)) and Hungarian/assignment problem pointer (L79)

- **TEACH:** the greedy pre-matching optimisation that makes Kuhn fast in practice; recognising hidden bipartite structure (rows/columns, black/white cells, two categories); the four theorems as modelling tools, not trivia.
- **CODE:** Kuhn with the visited-reset-per-augment detail; min vertex cover extraction; DAG path cover.
- **PROBLEMS:** CSES *School Dance*; LeetCode 1066, 2123; Codeforces bipartite-modelling problems; chessboard domino tilings.
- **GOAL:** matching implemented and the theorems used for modelling.

---

**L78 · Day 55 · Maximum Flow I: Ford–Fulkerson, Edmonds–Karp, Dinic — 60 min**

`00:00` flow networks: capacity, conservation, source, sink, value of a flow · `07:00` residual graph and **reverse edges** — the idea that makes everything work · `16:00` **Ford–Fulkerson** with augmenting paths; why arbitrary path choice can be slow (the classic bad example) · `24:00` **Edmonds–Karp** = BFS augmenting, O(VE²) · `32:00` **Dinic's algorithm**: level graph + blocking flow + iterator pointers, O(V²E) general, O(E√V) on unit capacities · `48:00` implementation details in Python: edge arrays, `iter_` pointers, scaling, and honest limits (Dinic in Python handles moderate networks; PyPy for the rest) · `55:00` sanity checks and how to debug a flow solution

- **TEACH:** why reverse edges are "undo" operations; the level-graph argument for Dinic's bound; unit-capacity special case that covers most CP uses (including bipartite matching).
- **CODE:** `Dinic` class (add_edge, max_flow, min_cut extraction) from scratch, tested against a brute force on small random networks.
- **PROBLEMS:** CSES *Download Speed*, *School Dance* (via flow); LeetCode 1349 (as flow/matching).
- **GOAL:** a reusable Dinic implementation.

---

**L79 · Day 55 · Maximum Flow II: Min Cut, Modelling, and Min-Cost Max-Flow — 60 min**

`00:00` **max-flow min-cut theorem** — statement and proof sketch via the residual graph · `10:00` extracting the actual cut (reachable set in the residual graph) · `16:00` modelling patterns: edge/vertex capacities (node splitting), multiple sources/sinks, lower bounds, **project selection / maximum closure**, minimum vertex cover via flow, image segmentation, "choose one of two categories with penalties" · `34:00` edge-disjoint and vertex-disjoint paths (Menger's theorem) · `40:00` **MCMF**: successive shortest paths with Bellman–Ford, then with Johnson potentials + Dijkstra · `52:00` assignment problem: MCMF vs Hungarian algorithm (O(n³)) — when each is appropriate

- **TEACH:** the modelling checklist (what are the nodes? what does one unit of flow represent? what does a cut mean?); node splitting for vertex capacities; potentials to allow Dijkstra with negative reduced costs.
- **CODE:** min-cut extraction; project selection solved end to end; MCMF with potentials.
- **PROBLEMS:** CSES *Police Chase*, *Distinct Routes*, *Parcel Delivery*, *Task Assignment*; LeetCode 1595.
- **GOAL:** viewer models a real problem as flow and reads off the cut.

---

**L80 · Day 56 · Contest Day 5 + Editorial (Graphs) — 100 min**

`00:00` rules: 6 problems, 3 hours · editorial: `05:00` P1 BFS/DFS modelling · `20:00` P2 Dijkstra variant · `36:00` P3 DSU offline · `52:00` P4 SCC or bridges · `68:00` P5 DAG DP · `84:00` P6 flow/matching modelling · `94:00` the graph decision flowchart + parsing-bug review

- **TEACH:** the 60-second triage question set (directed? weighted? negative? DAG? bipartite? queries offline?); how to recognise flow problems, which is the hardest recognition skill in Phase 5.
- **CODE:** six solutions at contest pace, all iterative.
- **PROBLEMS:** curated graph set, ratings 1400–2000.
- **GOAL:** 4+/6 and a `graphs.py` library file.

---

## PHASE 6 — Dynamic Programming
**Days 57–71 · L81–L102**

---

**L81 · Day 57 · DP Foundations: How to Invent a Recurrence — 60 min**

`00:00` DP defined: optimal substructure + overlapping subproblems · `06:00` the five-question method — (1) what is the state? (2) what does the state mean? (3) what are the transitions? (4) what are the base cases? (5) what is the answer? · `18:00` top-down vs bottom-up: mechanical conversion, pros and cons in Python (recursion limit vs cache locality) · `28:00` **state design** as the whole skill: minimal sufficient information, and how to spot a missing dimension when your DP gives wrong answers · `38:00` proving a DP correct (induction over the state order); the ordering requirement (DAG of states) · `46:00` complexity = states × transitions — the formula you use to check feasibility before coding · `54:00` DP vs greedy vs brute force: the diagnostic

- **TEACH:** writing the recurrence in English first; the "what did I do last?" transition-finding question; identifying illegal states; memory optimisation by rolling arrays introduced early so it becomes habit.
- **CODE:** the same problem solved top-down and bottom-up, then rolled to O(1) space, side by side.
- **PROBLEMS:** AtCoder DP-A *Frog 1*, DP-B *Frog 2*; CSES *Dice Combinations*, *Minimizing Coins*.
- **GOAL:** viewer states a recurrence in the five-question format before typing.

---

**L82 · Day 57 · 1D DP Classics — 50 min**

`00:00` the linear-state family · `04:00` Fibonacci-shaped: climbing stairs, min cost climbing, tribonacci, jumps with k steps (→ deque optimisation, L98) · `14:00` house robber I/II (circular), delete-and-earn as a reindex + robber · `24:00` decode ways, and the "count the number of ways to parse" family · `31:00` maximum subarray (Kadane) as DP, plus circular maximum subarray, maximum product subarray (two states!) · `41:00` word break as 1D DP over prefixes · `46:00` when a 1D DP secretly needs a second dimension — worked examples

- **TEACH:** Kadane derived as `dp[i] = max(a[i], dp[i-1]+a[i])`; the "two states because sign flips" insight for max product; circular problems solved by the two-case split (include/exclude the wrap).
- **CODE:** Kadane with index reconstruction; max product subarray; decode ways with tricky zero handling.
- **PROBLEMS:** CSES *Removing Digits*, *Array Description*; LeetCode 70, 746, 198, 213, 91, 53, 918, 152, 139, 740.
- **GOAL:** the 1D family solved on sight.

---

**L83 · Day 58 · Knapsack I: 0/1, Subset Sum, and Space Optimisation — 55 min**

`00:00` the 0/1 knapsack statement · `05:00` state `dp[i][w]`, transition take/skip, derived from the five questions · `15:00` filling order, base cases, answer extraction · `22:00` **reconstruction**: recovering which items were chosen (parent array or backward walk) · `30:00` **1D rolling optimisation** and why the weight loop must go **downwards** — demonstrated with the bug when it doesn't · `40:00` subset sum, equal-partition, "sum closest to half", counting subsets with a given sum · `48:00` bitset acceleration in Python: subset sum via big-int shifts `mask |= mask << w` (an enormous practical win, expanded in L115)

- **TEACH:** the descending-loop proof; distinguishing max-value vs feasibility vs count knapsacks (same skeleton, different operator); the big-int-as-bitset trick that makes subset sum ~50× faster in CPython.
- **CODE:** 2D → 1D → big-int-bitset versions with timings on n=200, W=10⁵.
- **PROBLEMS:** CSES *Book Shop*, *Money Sums*; AtCoder DP-D *Knapsack 1*, DP-E *Knapsack 2* (value-indexed DP!); LeetCode 416, 494, 1049, 474.
- **GOAL:** all three knapsack forms plus the bitset trick.

---

**L84 · Day 58 · Knapsack II: Unbounded, Bounded, Coin Change Family — 50 min**

`00:00` unbounded knapsack: same table, **ascending** weight loop — and why that single change allows reuse · `10:00` coin change: minimum coins vs counting combinations vs counting permutations — the loop-order distinction that everyone confuses, shown explicitly · `24:00` **bounded (multiple) knapsack** with counts: naive O(n·W·k), then **binary splitting** into powers of two, then the monotonic-deque O(n·W) version (deferred detail to L98) · `38:00` knapsack with two constraints (weight + volume); value-indexed knapsack when values are small but weights huge · `45:00` fractional knapsack contrast (greedy, from L22)

- **TEACH:** the loop-order table: item-outer → combinations; weight-outer → permutations; the binary-splitting decomposition proof (any k representable by powers of two plus a remainder).
- **CODE:** all four coin-change variants side by side; binary-split bounded knapsack.
- **PROBLEMS:** CSES *Coin Combinations I/II*, *Dice Combinations*; LeetCode 322, 518, 377, 279, 1449.
- **GOAL:** viewer never mixes up combination vs permutation counting again.

---

**L85 · Day 59 · LIS and LCS — 55 min**

`00:00` longest increasing subsequence: O(n²) DP first · `08:00` **O(n log n) patience sorting**: the tails array, `bisect_left` for strictly increasing vs `bisect_right` for non-decreasing — derived, with the "tails are not the LIS" warning · `22:00` reconstructing an actual LIS with parent pointers · `29:00` variants: longest non-decreasing, longest decreasing, minimum number of increasing subsequences (Dilworth's theorem), LIS in 2D (sort + LIS), bitonic subsequence, count of LIS · `40:00` **LCS**: `dp[i][j]` derivation, reconstruction, O(min(n,m)) space · `50:00` LCS ↔ LIS reduction (when one string has distinct characters), edit distance preview

- **TEACH:** why the tails array is sorted (the invariant); Dilworth's theorem as an instant answer to a whole class of problems; LCS length vs SCS length relationship; the O(nm) wall and when hashing/bitset helps.
- **CODE:** LIS both ways + reconstruction, cross-checked; LCS with the actual string recovered.
- **PROBLEMS:** CSES *Increasing Subsequence*; AtCoder DP-F *LCS*; LeetCode 300, 673, 354, 1143, 1035, 646, 1626.
- **GOAL:** O(n log n) LIS written from memory with correct strictness.

---

**L86 · Day 60 · Grid DP and Counting DP — 50 min**

`00:00` unique paths, obstacles, minimum path sum, maximum gold · `10:00` the "come from above or left" pattern; boundary initialisation; in-place rolling rows · `18:00` paths with constraints (only right/down vs 4-directional needing Dijkstra instead — the distinction matters) · `25:00` counting DP: number of ways with mod, combinatorial shortcuts vs DP (C(n+m, n) for a clean grid), and blocked-cell inclusion–exclusion (→ L122) · `35:00` cherry pickup / two-robot DP (state = both positions on the same diagonal) · `44:00` dungeon game (backward DP) — the lesson that DP direction is a choice

- **TEACH:** when the DP must be run backwards (constraints on the future, not the past); the same-diagonal trick to reduce two-agent state; recognising that 4-directional movement with costs is a shortest-path problem, not DP.
- **CODE:** cherry pickup; dungeon game; grid counting with mod.
- **PROBLEMS:** CSES *Grid Paths* (both versions); AtCoder DP-H *Grid 1*, DP-Y *Grid 2* (with combinatorics); LeetCode 62, 63, 64, 741, 174, 1289.
- **GOAL:** grid DP plus knowing when it isn't DP.

---

**L87 · Day 61 · Interval (Range) DP — 55 min**

`00:00` the shape: `dp[l][r]` = answer for the segment · `05:00` iteration order by increasing length (the mandatory loop structure) · `12:00` **matrix chain multiplication** derived fully with the split point k · `26:00` burst balloons (the "which one is last" reframe that fixes the broken "which is first" attempt) · `36:00` palindrome partitioning (min cuts), longest palindromic subsequence, minimum insertions to make a palindrome · `45:00` merging stones / optimal triangulation / removing boxes; O(n³) feasibility and the O(n²) optimisations to come (L99) · `51:00` interval DP on circular arrays (duplicate the array)

- **TEACH:** the "choose the last operation" trick as the standard fix for interval DP; why length-ascending order satisfies the dependency DAG; circular handling by doubling.
- **CODE:** matrix chain with parenthesisation output; burst balloons narrated including the wrong first attempt.
- **PROBLEMS:** CSES *Removal Game*, *Rectangle Cutting*; AtCoder DP-N *Slimes*, DP-L *Deque*; LeetCode 312, 1000, 132, 516, 1547, 375, 546.
- **GOAL:** viewer sets up `dp[l][r]` and finds the right split reframe.

---

**L88 · Day 61 · String DP: Edit Distance, Matching, and DP on Automata — 55 min**

`00:00` the 2D string-DP skeleton · `04:00` **edit distance**: insert/delete/replace transitions, the three-way min, reconstruction of the operation script · `16:00` variants: distinct subsequences, delete operation for two strings, minimum ASCII delete sum, one-edit distance · `24:00` **wildcard matching** (`?`, `*`) and **regex matching** (`.`, `*`) — both derived carefully, since the `*` cases are where everyone fails · `38:00` interleaving string, scramble string (memo on substrings) · `45:00` **DP over an automaton**: count strings of length n avoiding a pattern, using the KMP automaton from L38 or Aho–Corasick from L43 — state = (length, automaton node) · `52:00` when hashing/bitset beats DP

- **TEACH:** the transition table for `*` (zero occurrences vs one more occurrence); DP on automaton states as the general answer to "count strings with/without substring X"; space rolling for 2D string DP.
- **CODE:** edit distance with operation script; regex matching; "count strings avoiding a pattern" on the KMP automaton.
- **PROBLEMS:** CSES *Edit Distance*, *Required Substring*; AtCoder DP-F; LeetCode 72, 10, 44, 115, 97, 87, 712.
- **GOAL:** any two-string DP, plus automaton DP.

---

**L89 · Day 62 · Tree DP I: Subtree Aggregation and Tree Knapsack — 55 min**

`00:00` DP on trees = DP over the DFS post-order · `05:00` the pattern: combine children's answers at each node; iterative post-order (from L55) to avoid recursion limits · `14:00` classics: subtree sums/sizes, maximum independent set on a tree (dp[v][0/1]), minimum vertex cover, tree matching, count of leaves at each depth · `28:00` **tree knapsack** `dp[v][j]` = best using j items from v's subtree; the O(n²) merging bound proof (pairs of nodes counted once) · `42:00` tree diameter as tree DP (top-two children); path-through-node patterns · `49:00` DP with edge weights, and DP where the state includes "is v's edge to its parent used"

- **TEACH:** the two-value-return pattern (best-including-v, best-excluding-v); the tree-knapsack complexity argument (surprising and important); handling multiple test cases without stale state.
- **CODE:** maximum weighted independent set on a tree, iteratively; tree knapsack with size-bounded merging.
- **PROBLEMS:** CSES *Tree Matching*, *Subordinates*, *Tree Distances I*; AtCoder DP-P *Independent Set*, DP-V *Subtree*; LeetCode 337, 968, 1130, 2246.
- **GOAL:** iterative tree DP with correct merging complexity.

---

**L90 · Day 62 · Tree DP II: Rerooting (All-Roots DP) — 55 min**

`00:00` the problem: compute an answer for every root, not just one · `05:00` naive O(n²); the down-then-up insight · `13:00` `down[v]` from children (first DFS), `up[v]` from parent + siblings (second DFS) · `24:00` combining siblings without division: prefix/suffix aggregates over the child list (the general, always-correct method) · `36:00` full worked example: sum of distances from every node; then max distance from every node · `46:00` rerooting with non-invertible operations (max, min, gcd) — where prefix/suffix is mandatory · `52:00` AtCoder DP-V as the canonical rerooting-with-modulus problem

- **TEACH:** why "total minus my contribution" fails for max/min and mod-without-inverse, and prefix/suffix fixes it; the mechanical rerooting template that generalises to any monoid.
- **CODE:** a generic `reroot(merge, add_node, identity)` helper; sum-of-distances and DP-V solved with it.
- **PROBLEMS:** CSES *Tree Distances II*; AtCoder DP-V *Subtree*; LeetCode 834, 2581; Codeforces rerooting problems.
- **GOAL:** one reusable rerooting template.

---

**L91 · Day 63 · Bitmask DP I: Subsets as States — 55 min**

`00:00` when n ≤ 20, the subset is the state · `05:00` `dp[mask]` and `dp[mask][i]` shapes; iteration order (increasing mask = increasing popcount dependency, when valid) · `14:00` **TSP** `dp[mask][last]` in O(2ⁿ·n²), with path reconstruction · `28:00` assignment problem in O(2ⁿ·n) using popcount as the row index — the classic optimisation · `36:00` counting Hamiltonian paths/cycles; "partition into groups" DP over submasks in O(3ⁿ) · `45:00` minimum number of groups (bin covering), shortest superstring, "can we tile with these pieces" · `52:00` memory limits: 2²⁰ × 20 floats in Python — the real constraint, and how to use `array` or flat lists

- **TEACH:** the popcount-implies-index trick; when the outer loop over masks is a valid topological order; submask iteration cost 3ⁿ (from L8).
- **CODE:** TSP with reconstruction; "partition into k valid groups" over submasks.
- **PROBLEMS:** CSES *Hamiltonian Flights*, *Elevator Rides*, *Counting Tilings* (with L92); AtCoder DP-O *Matching*, DP-U *Grouping*; LeetCode 943, 691, 1125, 1723, 847.
- **GOAL:** TSP and set-partition DP written independently.

---

**L92 · Day 63 · Bitmask DP II: Profile and Broken-Profile DP — 50 min**

`00:00` tiling and grid-colouring problems with column masks · `05:00` **profile DP**: state = (row, mask of filled cells in the next row); transitions by enumerating compatible masks · `18:00` precomputing compatible mask pairs to avoid re-checking · `24:00` **broken-profile DP**: state = (cell index, mask), transition cell by cell — cleaner and faster, derived side by side · `36:00` domino tilings, "no two adjacent" colourings, counting ways with forbidden cells · `44:00` when width ≤ 20 but height is huge → combine with matrix exponentiation (L124)

- **TEACH:** the transition validity condition for dominoes; why broken profile reduces the transition count from 2^m to 2; recognising the "grid with small width" signal.
- **CODE:** domino tiling both ways with timings; a forbidden-cell variant.
- **PROBLEMS:** CSES *Counting Tilings*, *Filling*; LeetCode 1411, 1659; Codeforces broken-profile classics.
- **GOAL:** viewer counts tilings on an n×m grid with m ≤ 15.

---

**L93 · Day 64 · SOS DP (Sum Over Subsets) and Subset Convolution — 50 min**

`00:00` the problem: for every mask, aggregate over all its submasks · `05:00` naive O(3ⁿ); **SOS DP in O(2ⁿ·n)** — the dimension-by-dimension derivation, drawn as n rounds of "add the version with bit i cleared" · `20:00` correctness proof by induction on bits · `26:00` superset sums (the mirrored loop); Möbius/inverse transform to undo it · `34:00` applications: count pairs with `a & b == 0`, "for each mask, number of array elements that are submasks", maximum over submasks, complement pairs · `43:00` subset-sum convolution and the Zeta/Möbius framing; XOR convolution via Walsh–Hadamard transform (stated, with code in the repo)

- **TEACH:** the three transforms (Zeta, Möbius, Walsh–Hadamard) as one family; the in-place loop order; why this is the "prefix sum over the subset lattice".
- **CODE:** SOS both directions with a brute-force cross-check; WHT for XOR convolution.
- **PROBLEMS:** Codeforces SOS classics (e.g. *Compatible Numbers*, *Vowels*); AtCoder subset-sum-convolution tasks.
- **GOAL:** SOS DP implemented and recognised.

---

**L94 · Day 65 · Digit DP — 55 min**

`00:00` counting numbers in [L, R] with a digit property · `05:00` the f(R) − f(L−1) reduction · `10:00` state design: (position, tight/bounded flag, started/leading-zero flag, problem-specific state) — each flag justified · `24:00` the template written once, memoised with `@cache`, then reused three times · `34:00` classics: count of digit d, sum of digits, numbers divisible by k, numbers with no two adjacent equal digits, numbers whose digits are non-decreasing · `44:00` digit DP in other bases; digit DP with a mask of used digits (n ≤ 10 distinct) · `50:00` counting vs k-th element (binary search + digit DP counting)

- **TEACH:** why the `tight` flag is the whole trick; leading zeros as a separate flag rather than a hack; converting "find the k-th such number" into binary search over a counting function.
- **CODE:** the reusable digit-DP template; three problems on it; a k-th-number solution.
- **PROBLEMS:** CSES *Counting Numbers*, *Digit Queries*; AtCoder DP-S *Digit Sum*; LeetCode 233, 902, 1012, 600, 2999.
- **GOAL:** one template that handles any digit-property counting problem.

---

**L95 · Day 66 · Probability and Expected-Value DP — 55 min**

`00:00` probability refresher: independence, conditional probability, law of total probability, linearity of expectation · `12:00` **linearity of expectation** as the single most useful tool — three problems solved by it with no DP at all · `24:00` expectation DP: `E[state] = Σ p·(cost + E[next])`, base cases at absorbing states · `34:00` forward vs backward formulation; why backward is usually right for expected-cost-to-finish · `41:00` **systems of linear equations** when states form cycles (random walks) → Gaussian elimination (L125), plus the tridiagonal/telescoping special case · `49:00` modular probabilities: fractions mod p with modular inverse (L119); computing expected values exactly

- **TEACH:** identifying absorbing states; the "expected number of X = Σ P(X_i happens)" reframe; when the DP graph has cycles and DP alone fails.
- **CODE:** expected dice rolls to reach n; a random-walk problem solved with a linear system; a mod-p expected value.
- **PROBLEMS:** CSES *Dice Probability*, *Moving Robots*, *Candy Lottery*, *Inverse Inversions*; AtCoder DP-I *Coins*, DP-J *Sushi*; LeetCode 688, 837, 1467.
- **GOAL:** viewer sets up expectation recurrences and spots linearity shortcuts.

---

**L96 · Day 67 · Game Theory I: Nim, Grundy Numbers, Sprague–Grundy — 60 min**

`00:00` combinatorial games: two players, perfect information, no chance, normal play · `06:00` win/lose (N/P) positions by backward induction; the recursive definition · `14:00` **Nim**: the XOR theorem, proved in both directions · `28:00` **mex** and **Grundy numbers**: definition, computation for a game graph · `38:00` **Sprague–Grundy theorem**: a sum of independent games has Grundy = XOR of Grundy values — statement, intuition, and use · `48:00` staircase Nim, Nim with limits (subtraction games and their periodicity), Grundy of common games; finding patterns by brute-forcing small n · `55:00` misère play caveats

- **TEACH:** the brute-force-then-find-the-pattern workflow that solves most contest game problems; decomposing a position into independent subgames; why misère is different and usually avoided in contests.
- **CODE:** Grundy calculator for an arbitrary move set; pattern discovery on camera (print Grundy for n=0..30, spot periodicity).
- **PROBLEMS:** CSES *Nim Game I/II*, *Stair Game*, *Grundy's Game*, *Another Game*; LeetCode 292, 1025, 913 (alternative framing).
- **GOAL:** viewer computes Grundy values and applies XOR decomposition.

---

**L97 · Day 67 · Game Theory II: Minimax DP and Games on Graphs — 50 min**

`00:00` scoring games (not just win/lose) · `05:00` **minimax DP**: `dp[state] = max/min over moves`, whose turn as a state dimension (or the "relative score" trick that removes it) · `16:00` optimal-strategy interval games (stone game, predict the winner) — reusing L87's interval DP · `26:00` games on general graphs with cycles: retrograde analysis / BFS from terminal positions, counting outgoing edges · `38:00` draws and infinite play; games with more than two outcomes · `44:00` alpha–beta pruning — one paragraph, plus where memoised minimax shows up in interviews

- **TEACH:** the relative-score formulation `dp[l][r] = max(a[l] − dp[l+1][r], a[r] − dp[l][r-1])` and why it halves the state space; retrograde analysis as reverse BFS with degree counters.
- **CODE:** predict-the-winner with the relative trick; win/lose/draw labelling on a cyclic game graph.
- **PROBLEMS:** CSES *Removal Game*, *Stick Game*; AtCoder DP-K *Stones*, DP-L *Deque*; LeetCode 486, 877, 464, 1140, 913.
- **GOAL:** minimax DP and graph-game labelling.

---

**L98 · Day 68 · DP Optimisation I: Prefix Aggregates and Monotonic Deque — 55 min**

`00:00` the O(n²) DP that must become O(n log n) or O(n) · `05:00` step 1: recognise that the transition is a **range query** over previous states · `12:00` prefix-sum / prefix-max optimisation (transition over a prefix) · `20:00` **sliding-window minimum with a deque** for `dp[i] = min(dp[j] for j in [i-k, i-1]) + cost(i)` — the direct reuse of L16 · `32:00` bounded knapsack in O(n·W) with a deque per residue class (finishing the loose end from L84) · `42:00` transitions over a moving window with a heap + lazy deletion (when the window's left edge is data-dependent) · `48:00` segment tree over DP values as the general hammer (→ L106)

- **TEACH:** the reframe "my transition is an aggregate over an index range" → pick a structure that answers that aggregate; how to detect the window's monotonicity.
- **CODE:** deque-optimised jump DP; bounded knapsack with residue deques.
- **PROBLEMS:** AtCoder DP-B *Frog 2* (large k), *Slimes* variants; LeetCode 1425, 1696, 2100; CSES *Subarray Squares* (with L100).
- **GOAL:** viewer converts a windowed DP to O(n).

---

**L99 · Day 69 · DP Optimisation II: Divide & Conquer Optimisation and Knuth — 55 min**

`00:00` `dp[i][j] = min over k of dp[i-1][k] + C(k, j)` — the O(k·n²) shape · `07:00` the **monotone-opt** condition: `opt[i][j] ≤ opt[i][j+1]` · `14:00` **D&C optimisation**: recursively solve the middle j, restricting k's range → O(k·n log n), with the complexity proof · `28:00` how to verify the monotonicity condition (brute-force check on random data — a practical technique) · `34:00` **Knuth's optimisation** for interval DP: `opt[i][j-1] ≤ opt[i][j] ≤ opt[i+1][j]` → O(n²) from O(n³), applied to optimal BST / merging files · `46:00` the quadrangle inequality (totally monotone / Monge condition) as the underlying theory · `52:00` SMAWK / Aliens preview

- **TEACH:** the concavity/convexity conditions in plain language; the empirical monotonicity check as a legitimate contest move; recognising "split the array into k parts, minimise total cost" as the D&C-opt signature.
- **CODE:** "divide array into k segments minimising cost" with D&C opt, timed against the naive version; Knuth on optimal merging.
- **PROBLEMS:** CSES *Subarray Squares*, *Houses and Schools*, *Knuth Division*; Codeforces D&C-opt problems.
- **GOAL:** viewer applies D&C optimisation with a verified condition.

---

**L100 · Day 69 · DP Optimisation III: Convex Hull Trick and Li Chao Tree — 55 min**

`00:00` transitions of the form `dp[i] = min over j of (m_j · x_i + c_j)` — lines evaluated at a point · `08:00` the geometric picture: lower envelope of lines · `16:00` **monotonic CHT**: add lines with decreasing slope, query with increasing x, amortised O(1) with a deque · `28:00` the bad-line removal condition (cross-product / intersection comparison) and integer-only arithmetic to avoid precision loss · `36:00` **Li Chao tree**: arbitrary insertion order, arbitrary queries, O(log C) — build it live · `48:00` dynamic CHT alternatives; when to use CHT vs Li Chao vs D&C opt · `52:00` the classic applications: minimising Σ(x_i·y_j), building-cost DP, "split into segments with quadratic cost"

- **TEACH:** rewriting a DP transition into line form (identifying slope and intercept) — the actual hard step; integer cross-multiplication instead of floating-point intersections.
- **CODE:** monotonic CHT with a deque; Li Chao tree from scratch; the same problem solved with both.
- **PROBLEMS:** CSES *Subarray Squares* (CHT version); Codeforces CHT classics; LeetCode 1478 (with D&C opt comparison).
- **GOAL:** viewer transforms a DP into line form and applies CHT.

---

**L101 · Day 70 · DP Optimisation IV: Aliens Trick and Matrix Exponentiation for DP — 55 min**

`00:00` "exactly k groups" constraints that break other optimisations · `06:00` **Aliens trick / Lagrangian relaxation**: penalise each group by λ, binary search λ so the optimal count equals k · `20:00` the convexity requirement (the answer as a function of k must be convex) and how to check it; tie-handling when several counts share the same λ · `30:00` a full worked example end to end · `38:00` **matrix exponentiation for linear DP**: build the transition matrix, exponentiate in O(d³ log n), for huge n with small state · `48:00` transition matrices for path counting, Fibonacci-like recurrences, DP with small profiles (link L92), and adding a constant term with an augmented matrix · `52:00` Kitamasa / Berlekamp–Massey as the advanced alternative (pointer to L124)

- **TEACH:** the geometric meaning of λ as the slope of the convex hull of (k, answer) points; how to build a transition matrix mechanically from a recurrence.
- **CODE:** Aliens trick on a segment-partition problem; matrix power for a linear recurrence and for counting length-n paths.
- **PROBLEMS:** CSES *Graph Paths I/II*, *Throwing Dice*, *Fibonacci Numbers*; Codeforces Aliens-trick problems.
- **GOAL:** two advanced optimisations available when constraints demand them.

---

**L102 · Day 71 · Contest Day 6 + Editorial (Dynamic Programming) — 100 min**

`00:00` rules: 6 DP problems, 3 hours · editorial: `05:00` P1 1D/knapsack · `20:00` P2 interval or string DP · `36:00` P3 tree DP · `52:00` P4 bitmask DP · `68:00` P5 digit or expectation DP · `84:00` P6 optimised DP (deque/CHT) · `94:00` the DP state-design checklist and the "my DP is wrong" debugging protocol

- **TEACH:** the debugging protocol — print the DP table for small n, compare with brute force, check base cases, check the state's sufficiency; how to guess the intended DP dimension from constraints.
- **CODE:** six solutions at contest pace.
- **PROBLEMS:** curated DP set, ratings 1500–2100; plus the full AtCoder Educational DP Contest A–Z as ongoing homework.
- **GOAL:** 4+/6 and all 26 AtCoder DP tasks solved by the end of the week.

---

## PHASE 7 — Advanced Data Structures
**Days 72–81 · L103–L116**

---

**L103 · Day 72 · Sparse Table and O(1) Range Minimum — 45 min**

`00:00` static range queries with no updates · `04:00` the doubling table `st[k][i]` = answer for `[i, i+2^k)`, built in O(n log n) · `13:00` **idempotent** operations (min, max, gcd, and/or) allow overlapping intervals → O(1) query with two overlapping blocks · `22:00` non-idempotent operations (sum) need disjoint blocks → O(log n), so use prefix sums or a BIT instead · `28:00` memory: n log n entries, and the flat-list layout in Python · `34:00` applications: RMQ for LCA (L58), LCP of suffixes (L45), range gcd, "max in every window" static version · `40:00` disjoint sparse table and sqrt-based alternatives, briefly

- **TEACH:** the exact reason overlap is safe for idempotent ops; `bit_length()−1` as fast floor-log2; the precomputed log table when speed matters.
- **CODE:** `SparseTable` class (min, max, gcd variants) tested against brute force.
- **PROBLEMS:** CSES *Static Range Minimum Queries*, *Static Range Sum Queries* (for contrast); LeetCode 1521 (alternative framing); range-gcd problems.
- **GOAL:** O(1) RMQ available for the rest of the series.

---

**L104 · Day 73 · Fenwick Tree (BIT) I: Point Update, Prefix Query — 50 min**

`00:00` the problem sparse tables can't do: updates · `05:00` the BIT's structure: each index covers a range determined by its lowest set bit; the tree drawn over indices 1..16 · `16:00` `update(i, v)`: `i += i & -i`; `query(i)`: `i -= i & -i` — derived from the covering structure, not memorised · `28:00` range sum = `query(r) − query(l−1)`; 1-indexing is mandatory · `33:00` O(n) construction (in-place, better than n updates) · `38:00` **counting inversions** with a BIT over values + coordinate compression (L24) · `45:00` BIT vs segment tree: 4× less code, ~3× faster, but fewer capabilities — the honest trade-off

- **TEACH:** the "lowest set bit = responsibility range" mental model; why BIT needs an invertible operation; BIT over *values* rather than positions as a distinct and powerful idea.
- **CODE:** `BIT` class (update, prefix, range, build) plus an inversion counter, both stress-tested.
- **PROBLEMS:** CSES *Dynamic Range Sum Queries*, *Range Xor Queries*; LeetCode 307, 315, 493, 327.
- **GOAL:** BIT written from memory in 3 minutes.

---

**L105 · Day 73 · Fenwick Tree II: Range Updates, 2D, and k-th Element — 50 min**

`00:00` extending the BIT · `04:00` **range update + point query** via a difference-array BIT · `12:00` **range update + range query** with two BITs — the algebra derived in full · `24:00` **2D BIT**: nested loops, O(log² n), for point-update rectangle-query grids · `32:00` **finding the k-th element / order statistics** by binary-lifting descent inside the BIT in O(log n) — the trick that turns a BIT into a sorted multiset · `42:00` BIT for max (with restrictions: prefix-max only, no decrease) · `46:00` BIT on values for "count of numbers ≤ x so far", median maintenance, salary-style queries

- **TEACH:** the two-BIT derivation (write the range-sum formula, split into the i-dependent and constant parts); the descent that replaces a missing balanced BST — the single most useful Python workaround in Phase 7.
- **CODE:** range-update-range-query BIT; 2D BIT; `find_kth` descent used to build an ordered multiset with insert/erase/kth/rank.
- **PROBLEMS:** CSES *Range Update Queries*, *Salary Queries*, *List Removals*, *Forest Queries II*, *Josephus Problem II*; LeetCode 308, 1649.
- **GOAL:** an ordered-multiset substitute in the library.

---

**L106 · Day 74 · Segment Tree I: The Universal Range Structure — 60 min**

`00:00` why segment trees dominate: any associative merge · `06:00` the recursive structure over `[l, r)`; array size 4n; node → children indices · `16:00` **build** in O(n), **point update** and **range query** in O(log n) — all three written recursively with the "three cases" (disjoint / contained / partial) · `32:00` the merge function as a parameter: sum, min, max, gcd, count-of-min, matrix product, "best subarray sum" (the four-value node) · `44:00` recursive vs iterative implementations in Python, with timings; recursion limits and why the iterative version matters (→ L109) · `52:00` full worked example: maximum subarray sum with updates (the four-field node), derived on screen

- **TEACH:** the monoid abstraction (associative + identity) as the exact requirement; designing a node that stores *more* than the answer so it can be merged (the crucial skill); complexity proof (O(log n) nodes visited).
- **CODE:** generic `SegTree(merge, identity)`; the max-subarray-with-updates node.
- **PROBLEMS:** CSES *Dynamic Range Minimum Queries*, *Prefix Sum Queries*; LeetCode 307, 2213; Codeforces EDU "Segment Tree part 1" steps 1–3.
- **GOAL:** one generic segment tree that accepts any monoid.

---

**L107 · Day 75 · Segment Tree II: Lazy Propagation — 60 min**

`00:00` range updates: the O(n log n) naive disaster · `06:00` the lazy idea: store a pending operation at a node, push it down only when needed · `16:00` **range add + range sum**: the lazy value, `apply`, `push`, and why the order of operations matters — implemented step by step · `32:00` **range assign (set) + range sum/min**: a different lazy algebra, with the "assign overrides add" composition rule · `44:00` composing two lazy types (add and assign together) — the general lazy-monoid framing · `52:00` common bugs: forgetting to push before descending, forgetting to pull after updating, applying lazy to the wrong subtree length · `56:00` range add + range min, range flip on booleans

- **TEACH:** lazy tags must form a monoid with a well-defined composition and an action on node values; the checklist that eliminates 95% of lazy bugs; segment-length awareness in `apply`.
- **CODE:** `LazySegTree` supporting add-and-assign with sum-and-min queries; stress-tested against a brute-force array.
- **PROBLEMS:** CSES *Range Updates and Sums*, *Polynomial Queries*, *Increasing Array Queries*; Codeforces EDU "Segment Tree part 2"; LeetCode 699, 715, 2569.
- **GOAL:** a lazy segment tree the viewer trusts.

---

**L108 · Day 76 · Segment Tree III: Descent, Trees on Values, Merge-Sort Trees — 55 min**

`00:00` queries that aren't "aggregate a range" · `05:00` **descent / binary search on the tree**: first index ≥ x, first prefix-sum exceeding k, "first free hotel room" — O(log n) instead of O(log² n) · `18:00` segment tree **on values** (indices are values): counting, k-th smallest, rank queries — the BIT-descent idea generalised · `28:00` **merge-sort tree**: each node stores a sorted list → "count elements < x in range" in O(log² n); memory cost and Python realities · `40:00` wavelet tree, mentioned with a repo link, for range-k-th-smallest in O(log C) · `46:00` offline alternatives: sort queries + BIT (usually faster in Python than a merge-sort tree) · `51:00` choosing between them: a decision table

- **TEACH:** the descent pattern (check the left child, decide, recurse into one side only); why offline+BIT beats fancy structures in Python; the "count in range less than x" problem as a recurring boss fight with four different solutions.
- **CODE:** `first_above(x)` descent; hotel-rooms problem; merge-sort tree; the same problem re-solved offline with a BIT and timed.
- **PROBLEMS:** CSES *Hotel Queries*, *Pizzeria Queries*, *Subarray Sum Queries*, *Distinct Values Queries*; LeetCode 2286.
- **GOAL:** viewer solves "count < x in a range" three ways and picks the fastest in Python.

---

**L109 · Day 76 · Segment Tree IV: Iterative, Dynamic, and Persistent — 55 min**

`00:00` performance and memory limits in Python · `05:00` **iterative bottom-up segment tree** (non-commutative-safe version) — 2n array, no recursion, ~3× faster · `18:00` **dynamic / implicit** segment tree over a huge coordinate range (10⁹) with lazily created nodes; arrays-as-nodes to avoid object overhead · `30:00` **persistent segment tree**: each update creates O(log n) new nodes; version array · `42:00` the killer application: **k-th smallest in a range** offline/online via persistent prefix-count trees · `50:00` persistent tries/arrays; rollback vs persistence; memory budgeting for 10⁵ updates × 20 nodes

- **TEACH:** the iterative query loop and its subtlety for non-commutative merges; node-as-parallel-arrays (`left[]`, `right[]`, `cnt[]`) as the only viable persistent layout in Python; the version-difference trick that answers range queries from two prefix versions.
- **CODE:** iterative segtree; dynamic segtree on [0, 10⁹); persistent segtree solving range-k-th-smallest.
- **PROBLEMS:** CSES *Range Queries and Copies*, *Distinct Values Queries* (persistent version); classic "k-th smallest in range" problems; LeetCode 1146 (as a persistence warm-up).
- **GOAL:** persistent range-k-th-smallest, working.

---

**L110 · Day 77 · Sqrt Decomposition — 50 min**

`00:00` when log-factor structures are too complex or don't fit the operation · `05:00` blocks of size √n: block aggregates + element array; query in O(√n), update in O(1) · `16:00` choosing the block size (and tuning it empirically — √n isn't always optimal in Python) · `22:00` block updates with per-block lazy tags; "add to range, query range" in O(√n) · `30:00` **sqrt decomposition on queries**: rebuild every √q operations (the "rebuild trick"), which turns many hard dynamic problems into easy static ones · `40:00` sqrt decomposition on the value axis; heavy/light splitting by degree in graphs (heavy vertices ≤ √m) · `46:00` when sqrt beats segment trees: complex per-block invariants, sorted blocks, chunked processing

- **TEACH:** the rebuild trick as a general "amortise the hard part" strategy; heavy-light element splitting (frequent vs rare values) as a recurring CP idea; why O(n√n) with tiny constants can beat O(n log² n) in Python.
- **CODE:** block-decomposition range-sum with lazy blocks; a "rebuild every √q updates" solution to a problem that's painful with a segment tree.
- **PROBLEMS:** CSES *Range Updates and Sums* (sqrt version, for comparison); Codeforces sqrt-decomposition problems; graph problems with heavy-vertex splitting.
- **GOAL:** viewer reaches for sqrt when the structure gets awkward.

---

**L111 · Day 78 · Mo's Algorithm — 50 min**

`00:00` offline range queries with an add/remove-element structure but no merge · `06:00` the ordering: sort queries by (block of l, r) and move two pointers · `16:00` the O((n+q)√n) proof — r moves O(n) per block, l moves O(√n) per query · `26:00` the odd–even block optimisation (alternate r direction) with measured gains · `31:00` **classic application**: distinct values in a range; mode; sum of squares of counts · `38:00` **Mo's on trees** via the Euler tour, with the LCA correction case · `45:00` Mo's with updates (3D Mo, O(n^{5/3})) — stated with a code pointer · `48:00` Python honesty: Mo's is heavy here; use it with fast add/remove and consider PyPy

- **TEACH:** the requirement that add and remove be O(1); why sorting order alone gives the bound; the tree flattening subtlety (nodes appearing twice, the LCA fix).
- **CODE:** Mo's for distinct-values queries, stress-tested; Mo's on a tree.
- **PROBLEMS:** CSES *Distinct Values Queries* (compare with the BIT-offline solution from L108); Codeforces Mo's classics (*Powerful Array*-style).
- **GOAL:** viewer implements Mo's and knows when it's worth it.

---

**L112 · Day 78 · Treaps and Implicit Treaps (Sequence Surgery) — 55 min**

`00:00` operations no segment tree can do: insert/erase in the middle, split, reverse a range · `06:00` treap recap from L54; **split** by key and **merge** — the two primitives, re-derived · `18:00` treap as an ordered multiset: insert, erase, k-th, rank, lower_bound · `26:00` **implicit treap**: key = position, maintained via subtree sizes — insert/erase/split/merge on a sequence in O(log n) · `38:00` **range reverse** with a lazy flip flag; range add with lazy; the cut-and-paste operation · `48:00` complexity in expectation; Python constant factors and the iterative-vs-recursive question · `52:00` alternatives: `sortedcontainers.SortedList` (where allowed), BIT descent (L105), balanced-BST-free designs

- **TEACH:** why implicit treaps are the answer to "move a subarray to the front"; combining lazy propagation with split/merge; being honest that in Python you should first try BIT/segment-tree reformulations.
- **CODE:** implicit treap with reverse and range-sum; cut-and-paste and substring-reversal problems.
- **PROBLEMS:** CSES *Cut and Paste*, *Substring Reversals*, *Reversals and Sums*; LeetCode 715 (alternative framing).
- **GOAL:** a working implicit treap for sequence surgery.

---

**L113 · Day 79 · Heavy-Light Decomposition — 60 min**

`00:00` path queries on trees: the problem statement · `06:00` heavy child = child with the largest subtree; heavy chains; the O(log n) light-edge bound proved · `18:00` the decomposition DFS: `heavy[]`, `head[]`, `pos[]` (positions contiguous per chain) · `30:00` **path query** by climbing chains: O(log n) segments, each a range query → O(log² n) total · `42:00` subtree queries for free (contiguous ranges from the same DFS order, L55) · `48:00` edge weights vs vertex weights (the standard offset trick); path updates with a lazy segment tree · `54:00` HLD vs LCA-with-lifting vs Euler-tour + BIT: what each can and can't do

- **TEACH:** the two-key ordering that makes chains contiguous; the climbing loop written once and reused for any monoid; converting edge values to child-vertex values.
- **CODE:** full HLD class over the generic segment tree from L106 — `path_query`, `path_update`, `subtree_query`, `subtree_update`.
- **PROBLEMS:** CSES *Path Queries*, *Path Queries II*, *Subtree Queries*, *Counting Paths*; LeetCode 2277 (alternative framing); Codeforces HLD problems.
- **GOAL:** HLD implemented and reusable.

---

**L114 · Day 80 · Frontier Structures: Segment Tree Beats, Link-Cut Trees, Euler Tour Trees — 45 min**

`00:00` scope-setting: what's beyond the standard toolkit and when you actually need it · `04:00` **Segment tree beats** (Ji Driver Tree): range `min(a_i, x)` / range chmin/chmax with sum queries; the max/second-max node design and the amortised O(n log² n) argument · `20:00` **link-cut trees**: represented trees via splay trees, `access`/`link`/`cut`/`path aggregate` in amortised O(log n) — concepts, use cases (dynamic connectivity on trees, online LCA under updates), and an honest "in Python, avoid unless forced" · `33:00` **Euler tour trees** and offline dynamic connectivity (link back to L71's D&C-over-time, which is usually the better contest answer) · `40:00` a map of what to learn next after this series

- **TEACH:** the amortised potential argument behind beats; recognising the tiny set of problems that genuinely require these; the strategic value of knowing a technique exists even without implementing it.
- **CODE:** segment tree beats for chmin + sum (the one implementable in Python within a lesson); pseudocode walkthrough for LCT.
- **PROBLEMS:** Codeforces beats problems (chmin/chmax + sum); CSES *Dynamic Connectivity* revisited with the offline method.
- **GOAL:** viewer can identify these problems and knows the trade-offs.

---

**L115 · Day 80 · Bitsets in Python: Big Integers as Word-Parallel Arrays — 50 min**

`00:00` the 64× speedup that Python programmers ignore · `05:00` Python `int` as an arbitrary-length bitset: `|`, `&`, `^`, `<<`, `>>`, `bit_count()` all run at C speed over machine words · `14:00` **subset sum** in O(n·W/64): `mask |= mask << w` (finishing L83) with timings · `22:00` **LCS/edit distance** bit-parallel (Myers' algorithm) sketch · `28:00` **transitive closure** / reachability: `reach[i] |= reach[j]` over rows, turning O(V³) into O(V³/64) — the practical way to do Floyd–Warshall reachability at V=2000 in Python · `36:00` bipartite matching and clique-adjacent problems with bitset adjacency rows · `42:00` counting pairs with `popcount` tricks; Hamming distance over many vectors · `46:00` limitations: no in-place mutation (each op allocates), memory, and how to batch rows

- **TEACH:** thinking in "rows of bits" rather than lists of booleans; the allocation cost model for big ints; when a 64× constant factor changes the feasible complexity class in practice.
- **CODE:** subset sum with big ints; transitive closure at V=2000; a bitset-accelerated DP timed against the plain version.
- **PROBLEMS:** CSES *Beautiful Subgrids*, *Hamming Distance*, *Reachable Nodes*, *Reachability Queries*, *One Bit Positions*; LeetCode 1310 (alternative framing).
- **GOAL:** viewer applies bitset acceleration where Python would otherwise TLE.

---

**L116 · Day 81 · Contest Day 7 + Editorial (Advanced Data Structures) — 100 min**

`00:00` rules: 6 problems, 3 hours · editorial: `05:00` P1 BIT + compression · `20:00` P2 segment tree with a custom node · `36:00` P3 lazy propagation · `52:00` P4 offline queries (sort + BIT) vs Mo's · `68:00` P5 HLD or Euler tour · `84:00` P6 sqrt/bitset rescue of an "impossible in Python" problem · `94:00` the range-query decision flowchart

- **TEACH:** the flowchart — updates? which operation? invertible? idempotent? offline? coordinates huge? sequence surgery? → structure. Plus a Python-specific "will this pass?" estimate.
- **CODE:** six solutions at contest pace.
- **PROBLEMS:** curated set, ratings 1700–2200; the full CSES Range Queries and Tree Algorithms sections as ongoing homework.
- **GOAL:** 4+/6 and a `structures.py` library file.

---

## PHASE 8 — Number Theory, Combinatorics, Linear Algebra, FFT
**Days 82–89 · L117–L127**

> **Ordering note:** modular arithmetic essentials (add/multiply/fast power/inverse via Fermat) are introduced on demand in L37 (hashing) and L50 (exponentiation by squaring), because you need them before Phase 8 arrives. If you prefer math-first, watch **L117–L119 immediately after L50** and treat Phase 8 as revision plus the advanced half.

---

**L117 · Day 82 · Number Theory I: GCD, Extended Euclid, Diophantine Equations — 55 min**

`00:00` divisibility, primes, the fundamental theorem of arithmetic · `07:00` **Euclid's algorithm**: `gcd(a,b) = gcd(b, a mod b)`, proof, O(log min(a,b)) via the Fibonacci worst case · `18:00` `lcm(a,b) = a·b/gcd` and overflow-free ordering (a non-issue in Python — say so) · `22:00` **extended Euclid**: finding x, y with `ax + by = gcd(a,b)`, derived recursively and iteratively · `34:00` **linear Diophantine equations** `ax + by = c`: solvability iff `gcd | c`, the general solution family, finding minimal positive solutions · `44:00` modular inverse via extended Euclid (works for any coprime modulus, unlike Fermat) · `50:00` applications: coin/step problems, Chicken McNugget/Frobenius intuition, gcd over a range with sparse tables (L103)

- **TEACH:** the recursion that carries coefficients back up; parameterising all solutions and clamping to a range — the part contest problems actually test; `math.gcd` exists, but you must be able to derive the extended version.
- **CODE:** iterative extended Euclid; a Diophantine solver returning the full solution family; inverse for non-prime moduli.
- **PROBLEMS:** CSES *Common Divisors*, *Counting Coprime Pairs* (with L120); Codeforces Diophantine problems; Project Euler-style gcd tasks.
- **GOAL:** viewer solves `ax + by = c` completely and inverts modulo anything coprime.

---

**L118 · Day 83 · Number Theory II: Primes, Sieves, and Factorisation — 55 min**

`00:00` primality testing: trial division to √n · `06:00` **sieve of Eratosthenes** in O(n log log n): the classic, plus the odd-only and segmented variants; Python implementation with `bytearray` and slice assignment (a big constant-factor win) · `20:00` **linear sieve** computing smallest prime factor, plus multiplicative functions on the fly · `30:00` factorisation via SPF in O(log n) per query after an O(n) sieve · `36:00` **Miller–Rabin** deterministic for 64-bit with the standard witness set — implemented · `46:00` **Pollard's rho** with Brent's improvement for factorising up to 10¹⁸ · `52:00` counting/sum of divisors from the factorisation; number of divisors of n! ; divisor sieve in O(n log n)

- **TEACH:** the slice-assignment sieve idiom (`is_p[i*i::i] = bytearray(len(...))`); why Miller–Rabin's witness set is deterministic below 3.3·10²⁴; rho as birthday-paradox cycle finding (reusing Floyd from L31).
- **CODE:** fast bytearray sieve to 10⁷ with timings; linear sieve with SPF; Miller–Rabin + Pollard's rho factorising a 18-digit number live.
- **PROBLEMS:** CSES *Counting Divisors*, *Prime Multiples*, *Divisor Analysis*, *Sum of Divisors*; LeetCode 204, 1175, 2183.
- **GOAL:** a sieve, an SPF table, and a 10¹⁸ factoriser in the library.

---

**L119 · Day 83 · Number Theory III: Modular Arithmetic, CRT, Discrete Log — 55 min**

`00:00` the ring Z/nZ: what's safe and what isn't · `06:00` addition, multiplication, subtraction with negatives; `pow(a, b, m)` and the manual fast-power both shown · `14:00` **Fermat's little theorem** and inverses mod prime; **Euler's theorem** for general moduli; the exponent-reduction rule `a^b mod m` with `b mod φ(m)` and its precondition caveat · `26:00` batch inverses in O(n) (prefix-product trick) and inverse factorials — the setup every combinatorics problem needs · `34:00` **Chinese remainder theorem** for coprime and non-coprime moduli, constructive proof and implementation · `46:00` **discrete logarithm** with baby-step giant-step in O(√m) · `52:00` primitive roots, order of an element, quadratic residues and Tonelli–Shanks (mentioned, code in repo)

- **TEACH:** why `1/x` never appears in modular code and inverses replace it; when the exponent-reduction rule is invalid (a not coprime to m); CRT as a bijection between residue systems.
- **CODE:** `ModInt`-style helpers, batch inverse, factorial/inverse-factorial tables; CRT for both cases; BSGS.
- **PROBLEMS:** CSES *Exponentiation II*, *Binomial Coefficients*; Codeforces CRT and BSGS problems.
- **GOAL:** a complete modular-arithmetic toolkit.

---

**L120 · Day 84 · Number Theory IV: Totient, Möbius, and Divisor Sums — 55 min**

`00:00` multiplicative functions defined · `06:00` **Euler's totient φ**: formula from the factorisation, computing it for one n, and sieving φ for all n ≤ 10⁶ · `18:00` applications: counting coprimes, `Σ gcd(i, n)`, orders and cyclic groups · `24:00` **Möbius function μ**: definition, sieve, and the key identity `Σ_{d|n} μ(d) = [n=1]` · `34:00` **Möbius inversion** and "count pairs with gcd = 1 / gcd = k" solved by inclusion–exclusion over divisors · `44:00` divisor-sum tricks: iterating multiples in O(n log n), Dirichlet convolution as the unifying language · `50:00` `Σ_{i=1}^{n} f(⌊n/i⌋)` in O(√n) — the divisor-block technique, with a worked example

- **TEACH:** Möbius as the inverse of the "sum over divisors" operator; the harmonic-sum complexity O(n log n) of iterating multiples; divisor blocks as the standard way to beat O(n) on huge n.
- **CODE:** φ and μ sieves; count coprime pairs both by Möbius and by inclusion–exclusion; a √n divisor-block sum.
- **PROBLEMS:** CSES *Counting Coprime Pairs*, *Common Divisors*; Codeforces Möbius problems; classic `Σ gcd` tasks.
- **GOAL:** viewer solves gcd-counting problems with Möbius.

---

**L121 · Day 85 · Combinatorics I: Counting Foundations — 55 min**

`00:00` the counting mindset: bijections, double counting, symmetry · `07:00` rule of sum and product; permutations P(n,k); combinations C(n,k); multinomials · `18:00` Pascal's triangle, the recurrence, and when a table beats formulas · `24:00` **C(n,k) mod p** with factorial + inverse-factorial tables (from L119), and C(n,k) for huge n with small k · `32:00` **stars and bars**: distributing n identical items into k boxes, with and without empty boxes, with lower/upper bounds · `42:00` permutations with repetition, circular permutations, necklaces preview · `48:00` the **contribution technique**: count each element's contribution across all subsets/subarrays (reused from L28) — three worked examples

- **TEACH:** choosing between "count directly" and "count the complement"; the contribution reframe as the highest-leverage counting trick in contests; sanity-checking formulas against brute force for n ≤ 8.
- **CODE:** factorial/inverse tables + `nCk` mod p; three contribution problems; a brute-force verifier.
- **PROBLEMS:** CSES *Binomial Coefficients*, *Creating Strings II*, *Distributing Apples*, *Christmas Party*, *Counting Grids*; LeetCode 62 (formula version), 1223.
- **GOAL:** viewer computes any binomial mod p and applies contribution counting.

---

**L122 · Day 85 · Combinatorics II: Inclusion–Exclusion, Catalan, Stirling, Burnside — 60 min**

`00:00` **inclusion–exclusion**: the general formula, the 2ⁿ-subset implementation, and the "at least → exactly" conversion · `14:00` derangements (both the recurrence and the IE formula); surjection counting; "count numbers divisible by none of these primes" · `26:00` **Catalan numbers**: five equivalent interpretations (balanced brackets, binary trees, triangulations, monotone paths, stack-sortable permutations), the closed form, and the reflection proof · `40:00` **Stirling numbers** of the second kind (set partitions) and first kind (cycles); Bell numbers · `48:00` **Burnside's lemma / Pólya enumeration**: counting up to symmetry (necklaces, colourings under rotation/reflection) with worked examples · `56:00` when to use IE vs DP vs Burnside — the decision guide

- **TEACH:** the reflection/ballot argument for Catalan; the group-action framing of Burnside without heavy algebra; IE with a bitmask over ≤ 20 constraints as a standard implementation pattern.
- **CODE:** IE over subsets of primes; Catalan via DP and via the formula (cross-checked); necklace counting with Burnside.
- **PROBLEMS:** CSES *Bracket Sequences I/II*, *Counting Necklaces*, *Counting Coprime Pairs*; LeetCode 96, 1259, 22.
- **GOAL:** three new counting weapons, with the ability to choose between them.

---

**L123 · Day 86 · Combinatorics III: Lucas, Generating Functions, Recurrences — 50 min**

`00:00` C(n,k) when the modulus is small and n is astronomical · `05:00` **Lucas' theorem** with proof sketch and implementation; **generalised Lucas / Andrew Granville** for prime powers (mentioned, code in repo) · `16:00` **generating functions**: the formal power series view; `1/(1−x)` and friends; product of GFs = convolution = "combine independent choices" · `30:00` solving linear recurrences with GFs; partial fractions; closed forms for Fibonacci-like sequences · `40:00` GFs for coin/partition counting, and the direct correspondence to knapsack DP (L84) — the same computation, two languages · `46:00` exponential generating functions in one paragraph; the bridge to FFT (L126) as "multiply the polynomials fast"

- **TEACH:** reading a GF as a bag of choices; recognising that "the answer is a coefficient of a polynomial product" makes FFT applicable; deriving a closed form and verifying it numerically.
- **CODE:** Lucas; a GF-based coin-counting solution compared against the DP; a closed-form check.
- **PROBLEMS:** CSES *Distributing Apples*, *Bracket Sequences II*; Codeforces Lucas problems; partition-counting tasks.
- **GOAL:** viewer uses Lucas and thinks in generating functions.

---

**L124 · Day 87 · Matrix Exponentiation, Linear Recurrences, Berlekamp–Massey — 55 min**

`00:00` matrix multiplication, identity, associativity · `06:00` **binary exponentiation of matrices** in O(d³ log n) mod p; implementation with flat lists for speed · `18:00` building the transition matrix from a recurrence, mechanically; adding constant terms via an augmented row · `28:00` counting walks of length n in a graph; DP with tiny state and huge n (link L92, L101) · `36:00` min-plus (tropical) matrix multiplication for "shortest path with exactly k edges" · `43:00` **Kitamasa** for the n-th term of a d-order recurrence in O(d² log n); **Berlekamp–Massey** to *find* the recurrence from a computed prefix — the practical "guess the recurrence" contest weapon · `52:00` the workflow: brute-force the first 30 terms → BM → Kitamasa → answer for n = 10¹⁸

- **TEACH:** the mechanical matrix construction; the min-plus semiring as a drop-in replacement; the BM workflow, which converts unsolved problems into solved ones surprisingly often.
- **CODE:** matrix power class; Fibonacci at n=10¹⁸; graph-walk counting; min-plus for exactly-k-edges paths; BM demo.
- **PROBLEMS:** CSES *Fibonacci Numbers*, *Throwing Dice*, *Graph Paths I/II*; LeetCode 1220, 552.
- **GOAL:** viewer solves n = 10¹⁸ recurrences.

---

**L125 · Day 87 · Linear Algebra: Gaussian Elimination and XOR Basis — 55 min**

`00:00` systems of linear equations in CP · `06:00` **Gaussian elimination** over the reals: pivoting, elimination, back-substitution, O(n³); numerical stability and partial pivoting · `20:00` rank, determinant, free variables, infinite/no-solution detection; solving mod p (with modular inverses) · `32:00` matrix inverse; Kirchhoff/matrix-tree theorem mention for counting spanning trees · `38:00` **XOR linear basis (GF(2))**: insert, reduce, size — maximum XOR of any subset, k-th smallest XOR value, counting distinct XOR values, checking representability · `50:00` implementation with plain Python ints (each basis vector a single int) — elegant and fast · `54:00` applications: random-walk expectation systems (L95), circuit/parity problems, linearly-independent subsets

- **TEACH:** the basis-insertion loop (reduce by higher bits, insert at the highest remaining set bit); why the basis has size ≤ 60 and gives 2^rank distinct values; exact rational vs modular elimination.
- **CODE:** Gaussian elimination over Q (with `Fraction` for exactness) and mod p; `XorBasis` class solving max-subset-XOR and k-th XOR.
- **PROBLEMS:** Codeforces XOR-basis problems; CSES-adjacent linear-system tasks; expectation systems from L95.
- **GOAL:** an XOR basis and a modular linear solver in the library.

---

**L126 · Day 88 · FFT and NTT: Fast Convolution — 65 min**

`00:00` the polynomial multiplication problem and its O(n²) baseline · `07:00` roots of unity, the DFT, and the key property that makes divide & conquer work · `18:00` **recursive FFT** derived (even/odd split), then the **iterative in-place version** with bit-reversal permutation · `32:00` inverse FFT (conjugate trick), rounding to integers, and precision limits — the honest bit-count analysis for when doubles fail · `42:00` **NTT** mod 998244353: primitive root 3, why that modulus, and the identical structure without floating point · `52:00` applications: big-integer multiplication, counting pairs with a given sum, string matching with wildcards, convolution of distributions, polynomial inverse/division/exp (mentioned) · `60:00` Python reality: `numpy.fft` for real-valued convolution, and when Python's built-in big-int multiplication (which is already Karatsuba+) is the better answer

- **TEACH:** the FFT butterfly as the same D&C shape from L50; precision bound estimation; the practical decision — NTT for exact mod work, numpy FFT for speed, big-int trick for small alphabets.
- **CODE:** iterative NTT with `multiply()`; a counting-pairs-by-sum problem; numpy FFT comparison and a big-int packing trick.
- **PROBLEMS:** CSES *Signal Processing*, *Apples and Bananas*; AtCoder convolution tasks; classic "count pairs summing to k" over large ranges.
- **GOAL:** a working NTT and knowing when to skip it.

---

**L127 · Day 89 · Contest Day 8 + Editorial (Mathematics) — 100 min**

`00:00` rules: 6 problems, 3 hours · editorial: `05:00` P1 sieve/factorisation · `20:00` P2 modular combinatorics · `36:00` P3 inclusion–exclusion or Möbius · `52:00` P4 matrix exponentiation · `68:00` P5 XOR basis or Gaussian elimination · `84:00` P6 convolution/counting · `94:00` the "is this a math problem?" recognition guide + OEIS workflow

- **TEACH:** the brute-force-small-cases → OEIS → guess-and-verify pipeline; how to tell a formula problem from a DP problem from constraints (n up to 10¹⁸ means formula or matrix power).
- **CODE:** six solutions at contest pace.
- **PROBLEMS:** curated math set, ratings 1500–2100; the CSES Mathematics section as ongoing homework.
- **GOAL:** 4+/6 and a `mathlib.py` library file.

---

## PHASE 9 — Computational Geometry
**Days 90–94 · L128–L134**

---

**L128 · Day 90 · Geometry I: Points, Vectors, Cross Products, Orientation — 55 min**

`00:00` why geometry problems are lost to precision, not logic · `05:00` points as tuples vs a `Point` class; **integer arithmetic wherever possible** as rule number one · `12:00` vector addition, scaling, dot product (projection, angle sign, perpendicularity), norm and squared norm (never take the square root if you can compare squares) · `24:00` **cross product** in 2D: signed area of the parallelogram, and the three things it tells you — orientation (CCW/CW/collinear), area, and sine of the angle · `36:00` `orient(a,b,c)` as the single primitive most geometry code is built from · `42:00` comparing angles without `atan2` (half-plane + cross product), sorting points by angle · `50:00` `EPS` discipline for the unavoidable float cases; `Fraction` for exact rational geometry

- **TEACH:** the rule "predicates before constructions" — decide with integer cross products, only compute coordinates when you must; the standard `sign()` helper; the classic angular-sort bug and its fix.
- **CODE:** a geometry header (`cross`, `dot`, `orient`, `dist2`, `cmp_angle`); an angular sort that survives duplicates and collinear points.
- **PROBLEMS:** CSES *Point Location Test*; LeetCode 1266, 149; orientation-based warm-ups.
- **GOAL:** an exact-integer geometry primitives file.

---

**L129 · Day 90 · Geometry II: Lines, Segments, Intersections, Distances — 55 min**

`00:00` line representations: two points, `ax + by + c = 0`, parametric — and when to prefer each · `10:00` **segment intersection**: the orientation test (all four signs) plus the collinear-overlap case, done exhaustively — this is where bugs live · `24:00` intersection *point* of two lines (Cramer's rule), parallel and coincident detection · `32:00` distance from point to line and to **segment** (with the projection clamped to [0,1]) · `40:00` foot of perpendicular, reflection of a point across a line, closest point on a segment · `46:00` circle–line and circle–circle intersection; tangent lines · `52:00` collinearity, "do these segments form a simple polygon" checks

- **TEACH:** enumerating the degenerate cases up front (parallel, collinear, touching at an endpoint, zero-length segment) and writing a test for each; keeping intersection *tests* integer-only even when the intersection *point* is rational.
- **CODE:** `segments_intersect` with a full degenerate-case test suite; point-to-segment distance; circle–circle intersection.
- **PROBLEMS:** CSES *Line Segment Intersection*; LeetCode 836, 1229 (alternative framing); classic intersection-counting warm-ups.
- **GOAL:** a segment-intersection routine that handles every degenerate case.

---

**L130 · Day 91 · Geometry III: Polygons — 55 min**

`00:00` polygon representation, simple vs self-intersecting, convex vs concave, orientation · `08:00` **shoelace formula** for signed area, derived from cross products; twice-area stays an integer · `18:00` centroid of a polygon (and why it differs from the vertex average) · `24:00` **point in polygon**: ray casting with careful boundary handling; the winding-number method; O(log n) for convex polygons via binary search on angles · `40:00` convexity check; is a point strictly inside/on the boundary · `46:00` **Pick's theorem** for lattice polygons; counting lattice points on a segment via gcd (link L117) · `52:00` polygon cutting by a line, and triangulation by ear clipping (mentioned)

- **TEACH:** the shoelace sign as an orientation detector; the ray-casting rules that make boundary and vertex-crossing cases correct; Pick's theorem as an instant win on lattice-counting problems.
- **CODE:** area, centroid, point-in-polygon (both methods, cross-checked), convex point-in-polygon in O(log n), Pick's theorem.
- **PROBLEMS:** CSES *Polygon Area*, *Point in Polygon*, *Polygon Lattice Points*; LeetCode 812, 963.
- **GOAL:** all standard polygon predicates, with exact arithmetic.

---

**L131 · Day 92 · Geometry IV: Convex Hull — 55 min**

`00:00` the convex hull problem and where it appears · `06:00` **Andrew's monotone chain**: sort by (x, y), build lower and upper hulls with the orientation test, O(n log n) — implemented live · `22:00` Graham scan with angular sorting, as the alternative · `30:00` the collinear-points decision (`< 0` vs `<= 0`) and why the problem statement decides it for you · `36:00` degenerate inputs: all points collinear, duplicates, n ≤ 2 · `42:00` applications: diameter of a point set, minimum-area enclosing rectangle, hull of a hull for CHT (link L100), "is the polygon convex", Minkowski sum preview · `50:00` dynamic/upper hull maintenance and its relation to the convex hull trick

- **TEACH:** why sorting plus one orientation test is all you need; testing hulls with a brute-force "is every point inside" checker; the direct conceptual link between geometric hulls and the DP optimisation in L100.
- **CODE:** monotone chain with a strict/non-strict flag; hull tested against brute force on random and adversarial inputs.
- **PROBLEMS:** CSES *Convex Hull*; LeetCode 587; classic hull applications.
- **GOAL:** a bulletproof convex hull implementation.

---

**L132 · Day 92 · Geometry V: Rotating Calipers, Closest Pair, Minimum Enclosing Circle — 55 min**

`00:00` what the hull unlocks · `05:00` **rotating calipers**: the antipodal-pair walk in O(n) → diameter of a point set, width, minimum-area/perimeter enclosing rectangle · `20:00` **closest pair of points** by divide & conquer in O(n log n): the strip argument and the "only 7 neighbours" proof · `36:00` the sweep-line + sorted-set alternative for closest pair (and the Python-friendly grid/bucket randomised version) · `44:00` **minimum enclosing circle** with Welzl's randomised algorithm, expected O(n) · `52:00` maximum points on a line/circle; farthest-point queries

- **TEACH:** the calipers invariant; the closest-pair strip bound proof; randomised incremental construction as a pattern (also used in L135).
- **CODE:** calipers diameter; closest pair D&C stress-tested against O(n²); Welzl's algorithm.
- **PROBLEMS:** CSES *Minimum Euclidean Distance*; LeetCode 149, 1266 (alternative framing); hull-diameter problems.
- **GOAL:** three hull-based algorithms implemented.

---

**L133 · Day 93 · Geometry VI: Sweep Line and Advanced Topics — 60 min**

`00:00` sweep line in the plane, generalising L34 · `06:00` **Bentley–Ottmann style** segment-intersection detection (event queue + status structure), and the practical O(n log n) "any intersection?" version · `20:00` **area of the union of rectangles** with a sweep + segment tree storing "covered length" — the classic hard-but-standard problem, derived fully · `36:00` counting rectangle intersections; the skyline problem revisited geometrically · `42:00` **half-plane intersection** in O(n log n) — the algorithm and its uses (feasible regions, LP in 2D) · `50:00` **Minkowski sum** of convex polygons in O(n+m) and the "do two convex polygons intersect" reduction · `56:00` Delaunay triangulation and Voronoi diagrams — what they are, when they matter, and where to find code

- **TEACH:** the sweep-line status structure choice (sorted set vs segment tree over compressed coordinates); the covered-length segment tree node design (count + covered length), which is a genuinely instructive lazy-free design.
- **CODE:** rectangle-union area end to end; half-plane intersection; Minkowski sum.
- **PROBLEMS:** CSES *Area of Rectangles*; LeetCode 850, 218, 391; convex-polygon intersection tasks.
- **GOAL:** viewer solves rectangle-union area unaided.

---

**L134 · Day 94 · Contest Day 9 + Editorial (Geometry) — 90 min**

`00:00` rules: 5 problems, 2.5 hours · editorial: `05:00` P1 orientation/area · `20:00` P2 segment intersection with degenerate cases · `35:00` P3 convex hull application · `52:00` P4 sweep line · `70:00` P5 mixed geometry + data structure · `84:00` the precision checklist and the geometry-bug postmortem

- **TEACH:** the pre-submit precision checklist (integers where possible, no unnecessary square roots, EPS only where forced, `Fraction` when desperate); how to visualise geometry bugs by plotting with matplotlib locally.
- **CODE:** five solutions live, plus a small plotting utility for debugging.
- **PROBLEMS:** curated geometry set, ratings 1500–2000; the full CSES Geometry section as homework.
- **GOAL:** 3+/5 and a `geometry.py` library file.

---

## PHASE 10 — Contest Craft, Meta-Skills, and the Capstone
**Days 95–100 · L135–L142**

---

**L135 · Day 95 · Randomisation as a Technique — 50 min**

`00:00` randomness as a legitimate algorithmic tool, not a hack · `05:00` random shuffling to defeat adversarial input (quicksort pivots, treap priorities, hash salts — all callbacks) · `13:00` **random sampling**: "find an element appearing more than n/2 times" in O(k) expected; majority-in-range problems with a segment tree of random samples · `22:00` **XOR hashing** of sets/multisets: assign each value a random 64-bit id, XOR them — equality of subtrees/subarrays/multisets in O(1) · `32:00` Zobrist hashing for grids and game states · `38:00` birthday-paradox arguments and failure-probability budgeting (aim for < 10⁻⁹ per test, then multiply by the number of queries) · `44:00` Monte Carlo vs Las Vegas; randomised primality (L118) and Welzl (L132) as instances · `47:00` how to seed reproducibly for debugging but unpredictably for judges

- **TEACH:** computing the failure probability explicitly rather than hoping; XOR hashing as the answer to a whole family of "are these two collections equal" problems; why `random.getrandbits(64)` matters over small random ranges.
- **CODE:** XOR-hash multiset comparison; random-sample majority queries; Zobrist for a game-state cache.
- **PROBLEMS:** Codeforces XOR-hashing problems; majority-in-range tasks; a hack-resistant rewrite of an earlier solution.
- **GOAL:** viewer uses randomness deliberately, with a probability budget.

---

**L136 · Day 95 · Offline Processing, Query Reordering, and CDQ Divide & Conquer — 55 min**

`00:00` the strategic question: must this be answered online? · `05:00` the four reorderings — by index, by value, by time, by block (Mo) — with an example of each · `16:00` sort-by-right-endpoint + BIT for "distinct values in range" and "count pairs" problems (the pattern from L108, formalised) · `26:00` **offline dynamic connectivity** via D&C over time with rollback DSU (finishing L71) · `36:00` **CDQ divide & conquer**: reduce 3D partial-order counting (time, x, y) to sorting + BIT; the "left half updates affect right half queries" framing · `48:00` parallel binary search: answer q binary searches simultaneously in O((n+q) log n) · `53:00` the meta-lesson: offline is usually simpler *and* faster than the online structure

- **TEACH:** the "which dimension do I sort away?" question as the core of offline design; CDQ as D&C over queries rather than over data; parallel binary search's bucket-per-candidate implementation.
- **CODE:** CDQ for 3D dominance counting; parallel binary search on a "when does node u become connected to v" problem.
- **PROBLEMS:** CSES *Dynamic Connectivity*, *New Roads Queries*; Codeforces CDQ and parallel-binary-search problems; LeetCode 1697.
- **GOAL:** viewer converts online problems to offline ones deliberately.

---

**L137 · Day 96 · Constructive Algorithms and Ad-Hoc Problems — 55 min**

`00:00` the constructive genre: "output any valid X" · `05:00` the standard toolkit — small cases by hand, find the pattern, generalise, prove by construction; induction ("solve n from n−1"); build greedily and prove validity · `18:00` parity, invariants, and monovariants as impossibility proofs (when the answer is −1) · `28:00` symmetry and pairing constructions; extremal arguments ("take the largest") · `36:00` worked examples: construct a permutation with a given property, fill a grid with constraints, build a graph with given degrees (Erdős–Gallai / Havel–Hakimi), split a set into two with equal sums · `48:00` the "guess and verify with a brute force" workflow: write a checker first, then experiment · `52:00` ad-hoc problems: how to fail fast and move on

- **TEACH:** the discipline of writing the validity checker before the construction; the "n → n+1" induction pattern; recognising when −1 is the answer via an invariant.
- **CODE:** three constructions built with a checker in the loop, including one that fails and gets fixed live.
- **PROBLEMS:** a curated Codeforces constructive set (Div2 B/C level), ratings 1200–1700; degree-sequence construction.
- **GOAL:** viewer has a repeatable procedure for the most "unteachable" genre.

---

**L138 · Day 97 · Interactive Problems and Special Judges — 45 min**

`00:00` how interactive problems work: your program talks to the judge · `05:00` **flushing** — `print(..., flush=True)` or `sys.stdout.flush()`, the single most common cause of TLE/IE on interactives · `12:00` the query-budget mindset: information theory bounds (log₂ of the search space, and why "20 queries for n=10⁶" means binary search) · 
`22:00` interactive binary search, guessing a number, finding a hidden permutation, "compare two elements" sorting problems · `32:00` adaptive judges and why your algorithm must be correct against an adversary, not a fixed hidden answer · `38:00` writing a **local interactor** to test offline (two processes / a mock judge class) · `42:00` special-judge problems (any valid answer) and how to self-verify

- **TEACH:** counting information per query to derive the intended query count; local interactor construction as the thing that makes interactives debuggable; adversary arguments.
- **CODE:** a guessing-game solution with a local mock judge; a hidden-permutation problem with a query counter.
- **PROBLEMS:** Codeforces interactive problems (Div2 level); AtCoder interactive tasks.
- **GOAL:** viewer can write and locally test an interactive solution.

---

**L139 · Day 98 · Contest Strategy: Two Hours, Six Problems — 55 min**

`00:00` the scoring systems: ICPC-style penalty, Codeforces Div rounds and hacks, AtCoder scoring, CodeChef long challenges — what each rewards · `12:00` the opening: read A–C immediately, skim the rest, sort by expected difficulty (statement length, sample size, tags-by-intuition) · `22:00` time allocation: the 20-minute rule, when to switch, when to come back, when to guess-and-submit · `30:00` **penalty math**: is a risky submit worth it? (compute the expected cost) · `36:00` reading statements accurately: constraints, multi-test, output format, "print any", modulo · `42:00` pre-submit checklist: sample tested, edge cases (n=1, all equal, max n), reset globals between tests, I/O speed, recursion limit · `48:00` mental state: tilt management, the "stand up for 60 seconds" reset, and what to do after a WA · `52:00` post-contest: upsolve within 48h, write a one-paragraph editorial for yourself

- **TEACH:** the actual arithmetic of penalty vs expected gain; a concrete pre-submit checklist to print out; the multi-testcase state-reset bug that costs more points than any algorithm gap.
- **CODE:** demonstrate the checklist on a real submission; show a stale-global-state bug and its fix.
- **PROBLEMS:** review the viewer's own past contest performances against the framework.
- **GOAL:** viewer has a written contest protocol.

---

**L140 · Day 98 · The Practice System: Rating Roadmaps and Spaced Repetition — 50 min**

`00:00` deliberate practice vs grinding · `05:00` choosing problem difficulty: the "solvable in 20–40 minutes with effort" zone, and why solving easy problems fast doesn't raise your rating · `14:00` platform roadmaps — Codeforces by rating band (800→1200→1400→1600→1900), AtCoder ABC A–F progression, CSES section completion, LeetCode for interviews, USACO Bronze→Platinum for structured algorithms · `26:00` **the tracking system**: a spreadsheet with problem, topic, time taken, whether you needed the editorial, and a re-solve date · `34:00` **spaced repetition** for algorithms: re-implement your library from scratch on a schedule (BIT day 3, segment tree day 7, HLD day 21) · `40:00` how to read an editorial properly (read one line, close it, try again); the "solve it again in 3 days without notes" rule · `45:00` virtual contests, upsolving, and why 3 virtual contests a week beats 30 random problems

- **TEACH:** the metric that matters (problems solved without editorial help at your target rating + 200); why re-implementation beats re-reading; how to identify your weakest topic from the tracking data.
- **CODE:** the tracking spreadsheet/Notion template; a script that pulls your Codeforces submissions and reports per-tag accuracy.
- **PROBLEMS:** set up the system and schedule the next 30 days of practice.
- **GOAL:** viewer leaves with a self-sustaining practice loop for after Day 100.

---

**L141 · Day 99 · Interview-Focused Revision: The DSA Sprint — 55 min**

`00:00` how technical interviews differ from CP: communication, clean code, complexity discussion, tests · `08:00` the 15 interview patterns mapped back to this playlist's lessons (two pointers → L14, sliding window → L15, monotonic stack → L28, top-k heap → L33, backtracking → L48, tree DFS → L52, BFS/graph → L63, DP families → L82–L88, tries → L41, intervals → L34) · `24:00` **the interview protocol**: clarify → examples → approach out loud → complexity → code → test → optimise · `34:00` writing interview-grade Python: naming, small functions, guard clauses, no clever one-liners, dataclasses, type hints · `42:00` system-design-adjacent DSA questions (LRU/LFU, rate limiter, autocomplete, top-k stream, median stream) — all built earlier in this series · `50:00` a 14-day revision plan and a mock-interview schedule

- **TEACH:** talking while coding; stating complexity before writing; the difference between contest code and production-readable code, and when each is appropriate.
- **CODE:** one problem solved twice — contest style vs interview style — side by side.
- **PROBLEMS:** a 60-problem interview list (mapped to lessons) in the repo; two mock interviews.
- **GOAL:** viewer converts CP skill into interview performance.

---

**L142 · Day 100 · Capstone: Final Mock Contest + Full Editorial + What Next — 150 min**

`00:00` rules: 8 problems, 4 hours, Div2-to-Div1-A difficulty spread — pause and compete · editorial: `10:00` P1–P2 (implementation, greedy) · `30:00` P3 (data structure) · `48:00` P4 (graph) · `66:00` P5 (DP) · `86:00` P6 (math) · `104:00` P7 (strings or geometry) · `120:00` P8 (mixed hard) · `136:00` the 100-day retrospective: what you can now do that you couldn't on Day 1 · `142:00` **what next** — Div1 problem sets, ICPC regional prep and team roles, IOI-style training, USACO Platinum, learning C++ for the 10× constant factor, contributing problems, and the specific next 100 days
 
- **TEACH:** the honest self-assessment rubric (topic-by-topic: can implement from scratch / can use library / can only recognise); building your own follow-up curriculum; when to switch languages and when not to.
- **CODE:** all eight solutions, plus a final walkthrough of the complete `cplib/` package built across 100 days.
- **PROBLEMS:** the 8-problem capstone set; a 200-problem "next 100 days" list in the repo.
- **GOAL:** viewer finishes with a working library, a practice system, a measured rating gain, and a concrete next step.

---

---

# APPENDIX A — The Day-by-Day Calendar

Total: **142 lessons · 100 days · ~132 hours**. "×2" marks a double-lesson day.

| Day | Ph | Lessons | Min |
|---|---|---|---|
| **1** | 0 | ×2 **L1** Course Roadmap: What 100 Days Actually Buys You <br> **L2** Environment, Template & Fast I/O That Won't TLE | 75 |
| **2** | 0 | ×2 **L3** Python's Built-in Data Structures and Their Real Complexities <br> **L4** The Standard Library Arsenal — collections, itertools, heapq, bisect, functools, math | 115 |
| **3** | 0 | **L5** Time & Space Complexity, and Estimating Limits in Python | 50 |
| **4** | 0 | **L6** Recursion & Memoisation, Properly | 60 |
| **5** | 0 | ×2 **L7** Bit Manipulation I — Operators, Masks, and the Classic Tricks <br> **L8** Bit Manipulation II — Subset Enumeration and Bitmask Thinking | 105 |
| **6** | 0 | **L9** The Problem-Solving Framework — From Statement to Accepted | 50 |
| **7** | 0 | **L10** Debugging, Stress Testing & Never Failing on Test 47 | 45 |
| **8** | 1 | ×2 **L11** Arrays & Simulation: <br> **L12** Prefix Sums: The First Real Superpower | 85 |
| **9** | 1 | **L13** 2D Prefix Sums & Difference Arrays | 50 |
| **10** | 1 | **L14** Two Pointers | 50 |
| **11** | 1 | ×2 **L15** Sliding Window: Fixed and Variable <br> **L16** Monotonic Deque: Sliding Window Maximum | 100 |
| **12** | 1 | ×2 **L17** Sorting From Scratch I — Quadratic Sorts, Merge Sort, Inversions <br> **L18** Sorting From Scratch II — Quicksort, Quickselect, Linear Sorts, Timsort | 110 |
| **13** | 1 | **L19** Binary Search I: On Sorted Arrays | 50 |
| **14** | 1 | ×2 **L20** Binary Search II: Binary Search on the Answer <br> **L21** Binary Search III — Real Numbers, Ternary Search, Advanced Patterns | 100 |
| **15** | 1 | ×2 **L22** Greedy I: The Method and Its Proofs <br> **L23** Greedy II: Intervals, Scheduling, and Heap-Greedy | 100 |
| **16** | 1 | **L24** Coordinate Compression, Offline Sorting & Event Sweeps | 45 |
| **17** | 1 | **L25** Contest Day 1 + Full Editorial (Arrays → Greedy) | 90 |
| **18** | 2 | **L26** Hashing & Hash Maps: Internals and Anti-Hash Attacks | 50 |
| **19** | 2 | ×2 **L27** Stacks: Implementation and Core Applications <br> **L28** Monotonic Stack — Next Greater Element and the Histogram Family | 95 |
| **20** | 2 | **L29** Queues, Deques, Circular Buffers | 40 |
| **21** | 2 | ×2 **L30** Linked Lists I: Structure and Core Operations <br> **L31** Linked Lists II: Cycles, Reversal, and LRU/LFU | 100 |
| **22** | 2 | ×2 **L32** Heaps I: Binary Heap From Scratch <br> **L33** Heaps II — k-Way Merge, Top-K, Streaming Median, Lazy Deletion | 100 |
| **23** | 2 | **L34** Intervals & Sweep Line With Data Structures | 50 |
| **24** | 2 | **L35** Contest Day 2 + Editorial (Linear Data Structures) | 90 |
| **25** | 3 | **L36** String Fundamentals & Python-Specific Traps | 45 |
| **26** | 3 | **L37** String Hashing (Polynomial Rolling Hash) & Rabin–Karp | 55 |
| **27** | 3 | ×2 **L38** KMP and the Prefix Function <br> **L39** The Z-Function | 100 |
| **28** | 3 | **L40** Manacher's Algorithm — All Palindromic Substrings in O(n) | 50 |
| **29** | 3 | ×2 **L41** Trie (Prefix Tree) <br> **L42** Binary Trie & XOR Problems | 100 |
| **30** | 3 | **L43** Aho–Corasick: Multi-Pattern Matching | 55 |
| **31** | 3 | ×2 **L44** Suffix Array: Construction and LCP <br> **L45** Suffix Array Applications & Automaton Overview | 110 |
| **32** | 3 | **L46** Contest Day 3 + Editorial (Strings) | 90 |
| **33** | 4 | ×2 **L47** Generating Subsets, Permutations, Combinations <br> **L48** Backtracking I: Search With Pruning | 100 |
| **34** | 4 | **L49** Backtracking II — Branch & Bound, Meet in the Middle, Iterative Deepening | 50 |
| **35** | 4 | **L50** Divide & Conquer as a Paradigm | 50 |
| **36** | 4 | ×2 **L51** Binary Trees: Representation and All Traversals <br> **L52** Binary Tree Problem Patterns | 105 |
| **37** | 4 | **L53** Binary Search Trees | 50 |
| **38** | 4 | **L54** Balanced BSTs — AVL, Red-Black Concepts, and a Working Treap | 60 |
| **39** | 4 | ×2 **L55** Trees as Graphs: Rooting, DFS Order, Euler Tour <br> **L56** Tree Diameter, Centroid, and Rerooting Basics | 100 |
| **40** | 4 | **L57** LCA I: Binary Lifting | 55 |
| **41** | 4 | ×2 **L58** LCA II: Euler Tour + Sparse Table, and Applications <br> **L59** Small-to-Large Merging (DSU on Tree) | 100 |
| **42** | 4 | **L60** Centroid Decomposition | 55 |
| **43** | 4 | **L61** Contest Day 4 + Editorial (Trees & Recursion) | 90 |
| **44** | 5 | ×2 **L62** Graph Representations & Input Handling <br> **L63** BFS and Unweighted Shortest Paths | 100 |
| **45** | 5 | **L64** DFS: Components, Cycle Detection, Bipartiteness | 55 |
| **46** | 5 | **L65** Grids, 0-1 BFS, and Implicit State-Space Search | 50 |
| **47** | 5 | ×2 **L66** Topological Sort and DAG DP <br> **L67** Dijkstra's Algorithm | 105 |
| **48** | 5 | **L68** Bellman–Ford, Negative Cycles, SPFA | 50 |
| **49** | 5 | **L69** All-Pairs Shortest Paths: Floyd–Warshall and Johnson | 50 |
| **50** | 5 | ×2 **L70** Disjoint Set Union I <br> **L71** DSU II — Rollback, Offline Tricks, Kruskal Reconstruction Tree | 100 |
| **51** | 5 | **L72** Minimum Spanning Trees | 55 |
| **52** | 5 | ×2 **L73** Bridges, Articulation Points, Biconnected Components <br> **L74** Strongly Connected Components and Condensation | 110 |
| **53** | 5 | ×2 **L75** 2-SAT <br> **L76** Eulerian Paths and Circuits | 100 |
| **54** | 5 | **L77** Bipartite Matching — Kuhn's Algorithm and the Theorems | 55 |
| **55** | 5 | ×2 **L78** Maximum Flow I: Ford–Fulkerson, Edmonds–Karp, Dinic <br> **L79** Maximum Flow II — Min Cut, Modelling, and Min-Cost Max-Flow | 120 |
| **56** | 5 | **L80** Contest Day 5 + Editorial (Graphs) | 100 |
| **57** | 6 | ×2 **L81** DP Foundations: How to Invent a Recurrence <br> **L82** 1D DP Classics | 110 |
| **58** | 6 | ×2 **L83** Knapsack I: 0/1, Subset Sum, and Space Optimisation <br> **L84** Knapsack II: Unbounded, Bounded, Coin Change Family | 105 |
| **59** | 6 | **L85** LIS and LCS | 55 |
| **60** | 6 | **L86** Grid DP and Counting DP | 50 |
| **61** | 6 | ×2 **L87** Interval (Range) DP <br> **L88** String DP — Edit Distance, Matching, and DP on Automata | 110 |
| **62** | 6 | ×2 **L89** Tree DP I: Subtree Aggregation and Tree Knapsack <br> **L90** Tree DP II: Rerooting (All-Roots DP) | 110 |
| **63** | 6 | ×2 **L91** Bitmask DP I: Subsets as States <br> **L92** Bitmask DP II: Profile and Broken-Profile DP | 105 |
| **64** | 6 | **L93** SOS DP (Sum Over Subsets) and Subset Convolution | 50 |
| **65** | 6 | **L94** Digit DP | 55 |
| **66** | 6 | **L95** Probability and Expected-Value DP | 55 |
| **67** | 6 | ×2 **L96** Game Theory I: Nim, Grundy Numbers, Sprague–Grundy <br> **L97** Game Theory II: Minimax DP and Games on Graphs | 110 |
| **68** | 6 | **L98** DP Optimisation I — Prefix Aggregates and Monotonic Deque | 55 |
| **69** | 6 | ×2 **L99** DP Optimisation II — Divide & Conquer Optimisation and Knuth <br> **L100** DP Optimisation III — Convex Hull Trick and Li Chao Tree | 110 |
| **70** | 6 | **L101** DP Optimisation IV — Aliens Trick and Matrix Exponentiation for DP | 55 |
| **71** | 6 | **L102** Contest Day 6 + Editorial (Dynamic Programming) | 100 |
| **72** | 7 | **L103** Sparse Table and O(1) Range Minimum | 45 |
| **73** | 7 | ×2 **L104** Fenwick Tree (BIT) I: Point Update, Prefix Query <br> **L105** Fenwick Tree II: Range Updates, 2D, and k-th Element | 100 |
| **74** | 7 | **L106** Segment Tree I: The Universal Range Structure | 60 |
| **75** | 7 | **L107** Segment Tree II: Lazy Propagation | 60 |
| **76** | 7 | ×2 **L108** Segment Tree III — Descent, Trees on Values, Merge-Sort Trees <br> **L109** Segment Tree IV: Iterative, Dynamic, and Persistent | 110 |
| **77** | 7 | **L110** Sqrt Decomposition | 50 |
| **78** | 7 | ×2 **L111** Mo's Algorithm <br> **L112** Treaps and Implicit Treaps (Sequence Surgery) | 105 |
| **79** | 7 | **L113** Heavy-Light Decomposition | 60 |
| **80** | 7 | ×2 **L114** Frontier Structures — Segment Tree Beats, Link-Cut Trees, Euler Tour Trees <br> **L115** Bitsets in Python — Big Integers as Word-Parallel Arrays | 95 |
| **81** | 7 | **L116** Contest Day 7 + Editorial (Advanced Data Structures) | 100 |
| **82** | 8 | **L117** Number Theory I — GCD, Extended Euclid, Diophantine Equations | 55 |
| **83** | 8 | ×2 **L118** Number Theory II: Primes, Sieves, and Factorisation <br> **L119** Number Theory III — Modular Arithmetic, CRT, Discrete Log | 110 |
| **84** | 8 | **L120** Number Theory IV: Totient, Möbius, and Divisor Sums | 55 |
| **85** | 8 | ×2 **L121** Combinatorics I: Counting Foundations <br> **L122** Combinatorics II — Inclusion–Exclusion, Catalan, Stirling, Burnside | 115 |
| **86** | 8 | **L123** Combinatorics III — Lucas, Generating Functions, Recurrences | 50 |
| **87** | 8 | ×2 **L124** Matrix Exponentiation, Linear Recurrences, Berlekamp–Massey <br> **L125** Linear Algebra: Gaussian Elimination and XOR Basis | 110 |
| **88** | 8 | **L126** FFT and NTT: Fast Convolution | 65 |
| **89** | 8 | **L127** Contest Day 8 + Editorial (Mathematics) | 100 |
| **90** | 9 | ×2 **L128** Geometry I — Points, Vectors, Cross Products, Orientation <br> **L129** Geometry II — Lines, Segments, Intersections, Distances | 110 |
| **91** | 9 | **L130** Geometry III: Polygons | 55 |
| **92** | 9 | ×2 **L131** Geometry IV: Convex Hull <br> **L132** Geometry V — Rotating Calipers, Closest Pair, Minimum Enclosing Circle | 110 |
| **93** | 9 | **L133** Geometry VI: Sweep Line and Advanced Topics | 60 |
| **94** | 9 | **L134** Contest Day 9 + Editorial (Geometry) | 90 |
| **95** | 10 | ×2 **L135** Randomisation as a Technique <br> **L136** Offline Processing, Query Reordering, and CDQ Divide & Conquer | 105 |
| **96** | 10 | **L137** Constructive Algorithms and Ad-Hoc Problems | 55 |
| **97** | 10 | **L138** Interactive Problems and Special Judges | 45 |
| **98** | 10 | ×2 **L139** Contest Strategy: Two Hours, Six Problems <br> **L140** The Practice System — Rating Roadmaps and Spaced Repetition | 105 |
| **99** | 10 | **L141** Interview-Focused Revision: The DSA Sprint | 55 |
| **100** | 10 | **L142** Capstone — Final Mock Contest + Full Editorial + What Next | 150 |

---

# APPENDIX B — Production Conventions

**Title format:** `Day 07 | Bit Manipulation II: Subset Enumeration | 100 Days of DSA & CP in Python`
Keep the day number two-digit so playlists sort correctly, put the topic second (that's what search matches), and keep the series tag last.

**Description template:**
```
Day {D} of 100 — {topic}. {One-sentence promise of what the viewer can do after this.}

⏱ TIMESTAMPS
{paste the TIMELINE line from this document, one chapter per line}

📝 PROBLEMS SOLVED
{name — platform — link}

💻 CODE: github.com/<you>/100-days-dsa-python/tree/main/day{DDD}
📋 PROBLEM SHEET: {link}
⬅ PREVIOUS: {link}   ➡ NEXT: {link}
🎯 PLAYLIST: {link}

#python #dsa #competitiveprogramming #{topic}
```

**Chapters:** YouTube requires the first timestamp to be `00:00` and at least three chapters ≥10 s. Every TIMELINE in this document already satisfies that.

**Thumbnails:** one fixed template — big day number top-left, topic in ≤4 words, one diagram element (a tree, a mask, a grid), consistent colour per phase (11 phase colours). Consistency matters more than beauty for playlist retention.

**Pinned comment:** the three homework problems + the single most common bug from that lesson.

**Repo layout:**
```
100-days-dsa-python/
  day001/ … day100/     # lesson code, notes.md, problems/
  cplib/                # the reusable library (see Appendix D)
  templates/            # template.py, gen.py, brute.py, stress.sh
  sheets/               # problem sheets per phase
  README.md             # the full 100-day index with links
```

**Community:** one Discord/Telegram channel per phase; weekly virtual contest on the contest day so viewers compete together; a shared spreadsheet leaderboard.

---

# APPENDIX C — Python-for-CP Speed Cheat Sheet
*(Referenced constantly from L2 onward. Put this on screen at the start of every contest-day video.)*

| Situation | Do this |
|---|---|
| Reading input | `data = sys.stdin.buffer.read().split()` then an index pointer |
| Writing output | Collect into a list, `sys.stdout.write('\n'.join(map(str, out)))` |
| Deep recursion | Convert to an explicit stack; or `sys.setrecursionlimit(300000)` + a thread with a 256 MB stack |
| Queue | `collections.deque`, never `list.pop(0)` |
| Sorting with a rule | `key=` (fast) not `cmp_to_key` (slow) |
| Membership tests | `set`/`dict`, never `list` |
| 2D array | `[[0]*m for _ in range(n)]`, or a flat list with `i*m+j` |
| Grid of chars | `bytearray` or a list of `bytes` |
| Many small ints | `array('i', ...)` or a flat list; avoid tuples in hot loops |
| Fixed-size boolean set | An `int` used as a bitset (L115) |
| Repeated `x**0.5` | `math.isqrt` for integers |
| Attribute lookup in a loop | Hoist it: `push = st.append` |
| Big constant factor | Submit to PyPy on Codeforces; check whether the problem's judge offers it |
| Modular arithmetic | `pow(a, b, m)`; precompute factorials + inverse factorials once |
| Nested loops over 10⁷+ | Vectorise with `numpy`, or restructure with bitsets, or accept it needs PyPy |
| Global state across test cases | Reset explicitly, or use per-test local variables — the #1 multi-test bug |

**Rough throughput to plan with:** CPython ≈ 10⁷ simple operations/second; PyPy ≈ 10⁸; big-int bitwise ops ≈ 10⁹ bit-operations/second. Multiply your operation count by 10 versus a C++ estimate before deciding a solution fits.

---

# APPENDIX D — The Library You Build (`cplib/`)

By Day 100 the viewer has written, tested, and re-implemented from scratch:

| File | Built in | Contents |
|---|---|---|
| `io_fast.py` | L2 | bulk reader, output buffer, template |
| `testing.py` | L10 | generator, stress loop, shrinker |
| `arrays.py` | L12–L24 | prefix/2D prefix/difference, two pointers, sliding window, monotonic deque, compression |
| `search.py` | L19–L21 | binary search wrappers, search-on-answer helper, ternary search |
| `strings.py` | L37–L45 | hashing, prefix function, Z, Manacher, trie, binary trie, Aho–Corasick, suffix array + LCP |
| `trees.py` | L55–L60 | rooting, Euler tour, LCA (lifting + sparse), diameter, centroid, small-to-large, centroid decomposition |
| `graphs.py` | L62–L79 | CSR builder, BFS/0-1 BFS/DFS, toposort, Dijkstra, Bellman–Ford, Floyd, DSU (+rollback), MST, bridges/APs, SCC, 2-SAT, Euler path, Kuhn, Dinic, MCMF |
| `dp.py` | L83–L101 | knapsack variants (incl. bitset), LIS, deque optimisation, CHT, Li Chao, matrix power |
| `structures.py` | L103–L115 | sparse table, BIT (+2D, +kth), segment tree (generic, lazy, iterative, dynamic, persistent), sqrt blocks, Mo's, treap, HLD, beats, bitset helpers |
| `mathlib.py` | L117–L126 | gcd/extgcd, Diophantine, sieves, SPF, Miller–Rabin, Pollard's rho, CRT, BSGS, φ, μ, nCk mod p, Lucas, matrix power, Gaussian elimination, XOR basis, NTT |
| `geometry.py` | L128–L133 | primitives, segment intersection, polygon predicates, convex hull, calipers, closest pair, min enclosing circle, half-plane intersection |

Every file ships with a `tests/` stress test against a brute force. That test suite is the actual deliverable — it's what makes the library trustworthy at 2 a.m. during a contest.

---

# APPENDIX E — Weekly Rhythm and Recording Logistics

**Viewer's week:** 6 teaching days + 1 contest/upsolve day. Daily load: video (25–75 min) + 2–4 problems (60–120 min). Budget 2–3 hours/day, 3–4 on double days.

**Creator's schedule:** record in phase-sized batches (one phase = one recording block of 7–15 videos). Stay 2 weeks ahead of publication or the streak breaks around Day 40 — the most common failure point for daily series. Reserve one buffer day per phase.

**Per-lesson prep:** solve every listed problem *before* recording, and keep the failed attempts — narrating a real dead end is the single biggest quality differentiator over textbook explanations.

**Consistency rules that matter more than production value:** same intro (≤10 s), same code font/size (18 pt+, dark theme, no transparency), always show the timer for contest days, always show the failing test before the fix.

---

# APPENDIX F — Milestones and Honest Expectations

| Checkpoint | The viewer should be able to |
|---|---|
| Day 17 (end P1) | Solve most Codeforces Div3 A/B, CSES Sorting & Searching; ~CF 1000–1200 |
| Day 32 (end P3) | Handle any string problem below CF 1700; implement KMP/Z/hashing from memory |
| Day 43 (end P4) | Solve tree problems with LCA and subtree DP; ~CF 1300–1400 |
| Day 56 (end P5) | Model and solve graph problems including flows; ~CF 1500 |
| Day 71 (end P6) | Recognise and write DP for unseen problems; the biggest single rating jump |
| Day 81 (end P7) | Solve range-query problems with the right structure; ~CF 1600–1800 |
| Day 89 (end P8) | Handle standard math/counting problems; complete CSES Mathematics |
| Day 100 | ~CF 1600–1900 (from a beginner start), 400–600 problems solved, a tested personal library, and an interview-ready DSA base |

Stated plainly: 100 days of honest work takes a motivated beginner to roughly Codeforces Expert territory and comfortably past most interview bars. It does not make anyone a grandmaster — that's a multi-year path, and any series promising otherwise is selling something.

---

# APPENDIX G — Alternative Pacings

- **200 days / 1 lesson per day:** split the 42 double days across two days each and add a dedicated practice day per phase. Gentler, and better retention.
- **50 days / intensive:** 3 lessons/day, contest days unchanged. Only viable full-time.
- **Interview-only track (~35 lessons):** L1–L6, L11–L23, L26–L34, L36, L41, L47–L48, L51–L53, L55, L57, L62–L67, L70, L81–L89, L104, L106, L141. Skips flows, suffix structures, advanced math, geometry, and DP optimisations.
- **Olympiad/ICPC track:** everything, plus L114, L126, L133, L136 treated as required rather than survey.
- **Math-first ordering:** watch L117–L119 right after L50 (see the Phase 8 note).

---

# APPENDIX H — References to Cite in Descriptions

- **CP-Algorithms** (cp-algorithms.com) — the closest thing to a canonical reference; cite the matching article in every lesson description.
- **Competitive Programmer's Handbook** (Laaksonen) — pairs with the CSES problem set, which this curriculum uses as its backbone.
- **Competitive Programming 4** (Halim & Halim) — the taxonomy this playlist's phase structure loosely follows.
- **CLRS** — for the proofs (master theorem, heap analysis, flow correctness).
- **USACO Guide** (usaco.guide) — excellent per-topic problem lists, Bronze → Platinum.
- **KACTL** — the ICPC reference library; useful as a "what does a mature library look like" model, and worth showing on screen in L142.
- **AtCoder Educational DP Contest** — the 26-task set assigned across Phase 6.
- **Codeforces EDU (ITMO Academy)** — binary search, two pointers, DSU, segment trees, suffix arrays; assign the matching step with each lesson.