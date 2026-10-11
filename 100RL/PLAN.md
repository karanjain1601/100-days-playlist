# 130 Days of Reinforcement Learning — Full Playlist Curriculum

A complete beginner → research-level RL syllabus, structured as **130 lessons**. Every lesson has a target runtime and a hands-on time budget, so you can plan recording (or watching) day by day.

---

## How this is structured

| | |
| --- | --- |
| **Total lessons** | 130 |
| **Schedule** | 5 lessons/week × 26 weeks (~6 months), or 130 consecutive days (~4.3 months) |
| **Avg video runtime** | 38 min |
| **Total video runtime** | ~82 hours |
| **Avg hands-on per lesson** | 75 min |
| **Total learner commitment** | ~245 hours |
| **Coding projects** | 8 (7 milestone + 1 capstone) |

**Column key**

- **Video** — target runtime for the lesson video.
- **Practice** — coding/exercise time the viewer should spend after watching.

**Suggested video anatomy** (scale proportionally):

1. Recap of yesterday — 2 min
2. Intuition / motivating problem — 5 min
3. Formal treatment (math on screen) — 15 min
4. Line-by-line code walkthrough — 12 min
5. Results, failure modes, "what breaks and why" — 4 min
6. Exercise assignment + tomorrow's teaser — 2 min

---

## Timeline at a glance

| Module | Theme | Days | Weeks | Video hrs |
| --- | --- | --- | --- | --- |
| 0 | Foundations & Tooling | 1–9 | 1–2 | 5.0 |
| 1 | Multi-Armed Bandits | 10–17 | 2–4 | 4.5 |
| 2 | Markov Decision Processes | 18–27 | 4–6 | 6.0 |
| 3 | Dynamic Programming | 28–34 | 6–7 | 4.5 |
| 4 | Monte Carlo Methods | 35–41 | 7–9 | 4.5 |
| 5 | Temporal-Difference Learning | 42–53 | 9–11 | 7.5 |
| 6 | Planning, Models & Search | 54–60 | 11–12 | 4.5 |
| 7 | Function Approximation | 61–69 | 13–14 | 6.0 |
| 8 | Deep Value-Based RL | 70–81 | 14–17 | 8.5 |
| 9 | Policy Gradient & Actor-Critic | 82–96 | 17–20 | 10.5 |
| 10 | Model-Based Deep RL & Search | 97–101 | 20–21 | 3.5 |
| 11 | Exploration | 102–105 | 21 | 2.5 |
| 12 | Imitation & Offline RL | 106–112 | 22–23 | 5.0 |
| 13 | Hierarchy, Meta, Multi-Agent, Scale | 113–121 | 23–25 | 6.5 |
| 14 | Safety, LLMs & Applications | 122–128 | 25–26 | 5.0 |
| 15 | Capstone | 129–130 | 26 | 1.5 |

---

# Module 0 — Foundations & Tooling

**Days 1–9 · Weeks 1–2 · ~5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 1 | What Reinforcement Learning Actually Is | Agent–environment loop · state, action, reward, policy · the reward hypothesis · trial-and-error + delayed credit assignment · sequential decision making vs one-shot prediction · full series roadmap and what you'll build | 30m | 30m |
| 2 | RL vs Everything Else | Supervised vs unsupervised vs RL · why labels don't exist here · exploration as the defining difficulty · imitation learning and where it sits · when RL is the wrong tool (and it usually is) · landmark results: TD-Gammon, Atari DQN, AlphaGo, OpenAI Five, RLHF | 35m | 30m |
| 3 | Probability You Genuinely Need | Random variables · discrete vs continuous distributions · joint/marginal/conditional · expectation and linearity · variance and covariance · law of total expectation · conditional expectation as the engine of every Bellman equation · law of large numbers, Monte Carlo estimation | 45m | 90m |
| 4 | Linear Algebra & Calculus Toolkit | Vectors, matrices, matrix–vector products · eigenvalues and spectral radius (for convergence proofs) · norms (L1, L2, L∞ — the sup norm matters later) · derivatives, partial derivatives, gradients · chain rule and Jacobians · what "taking a gradient through an expectation" means | 45m | 90m |
| 5 | Optimization for RL | Objective functions · convex vs non-convex landscapes · gradient descent · stochastic gradient descent and minibatches · momentum, RMSProp, Adam · learning-rate schedules · Robbins–Monro conditions for stochastic approximation · why RL optimization is non-stationary | 40m | 60m |
| 6 | Stochastic Processes & Markov Chains | Stochastic processes · the Markov property · transition matrices · n-step transitions · irreducibility, aperiodicity, ergodicity · stationary distributions · absorbing states · hands-on chain simulation | 40m | 75m |
| 7 | Python, NumPy & Experiment Hygiene | Environment setup (conda/uv) · NumPy vectorization for value tables · seeding everything (Python, NumPy, Torch, env) · logging with TensorBoard/W&B · running multiple seeds · confidence intervals and shaded-region plots · why single-seed RL results are meaningless | 40m | 90m |
| 8 | Gymnasium Deep Dive | Installing Gymnasium · `reset`/`step`/`render` API · observation and action spaces (Discrete, Box, MultiDiscrete) · terminated vs truncated · wrappers (TimeLimit, FrameStack, Normalize, RecordVideo) · vectorized environments · writing a custom environment from scratch | 45m | 105m |
| 9 | PyTorch Crash Course for RL | Tensors and devices · autograd and computation graphs · `nn.Module`, layers, initialization · loss functions and optimizers · `detach()` and why it's everywhere in RL · gradient clipping · saving/loading checkpoints · a tiny end-to-end training loop | 45m | 105m |

---

# Module 1 — Multi-Armed Bandits

**Days 10–17 · Weeks 2–4 · ~4.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 10 | The k-Armed Bandit Problem | Formal setup · true action values q*(a) · the exploration–exploitation dilemma stated precisely · regret and cumulative regret · why bandits are RL with one state · real applications: A/B tests, clinical trials, ad selection | 30m | 45m |
| 11 | Action-Value Estimation & ε-Greedy | Sample-average estimation · greedy action selection and its failure · ε-greedy · the 10-armed testbed · building the testbed yourself · comparing ε = 0, 0.01, 0.1 · asymptotic vs early performance tradeoff | 40m | 90m |
| 12 | Incremental Updates & Nonstationarity | Incremental mean update rule · the universal `NewEstimate ← OldEstimate + α[Target − OldEstimate]` form · constant step-size α · exponential recency-weighted average · tracking a drifting bandit · Robbins–Monro convergence conditions and why constant α violates them | 35m | 75m |
| 13 | Optimistic Initial Values | Optimism as implicit exploration · effect of initial Q values · why it only works for stationary problems · interaction with constant α · spike-then-settle behavior in learning curves | 25m | 45m |
| 14 | Upper Confidence Bound (UCB) | Uncertainty-aware selection · the UCB formula and each term's role · confidence-interval intuition · Hoeffding's inequality sketch · c hyperparameter sweep · UCB vs ε-greedy empirically · why UCB struggles in large/nonstationary problems | 40m | 75m |
| 15 | Gradient Bandit Algorithms | Action preferences H(a) · softmax/Boltzmann distribution · stochastic gradient ascent on expected reward · the baseline term and its variance reduction · full derivation · effect of removing the baseline | 40m | 75m |
| 16 | Bayesian Bandits & Thompson Sampling | Beta–Bernoulli conjugacy · posterior over each arm · probability matching · Thompson sampling algorithm · posterior-sampling intuition · Bayesian vs frequentist exploration · comparison against UCB | 35m | 75m |
| 17 | Contextual Bandits + **PROJECT 1** | Contexts/features per round · LinUCB · personalization and recommendation use cases · bridge from bandits to full RL (contexts become states, actions affect future states) · **Project: build the full 10-armed testbed comparing ε-greedy, optimistic, UCB, gradient bandit, and Thompson sampling across 2000 runs** | 45m | 180m |

---

# Module 2 — Markov Decision Processes

**Days 18–27 · Weeks 4–6 · ~6 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 18 | Markov Chains → Markov Reward Processes | Markov property restated formally · state transition matrix P · adding a reward function R · the MRP tuple ⟨S, P, R, γ⟩ · sampling episodes from an MRP · computing state values by simulation | 35m | 60m |
| 19 | Returns & Discounting | Return G_t · episodic vs continuing tasks · why we discount (convergence, uncertainty, financial analogy) · γ = 0 vs γ → 1 behavior · effective horizon ≈ 1/(1−γ) · the recursive identity G_t = R_{t+1} + γG_{t+1} · unified notation with absorbing states | 35m | 60m |
| 20 | The MDP Formalism | The tuple ⟨S, A, P, R, γ⟩ · p(s′, r \| s, a) as the complete dynamics · deriving marginals from it · finite vs infinite vs continuous MDPs · the agent–environment boundary (where to draw it) · goals as rewards, and how badly this can go wrong | 40m | 60m |
| 21 | Policies | Deterministic π(s) vs stochastic π(a\|s) · stationary vs non-stationary · why stochastic policies are sometimes strictly better · policy space size · representing policies as tables · the induced Markov chain P^π | 30m | 60m |
| 22 | State-Value & Action-Value Functions | Definition of v_π(s) · definition of q_π(s,a) · the relationship between them · advantage function A(s,a) = q(s,a) − v(s) · backup diagrams as a visual grammar · estimating both by sampling in a gridworld | 40m | 90m |
| 23 | Bellman Expectation Equations | Deriving v_π recursively from the return · deriving q_π · the four-way relationship (v↔q, one-step and two-step backups) · matrix form v_π = R^π + γP^π v_π · backup diagrams for each · worked numerical example | 45m | 90m |
| 24 | Optimality & Bellman Optimality Equations | Partial ordering over policies · existence of an optimal policy · v* and q* · the Bellman optimality equations (max instead of expectation) · why they're nonlinear · extracting π* greedily from v* and from q* · why q* is more convenient | 45m | 90m |
| 25 | Solving MDPs Exactly | Solving v_π = (I − γP^π)^{-1} R^π · computational cost O(n³) · solving the optimality equations by nonlinear system / LP formulation · why exact solutions don't scale · existence of a deterministic optimal policy (proof sketch) | 35m | 75m |
| 26 | Reward Design & Shaping | Sparse vs dense rewards · reward hacking with real examples · potential-based reward shaping F = γΦ(s′) − Φ(s) · Ng's policy-invariance theorem · why arbitrary shaping changes the optimal policy · designing rewards for a custom env | 40m | 75m |
| 27 | Beyond the Standard MDP | POMDPs and belief states · SMDPs and temporal abstraction · average-reward formulation and differential value functions · continuing tasks without discounting · constrained MDPs (preview) · a map of which extension you'll need when | 35m | 45m |

---

# Module 3 — Dynamic Programming

**Days 28–34 · Weeks 6–7 · ~4.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 28 | Iterative Policy Evaluation | Turning the Bellman expectation equation into an update rule · synchronous sweeps · two-array vs in-place · stopping criterion (max Δ < θ) · convergence to v_π · full gridworld walkthrough with printed value tables each sweep | 40m | 90m |
| 29 | Policy Improvement | Acting greedily w.r.t. v_π · the policy improvement theorem with proof · strict improvement unless already optimal · handling ties · improvement for stochastic policies · visualizing improved policies on a gridworld | 40m | 75m |
| 30 | Policy Iteration | Alternating evaluation and improvement · the full algorithm · finite convergence guarantee · why it terminates in few iterations in practice · worked example: Jack's Car Rental · computational profile | 40m | 105m |
| 31 | Value Iteration | Collapsing evaluation to a single sweep · the value iteration update · relationship to policy iteration · modified policy iteration (k sweeps) · Gambler's Problem walkthrough · comparing iteration counts and wall-clock against policy iteration | 40m | 105m |
| 32 | Why DP Converges | The Bellman operator as a mapping · γ-contraction under the sup norm · Banach fixed-point theorem · uniqueness of v* · error bounds ‖v_k − v*‖ ≤ γ^k‖v_0 − v*‖/(1−γ) · policy loss bounds from value error | 40m | 60m |
| 33 | Asynchronous DP & GPI | In-place updates · prioritized sweeping · real-time DP (updating only visited states) · Generalized Policy Iteration as the unifying frame for the entire course · the curse of dimensionality quantified · when DP is actually usable | 35m | 60m |
| 34 | **PROJECT 2** — Build a DP Suite | Implement policy evaluation, policy iteration, and value iteration from scratch · run on Gridworld, FrozenLake (deterministic and slippery), Jack's Car Rental, Gambler's Problem · plot value functions as heatmaps and policies as arrow fields · benchmark iteration counts vs γ | 30m | 180m |

---

# Module 4 — Monte Carlo Methods

**Days 35–41 · Weeks 7–9 · ~4.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 35 | Monte Carlo Prediction | Learning from complete episodes with no model · first-visit MC · every-visit MC · the difference in bias/consistency · incremental implementation · why MC needs episodic tasks · running MC on Blackjack states | 40m | 90m |
| 36 | MC Estimation of Action Values | Why v alone is useless without a model · estimating q_π(s,a) · the problem of unvisited state–action pairs · the exploring starts assumption and why it's unrealistic · maintaining visit counts | 30m | 60m |
| 37 | MC Control with Exploring Starts | GPI with Monte Carlo evaluation · the MCES algorithm · convergence discussion (and what's still unproven) · full implementation on Blackjack · visualizing the learned policy surface | 35m | 90m |
| 38 | On-Policy MC Control with ε-Soft Policies | ε-greedy as an ε-soft policy · dropping exploring starts · the policy improvement theorem for ε-soft policies · the ε-soft optimality caveat · GLIE conditions · decaying ε schedules | 40m | 90m |
| 39 | Off-Policy Prediction & Importance Sampling | Behavior policy b vs target policy π · the coverage assumption · the importance-sampling ratio ρ · ordinary importance sampling (unbiased, unbounded variance) · weighted importance sampling (biased, far lower variance) · a concrete infinite-variance example | 45m | 90m |
| 40 | Incremental & Per-Decision IS | Incremental weighted IS update rule · the running-weight trick · off-policy MC control algorithm · per-decision importance sampling · discounting-aware IS · the tail-collapse problem in long episodes | 40m | 75m |
| 41 | **PROJECT 3** — Blackjack Agent | Implement first-visit MC prediction, MCES, on-policy ε-soft control, and off-policy weighted IS · reproduce the classic usable-ace/no-usable-ace value surfaces · compare sample efficiency across all four · evaluate against the known optimal basic strategy | 30m | 180m |

---

# Module 5 — Temporal-Difference Learning

**Days 42–53 · Weeks 9–11 · ~7.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 42 | TD(0) Prediction | Learning from incomplete episodes · the TD target R + γV(S′) · TD error δ · bootstrapping defined · the update rule · online, fully incremental learning · random-walk example comparing TD and MC learning curves | 40m | 90m |
| 43 | TD vs MC vs DP | The bias–variance tradeoff laid out precisely · TD is biased but low-variance; MC is unbiased but high-variance · sample vs expected updates · batch TD vs batch MC and the certainty-equivalence estimate · why TD converges faster on Markov problems · the AB example | 45m | 75m |
| 44 | SARSA — On-Policy TD Control | The (S, A, R, S′, A′) quintuple · the SARSA update · GPI with TD · convergence conditions · Windy Gridworld walkthrough · why SARSA learns "safe" paths | 40m | 90m |
| 45 | Q-Learning — Off-Policy TD Control | The max in the target · off-policy learning without importance sampling (and why that works here) · the algorithm · convergence proof sketch (Watkins & Dayan) · Cliff Walking: Q-learning's optimal-but-risky path vs SARSA's safe path | 45m | 105m |
| 46 | Expected SARSA | Replacing the sample of A′ with its expectation · variance elimination · Expected SARSA as a generalization covering Q-learning · larger stable step sizes · empirical comparison on Cliff Walking across α values | 30m | 75m |
| 47 | Maximization Bias & Double Q-Learning | Why max over noisy estimates is systematically optimistic · the maximization-bias example MDP · Double Q-learning with two independent tables · decoupling action selection from evaluation · demonstrating the bias and its removal | 40m | 90m |
| 48 | n-Step TD Prediction | The n-step return · unifying MC (n = ∞) and TD (n = 1) · the n-step update · the delay/bootstrapping tradeoff · sweeping n on the 19-state random walk · choosing n in practice | 40m | 90m |
| 49 | n-Step Control & Tree Backup | n-step SARSA · n-step Expected SARSA · off-policy n-step with importance sampling · the n-step tree-backup algorithm (off-policy without IS) · the n-step Q(σ) unification · gridworld speedup demonstration | 45m | 90m |
| 50 | Eligibility Traces I — The Forward View | The λ-return as a geometric average of all n-step returns · λ = 0 recovers TD(0), λ = 1 recovers MC · the offline λ-return algorithm · why the forward view is not implementable online · truncated λ-returns | 40m | 75m |
| 51 | Eligibility Traces II — The Backward View | Eligibility trace vector e_t · accumulating traces · replacing traces · dutch traces · the online TD(λ) algorithm · the forward/backward equivalence proof sketch · trace decay visualization on a corridor task | 45m | 90m |
| 52 | SARSA(λ), Q(λ) & True Online TD(λ) | SARSA(λ) with traces · Watkins's Q(λ) and trace cutting on exploratory actions · Peng's Q(λ) · true online TD(λ) and exact equivalence to the forward view · practical guidance on λ selection | 40m | 90m |
| 53 | **PROJECT 4** — Tabular Control Zoo | Implement SARSA, Q-learning, Expected SARSA, Double Q-learning, n-step SARSA, and SARSA(λ) in one framework · benchmark on Cliff Walking, Windy Gridworld (with/without king's moves), Taxi-v3, and FrozenLake · produce a single comparison figure with confidence bands over 50 seeds | 35m | 210m |

---

# Module 6 — Planning, Models & Search

**Days 54–60 · Weeks 11–12 · ~4.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 54 | Models, Planning & Learning | Distribution models vs sample models · planning as computation using a model · background planning vs decision-time planning · the unified view: learning and planning use the same updates · sample efficiency motivation | 35m | 60m |
| 55 | Dyna-Q | Learning a tabular model from experience · interleaving real steps with n simulated planning steps · the Dyna architecture diagram · effect of planning steps on learning curves (n = 0, 5, 50) · the maze experiment | 40m | 105m |
| 56 | Dyna-Q+ & Changing Environments | Model staleness · the blocking maze and shortcut maze experiments · the exploration bonus κ√τ · why Dyna-Q fails to find new shortcuts · optimism under nonstationarity · Dyna-Q+ implementation | 35m | 90m |
| 57 | Prioritized Sweeping | The problem with uniform simulated-state sampling · priority queues keyed by TD-error magnitude · backward focusing through predecessor states · the algorithm · orders-of-magnitude speedup on large mazes · stochastic-environment variant | 40m | 90m |
| 58 | Expected vs Sample Updates & Trajectory Sampling | Comparing expected and sample updates under a compute budget · the branching-factor analysis · uniform vs on-policy distribution of updates · trajectory sampling · Real-Time DP and its convergence guarantee for undiscounted tasks | 35m | 60m |
| 59 | Monte Carlo Tree Search | Decision-time planning · the four phases: selection, expansion, simulation, backup · the tree policy vs rollout policy · UCT and the UCB1 selection rule · anytime behavior · tree reuse between moves · handling stochasticity | 45m | 105m |
| 60 | **PROJECT 5** — MCTS Game Agent | Build a general MCTS engine · plug in Tic-Tac-Toe, then Connect Four · tune the exploration constant · measure strength vs simulation budget · add tree reuse and a simple domain heuristic rollout · play against it | 30m | 180m |

---

# Module 7 — Function Approximation

**Days 61–69 · Weeks 13–14 · ~6 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 61 | Why Function Approximation | Tabular methods die past ~10⁶ states · generalization across states · the parameter vector w · v̂(s, w) ≈ v_π(s) · the Value Error objective VE with state distribution μ · partial observability handled implicitly · the on-policy distribution | 35m | 60m |
| 62 | SGD & Semi-Gradient Methods | Stochastic gradient descent on VE · Monte Carlo gradient descent (a true gradient method) · why the TD target makes it *semi*-gradient · what convergence guarantees you lose · semi-gradient TD(0) algorithm · state aggregation as the simplest approximator | 45m | 90m |
| 63 | Linear Function Approximation | Feature vectors x(s) · linear v̂ = wᵀx · the gradient is just x(s) · convergence of linear semi-gradient TD to the TD fixed point · the error bound relative to the minimum VE · why linear FA is the only case with clean theory | 40m | 90m |
| 64 | Feature Construction I | State aggregation revisited · polynomial bases and their scaling problems · Fourier bases (order, coupling, why they work well) · feature normalization · manual feature engineering examples · interaction terms | 40m | 90m |
| 65 | Feature Construction II — Tile Coding & RBFs | Coarse coding and generalization width · tile coding: tilings, offsets, asymmetric offsets · computational efficiency and hashing · radial basis functions · comparing generalization behavior · implementing a tile coder | 45m | 105m |
| 66 | Least-Squares Methods | LSTD: solving for the TD fixed point directly · data efficiency vs O(d²) cost · Sherman–Morrison incremental inverse · LSPI (least-squares policy iteration) · when LSTD beats SGD and when it's infeasible | 35m | 75m |
| 67 | Control with Function Approximation | Semi-gradient SARSA with FA · action-value features x(s,a) · ε-greedy over approximate values · full Mountain Car walkthrough with tile coding · cost-to-go surface visualization · effect of α and number of tilings | 45m | 120m |
| 68 | Continuing Tasks & Average Reward | Why discounting is problematic with FA in continuing tasks · the average-reward setting · differential value functions · differential semi-gradient SARSA · the access-control queuing example · the futility of discounting argument | 35m | 60m |
| 69 | The Deadly Triad & Off-Policy Stability | Function approximation + bootstrapping + off-policy = divergence · Baird's counterexample implemented and watched to explode · the projected Bellman error · Gradient-TD methods (GTD2, TDC) · emphatic TD · practical mitigations used in deep RL | 45m | 90m |

---

# Module 8 — Deep Value-Based RL

**Days 70–81 · Weeks 14–17 · ~8.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 70 | Neural Networks as Value Approximators | MLPs and CNNs for RL · architecture choices for state vs pixel inputs · weight initialization · activation functions · normalization (and why BatchNorm misbehaves in RL) · the non-stationary target problem stated clearly | 40m | 90m |
| 71 | DQN — The Core Algorithm | From tabular Q-learning to a Q-network · the loss function · one output head per action · the training loop · why naive online deep Q-learning diverges · the 2013/2015 papers in context | 45m | 105m |
| 72 | Experience Replay | Breaking temporal correlation · i.i.d.-ifying the data · buffer capacity and its effect · sampling uniformly · off-policy-ness of replay · circular buffer implementation · memory-efficient frame storage · replay ratio | 40m | 90m |
| 73 | Target Networks & Stabilization | The moving-target problem · hard target updates every C steps · Polyak/soft updates τ · huber loss vs MSE · gradient clipping · reward clipping · ablation: what happens when you remove each | 40m | 90m |
| 74 | The Atari Pipeline | Grayscale conversion, downsampling to 84×84 · frame stacking for velocity · action repeat / frame skip · max-pooling over frames for flicker · episodic-life wrapper · no-op starts and sticky actions · the standard 30-min evaluation protocol · human-normalized scores | 40m | 90m |
| 75 | Double DQN | Maximization bias in the deep setting · using the online net to select and the target net to evaluate · the minimal code change · value-estimate plots showing overestimation and its correction · Atari score improvements | 35m | 75m |
| 76 | Dueling Networks | Decomposing Q into V(s) + A(s,a) · the identifiability problem · the mean-subtraction aggregator · why it helps when actions don't matter much · saliency-map evidence · architecture diagram and implementation | 35m | 75m |
| 77 | Prioritized Experience Replay | Sampling by TD-error magnitude · proportional vs rank-based prioritization · the sum-tree data structure · importance-sampling weights to correct the induced bias · annealing β · hyperparameters α and β · implementation walkthrough | 45m | 105m |
| 78 | Multi-Step Returns & Noisy Nets | n-step targets in the deep off-policy setting · the (usually ignored) off-policy correction issue · why n = 3 is the sweet spot · NoisyNet layers with learnable noise · state-dependent exploration replacing ε-greedy · factorized Gaussian noise | 40m | 90m |
| 79 | Distributional RL — C51 | Modeling the full return distribution Z(s,a) instead of its mean · the categorical representation with 51 atoms · the distributional Bellman operator · the projection step Φ · cross-entropy loss · why distributional learning helps even when you only act on the mean | 50m | 105m |
| 80 | QR-DQN, IQN & Rainbow | Quantile regression as an alternative representation · the quantile Huber loss · implicit quantile networks and risk-sensitive policies · Rainbow: combining all six extensions · the ablation study — which components actually matter | 45m | 90m |
| 81 | **PROJECT 6** — Ship a DQN + Debugging Playbook | CartPole → LunarLander → a single Atari game · implement replay, target nets, Double, Dueling, and PER · the deep-RL debugging checklist: is the loss meaningful? are Q-values exploding? is the replay buffer diverse? is the env wrapper wrong? · seed sensitivity study | 40m | 240m |

---

# Module 9 — Policy Gradient & Actor-Critic

**Days 82–96 · Weeks 17–20 · ~10.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 82 | Why Learn a Policy Directly | Limitations of value-based methods · continuous action spaces · stochastic optimal policies (aliased gridworld example) · smoother convergence · softmax parameterization for discrete actions · Gaussian parameterization for continuous actions · the objective J(θ) | 40m | 75m |
| 83 | The Policy Gradient Theorem | Full derivation from first principles · the log-derivative / REINFORCE trick · why the state distribution's gradient vanishes · the score function ∇log π(a\|s) · the final elegant form · interpreting it as weighted maximum likelihood | 50m | 90m |
| 84 | REINFORCE | Monte Carlo policy gradient · the algorithm step by step · sample-based gradient estimation · the high-variance problem quantified · discounting subtleties in the update · implementing REINFORCE on CartPole and watching it wobble | 40m | 105m |
| 85 | Baselines & Variance Reduction | Subtracting a state-dependent baseline · proof that it leaves the gradient unbiased · learned value-function baseline · REINFORCE with baseline algorithm · reward-to-go · advantage normalization · variance measurements before and after | 40m | 90m |
| 86 | Actor–Critic Fundamentals | Replacing the MC return with a bootstrapped critic · the bias–variance dial · one-step actor–critic · the two loss terms and shared vs separate networks · entropy regularization for exploration · compatible function approximation | 45m | 105m |
| 87 | A2C & A3C | Synchronous advantage actor–critic with parallel environments · batch construction and rollout length · A3C's asynchronous gradient updates and Hogwild! · why A2C matched A3C in practice · vectorized-env implementation | 45m | 105m |
| 88 | Generalized Advantage Estimation | The λ-return applied to advantages · deriving GAE(γ, λ) · exponentially-weighted sum of TD errors · the bias–variance tradeoff via λ · the efficient backward-pass implementation · typical λ = 0.95 and why · GAE ablation | 45m | 90m |
| 89 | Natural Policy Gradients | The problem with Euclidean steps in parameter space · KL divergence as the right metric · the Fisher information matrix · the natural gradient F⁻¹∇J · covariance/reparameterization invariance · conjugate gradient to avoid inverting F | 45m | 75m |
| 90 | TRPO | The surrogate objective and the trust region · monotonic improvement theorem · the KL constraint · conjugate gradient + line search · Fisher-vector products · why TRPO is powerful but painful to implement | 45m | 90m |
| 91 | PPO I — The Clipped Objective | The probability ratio r(θ) · the clipped surrogate objective and its geometry · why clipping approximates a trust region · the KL-penalty variant · multiple epochs over the same batch · the full PPO algorithm | 45m | 105m |
| 92 | PPO II — Implementation Details That Decide Everything | Observation and reward normalization · advantage normalization per batch · orthogonal initialization with specific gains · learning-rate annealing · value-function clipping · gradient clipping at 0.5 · shared vs separate networks · entropy coefficient · the classic "37 details" audit | 50m | 150m |
| 93 | DPG & DDPG | Deterministic policy gradient theorem · why deterministic policies need off-policy exploration · DDPG architecture: actor, critic, both targets · Ornstein–Uhlenbeck vs Gaussian action noise · soft target updates · DDPG's notorious brittleness | 45m | 105m |
| 94 | TD3 | The three fixes: clipped double-Q, delayed policy updates, target policy smoothing · overestimation in actor–critic demonstrated · hyperparameters and defaults · MuJoCo benchmark results vs DDPG · implementation walkthrough | 45m | 105m |
| 95 | Maximum-Entropy RL & SAC | The maximum-entropy objective · soft value functions and the soft Bellman equation · the reparameterization trick for the actor · squashed Gaussian policies and the tanh log-prob correction · twin critics · automatic temperature tuning · why SAC is the default continuous-control baseline | 50m | 120m |
| 96 | **PROJECT 7** — Continuous Control Benchmark | Implement PPO, TD3, and SAC in a shared codebase · benchmark on Pendulum, LunarLanderContinuous, and 2–3 MuJoCo/Brax tasks · 5 seeds each with confidence bands · sample-efficiency vs wall-clock analysis · write up which algorithm you'd pick for which situation | 40m | 300m |

---

# Module 10 — Model-Based Deep RL & Search

**Days 97–101 · Weeks 20–21 · ~3.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 97 | Learning Dynamics Models | Predicting s′ from (s, a) · deterministic vs probabilistic models · predicting deltas instead of absolute states · compounding model error over rollout horizon · ensembles for epistemic uncertainty · PETS and cross-entropy-method planning · model-predictive control loop | 45m | 105m |
| 98 | MBPO & Model-Based Policy Optimization | Short model rollouts branched from real states · the monotonic-improvement bound · combining model data with SAC · the ratio of real to imagined data · why short rollouts beat long ones · sample-efficiency gains on MuJoCo | 40m | 90m |
| 99 | World Models & Dreamer | Learning a latent state space · the recurrent state-space model (RSSM) · training the actor and critic entirely inside imagination · Dreamer v1 → v2 → v3 evolution · symlog predictions and two-hot returns · DreamerV3's single-hyperparameter-set claim | 45m | 90m |
| 100 | AlphaGo → AlphaGo Zero → AlphaZero | Supervised policy net + value net + MCTS in AlphaGo · self-play removing human data in AlphaGo Zero · the unified policy/value network · MCTS as a policy improvement operator · the training loop · AlphaZero's generalization to chess and shogi | 50m | 90m |
| 101 | MuZero | Learning without knowing the rules · the three networks: representation, dynamics, prediction · planning in a learned abstract latent space · why the latent state needn't reconstruct observations · unrolled training targets · MuZero's reach across Atari, Go, and beyond | 45m | 90m |

---

# Module 11 — Exploration

**Days 102–105 · Week 21 · ~2.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 102 | Exploration Theory | Why ε-greedy fails on hard-exploration tasks (Montezuma's Revenge) · regret formulations · optimism in the face of uncertainty · PAC-MDP and sample-complexity bounds · R-MAX and MBIE-EB · the tabular guarantees you're giving up in deep RL | 40m | 60m |
| 103 | Count-Based & Pseudo-Count Exploration | Visit-count bonuses in tabular settings · pseudo-counts from density models · CTS and PixelCNN-based counts · hash-based counts (SimHash) · the exploration-bonus term added to reward · results on hard Atari games | 40m | 90m |
| 104 | Curiosity: ICM & RND | Prediction error as intrinsic reward · the inverse-dynamics feature trick in ICM · the noisy-TV problem · Random Network Distillation: predicting a fixed random network · why RND avoids stochasticity traps · non-episodic intrinsic returns · reward normalization for intrinsic signals | 45m | 105m |
| 105 | Posterior Sampling, NGU & Go-Explore | Bootstrapped DQN with randomized value functions · parameter-space noise · deep exploration vs dithering · Never Give Up's episodic + lifetime novelty · Agent57's adaptive meta-controller · Go-Explore's remember-return-explore loop and its state-archive trick | 40m | 75m |

---

# Module 12 — Imitation & Offline RL

**Days 106–112 · Weeks 22–23 · ~5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 106 | Behavior Cloning & DAgger | Imitation as supervised learning · the compounding-error / covariate-shift problem with quadratic regret · DAgger's iterative expert-query loop · when BC is enough · practical data-collection strategy · implementing BC on a Gym task from expert rollouts | 40m | 105m |
| 107 | Inverse Reinforcement Learning | Recovering reward from demonstrations · the fundamental ambiguity (many rewards explain the same behavior) · feature matching and apprenticeship learning · maximum-entropy IRL and the partition function · Bayesian IRL · when you'd want the reward instead of the policy | 45m | 90m |
| 108 | GAIL & Adversarial Imitation | The GAN analogy: discriminator as learned reward, policy as generator · occupancy-measure matching · the GAIL objective · training stability tricks · AIRL and recovering transferable rewards · comparison against BC on sample efficiency | 40m | 90m |
| 109 | The Offline RL Problem | Learning purely from a fixed dataset · why off-policy algorithms fail offline · distributional shift and out-of-distribution action queries · the extrapolation-error / value-explosion failure mode demonstrated · D4RL benchmark and dataset types (random, medium, expert, replay) | 40m | 90m |
| 110 | Policy-Constraint Methods — BCQ & BEAR | Constraining the learned policy to the data support · BCQ's generative model + perturbation network · BEAR's MMD support-matching constraint · explicit vs implicit constraints · behavior-policy estimation | 40m | 90m |
| 111 | Value-Regularization — CQL & IQL | Conservative Q-Learning: penalizing OOD action values to get a lower bound · the CQL objective and its α term · Implicit Q-Learning: expectile regression that never queries OOD actions · advantage-weighted regression for policy extraction · why IQL is simple and strong | 45m | 105m |
| 112 | Decision Transformer & RL as Sequence Modeling | Casting RL as conditional sequence prediction · return-to-go conditioning · the transformer architecture over (R, s, a) tokens · Trajectory Transformer with beam search · strengths and honest limitations vs value-based offline RL · stitching failure | 40m | 90m |

---

# Module 13 — Hierarchy, Meta, Multi-Agent & Scale

**Days 113–121 · Weeks 23–25 · ~6.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 113 | Hierarchical RL & the Options Framework | Temporal abstraction · an option as ⟨initiation set, policy, termination⟩ · SMDPs revisited · intra-option learning · the option-critic architecture and end-to-end option discovery · the option-collapse problem | 45m | 90m |
| 114 | Goal-Conditioned RL & HER | Universal value function approximators V(s, g) · goal relabeling · Hindsight Experience Replay's core insight · relabeling strategies (final, future, episode, random) · sparse-reward robotics tasks · implementing HER on FetchReach/BitFlipping | 40m | 105m |
| 115 | FeUdal Networks, HIRO & Skill Discovery | Manager–worker architectures with directional goals · HIRO's off-policy correction for changing low-level policies · unsupervised skill discovery: DIAYN and mutual-information objectives · when hierarchy actually pays off | 40m | 75m |
| 116 | Successor Features & Transfer | Successor representation · decoupling dynamics from reward · successor features ψ(s,a) with reward weights w · generalized policy improvement across tasks · fast transfer to new reward functions · connection to neuroscience | 40m | 75m |
| 117 | Meta-RL | Learning to learn · the meta-training/meta-testing protocol · RL² (recurrent policies as learning algorithms) · MAML and gradient-based meta-learning · PEARL and probabilistic context variables · fast adaptation demos · meta-overfitting | 45m | 90m |
| 118 | Multi-Agent RL Foundations | Stochastic/Markov games · joint action spaces · cooperative, competitive, and mixed settings · Nash equilibria and correlated equilibria · the non-stationarity problem from each agent's view · centralized training with decentralized execution (CTDE) | 45m | 75m |
| 119 | MADDPG, QMIX & MAPPO | MADDPG's centralized critics with decentralized actors · value decomposition: VDN's additivity and QMIX's monotonic mixing network · the credit-assignment problem · COMA's counterfactual baseline · MAPPO and why simple PPO is a strong MARL baseline · SMAC benchmark | 45m | 105m |
| 120 | Self-Play, Leagues & Population-Based Training | Naive self-play and strategy cycling · fictitious self-play · AlphaStar's league with main/exploiter/league agents · population-based training for hyperparameters · OpenAI Five's scale and surgery · emergent complexity from competition | 40m | 75m |
| 121 | Distributed RL & Partial Observability | Ape-X's distributed prioritized replay · IMPALA and V-trace off-policy correction · R2D2's recurrent replay and hidden-state storage · SEED RL's centralized inference · DRQN for POMDPs · transformers as memory in RL · burn-in and stored-state strategies | 45m | 90m |

---

# Module 14 — Safety, LLMs & Applications

**Days 122–128 · Weeks 25–26 · ~5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 122 | Safe & Constrained RL | Constrained MDPs with cost functions · the Lagrangian formulation and dual updates · Constrained Policy Optimization (CPO) · Lagrangian PPO/SAC · shielding and safety layers · risk-sensitive objectives (CVaR) · safe exploration during training | 45m | 75m |
| 123 | RLHF I — Reward Modeling from Preferences | Why hand-written rewards fail for language · pairwise preference collection · the Bradley–Terry model · training the reward model · reward-model overoptimization and Goodhart's law · KL penalties against the reference policy | 45m | 75m |
| 124 | RLHF II — PPO for Language Models | The LM as a policy over tokens · token-level vs sequence-level rewards · value head on the transformer · the KL-regularized objective · practical challenges: length bias, mode collapse, reward hacking · the InstructGPT/Claude-style pipeline end to end | 50m | 90m |
| 125 | DPO & Direct Alignment | Deriving DPO from the KL-constrained RLHF objective · eliminating the explicit reward model · the DPO loss · IPO, KTO, ORPO and the variant landscape · DPO vs PPO tradeoffs — when online RL still wins · implementation on a small model | 45m | 105m |
| 126 | GRPO & RL for Reasoning | Group Relative Policy Optimization: dropping the value network and using group-normalized advantages · verifiable rewards (math, code, unit tests) · RLVR · outcome vs process supervision · self-consistency and long chain-of-thought emergence · reward hacking in reasoning tasks | 50m | 90m |
| 127 | RL in Robotics & Sim-to-Real | Simulators (MuJoCo, Isaac, Brax) · the reality gap · domain randomization (visual and dynamics) · system identification · sim-to-real transfer strategies · learning from real-world data safely · dexterous manipulation and locomotion case studies | 45m | 75m |
| 128 | RL in Industry & Honest Evaluation | Recommendation systems and slate/off-policy evaluation · ads and bidding · datacenter cooling, chip placement, inventory and logistics · finance and its pitfalls · off-policy evaluation methods (IPS, doubly robust) · reproducibility crisis in deep RL · the evaluation checklist: seeds, tuned baselines, standard protocols, reporting variance | 45m | 75m |

---

# Module 15 — Capstone

**Days 129–130 · Week 26 · ~1.5 hrs video**

| Day | Lesson | Covered in detail | Video | Practice |
| --- | --- | --- | --- | --- |
| 129 | How to Read, Reproduce & Extend an RL Paper | Reading strategy for RL papers · finding the hyperparameter appendix (it's always the appendix) · identifying unstated implementation details · reproducing baselines before claiming improvements · common reporting failures · building a reading list and staying current | 40m | 90m |
| 130 | **CAPSTONE** — Scope, Build, Evaluate, Publish | Choosing a project: novel env, algorithm comparison, or reproduction · scoping to compute you actually have · the experiment plan and ablation design · evaluation protocol with proper statistics · writing it up · publishing to GitHub with a reproducible README · where to go next | 50m | 600m+ |

---

## Milestone projects summary

| # | Project | Day | Deliverable |
| --- | --- | --- | --- |
| 1 | Bandit testbed | 17 | 5 algorithms, 2000-run averaged comparison |
| 2 | DP suite | 34 | Policy/value iteration on 4 classic MDPs |
| 3 | Blackjack agent | 41 | 4 MC variants + optimal-strategy evaluation |
| 4 | Tabular control zoo | 53 | 6 TD algorithms across 4 environments |
| 5 | MCTS game agent | 60 | Playable Connect Four engine |
| 6 | DQN + debugging playbook | 81 | Working Atari agent, seed-sensitivity study |
| 7 | Continuous control benchmark | 96 | PPO vs TD3 vs SAC, 5 seeds, full writeup |
| 8 | Capstone | 130 | Published, reproducible RL project |

---

## Core reference material to teach from

**Primary text** — Sutton & Barto, *Reinforcement Learning: An Introduction* (2nd ed.). Freely available from the authors. Modules 0–7 map almost chapter-for-chapter.

**Video sources worth linking or building on** — David Silver's UCL RL course, Berkeley CS285 (Deep RL, Levine), Stanford CS234, DeepMind × UCL RL lecture series, Spinning Up in Deep RL (OpenAI).

**Code references** — CleanRL (single-file implementations, ideal for teaching), Stable-Baselines3, Tianshou, and the original author repos for TD3, SAC, and Rainbow.

**Papers by module** — each module's lessons map to 2–5 canonical papers. Pin them in the video description; RL is a field where the original papers are unusually readable.

---

## Notes on running this as a YouTube series

**Playlist structure.** Use one playlist for all 130, plus 16 module sub-playlists. Viewers who only want deep RL should be able to enter at Day 70 without hunting.

**Titling convention.** `Day 47 — Maximization Bias & Double Q-Learning | 130 Days of RL`. The day number front-loads the series identity; the topic keeps it searchable on its own.

**Thumbnails.** Keep a fixed template with the day number large and the module color-coded. Consistency across 130 videos is worth more than any individual thumbnail being clever.

**Pacing reality check.** 82 hours of finished video is roughly 400–800 hours of production at typical educational-content ratios. Batching by module — script 8 lessons, record 8, edit 8 — is far more sustainable than one-at-a-time.

**Retention.** Days 3–5 (the math block) and Days 61–69 (function approximation) are the two most common drop-off points. Front-load a concrete payoff in each: show the agent that these tools will build, before the derivations.

**Every lesson ships code.** The single biggest differentiator for an RL series is a companion repo with one runnable file per lesson. Link it in every description.
