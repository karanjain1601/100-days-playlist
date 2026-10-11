/* 371 Days of AI Research Papers — shared script (generated). Load in <head> before MathJax.
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
  const root = document.documentElement, KEY = 'papers-theme';
  try { const s = localStorage.getItem(KEY); if (s) root.setAttribute('data-theme', s); } catch (e) { /* storage blocked */ }
  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'paper' ? 'slate' : 'paper';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked */ }
  }

  const UNIT = 'Month';
  const OFF = 1;   // display number = index + OFF (Papers months are 1-based)
  // [title, first lesson, last lesson, first day, last day]
  const MODULES = [
    ["Foundations: The Papers Everything Rests On", 1, 30, 1, 30],
    ["Neural Network Fundamentals & Optimization", 31, 60, 31, 60],
    ["Computer Vision I: Backbones and Detection", 61, 90, 61, 90],
    ["Computer Vision II: Dense Prediction, 3D, and the Transformer Takeover", 91, 120, 91, 120],
    ["NLP: From Word Vectors to the Transformer", 121, 150, 121, 150],
    ["LLM Architecture, Efficiency, and Training at Scale", 151, 180, 151, 180],
    ["Alignment, Instruction Following, and Reasoning", 181, 210, 181, 210],
    ["Reinforcement Learning", 211, 240, 211, 240],
    ["Generative Models: VAEs, GANs, and Diffusion", 241, 270, 241, 270],
    ["Multimodal, Speech, Retrieval, Graphs, and Science", 271, 300, 271, 300],
    ["Interpretability, Theory, Robustness, and Privacy", 301, 330, 301, 330],
    ["Compression, Systems, Agents, Evaluation, and the Long View", 331, 371, 331, 371]
  ];
  // [lesson, day, title, video minutes, practice minutes (0 = none)]
  const LESSONS = [
    [1, 1, "Computing Machinery and Intelligence", 35, 0],
    [2, 2, "A Mathematical Theory of Communication", 55, 0],
    [3, 3, "A Logical Calculus of the Ideas Immanent in Nervous Activity", 30, 0],
    [4, 4, "The Perceptron: A Probabilistic Model for Information Storage", 40, 0],
    [5, 5, "Perceptrons (Ch. 1–2, 13)", 45, 0],
    [6, 6, "Adaptive Switching Circuits (ADALINE / LMS)", 30, 0],
    [7, 7, "Nearest Neighbor Pattern Classification", 35, 0],
    [8, 8, "Induction of Decision Trees (ID3)", 35, 0],
    [9, 9, "Bagging Predictors", 30, 0],
    [10, 10, "Random Forests", 40, 0],
    [11, 11, "A Decision-Theoretic Generalization of On-Line Learning (AdaBoost)", 45, 0],
    [12, 12, "Greedy Function Approximation: A Gradient Boosting Machine", 50, 0],
    [13, 13, "XGBoost: A Scalable Tree Boosting System", 45, 0],
    [14, 14, "Support-Vector Networks", 55, 0],
    [15, 15, "A Training Algorithm for Optimal Margin Classifiers (the kernel trick)", 45, 0],
    [16, 16, "A Theory of the Learnable (PAC learning)", 40, 0],
    [17, 17, "On the Uniform Convergence of Relative Frequencies (VC dimension)", 45, 0],
    [18, 18, "Neural Networks and the Bias/Variance Dilemma", 35, 0],
    [19, 19, "Maximum Likelihood from Incomplete Data via the EM Algorithm", 50, 0],
    [20, 20, "Least Squares Quantization in PCM (k-means)", 30, 0],
    [21, 21, "Eigenfaces for Recognition", 40, 0],
    [22, 22, "The Use of Multiple Measurements in Taxonomic Problems (LDA)", 35, 0],
    [23, 23, "A Comparison of Event Models for Naive Bayes Text Classification", 30, 0],
    [24, 24, "A Maximum Entropy Approach to Natural Language Processing", 45, 0],
    [25, 25, "A Tutorial on Hidden Markov Models and Selected Applications in Speech Recognition", 55, 0],
    [26, 26, "A New Approach to Linear Filtering and Prediction Problems", 50, 0],
    [27, 27, "Probabilistic Reasoning in Intelligent Systems (Ch. 3–4, belief propagation)", 50, 0],
    [28, 28, "Equation of State Calculations by Fast Computing Machines (Metropolis)", 45, 0],
    [29, 29, "Stochastic Relaxation, Gibbs Distributions, and the Bayesian Restoration of Images", 40, 0],
    [30, 30, "Gaussian Processes for Machine Learning (Ch. 2)", 50, 0],
    [31, 31, "Learning Representations by Back-Propagating Errors", 55, 0],
    [32, 32, "Automatic Differentiation in Machine Learning: A Survey", 45, 0],
    [33, 33, "Gradient-Based Learning Applied to Document Recognition (LeNet-5)", 55, 0],
    [34, 34, "A Stochastic Approximation Method", 40, 0],
    [35, 35, "Some Methods of Speeding Up the Convergence of Iteration Methods", 45, 0],
    [36, 36, "Adaptive Subgradient Methods (AdaGrad)", 40, 0],
    [37, 37, "Adam: A Method for Stochastic Optimization", 50, 0],
    [38, 38, "Decoupled Weight Decay Regularization (AdamW)", 35, 0],
    [39, 39, "SGDR: Stochastic Gradient Descent with Warm Restarts", 35, 0],
    [40, 40, "Cyclical Learning Rates + Super-Convergence", 35, 0],
    [41, 41, "Approximation by Superpositions of a Sigmoidal Function", 40, 0],
    [42, 42, "Learning Long-Term Dependencies with Gradient Descent Is Difficult", 45, 0],
    [43, 43, "Understanding the Difficulty of Training Deep Feedforward Neural Networks (Xavier init)", 40, 0],
    [44, 44, "Delving Deep into Rectifiers (He init + PReLU)", 35, 0],
    [45, 45, "Deep Sparse Rectifier Neural Networks", 35, 0],
    [46, 46, "Dropout: A Simple Way to Prevent Neural Networks from Overfitting", 40, 0],
    [47, 47, "Batch Normalization", 50, 0],
    [48, 48, "Layer Normalization", 30, 0],
    [49, 49, "Understanding Deep Learning Requires Rethinking Generalization", 45, 0],
    [50, 50, "On the Importance of Initialization and Momentum in Deep Learning", 40, 0],
    [51, 51, "A Fast Learning Algorithm for Deep Belief Nets", 50, 0],
    [52, 52, "Reducing the Dimensionality of Data with Neural Networks", 35, 0],
    [53, 53, "Extracting and Composing Robust Features with Denoising Autoencoders", 35, 0],
    [54, 54, "Emergence of Simple-Cell Receptive Field Properties by Learning a Sparse Code", 40, 0],
    [55, 55, "Training Products of Experts by Minimizing Contrastive Divergence", 40, 0],
    [56, 56, "Greedy Layer-Wise Training of Deep Networks", 30, 0],
    [57, 57, "A Neural Probabilistic Language Model", 45, 0],
    [58, 58, "Long Short-Term Memory", 55, 0],
    [59, 59, "Learning Phrase Representations using RNN Encoder–Decoder (GRU)", 35, 0],
    [60, 60, "Generating Sequences With Recurrent Neural Networks", 45, 0],
    [61, 61, "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)", 55, 0],
    [62, 62, "Visualizing and Understanding Convolutional Networks (ZFNet)", 45, 0],
    [63, 63, "Network In Network", 30, 0],
    [64, 64, "Very Deep Convolutional Networks (VGG)", 40, 0],
    [65, 65, "Going Deeper with Convolutions (GoogLeNet / Inception v1)", 45, 0],
    [66, 66, "Rethinking the Inception Architecture (Inception-v2/v3)", 40, 0],
    [67, 67, "Deep Residual Learning for Image Recognition (ResNet)", 60, 0],
    [68, 68, "Identity Mappings in Deep Residual Networks (pre-activation ResNet)", 35, 0],
    [69, 69, "Wide Residual Networks", 30, 0],
    [70, 70, "Densely Connected Convolutional Networks (DenseNet)", 35, 0],
    [71, 71, "Aggregated Residual Transformations (ResNeXt)", 30, 0],
    [72, 72, "Squeeze-and-Excitation Networks", 30, 0],
    [73, 73, "MobileNets: Efficient CNNs for Mobile Vision", 35, 0],
    [74, 74, "MobileNetV2: Inverted Residuals and Linear Bottlenecks", 30, 0],
    [75, 75, "ShuffleNet: An Extremely Efficient CNN for Mobile Devices", 25, 0],
    [76, 76, "EfficientNet: Rethinking Model Scaling", 40, 0],
    [77, 77, "Designing Network Design Spaces (RegNet)", 35, 0],
    [78, 78, "A ConvNet for the 2020s (ConvNeXt)", 45, 0],
    [79, 79, "Deformable Convolutional Networks", 30, 0],
    [80, 80, "Multi-Scale Context Aggregation by Dilated Convolutions", 30, 0],
    [81, 81, "Spatial Transformer Networks", 35, 0],
    [82, 82, "Rich Feature Hierarchies for Accurate Object Detection (R-CNN)", 45, 0],
    [83, 83, "Fast R-CNN", 35, 0],
    [84, 84, "Faster R-CNN: Towards Real-Time Object Detection with RPNs", 45, 0],
    [85, 85, "You Only Look Once: Unified, Real-Time Object Detection (YOLO)", 40, 0],
    [86, 86, "SSD: Single Shot MultiBox Detector", 30, 0],
    [87, 87, "Focal Loss for Dense Object Detection (RetinaNet)", 40, 0],
    [88, 88, "Feature Pyramid Networks for Object Detection", 35, 0],
    [89, 89, "Mask R-CNN", 40, 0],
    [90, 90, "End-to-End Object Detection with Transformers (DETR)", 45, 0],
    [91, 91, "Fully Convolutional Networks for Semantic Segmentation", 40, 0],
    [92, 92, "U-Net: Convolutional Networks for Biomedical Image Segmentation", 40, 0],
    [93, 93, "DeepLab: Atrous Convolution and Fully Connected CRFs", 40, 0],
    [94, 94, "Encoder-Decoder with Atrous Separable Convolution (DeepLabv3+)", 30, 0],
    [95, 95, "Pyramid Scene Parsing Network (PSPNet)", 25, 0],
    [96, 96, "Panoptic Segmentation", 30, 0],
    [97, 97, "Segment Anything", 45, 0],
    [98, 98, "Two-Stream Convolutional Networks for Action Recognition", 30, 0],
    [99, 99, "Quo Vadis, Action Recognition? (I3D)", 30, 0],
    [100, 100, "SlowFast Networks for Video Recognition", 30, 0],
    [101, 101, "Is Space-Time Attention All You Need for Video Understanding? (TimeSformer)", 30, 0],
    [102, 102, "PointNet: Deep Learning on Point Sets", 40, 0],
    [103, 103, "PointNet++: Deep Hierarchical Feature Learning on Point Sets", 30, 0],
    [104, 104, "NeRF: Representing Scenes as Neural Radiance Fields", 55, 0],
    [105, 105, "Instant Neural Graphics Primitives (Instant-NGP)", 40, 0],
    [106, 106, "3D Gaussian Splatting for Real-Time Radiance Field Rendering", 45, 0],
    [107, 107, "RAFT: Recurrent All-Pairs Field Transforms for Optical Flow", 35, 0],
    [108, 108, "Distinctive Image Features from Scale-Invariant Keypoints (SIFT)", 45, 0],
    [109, 109, "Histograms of Oriented Gradients for Human Detection", 30, 0],
    [110, 110, "Rapid Object Detection using a Boosted Cascade of Simple Features (Viola–Jones)", 35, 0],
    [111, 111, "ImageNet: A Large-Scale Hierarchical Image Database", 35, 0],
    [112, 112, "mixup: Beyond Empirical Risk Minimization", 30, 0],
    [113, 113, "CutMix and RandAugment", 35, 0],
    [114, 114, "How Transferable Are Features in Deep Neural Networks?", 35, 0],
    [115, 115, "An Image is Worth 16x16 Words (Vision Transformer)", 55, 0],
    [116, 116, "Training Data-Efficient Image Transformers (DeiT)", 35, 0],
    [117, 117, "Swin Transformer: Hierarchical Vision Transformer using Shifted Windows", 45, 0],
    [118, 118, "Masked Autoencoders Are Scalable Vision Learners (MAE)", 45, 0],
    [119, 119, "BEiT: BERT Pre-Training of Image Transformers", 30, 0],
    [120, 120, "Emerging Properties in Self-Supervised ViTs (DINO) + DINOv2", 50, 0],
    [121, 121, "Efficient Estimation of Word Representations in Vector Space (word2vec)", 45, 0],
    [122, 122, "Distributed Representations of Words and Phrases and their Compositionality", 45, 0],
    [123, 123, "GloVe: Global Vectors for Word Representation", 40, 0],
    [124, 124, "Enriching Word Vectors with Subword Information (fastText)", 30, 0],
    [125, 125, "Sequence to Sequence Learning with Neural Networks", 45, 0],
    [126, 126, "Neural Machine Translation by Jointly Learning to Align and Translate (Bahdanau attention)", 55, 0],
    [127, 127, "Effective Approaches to Attention-based NMT (Luong attention)", 30, 0],
    [128, 128, "Convolutional Sequence to Sequence Learning (ConvS2S)", 30, 0],
    [129, 129, "Attention Is All You Need", 90, 0],
    [130, 130, "Neural Machine Translation of Rare Words with Subword Units (BPE)", 35, 0],
    [131, 131, "SentencePiece + WordPiece", 35, 0],
    [132, 132, "RoFormer: Enhanced Transformer with Rotary Position Embedding (RoPE)", 45, 0],
    [133, 133, "Train Short, Test Long: ALiBi", 30, 0],
    [134, 134, "Deep Contextualized Word Representations (ELMo)", 35, 0],
    [135, 135, "Universal Language Model Fine-tuning (ULMFiT)", 35, 0],
    [136, 136, "Improving Language Understanding by Generative Pre-Training (GPT-1)", 40, 0],
    [137, 137, "BERT: Pre-training of Deep Bidirectional Transformers", 55, 0],
    [138, 138, "RoBERTa: A Robustly Optimized BERT Pretraining Approach", 35, 0],
    [139, 139, "ALBERT: A Lite BERT", 30, 0],
    [140, 140, "ELECTRA: Pre-training Text Encoders as Discriminators", 35, 0],
    [141, 141, "XLNet: Generalized Autoregressive Pretraining", 45, 0],
    [142, 142, "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (T5)", 55, 0],
    [143, 143, "BART: Denoising Sequence-to-Sequence Pre-training", 30, 0],
    [144, 144, "Language Models are Unsupervised Multitask Learners (GPT-2)", 45, 0],
    [145, 145, "Language Models are Few-Shot Learners (GPT-3)", 60, 0],
    [146, 146, "Scaling Laws for Neural Language Models", 55, 0],
    [147, 147, "Training Compute-Optimal Large Language Models (Chinchilla)", 50, 0],
    [148, 148, "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context", 35, 0],
    [149, 149, "Longformer and Big Bird", 40, 0],
    [150, 150, "Reformer: The Efficient Transformer", 40, 0],
    [151, 151, "Linformer: Self-Attention with Linear Complexity", 30, 0],
    [152, 152, "Rethinking Attention with Performers", 40, 0],
    [153, 153, "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", 50, 0],
    [154, 154, "FlashAttention-2 and FlashAttention-3", 30, 0],
    [155, 155, "Multi-Query and Grouped-Query Attention", 35, 0],
    [156, 156, "Generating Long Sequences with Sparse Transformers", 35, 0],
    [157, 157, "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer", 45, 0],
    [158, 158, "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding", 35, 0],
    [159, 159, "Switch Transformers: Scaling to Trillion Parameter Models", 40, 0],
    [160, 160, "Mixtral of Experts", 35, 0],
    [161, 161, "GLU Variants Improve Transformer", 25, 0],
    [162, 162, "Root Mean Square Layer Normalization (RMSNorm)", 25, 0],
    [163, 163, "On Layer Normalization in the Transformer Architecture (Pre-LN)", 35, 0],
    [164, 164, "Megatron-LM: Training Multi-Billion Parameter Models Using Model Parallelism", 45, 0],
    [165, 165, "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models", 45, 0],
    [166, 166, "GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism", 35, 0],
    [167, 167, "PaLM: Scaling Language Modeling with Pathways", 50, 0],
    [168, 168, "LLaMA: Open and Efficient Foundation Language Models", 45, 0],
    [169, 169, "Llama 2: Open Foundation and Fine-Tuned Chat Models", 50, 0],
    [170, 170, "The Llama 3 Herd of Models", 55, 0],
    [171, 171, "Mistral 7B", 30, 0],
    [172, 172, "Scaling Language Models: Methods, Analysis & Insights from Training Gopher", 40, 0],
    [173, 173, "OPT: Open Pre-trained Transformer Language Models (+ the logbook)", 40, 0],
    [174, 174, "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model", 40, 0],
    [175, 175, "DeepSeek-V2: Multi-head Latent Attention", 40, 0],
    [176, 176, "DeepSeek-V3 Technical Report", 50, 0],
    [177, 177, "Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens", 40, 0],
    [178, 178, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces", 55, 0],
    [179, 179, "Efficiently Modeling Long Sequences with Structured State Spaces (S4)", 50, 0],
    [180, 180, "RWKV: Reinventing RNNs for the Transformer Era", 40, 0],
    [181, 181, "Trust Region Policy Optimization", 50, 0],
    [182, 182, "Proximal Policy Optimization Algorithms", 45, 0],
    [183, 183, "Deep Reinforcement Learning from Human Preferences", 45, 0],
    [184, 184, "Training Language Models to Follow Instructions with Human Feedback (InstructGPT)", 55, 0],
    [185, 185, "Training a Helpful and Harmless Assistant with RLHF", 45, 0],
    [186, 186, "Direct Preference Optimization: Your Language Model is Secretly a Reward Model", 55, 0],
    [187, 187, "Constitutional AI: Harmlessness from AI Feedback", 50, 0],
    [188, 188, "RLAIF and Self-Rewarding Language Models", 40, 0],
    [189, 189, "Red Teaming Language Models to Reduce Harms", 40, 0],
    [190, 190, "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", 45, 0],
    [191, 191, "Self-Consistency Improves Chain of Thought Reasoning", 30, 0],
    [192, 192, "Least-to-Most Prompting Enables Complex Reasoning", 30, 0],
    [193, 193, "Show Your Work: Scratchpads for Intermediate Computation", 30, 0],
    [194, 194, "ReAct: Synergizing Reasoning and Acting in Language Models", 40, 0],
    [195, 195, "Tree of Thoughts: Deliberate Problem Solving with LLMs", 40, 0],
    [196, 196, "Toolformer: Language Models Can Teach Themselves to Use Tools", 35, 0],
    [197, 197, "Finetuned Language Models Are Zero-Shot Learners (FLAN)", 35, 0],
    [198, 198, "Multitask Prompted Training Enables Zero-Shot Task Generalization (T0)", 30, 0],
    [199, 199, "Self-Instruct: Aligning Language Models with Self-Generated Instructions", 35, 0],
    [200, 200, "LIMA: Less Is More for Alignment", 35, 0],
    [201, 201, "Parameter-Efficient Transfer Learning for NLP (Adapters)", 35, 0],
    [202, 202, "Prefix-Tuning: Optimizing Continuous Prompts for Generation", 30, 0],
    [203, 203, "The Power of Scale for Parameter-Efficient Prompt Tuning", 30, 0],
    [204, 204, "LoRA: Low-Rank Adaptation of Large Language Models", 45, 0],
    [205, 205, "QLoRA: Efficient Finetuning of Quantized LLMs", 45, 0],
    [206, 206, "Emergent Abilities of Large Language Models + Are Emergent Abilities a Mirage?", 50, 0],
    [207, 207, "TruthfulQA: Measuring How Models Mimic Human Falsehoods", 35, 0],
    [208, 208, "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training", 45, 0],
    [209, 209, "Weak-to-Strong Generalization", 45, 0],
    [210, 210, "AI Safety via Debate + Scalable Agent Alignment via Reward Modeling", 45, 0],
    [211, 211, "Learning to Predict by the Methods of Temporal Differences", 45, 0],
    [212, 212, "Q-learning", 40, 0],
    [213, 213, "Simple Statistical Gradient-Following Algorithms (REINFORCE)", 45, 0],
    [214, 214, "Human-level Control through Deep Reinforcement Learning (DQN)", 55, 0],
    [215, 215, "Deep Reinforcement Learning with Double Q-learning", 30, 0],
    [216, 216, "Dueling Network Architectures for Deep RL", 25, 0],
    [217, 217, "Prioritized Experience Replay", 30, 0],
    [218, 218, "Rainbow: Combining Improvements in Deep RL", 40, 0],
    [219, 219, "Asynchronous Methods for Deep Reinforcement Learning (A3C)", 35, 0],
    [220, 220, "High-Dimensional Continuous Control Using Generalized Advantage Estimation (GAE)", 40, 0],
    [221, 221, "Continuous Control with Deep Reinforcement Learning (DDPG)", 35, 0],
    [222, 222, "Addressing Function Approximation Error in Actor-Critic Methods (TD3)", 30, 0],
    [223, 223, "Soft Actor-Critic", 45, 0],
    [224, 224, "Mastering the Game of Go with Deep Neural Networks and Tree Search (AlphaGo)", 55, 0],
    [225, 225, "Mastering the Game of Go Without Human Knowledge (AlphaGo Zero)", 50, 0],
    [226, 226, "A General Reinforcement Learning Algorithm that Masters Chess, Shogi and Go (AlphaZero)", 35, 0],
    [227, 227, "Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model (MuZero)", 50, 0],
    [228, 228, "World Models", 40, 0],
    [229, 229, "Mastering Diverse Domains through World Models (DreamerV3)", 45, 0],
    [230, 230, "Decision Transformer: Reinforcement Learning via Sequence Modeling", 40, 0],
    [231, 231, "Conservative Q-Learning for Offline Reinforcement Learning", 40, 0],
    [232, 232, "Hindsight Experience Replay", 30, 0],
    [233, 233, "Curiosity-driven Exploration by Self-supervised Prediction (ICM)", 35, 0],
    [234, 234, "Exploration by Random Network Distillation (RND)", 30, 0],
    [235, 235, "Dota 2 with Large Scale Deep Reinforcement Learning (OpenAI Five)", 45, 0],
    [236, 236, "Grandmaster Level in StarCraft II using Multi-Agent RL (AlphaStar)", 45, 0],
    [237, 237, "Solving Rubik's Cube with a Robot Hand (+ domain randomization)", 40, 0],
    [238, 238, "Let's Verify Step by Step", 45, 0],
    [239, 239, "STaR: Self-Taught Reasoner", 35, 0],
    [240, 240, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", 55, 0],
    [241, 241, "Auto-Encoding Variational Bayes (VAE)", 60, 0],
    [242, 242, "β-VAE and the Disentanglement Debate", 40, 0],
    [243, 243, "Neural Discrete Representation Learning (VQ-VAE)", 45, 0],
    [244, 244, "Taming Transformers for High-Resolution Image Synthesis (VQGAN)", 40, 0],
    [245, 245, "Generative Adversarial Networks", 55, 0],
    [246, 246, "Unsupervised Representation Learning with Deep Convolutional GANs (DCGAN)", 35, 0],
    [247, 247, "Improved Techniques for Training GANs (+ FID)", 40, 0],
    [248, 248, "Wasserstein GAN", 50, 0],
    [249, 249, "WGAN-GP and Spectral Normalization", 40, 0],
    [250, 250, "Progressive Growing of GANs", 35, 0],
    [251, 251, "A Style-Based Generator Architecture for GANs (StyleGAN)", 50, 0],
    [252, 252, "Analyzing and Improving the Image Quality of StyleGAN (StyleGAN2)", 40, 0],
    [253, 253, "Neural Style Transfer + Perceptual Losses", 40, 0],
    [254, 254, "pix2pix and CycleGAN", 40, 0],
    [255, 255, "Large Scale GAN Training for High Fidelity Natural Image Synthesis (BigGAN)", 40, 0],
    [256, 256, "WaveNet: A Generative Model for Raw Audio", 45, 0],
    [257, 257, "Pixel Recurrent Neural Networks and PixelCNN", 40, 0],
    [258, 258, "Normalizing Flows: NICE, RealNVP, and Glow", 50, 0],
    [259, 259, "Deep Unsupervised Learning using Nonequilibrium Thermodynamics", 45, 0],
    [260, 260, "Denoising Diffusion Probabilistic Models (DDPM)", 60, 0],
    [261, 261, "Denoising Diffusion Implicit Models + Improved DDPM", 40, 0],
    [262, 262, "Score-Based Generative Modeling through Stochastic Differential Equations", 55, 0],
    [263, 263, "Classifier Guidance and Classifier-Free Guidance", 45, 0],
    [264, 264, "High-Resolution Image Synthesis with Latent Diffusion Models (Stable Diffusion)", 50, 0],
    [265, 265, "Zero-Shot Text-to-Image Generation (DALL·E)", 40, 0],
    [266, 266, "Hierarchical Text-Conditional Image Generation (unCLIP/DALL·E 2) + Imagen", 45, 0],
    [267, 267, "Adding Conditional Control to Text-to-Image Diffusion Models (ControlNet)", 35, 0],
    [268, 268, "Consistency Models", 40, 0],
    [269, 269, "Flow Matching and Rectified Flow", 45, 0],
    [270, 270, "Scalable Diffusion Models with Transformers (DiT)", 40, 0],
    [271, 271, "Learning Transferable Visual Models From Natural Language Supervision (CLIP)", 55, 0],
    [272, 272, "ALIGN and SigLIP", 35, 0],
    [273, 273, "Flamingo: a Visual Language Model for Few-Shot Learning", 45, 0],
    [274, 274, "BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Encoders", 35, 0],
    [275, 275, "Visual Instruction Tuning (LLaVA)", 35, 0],
    [276, 276, "GPT-4 Technical Report (and System Card)", 45, 0],
    [277, 277, "Connectionist Temporal Classification", 45, 0],
    [278, 278, "Listen, Attend and Spell + Deep Speech 2", 35, 0],
    [279, 279, "wav2vec 2.0: Self-Supervised Learning of Speech Representations", 45, 0],
    [280, 280, "HuBERT: Self-Supervised Speech Learning by Masked Prediction of Hidden Units", 30, 0],
    [281, 281, "Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)", 40, 0],
    [282, 282, "Natural TTS Synthesis by Conditioning WaveNet on Mel Spectrogram Predictions (Tacotron 2)", 30, 0],
    [283, 283, "Neural Audio Codecs and VALL-E", 40, 0],
    [284, 284, "AudioLM and MusicLM", 35, 0],
    [285, 285, "The Probabilistic Relevance Framework: BM25 and Beyond", 40, 0],
    [286, 286, "Dense Passage Retrieval for Open-Domain Question Answering", 35, 0],
    [287, 287, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", 45, 0],
    [288, 288, "REALM: Retrieval-Augmented Language Model Pre-Training", 35, 0],
    [289, 289, "ColBERT: Efficient and Effective Passage Search via Late Interaction", 35, 0],
    [290, 290, "Efficient Similarity Search: HNSW and FAISS", 40, 0],
    [291, 291, "Improving Language Models by Retrieving from Trillions of Tokens (RETRO)", 40, 0],
    [292, 292, "Self-RAG and Corrective RAG", 35, 0],
    [293, 293, "DeepWalk and node2vec", 35, 0],
    [294, 294, "Semi-Supervised Classification with Graph Convolutional Networks", 45, 0],
    [295, 295, "Inductive Representation Learning on Large Graphs (GraphSAGE)", 30, 0],
    [296, 296, "Graph Attention Networks", 30, 0],
    [297, 297, "Neural Message Passing for Quantum Chemistry", 35, 0],
    [298, 298, "Video Generation Models as World Simulators (Sora) + Video Diffusion", 40, 0],
    [299, 299, "Highly Accurate Protein Structure Prediction with AlphaFold", 60, 0],
    [300, 300, "Accurate Structure Prediction of Biomolecular Interactions with AlphaFold 3", 45, 0],
    [301, 301, "Deep Inside Convolutional Networks: Visualising Image Classification Models and Saliency Maps", 30, 0],
    [302, 302, "Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization", 35, 0],
    [303, 303, "\"Why Should I Trust You?\" Explaining the Predictions of Any Classifier (LIME)", 35, 0],
    [304, 304, "A Unified Approach to Interpreting Model Predictions (SHAP)", 40, 0],
    [305, 305, "Axiomatic Attribution + Sanity Checks for Saliency Maps", 40, 0],
    [306, 306, "Zoom In: An Introduction to Circuits", 45, 0],
    [307, 307, "A Mathematical Framework for Transformer Circuits", 55, 0],
    [308, 308, "In-context Learning and Induction Heads", 45, 0],
    [309, 309, "Toy Models of Superposition", 50, 0],
    [310, 310, "Towards Monosemanticity: Decomposing Language Models with Dictionary Learning", 50, 0],
    [311, 311, "Scaling Monosemanticity + Sparse Autoencoder Follow-ups", 40, 0],
    [312, 312, "Locating and Editing Factual Associations in GPT (ROME)", 45, 0],
    [313, 313, "Probing Classifiers: What Does BERT Learn?", 35, 0],
    [314, 314, "Attention is not Explanation / Attention is not not Explanation", 35, 0],
    [315, 315, "The Lottery Ticket Hypothesis", 45, 0],
    [316, 316, "Deep Double Descent", 45, 0],
    [317, 317, "Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets", 40, 0],
    [318, 318, "Neural Tangent Kernel", 50, 0],
    [319, 319, "On Large-Batch Training and Flat Minima", 40, 0],
    [320, 320, "The Information Bottleneck and Deep Learning", 45, 0],
    [321, 321, "Intriguing Properties of Neural Networks", 40, 0],
    [322, 322, "Explaining and Harnessing Adversarial Examples (FGSM)", 35, 0],
    [323, 323, "Towards Deep Learning Models Resistant to Adversarial Attacks (PGD)", 45, 0],
    [324, 324, "Certified Adversarial Robustness via Randomized Smoothing", 40, 0],
    [325, 325, "Shortcut Learning and Distribution Shift", 40, 0],
    [326, 326, "On Calibration of Modern Neural Networks", 35, 0],
    [327, 327, "BadNets and Data Poisoning", 35, 0],
    [328, 328, "Membership Inference and Training Data Extraction", 40, 0],
    [329, 329, "Deep Learning with Differential Privacy (DP-SGD)", 45, 0],
    [330, 330, "Communication-Efficient Learning of Deep Networks from Decentralized Data (Federated Learning)", 40, 0],
    [331, 331, "Distilling the Knowledge in a Neural Network", 40, 0],
    [332, 332, "Deep Compression and the Pruning Literature", 40, 0],
    [333, 333, "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale", 40, 0],
    [334, 334, "GPTQ: Accurate Post-Training Quantization for Generative Transformers", 40, 0],
    [335, 335, "AWQ and SmoothQuant", 35, 0],
    [336, 336, "Fast Inference from Transformers via Speculative Decoding", 45, 0],
    [337, 337, "Medusa and EAGLE: Draft-Model-Free Speculation", 30, 0],
    [338, 338, "Efficient Memory Management for LLM Serving with PagedAttention (vLLM)", 45, 0],
    [339, 339, "Orca: A Distributed Serving System for Transformer-Based Generative Models", 35, 0],
    [340, 340, "Mixed Precision Training", 35, 0],
    [341, 341, "Training Deep Nets with Sublinear Memory Cost", 35, 0],
    [342, 342, "MapReduce: Simplified Data Processing on Large Clusters", 40, 0],
    [343, 343, "The Google File System", 35, 0],
    [344, 344, "Bigtable and Dynamo", 40, 0],
    [345, 345, "In Search of an Understandable Consensus Algorithm (Raft)", 40, 0],
    [346, 346, "TensorFlow: A System for Large-Scale Machine Learning", 35, 0],
    [347, 347, "PyTorch: An Imperative Style, High-Performance Deep Learning Library", 40, 0],
    [348, 348, "JAX, XLA, and GSPMD", 45, 0],
    [349, 349, "Triton: An Intermediate Language and Compiler for Tiled Neural Network Computations", 40, 0],
    [350, 350, "In-Datacenter Performance Analysis of a Tensor Processing Unit", 45, 0],
    [351, 351, "Beyond Chinchilla-Optimal: Accounting for Inference in Scaling Laws", 35, 0],
    [352, 352, "The Bitter Lesson + The Scaling Hypothesis", 40, 0],
    [353, 353, "Evaluating Large Language Models Trained on Code (Codex / HumanEval)", 40, 0],
    [354, 354, "Competition-Level Code Generation with AlphaCode", 40, 0],
    [355, 355, "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", 40, 0],
    [356, 356, "Voyager: An Open-Ended Embodied Agent with Large Language Models", 35, 0],
    [357, 357, "Generative Agents: Interactive Simulacra of Human Behavior", 40, 0],
    [358, 358, "Reflexion and Self-Refine", 35, 0],
    [359, 359, "Measuring Massive Multitask Language Understanding (MMLU)", 30, 0],
    [360, 360, "Beyond the Imitation Game (BIG-bench)", 35, 0],
    [361, 361, "Holistic Evaluation of Language Models (HELM)", 40, 0],
    [362, 362, "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", 40, 0],
    [363, 363, "Agentic Benchmarks: GAIA, τ-bench, and ARC-AGI", 40, 0],
    [364, 364, "Model Cards for Model Reporting", 30, 0],
    [365, 365, "Datasheets for Datasets", 30, 0],
    [366, 366, "On the Dangers of Stochastic Parrots", 40, 0],
    [367, 367, "On the Opportunities and Risks of Foundation Models", 40, 0],
    [368, 368, "Concrete Problems in AI Safety", 45, 0],
    [369, 369, "Alignment Faking in Large Language Models", 45, 0],
    [370, 370, "Evaluating Frontier Models for Dangerous Capabilities", 40, 0],
    [371, 371, "Capstone: Replicate, Publish, Reflect", 60, 0]
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
