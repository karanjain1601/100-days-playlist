/* 100 Days of Mathematical Prerequisites — shared script (generated). Load in <head> before MathJax.
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
  const root = document.documentElement, KEY = 'prereq-theme';
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
    ["Number Sense & Algebraic Machinery", 1, 11, 1, 9],
    ["Functions, Geometry, Trigonometry & Complex Numbers", 12, 22, 10, 18],
    ["Logic, Sets, Proof & Combinatorics", 23, 33, 19, 27],
    ["Linear Algebra", 34, 58, 28, 49],
    ["Single-Variable Calculus", 59, 74, 50, 63],
    ["Multivariable & Vector Calculus", 75, 87, 64, 74],
    ["Matrix Calculus & Optimization Theory", 88, 95, 75, 81],
    ["Probability", 96, 108, 82, 91],
    ["Statistics & Inference", 109, 117, 92, 97],
    ["Information Theory, Numerics & Capstone", 118, 122, 98, 100]
  ];
  // [lesson, day, title, video minutes, practice minutes (0 = none)]
  const LESSONS = [
    [1, 1, "Course Map, Study Method & the Number Systems", 32, 40],
    [2, 2, "Integers, Divisibility & Modular Arithmetic", 38, 50],
    [3, 2, "Rationals, Irrationals & the Structure of the Real Line", 24, 30],
    [4, 3, "Exponents, Radicals & Orders of Magnitude", 26, 40],
    [5, 3, "Logarithms", 30, 40],
    [6, 4, "Polynomials & the Factoring Toolkit", 34, 50],
    [7, 5, "Rational Expressions & Partial Fractions", 28, 45],
    [8, 6, "Equations & Inequalities", 36, 50],
    [9, 7, "Absolute Value, Intervals & Classical Inequalities", 30, 45],
    [10, 8, "Sequences, Series & Sigma Notation", 34, 45],
    [11, 9, "Factorials, Binomial Theorem & Phase 0 Workshop", 40, 60],
    [12, 10, "Functions: The Central Object", 36, 50],
    [13, 11, "Graphs & Transformations", 28, 35],
    [14, 11, "Lines, Planes & Coordinate Geometry in 2D and 3D", 30, 40],
    [15, 12, "Quadratics & Conic Sections", 32, 45],
    [16, 13, "Polynomial & Rational Function Behaviour", 30, 40],
    [17, 14, "Exponential & Logarithmic Functions", 34, 45],
    [18, 15, "Trigonometry I: Unit Circle & the Six Functions", 38, 50],
    [19, 16, "Trigonometry II: Identities, Equations & Inverses", 36, 50],
    [20, 17, "Hyperbolic Functions", 24, 30],
    [21, 18, "Complex Numbers I: Algebra & Geometry", 32, 40],
    [22, 18, "Complex Numbers II & Phase 1 Workshop", 26, 45],
    [23, 19, "Propositional Logic", 30, 40],
    [24, 20, "Predicate Logic & Quantifiers", 28, 35],
    [25, 20, "Set Theory", 32, 40],
    [26, 21, "Relations, Equivalence & Order", 28, 40],
    [27, 22, "Proof Techniques I: Direct, Contrapositive, Contradiction, Cases", 34, 55],
    [28, 23, "Proof Techniques II: Mathematical Induction", 32, 50],
    [29, 24, "Cardinality & the Sizes of Infinity", 26, 35],
    [30, 25, "Counting I: Permutations & Combinations", 32, 45],
    [31, 26, "Counting II: Inclusion–Exclusion, Pigeonhole & Stars and Bars", 32, 50],
    [32, 27, "Recurrence Relations & Generating Functions", 30, 40],
    [33, 27, "Graphs, Adjacency Matrices & Phase 2 Workshop", 28, 45],
    [34, 28, "Vectors: Geometry and Algebra", 34, 45],
    [35, 29, "Vector Arithmetic, Linear Combinations & Span", 32, 40],
    [36, 29, "Dot Product, Norms, Angles & Projections", 38, 50],
    [37, 30, "Cross Product & Triple Products", 26, 35],
    [38, 31, "Linear Independence, Basis & Dimension", 38, 55],
    [39, 32, "Systems of Linear Equations & Gaussian Elimination", 40, 55],
    [40, 33, "Matrices: Anatomy, Types & Basic Operations", 32, 40],
    [41, 33, "Matrix Multiplication, Four Ways", 34, 45],
    [42, 34, "Matrix Inverse & Elementary Matrices", 34, 45],
    [43, 35, "LU Decomposition & Efficient Solving", 30, 40],
    [44, 36, "Determinants I: Definition & Computation", 34, 45],
    [45, 36, "Determinants II: Properties, Geometry & Applications", 30, 40],
    [46, 37, "Vector Spaces & Subspaces (Axiomatic)", 34, 45],
    [47, 38, "The Four Fundamental Subspaces", 38, 55],
    [48, 39, "Rank & the Rank–Nullity Theorem", 32, 45],
    [49, 40, "Linear Transformations", 36, 50],
    [50, 41, "Change of Basis & Similarity", 34, 50],
    [51, 42, "Orthogonality & Orthonormal Bases", 32, 45],
    [52, 43, "Gram–Schmidt & QR Decomposition", 34, 45],
    [53, 44, "Projections & Least Squares", 38, 55],
    [54, 45, "Eigenvalues & Eigenvectors I", 38, 55],
    [55, 46, "Eigenvalues II: Diagonalization & Matrix Powers", 36, 50],
    [56, 47, "Symmetric Matrices, the Spectral Theorem & Quadratic Forms", 38, 55],
    [57, 48, "Singular Value Decomposition", 42, 60],
    [58, 49, "Pseudoinverse, Matrix Norms, Conditioning, PCA & Phase 3 Workshop", 40, 60],
    [59, 50, "Limits: Intuition, Notation & Computation", 36, 50],
    [60, 51, "Formal Limits: The ε–δ Definition", 34, 45],
    [61, 51, "Continuity, IVT & the Extreme Value Theorem", 30, 40],
    [62, 52, "The Derivative: Definition & Interpretation", 36, 50],
    [63, 53, "The Differentiation Rules", 34, 50],
    [64, 54, "Chain Rule Deep Dive, Implicit & Logarithmic Differentiation", 32, 50],
    [65, 55, "Mean Value Theorem, Rolle & Monotonicity", 28, 40],
    [66, 56, "Higher Derivatives, Concavity & Curve Sketching", 30, 45],
    [67, 57, "Optimization in One Variable", 32, 45],
    [68, 57, "L'Hôpital's Rule & Indeterminate Forms", 26, 35],
    [69, 58, "Taylor & Maclaurin Series", 40, 55],
    [70, 59, "Antiderivatives, Riemann Sums & the Fundamental Theorem", 36, 50],
    [71, 60, "Integration Techniques I: Substitution & Integration by Parts", 34, 50],
    [72, 61, "Integration Techniques II: Trig Powers, Trig Substitution & Partial Fractions", 34, 50],
    [73, 62, "Improper Integrals, the Gaussian Integral & Special Functions", 30, 45],
    [74, 63, "Series Convergence, Power Series & Phase 4 Workshop", 40, 60],
    [75, 64, "Functions of Several Variables", 32, 45],
    [76, 65, "Limits & Continuity in ℝⁿ", 28, 40],
    [77, 65, "Partial Derivatives", 32, 40],
    [78, 66, "The Gradient & Directional Derivatives", 36, 50],
    [79, 67, "Multivariable Chain Rule, the Total Derivative & the Jacobian", 38, 55],
    [80, 68, "Second-Order Structure: The Hessian & Taylor in ℝⁿ", 34, 50],
    [81, 69, "Unconstrained Optimization in ℝⁿ", 34, 50],
    [82, 70, "Constrained Optimization: Lagrange Multipliers", 36, 50],
    [83, 70, "Inequality Constraints & the KKT Conditions", 30, 40],
    [84, 71, "Double & Triple Integrals", 36, 50],
    [85, 72, "Change of Variables & the Jacobian Determinant", 32, 45],
    [86, 73, "Vector Fields, Line Integrals & Conservative Fields", 34, 45],
    [87, 74, "Divergence, Curl, the Big Theorems & Phase 5 Workshop", 40, 55],
    [88, 75, "Matrix Calculus I: Layouts, Shapes & Basic Derivatives", 36, 50],
    [89, 76, "Matrix Calculus II: The Identity Toolbox", 38, 55],
    [90, 77, "Convex Sets & Convex Functions", 36, 50],
    [91, 78, "Gradient Descent: The Mathematics", 38, 50],
    [92, 79, "Newton & Quasi-Newton Methods", 34, 45],
    [93, 80, "Lagrangian Duality", 36, 50],
    [94, 80, "Linear & Quadratic Programming by Hand", 30, 40],
    [95, 81, "Phase 6 Optimization Workshop", 34, 60],
    [96, 82, "Sample Spaces, Events & the Axioms of Probability", 34, 45],
    [97, 83, "Conditional Probability, Independence & Bayes' Theorem", 38, 50],
    [98, 83, "Discrete Random Variables & PMFs", 30, 40],
    [99, 84, "The Discrete Distribution Zoo", 40, 55],
    [100, 85, "Continuous Random Variables, PDFs & CDFs", 34, 45],
    [101, 86, "The Continuous Distribution Zoo", 42, 55],
    [102, 86, "Expectation, Variance, Moments & MGFs", 36, 50],
    [103, 87, "Joint, Marginal & Conditional Distributions", 38, 55],
    [104, 88, "Covariance, Correlation & the Covariance Matrix", 34, 45],
    [105, 89, "The Multivariate Gaussian", 38, 50],
    [106, 89, "Transformations of Random Variables", 32, 45],
    [107, 90, "Concentration & Classical Inequalities", 34, 45],
    [108, 91, "Limit Theorems, Markov Chains & Phase 7 Workshop", 42, 60],
    [109, 92, "Descriptive Statistics & Data Summaries", 30, 40],
    [110, 92, "Sampling Distributions", 32, 40],
    [111, 93, "Point Estimation: Bias, Variance & Efficiency", 34, 50],
    [112, 94, "Maximum Likelihood Estimation", 38, 55],
    [113, 94, "Bayesian Estimation: MAP, Priors & Conjugacy", 34, 45],
    [114, 95, "Confidence Intervals", 30, 45],
    [115, 96, "Hypothesis Testing", 40, 55],
    [116, 96, "Linear Regression: The Full Derivation", 38, 55],
    [117, 97, "Statistics Workshop & Inferential Fallacies", 34, 55],
    [118, 98, "Information Theory I: Entropy, Cross-Entropy & KL Divergence", 36, 45],
    [119, 98, "Information Theory II: Mutual Information & Coding Bounds", 30, 40],
    [120, 99, "Numerical Mathematics (By Hand, No Code)", 34, 45],
    [121, 99, "Analysis Touchstones & a Measure-Theoretic Preview", 32, 40],
    [122, 100, "Capstone: The Whole Map & Comprehensive Exam", 45, 90]
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
