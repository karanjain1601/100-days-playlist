/* 100 Days of DSA & Competitive Programming — shared script (generated). Load in <head> before MathJax.
   Theme toggle, course data, the lesson spine, lesson search, scroll-spy and code highlighting. */
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    macros: {
      E: '\\mathbb{E}', R: '\\mathbb{R}', N: '\\mathbb{N}', Z: '\\mathbb{Z}', Q: '\\mathbb{Q}', C: '\\mathbb{C}',
      argmax: '\\operatorname*{arg\\,max}', argmin: '\\operatorname*{arg\\,min}',
      Var: '\\operatorname{Var}', Cov: '\\operatorname{Cov}', KL: '\\operatorname{KL}', tr: '\\operatorname{tr}', rank: '\\operatorname{rank}'
    }
  },
  options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }
};
(function () {
  'use strict';
  const root = document.documentElement, KEY = 'dsa-theme';
  try { const s = localStorage.getItem(KEY); if (s) root.setAttribute('data-theme', s); } catch (e) { /* storage blocked */ }
  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'paper' ? 'slate' : 'paper';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked */ }
  }

  const UNIT = 'Phase';
  const OFF = 0;   // display number = index + OFF (Papers months are 1-based)
  // [title, first lesson, last lesson, first day, last day]
  const MODULES = [
    ["Foundations: Python as a Competitive Weapon", 1, 10, 1, 7],
    ["Arrays, Sorting, Searching, Greedy", 11, 25, 8, 17],
    ["Linear Data Structures", 26, 35, 18, 24],
    ["Strings: From Basics to Suffix Structures", 36, 46, 25, 32],
    ["Recursion, Backtracking, Divide & Conquer, Trees", 47, 61, 33, 43],
    ["Graphs", 62, 80, 44, 56],
    ["Dynamic Programming", 81, 102, 57, 71],
    ["Advanced Data Structures", 103, 116, 72, 81],
    ["Number Theory, Combinatorics, Linear Algebra, FFT", 117, 127, 82, 89],
    ["Computational Geometry", 128, 134, 90, 94],
    ["Contest Craft, Meta-Skills, and the Capstone", 135, 142, 95, 100]
  ];
  // [lesson, day, title, video minutes, practice minutes (0 = none)]
  const LESSONS = [
    [1, 1, "Course Roadmap: What 100 Days Actually Buys You", 30, 0],
    [2, 1, "Environment, Template & Fast I/O That Won't TLE", 45, 0],
    [3, 2, "Python's Built-in Data Structures and Their Real Complexities", 55, 0],
    [4, 2, "The Standard Library Arsenal: collections, itertools, heapq, bisect, functools, math", 60, 0],
    [5, 3, "Time & Space Complexity, and Estimating Limits in Python", 50, 0],
    [6, 4, "Recursion & Memoisation, Properly", 60, 0],
    [7, 5, "Bit Manipulation I: Operators, Masks, and the Classic Tricks", 50, 0],
    [8, 5, "Bit Manipulation II: Subset Enumeration and Bitmask Thinking", 55, 0],
    [9, 6, "The Problem-Solving Framework: From Statement to Accepted", 50, 0],
    [10, 7, "Debugging, Stress Testing & Never Failing on Test 47", 45, 0],
    [11, 8, "Arrays & Simulation: The Boring Skill That Wins Contests", 40, 0],
    [12, 8, "Prefix Sums: The First Real Superpower", 45, 0],
    [13, 9, "2D Prefix Sums & Difference Arrays", 50, 0],
    [14, 10, "Two Pointers", 50, 0],
    [15, 11, "Sliding Window: Fixed and Variable", 55, 0],
    [16, 11, "Monotonic Deque: Sliding Window Maximum & Friends", 45, 0],
    [17, 12, "Sorting From Scratch I: Quadratic Sorts, Merge Sort, Inversions", 55, 0],
    [18, 12, "Sorting From Scratch II: Quicksort, Quickselect, Linear Sorts, Timsort", 55, 0],
    [19, 13, "Binary Search I: On Sorted Arrays", 50, 0],
    [20, 14, "Binary Search II: Binary Search on the Answer", 55, 0],
    [21, 14, "Binary Search III: Real Numbers, Ternary Search, Advanced Patterns", 45, 0],
    [22, 15, "Greedy I: The Method and Its Proofs", 50, 0],
    [23, 15, "Greedy II: Intervals, Scheduling, and Heap-Greedy", 50, 0],
    [24, 16, "Coordinate Compression, Offline Sorting & Event Sweeps", 45, 0],
    [25, 17, "Contest Day 1 + Full Editorial (Arrays → Greedy)", 90, 0],
    [26, 18, "Hashing & Hash Maps: Internals and Anti-Hash Attacks", 50, 0],
    [27, 19, "Stacks: Implementation and Core Applications", 40, 0],
    [28, 19, "Monotonic Stack: Next Greater Element and the Histogram Family", 55, 0],
    [29, 20, "Queues, Deques, Circular Buffers", 40, 0],
    [30, 21, "Linked Lists I: Structure and Core Operations", 45, 0],
    [31, 21, "Linked Lists II: Cycles, Reversal, and LRU/LFU", 55, 0],
    [32, 22, "Heaps I: Binary Heap From Scratch", 50, 0],
    [33, 22, "Heaps II: k-Way Merge, Top-K, Streaming Median, Lazy Deletion", 50, 0],
    [34, 23, "Intervals & Sweep Line With Data Structures", 50, 0],
    [35, 24, "Contest Day 2 + Editorial (Linear Data Structures)", 90, 0],
    [36, 25, "String Fundamentals & Python-Specific Traps", 45, 0],
    [37, 26, "String Hashing (Polynomial Rolling Hash) & Rabin–Karp", 55, 0],
    [38, 27, "KMP and the Prefix Function", 55, 0],
    [39, 27, "The Z-Function", 45, 0],
    [40, 28, "Manacher's Algorithm: All Palindromic Substrings in O(n)", 50, 0],
    [41, 29, "Trie (Prefix Tree)", 50, 0],
    [42, 29, "Binary Trie & XOR Problems", 50, 0],
    [43, 30, "Aho–Corasick: Multi-Pattern Matching", 55, 0],
    [44, 31, "Suffix Array: Construction and LCP", 60, 0],
    [45, 31, "Suffix Array Applications & Automaton Overview", 50, 0],
    [46, 32, "Contest Day 3 + Editorial (Strings)", 90, 0],
    [47, 33, "Generating Subsets, Permutations, Combinations", 45, 0],
    [48, 33, "Backtracking I: Search With Pruning", 55, 0],
    [49, 34, "Backtracking II: Branch & Bound, Meet in the Middle, Iterative Deepening", 50, 0],
    [50, 35, "Divide & Conquer as a Paradigm", 50, 0],
    [51, 36, "Binary Trees: Representation and All Traversals", 50, 0],
    [52, 36, "Binary Tree Problem Patterns", 55, 0],
    [53, 37, "Binary Search Trees", 50, 0],
    [54, 38, "Balanced BSTs: AVL, Red-Black Concepts, and a Working Treap", 60, 0],
    [55, 39, "Trees as Graphs: Rooting, DFS Order, Euler Tour", 50, 0],
    [56, 39, "Tree Diameter, Centroid, and Rerooting Basics", 50, 0],
    [57, 40, "LCA I: Binary Lifting", 55, 0],
    [58, 41, "LCA II: Euler Tour + Sparse Table, and Applications", 50, 0],
    [59, 41, "Small-to-Large Merging (DSU on Tree)", 50, 0],
    [60, 42, "Centroid Decomposition", 55, 0],
    [61, 43, "Contest Day 4 + Editorial (Trees & Recursion)", 90, 0],
    [62, 44, "Graph Representations & Input Handling", 45, 0],
    [63, 44, "BFS and Unweighted Shortest Paths", 55, 0],
    [64, 45, "DFS: Components, Cycle Detection, Bipartiteness", 55, 0],
    [65, 46, "Grids, 0-1 BFS, and Implicit State-Space Search", 50, 0],
    [66, 47, "Topological Sort and DAG DP", 50, 0],
    [67, 47, "Dijkstra's Algorithm", 55, 0],
    [68, 48, "Bellman–Ford, Negative Cycles, SPFA", 50, 0],
    [69, 49, "All-Pairs Shortest Paths: Floyd–Warshall and Johnson", 50, 0],
    [70, 50, "Disjoint Set Union I", 50, 0],
    [71, 50, "DSU II: Rollback, Offline Tricks, Kruskal Reconstruction Tree", 50, 0],
    [72, 51, "Minimum Spanning Trees", 55, 0],
    [73, 52, "Bridges, Articulation Points, Biconnected Components", 55, 0],
    [74, 52, "Strongly Connected Components and Condensation", 55, 0],
    [75, 53, "2-SAT", 50, 0],
    [76, 53, "Eulerian Paths and Circuits", 50, 0],
    [77, 54, "Bipartite Matching: Kuhn's Algorithm and the Theorems", 55, 0],
    [78, 55, "Maximum Flow I: Ford–Fulkerson, Edmonds–Karp, Dinic", 60, 0],
    [79, 55, "Maximum Flow II: Min Cut, Modelling, and Min-Cost Max-Flow", 60, 0],
    [80, 56, "Contest Day 5 + Editorial (Graphs)", 100, 0],
    [81, 57, "DP Foundations: How to Invent a Recurrence", 60, 0],
    [82, 57, "1D DP Classics", 50, 0],
    [83, 58, "Knapsack I: 0/1, Subset Sum, and Space Optimisation", 55, 0],
    [84, 58, "Knapsack II: Unbounded, Bounded, Coin Change Family", 50, 0],
    [85, 59, "LIS and LCS", 55, 0],
    [86, 60, "Grid DP and Counting DP", 50, 0],
    [87, 61, "Interval (Range) DP", 55, 0],
    [88, 61, "String DP: Edit Distance, Matching, and DP on Automata", 55, 0],
    [89, 62, "Tree DP I: Subtree Aggregation and Tree Knapsack", 55, 0],
    [90, 62, "Tree DP II: Rerooting (All-Roots DP)", 55, 0],
    [91, 63, "Bitmask DP I: Subsets as States", 55, 0],
    [92, 63, "Bitmask DP II: Profile and Broken-Profile DP", 50, 0],
    [93, 64, "SOS DP (Sum Over Subsets) and Subset Convolution", 50, 0],
    [94, 65, "Digit DP", 55, 0],
    [95, 66, "Probability and Expected-Value DP", 55, 0],
    [96, 67, "Game Theory I: Nim, Grundy Numbers, Sprague–Grundy", 60, 0],
    [97, 67, "Game Theory II: Minimax DP and Games on Graphs", 50, 0],
    [98, 68, "DP Optimisation I: Prefix Aggregates and Monotonic Deque", 55, 0],
    [99, 69, "DP Optimisation II: Divide & Conquer Optimisation and Knuth", 55, 0],
    [100, 69, "DP Optimisation III: Convex Hull Trick and Li Chao Tree", 55, 0],
    [101, 70, "DP Optimisation IV: Aliens Trick and Matrix Exponentiation for DP", 55, 0],
    [102, 71, "Contest Day 6 + Editorial (Dynamic Programming)", 100, 0],
    [103, 72, "Sparse Table and O(1) Range Minimum", 45, 0],
    [104, 73, "Fenwick Tree (BIT) I: Point Update, Prefix Query", 50, 0],
    [105, 73, "Fenwick Tree II: Range Updates, 2D, and k-th Element", 50, 0],
    [106, 74, "Segment Tree I: The Universal Range Structure", 60, 0],
    [107, 75, "Segment Tree II: Lazy Propagation", 60, 0],
    [108, 76, "Segment Tree III: Descent, Trees on Values, Merge-Sort Trees", 55, 0],
    [109, 76, "Segment Tree IV: Iterative, Dynamic, and Persistent", 55, 0],
    [110, 77, "Sqrt Decomposition", 50, 0],
    [111, 78, "Mo's Algorithm", 50, 0],
    [112, 78, "Treaps and Implicit Treaps (Sequence Surgery)", 55, 0],
    [113, 79, "Heavy-Light Decomposition", 60, 0],
    [114, 80, "Frontier Structures: Segment Tree Beats, Link-Cut Trees, Euler Tour Trees", 45, 0],
    [115, 80, "Bitsets in Python: Big Integers as Word-Parallel Arrays", 50, 0],
    [116, 81, "Contest Day 7 + Editorial (Advanced Data Structures)", 100, 0],
    [117, 82, "Number Theory I: GCD, Extended Euclid, Diophantine Equations", 55, 0],
    [118, 83, "Number Theory II: Primes, Sieves, and Factorisation", 55, 0],
    [119, 83, "Number Theory III: Modular Arithmetic, CRT, Discrete Log", 55, 0],
    [120, 84, "Number Theory IV: Totient, Möbius, and Divisor Sums", 55, 0],
    [121, 85, "Combinatorics I: Counting Foundations", 55, 0],
    [122, 85, "Combinatorics II: Inclusion–Exclusion, Catalan, Stirling, Burnside", 60, 0],
    [123, 86, "Combinatorics III: Lucas, Generating Functions, Recurrences", 50, 0],
    [124, 87, "Matrix Exponentiation, Linear Recurrences, Berlekamp–Massey", 55, 0],
    [125, 87, "Linear Algebra: Gaussian Elimination and XOR Basis", 55, 0],
    [126, 88, "FFT and NTT: Fast Convolution", 65, 0],
    [127, 89, "Contest Day 8 + Editorial (Mathematics)", 100, 0],
    [128, 90, "Geometry I: Points, Vectors, Cross Products, Orientation", 55, 0],
    [129, 90, "Geometry II: Lines, Segments, Intersections, Distances", 55, 0],
    [130, 91, "Geometry III: Polygons", 55, 0],
    [131, 92, "Geometry IV: Convex Hull", 55, 0],
    [132, 92, "Geometry V: Rotating Calipers, Closest Pair, Minimum Enclosing Circle", 55, 0],
    [133, 93, "Geometry VI: Sweep Line and Advanced Topics", 60, 0],
    [134, 94, "Contest Day 9 + Editorial (Geometry)", 90, 0],
    [135, 95, "Randomisation as a Technique", 50, 0],
    [136, 95, "Offline Processing, Query Reordering, and CDQ Divide & Conquer", 55, 0],
    [137, 96, "Constructive Algorithms and Ad-Hoc Problems", 55, 0],
    [138, 97, "Interactive Problems and Special Judges", 45, 0],
    [139, 98, "Contest Strategy: Two Hours, Six Problems", 55, 0],
    [140, 98, "The Practice System: Rating Roadmaps and Spaced Repetition", 50, 0],
    [141, 99, "Interview-Focused Revision: The DSA Sprint", 55, 0],
    [142, 100, "Capstone: Final Mock Contest + Full Editorial + What Next", 150, 0]
  ];
  const moduleOf = n => MODULES.findIndex(m => n >= m[1] && n <= m[2]);
  const file = m => 'p' + String(m).padStart(2, '0') + '.html';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  window.COURSE = { UNIT, MODULES, LESSONS, moduleOf, file };

  function renderSpines() {
    document.querySelectorAll('.spine[data-spine]').forEach(el => {
      const cur = el.hasAttribute('data-module') ? +el.getAttribute('data-module') : -1;
      const tip = el.parentNode.querySelector('.spine-tip');
      const frag = document.createDocumentFragment();
      LESSONS.forEach(l => {
        const m = moduleOf(l[0]), a = document.createElement('a');
        a.href = (m === cur ? '' : file(m)) + '#l' + l[0];
        a.className = 'm' + m + (m === cur ? ' cur' : '');
        const label = 'L' + l[0] + ' · Day ' + l[1] + ' — ' + l[2];
        a.setAttribute('aria-label', label);
        if (tip) {
          a.addEventListener('mouseenter', () => { tip.textContent = label + ' · ' + UNIT + ' ' + (m + OFF) + ': ' + MODULES[m][0]; });
          a.addEventListener('focus', () => { tip.textContent = label; });
        } else a.title = label;
        frag.appendChild(a);
      });
      el.appendChild(frag);
    });
  }

  function renderLessonIndex() {
    const ul = document.getElementById('lessonList');
    if (!ul) return;
    const input = document.getElementById('lessonSearch'), count = document.getElementById('lessonCount');
    const total = LESSONS.length;
    LESSONS.forEach(l => {
      const m = moduleOf(l[0]), li = document.createElement('li');
      li.className = 'm' + m;
      li.dataset.q = ('l' + l[0] + ' day ' + l[1] + ' ' + l[2] + ' ' + MODULES[m][0]).toLowerCase();
      li.innerHTML = '<a href="' + file(m) + '#l' + l[0] + '"><span class="d">L' + String(l[0]).padStart(3, '0') +
        '</span><span>' + esc(l[2]) + '<span class="dd">Day ' + l[1] + '</span></span><span class="t">' + l[3] + 'm' +
        (l[4] ? ' · ' + l[4] + 'm' : '') + '</span></a>';
      ul.appendChild(li);
    });
    function filter() {
      const q = input.value.trim().toLowerCase();
      let n = 0;
      for (const li of ul.children) { const hit = !q || li.dataset.q.includes(q); li.classList.toggle('hide', !hit); if (hit) n++; }
      count.textContent = q ? n + ' of ' + total + ' lessons match “' + input.value.trim() + '”' : total + ' lessons';
    }
    input.addEventListener('input', filter);
    filter();
  }

  function scrollSpy() {
    const links = document.querySelectorAll('.sidebar nav a[href^="#l"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    const map = {};
    links.forEach(a => { map[a.getAttribute('href').slice(1)] = a; });
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting || !map[e.target.id]) return;
      links.forEach(a => a.classList.remove('active'));
      map[e.target.id].classList.add('active');
      const nav = map[e.target.id].closest('.sidebar');
      if (nav && nav.scrollHeight > nav.clientHeight) map[e.target.id].scrollIntoView({ block: 'nearest' });
    }), { rootMargin: '-15% 0px -75% 0px' });
    document.querySelectorAll('article.day[id]').forEach(s => io.observe(s));
  }

  const KW = {
    python: 'def|return|for|in|if|elif|else|while|import|from|as|class|with|lambda|yield|not|and|or|is|None|True|False|break|continue|pass|raise|try|except|finally|assert|global|nonlocal|del|match|case|async|await',
    java: 'abstract|assert|boolean|break|byte|case|catch|char|class|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|var|record|sealed|non-sealed|permits|yield|true|false|null'
  };
  const RX = {
    python: new RegExp('(#[^\\n]*)|("""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'|"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\')|\\b(' + KW.python + ')\\b|\\b(\\d+\\.?\\d*(?:e-?\\d+)?)\\b', 'g'),
    java: new RegExp('(//[^\\n]*|/\\*[\\s\\S]*?\\*/)|("""[\\s\\S]*?"""|"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])+\')|(@[A-Za-z]\\w*|\\b(?:' + KW.java + ')\\b)|\\b(\\d[\\d_]*\\.?\\d*[LlFfDd]?)\\b', 'g')
  };
  function highlightCode() {
    const dflt = document.body.dataset.lang || '';
    document.querySelectorAll('pre > code').forEach(code => {
      if (code.classList.contains('plain')) return;
      const lang = code.classList.contains('java') ? 'java' : code.classList.contains('python') ? 'python' : dflt;
      const rx = RX[lang];
      if (!rx) return;
      const src = code.textContent;
      let out = '', last = 0, m;
      rx.lastIndex = 0;
      while ((m = rx.exec(src))) {
        out += esc(src.slice(last, m.index));
        out += '<span class="' + (m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 'd') + '">' + esc(m[0]) + '</span>';
        last = rx.lastIndex;
      }
      code.innerHTML = out + esc(src.slice(last));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-toggle]').forEach(b => b.addEventListener('click', toggleTheme));
    renderSpines();
    renderLessonIndex();
    highlightCode();
    scrollSpy();
  });
})();
