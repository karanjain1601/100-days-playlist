/* 100 Days of AI Engineering — shared script (generated). Load in <head> before MathJax.
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
  const root = document.documentElement, KEY = 'aieng-theme';
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
    ["Orientation and the LLM API", 1, 6, 1, 4],
    ["How LLMs Work, for Engineers", 7, 16, 5, 11],
    ["Prompt and Context Engineering", 17, 27, 12, 19],
    ["Embeddings and Search", 28, 37, 20, 26],
    ["Retrieval-Augmented Generation", 38, 49, 27, 35],
    ["Advanced RAG and RAG Evaluation", 50, 60, 36, 43],
    ["Tool Use and the Model Context Protocol", 61, 69, 44, 49],
    ["Agents", 70, 85, 50, 61],
    ["Evaluation and Testing", 86, 95, 62, 69],
    ["Security, Safety and Guardrails", 96, 103, 70, 75],
    ["Production LLMOps", 104, 114, 76, 84],
    ["Open Models, Fine-Tuning and Serving", 115, 124, 85, 92],
    ["Frontier Patterns and Capstone", 125, 133, 93, 100]
  ];
  // [lesson, day, title, video minutes, practice minutes (0 = none)]
  const LESSONS = [
    [1, 1, "What AI Engineering Is (and Isn't)", 35, 30],
    [2, 1, "Your Workbench: Python, uv, API Keys and Cost Tracking", 40, 45],
    [3, 2, "The First API Call: Messages, Roles, Parameters and Streaming", 45, 50],
    [4, 3, "Tokens, Context Windows, Pricing and Latency", 45, 45],
    [5, 3, "Choosing a Model: Frontier, Small and Open-Weights", 40, 40],
    [6, 4, "Course Project Kickoff: DocPilot", 35, 60],
    [7, 5, "Transformers in One Sitting: From Tokens to Logits", 55, 40],
    [8, 6, "Inference Mechanics: Prefill, Decode and the KV Cache", 50, 40],
    [9, 6, "Sampling: Temperature, Top-p, Top-k and Logprobs", 40, 45],
    [10, 7, "How Models Are Trained: Pretraining, Instruction Tuning, RLHF and DPO", 50, 30],
    [11, 8, "Reasoning Models and Test-Time Compute", 50, 45],
    [12, 8, "Hallucination, Calibration and Knowing What the Model Knows", 45, 40],
    [13, 9, "Long Context: What Fits, What Gets Lost and Context Rot", 45, 45],
    [14, 10, "Multimodal Inputs: Images, PDFs and Audio", 45, 50],
    [15, 10, "Scaling, Capability Trends and Planning for Next Year's Models", 35, 25],
    [16, 11, "Milestone: An LLM Behaviour Lab", 30, 90],
    [17, 12, "Anatomy of a Prompt: Role, Task, Context, Examples and Format", 45, 45],
    [18, 12, "Few-Shot Prompting and Example Selection", 40, 40],
    [19, 13, "Chain of Thought, Self-Consistency and Structured Thinking", 45, 45],
    [20, 14, "Structured Outputs: JSON, Schemas, Pydantic and Constrained Decoding", 55, 60],
    [21, 15, "Prompt Templates, Versioning and Prompt Management", 40, 40],
    [22, 15, "System Prompts, Personas and the Instruction Hierarchy", 40, 35],
    [23, 16, "Context Engineering: Deciding What Goes in the Window", 55, 45],
    [24, 17, "Prompt Caching: Mechanics, Breakpoints and Savings", 45, 45],
    [25, 17, "Workflows I: Prompt Chaining, Routing and Parallelisation", 50, 50],
    [26, 18, "Automatic Prompt Optimisation and Meta-Prompting", 45, 45],
    [27, 19, "Project: A Structured Ticket-Triage Pipeline", 30, 120],
    [28, 20, "Embeddings: Meaning as Geometry", 50, 45],
    [29, 21, "Embedding Models in Practice: Choosing, Batching and Matryoshka", 45, 50],
    [30, 21, "Lexical Search: Inverted Indexes and BM25", 45, 45],
    [31, 22, "Nearest-Neighbour Search: Exact, IVF, HNSW and Quantisation", 55, 45],
    [32, 23, "Vector Databases: Choosing and Using One", 50, 60],
    [33, 23, "Metadata Filtering, Namespaces and Multi-Tenancy", 40, 40],
    [34, 24, "Hybrid Search and Rank Fusion", 45, 45],
    [35, 25, "Rerankers: Cross-Encoders and Late Interaction", 45, 45],
    [36, 25, "Fine-Tuning Embeddings for Your Domain", 45, 60],
    [37, 26, "Milestone: A Search Service Over the DocPilot Corpus", 30, 100],
    [38, 27, "Why RAG: Grounding, Freshness and Private Knowledge", 40, 30],
    [39, 27, "Naive RAG From Scratch in 100 Lines", 50, 60],
    [40, 28, "Ingestion I: Parsing HTML, PDFs, Office Files and Tables", 50, 60],
    [41, 29, "Ingestion II: Chunking Strategies and Their Trade-offs", 55, 60],
    [42, 30, "Contextual Retrieval and Chunk Enrichment", 45, 50],
    [43, 30, "Query Transformation: Rewriting, Multi-Query, HyDE and Decomposition", 50, 50],
    [44, 31, "Retrieval Tuning: k, Thresholds, MMR and Diversity", 40, 45],
    [45, 32, "Prompting the Generator: Grounded Answers, Refusals and Citations", 50, 50],
    [46, 32, "Conversational RAG: Follow-Ups, History and Query Condensation", 40, 45],
    [47, 33, "Access Control, Permissions and PII in RAG", 45, 40],
    [48, 34, "Keeping the Index Fresh: Updates, Deletes and Re-Embedding", 45, 45],
    [49, 35, "Project: DocPilot Answers Questions With Citations", 30, 150],
    [50, 36, "Evaluating Retrieval: Recall@k, MRR, nDCG and Golden Sets", 50, 60],
    [51, 37, "Evaluating Generation: Faithfulness, Relevance and Correctness", 50, 60],
    [52, 37, "Diagnosing RAG Failures: A Systematic Playbook", 45, 45],
    [53, 38, "Small-to-Big Retrieval: Parent-Document, Sentence-Window and Multi-Vector", 45, 50],
    [54, 39, "GraphRAG and Knowledge Graphs", 55, 60],
    [55, 40, "Agentic RAG: Retrieval as a Tool", 50, 50],
    [56, 40, "Long Context vs RAG: Stuffing, Caching and Hybrids", 40, 45],
    [57, 41, "Structured Data: Text-to-SQL and Table Question Answering", 55, 60],
    [58, 42, "Multimodal RAG: Images, Charts and Page-Level Retrieval", 45, 50],
    [59, 42, "RAG at Scale: Latency Budgets, Caching and Cost", 40, 40],
    [60, 43, "Milestone: A RAG Evaluation Harness and a Measured Improvement", 30, 120],
    [61, 44, "Tool Use From First Principles: Schemas, Calls and Results", 50, 50],
    [62, 44, "The Tool Loop: Multi-Step Calls, Parallel Calls and Tool Choice", 45, 50],
    [63, 45, "Designing Tools Models Use Well", 45, 45],
    [64, 46, "Code Execution and Sandboxes", 45, 50],
    [65, 46, "Web Search, Fetch and Browsing Tools", 40, 40],
    [66, 47, "The Model Context Protocol: Architecture, Primitives and Transports", 50, 40],
    [67, 48, "Building an MCP Server (and Client) in Python", 50, 75],
    [68, 48, "Computer Use and Browser Agents", 45, 40],
    [69, 49, "Project: DocPilot Gets Tools", 30, 120],
    [70, 50, "What an Agent Is: Workflows vs Agents", 45, 30],
    [71, 50, "The Agent Loop From Scratch, Without a Framework", 55, 60],
    [72, 51, "ReAct, Plan-and-Execute and Reflection", 50, 45],
    [73, 52, "Workflows II: Orchestrator–Workers and Evaluator–Optimiser", 45, 50],
    [74, 52, "Agent State, Checkpoints and Durable Execution", 45, 45],
    [75, 53, "Memory I: Working Memory, Summaries and Compaction", 45, 45],
    [76, 54, "Memory II: Long-Term Memory", 50, 50],
    [77, 55, "Planning and Long-Horizon Tasks", 45, 45],
    [78, 55, "Human-in-the-Loop: Approvals, Interrupts and Escalation", 40, 40],
    [79, 56, "Multi-Agent Systems: When They Help and When They Hurt", 50, 45],
    [80, 57, "Agent Interoperability: Handoffs and Agent-to-Agent Protocols", 40, 35],
    [81, 57, "Agent Frameworks Compared", 55, 50],
    [82, 58, "Building With a Framework: The Same Agent, Rebuilt", 45, 75],
    [83, 59, "Coding Agents: How They Work and How to Work With Them", 50, 60],
    [84, 60, "Agent Reliability: Loops, Budgets, Timeouts and Graceful Failure", 45, 45],
    [85, 61, "Project: The DocPilot Research Agent", 30, 150],
    [86, 62, "Eval-Driven Development: Why Vibe Checks Don't Scale", 40, 30],
    [87, 62, "Building Eval Datasets: Golden Sets, Edge Cases and Synthetic Data", 50, 60],
    [88, 63, "Code-Based Evals: Assertions and Programmatic Checks", 45, 50],
    [89, 64, "LLM-as-Judge: Rubrics, Pairwise Comparison and Judge Bias", 55, 50],
    [90, 65, "Calibrating Judges Against Humans", 45, 50],
    [91, 65, "Evaluating Agents: Trajectories, Tool Calls and Task Success", 50, 50],
    [92, 66, "Benchmarks: What They Measure, Contamination and Saturation", 40, 30],
    [93, 67, "Regression Testing and CI for Prompts and Models", 45, 60],
    [94, 68, "Online Evaluation: A/B Tests, Feedback and Implicit Signals", 45, 40],
    [95, 69, "Milestone: A Full Eval Suite for DocPilot", 30, 120],
    [96, 70, "Threat Modelling LLM Applications", 45, 40],
    [97, 70, "Prompt Injection: Direct, Indirect and Why It Is Hard", 50, 45],
    [98, 71, "Defending Against Injection: Isolation, Privilege and the Lethal Trifecta", 50, 50],
    [99, 72, "Jailbreaks and Red Teaming Your Own App", 45, 50],
    [100, 72, "Guardrails: Input and Output Filters, Classifiers and Moderation", 45, 50],
    [101, 73, "Data Leakage, PII and Privacy Engineering", 45, 45],
    [102, 74, "Agent and MCP Security: Sandboxes, Scopes and Supply Chain", 45, 45],
    [103, 75, "Governance: Regulation, Documentation and Responsible Deployment", 40, 30],
    [104, 76, "Architecture of an LLM Application in Production", 50, 40],
    [105, 76, "Streaming to Users: SSE, WebSockets and Partial Results", 45, 50],
    [106, 77, "Observability: Traces, Spans and GenAI Semantic Conventions", 50, 50],
    [107, 78, "Reliability: Rate Limits, Retries, Timeouts and Fallbacks", 45, 50],
    [108, 78, "LLM Gateways and Multi-Provider Routing", 40, 40],
    [109, 79, "Cost Engineering: Budgets, Routing and Batch Processing", 50, 50],
    [110, 80, "Latency Engineering: Time to First Token, Parallelism and Speculation", 45, 45],
    [111, 81, "Caching Beyond Prompts: Exact, Semantic and Tool-Result Caches", 40, 45],
    [112, 82, "Deploying: Containers, Serverless, Queues and Background Agents", 50, 60],
    [113, 83, "Product Patterns: UX for Uncertainty, Feedback and Trust", 45, 35],
    [114, 84, "Project: Shipping DocPilot", 30, 150],
    [115, 85, "The Open-Weights Landscape and Licences", 40, 30],
    [116, 85, "Running Models Locally: llama.cpp, Ollama and GGUF", 45, 60],
    [117, 86, "Quantisation: Memory Maths, INT8, INT4, AWQ and GPTQ", 50, 45],
    [118, 87, "Serving at Scale: vLLM, PagedAttention and Continuous Batching", 55, 60],
    [119, 88, "Prompt, RAG or Fine-Tune? A Decision Framework", 40, 30],
    [120, 88, "Fine-Tuning With LoRA and QLoRA", 55, 75],
    [121, 89, "Data for Fine-Tuning: Curation, Synthetic Data and Distillation", 50, 60],
    [122, 90, "Preference Tuning: DPO and Its Relatives", 50, 60],
    [123, 91, "Reinforcement Fine-Tuning With Verifiable Rewards", 50, 50],
    [124, 92, "Milestone: Distil DocPilot's Triage Into a Small Open Model", 30, 150],
    [125, 93, "Voice Agents: Speech-to-Text, Text-to-Speech and Realtime Models", 50, 50],
    [126, 94, "Context Engineering for Long-Running Agents", 50, 50],
    [127, 95, "Agent Skills: Packaging Reusable Capabilities", 40, 45],
    [128, 95, "Generative UI and Agent-Driven Interfaces", 40, 40],
    [129, 96, "Where the Field Is Heading: Open Problems in AI Engineering", 40, 20],
    [130, 97, "Capstone I: Scope, Architecture and Eval Plan", 30, 150],
    [131, 98, "Capstone II: Build", 30, 240],
    [132, 99, "Capstone III: Evaluate, Red-Team and Harden", 30, 180],
    [133, 100, "Capstone IV: Ship, Write Up and Demo", 30, 120]
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
