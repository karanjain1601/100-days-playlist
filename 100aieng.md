# 100 Days of AI Engineering
### RAG, agents, evals and LLM systems in production — 133 lessons across 100 days

---

## 0. How this series is built

**133 lessons / 100 days.** 67 days carry one lesson and 33 days carry two. Every lesson is tagged with its day, so you can follow it one day at a time or batch the two-lesson days.

**What this course is.** AI engineering means building products on top of foundation models: getting reliable behaviour out of them, grounding them in your data, giving them tools, measuring them, securing them and running them in production. It is not model research. You will train small models in Phase 11, but most of the course is about the systems around the model.

**Assumptions baked in** (change them if they don't match your situation):
- Language: Python 3.12+, managed with `uv`. FastAPI for services, Postgres + pgvector and Qdrant for retrieval, Docker for packaging, GitHub Actions for CI.
- Reference model provider: the Anthropic API (`claude-sonnet-5-5` as the default, `claude-haiku-5-5` for cheap, high-volume steps, `claude-opus-5-5` for the hardest tasks). Open-weights models run through OpenAI-compatible servers (Ollama, vLLM). Every pattern taught carries over to other providers.
- Runtime: 35–55 min of teaching per lesson plus 30–90 min of hands-on practice; project days are mostly practice. Total series ≈ **98 h of video and ≈ 126 h of practice** (the sums of the per-lesson targets).
- Cost discipline: every model call is logged with tokens, latency and cost from Day 1, and bulk work uses the small model, caching and batch processing. Prices change often, so the course teaches you to compute costs from the current price page rather than quoting numbers.

**The running project: DocPilot.** A support assistant over the Kubernetes documentation (CC BY 4.0) plus a synthetic ticket queue you generate in Phase 2. It starts as a single API call and ends as a deployed, evaluated, guarded agent with retrieval, tools, memory and a fine-tuned small model for triage. Most phases end with a project or milestone day that adds to it.

### Legend for each lesson entry

```
L{lesson} · Day {day} · {Title} · 🎥 {teaching minutes} · 💻 {practice minutes}
COVERS   the concepts to teach, in order
BUILD    what you build or measure in the practice block
SHIP     the measurable outcome at the end of the lesson
```

### Phase map

| Phase | Lessons | Days | Theme |
|---|---|---|---|
| 0 | L1–L6 | 1–4 | Orientation, workbench, the LLM API, tokens and cost, model choice, project kickoff |
| 1 | L7–L16 | 5–11 | How LLMs work for engineers: attention, inference, sampling, training, reasoning, hallucination, long context, multimodal |
| 2 | L17–L27 | 12–19 | Prompt and context engineering, structured outputs, caching, workflows, prompt optimisation |
| 3 | L28–L37 | 20–26 | Embeddings, BM25, ANN indexes, vector databases, hybrid search, reranking, embedding fine-tuning |
| 4 | L38–L49 | 27–35 | Retrieval-augmented generation: ingestion, chunking, query transformation, citations, permissions, freshness |
| 5 | L50–L60 | 36–43 | Advanced RAG and RAG evaluation: metrics, failure analysis, GraphRAG, agentic RAG, text-to-SQL, multimodal RAG |
| 6 | L61–L69 | 44–49 | Tool use, tool design, code execution, web tools, the Model Context Protocol, computer use |
| 7 | L70–L85 | 50–61 | Agents: the loop, patterns, state, memory, planning, human-in-the-loop, multi-agent, frameworks, coding agents, reliability |
| 8 | L86–L95 | 62–69 | Evaluation: datasets, code checks, LLM-as-judge, judge calibration, agent evals, benchmarks, CI, online evals |
| 9 | L96–L103 | 70–75 | Security and safety: threat models, prompt injection, red teaming, guardrails, privacy, agent security, governance |
| 10 | L104–L114 | 76–84 | Production LLMOps: architecture, streaming, observability, reliability, gateways, cost, latency, caching, deployment, UX |
| 11 | L115–L124 | 85–92 | Open models, local inference, quantisation, serving, LoRA/QLoRA, distillation, DPO, RL fine-tuning |
| 12 | L125–L133 | 93–100 | Voice agents, long-running agents, skills, generative UI, open problems, capstone |

---

## PHASE 0 — Orientation and the LLM API
**Days 1–4 · L1–L6**

You set up a workbench that logs every model call, learn the shape of the API and its costs, pick models on evidence, and start the project you will build for 100 days.

---

**L1 · Day 1 · What AI Engineering Is (and Isn't) · 🎥 35 m · 💻 30 m**

- **COVERS:** AI engineering vs ML engineering vs data science (building on foundation models instead of training them); the three layers of the stack — application, model, infrastructure; what changes when outputs are open-ended and non-deterministic; the core loop of the course — build, evaluate, improve; the 13-phase map and the running project.
- **BUILD:** a one-page "AI feature canvas" for a product idea: user, task, inputs, outputs, cost of a wrong answer, and how you would know it works.
- **SHIP:** you can explain where AI engineering sits and why evaluation is at its centre.

---

**L2 · Day 1 · Your Workbench: Python, uv, API Keys and Cost Tracking · 🎥 40 m · 💻 45 m**

- **COVERS:** Python 3.12 with `uv` (projects, lockfiles, `uv run`); environment variables and `.env` files, never committing keys, secret scanning; notebooks for exploration vs modules for anything you keep; the SDKs you will use (`anthropic`, `openai` for OpenAI-compatible servers, `httpx`); logging every call's model, tokens, latency and cost from the first day; a tiny cost ledger.
- **BUILD:** a `docpilot/` repo skeleton with `uv`, a `.env.example`, and an `llm.py` wrapper that appends model, input/output tokens, latency and estimated cost for each call to a JSONL file.
- **SHIP:** every model call you make for the rest of the course is logged.

---

**L3 · Day 2 · The First API Call: Messages, Roles, Parameters and Streaming · 🎥 45 m · 💻 50 m**

- **COVERS:** the Messages API request — `model`, `max_tokens`, `system`, `messages` with alternating `user` and `assistant` turns, content blocks; the response — `content`, `stop_reason`, `usage`; stop reasons (`end_turn`, `max_tokens`, `stop_sequence`, `tool_use`); `temperature` and `stop_sequences`; `max_tokens` as a hard cap; statelessness — a conversation is history you resend; streaming with server-sent events and the SDK's stream helpers; error classes (400, 401, 429, 5xx and overloaded errors) and which ones to retry.
- **BUILD:** a command-line chat client with streaming output, conversation history and a running token count.
- **SHIP:** you can read any API response and say why it stopped and what it cost.

---

**L4 · Day 3 · Tokens, Context Windows, Pricing and Latency · 🎥 45 m · 💻 45 m**

- **COVERS:** tokenisation (byte-pair encoding, why tokens are not words, why languages and code tokenise differently); counting tokens before sending (token-counting endpoints, tokenizers for open models); the context window covers input plus output; pricing structure — input vs output tokens, cached-input discounts, batch discounts; latency anatomy — time to first token (TTFT) and output tokens per second, and why output length dominates total latency; estimating a feature's monthly cost.
- **BUILD:** a cost and latency calculator: from prompt size, expected output length and traffic, estimate monthly cost and typical latency for three model tiers; check the estimate against your logged calls.
- **SHIP:** you can predict a feature's bill and response time before building it.

---

**L5 · Day 3 · Choosing a Model: Frontier, Small and Open-Weights · 🎥 40 m · 💻 40 m**

- **COVERS:** model tiers (frontier, mid, small and fast) and the capability, cost and latency trade-off; closed APIs vs open weights (control, privacy, cost at scale, operational burden); reading model cards and system cards; public benchmarks and leaderboards and why they don't answer "is it good for my task"; the rule "the cheapest model that passes your evals"; pinning model versions and planning for deprecations.
- **BUILD:** run the same 20 task prompts through a small and a large model, grade them by hand, and record cost and latency for each.
- **SHIP:** a written model-selection rationale for DocPilot.

---

**L6 · Day 4 · Course Project Kickoff: DocPilot · 🎥 35 m · 💻 60 m**

- **COVERS:** the project — a support assistant over the Kubernetes documentation and a synthetic ticket queue; what it will do by Day 100 (answer with citations, triage tickets, use tools, act as an agent, run under evals and guardrails, be deployed and observed); defining success metrics before building; the course repo layout; a first baseline — the model answering with no retrieval.
- **BUILD:** download and snapshot the docs corpus; write 30 real questions with reference answers (your first eval set); record the no-retrieval baseline score.
- **SHIP:** a repo with a corpus snapshot, a 30-question seed eval set and a baseline score.

---

## PHASE 1 — How LLMs Work, for Engineers
**Days 5–11 · L7–L16**

Enough of the internals to make good engineering decisions: why long prompts are slow, why output costs more, why temperature 0 still varies, what reasoning models are doing, and where hallucinations come from.

---

**L7 · Day 5 · Transformers in One Sitting: From Tokens to Logits · 🎥 55 m · 💻 40 m**

- **COVERS:** token embeddings and positional information (rotary position embeddings at a high level); self-attention as a soft lookup with queries, keys and values, softmax(QKᵀ/√d)V; multi-head attention; MLP blocks, the residual stream and normalisation; causal masking in decoder-only models; the output head and logits; parameters vs activations; what "a 70B model" means for memory.
- **BUILD:** a 60-line NumPy single-head causal attention over toy vectors, with the attention matrix plotted.
- **SHIP:** you can draw the forward pass and say where the compute and the memory go.

---

**L8 · Day 6 · Inference Mechanics: Prefill, Decode and the KV Cache · 🎥 50 m · 💻 40 m**

- **COVERS:** autoregressive generation, one token at a time; prefill (parallel, compute-bound) vs decode (sequential, memory-bandwidth-bound); the KV cache and its size formula (2 × layers × KV heads × head dimension × tokens × bytes per value); grouped-query attention and why it shrinks the cache; why long prompts raise TTFT and long outputs raise total latency; server-side batching; what this means for prompt design.
- **BUILD:** compute the KV-cache size of two or three published open-model configurations at 8k and 128k tokens; plot TTFT against prompt length from your own logged calls.
- **SHIP:** you can explain why output tokens are priced higher than input tokens.

---

**L9 · Day 6 · Sampling: Temperature, Top-p, Top-k and Logprobs · 🎥 40 m · 💻 45 m**

- **COVERS:** from logits to a probability distribution (softmax with temperature); greedy decoding, temperature, top-k, nucleus (top-p) and min-p sampling; why temperature 0 is still not perfectly deterministic in practice (batching, floating point, routing in mixture-of-experts models); logprobs as a confidence signal and where providers expose them; repetition and frequency penalties; choosing settings per task (extraction vs brainstorming).
- **BUILD:** implement temperature, top-k and top-p sampling over a toy logit vector in NumPy; measure output diversity on a real model at three temperatures.
- **SHIP:** a per-task sampling-settings table for DocPilot.

---

**L10 · Day 7 · How Models Are Trained: Pretraining, Instruction Tuning, RLHF and DPO · 🎥 50 m · 💻 30 m**

- **COVERS:** pretraining on next-token prediction and what it yields (knowledge, in-context learning, but no instruction following); supervised fine-tuning on demonstrations; reward models and RLHF (PPO at a high level); RLAIF and Constitutional AI; DPO as preference optimisation without an explicit reward model; reinforcement learning with verifiable rewards for reasoning; what each stage implies for behaviour you will see (sycophancy, refusals, verbosity, knowledge cut-offs).
- **BUILD:** compare a base and an instruct version of the same small open model on ten prompts and note the differences.
- **SHIP:** you can attribute a model behaviour to the training stage that most likely caused it.

---

**L11 · Day 8 · Reasoning Models and Test-Time Compute · 🎥 50 m · 💻 45 m**

- **COVERS:** chain of thought as extra computation; reasoning models trained with reinforcement learning to think before answering; thinking budgets and effort controls and how providers expose them (thinking blocks, summarised vs raw reasoning); latency and cost implications; where reasoning helps (maths, code, multi-step planning) and where it doesn't (lookups, style); interleaving thinking with tool use; reasoning text is not a guaranteed explanation of how the answer was produced.
- **BUILD:** run a set of multi-step problems with thinking off and at two budgets; chart accuracy against tokens and latency.
- **SHIP:** a rule of thumb for when DocPilot should spend thinking tokens.

---

**L12 · Day 8 · Hallucination, Calibration and Knowing What the Model Knows · 🎥 45 m · 💻 40 m**

- **COVERS:** kinds of hallucination (fabricated facts, fabricated citations, claims not supported by the given context); why it happens (the next-token objective, training and grading incentives that reward guessing over abstaining); knowledge cut-offs; calibration and verbalised confidence; mitigations — grounding with retrieval, permission to say "I don't know", quoting before answering, verification passes, constrained outputs; measuring hallucination on your own data.
- **BUILD:** a 40-question probe set mixing answerable, unanswerable and false-premise questions; measure how often the model abstains correctly with and without an explicit abstention instruction.
- **SHIP:** a measured hallucination baseline for DocPilot.

---

**L13 · Day 9 · Long Context: What Fits, What Gets Lost and Context Rot · 🎥 45 m · 💻 45 m**

- **COVERS:** context window sizes and what "supports a million tokens" means in practice; needle-in-a-haystack tests and their limits; the lost-in-the-middle effect; context rot — quality falling as irrelevant context grows; position effects (documents first, question and instructions last); the cost and latency of long prompts; when long context can replace retrieval and when it can't.
- **BUILD:** a small needle test over DocPilot documents at three context sizes and three needle positions; plot accuracy.
- **SHIP:** a measured length and position sensitivity profile for your chosen model.

---

**L14 · Day 10 · Multimodal Inputs: Images, PDFs and Audio · 🎥 45 m · 💻 50 m**

- **COVERS:** images as content blocks (base64 or URL), resolution and token cost; vision tasks that work well (screenshots, charts, document pages) and known weaknesses (precise counting, tiny text, fine spatial reasoning); PDFs as input — extracted text plus page images; audio through speech-to-text vs natively audio-capable models; prompts that combine images with instructions.
- **BUILD:** extract structured fields from ten documentation screenshots or diagrams and measure field-level accuracy.
- **SHIP:** you know the token cost and the accuracy of vision on your documents.

---

**L15 · Day 10 · Scaling, Capability Trends and Planning for Next Year's Models · 🎥 35 m · 💻 25 m**

- **COVERS:** scaling laws (loss against compute, data and parameters) in one picture; compute-optimal training (Chinchilla) and over-training small models for cheap inference; the falling price of a given capability level; distillation into small models; what to build so the product improves when models do (evals, a swappable model layer) and what to avoid (brittle prompt hacks, heavy engineering around today's weaknesses).
- **BUILD:** a one-page model-upgrade plan for DocPilot: what you would re-run and re-tune when a new model ships.
- **SHIP:** an architecture decision that keeps the model swappable.

---

**L16 · Day 11 · Milestone: An LLM Behaviour Lab · 🎥 30 m · 💻 90 m**

- **COVERS:** turning Phase 1's experiments into a reusable suite — sampling sweeps, long-context probes, abstention probes, reasoning budgets; reporting small-sample results with confidence intervals.
- **BUILD:** a `lab/` package that runs every Phase 1 probe against any model ID and writes a Markdown report.
- **SHIP:** one command that profiles a new model before you adopt it.

---

## PHASE 2 — Prompt and Context Engineering
**Days 12–19 · L17–L27**

Prompts become engineered artefacts: structured, versioned, tested, cached and composed into workflows. Context engineering — deciding everything that goes into the window — is the skill the rest of the course builds on.

---

**L17 · Day 12 · Anatomy of a Prompt: Role, Task, Context, Examples and Format · 🎥 45 m · 💻 45 m**

- **COVERS:** the parts of a prompt — role, task, context, examples, output format, constraints; clarity over cleverness; stating audience and success criteria; delimiting inputs with XML tags or headings; ordering (long documents first, the question last); positive instructions instead of lists of prohibitions; iterating against test cases rather than by feel.
- **BUILD:** rewrite three vague DocPilot prompts as structured prompts and compare outputs on ten inputs each.
- **SHIP:** a prompt style guide for the project.

---

**L18 · Day 12 · Few-Shot Prompting and Example Selection · 🎥 40 m · 💻 40 m**

- **COVERS:** in-context learning; zero-, one- and few-shot prompting; example quality, diversity and format consistency; order and recency effects; label balance; dynamic few-shot — retrieving the most similar labelled examples for each input; when examples over-constrain style; the token cost of examples.
- **BUILD:** a dynamic few-shot selector (embedding similarity over a labelled pool) for ticket classification, compared with fixed examples.
- **SHIP:** a measured accuracy difference between fixed and dynamic examples.

---

**L19 · Day 13 · Chain of Thought, Self-Consistency and Structured Thinking · 🎥 45 m · 💻 45 m**

- **COVERS:** step-by-step prompting and why it helps on multi-step tasks; separating the thinking from the final answer (tags, or native thinking); self-consistency (sample several answers and vote); least-to-most and decomposition prompts; when chain of thought hurts (simple lookups, tight latency budgets); chain of thought on reasoning models vs standard models.
- **BUILD:** compare a direct answer, chain of thought, and self-consistency with five samples on 30 multi-step questions; record accuracy, tokens and latency.
- **SHIP:** a cost-aware recommendation for when to use each technique.

---

**L20 · Day 14 · Structured Outputs: JSON, Schemas, Pydantic and Constrained Decoding · 🎥 55 m · 💻 60 m**

- **COVERS:** why free text breaks pipelines; JSON through instructions vs tool (function) schemas vs native structured-output modes; constrained decoding (grammar- or schema-guided generation) — it guarantees syntax, not correct values; Pydantic models as the single source of truth; validation and retry-with-error-feedback loops; enums, optional fields and explicit "unknown" values; streaming partial JSON.
- **BUILD:** an extractor that turns support emails into a validated Pydantic `Ticket` (product area, severity, summary, entities) with a repair loop; measure the parse-failure rate before and after the loop.
- **SHIP:** zero unhandled parse failures on 100 test emails.

---

**L21 · Day 15 · Prompt Templates, Versioning and Prompt Management · 🎥 40 m · 💻 40 m**

- **COVERS:** prompts as code; templates (f-strings, Jinja2), variables and safe insertion of user content; storing prompts in files with version identifiers; linking each logged call to a prompt version; prompt registries and when they are worth it; reviewing prompt changes like code changes; avoiding prompt sprawl.
- **BUILD:** move every DocPilot prompt into a versioned `prompts/` directory with a loader that stamps a version hash into each log record.
- **SHIP:** every output can be traced to the exact prompt that produced it.

---

**L22 · Day 15 · System Prompts, Personas and the Instruction Hierarchy · 🎥 40 m · 💻 35 m**

- **COVERS:** what belongs in the system prompt and what belongs in the user turn; personas and tone; the instruction hierarchy (system above user above document and tool content) and how models are trained to follow it; conflicting instructions; writing rules together with their reasons; keeping a growing system prompt maintainable.
- **BUILD:** write DocPilot's system prompt and test it against 15 conflicting or adversarial user requests.
- **SHIP:** a system prompt with its own test suite.

---

**L23 · Day 16 · Context Engineering: Deciding What Goes in the Window · 🎥 55 m · 💻 45 m**

- **COVERS:** context engineering as the successor to prompt engineering — curating everything the model sees: instructions, retrieved knowledge, tool definitions, history and memory; the context budget; relevance over volume (context rot again); ordering and structure; compressing history (summaries, truncation, selective recall); just-in-time retrieval vs loading everything up front; measuring the effect of context changes.
- **BUILD:** a context assembler for DocPilot with a token budget, priority tiers, and a log of what was included or dropped.
- **SHIP:** every call has a recorded context manifest.

---

**L24 · Day 17 · Prompt Caching: Mechanics, Breakpoints and Savings · 🎥 45 m · 💻 45 m**

- **COVERS:** prefix caching — what is cached (the processed prefix) and why the prefix must match exactly; explicit cache breakpoints (`cache_control`) vs automatic caching on other providers; cache lifetimes; structuring prompts for hits (static content first, dynamic content last); reading the cache fields in `usage`; cost and TTFT savings; cache-busting mistakes (timestamps in system prompts, reordered tool lists).
- **BUILD:** cache DocPilot's system prompt and tool definitions; measure hit rate, cost and TTFT before and after over 50 calls.
- **SHIP:** a measured caching saving from your own logs.

---

**L25 · Day 17 · Workflows I: Prompt Chaining, Routing and Parallelisation · 🎥 50 m · 💻 50 m**

- **COVERS:** splitting a task into fixed steps (chaining) with checks between them; routing inputs to specialised prompts or models; parallelisation — sectioning and voting; gates and programmatic checks; when a fixed workflow beats an agent (predictability, cost, testability).
- **BUILD:** a triage workflow — classify, route to a per-category prompt, validate, summarise — with the small model doing the routing.
- **SHIP:** a workflow whose every step is logged and testable.

---

**L26 · Day 18 · Automatic Prompt Optimisation and Meta-Prompting · 🎥 45 m · 💻 45 m**

- **COVERS:** using a model to critique and rewrite prompts; prompt optimisation as search against a metric; DSPy's approach — declare signatures and let an optimiser choose instructions and examples; overfitting to a small evaluation set; when manual iteration is enough.
- **BUILD:** an optimisation loop that proposes prompt variants, scores them on a held-out set and keeps the best; compare with your hand-written prompt.
- **SHIP:** a prompt improvement backed by held-out numbers.

---

**L27 · Day 19 · Project: A Structured Ticket-Triage Pipeline · 🎥 30 m · 💻 120 m**

- **COVERS:** combining Phase 2 — generating diverse, labelled, realistic synthetic tickets with a model; structured extraction; routing; versioned prompts; caching; a small evaluation.
- **BUILD:** generate 300 synthetic tickets across 8 categories and 4 severities, build the triage pipeline, and evaluate accuracy per field.
- **SHIP:** a `docpilot triage` command with an accuracy report and per-ticket cost.

---

## PHASE 3 — Embeddings and Search
**Days 20–26 · L28–L37**

Retrieval quality caps RAG quality. This phase builds search from the ground up — dense, lexical, approximate, hybrid and reranked — and measures every choice.

---

**L28 · Day 20 · Embeddings: Meaning as Geometry · 🎥 50 m · 💻 45 m**

- **COVERS:** what an embedding is; how embedding models are trained (contrastive learning, in-batch negatives); cosine similarity, dot product and Euclidean distance, and when they agree (normalised vectors); dimensionality; why raw similarity scores are not calibrated probabilities; symmetric vs asymmetric (query vs document) embedding; what embeddings capture badly (negation, numbers, exact identifiers).
- **BUILD:** embed 1,000 documentation chunks, explore nearest neighbours, and draw a 2-D projection coloured by documentation section.
- **SHIP:** you can predict where embedding search will fail.

---

**L29 · Day 21 · Embedding Models in Practice: Choosing, Batching and Matryoshka · 🎥 45 m · 💻 50 m**

- **COVERS:** choosing a model (public leaderboards such as MTEB as a starting point, your own data as the decider); API vs local models (sentence-transformers); query and document prefixes or instructions some models require; batching and rate limits; normalisation; Matryoshka embeddings and truncated dimensions; storage maths (vectors × dimensions × bytes) for float32, int8 and binary vectors; you cannot mix embedding models in one index.
- **BUILD:** benchmark two embedding models on a 50-query DocPilot retrieval set (recall@5) and test truncation to 256 dimensions.
- **SHIP:** a chosen embedding model with measured recall and storage cost.

---

**L30 · Day 21 · Lexical Search: Inverted Indexes and BM25 · 🎥 45 m · 💻 45 m**

- **COVERS:** tokenising and normalising text; inverted indexes; TF-IDF; the BM25 formula, its k1 and b parameters and what each does; why lexical search wins on identifiers, error codes, rare terms and exact phrases; analysers, stemming and stop words; search engines (Elasticsearch/OpenSearch, Tantivy, Postgres full-text search).
- **BUILD:** implement BM25 from scratch in Python and compare it with embedding search on queries containing error messages and flag names.
- **SHIP:** a list of query types where each method wins.

---

**L31 · Day 22 · Nearest-Neighbour Search: Exact, IVF, HNSW and Quantisation · 🎥 55 m · 💻 45 m**

- **COVERS:** the cost of exact k-nearest-neighbour search; approximate search and the recall, latency and memory triangle; IVF (clustering and `nprobe`); HNSW (layered graphs, `M`, `efConstruction`, `efSearch`); product quantisation and scalar or binary quantisation; filtered search and why filters interact badly with graph indexes; benchmarking recall@k against queries per second.
- **BUILD:** compare brute force, an IVF index and an HNSW index (FAISS) on 100k vectors; plot recall against latency as you vary `nprobe` and `efSearch`.
- **SHIP:** index parameters chosen from your own recall–latency curve.

---

**L32 · Day 23 · Vector Databases: Choosing and Using One · 🎥 50 m · 💻 60 m**

- **COVERS:** what a vector database adds over a library (persistence, filtering, updates and deletes, replication, hybrid search); pgvector in Postgres (HNSW and IVFFlat indexes, distance operators); Qdrant, Weaviate, Milvus and Chroma; FAISS as a library; managed vs self-hosted; decision criteria — scale, filtering needs, operations burden, existing stack; schema design (IDs, payloads, versions).
- **BUILD:** load DocPilot chunks into pgvector and Qdrant, put the same search function over both, and compare latency and ergonomics.
- **SHIP:** a vector-store decision record for DocPilot.

---

**L33 · Day 23 · Metadata Filtering, Namespaces and Multi-Tenancy · 🎥 40 m · 💻 40 m**

- **COVERS:** metadata design (source, section, product version, date, language, access labels); pre-filtering vs post-filtering and the recall you lose; one collection per tenant vs a tenant field; per-tenant indexes at scale; versioned documentation and answering for the right version.
- **BUILD:** add version and section metadata to DocPilot, support "answer for version X" queries, and test for cross-version leakage.
- **SHIP:** no cross-version contamination on a 20-query test.

---

**L34 · Day 24 · Hybrid Search and Rank Fusion · 🎥 45 m · 💻 45 m**

- **COVERS:** why combine lexical and dense retrieval; why raw scores from the two can't simply be added; Reciprocal Rank Fusion (RRF) and its k constant; weighted fusion after normalisation; learned sparse retrieval (SPLADE) at a high level; built-in hybrid search in vector databases; evaluating the combination against each part.
- **BUILD:** hybrid BM25 plus dense retrieval with RRF; measure recall@5 and MRR against each method alone on the 50-query set.
- **SHIP:** a measured hybrid-vs-dense comparison.

---

**L35 · Day 25 · Rerankers: Cross-Encoders and Late Interaction · 🎥 45 m · 💻 45 m**

- **COVERS:** bi-encoders vs cross-encoders; two-stage retrieval (retrieve 50, rerank to 5); reranker APIs and open reranker models; late interaction (ColBERT) and token-level matching; LLM-based reranking (pointwise and listwise) and its cost; the latency budget for reranking.
- **BUILD:** add a cross-encoder reranker and measure nDCG@5 and the added latency.
- **SHIP:** a retrieval stack with a quantified reranker gain.

---

**L36 · Day 25 · Fine-Tuning Embeddings for Your Domain · 🎥 45 m · 💻 60 m**

- **COVERS:** when off-the-shelf embeddings underperform (jargon, identifiers, domain-specific notions of similarity); training data — query–positive pairs, hard negatives, synthetic queries generated from chunks; contrastive losses (multiple-negatives ranking loss); evaluation on held-out queries; the cost of re-indexing.
- **BUILD:** generate synthetic queries for 2,000 chunks, fine-tune a small open embedding model with sentence-transformers, and compare recall@5 with the base model.
- **SHIP:** a fine-tuned embedding model, or a documented decision not to use one.

---

**L37 · Day 26 · Milestone: A Search Service Over the DocPilot Corpus · 🎥 30 m · 💻 100 m**

- **COVERS:** assembling Phase 3 into a retrieval service — hybrid retrieval, reranking, metadata filters, a clean API and a retrieval evaluation report.
- **BUILD:** a `search(query, filters, k)` service in FastAPI over your chosen vector store, plus a report with recall@k, MRR and nDCG.
- **SHIP:** a retrieval service with published metrics.

---

## PHASE 4 — Retrieval-Augmented Generation
**Days 27–35 · L38–L49**

From a 100-line prototype to a grounded, cited, permission-aware assistant: parsing, chunking, enrichment, query transformation, generation and keeping the index fresh.

---

**L38 · Day 27 · Why RAG: Grounding, Freshness and Private Knowledge · 🎥 40 m · 💻 30 m**

- **COVERS:** the problems RAG solves (knowledge cut-offs, private data, citations, letting smaller models answer well); the original RAG formulation (Lewis et al., 2020) vs today's retrieve-then-prompt systems; the pipeline — ingest, chunk, embed and index, retrieve, assemble context, generate, cite; the alternatives (fine-tuning for knowledge, long context) and when each wins; the failure surface of each stage.
- **BUILD:** a diagram of DocPilot's RAG pipeline with the failure modes of each stage listed.
- **SHIP:** a failure-mode map you will use for debugging.

---

**L39 · Day 27 · Naive RAG From Scratch in 100 Lines · 🎥 50 m · 💻 60 m**

- **COVERS:** the minimal loop with no framework — chunk, embed, store in memory, retrieve top-k, put the chunks in a prompt, answer; the prompt template; returning sources; what breaks immediately (bad chunks, irrelevant hits, answers that ignore the context).
- **BUILD:** a 100-line RAG over the DocPilot corpus; run the 30-question seed eval and compare with the no-retrieval baseline from L6.
- **SHIP:** your first measured RAG improvement.

---

**L40 · Day 28 · Ingestion I: Parsing HTML, PDFs, Office Files and Tables · 🎥 50 m · 💻 60 m**

- **COVERS:** why parsing quality caps RAG quality; HTML to clean text (removing boilerplate, keeping headings); Markdown as the target format; PDFs — text extraction vs layout-aware parsing vs OCR; tables (keep them as Markdown or HTML, or describe them); images and diagrams in documents (captioning); parsing tools (pypdf, pdfplumber, Unstructured, Docling, vision-model page parsing); preserving structure metadata (heading path, page number, URL).
- **BUILD:** an ingestion pipeline that turns the docs corpus plus five PDFs into clean Markdown with heading paths and source URLs.
- **SHIP:** a parsed corpus with structure metadata, spot-checked by hand.

---

**L41 · Day 29 · Ingestion II: Chunking Strategies and Their Trade-offs · 🎥 55 m · 💻 60 m**

- **COVERS:** why chunk at all; fixed-size chunks with overlap; recursive splitting on separators; structure-aware chunking (by heading, keeping code blocks whole); semantic chunking (split where adjacent-sentence similarity drops); chunk size trade-offs (precision vs context, diluted embeddings); keeping tables and code intact; chunk metadata (heading path, position); judging chunkers by retrieval metrics, not by eye.
- **BUILD:** implement four chunkers, index each, and compare recall@5 on the 50-query set.
- **SHIP:** a chunking strategy chosen by measurement.

---

**L42 · Day 30 · Contextual Retrieval and Chunk Enrichment · 🎥 45 m · 💻 50 m**

- **COVERS:** the lost-context problem (a chunk that only says "this setting" or "it"); prepending heading paths and document titles; contextual retrieval — a model writes a short situating context for each chunk before embedding and BM25 indexing; keeping the cost down with prompt caching; generating hypothetical questions per chunk; summaries as extra index entries.
- **BUILD:** add model-written chunk contexts to DocPilot's index using the small model with each document cached; measure the retrieval change.
- **SHIP:** a measured gain and the one-off cost of enrichment.

---

**L43 · Day 30 · Query Transformation: Rewriting, Multi-Query, HyDE and Decomposition · 🎥 50 m · 💻 50 m**

- **COVERS:** the vocabulary gap between users and documents; query rewriting and expansion; multi-query retrieval (several paraphrases, merged results); HyDE — embedding a hypothetical answer instead of the question; decomposing multi-part questions; step-back prompting; routing queries to different indexes; the cost and latency of each.
- **BUILD:** implement rewriting, multi-query and HyDE; measure recall on the 20 hardest queries.
- **SHIP:** a query-transformation stage that runs only when it helps.

---

**L44 · Day 31 · Retrieval Tuning: k, Thresholds, MMR and Diversity · 🎥 40 m · 💻 45 m**

- **COVERS:** choosing k; similarity thresholds and why raw scores make poor thresholds; maximal marginal relevance (MMR) for diversity; removing near-duplicate chunks; merging adjacent chunks; recency boosts; the context budget per answer.
- **BUILD:** implement MMR and deduplication; tune k and the MMR λ on your eval set.
- **SHIP:** tuned retrieval parameters with the curve that justifies them.

---

**L45 · Day 32 · Prompting the Generator: Grounded Answers, Refusals and Citations · 🎥 50 m · 💻 50 m**

- **COVERS:** answer-only-from-context instructions and their limits; where to place documents and the question; extracting quotes before answering; inline citations with source IDs; checking citations programmatically (does the cited chunk support the sentence?); saying "the documentation doesn't cover this" well; native citation features some APIs offer; formatting answers for readers.
- **BUILD:** add citations to DocPilot's answers and a checker that flags unsupported sentences.
- **SHIP:** answers with checked citations and a measured citation accuracy.

---

**L46 · Day 32 · Conversational RAG: Follow-Ups, History and Query Condensation · 🎥 40 m · 💻 45 m**

- **COVERS:** follow-up questions that don't stand alone ("and on Windows?"); condensing the conversation into a standalone query; which history to keep in the prompt; retrieving every turn vs reusing earlier results; remembering user context; evaluating multi-turn conversations.
- **BUILD:** add conversation support with query condensation and test it on 15 scripted multi-turn conversations.
- **SHIP:** follow-up questions retrieve as well as first questions.

---

**L47 · Day 33 · Access Control, Permissions and PII in RAG · 🎥 45 m · 💻 40 m**

- **COVERS:** retrieval must enforce the asking user's permissions; document-level access lists carried into the index; filtering at query time vs separate indexes; the risk of summaries that cross permission boundaries; detecting and redacting PII at ingestion vs at answer time; audit logs; deletion requests across indexes and caches.
- **BUILD:** add access labels to a subset of documents, enforce them, and write tests that try to retrieve restricted content.
- **SHIP:** a passing permissions test suite.

---

**L48 · Day 34 · Keeping the Index Fresh: Updates, Deletes and Re-Embedding · 🎥 45 m · 💻 45 m**

- **COVERS:** detecting changes (content hashes, timestamps, webhooks); incremental upserts and deletes; tombstones; re-embedding after a model change with a blue/green index swap; stale answers served from caches; scheduling ingestion; monitoring index health (counts, orphaned chunks, embedding version).
- **BUILD:** make ingestion incremental with content hashes; simulate a documentation update and verify that only the changed chunks are re-embedded.
- **SHIP:** an idempotent, incremental ingestion job.

---

**L49 · Day 35 · Project: DocPilot Answers Questions With Citations · 🎥 30 m · 💻 150 m**

- **COVERS:** integrating Phase 4 — ingestion, chunking, enrichment, hybrid retrieval, reranking, grounded generation with citations, conversation support and permissions.
- **BUILD:** an `/ask` API and a minimal web UI; run the seed eval and a 100-question extended set.
- **SHIP:** a working RAG assistant with an eval report and per-answer cost and latency.

---

## PHASE 5 — Advanced RAG and RAG Evaluation
**Days 36–43 · L50–L60**

Measure retrieval and generation separately, diagnose failures systematically, and reach for the advanced techniques — small-to-big, graphs, agentic retrieval, SQL, page images — only when the measurements say they help.

---

**L50 · Day 36 · Evaluating Retrieval: Recall@k, MRR, nDCG and Golden Sets · 🎥 50 m · 💻 60 m**

- **COVERS:** relevance judgements; building a golden set (real queries with labelled relevant chunks); recall@k, precision@k, MRR and nDCG with their formulas; graded vs binary relevance; synthetic query generation for evaluation and its biases; sample sizes and confidence intervals; reporting by query category.
- **BUILD:** a retrieval-evaluation module computing all four metrics with bootstrap confidence intervals.
- **SHIP:** a leaderboard of your own retrieval configurations.

---

**L51 · Day 37 · Evaluating Generation: Faithfulness, Relevance and Correctness · 🎥 50 m · 💻 60 m**

- **COVERS:** separating retrieval quality from generation quality; faithfulness (is every claim supported by the retrieved context?); answer relevance; correctness against a reference answer; context precision and recall; claim extraction and verification with a model; RAGAS-style metrics and their caveats; human spot checks.
- **BUILD:** implement a faithfulness metric (split into claims, verify each) and a correctness metric (judge against the reference); run both on DocPilot.
- **SHIP:** generation metrics that agree with your own judgement on a 20-answer sample.

---

**L52 · Day 37 · Diagnosing RAG Failures: A Systematic Playbook · 🎥 45 m · 💻 45 m**

- **COVERS:** a failure taxonomy — content missing from the corpus, not retrieved, retrieved but ranked too low, lost in a long context, context ignored, wrong format, incomplete answer; tracing a bad answer back through the stages; error analysis by reading outputs (open coding, then counting); prioritising fixes by frequency and impact.
- **BUILD:** label 50 failed answers with the taxonomy and produce a ranked fix list.
- **SHIP:** a data-driven improvement plan.

---

**L53 · Day 38 · Small-to-Big Retrieval: Parent-Document, Sentence-Window and Multi-Vector · 🎥 45 m · 💻 50 m**

- **COVERS:** retrieving with small precise units and generating with larger context; parent-document retrieval; sentence-window retrieval; multi-vector indexing (summaries, questions and chunks pointing to the same parent); hierarchical retrieval (section, then chunk); storage and cost.
- **BUILD:** implement parent-document retrieval for DocPilot and measure the change in answer correctness.
- **SHIP:** a measured result for small-to-big retrieval on your data.

---

**L54 · Day 39 · GraphRAG and Knowledge Graphs · 🎥 55 m · 💻 60 m**

- **COVERS:** questions vector search answers badly (global questions such as "what are the main themes", multi-hop relations); building a knowledge graph with a model (entity and relation extraction); entity resolution; graph storage (Neo4j, or networkx for small graphs); Microsoft's GraphRAG and its community summaries for global questions; local graph traversal for multi-hop questions; the cost of building the graph; when it is worth it.
- **BUILD:** extract a small entity–relation graph of Kubernetes resources from the docs; answer ten multi-hop questions with graph plus vector retrieval and with vector retrieval alone.
- **SHIP:** a documented verdict on GraphRAG for DocPilot.

---

**L55 · Day 40 · Agentic RAG: Retrieval as a Tool · 🎥 50 m · 💻 50 m**

- **COVERS:** letting the model decide when and what to retrieve; iterative retrieval (search, read, search again); self-reflective retrieval (Self-RAG) and corrective retrieval (CRAG) — grading retrieved documents, re-querying or falling back to the web; deep-research loops; latency and cost against answer quality; stopping criteria.
- **BUILD:** expose search as a tool, allow up to four searches per question, and compare with single-shot RAG on multi-part questions.
- **SHIP:** a measured trade-off between agentic and single-shot RAG.

---

**L56 · Day 40 · Long Context vs RAG: Stuffing, Caching and Hybrids · 🎥 40 m · 💻 45 m**

- **COVERS:** when the whole corpus fits in the window; cache-augmented generation (load the corpus once and cache it); cost at scale (every request still pays for the context, at the cached rate); quality effects (context rot vs retrieval misses); hybrids — retrieve documents, then pass whole documents; decision rules.
- **BUILD:** on a 50-page subset, compare full context with caching against RAG on correctness, cost and latency.
- **SHIP:** a decision rule backed by numbers.

---

**L57 · Day 41 · Structured Data: Text-to-SQL and Table Question Answering · 🎥 55 m · 💻 60 m**

- **COVERS:** answers that live in databases rather than documents; text-to-SQL prompting with schema descriptions and examples; schema linking for large schemas; read-only roles and query validation (never let generated SQL run with write access); execute, check and retry; question answering over CSV tables; semantic layers and metric definitions; evaluation by execution accuracy.
- **BUILD:** a text-to-SQL tool over a SQLite ticket database, evaluated for execution accuracy on 30 questions.
- **SHIP:** a safe, read-only analytics question tool.

---

**L58 · Day 42 · Multimodal RAG: Images, Charts and Page-Level Retrieval · 🎥 45 m · 💻 50 m**

- **COVERS:** documents whose meaning is in figures, charts and layout; captioning images into the text index; multimodal embeddings; page-image retrieval (the ColPali approach — embedding page screenshots with a vision-language model); sending retrieved page images to a vision-capable model; costs.
- **BUILD:** index 20 diagram-heavy pages both as captions and as page images; compare answer quality on 15 questions about figures.
- **SHIP:** a recommendation for handling figures in DocPilot.

---

**L59 · Day 42 · RAG at Scale: Latency Budgets, Caching and Cost · 🎥 40 m · 💻 40 m**

- **COVERS:** the latency budget across stages (embed the query, search, rerank, generate); running retrieval calls in parallel; caching query embeddings and retrieval results; streaming the answer; cost per query by stage; scaling the index (shards, replicas); load testing.
- **BUILD:** instrument every RAG stage, load-test with ten concurrent users, and produce a latency waterfall.
- **SHIP:** p50 and p95 latency and cost per query, broken down by stage.

---

**L60 · Day 43 · Milestone: A RAG Evaluation Harness and a Measured Improvement · 🎥 30 m · 💻 120 m**

- **COVERS:** tying Phase 5 together — one command that runs retrieval and generation evaluations, compares against the previous run and reports regressions.
- **BUILD:** `docpilot eval` with retrieval and generation metrics, per-category breakdowns and a diff against the baseline; pick one fix from L52's plan and show its effect.
- **SHIP:** an eval report showing an improvement larger than the noise.

---

## PHASE 6 — Tool Use and the Model Context Protocol
**Days 44–49 · L61–L69**

Models that act: function calling from first principles, tools designed for a model to use, sandboxed code execution, web access, MCP servers and computer use.

---

**L61 · Day 44 · Tool Use From First Principles: Schemas, Calls and Results · 🎥 50 m · 💻 50 m**

- **COVERS:** what function calling is (the model emits a structured request, your code executes it); tool definitions — name, description, JSON Schema for the input; the `tool_use` → `tool_result` round trip; the model never executes anything itself; validating arguments; returning errors as tool results; tool use as a route to structured output.
- **BUILD:** `search_docs(query)` and `get_doc_page(slug)` tools wired into a single round trip without any framework.
- **SHIP:** you can implement a tool round trip by hand.

---

**L62 · Day 44 · The Tool Loop: Multi-Step Calls, Parallel Calls and Tool Choice · 🎥 45 m · 💻 50 m**

- **COVERS:** looping until `stop_reason` is no longer `tool_use`; several tool calls in one turn and returning all their results together; `tool_choice` (auto, any, a specific tool, none); iteration limits; handling large results (truncate, summarise, paginate); keeping the transcript valid (every `tool_use` gets a `tool_result`).
- **BUILD:** a generic tool-loop runner with iteration limits and per-call timing and logging.
- **SHIP:** a reusable `run_tools()` you will use for every later agent.

---

**L63 · Day 45 · Designing Tools Models Use Well · 🎥 45 m · 💻 45 m**

- **COVERS:** tools as an interface designed for a model, not a thin API wrapper; names and descriptions that say when to use the tool; a few higher-level tools vs many granular ones; argument design (enums, defaults, IDs vs names); error messages that let the model recover; concise results with stable IDs; idempotency and side effects; testing tools with a model in the loop.
- **BUILD:** redesign three DocPilot tools after reading transcripts of the model misusing them; measure task success before and after.
- **SHIP:** a tool-design checklist with before-and-after evidence.

---

**L64 · Day 46 · Code Execution and Sandboxes · 🎥 45 m · 💻 50 m**

- **COVERS:** why let a model run code (calculation, data analysis, transformations); sandboxing options — containers, gVisor and Firecracker-style microVMs, provider-hosted code execution tools, WebAssembly; limits on CPU, memory, time and network; moving files in and out; risks (exfiltration, resource abuse); stateful vs stateless sessions.
- **BUILD:** a Docker-based Python sandbox tool with a timeout, no network and a read-only mount; let the model analyse a CSV of tickets with it.
- **SHIP:** a code tool that survives deliberately hostile code.

---

**L65 · Day 46 · Web Search, Fetch and Browsing Tools · 🎥 40 m · 💻 40 m**

- **COVERS:** search APIs and provider-hosted web search tools; fetching and cleaning pages; citing web sources; trust and injection risks in web content; caching fetches; when web access is a liability for a product.
- **BUILD:** a `web_search` fallback for questions the docs don't cover, with web citations clearly marked.
- **SHIP:** answers that distinguish documentation sources from web sources.

---

**L66 · Day 47 · The Model Context Protocol: Architecture, Primitives and Transports · 🎥 50 m · 💻 40 m**

- **COVERS:** the problem MCP solves (M applications × N integrations); hosts, clients and servers; server primitives — tools, resources and prompts — and client features such as sampling and roots; JSON-RPC messages; transports — stdio and Streamable HTTP; capability negotiation at initialisation; authorisation for remote servers (OAuth-based); the ecosystem and its governance; MCP vs plain function calling.
- **BUILD:** connect an existing MCP server (for example a filesystem server) to an MCP-capable client and inspect the JSON-RPC traffic.
- **SHIP:** you can read an MCP session log and explain each message.

---

**L67 · Day 48 · Building an MCP Server (and Client) in Python · 🎥 50 m · 💻 75 m**

- **COVERS:** the official Python SDK and its decorator-based server API; defining tools, resources and prompts; typed inputs; returning structured content; running over stdio and HTTP; a minimal client that lists and calls tools; testing with the MCP Inspector; packaging and versioning servers.
- **BUILD:** a `docpilot-mcp` server exposing search, page fetch and ticket lookup, connected to an MCP host.
- **SHIP:** DocPilot's knowledge is usable from any MCP-capable client.

---

**L68 · Day 48 · Computer Use and Browser Agents · 🎥 45 m · 💻 40 m**

- **COVERS:** models operating graphical interfaces from screenshots (screenshot, action, screenshot); provider computer-use tools; browser automation with Playwright as the more reliable option when the DOM is available; accessibility trees; speed, cost and reliability limits; safety — isolated VMs, no stored credentials, human confirmation for consequential steps.
- **BUILD:** a Playwright-based browser tool that lets the model navigate the documentation site and extract a table.
- **SHIP:** a judgement on when GUI agents are worth it compared with APIs.

---

**L69 · Day 49 · Project: DocPilot Gets Tools · 🎥 30 m · 💻 120 m**

- **COVERS:** integrating Phase 6 — the tool loop, well-designed tools, sandboxed code execution and the MCP server.
- **BUILD:** DocPilot can search the docs, read pages, query the ticket database (read-only SQL), run analysis code, and draft a ticket (a write action behind confirmation).
- **SHIP:** a tool-using assistant with per-tool success rates and latency.

---

## PHASE 7 — Agents
**Days 50–61 · L70–L85**

Models that direct their own steps: the loop built by hand, the patterns that work, state and memory, planning, human approval, multiple agents, frameworks, coding agents, and the guards that make agents reliable.

---

**L70 · Day 50 · What an Agent Is: Workflows vs Agents · 🎥 45 m · 💻 30 m**

- **COVERS:** an agent as a model using tools in a loop and choosing its own steps; workflows (predefined paths) vs agents (model-directed paths); the augmented LLM (retrieval, tools, memory); levels of autonomy; when an agent is worth its cost and unpredictability; where agents are deployed today (coding, research, customer support, operations).
- **BUILD:** classify five DocPilot features as workflow or agent and justify each choice.
- **SHIP:** an "agent or not" decision rule.

---

**L71 · Day 50 · The Agent Loop From Scratch, Without a Framework · 🎥 55 m · 💻 60 m**

- **COVERS:** the loop — observe, decide, act, observe; the transcript as the agent's state; a system prompt with the goal, the tools and the stopping rules; termination (a final-answer tool, a step limit, a budget); logging every step; recovering from errors; why building one by hand makes frameworks easy to read.
- **BUILD:** a 150-line agent on top of `run_tools()` that answers multi-step DocPilot questions (search, read, query tickets, answer).
- **SHIP:** a working agent with a full step-by-step trace.

---

**L72 · Day 51 · ReAct, Plan-and-Execute and Reflection · 🎥 50 m · 💻 45 m**

- **COVERS:** ReAct (interleaved reasoning and acting); plan-and-execute (plan once, run the steps, re-plan on failure); reflection and self-critique (Reflexion-style lessons carried between attempts); tree-search variants at a high level; which of these patterns tool-calling models already perform implicitly.
- **BUILD:** add plan-and-execute and a reflection step to your agent; compare success rate and cost on 20 tasks.
- **SHIP:** evidence for which pattern suits DocPilot.

---

**L73 · Day 52 · Workflows II: Orchestrator–Workers and Evaluator–Optimiser · 🎥 45 m · 💻 50 m**

- **COVERS:** orchestrator–workers (a lead model splits a task, delegates the parts and synthesises the results); evaluator–optimiser (generate, critique, revise until a bar is met); stopping conditions; parallel workers; how cost multiplies; when these patterns beat a single agent.
- **BUILD:** an orchestrator that answers a comparison question with one worker per item, and an evaluator–optimiser loop that drafts release notes.
- **SHIP:** two patterns implemented, with cost per task recorded.

---

**L74 · Day 52 · Agent State, Checkpoints and Durable Execution · 🎥 45 m · 💻 45 m**

- **COVERS:** agents as long-running processes; serialising state (messages, tool results, plans); checkpoints and resuming after a crash; idempotent tools and side effects that happen exactly once; durable-execution engines (Temporal-style workflows, graph checkpointers in agent frameworks); timeouts and cancellation.
- **BUILD:** make your agent resumable — kill it mid-task and resume from the last checkpoint without repeating side effects.
- **SHIP:** a crash-safe agent.

---

**L75 · Day 53 · Memory I: Working Memory, Summaries and Compaction · 🎥 45 m · 💻 45 m**

- **COVERS:** the context window as working memory; conversation buffers and truncation; rolling summaries; compacting long agent transcripts (summarise old steps, keep recent ones verbatim); clearing stale tool results; what must never be compacted away (user constraints, decisions made); measuring what compaction loses.
- **BUILD:** add compaction when the transcript passes a token budget, and test that key facts survive it.
- **SHIP:** an agent that runs 50+ steps without overflowing or forgetting its constraints.

---

**L76 · Day 54 · Memory II: Long-Term Memory · 🎥 50 m · 💻 50 m**

- **COVERS:** kinds of long-term memory — episodic (what happened), semantic (facts about the user and the world), procedural (how to do things); writing memories (extraction, deduplication, resolving conflicts, forgetting); reading memories (by relevance and recency); memory as files the agent edits vs a vector store; privacy and user control; evaluating memory.
- **BUILD:** a user-preference memory for DocPilot (cluster version, cloud provider, preferred tools) with commands to view and delete it.
- **SHIP:** personalised answers backed by memory the user can see and delete.

---

**L77 · Day 55 · Planning and Long-Horizon Tasks · 🎥 45 m · 💻 45 m**

- **COVERS:** why long tasks fail (compounding errors, drift, losing the goal); task decomposition; to-do lists and progress files the agent maintains; verification after each milestone; re-planning; giving agents a way to test their own work; how success falls with task length.
- **BUILD:** an agent that writes a troubleshooting guide — it plans the sections, researches each, verifies them and assembles the document.
- **SHIP:** a long task completed with a visible plan and checks.

---

**L78 · Day 55 · Human-in-the-Loop: Approvals, Interrupts and Escalation · 🎥 40 m · 💻 40 m**

- **COVERS:** which actions need approval (irreversible, external, costly); approval gates and interrupts inside the loop; presenting proposed actions clearly; letting the human edit a proposed action; escalating to a person when confidence is low; audit trails; asynchronous approval.
- **BUILD:** put DocPilot's write actions (creating tickets, sending emails) behind an approval step with a diff-style preview.
- **SHIP:** no side effect happens without an auditable approval.

---

**L79 · Day 56 · Multi-Agent Systems: When They Help and When They Hurt · 🎥 50 m · 💻 45 m**

- **COVERS:** architectures — supervisor, hierarchical, peer networks; parallel subagents with their own context windows for broad research; specialised agents vs one generalist with tools; coordination failures (duplicated work, conflicting edits, information lost at handoffs); token cost multiplication; what the evidence says about when multiple agents beat one.
- **BUILD:** a research supervisor that spawns three parallel subagents and merges their findings; compare quality and cost with your single agent.
- **SHIP:** a measured verdict on multi-agent designs for DocPilot.

---

**L80 · Day 57 · Agent Interoperability: Handoffs and Agent-to-Agent Protocols · 🎥 40 m · 💻 35 m**

- **COVERS:** handoffs between agents (passing conversation and control); agent cards and capability discovery; the Agent2Agent (A2A) protocol's model of tasks and messages; how A2A relates to MCP (agent to agent vs agent to tool); trust and authentication between agents; the state of adoption.
- **BUILD:** a handoff from DocPilot's triage agent to a billing agent with a structured handoff payload.
- **SHIP:** a clean handoff contract between two agents.

---

**L81 · Day 57 · Agent Frameworks Compared · 🎥 55 m · 💻 50 m**

- **COVERS:** what frameworks provide (loops, state, tools, memory, tracing, deployment) and what they cost (abstraction, lock-in, harder debugging); LangGraph (graphs, typed state, checkpointers); the OpenAI Agents SDK (agents, handoffs, guardrails); the Claude Agent SDK (the agent harness behind Claude Code); Pydantic AI (typed agents); CrewAI and AutoGen (role-based multi-agent styles); LlamaIndex for data-centric agents; choosing one, or staying framework-free.
- **BUILD:** a comparison matrix against DocPilot's needs, filled in from the documentation and a 30-minute spike with two frameworks.
- **SHIP:** a framework decision record.

---

**L82 · Day 58 · Building With a Framework: The Same Agent, Rebuilt · 🎥 45 m · 💻 75 m**

- **COVERS:** porting a hand-written agent to a framework; mapping the concepts (state, nodes or steps, tools, checkpoints); what you gain (tracing, persistence, streaming) and what you lose; testing the port against the same tasks.
- **BUILD:** rebuild the L71 agent in LangGraph or your chosen framework, run the same 20 tasks, and compare success, cost and code size.
- **SHIP:** a side-by-side comparison with numbers.

---

**L83 · Day 59 · Coding Agents: How They Work and How to Work With Them · 🎥 50 m · 💻 60 m**

- **COVERS:** the anatomy of a coding agent — file read and edit tools, a shell, code search, test runs, a planning loop; repository context (instruction and memory files); working agentically (plan first, small diffs, tests as the specification, review everything); headless and CI use; benchmarks such as SWE-bench and what they measure; risks (destructive commands, secrets, supply chain) and permission modes.
- **BUILD:** use a coding agent to add a DocPilot feature from an issue description — plan, implement, test — and review the diff yourself.
- **SHIP:** a merged feature and a written note on where the agent helped and where it didn't.

---

**L84 · Day 60 · Agent Reliability: Loops, Budgets, Timeouts and Graceful Failure · 🎥 45 m · 💻 45 m**

- **COVERS:** failure modes — infinite loops, repeated identical tool calls, error spirals, finishing too early, drifting from the goal; guards — step and token budgets, wall-clock timeouts, repeat detection, per-task cost caps; fallbacks and partial results; making failures visible to users; reliability as a measured rate across repeated runs (pass^k).
- **BUILD:** a fault-injection harness (tools that time out, return errors or return junk) and a measurement of how your agent degrades.
- **SHIP:** an agent with explicit budgets and a measured reliability rate.

---

**L85 · Day 61 · Project: The DocPilot Research Agent · 🎥 30 m · 💻 150 m**

- **COVERS:** integrating Phase 7 — planning, tools, memory, compaction, approvals, budgets and checkpoints.
- **BUILD:** an agent that takes a support escalation, researches the docs and past tickets, drafts a resolution and a documentation fix, and asks for approval before filing anything.
- **SHIP:** 20 escalations run end to end, with success rate, cost and step counts.

---

## PHASE 8 — Evaluation and Testing
**Days 62–69 · L86–L95**

Evals are the specification of an AI product. This phase builds datasets, deterministic checks, calibrated model judges, agent evaluations and CI gates, and connects them to production feedback.

---

**L86 · Day 62 · Eval-Driven Development: Why Vibe Checks Don't Scale · 🎥 40 m · 💻 30 m**

- **COVERS:** why vibe checks fail as a product grows; evals as the specification; the loop — read the data, write evals, change the system, re-run; levels — assertions, model-graded evals, human review, online metrics; error analysis before choosing metrics; who owns the evals.
- **BUILD:** an eval plan for DocPilot listing every capability, its metric and its data source.
- **SHIP:** an eval roadmap.

---

**L87 · Day 62 · Building Eval Datasets: Golden Sets, Edge Cases and Synthetic Data · 🎥 50 m · 💻 60 m**

- **COVERS:** sourcing real examples (logs, support history); stratifying by category and difficulty; edge cases and adversarial cases; synthetic generation along explicit dimensions (persona × task × difficulty) for diversity; reviewing synthetic data by hand; versioning datasets; keeping a held-out set; dataset size and statistical power.
- **BUILD:** grow DocPilot's eval set to 200 items with stratified, hand-reviewed synthetic additions.
- **SHIP:** a versioned eval dataset with a data card.

---

**L88 · Day 63 · Code-Based Evals: Assertions and Programmatic Checks · 🎥 45 m · 💻 50 m**

- **COVERS:** deterministic checks first — schema validity, required fields, regular expressions, exact match, numeric tolerance, length limits, forbidden content, citations present; writing them as pytest tests; handling non-determinism (several samples, pass rates); keeping the feedback loop fast.
- **BUILD:** a pytest suite of 40 assertions over DocPilot outputs that runs in under two minutes.
- **SHIP:** cheap, fast evals that catch format regressions.

---

**L89 · Day 64 · LLM-as-Judge: Rubrics, Pairwise Comparison and Judge Bias · 🎥 55 m · 💻 50 m**

- **COVERS:** when a model is a reasonable judge; pointwise scoring vs pairwise preference; binary pass/fail with a written critique vs numeric scales; rubrics with concrete criteria; reference-guided judging; known biases — position, verbosity, self-preference — and their mitigations (swap the order, control for length, use a different judge model); judge cost.
- **BUILD:** a pass/fail judge for "the answer is correct and grounded", with a written rubric and a critique field.
- **SHIP:** a judge you can run on every eval item.

---

**L90 · Day 65 · Calibrating Judges Against Humans · 🎥 45 m · 💻 50 m**

- **COVERS:** a judge you haven't measured can't be trusted; labelling a sample yourself; agreement metrics (accuracy, precision and recall on failures, Cohen's kappa); iterating the judge prompt on disagreements; separate development and test sets for the judge itself; re-checking the judge when the system changes.
- **BUILD:** label 100 outputs yourself, measure the judge's agreement, and improve the rubric until agreement is acceptable on a held-out 50.
- **SHIP:** a judge with a published agreement score.

---

**L91 · Day 65 · Evaluating Agents: Trajectories, Tool Calls and Task Success · 🎥 50 m · 💻 50 m**

- **COVERS:** outcome evaluation (did the task succeed, checked against the final state) vs trajectory evaluation (were the steps sensible); tool-call accuracy (right tool, right arguments); efficiency (steps, tokens, time); simulated users for multi-turn agents; repeated runs and pass^k; resettable environments and sandboxes; benchmark styles (simulated customer-service tasks with policies, repository tasks with tests).
- **BUILD:** an agent eval with 20 tasks, a state checker, tool-call assertions and three runs per task.
- **SHIP:** success rate, pass^3 and cost per task for your research agent.

---

**L92 · Day 66 · Benchmarks: What They Measure, Contamination and Saturation · 🎥 40 m · 💻 30 m**

- **COVERS:** benchmark families (knowledge, reasoning, coding, agentic tasks, long context); how they are scored; contamination and memorisation; saturation; leaderboard gaming; arena-style human-preference rankings and their biases; building private benchmarks that mirror your own task.
- **BUILD:** a one-page critique of one public benchmark — what it measures and how it could mislead you.
- **SHIP:** you can read a model launch announcement critically.

---

**L93 · Day 67 · Regression Testing and CI for Prompts and Models · 🎥 45 m · 💻 60 m**

- **COVERS:** running evals on every prompt or model change; fast smoke suites vs nightly full suites; thresholds and tolerances; comparing with the last known-good run; caching model outputs to keep CI deterministic and cheap; reporting metric diffs on pull requests.
- **BUILD:** a GitHub Actions workflow that runs the smoke eval on each pull request and posts a metrics diff.
- **SHIP:** a prompt change can't merge if it regresses the key metrics.

---

**L94 · Day 68 · Online Evaluation: A/B Tests, Feedback and Implicit Signals · 🎥 45 m · 💻 40 m**

- **COVERS:** offline vs online evaluation; explicit feedback (thumbs, ratings) and its biases; implicit signals (copying the answer, retrying, abandoning, escalating to a human); A/B testing LLM features — metrics, sample sizes, novelty effects; shadow deployments; sampling production traffic for review; feeding failures back into the eval set.
- **BUILD:** feedback capture and implicit-signal logging in DocPilot, plus an A/B test plan for a new prompt.
- **SHIP:** a feedback pipeline that feeds the eval dataset.

---

**L95 · Day 69 · Milestone: A Full Eval Suite for DocPilot · 🎥 30 m · 💻 120 m**

- **COVERS:** integrating Phase 8 — datasets, deterministic checks, calibrated judges, agent evals and CI.
- **BUILD:** one `make eval` that runs everything and writes a Markdown or HTML report with trends over time.
- **SHIP:** an eval suite you would trust to approve a model upgrade.

---

## PHASE 9 — Security, Safety and Guardrails
**Days 70–75 · L96–L103**

LLM applications have new attack surfaces — above all prompt injection — and agents with real permissions raise the stakes. This phase threat-models DocPilot, attacks it, and defends it by design.

---

**L96 · Day 70 · Threat Modelling LLM Applications · 🎥 45 m · 💻 40 m**

- **COVERS:** assets, actors and trust boundaries in an LLM application; the OWASP Top 10 for LLM Applications (prompt injection, sensitive information disclosure, supply chain, data and model poisoning, improper output handling, excessive agency, system prompt leakage, vector and embedding weaknesses, misinformation, unbounded consumption); mapping each risk to DocPilot.
- **BUILD:** a threat model for DocPilot with a data-flow diagram and its top risks.
- **SHIP:** a prioritised risk register.

---

**L97 · Day 70 · Prompt Injection: Direct, Indirect and Why It Is Hard · 🎥 50 m · 💻 45 m**

- **COVERS:** direct injection (the user tries to override instructions) vs indirect injection (instructions hidden in documents, web pages, emails or tool results); why models can't reliably separate data from instructions; real attack patterns (exfiltration through links and images, tool misuse, hidden text); why input filtering alone fails; injection through RAG corpora and MCP tool descriptions.
- **BUILD:** plant five indirect injections in DocPilot's corpus and tool results and record which succeed.
- **SHIP:** a reproducible injection test set.

---

**L98 · Day 71 · Defending Against Injection: Isolation, Privilege and the Lethal Trifecta · 🎥 50 m · 💻 50 m**

- **COVERS:** the lethal trifecta (private data + untrusted content + a way to send data out); design-level defences — least privilege, keeping untrusted data away from the planner (the dual-LLM pattern, CaMeL-style capability tracking), human confirmation for sensitive actions, closing output channels (no automatic rendering of external images or links); detection classifiers as defence in depth; marking untrusted content (spotlighting).
- **BUILD:** apply the defences to DocPilot and re-run the L97 injection set.
- **SHIP:** a measured reduction in successful injections, with the remaining risk written down.

---

**L99 · Day 72 · Jailbreaks and Red Teaming Your Own App · 🎥 45 m · 💻 50 m**

- **COVERS:** jailbreak families (role-play, obfuscation and encoding, many-shot, multi-turn escalation); what model-level safety training covers and what your application must add; planning a red-team exercise (scope, personas, success criteria); automated red teaming with an attacker model; recording findings and turning them into regression tests.
- **BUILD:** a red-team session against DocPilot's policies, manual plus an automated attacker model, with findings logged.
- **SHIP:** a red-team report with fixes and regression tests.

---

**L100 · Day 72 · Guardrails: Input and Output Filters, Classifiers and Moderation · 🎥 45 m · 💻 50 m**

- **COVERS:** where guardrails sit (input, retrieval, tool calls, output); moderation APIs and open safety-classifier models; topic restrictions; PII and secret detection; output validation (schemas, allow-listed actions); the latency and false-positive trade-off; failing safely; guardrail libraries.
- **BUILD:** input and output guardrails for DocPilot; measure the false-positive rate on 200 benign queries and the catch rate on the red-team set.
- **SHIP:** guardrails with measured precision and recall.

---

**L101 · Day 73 · Data Leakage, PII and Privacy Engineering · 🎥 45 m · 💻 45 m**

- **COVERS:** what leaks — system prompts, other users' data, memorised training data, logs; data minimisation in prompts; redaction and pseudonymisation; provider data-retention terms and zero-retention options; logging policy and retention periods; data residency; deletion across indexes, caches and logs.
- **BUILD:** a PII-redaction step for logs and a data-flow inventory for DocPilot.
- **SHIP:** a completed privacy review checklist for DocPilot.

---

**L102 · Day 74 · Agent and MCP Security: Sandboxes, Scopes and Supply Chain · 🎥 45 m · 💻 45 m**

- **COVERS:** excessive agency; scoping credentials per tool (read-only by default, short-lived tokens); sandboxing agent execution; MCP-specific risks — poisoned tool descriptions, servers that change after approval, confused-deputy OAuth flows, over-broad servers; pinning and reviewing servers; dependency and model supply chain (malicious model files, unsafe deserialisation, untrusted code in repositories).
- **BUILD:** audit DocPilot's tools and MCP servers and reduce each to the minimum scope it needs.
- **SHIP:** a least-privilege tool inventory.

---

**L103 · Day 75 · Governance: Regulation, Documentation and Responsible Deployment · 🎥 40 m · 💻 30 m**

- **COVERS:** the EU AI Act's risk-based structure and transparency duties (overview, not legal advice); the NIST AI Risk Management Framework; documentation — system cards, intended use, known limitations; telling users they are talking to an AI; bias and fairness checks relevant to your application; incident response for AI failures.
- **BUILD:** a system card for DocPilot.
- **SHIP:** documentation a reviewer could sign off.

---

## PHASE 10 — Production LLMOps
**Days 76–84 · L104–L114**

Running the system for real users: architecture, streaming, tracing, resilience, gateways, cost and latency engineering, caching, deployment and the product patterns that earn trust.

---

**L104 · Day 76 · Architecture of an LLM Application in Production · 🎥 50 m · 💻 40 m**

- **COVERS:** a reference architecture — client, API layer, orchestration, model gateway, retrieval services, tool services, queues, storage, observability; synchronous vs asynchronous request paths; stateless services with state in stores; configuration and feature flags for prompts and models; separate environments with their own keys and indexes.
- **BUILD:** an architecture diagram and component list for DocPilot's production deployment.
- **SHIP:** an architecture you will implement during this phase.

---

**L105 · Day 76 · Streaming to Users: SSE, WebSockets and Partial Results · 🎥 45 m · 💻 50 m**

- **COVERS:** why streaming matters for perceived latency; server-sent events vs WebSockets; streaming through FastAPI; streaming tool and agent progress; handling disconnects and cancellation (stop generating when the user leaves); streaming structured output; rendering partial Markdown in the front end.
- **BUILD:** stream DocPilot's answers and agent progress to the web UI over SSE, with a cancel button.
- **SHIP:** the first visible token appears in the UI in under a second.

---

**L106 · Day 77 · Observability: Traces, Spans and GenAI Semantic Conventions · 🎥 50 m · 💻 50 m**

- **COVERS:** why logs aren't enough for multi-step LLM applications; one trace per request with spans for retrieval, model calls and tool calls; OpenTelemetry and its generative-AI semantic conventions; recording prompts, outputs, tokens, cost and latency; sampling and privacy; LLM observability platforms (Langfuse, LangSmith, Arize Phoenix and others); dashboards and alerts.
- **BUILD:** instrument DocPilot with OpenTelemetry spans and view the traces in a self-hosted tool.
- **SHIP:** any bad answer can be traced to its retrieval results, prompt and tool calls.

---

**L107 · Day 78 · Reliability: Rate Limits, Retries, Timeouts and Fallbacks · 🎥 45 m · 💻 50 m**

- **COVERS:** provider rate limits (requests and tokens per minute); 429 and overloaded responses; exponential backoff with jitter and retry budgets; timeouts per call and per request; idempotency; falling back to another model or provider; circuit breakers; graceful degradation (a cached answer, an honest "try again"); load shedding.
- **BUILD:** a resilient client wrapper with backoff, timeouts and model fallback, tested with injected failures.
- **SHIP:** DocPilot keeps answering through a simulated provider outage.

---

**L108 · Day 78 · LLM Gateways and Multi-Provider Routing · 🎥 40 m · 💻 40 m**

- **COVERS:** what a gateway does (one API, key management, quotas, logging, fallbacks, caching); open-source and hosted gateways (LiteLLM and others); OpenAI-compatible APIs as a common format; the cost of abstraction (losing provider-specific features); per-team budgets and keys.
- **BUILD:** put DocPilot's model calls behind a gateway with per-feature budgets.
- **SHIP:** swapping models becomes a configuration change.

---

**L109 · Day 79 · Cost Engineering: Budgets, Routing and Batch Processing · 🎥 50 m · 💻 50 m**

- **COVERS:** cost per request, per user and per feature; the levers — smaller models, cascades and routing by difficulty, trimming prompts, caching, controlling output length, batch APIs for offline work at a discount; measuring the quality impact of each lever; cost dashboards and alerts.
- **BUILD:** a router that sends easy questions to the small model and hard ones to the large model, with the cost saving and quality change measured; move chunk enrichment to a batch API.
- **SHIP:** a documented cost reduction with no measured quality loss.

---

**L110 · Day 80 · Latency Engineering: Time to First Token, Parallelism and Speculation · 🎥 45 m · 💻 45 m**

- **COVERS:** time to first token vs total time; where the time goes (network, queueing, prefill, decode, tools, retrieval); running independent calls in parallel; shorter outputs; small models for intermediate steps; speculative decoding and other server-side techniques (overview); prompt caching for TTFT; regional endpoints; perceived-latency techniques (streaming, progress, optimistic UI).
- **BUILD:** cut DocPilot's p95 latency by parallelising retrieval and tool calls and trimming outputs; show before-and-after waterfalls.
- **SHIP:** a measured p95 latency reduction.

---

**L111 · Day 81 · Caching Beyond Prompts: Exact, Semantic and Tool-Result Caches · 🎥 40 m · 💻 45 m**

- **COVERS:** exact-match response caches; semantic caches (embedding similarity between queries) and the danger of false hits; cache keys that include model, prompt version and permissions; caching tool results with expiry times; invalidation when documents change; measuring hit rate and wrong-hit rate.
- **BUILD:** an exact cache and a strict-threshold semantic cache, with hit and wrong-hit rates measured on replayed traffic.
- **SHIP:** a cache that saves money without serving wrong answers.

---

**L112 · Day 82 · Deploying: Containers, Serverless, Queues and Background Agents · 🎥 50 m · 💻 60 m**

- **COVERS:** packaging with Docker; deploying APIs (container platforms, serverless functions and their time limits); queues and workers for long-running agents and ingestion; scheduled jobs; secrets management; scaling on concurrency; blue/green and canary releases for prompt and model changes; rollbacks.
- **BUILD:** containerise DocPilot (API, worker, vector database) with Docker Compose, deploy it to a container platform of your choice, and run agents as background jobs.
- **SHIP:** a deployed DocPilot with a one-command rollback.

---

**L113 · Day 83 · Product Patterns: UX for Uncertainty, Feedback and Trust · 🎥 45 m · 💻 35 m**

- **COVERS:** designing for non-deterministic output; showing sources and uncertainty; letting users correct and steer; progressive disclosure of agent steps; undo and confirmations; empty states and failure messages; teaching users what the assistant can and can't do; measuring trust and adoption.
- **BUILD:** a UX review of DocPilot with five changes implemented.
- **SHIP:** an interface that shows its sources, its steps and its limits.

---

**L114 · Day 84 · Project: Shipping DocPilot · 🎥 30 m · 💻 150 m**

- **COVERS:** integrating Phase 10 — architecture, streaming, tracing, resilience, the gateway, cost and latency work, caching and deployment.
- **BUILD:** production DocPilot with dashboards for latency, cost, errors and quality signals, plus alerts.
- **SHIP:** a deployed, observable, budgeted system with a runbook.

---

## PHASE 11 — Open Models, Fine-Tuning and Serving
**Days 85–92 · L115–L124**

When to own the model: the open-weights landscape, local and production serving, quantisation, and the fine-tuning ladder from LoRA to preference tuning and RL with verifiable rewards.

---

**L115 · Day 85 · The Open-Weights Landscape and Licences · 🎥 40 m · 💻 30 m**

- **COVERS:** the major open-weight model families (Llama, Qwen, Mistral, Gemma, DeepSeek and others); dense vs mixture-of-experts models; base, instruct and reasoning variants; licences (Apache-2.0 and MIT vs custom community licences with usage restrictions); finding and evaluating models (the Hugging Face Hub, model cards); hosted inference providers for open models.
- **BUILD:** a shortlist of three open models for DocPilot's triage task, with licence notes.
- **SHIP:** a shortlist with licence and hardware requirements.

---

**L116 · Day 85 · Running Models Locally: llama.cpp, Ollama and GGUF · 🎥 45 m · 💻 60 m**

- **COVERS:** local inference stacks — llama.cpp, Ollama, LM Studio, MLX on Apple silicon; GGUF files and quantisation levels; CPU inference and GPU offload; context length and memory; OpenAI-compatible local servers; what speed to expect on different hardware; when local inference makes sense (privacy, offline work, fast development loops).
- **BUILD:** run a small instruct model locally behind an OpenAI-compatible API and point DocPilot's triage at it.
- **SHIP:** triage accuracy and speed for the local model compared with the API model.

---

**L117 · Day 86 · Quantisation: Memory Maths, INT8, INT4, AWQ and GPTQ · 🎥 50 m · 💻 45 m**

- **COVERS:** memory ≈ parameters × bytes per parameter, plus the KV cache and overhead; FP16/BF16, FP8, INT8 and INT4; weight-only vs weight-and-activation quantisation; post-training methods (GPTQ, AWQ) and llama.cpp's k-quants; quality loss and how to measure it on your own task; quantised KV caches.
- **BUILD:** compute memory needs for three model sizes at four precisions; evaluate one model at two quantisation levels on your triage set.
- **SHIP:** a precision choice backed by your own accuracy numbers.

---

**L118 · Day 87 · Serving at Scale: vLLM, PagedAttention and Continuous Batching · 🎥 55 m · 💻 60 m**

- **COVERS:** why naive serving wastes GPUs; continuous batching; PagedAttention and KV-cache memory management; prefix caching on the server; tensor parallelism; serving engines (vLLM, SGLang, Text Generation Inference, TensorRT-LLM); tuning for throughput vs latency (maximum batch size, maximum tokens); benchmarking with realistic traffic; sizing GPUs.
- **BUILD:** serve an open model with vLLM (on a rented GPU, or a small model on the hardware you have); load-test at 1, 8 and 32 concurrent users and plot throughput and latency.
- **SHIP:** a capacity estimate — users per GPU — for DocPilot's triage.

---

**L119 · Day 88 · Prompt, RAG or Fine-Tune? A Decision Framework · 🎥 40 m · 💻 30 m**

- **COVERS:** what fine-tuning is good for (format, style, narrow skills, lower cost and latency through smaller models, distillation) and bad for (adding fresh knowledge); the order of operations — prompt, then RAG, then fine-tune; data requirements; maintenance cost; hosted fine-tuning services vs training it yourself.
- **BUILD:** a decision memo for each of three DocPilot capabilities.
- **SHIP:** a justified fine-tuning target for the rest of the phase.

---

**L120 · Day 88 · Fine-Tuning With LoRA and QLoRA · 🎥 55 m · 💻 75 m**

- **COVERS:** full fine-tuning vs parameter-efficient fine-tuning; LoRA — a low-rank update W + BA, rank r, alpha, target modules; QLoRA — a 4-bit base model with LoRA adapters; chat templates and masking the loss on prompt tokens; hyperparameters (learning rate, epochs, batch size); signs of overfitting; merging adapters vs serving them separately; tools (Hugging Face PEFT and TRL, Unsloth, Axolotl).
- **BUILD:** QLoRA fine-tune a small open model on 1,000 triage examples on a free or cheap GPU; evaluate it against the base model and the API model.
- **SHIP:** a fine-tuned adapter with an eval comparison.

---

**L121 · Day 89 · Data for Fine-Tuning: Curation, Synthetic Data and Distillation · 🎥 50 m · 💻 60 m**

- **COVERS:** quality over quantity; deduplication and decontamination against eval sets; synthetic data from a stronger model (distillation) and the provider terms that govern it; filtering with judges; diversity; formatting conversations; keeping a held-out set; versioning training data.
- **BUILD:** distil 3,000 high-quality triage examples from the large model, filter them with a judge, retrain, and compare with L120.
- **SHIP:** a data pipeline whose output measurably beats the first dataset.

---

**L122 · Day 90 · Preference Tuning: DPO and Its Relatives · 🎥 50 m · 💻 60 m**

- **COVERS:** why supervised fine-tuning can't teach "better vs worse"; preference pairs (chosen and rejected); the DPO objective and its β parameter; relatives (IPO, KTO, ORPO, SimPO) at a high level; collecting preferences from users or a judge; reward hacking and over-optimisation; evaluation.
- **BUILD:** build 500 preference pairs for answer style, run DPO with TRL on your fine-tuned model, and evaluate with your judge.
- **SHIP:** a DPO-tuned model with a measured preference win rate.

---

**L123 · Day 91 · Reinforcement Fine-Tuning With Verifiable Rewards · 🎥 50 m · 💻 50 m**

- **COVERS:** reinforcement learning with verifiable rewards (RLVR) — rewarding outcomes a program can check (a correct answer, passing tests, valid JSON); GRPO — group-relative advantages without a value network; reward design and reward hacking; compute requirements; hosted reinforcement fine-tuning services; when it is worth it for an application.
- **BUILD:** a small GRPO run with TRL on a tiny model, with a programmatic reward for valid and correct triage JSON.
- **SHIP:** a reward curve and a before-and-after eval, with honest notes on cost.

---

**L124 · Day 92 · Milestone: Distil DocPilot's Triage Into a Small Open Model · 🎥 30 m · 💻 150 m**

- **COVERS:** integrating Phase 11 — data distillation, QLoRA, evaluation, quantisation and serving.
- **BUILD:** serve the fine-tuned small model with vLLM or Ollama, route triage traffic to it, and compare cost, latency and accuracy with the API model.
- **SHIP:** a production-ready small model with an A/B comparison.

---

## PHASE 12 — Frontier Patterns and Capstone
**Days 93–100 · L125–L133**

The newest patterns — voice, long-running agents, skills, generative interfaces — then a four-day capstone that uses everything in the course.

---

**L125 · Day 93 · Voice Agents: Speech-to-Text, Text-to-Speech and Realtime Models · 🎥 50 m · 💻 50 m**

- **COVERS:** the cascaded pipeline (speech-to-text, LLM, text-to-speech) vs speech-to-speech realtime models; the latency budget for natural conversation; voice activity detection, turn-taking and barge-in; streaming at every stage; telephony and WebRTC transports; evaluating voice agents; voice-agent frameworks.
- **BUILD:** a voice front end for DocPilot using a streaming cascaded pipeline; measure the time from end of speech to first audio.
- **SHIP:** a voice demo with a measured latency budget.

---

**L126 · Day 94 · Context Engineering for Long-Running Agents · 🎥 50 m · 💻 50 m**

- **COVERS:** agents that work for hours; just-in-time context (keep file paths and queries, load content only when needed); structured note-taking and progress files; compaction strategies; subagents as context isolation; clearing old tool results; project instruction and memory files; measuring context efficiency.
- **BUILD:** refactor the research agent to keep a notes file, use subagents for searches and compact automatically; compare tokens used and success rate on long tasks.
- **SHIP:** a long-running agent that uses fewer tokens at the same success rate.

---

**L127 · Day 95 · Agent Skills: Packaging Reusable Capabilities · 🎥 40 m · 💻 45 m**

- **COVERS:** packaging instructions, scripts and resources as skills an agent loads on demand (progressive disclosure); skills vs tools vs MCP servers vs system prompts; writing a skill description the agent can match against tasks; versioning and sharing skills; reviewing third-party skills for security.
- **BUILD:** two skills for DocPilot ("write a Kubernetes troubleshooting runbook", "file a well-formed bug report"), tested with an agent.
- **SHIP:** reusable skills with tests.

---

**L128 · Day 95 · Generative UI and Agent-Driven Interfaces · 🎥 40 m · 💻 40 m**

- **COVERS:** models that return interface elements, not just text (structured components); tool calls that render components; streaming UI updates; protocols between agents and front ends; rendering model output safely (no raw HTML injection); when generative UI actually helps users.
- **BUILD:** render DocPilot's answers as components (step lists, code blocks, version tables) from structured output.
- **SHIP:** a richer UI driven by structured model output.

---

**L129 · Day 96 · Where the Field Is Heading: Open Problems in AI Engineering · 🎥 40 m · 💻 20 m**

- **COVERS:** the reliability of long-horizon agents; evaluating open-ended work; securing agents with real permissions; cost curves and on-device models; memory and continual learning; interoperability standards; how to keep learning — papers, changelogs, small experiments of your own.
- **BUILD:** your own learning plan for the next 12 months, with three experiments to run.
- **SHIP:** a personal roadmap.

---

**L130 · Day 97 · Capstone I: Scope, Architecture and Eval Plan · 🎥 30 m · 💻 150 m**

- **COVERS:** choosing a capstone (extend DocPilot, or a new domain with your own data); a one-page specification; success metrics and the eval set written first; architecture and risk review.
- **BUILD:** the specification, an architecture diagram, a 100-item eval set and a threat model.
- **SHIP:** a reviewed capstone plan.

---

**L131 · Day 98 · Capstone II: Build · 🎥 30 m · 💻 240 m**

- **COVERS:** building the system from the course's components — retrieval, tools, an agent loop, guardrails and observability.
- **BUILD:** a working end-to-end system with tracing.
- **SHIP:** the first full eval run.

---

**L132 · Day 99 · Capstone III: Evaluate, Red-Team and Harden · 🎥 30 m · 💻 180 m**

- **COVERS:** error analysis, fixes, red teaming, load and cost testing.
- **BUILD:** two improvement iterations driven by evals, a red-team pass and a load test.
- **SHIP:** a final eval report with before-and-after numbers.

---

**L133 · Day 100 · Capstone IV: Ship, Write Up and Demo · 🎥 30 m · 💻 120 m**

- **COVERS:** deploying; writing a technical write-up (problem, design, evals, results, limits); recording a demo; what you would do next.
- **BUILD:** the deployed capstone, a README, a write-up and a five-minute demo.
- **SHIP:** a portfolio-ready AI engineering project.

---

# APPENDIX A — Stack and Conventions

- **Repository layout:** `docpilot/` (package), `prompts/` (versioned prompt files), `evals/` (datasets, judges, reports), `ingest/` (parsing, chunking, enrichment), `services/` (API, search, MCP server), `infra/` (Docker, CI), `lab/` (model probes from Phase 1).
- **Model IDs used in examples:** `claude-sonnet-5-5` (default), `claude-haiku-5-5` (routing, enrichment, bulk work), `claude-opus-5-5` (hardest reasoning, data generation for distillation). Open models are called through OpenAI-compatible endpoints.
- **Logging contract:** every model call records timestamp, feature, prompt version, model, input tokens, cached input tokens, output tokens, latency, cost estimate and trace ID.
- **Budgets:** each feature has a per-request token budget and a monthly cost alert from Phase 0 onwards.
- **Version caution:** SDK parameters, model names, framework APIs and prices change quickly. Each lesson names what was current when written and tells you to check the provider's documentation before relying on a specific parameter.

# APPENDIX B — Reading List

- **Books:** Chip Huyen, *AI Engineering* (O'Reilly, 2025) · Jay Alammar & Maarten Grootendorst, *Hands-On Large Language Models* (O'Reilly, 2024) · John Berryman & Albert Ziegler, *Prompt Engineering for LLMs* (O'Reilly, 2024) · Manning, Raghavan & Schütze, *Introduction to Information Retrieval* (free online).
- **Essays and guides:** Anthropic, "Building effective agents" (2024) and "Effective context engineering for AI agents" (2025) · Eugene Yan, "Patterns for Building LLM-based Systems & Products" (2023) · Hamel Husain's writing on evals and error analysis · Simon Willison's writing on prompt injection.
- **Specifications and docs:** the Model Context Protocol specification · the Anthropic, OpenAI and Google model API documentation · the OpenTelemetry GenAI semantic conventions · the OWASP Top 10 for LLM Applications.
- **Papers:** Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (2020) · Yao et al., "ReAct" (2022) · Hu et al., "LoRA" (2021) · Dettmers et al., "QLoRA" (2023) · Rafailov et al., "Direct Preference Optimization" (2023) · Kwon et al., "Efficient Memory Management for Large Language Model Serving with PagedAttention" (2023) · Edge et al., "From Local to Global: A Graph RAG Approach to Query-Focused Summarization" (2024) · Khattab & Zaharia, "ColBERT" (2020).
