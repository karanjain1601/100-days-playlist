/* 130 Days of Reinforcement Learning — shared script.
   Load synchronously in <head> (before MathJax) so the MathJax config exists first.
   Provides: theme toggle, course data, the 130-day spine, lesson search, scroll-spy,
   a small Python highlighter, and the live demos (<div class="demo" data-demo="name">). */

window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    macros: {
      E: '\\mathbb{E}', R: '\\mathbb{R}',
      argmax: '\\operatorname*{arg\\,max}', argmin: '\\operatorname*{arg\\,min}',
      Var: '\\operatorname{Var}', KL: '\\operatorname{KL}', clip: '\\operatorname{clip}'
    }
  },
  options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }
};

(function () {
  'use strict';

  /* ---------------- theme ---------------- */
  const root = document.documentElement;
  try { const saved = localStorage.getItem('rl-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) { /* storage blocked */ }

  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'paper' ? 'slate' : 'paper';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('rl-theme', next); } catch (e) { /* storage blocked */ }
    document.dispatchEvent(new Event('rl:theme'));
  }

  /* ---------------- course data ---------------- */
  // [title, first day, last day, weeks]
  const MODULES = [
    ['Foundations & Tooling', 1, 9, '1–2'],
    ['Multi-Armed Bandits', 10, 17, '2–4'],
    ['Markov Decision Processes', 18, 27, '4–6'],
    ['Dynamic Programming', 28, 34, '6–7'],
    ['Monte Carlo Methods', 35, 41, '7–9'],
    ['Temporal-Difference Learning', 42, 53, '9–11'],
    ['Planning, Models & Search', 54, 60, '11–12'],
    ['Function Approximation', 61, 69, '13–14'],
    ['Deep Value-Based RL', 70, 81, '14–17'],
    ['Policy Gradient & Actor-Critic', 82, 96, '17–20'],
    ['Model-Based Deep RL & Search', 97, 101, '20–21'],
    ['Exploration', 102, 105, '21'],
    ['Imitation & Offline RL', 106, 112, '22–23'],
    ['Hierarchy, Meta, Multi-Agent & Scale', 113, 121, '23–25'],
    ['Safety, LLMs & Applications', 122, 128, '25–26'],
    ['Capstone', 129, 130, '26']
  ];
  // [title, video minutes, practice minutes, project number]; index 0 is Day 1
  const LESSONS = [
    ['What Reinforcement Learning Actually Is', 30, 30],
    ['RL vs Everything Else', 35, 30],
    ['Probability You Genuinely Need', 45, 90],
    ['Linear Algebra & Calculus Toolkit', 45, 90],
    ['Optimization for RL', 40, 60],
    ['Stochastic Processes & Markov Chains', 40, 75],
    ['Python, NumPy & Experiment Hygiene', 40, 90],
    ['Gymnasium Deep Dive', 45, 105],
    ['PyTorch Crash Course for RL', 45, 105],
    ['The k-Armed Bandit Problem', 30, 45],
    ['Action-Value Estimation & ε-Greedy', 40, 90],
    ['Incremental Updates & Nonstationarity', 35, 75],
    ['Optimistic Initial Values', 25, 45],
    ['Upper Confidence Bound (UCB)', 40, 75],
    ['Gradient Bandit Algorithms', 40, 75],
    ['Bayesian Bandits & Thompson Sampling', 35, 75],
    ['Contextual Bandits + Project 1', 45, 180, 1],
    ['Markov Chains → Markov Reward Processes', 35, 60],
    ['Returns & Discounting', 35, 60],
    ['The MDP Formalism', 40, 60],
    ['Policies', 30, 60],
    ['State-Value & Action-Value Functions', 40, 90],
    ['Bellman Expectation Equations', 45, 90],
    ['Optimality & Bellman Optimality Equations', 45, 90],
    ['Solving MDPs Exactly', 35, 75],
    ['Reward Design & Shaping', 40, 75],
    ['Beyond the Standard MDP', 35, 45],
    ['Iterative Policy Evaluation', 40, 90],
    ['Policy Improvement', 40, 75],
    ['Policy Iteration', 40, 105],
    ['Value Iteration', 40, 105],
    ['Why DP Converges', 40, 60],
    ['Asynchronous DP & GPI', 35, 60],
    ['Project 2 — Build a DP Suite', 30, 180, 2],
    ['Monte Carlo Prediction', 40, 90],
    ['MC Estimation of Action Values', 30, 60],
    ['MC Control with Exploring Starts', 35, 90],
    ['On-Policy MC Control with ε-Soft Policies', 40, 90],
    ['Off-Policy Prediction & Importance Sampling', 45, 90],
    ['Incremental & Per-Decision IS', 40, 75],
    ['Project 3 — Blackjack Agent', 30, 180, 3],
    ['TD(0) Prediction', 40, 90],
    ['TD vs MC vs DP', 45, 75],
    ['SARSA — On-Policy TD Control', 40, 90],
    ['Q-Learning — Off-Policy TD Control', 45, 105],
    ['Expected SARSA', 30, 75],
    ['Maximization Bias & Double Q-Learning', 40, 90],
    ['n-Step TD Prediction', 40, 90],
    ['n-Step Control & Tree Backup', 45, 90],
    ['Eligibility Traces I — The Forward View', 40, 75],
    ['Eligibility Traces II — The Backward View', 45, 90],
    ['SARSA(λ), Q(λ) & True Online TD(λ)', 40, 90],
    ['Project 4 — Tabular Control Zoo', 35, 210, 4],
    ['Models, Planning & Learning', 35, 60],
    ['Dyna-Q', 40, 105],
    ['Dyna-Q+ & Changing Environments', 35, 90],
    ['Prioritized Sweeping', 40, 90],
    ['Expected vs Sample Updates & Trajectory Sampling', 35, 60],
    ['Monte Carlo Tree Search', 45, 105],
    ['Project 5 — MCTS Game Agent', 30, 180, 5],
    ['Why Function Approximation', 35, 60],
    ['SGD & Semi-Gradient Methods', 45, 90],
    ['Linear Function Approximation', 40, 90],
    ['Feature Construction I', 40, 90],
    ['Feature Construction II — Tile Coding & RBFs', 45, 105],
    ['Least-Squares Methods', 35, 75],
    ['Control with Function Approximation', 45, 120],
    ['Continuing Tasks & Average Reward', 35, 60],
    ['The Deadly Triad & Off-Policy Stability', 45, 90],
    ['Neural Networks as Value Approximators', 40, 90],
    ['DQN — The Core Algorithm', 45, 105],
    ['Experience Replay', 40, 90],
    ['Target Networks & Stabilization', 40, 90],
    ['The Atari Pipeline', 40, 90],
    ['Double DQN', 35, 75],
    ['Dueling Networks', 35, 75],
    ['Prioritized Experience Replay', 45, 105],
    ['Multi-Step Returns & Noisy Nets', 40, 90],
    ['Distributional RL — C51', 50, 105],
    ['QR-DQN, IQN & Rainbow', 45, 90],
    ['Project 6 — Ship a DQN + Debugging Playbook', 40, 240, 6],
    ['Why Learn a Policy Directly', 40, 75],
    ['The Policy Gradient Theorem', 50, 90],
    ['REINFORCE', 40, 105],
    ['Baselines & Variance Reduction', 40, 90],
    ['Actor–Critic Fundamentals', 45, 105],
    ['A2C & A3C', 45, 105],
    ['Generalized Advantage Estimation', 45, 90],
    ['Natural Policy Gradients', 45, 75],
    ['TRPO', 45, 90],
    ['PPO I — The Clipped Objective', 45, 105],
    ['PPO II — Implementation Details That Decide Everything', 50, 150],
    ['DPG & DDPG', 45, 105],
    ['TD3', 45, 105],
    ['Maximum-Entropy RL & SAC', 50, 120],
    ['Project 7 — Continuous Control Benchmark', 40, 300, 7],
    ['Learning Dynamics Models', 45, 105],
    ['MBPO & Model-Based Policy Optimization', 40, 90],
    ['World Models & Dreamer', 45, 90],
    ['AlphaGo → AlphaGo Zero → AlphaZero', 50, 90],
    ['MuZero', 45, 90],
    ['Exploration Theory', 40, 60],
    ['Count-Based & Pseudo-Count Exploration', 40, 90],
    ['Curiosity: ICM & RND', 45, 105],
    ['Posterior Sampling, NGU & Go-Explore', 40, 75],
    ['Behavior Cloning & DAgger', 40, 105],
    ['Inverse Reinforcement Learning', 45, 90],
    ['GAIL & Adversarial Imitation', 40, 90],
    ['The Offline RL Problem', 40, 90],
    ['Policy-Constraint Methods — BCQ & BEAR', 40, 90],
    ['Value-Regularization — CQL & IQL', 45, 105],
    ['Decision Transformer & RL as Sequence Modeling', 40, 90],
    ['Hierarchical RL & the Options Framework', 45, 90],
    ['Goal-Conditioned RL & HER', 40, 105],
    ['FeUdal Networks, HIRO & Skill Discovery', 40, 75],
    ['Successor Features & Transfer', 40, 75],
    ['Meta-RL', 45, 90],
    ['Multi-Agent RL Foundations', 45, 75],
    ['MADDPG, QMIX & MAPPO', 45, 105],
    ['Self-Play, Leagues & Population-Based Training', 40, 75],
    ['Distributed RL & Partial Observability', 45, 90],
    ['Safe & Constrained RL', 45, 75],
    ['RLHF I — Reward Modeling from Preferences', 45, 75],
    ['RLHF II — PPO for Language Models', 50, 90],
    ['DPO & Direct Alignment', 45, 105],
    ['GRPO & RL for Reasoning', 50, 90],
    ['RL in Robotics & Sim-to-Real', 45, 75],
    ['RL in Industry & Honest Evaluation', 45, 75],
    ['How to Read, Reproduce & Extend an RL Paper', 40, 90],
    ['Capstone — Scope, Build, Evaluate, Publish', 50, 600, 8]
  ];

  const moduleOf = day => MODULES.findIndex(m => day >= m[1] && day <= m[2]);
  const file = m => 'm' + String(m).padStart(2, '0') + '.html';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  window.RL = { MODULES, LESSONS, moduleOf, file };

  /* ---------------- spine + lesson index ---------------- */
  function renderSpines() {
    document.querySelectorAll('.spine[data-spine]').forEach(el => {
      const cur = el.hasAttribute('data-module') ? +el.getAttribute('data-module') : -1;
      const tip = el.parentNode.querySelector('.spine-tip');
      const frag = document.createDocumentFragment();
      LESSONS.forEach((l, i) => {
        const day = i + 1, m = moduleOf(day), a = document.createElement('a');
        a.href = (m === cur ? '' : file(m)) + '#d' + day;
        a.className = 'm' + m + (m === cur ? ' cur' : '') + (l[3] ? ' proj' : '');
        const label = 'Day ' + day + ' — ' + l[0];
        a.setAttribute('aria-label', label);
        if (tip) {
          a.addEventListener('mouseenter', () => { tip.textContent = label + ' · M' + m + ' ' + MODULES[m][0]; });
          a.addEventListener('focus', () => { tip.textContent = label; });
        } else {
          a.title = label;
        }
        frag.appendChild(a);
      });
      el.appendChild(frag);
    });
  }

  function renderLessonIndex() {
    const ul = document.getElementById('lessonList');
    if (!ul) return;
    const input = document.getElementById('lessonSearch'), count = document.getElementById('lessonCount');
    LESSONS.forEach((l, i) => {
      const day = i + 1, m = moduleOf(day), li = document.createElement('li');
      li.className = 'm' + m;
      li.dataset.q = (day + ' ' + l[0] + ' ' + MODULES[m][0]).toLowerCase();
      const tag = l[3] ? '<span class="p">' + (l[3] === 8 ? 'CAPSTONE' : 'PROJECT ' + l[3]) + '</span>' : '';
      li.innerHTML = '<a href="' + file(m) + '#d' + day + '"><span class="d">' + String(day).padStart(3, '0') +
        '</span><span>' + esc(l[0]) + tag + '</span><span class="t">' + l[1] + 'm · ' + l[2] + 'm</span></a>';
      ul.appendChild(li);
    });
    function filter() {
      const q = input.value.trim().toLowerCase();
      let n = 0;
      for (const li of ul.children) { const hit = !q || li.dataset.q.includes(q); li.classList.toggle('hide', !hit); if (hit) n++; }
      count.textContent = q ? n + ' of 130 lessons match “' + input.value.trim() + '”' : '130 lessons';
    }
    input.addEventListener('input', filter);
    filter();
  }

  /* ---------------- sidebar scroll-spy ---------------- */
  function scrollSpy() {
    const links = document.querySelectorAll('.sidebar nav a[href^="#d"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    const map = {};
    links.forEach(a => { map[a.getAttribute('href').slice(1)] = a; });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting || !map[e.target.id]) return;
        links.forEach(a => a.classList.remove('active'));
        map[e.target.id].classList.add('active');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    document.querySelectorAll('article.day[id]').forEach(s => io.observe(s));
  }

  /* ---------------- Python highlighting for <pre><code> ---------------- */
  const PY = /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(def|return|for|in|if|elif|else|while|import|from|as|class|with|lambda|yield|not|and|or|is|None|True|False|break|continue|pass|raise|try|except|finally|assert|global|nonlocal|del)\b|\b(\d+\.?\d*(?:e-?\d+)?)\b/g;
  function highlightCode() {
    document.querySelectorAll('pre > code:not(.plain)').forEach(code => {
      const src = code.textContent;
      let html = '', last = 0, m;
      PY.lastIndex = 0;
      while ((m = PY.exec(src))) {
        html += esc(src.slice(last, m.index));
        const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 'd';
        html += '<span class="' + cls + '">' + esc(m[0]) + '</span>';
        last = PY.lastIndex;
      }
      code.innerHTML = html + esc(src.slice(last));
    });
  }

  /* ---------------- demo infrastructure ---------------- */
  const DEMOS = {};
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  const MONO = '"IBM Plex Mono", ui-monospace, Consolas, monospace';
  const VIR = ['#440154', '#481A6C', '#472F7D', '#414487', '#39568C', '#31688E', '#2A788E', '#23888E',
    '#1F988B', '#22A884', '#35B779', '#54C568', '#7AD151', '#A5DB36', '#D2E21B', '#FDE725']
    .map(h => { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; });

  function viridis(t) {
    t = Math.max(0, Math.min(1, t));
    const x = t * 15, i = Math.min(14, Math.floor(x)), f = x - i, a = VIR[i], b = VIR[i + 1];
    return 'rgb(' + Math.round(a[0] + (b[0] - a[0]) * f) + ',' + Math.round(a[1] + (b[1] - a[1]) * f) + ',' + Math.round(a[2] + (b[2] - a[2]) * f) + ')';
  }
  function palette() {
    const s = getComputedStyle(root), g = n => s.getPropertyValue(n).trim();
    return { bg: g('--bg'), panel: g('--panel'), ink: g('--ink'), ink2: g('--ink-2'), ink3: g('--ink-3'), rule: g('--rule'),
      accent: g('--accent'), accent2: g('--accent-2'), warn: g('--warn'), bad: g('--bad'), info: g('--info') };
  }
  function randn() { let u = 0; while (u === 0) u = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random()); }
  // argmax over arr[off .. off+n), random tie-breaking; returns 0..n-1
  function argmaxRand(arr, off, n) {
    let best = -Infinity, idx = 0, ties = 0;
    for (let i = 0; i < n; i++) {
      const v = arr[off + i];
      if (v > best) { best = v; idx = i; ties = 1; } else if (v === best && Math.random() * ++ties < 1) idx = i;
    }
    return idx;
  }
  const onTheme = fn => document.addEventListener('rl:theme', fn);

  function node(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function header(host, title, sub) {
    host.appendChild(node('div', 'demo-h', title));
    if (sub) host.appendChild(node('p', 'demo-sub', sub));
    const c = node('div', 'demo-controls');
    host.appendChild(c);
    return c;
  }
  function addButton(parent, text, fn, primary) {
    const b = node('button', 'btn' + (primary ? ' primary' : ''), text);
    b.type = 'button';
    b.addEventListener('click', fn);
    parent.appendChild(b);
    return b;
  }
  function addSlider(parent, label, min, max, step, value, fmt, fn) {
    const l = node('label', null, label), i = document.createElement('input'), o = node('output'), f = fmt || String;
    Object.assign(i, { type: 'range', min, max, step, value });
    o.textContent = f(+value);
    i.addEventListener('input', () => { o.textContent = f(+i.value); if (fn) fn(+i.value); });
    l.append(i, o);
    parent.appendChild(l);
    return { get value() { return +i.value; } };
  }
  function addSelect(parent, label, options, value, fn) {
    const l = node('label', null, label), s = document.createElement('select');
    options.forEach(o => { const op = node('option', null, o[1]); op.value = o[0]; s.appendChild(op); });
    s.value = value;
    s.addEventListener('change', () => { if (fn) fn(s.value); });
    l.appendChild(s);
    parent.appendChild(l);
    return { get value() { return s.value; } };
  }
  function addOut(host) { const o = node('div', 'demo-out'); host.appendChild(o); return o; }
  function makeCanvas(host, w, h) {
    const c = document.createElement('canvas');
    c.width = Math.round(w * DPR); c.height = Math.round(h * DPR);
    host.appendChild(c);
    const ctx = c.getContext('2d');
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    return {
      c, ctx, w, h,
      clear() { ctx.clearRect(0, 0, w, h); },
      pos(e) { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * w / r.width, (e.clientY - r.top) * h / r.height]; }
    };
  }
  function line(ctx, x1, y1, x2, y2) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); }
  function arrowHead(ctx, x, y, ang, s, color) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.fillStyle = color;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-s, -s * 0.55); ctx.lineTo(-s, s * 0.55); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function legend(ctx, x, y, items, horizontal) {
    const P = palette();
    ctx.save();
    ctx.font = '11px ' + MONO; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    let cx = x;
    items.forEach((it, i) => {
      const yy = horizontal ? y : y + i * 16 + 6;
      ctx.fillStyle = it[1]; ctx.fillRect(cx, yy - 2, 14, 4);
      ctx.fillStyle = P.ink2; ctx.fillText(it[0], cx + 20, yy);
      if (horizontal) cx += ctx.measureText(it[0]).width + 38;
    });
    ctx.restore();
  }
  const fmtInt = v => String(Math.round(v));
  // Line plot. b = {x, y, w, h}. o = {xmin, xmax, ymin, ymax, xticks, yticks, xfmt, yfmt, xlabel, ylabel, series, legend, legendAt}
  function plot(ctx, b, o) {
    const P = palette(), ny = o.yticks || 4, nx = o.xticks || 4, yfmt = o.yfmt || (v => v.toFixed(1)), xfmt = o.xfmt || fmtInt;
    ctx.save();
    ctx.font = '11px ' + MONO; ctx.lineWidth = 1; ctx.fillStyle = P.ink3;
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let i = 0; i <= ny; i++) {
      const v = o.ymin + (o.ymax - o.ymin) * i / ny, y = b.y + b.h - b.h * i / ny;
      ctx.strokeStyle = P.rule; ctx.globalAlpha = i === 0 ? 1 : 0.45;
      line(ctx, b.x, y, b.x + b.w, y);
      ctx.globalAlpha = 1;
      ctx.fillText(yfmt(v), b.x - 6, y);
    }
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let i = 0; i <= nx; i++) ctx.fillText(xfmt(o.xmin + (o.xmax - o.xmin) * i / nx), b.x + b.w * i / nx, b.y + b.h + 5);
    if (o.xlabel) ctx.fillText(o.xlabel, b.x + b.w / 2, b.y + b.h + 20);
    if (o.ylabel) {
      ctx.save(); ctx.translate(b.x - 44, b.y + b.h / 2); ctx.rotate(-Math.PI / 2);
      ctx.textBaseline = 'middle'; ctx.fillText(o.ylabel, 0, 0); ctx.restore();
    }
    ctx.beginPath(); ctx.rect(b.x, b.y - 3, b.w, b.h + 6); ctx.clip();
    (o.series || []).forEach(s => {
      ctx.strokeStyle = s.color; ctx.lineWidth = s.width || 1.8; ctx.setLineDash(s.dash || []);
      ctx.beginPath();
      for (let k = 0; k < s.data.length; k++) {
        const xv = (s.x0 || 0) + k;
        const px = b.x + (xv - o.xmin) / (o.xmax - o.xmin) * b.w;
        const py = b.y + b.h - (s.data[k] - o.ymin) / (o.ymax - o.ymin) * b.h;
        if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py);
      }
      ctx.stroke();
    });
    ctx.restore();
    if (o.legend) legend(ctx, o.legendAt ? o.legendAt[0] : b.x + 10, o.legendAt ? o.legendAt[1] : b.y + 4, o.legend);
  }
  function smooth(arr, k) {
    const out = new Float64Array(arr.length);
    let s = 0;
    for (let i = 0; i < arr.length; i++) { s += arr[i]; if (i >= k) s -= arr[i - k]; out[i] = s / Math.min(i + 1, k); }
    return out;
  }

  function initDemos() {
    const els = document.querySelectorAll('.demo[data-demo]');
    const start = el => {
      if (el.dataset.started) return;
      el.dataset.started = '1';
      const name = el.getAttribute('data-demo'), f = DEMOS[name];
      el.innerHTML = '';
      if (!f) { el.appendChild(node('p', 'demo-loading', 'Unknown demo: ' + name)); return; }
      f(el);
    };
    if (!('IntersectionObserver' in window)) { els.forEach(start); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); start(e.target); } }), { rootMargin: '300px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ================= DEMO: Markov chain (Day 6) ================= */
  DEMOS.markov = function (host) {
    const PRESETS = {
      weather: { names: ['Sunny', 'Cloudy', 'Rainy'], P: [[0.7, 0.2, 0.1], [0.3, 0.4, 0.3], [0.2, 0.4, 0.4]],
        note: 'Irreducible and aperiodic: π_t converges to π from any start, and the visit frequencies agree with it.' },
      periodic: { names: ['A', 'B', 'C'], P: [[0, 1, 0], [0, 0, 1], [1, 0, 0]],
        note: 'Period 3: π_t cycles forever and never converges, yet the long-run visit frequencies still converge to π. Time averages need irreducibility, not aperiodicity.' },
      absorbing: { names: ['Browse', 'Cart', 'Bought'], P: [[0.7, 0.25, 0.05], [0.35, 0.45, 0.2], [0, 0, 1]],
        note: '“Bought” is absorbing, so π puts all its mass there. Every path ends in it eventually.' }
    };
    const controls = header(host, 'Markov chain: simulation vs stationary distribution',
      'A walker moves according to the transition matrix P. Bars compare the stationary π (solves π = πP), the exact distribution π_t = π₀Pᵗ from a start in state 1, and the walker’s visit frequencies.');
    let preset = 'weather', P, names, pi, pit, counts, cur, t, running = false, raf = 0;
    addSelect(controls, 'chain', [['weather', 'weather (ergodic)'], ['periodic', 'cycle (periodic)'], ['absorbing', 'checkout (absorbing)']], preset, v => { preset = v; reset(); });
    addButton(controls, 'Step', () => { stop(); step(1); draw(); });
    const runBtn = addButton(controls, 'Run', () => (running ? stop() : go()), true);
    addButton(controls, 'Reset', () => reset());
    const speed = addSlider(controls, 'steps/frame', 1, 200, 1, 4);
    const cv = makeCanvas(host, 700, 290), out = addOut(host);
    const POS = [[95, 215], [265, 215], [180, 72]], RAD = 30, CEN = [180, 167];

    function stationary(M) {
      const n = M.length;
      let v = new Array(n).fill(1 / n);
      for (let it = 0; it < 4000; it++) {   // lazy chain (P + I)/2: same π, always aperiodic
        const w = new Array(n).fill(0);
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) w[j] += v[i] * 0.5 * (M[i][j] + (i === j ? 1 : 0));
        v = w;
      }
      return v;
    }
    function reset() {
      stop();
      ({ P, names } = PRESETS[preset]);
      pi = stationary(P); cur = 0; t = 0; counts = [1, 0, 0]; pit = [1, 0, 0];
      draw();
    }
    function step(k) {
      for (let s = 0; s < k; s++) {
        const u = Math.random(), row = P[cur];
        let nx = row.length - 1;
        for (let j = 0, acc = 0; j < row.length; j++) { acc += row[j]; if (u < acc) { nx = j; break; } }
        cur = nx; counts[cur]++; t++;
        const np = [0, 0, 0];
        for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) np[j] += pit[i] * P[i][j];
        pit = np;
      }
    }
    function go() { running = true; runBtn.textContent = 'Pause'; loop(); }
    function stop() { running = false; runBtn.textContent = 'Run'; cancelAnimationFrame(raf); }
    function loop() { if (!running) return; step(speed.value); draw(); raf = requestAnimationFrame(loop); }
    const freq = () => counts.map(c => c / (t + 1));
    const tv = (a, b) => 0.5 * a.reduce((s, x, i) => s + Math.abs(x - b[i]), 0);
    const bez = (a, c, b, s) => { const u = 1 - s; return [u * u * a[0] + 2 * u * s * c[0] + s * s * b[0], u * u * a[1] + 2 * u * s * c[1] + s * s * b[1]]; };
    const dbez = (a, c, b, s) => [2 * (1 - s) * (c[0] - a[0]) + 2 * s * (b[0] - c[0]), 2 * (1 - s) * (c[1] - a[1]) + 2 * s * (b[1] - c[1])];
    function trim(a, c, b, r, fromStart) {
      const end = fromStart ? a : b;
      for (let k = 0; k <= 200; k++) {
        const s = fromStart ? k / 200 : 1 - k / 200, q = bez(a, c, b, s);
        if (Math.hypot(q[0] - end[0], q[1] - end[1]) >= r) return s;
      }
      return fromStart ? 0 : 1;
    }
    function tag(ctx, text, x, y, C) {
      ctx.font = '11px ' + MONO; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const w = ctx.measureText(text).width + 8;
      ctx.fillStyle = C.bg; ctx.fillRect(x - w / 2, y - 8, w, 16);
      ctx.fillStyle = C.ink2; ctx.fillText(text, x, y);
    }
    function edge(ctx, i, j, p, C) {
      const a = POS[i], b = POS[j], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
      const c = [(a[0] + b[0]) / 2 + nx * 26, (a[1] + b[1]) / 2 + ny * 26];
      const t0 = trim(a, c, b, RAD + 2, true), t1 = trim(a, c, b, RAD + 5, false);
      ctx.strokeStyle = C.ink3; ctx.lineWidth = 1 + 3 * p;
      ctx.beginPath();
      for (let k = 0; k <= 24; k++) { const q = bez(a, c, b, t0 + (t1 - t0) * k / 24); if (k) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
      ctx.stroke();
      const e = bez(a, c, b, t1), d = dbez(a, c, b, t1);
      arrowHead(ctx, e[0], e[1], Math.atan2(d[1], d[0]), 9, C.ink3);
      const m = bez(a, c, b, 0.5);
      tag(ctx, p.toFixed(2), m[0] + nx * 4, m[1] + ny * 4, C);
    }
    function selfLoop(ctx, i, p, C) {
      const a = POS[i], dx = a[0] - CEN[0], dy = a[1] - CEN[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
      const lx = a[0] + ux * (RAD + 11), ly = a[1] + uy * (RAD + 11);
      ctx.strokeStyle = C.ink3; ctx.lineWidth = 1 + 3 * p;
      ctx.beginPath(); ctx.arc(lx, ly, 14, 0, 2 * Math.PI); ctx.stroke();
      tag(ctx, p.toFixed(2), lx - uy * 36, ly + ux * 36, C);
    }
    function draw() {
      const C = palette(), ctx = cv.ctx;
      cv.clear();
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
        if (P[i][j] <= 0) continue;
        if (i === j) selfLoop(ctx, i, P[i][j], C); else edge(ctx, i, j, P[i][j], C);
      }
      for (let i = 0; i < 3; i++) {
        ctx.beginPath(); ctx.arc(POS[i][0], POS[i][1], RAD, 0, 2 * Math.PI);
        ctx.fillStyle = i === cur ? C.accent : C.panel; ctx.fill();
        ctx.lineWidth = 1.5; ctx.strokeStyle = i === cur ? C.accent : C.ink3; ctx.stroke();
        ctx.fillStyle = i === cur ? '#0E1F25' : C.ink;
        ctx.font = '600 12px ' + MONO; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(names[i], POS[i][0], POS[i][1]);
      }
      // bars
      const bx = 390, by = 52, bw = 290, bh = 190, f = freq(), gw = bw / 3;
      ctx.font = '11px ' + MONO; ctx.lineWidth = 1;
      for (let k = 0; k <= 4; k++) {
        const y = by + bh - bh * k / 4;
        ctx.strokeStyle = C.rule; ctx.globalAlpha = k ? 0.45 : 1; line(ctx, bx, y, bx + bw, y); ctx.globalAlpha = 1;
        ctx.fillStyle = C.ink3; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText((k / 4).toFixed(2), bx - 6, y);
      }
      for (let s = 0; s < 3; s++) {
        const gx = bx + s * gw + gw * 0.14, w = gw * 0.72 / 3;
        [[pi[s], C.ink3], [pit[s], C.info], [f[s], C.accent]].forEach((bar, k) => {
          const h = bar[0] * bh;
          ctx.fillStyle = bar[1]; ctx.fillRect(gx + k * w + 1, by + bh - h, w - 2, h);
        });
        ctx.fillStyle = C.ink2; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillText(names[s], bx + s * gw + gw / 2, by + bh + 6);
      }
      legend(ctx, bx, 20, [['π (stationary)', C.ink3], ['π_t', C.info], ['visits', C.accent]], true);
      out.innerHTML = 't = <b>' + t + '</b> · TV(visits, π) = <b>' + tv(f, pi).toFixed(3) + '</b> · TV(π_t, π) = <b>' +
        tv(pit, pi).toFixed(3) + '</b><br>' + esc(PRESETS[preset].note);
    }
    onTheme(draw);
    reset();
  };

  /* ================= DEMO: 10-armed testbed (Days 11–14) ================= */
  DEMOS.bandit = function (host) {
    const T = 1000, K = 10;
    const controls = header(host, '10-armed testbed',
      'Each run draws a new bandit with q*(a) ~ N(0, 1) and rewards ~ N(q*(a), 1). Sample-average estimates, ties broken at random; curves average over runs.');
    const runs = addSlider(controls, 'runs', 50, 2000, 50, 300);
    const metric = addSelect(controls, 'show', [['reward', 'average reward'], ['optimal', '% optimal action']], 'reward', () => draw());
    const runBtn = addButton(controls, 'Run', start, true);
    const cv = makeCanvas(host, 700, 320), out = addOut(host);
    let M = null, done = 0, target = 0, raf = 0;

    function start() {
      cancelAnimationFrame(raf);
      M = [['greedy (ε = 0)', 0, 0, 'ink3'], ['ε = 0.01', 0.01, 0, 'info'], ['ε = 0.1', 0.1, 0, 'accent'], ['UCB (c = 2)', 0, 2, 'warn']]
        .map(([name, eps, ucb, key]) => ({ name, eps, ucb, key, R: new Float64Array(T), O: new Float64Array(T) }));
      done = 0; target = runs.value; runBtn.disabled = true;
      tick();
    }
    function tick() {
      const t0 = performance.now();
      while (done < target && performance.now() - t0 < 14) { oneRun(); done++; }
      draw();
      if (done < target) raf = requestAnimationFrame(tick); else runBtn.disabled = false;
    }
    function oneRun() {
      const q = new Float64Array(K);
      let best = 0;
      for (let a = 0; a < K; a++) { q[a] = randn(); if (q[a] > q[best]) best = a; }
      for (const m of M) {
        const Q = new Float64Array(K), N = new Float64Array(K);
        for (let t = 0; t < T; t++) {
          let a = -1;
          if (m.ucb) {
            for (let i = 0; i < K; i++) if (N[i] === 0) { a = i; break; }
            if (a < 0) {
              const lt = Math.log(t + 1);
              let bv = -Infinity;
              for (let i = 0; i < K; i++) { const v = Q[i] + m.ucb * Math.sqrt(lt / N[i]); if (v > bv) { bv = v; a = i; } }
            }
          } else if (Math.random() < m.eps) a = (Math.random() * K) | 0;
          else a = argmaxRand(Q, 0, K);
          const r = q[a] + randn();
          N[a]++; Q[a] += (r - Q[a]) / N[a];
          m.R[t] += r; if (a === best) m.O[t]++;
        }
      }
    }
    function draw() {
      const C = palette(), opt = metric.value === 'optimal', n = Math.max(done, 1);
      cv.clear();
      const series = M ? M.map(m => ({ color: C[m.key], data: Array.from(opt ? m.O : m.R, v => (opt ? 100 : 1) * v / n) })) : [];
      plot(cv.ctx, { x: 62, y: 14, w: 618, h: 262 }, {
        xmin: 0, xmax: T, ymin: 0, ymax: opt ? 100 : 1.6, yfmt: opt ? fmtInt : v => v.toFixed(1),
        xlabel: 'steps', ylabel: opt ? '% optimal action' : 'average reward', series,
        legend: M ? M.map(m => [m.name, C[m.key]]) : null, legendAt: [530, 196]
      });
      if (!M) { out.textContent = 'Press Run.'; return; }
      const tail = arr => { let s = 0; for (let t = T - 100; t < T; t++) s += arr[t]; return s / 100 / n; };
      out.innerHTML = 'runs <b>' + done + '</b> / ' + target + ' · mean reward over the last 100 steps: ' +
        M.map(m => esc(m.name) + ' <b>' + tail(m.R).toFixed(2) + '</b>').join(' · ');
    }
    onTheme(draw);
    start();
  };

  /* ================= DEMO: gridworld value iteration (Days 28–32) ================= */
  DEMOS['value-iteration'] = function (host) {
    const W = 6, H = 5, GOAL = 5, PIT = 11, START = 24, CELL = 60, GX = 12, GY = 12;
    const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const walls = new Set([7, 8, 10, 19, 21]);
    const controls = header(host, 'Gridworld value iteration',
      'Each sweep applies the Bellman optimality backup to every state at once. Colour is V(s), arrows are the greedy policy. Moves slip sideways with probability “slip”. Click a cell to toggle a wall.');
    const gamma = addSlider(controls, 'γ', 0.5, 0.99, 0.01, 0.9, v => v.toFixed(2), () => reset());
    const slip = addSlider(controls, 'slip', 0, 0.6, 0.05, 0.2, v => v.toFixed(2), () => reset());
    const cost = addSlider(controls, 'step reward', -0.2, 0, 0.01, -0.04, v => v.toFixed(2), () => reset());
    addButton(controls, 'Sweep', () => { stop(); sweep(); draw(); });
    const runBtn = addButton(controls, 'Run to convergence', () => (running ? stop() : go()), true);
    addButton(controls, 'Reset', () => reset());
    const cv = makeCanvas(host, 720, 330), out = addOut(host);
    let V, k, deltas, running = false, timer = 0;

    const terminal = s => s === GOAL || s === PIT;
    function move(s, d) {
      const nx = s % W + DIRS[d][0], ny = ((s / W) | 0) + DIRS[d][1];
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) return s;
      const n = ny * W + nx;
      return walls.has(n) ? s : n;
    }
    function q(s, a) {
      const sl = slip.value;
      let v = 0;
      for (const [d, p] of [[a, 1 - sl], [(a + 1) % 4, sl / 2], [(a + 3) % 4, sl / 2]]) if (p > 0) v += p * (cost.value + gamma.value * V[move(s, d)]);
      return v;
    }
    function greedy(s) { let best = 0, bv = -Infinity; for (let a = 0; a < 4; a++) { const v = q(s, a); if (v > bv + 1e-12) { bv = v; best = a; } } return best; }
    function reset() { stop(); V = new Float64Array(W * H); V[GOAL] = 1; V[PIT] = -1; k = 0; deltas = []; draw(); }
    function sweep() {
      const NV = Float64Array.from(V);
      let d = 0;
      for (let s = 0; s < W * H; s++) {
        if (terminal(s) || walls.has(s)) continue;
        let best = -Infinity;
        for (let a = 0; a < 4; a++) best = Math.max(best, q(s, a));
        NV[s] = best; d = Math.max(d, Math.abs(best - V[s]));
      }
      V = NV; k++; deltas.push(d);
      return d;
    }
    function go() {
      running = true; runBtn.textContent = 'Pause';
      (function loop() {
        if (!running) return;
        const d = sweep(); draw();
        if (d < 1e-4 || k >= 500) { stop(); return; }
        timer = setTimeout(loop, 90);
      })();
    }
    function stop() { running = false; runBtn.textContent = 'Run to convergence'; clearTimeout(timer); }
    function draw() {
      const C = palette(), ctx = cv.ctx;
      cv.clear();
      for (let s = 0; s < W * H; s++) {
        const x = GX + (s % W) * CELL, y = GY + ((s / W) | 0) * CELL;
        if (walls.has(s)) {
          ctx.fillStyle = C.rule; ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2);
          ctx.strokeStyle = C.ink3; ctx.globalAlpha = 0.35; ctx.lineWidth = 1;
          for (let h = 8; h < CELL * 2; h += 10) line(ctx, x + Math.max(1, h - CELL), y + Math.min(CELL - 1, h), x + Math.min(CELL - 1, h), y + Math.max(1, h - CELL));
          ctx.globalAlpha = 1;
          continue;
        }
        const tv = (V[s] + 1) / 2;
        ctx.fillStyle = viridis(tv); ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2);
        const ink = tv > 0.62 ? '#0E1F25' : '#F4F7F7';
        ctx.fillStyle = ink; ctx.strokeStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        if (terminal(s)) {
          ctx.font = '600 14px ' + MONO; ctx.fillText(s === GOAL ? '+1' : '−1', x + CELL / 2, y + CELL / 2);
          ctx.strokeStyle = s === GOAL ? C.accent2 : C.bad; ctx.lineWidth = 3; ctx.strokeRect(x + 3, y + 3, CELL - 6, CELL - 6);
          continue;
        }
        ctx.font = '11px ' + MONO; ctx.fillText(V[s].toFixed(2), x + CELL / 2, y + CELL - 12);
        if (k > 0) {
          const [dx, dy] = DIRS[greedy(s)], cx = x + CELL / 2, cy = y + 24;
          ctx.lineWidth = 2; line(ctx, cx - dx * 10, cy - dy * 10, cx + dx * 8, cy + dy * 8);
          arrowHead(ctx, cx + dx * 12, cy + dy * 12, Math.atan2(dy, dx), 8, ink);
        }
        if (s === START) { ctx.font = '600 11px ' + MONO; ctx.fillText('S', x + 10, y + 11); }
      }
      const lg = deltas.map(d => Math.log10(Math.max(d, 1e-6)));
      const bound = deltas.map((_, i) => Math.log10(Math.max(deltas[0] * Math.pow(gamma.value, i), 1e-6)));
      plot(ctx, { x: 452, y: 20, w: 250, h: 262 }, {
        xmin: 1, xmax: Math.max(10, deltas.length), ymin: -6, ymax: 0, yticks: 6, yfmt: v => '1e' + Math.round(v), xlabel: 'sweep k',
        series: [{ color: C.ink3, data: bound, x0: 1, dash: [4, 4], width: 1.2 }, { color: C.accent, data: lg, x0: 1 }],
        legend: [['max |ΔV| per sweep', C.accent], ['γᵏ⁻¹·Δ₁ bound', C.ink3]], legendAt: [560, 26]
      });
      const conv = k > 0 && deltas[k - 1] < 1e-4;
      out.innerHTML = 'sweep <b>' + k + '</b> · max |ΔV| = <b>' + (k ? deltas[k - 1].toExponential(2) : '—') + '</b> · V(S) = <b>' +
        V[START].toFixed(3) + '</b>' + (conv ? ' · converged (Δ &lt; 10⁻⁴)' : '') +
        '<br>The dashed line is the worst-case contraction guarantee; terminal states usually make the real error fall faster. Make the step reward very negative and the policy starts risking the pit.';
    }
    cv.c.addEventListener('click', e => {
      const [px, py] = cv.pos(e), cx = Math.floor((px - GX) / CELL), cy = Math.floor((py - GY) / CELL);
      if (cx < 0 || cy < 0 || cx >= W || cy >= H) return;
      const s = cy * W + cx;
      if (terminal(s) || s === START) return;
      if (walls.has(s)) walls.delete(s); else walls.add(s);
      reset();
    });
    onTheme(draw);
    reset();
  };

  /* ================= DEMO: random walk, TD(0) vs MC (Days 42–43) ================= */
  DEMOS['random-walk'] = function (host) {
    const N = 5, TRUE = [1, 2, 3, 4, 5].map(i => i / 6), EP = 100, NAMES = ['A', 'B', 'C', 'D', 'E'];
    const controls = header(host, 'Random walk: TD(0) vs constant-α Monte Carlo',
      'Five states, start in C, reward +1 only for exiting on the right. True values are 1/6 … 5/6 and estimates start at 0.5. Both methods see the same episodes; error is RMS over states, averaged over runs.');
    const aTD = addSlider(controls, 'α TD', 0.01, 0.3, 0.01, 0.1, v => v.toFixed(2));
    const aMC = addSlider(controls, 'α MC', 0.005, 0.1, 0.005, 0.02, v => v.toFixed(3));
    const runs = addSlider(controls, 'runs', 10, 500, 10, 100);
    const runBtn = addButton(controls, 'Run', start, true);
    const cv = makeCanvas(host, 720, 300), out = addOut(host);
    let errTD, errMC, finTD, finMC, done = 0, target = 0, raf = 0;

    const rms = V => Math.sqrt(V.reduce((s, v, i) => s + (v - TRUE[i]) ** 2, 0) / N);
    function start() {
      cancelAnimationFrame(raf);
      errTD = new Float64Array(EP + 1); errMC = new Float64Array(EP + 1); finTD = new Float64Array(N); finMC = new Float64Array(N);
      done = 0; target = runs.value; runBtn.disabled = true;
      tick();
    }
    function tick() {
      const t0 = performance.now();
      while (done < target && performance.now() - t0 < 14) { oneRun(); done++; }
      draw();
      if (done < target) raf = requestAnimationFrame(tick); else runBtn.disabled = false;
    }
    function oneRun() {
      const td = new Float64Array(N).fill(0.5), mc = new Float64Array(N).fill(0.5), a1 = aTD.value, a2 = aMC.value;
      errTD[0] += rms(td); errMC[0] += rms(mc);
      for (let ep = 1; ep <= EP; ep++) {
        const path = [2];
        let s = 2, r;
        for (;;) { s += Math.random() < 0.5 ? -1 : 1; if (s < 0) { r = 0; break; } if (s >= N) { r = 1; break; } path.push(s); }
        for (let i = 0; i < path.length; i++) { const x = path[i], tgt = i + 1 < path.length ? td[path[i + 1]] : r; td[x] += a1 * (tgt - td[x]); }
        for (const x of path) mc[x] += a2 * (r - mc[x]);
        errTD[ep] += rms(td); errMC[ep] += rms(mc);
      }
      for (let i = 0; i < N; i++) { finTD[i] += td[i]; finMC[i] += mc[i]; }
    }
    function draw() {
      const C = palette(), n = Math.max(done, 1), ctx = cv.ctx;
      cv.clear();
      const ok = !!errTD;
      plot(ctx, { x: 58, y: 14, w: 320, h: 240 }, {
        xmin: 0, xmax: EP, ymin: 0, ymax: 0.25, yfmt: v => v.toFixed(2), xlabel: 'episodes', ylabel: 'RMS error',
        series: ok ? [{ color: C.warn, data: Array.from(errMC, v => v / n) }, { color: C.info, data: Array.from(errTD, v => v / n) }] : [],
        legend: [['TD(0)', C.info], ['MC', C.warn]], legendAt: [300, 20]
      });
      plot(ctx, { x: 458, y: 14, w: 240, h: 240 }, {
        xmin: 0, xmax: 4, xfmt: v => NAMES[Math.round(v)], ymin: 0, ymax: 1, yfmt: v => v.toFixed(2), xlabel: 'state, after ' + EP + ' episodes',
        series: [{ color: C.ink3, data: TRUE, dash: [4, 4], width: 1.4 }].concat(ok ? [
          { color: C.warn, data: Array.from(finMC, v => v / n) }, { color: C.info, data: Array.from(finTD, v => v / n) }] : []),
        legend: [['true v', C.ink3], ['TD', C.info], ['MC', C.warn]]
      });
      if (!ok) return;
      out.innerHTML = 'runs <b>' + done + '</b> / ' + target + ' · RMS after ' + EP + ' episodes: TD <b>' + (errTD[EP] / n).toFixed(3) +
        '</b> · MC <b>' + (errMC[EP] / n).toFixed(3) + '</b><br>Push α TD above 0.15 and its curve dips, then climbs to a noise floor: constant step sizes never fully converge.';
    }
    onTheme(draw);
    start();
  };

  /* ================= DEMO: Cliff Walking, SARSA vs Q-learning (Days 44–46) ================= */
  DEMOS.cliff = function (host) {
    const W = 12, H = 4, S0 = 36, GOAL = 47, EP = 500, ALPHA = 0.5, MAXSTEPS = 5000, CELL = 28, GX = 24, GY = 18;
    const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const controls = header(host, 'Cliff Walking: SARSA vs Q-learning',
      'Reward −1 per step; stepping into the cliff costs −100 and sends you back to the start. Both agents act ε-greedily with α = 0.5. Top: the greedy path each one learned. Bottom: reward per episode, 10-episode moving average.');
    const eps = addSlider(controls, 'ε', 0, 0.3, 0.01, 0.1, v => v.toFixed(2));
    const runs = addSlider(controls, 'runs', 5, 100, 5, 20);
    const runBtn = addButton(controls, 'Run', start, true);
    const cv = makeCanvas(host, 720, 400), out = addOut(host);
    let sumS, sumQ, lastS, lastQ, done = 0, target = 0, raf = 0;

    const isCliff = s => ((s / W) | 0) === 3 && s % W >= 1 && s % W <= 10;
    function env(s, a) {
      const nx = Math.min(W - 1, Math.max(0, s % W + DIRS[a][0])), ny = Math.min(H - 1, Math.max(0, ((s / W) | 0) + DIRS[a][1])), n = ny * W + nx;
      if (isCliff(n)) return [-100, S0, false];
      return [-1, n, n === GOAL];
    }
    const pick = (Q, s, e) => (Math.random() < e ? (Math.random() * 4) | 0 : argmaxRand(Q, s * 4, 4));
    const maxQ = (Q, s) => Math.max(Q[s * 4], Q[s * 4 + 1], Q[s * 4 + 2], Q[s * 4 + 3]);
    function learn(sarsa, e) {
      const Q = new Float64Array(W * H * 4), R = new Float64Array(EP);
      for (let ep = 0; ep < EP; ep++) {
        let s = S0, a = pick(Q, s, e), tot = 0;
        for (let t = 0; t < MAXSTEPS; t++) {
          if (!sarsa) a = pick(Q, s, e);
          const [r, s2, end] = env(s, a);
          tot += r;
          let next = 0, a2 = 0;
          if (sarsa) { a2 = pick(Q, s2, e); next = end ? 0 : Q[s2 * 4 + a2]; } else next = end ? 0 : maxQ(Q, s2);
          Q[s * 4 + a] += ALPHA * (r + next - Q[s * 4 + a]);
          if (end) break;
          s = s2; a = a2;
        }
        R[ep] = tot;
      }
      return [Q, R];
    }
    function start() {
      cancelAnimationFrame(raf);
      sumS = new Float64Array(EP); sumQ = new Float64Array(EP); done = 0; target = runs.value; runBtn.disabled = true;
      tick();
    }
    function tick() {
      const t0 = performance.now();
      while (done < target && performance.now() - t0 < 14) {
        const e = eps.value, s = learn(true, e), q = learn(false, e);
        for (let i = 0; i < EP; i++) { sumS[i] += s[1][i]; sumQ[i] += q[1][i]; }
        lastS = s[0]; lastQ = q[0]; done++;
      }
      draw();
      if (done < target) raf = requestAnimationFrame(tick); else runBtn.disabled = false;
    }
    function path(Q) {
      const pts = [S0], seen = new Set([S0]);
      let s = S0;
      for (let i = 0; i < 60 && s !== GOAL; i++) {
        let a = 0;
        for (let j = 1; j < 4; j++) if (Q[s * 4 + j] > Q[s * 4 + a]) a = j;
        const nx = Math.min(W - 1, Math.max(0, s % W + DIRS[a][0])), ny = Math.min(H - 1, Math.max(0, ((s / W) | 0) + DIRS[a][1])), n = ny * W + nx;
        pts.push(n);
        if (isCliff(n) || seen.has(n)) break;
        seen.add(n); s = n;
      }
      return pts;
    }
    function draw() {
      const C = palette(), ctx = cv.ctx;
      cv.clear();
      for (let s = 0; s < W * H; s++) {
        const x = GX + (s % W) * CELL, y = GY + ((s / W) | 0) * CELL;
        ctx.fillStyle = isCliff(s) ? C.bad : C.panel; ctx.globalAlpha = isCliff(s) ? 0.4 : 1;
        ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2); ctx.globalAlpha = 1;
      }
      ctx.font = '600 11px ' + MONO; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = C.ink;
      ctx.fillText('S', GX + CELL / 2, GY + 3.5 * CELL); ctx.fillText('G', GX + 11.5 * CELL, GY + 3.5 * CELL);
      ctx.fillStyle = C.ink2; ctx.font = '11px ' + MONO; ctx.fillText('the cliff  (−100)', GX + 6 * CELL, GY + 3.5 * CELL);
      [[lastS, C.info, -4], [lastQ, C.warn, 4]].forEach(([Q, color, off]) => {
        if (!Q) return;
        const pts = path(Q);
        ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
        pts.forEach((s, i) => { const x = GX + (s % W + 0.5) * CELL + off, y = GY + (((s / W) | 0) + 0.5) * CELL + off; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
        ctx.stroke();
      });
      const n = Math.max(done, 1), mS = sumS ? smooth(Array.from(sumS, v => v / n), 10) : null, mQ = sumQ ? smooth(Array.from(sumQ, v => v / n), 10) : null;
      const tail = arr => { let s = 0; for (let i = EP - 100; i < EP; i++) s += arr[i]; return s / 100 / n; };
      legend(ctx, 400, 26, [['SARSA (on-policy)', C.info], ['Q-learning (off-policy)', C.warn]]);
      if (sumS) {
        ctx.font = '11px ' + MONO; ctx.fillStyle = C.ink2; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        ctx.fillText('mean reward, last 100 episodes', 400, 76);
        ctx.fillText('SARSA ' + tail(sumS).toFixed(1) + '   Q-learning ' + tail(sumQ).toFixed(1), 400, 94);
      }
      plot(ctx, { x: 62, y: 170, w: 630, h: 190 }, {
        xmin: 0, xmax: EP, ymin: -100, ymax: 0, yfmt: fmtInt, xlabel: 'episode', ylabel: 'reward / episode',
        series: mS ? [{ color: C.warn, data: mQ }, { color: C.info, data: mS }] : []
      });
      out.innerHTML = sumS ? 'runs <b>' + done + '</b> / ' + target +
        ' · Q-learning learns the optimal path along the edge but keeps falling off while exploring; SARSA learns the values of the policy it actually follows, so it routes away from the cliff. Set ε = 0 and both converge to the same path.' : '';
    }
    onTheme(draw);
    start();
  };

  /* ================= DEMO: tile coding (Day 65) ================= */
  DEMOS['tile-coding'] = function (host) {
    const controls = header(host, 'Tile coding: overlapping tilings and generalization',
      'Left: the 2-D input space with every tiling drawn; hover to see the single active tile in each tiling. Click or drag to train v̂ toward the target there. Right: the learned v̂, where one update spreads to every point sharing a tile.');
    let n = 4, T = 5, asym = false, w, hover = null, down = false;
    addSlider(controls, 'tilings', 1, 8, 1, n, null, v => { n = v; resetW(); });
    addSlider(controls, 'tiles/dim', 2, 10, 1, T, null, v => { T = v; resetW(); });
    addSelect(controls, 'offsets', [['uniform', 'uniform (1,1)'], ['asym', 'asymmetric (1,3)']], 'uniform', v => { asym = v === 'asym'; resetW(); });
    const target = addSelect(controls, 'target', [['1', '+1'], ['-1', '−1']], '1');
    const alpha = addSlider(controls, 'α', 0.05, 1, 0.05, 0.5, v => v.toFixed(2));
    addButton(controls, 'Reset weights', () => resetW());
    const cv = makeCanvas(host, 660, 330), out = addOut(host);
    const PL = { x: 12, y: 14, s: 300 }, PR = { x: 348, y: 14, s: 300 }, G = 60;

    function resetW() { w = new Float64Array(n * (T + 1) * (T + 1)); draw(); }
    function offs(k) { const fx = (k / n) % 1; return [fx, asym ? (3 * k / n) % 1 : fx]; }
    function tiles(x, y) {
      const res = [], size = (T + 1) * (T + 1);
      for (let k = 0; k < n; k++) {
        const [fx, fy] = offs(k), ix = Math.min(T, Math.floor(x * T + fx)), iy = Math.min(T, Math.floor(y * T + fy));
        res.push(k * size + iy * (T + 1) + ix);
      }
      return res;
    }
    const v = (x, y) => tiles(x, y).reduce((s, i) => s + w[i], 0);
    function train(x, y) { const err = +target.value - v(x, y), step = alpha.value / n * err; for (const i of tiles(x, y)) w[i] += step; }
    const tilingColor = k => viridis(n === 1 ? 0.6 : 0.2 + 0.75 * k / (n - 1));
    function draw() {
      const C = palette(), ctx = cv.ctx;
      cv.clear();
      ctx.fillStyle = C.panel; ctx.fillRect(PL.x, PL.y, PL.s, PL.s);
      ctx.save(); ctx.beginPath(); ctx.rect(PL.x, PL.y, PL.s, PL.s); ctx.clip();
      for (let k = 0; k < n; k++) {
        const [fx, fy] = offs(k), col = tilingColor(k);
        if (hover) {
          const ix = Math.floor(hover[0] * T + fx), iy = Math.floor(hover[1] * T + fy);
          ctx.fillStyle = col; ctx.globalAlpha = 0.22;
          ctx.fillRect(PL.x + (ix - fx) / T * PL.s, PL.y + (iy - fy) / T * PL.s, PL.s / T, PL.s / T);
          ctx.globalAlpha = 0.95; ctx.strokeStyle = col; ctx.lineWidth = 2;
          ctx.strokeRect(PL.x + (ix - fx) / T * PL.s, PL.y + (iy - fy) / T * PL.s, PL.s / T, PL.s / T);
        }
        ctx.strokeStyle = col; ctx.globalAlpha = 0.55; ctx.lineWidth = 1;
        for (let i = 0; i <= T + 1; i++) {
          const gx = PL.x + (i - fx) / T * PL.s, gy = PL.y + (i - fy) / T * PL.s;
          line(ctx, gx, PL.y, gx, PL.y + PL.s); line(ctx, PL.x, gy, PL.x + PL.s, gy);
        }
        ctx.globalAlpha = 1;
      }
      ctx.restore();
      const cs = PR.s / G;
      for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) {
        ctx.fillStyle = viridis((v((i + 0.5) / G, (j + 0.5) / G) + 1) / 2);
        ctx.fillRect(PR.x + i * cs, PR.y + j * cs, cs + 0.5, cs + 0.5);
      }
      ctx.strokeStyle = C.rule; ctx.lineWidth = 1; ctx.strokeRect(PL.x, PL.y, PL.s, PL.s); ctx.strokeRect(PR.x, PR.y, PR.s, PR.s);
      if (hover) for (const P of [PL, PR]) {
        ctx.beginPath(); ctx.arc(P.x + hover[0] * P.s, P.y + hover[1] * P.s, 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = C.ink; ctx.fill(); ctx.strokeStyle = C.bg; ctx.lineWidth = 1.5; ctx.stroke();
      }
      ctx.font = '11px ' + MONO; ctx.fillStyle = C.ink3; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText('input space · ' + n + ' tiling' + (n > 1 ? 's' : ''), PL.x, PL.y + PL.s + 4);
      ctx.fillText('v̂(s)   −1 → +1', PR.x, PR.y + PR.s + 4);
      const feats = n * (T + 1) * (T + 1);
      out.innerHTML = hover
        ? 's = (' + hover[0].toFixed(2) + ', ' + hover[1].toFixed(2) + ') · active features: <b>' + n + '</b> of ' + feats + ' · v̂(s) = <b>' + v(hover[0], hover[1]).toFixed(3) + '</b>'
        : feats + ' binary features, exactly ' + n + ' active at any point. Step size is α/n so one update moves v̂(s) a fraction α of the way to the target.';
    }
    function unit(e) {
      const [px, py] = cv.pos(e);
      for (const P of [PL, PR]) {
        const x = (px - P.x) / P.s, y = (py - P.y) / P.s;
        if (x >= 0 && x < 1 && y >= 0 && y < 1) return [x, y];
      }
      return null;
    }
    cv.c.addEventListener('pointermove', e => { hover = unit(e); if (down && hover) train(hover[0], hover[1]); draw(); });
    cv.c.addEventListener('pointerdown', e => { down = true; cv.c.setPointerCapture(e.pointerId); hover = unit(e); if (hover) train(hover[0], hover[1]); draw(); });
    cv.c.addEventListener('pointerup', () => { down = false; });
    cv.c.addEventListener('pointerleave', () => { hover = null; down = false; draw(); });
    onTheme(draw);
    resetW();
  };

  /* ================= DEMO: PPO clipped objective (Day 91) ================= */
  DEMOS['ppo-clip'] = function (host) {
    const controls = header(host, 'PPO clipped surrogate',
      'Per-sample objective as a function of the probability ratio r = π_θ(a|s) / π_old(a|s). Solid: L^CLIP = min(r·Â, clip(r, 1−ε, 1+ε)·Â). Dashed: the unclipped r·Â. Shaded: zero gradient, where the sample stops pushing.');
    const eps = addSlider(controls, 'ε', 0.05, 0.5, 0.01, 0.2, v => v.toFixed(2), () => draw());
    const adv = addSlider(controls, '|Â|', 0.2, 2, 0.1, 1, v => v.toFixed(1), () => draw());
    const cv = makeCanvas(host, 720, 300), out = addOut(host);
    const PANELS = [{ x: 56, sign: 1 }, { x: 412, sign: -1 }], PW = 280, PY = 34, PH = 220, RMAX = 2;
    let hover = null;
    const Lclip = (r, A, e) => Math.min(r * A, Math.min(Math.max(r, 1 - e), 1 + e) * A);
    const flat = (r, sign, e) => (sign > 0 ? r > 1 + e : r < 1 - e);

    function draw() {
      const C = palette(), ctx = cv.ctx, e = eps.value, a = adv.value;
      cv.clear();
      PANELS.forEach(p => {
        const A = p.sign * a, ymin = p.sign > 0 ? -0.3 * a : -2.2 * a, ymax = p.sign > 0 ? 2.2 * a : 0.3 * a;
        const X = r => p.x + r / RMAX * PW, Y = v => PY + PH - (v - ymin) / (ymax - ymin) * PH;
        ctx.fillStyle = C.bad; ctx.globalAlpha = 0.13;
        if (p.sign > 0) ctx.fillRect(X(1 + e), PY, X(RMAX) - X(1 + e), PH); else ctx.fillRect(X(0), PY, X(1 - e) - X(0), PH);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = C.rule; ctx.lineWidth = 1; ctx.strokeRect(p.x, PY, PW, PH);
        line(ctx, p.x, Y(0), p.x + PW, Y(0));
        ctx.font = '11px ' + MONO; ctx.fillStyle = C.ink3; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        [0, 0.5, 1, 1.5, 2].forEach(r => ctx.fillText(r.toFixed(1), X(r), PY + PH + 5));
        ctx.fillText('ratio r', p.x + PW / 2, PY + PH + 20);
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        [ymin, 0, ymax].forEach(v => ctx.fillText(v.toFixed(1), p.x - 6, Y(v)));
        ctx.setLineDash([3, 4]); ctx.strokeStyle = C.ink3;
        [1 - e, 1, 1 + e].forEach(r => line(ctx, X(r), PY, X(r), PY + PH));
        ctx.setLineDash([6, 5]); ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(RMAX), Y(RMAX * A)); ctx.stroke();
        ctx.setLineDash([]); ctx.strokeStyle = C.accent; ctx.lineWidth = 3; ctx.beginPath();
        for (let i = 0; i <= 200; i++) { const r = RMAX * i / 200, y = Y(Lclip(r, A, e)); if (i) ctx.lineTo(X(r), y); else ctx.moveTo(X(r), y); }
        ctx.stroke();
        ctx.fillStyle = C.ink; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.font = '600 12px ' + MONO;
        ctx.fillText(p.sign > 0 ? 'Â > 0  (better than expected)' : 'Â < 0  (worse than expected)', p.x, PY - 8);
        ctx.font = '11px ' + MONO; ctx.fillStyle = C.ink3; ctx.textAlign = 'center';
        ctx.fillText('1−ε', X(1 - e), PY + 14); ctx.fillText('1+ε', X(1 + e), PY + 14);
        if (hover && hover.p === p) {
          const L = Lclip(hover.r, A, e);
          ctx.strokeStyle = C.ink2; ctx.lineWidth = 1; line(ctx, X(hover.r), PY, X(hover.r), PY + PH);
          ctx.beginPath(); ctx.arc(X(hover.r), Y(L), 5, 0, 2 * Math.PI); ctx.fillStyle = C.accent2; ctx.fill();
        }
      });
      if (!hover) {
        out.innerHTML = 'Hover a panel. The objective is <b>pessimistic</b>: clipping only ever removes incentive to move further, never hides a loss.';
        return;
      }
      const A = hover.p.sign * a, L = Lclip(hover.r, A, e), isFlat = flat(hover.r, hover.p.sign, e);
      out.innerHTML = 'r = <b>' + hover.r.toFixed(2) + '</b> · Â = <b>' + A.toFixed(1) + '</b> · L = <b>' + L.toFixed(2) + '</b> · ∂L/∂r = <b>' +
        (isFlat ? '0' : A.toFixed(1)) + '</b> — ' + (isFlat
        ? 'clipped: the ratio has already moved ' + (A > 0 ? 'past 1+ε' : 'below 1−ε') + ' in the helpful direction, so this sample stops pushing.'
        : (A > 0 && hover.r < 1 - e) || (A < 0 && hover.r > 1 + e)
          ? 'unclipped on purpose: the policy moved the wrong way, so the full gradient pulls it back.'
          : 'inside the trust region: ordinary policy-gradient signal.');
    }
    cv.c.addEventListener('pointermove', ev => {
      const [px, py] = cv.pos(ev);
      hover = null;
      for (const p of PANELS) if (px >= p.x && px <= p.x + PW && py >= PY && py <= PY + PH) hover = { p, r: (px - p.x) / PW * RMAX };
      draw();
    });
    cv.c.addEventListener('pointerleave', () => { hover = null; draw(); });
    onTheme(draw);
    draw();
  };

  /* ---------------- boot ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-toggle]').forEach(b => b.addEventListener('click', toggleTheme));
    renderSpines();
    renderLessonIndex();
    highlightCode();
    scrollSpy();
    initDemos();
  });
})();
