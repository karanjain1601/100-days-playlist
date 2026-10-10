/* ============================================================
   Shared runtime for the lecture notes.
   NB = tiny canvas plotting + control library used by all demos.
   ============================================================ */
(function () {
  // ---------- Math ----------
  // Every formula is ALREADY rendered into the page as HTML (class "m", with
  // the original TeX kept in data-tex). Nothing below is required for the page
  // to display correctly - it only swaps in KaTeX's finer typesetting when a
  // CDN happens to be reachable. Offline, sandboxed or CSP-restricted viewers
  // keep the pre-rendered version, so math never falls back to raw source.
  var CDNS = [
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/',
    'https://unpkg.com/katex@0.16.9/dist/',
    'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/'
  ];
  var cdnIdx = 0;
  function loadScript(src, ok, fail) {
    var s = document.createElement('script');
    s.src = src; s.onload = ok; s.onerror = fail;
    document.head.appendChild(s);
  }
  function upgradeMath() {
    if (!window.katex) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = CDNS[cdnIdx] + 'katex.min.css';
    document.head.appendChild(l);
    var nodes = document.querySelectorAll('.m[data-tex]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], tex = el.getAttribute('data-tex'), keep = el.innerHTML;
      try {
        window.katex.render(tex, el, {
          displayMode: el.classList.contains('md'),
          throwOnError: false, strict: 'ignore'
        });
        el.classList.add('kx');
      } catch (e) { el.innerHTML = keep; }
    }
  }
  function tryCdn() {
    if (cdnIdx >= CDNS.length) return;   // stay with the pre-rendered math
    loadScript(CDNS[cdnIdx] + 'katex.min.js', upgradeMath,
               function () { cdnIdx++; tryCdn(); });
  }
  tryCdn();

  // ---------- theme ----------
  var theme = 'light';
  window.toggleTheme = function () {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.demo canvas').forEach(function (c) { if (c._redraw) c._redraw(); });
  };

  // ---------- sidebar scroll-spy ----------
  window.addEventListener('load', function () {
    var links = [].slice.call(document.querySelectorAll('.sidebar a[href^="#"]'));
    if (!links.length) return;
    var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var i = targets.indexOf(en.target);
        if (i < 0) return;
        links.forEach(function (l) { l.classList.remove('active'); });
        links[i].classList.add('active');
      });
    }, { rootMargin: '-10% 0px -80% 0px' });
    targets.forEach(function (t) { if (t) io.observe(t); });
  });

  // ============================================================
  //  NB — plotting
  // ============================================================
  var NB = {};

  NB.rng = function (seed) {
    var s = seed >>> 0 || 42;
    return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  };
  NB.randn = function (r) {
    var u = 0, v = 0;
    while (u === 0) u = r();
    while (v === 0) v = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
  NB.lin = function (a, b, n) { var o = []; for (var i = 0; i < n; i++) o.push(a + (b - a) * i / (n - 1)); return o; };
  NB.map = function (xs, f) { return xs.map(f); };
  NB.sum = function (a) { return a.reduce(function (x, y) { return x + y; }, 0); };
  NB.mean = function (a) { return NB.sum(a) / a.length; };
  NB.varr = function (a) { var m = NB.mean(a); return NB.sum(a.map(function (x) { return (x - m) * (x - m); })) / a.length; };
  NB.cssvar = function (n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); };

  NB.Plot = function (canvas, o) {
    o = o || {};
    var P = {
      c: canvas, xlim: o.xlim || [0, 1], ylim: o.ylim || [0, 1],
      pad: o.pad || { l: 46, r: 12, t: 12, b: 34 },
      xlabel: o.xlabel || '', ylabel: o.ylabel || '', grid: o.grid !== false,
      logx: !!o.logx, logy: !!o.logy, items: []
    };
    var dpr = window.devicePixelRatio || 1;
    function size() {
      var w = canvas.clientWidth || 600, h = o.height || 260;
      canvas.width = w * dpr; canvas.height = h * dpr; canvas.style.height = h + 'px';
      P.w = w; P.h = h;
    }
    size();
    var ctx = canvas.getContext('2d');
    function tx(x) { var a = P.logx ? Math.log10(x) : x, l0 = P.logx ? Math.log10(P.xlim[0]) : P.xlim[0], l1 = P.logx ? Math.log10(P.xlim[1]) : P.xlim[1]; return P.pad.l + (a - l0) / (l1 - l0) * (P.w - P.pad.l - P.pad.r); }
    function ty(y) { var a = P.logy ? Math.log10(y) : y, l0 = P.logy ? Math.log10(P.ylim[0]) : P.ylim[0], l1 = P.logy ? Math.log10(P.ylim[1]) : P.ylim[1]; return P.h - P.pad.b - (a - l0) / (l1 - l0) * (P.h - P.pad.t - P.pad.b); }
    P.tx = tx; P.ty = ty;

    P.begin = function () {
      size();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, P.w, P.h);
      var ink = NB.cssvar('--ink-3'), rule = NB.cssvar('--rule'), ink2 = NB.cssvar('--ink-2');
      ctx.font = '10px ui-monospace,monospace'; ctx.fillStyle = ink; ctx.strokeStyle = rule; ctx.lineWidth = 1;
      var nx = 5, ny = 4, i, v;
      for (i = 0; i <= nx; i++) {
        v = P.xlim[0] + (P.xlim[1] - P.xlim[0]) * i / nx;
        if (P.logx) v = Math.pow(10, Math.log10(P.xlim[0]) + (Math.log10(P.xlim[1]) - Math.log10(P.xlim[0])) * i / nx);
        var X = tx(v);
        if (P.grid) { ctx.globalAlpha = .35; ctx.beginPath(); ctx.moveTo(X, P.pad.t); ctx.lineTo(X, P.h - P.pad.b); ctx.stroke(); ctx.globalAlpha = 1; }
        ctx.textAlign = 'center'; ctx.fillText(NB.fmt(v), X, P.h - P.pad.b + 13);
      }
      for (i = 0; i <= ny; i++) {
        v = P.ylim[0] + (P.ylim[1] - P.ylim[0]) * i / ny;
        if (P.logy) v = Math.pow(10, Math.log10(P.ylim[0]) + (Math.log10(P.ylim[1]) - Math.log10(P.ylim[0])) * i / ny);
        var Y = ty(v);
        if (P.grid) { ctx.globalAlpha = .35; ctx.beginPath(); ctx.moveTo(P.pad.l, Y); ctx.lineTo(P.w - P.pad.r, Y); ctx.stroke(); ctx.globalAlpha = 1; }
        ctx.textAlign = 'right'; ctx.fillText(NB.fmt(v), P.pad.l - 6, Y + 3);
      }
      ctx.strokeStyle = ink2; ctx.globalAlpha = .6;
      ctx.beginPath(); ctx.moveTo(P.pad.l, P.pad.t); ctx.lineTo(P.pad.l, P.h - P.pad.b); ctx.lineTo(P.w - P.pad.r, P.h - P.pad.b); ctx.stroke();
      ctx.globalAlpha = 1;
      if (P.xlabel) { ctx.textAlign = 'right'; ctx.fillStyle = ink; ctx.fillText(P.xlabel, P.w - P.pad.r, P.h - 4); }
      if (P.ylabel) { ctx.save(); ctx.translate(11, P.pad.t + 4); ctx.textAlign = 'left'; ctx.fillText(P.ylabel, 0, 0); ctx.restore(); }
      return P;
    };
    P.line = function (xs, ys, s) {
      s = s || {}; ctx.save();
      ctx.strokeStyle = s.color || NB.cssvar('--accent'); ctx.lineWidth = s.width || 2;
      if (s.dash) ctx.setLineDash(s.dash);
      ctx.globalAlpha = s.alpha == null ? 1 : s.alpha;
      ctx.beginPath();
      var started = false;
      for (var i = 0; i < xs.length; i++) {
        var y = ys[i]; if (!isFinite(y) || (P.logy && y <= 0)) { started = false; continue; }
        var X = tx(xs[i]), Y = ty(Math.max(P.ylim[0], Math.min(P.ylim[1], y)));
        if (!started) { ctx.moveTo(X, Y); started = true; } else ctx.lineTo(X, Y);
      }
      ctx.stroke(); ctx.restore(); return P;
    };
    P.pts = function (xs, ys, s) {
      s = s || {}; ctx.save(); ctx.fillStyle = s.color || NB.cssvar('--accent-2');
      ctx.globalAlpha = s.alpha == null ? .85 : s.alpha;
      var r = s.r || 2.6;
      for (var i = 0; i < xs.length; i++) {
        if (ys[i] < P.ylim[0] || ys[i] > P.ylim[1]) continue;
        ctx.beginPath(); ctx.arc(tx(xs[i]), ty(ys[i]), r, 0, 7); ctx.fill();
      }
      ctx.restore(); return P;
    };
    P.band = function (xs, lo, hi, s) {
      s = s || {}; ctx.save(); ctx.fillStyle = s.color || NB.cssvar('--accent'); ctx.globalAlpha = s.alpha == null ? .16 : s.alpha;
      ctx.beginPath(); ctx.moveTo(tx(xs[0]), ty(lo[0]));
      for (var i = 1; i < xs.length; i++) ctx.lineTo(tx(xs[i]), ty(Math.max(P.ylim[0], Math.min(P.ylim[1], lo[i]))));
      for (var j = xs.length - 1; j >= 0; j--) ctx.lineTo(tx(xs[j]), ty(Math.max(P.ylim[0], Math.min(P.ylim[1], hi[j]))));
      ctx.closePath(); ctx.fill(); ctx.restore(); return P;
    };
    P.bars = function (edges, heights, s) {
      s = s || {}; ctx.save(); ctx.fillStyle = s.color || NB.cssvar('--accent-2'); ctx.globalAlpha = s.alpha == null ? .55 : s.alpha;
      for (var i = 0; i < heights.length; i++) {
        var x0 = tx(edges[i]), x1 = tx(edges[i + 1]), y = ty(Math.min(heights[i], P.ylim[1])), y0 = ty(P.ylim[0]);
        ctx.fillRect(x0, y, Math.max(1, x1 - x0 - 1), y0 - y);
      }
      ctx.restore(); return P;
    };
    P.hist = function (vals, nb, s) {
      s = s || {}; var lo = s.lo == null ? P.xlim[0] : s.lo, hi = s.hi == null ? P.xlim[1] : s.hi;
      var e = NB.lin(lo, hi, nb + 1), h = new Array(nb).fill(0);
      vals.forEach(function (v) { var k = Math.floor((v - lo) / (hi - lo) * nb); if (k >= 0 && k < nb) h[k]++; });
      var w = (hi - lo) / nb, n = vals.length;
      if (s.density !== false) h = h.map(function (c) { return c / (n * w); });
      P.bars(e, h, s); return P;
    };
    P.vline = function (x, s) { s = s || {}; ctx.save(); ctx.strokeStyle = s.color || NB.cssvar('--ink-3'); ctx.lineWidth = s.width || 1; if (s.dash !== null) ctx.setLineDash(s.dash || [4, 3]); ctx.beginPath(); ctx.moveTo(tx(x), P.pad.t); ctx.lineTo(tx(x), P.h - P.pad.b); ctx.stroke(); ctx.restore(); return P; };
    P.hline = function (y, s) { s = s || {}; ctx.save(); ctx.strokeStyle = s.color || NB.cssvar('--ink-3'); ctx.lineWidth = s.width || 1; if (s.dash !== null) ctx.setLineDash(s.dash || [4, 3]); ctx.beginPath(); ctx.moveTo(P.pad.l, ty(y)); ctx.lineTo(P.w - P.pad.r, ty(y)); ctx.stroke(); ctx.restore(); return P; };
    P.text = function (x, y, str, s) {
      s = s || {}; ctx.save(); ctx.fillStyle = s.color || NB.cssvar('--ink-2');
      ctx.font = (s.font || '11px ui-monospace,monospace'); ctx.textAlign = s.align || 'left';
      ctx.fillText(str, s.px ? x : tx(x), s.px ? y : ty(y)); ctx.restore(); return P;
    };
    P.legend = function (items, s) {
      s = s || {}; ctx.save(); ctx.font = '11px ui-monospace,monospace'; ctx.textAlign = 'left';
      var x = s.x || P.pad.l + 10, y = s.y || P.pad.t + 12;
      items.forEach(function (it, i) {
        ctx.fillStyle = it.color; ctx.fillRect(x, y + i * 15 - 6, 12, 3);
        ctx.fillStyle = NB.cssvar('--ink-2'); ctx.fillText(it.label, x + 18, y + i * 15);
      });
      ctx.restore(); return P;
    };
    P.ctx = ctx;
    return P;
  };

  NB.fmt = function (v) {
    if (v === 0) return '0';
    var a = Math.abs(v);
    if (a >= 1e4 || a < 1e-3) return v.toExponential(0).replace('e+', 'e');
    if (a >= 100) return v.toFixed(0);
    if (a >= 10) return v.toFixed(1);
    if (a >= 1) return v.toFixed(2);
    return v.toFixed(3);
  };

  // ---------- controls ----------
  // specs: [{k:'n', label:'n', min:1, max:100, step:1, val:10, fmt:fn}] or {k, opts:['a','b']}
  NB.ui = function (host, specs, onChange) {
    var wrap = document.createElement('div'); wrap.className = 'ctrls';
    var state = {};
    specs.forEach(function (s) {
      state[s.k] = s.val != null ? s.val : (s.opts ? s.opts[0] : 0);
      var d = document.createElement('div'); d.className = 'ctrl';
      var lab = document.createElement('label');
      var b = document.createElement('b');
      lab.textContent = s.label || s.k; lab.appendChild(b);
      d.appendChild(lab);
      var inp;
      if (s.opts) {
        inp = document.createElement('select');
        s.opts.forEach(function (o) { var op = document.createElement('option'); op.value = o; op.textContent = o; inp.appendChild(op); });
        inp.value = state[s.k]; b.textContent = '';
        inp.addEventListener('change', function () { state[s.k] = inp.value; onChange(state); });
      } else {
        inp = document.createElement('input'); inp.type = 'range';
        inp.min = s.min; inp.max = s.max; inp.step = s.step || 1; inp.value = state[s.k];
        b.textContent = (s.fmt ? s.fmt(state[s.k]) : state[s.k]);
        inp.addEventListener('input', function () {
          state[s.k] = parseFloat(inp.value);
          b.textContent = (s.fmt ? s.fmt(state[s.k]) : state[s.k]);
          onChange(state);
        });
      }
      d.appendChild(inp); wrap.appendChild(d);
    });
    host.appendChild(wrap);
    return state;
  };

  // one-call demo helper: NB.demo('id', specs, drawFn(plotCtxHolder, state, readoutEl))
  NB.demo = function (id, plotOpts, specs, draw) {
    var host = document.getElementById(id);
    if (!host) return;
    var cv = host.querySelector('canvas'), ro = host.querySelector('.readout');
    var P = NB.Plot(cv, plotOpts);
    var state = specs.length ? NB.ui(host, specs, function (s) { run(s); }) : {};
    if (ro) host.appendChild(ro);
    function run(s) { try { draw(P, s, ro); } catch (e) { if (ro) ro.textContent = 'demo error: ' + e.message; } }
    cv._redraw = function () { run(state); };
    run(state);
    window.addEventListener('resize', function () { run(state); });
  };

  // ---------- linear algebra minis ----------
  NB.matvec = function (A, x) { return A.map(function (r) { var s = 0; for (var i = 0; i < x.length; i++) s += r[i] * x[i]; return s; }); };
  NB.solveSym = function (A, b) { // Gaussian elimination with partial pivot
    var n = b.length, M = A.map(function (r, i) { return r.slice().concat([b[i]]); });
    for (var k = 0; k < n; k++) {
      var p = k; for (var i = k + 1; i < n; i++) if (Math.abs(M[i][k]) > Math.abs(M[p][k])) p = i;
      var t = M[k]; M[k] = M[p]; M[p] = t;
      if (Math.abs(M[k][k]) < 1e-12) M[k][k] = 1e-12;
      for (var i2 = k + 1; i2 < n; i2++) { var f = M[i2][k] / M[k][k]; for (var j = k; j <= n; j++) M[i2][j] -= f * M[k][j]; }
    }
    var x = new Array(n).fill(0);
    for (var i3 = n - 1; i3 >= 0; i3--) { var s = M[i3][n]; for (var j2 = i3 + 1; j2 < n; j2++) s -= M[i3][j2] * x[j2]; x[i3] = s / M[i3][i3]; }
    return x;
  };
  NB.erf = function (x) {
    var s = x < 0 ? -1 : 1; x = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * x);
    var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return s * y;
  };
  NB.Phi = function (x) { return .5 * (1 + NB.erf(x / Math.SQRT2)); };
  NB.phi = function (x) { return Math.exp(-.5 * x * x) / Math.sqrt(2 * Math.PI); };

  window.NB = NB;
})();
