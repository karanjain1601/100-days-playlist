/* 100 Days of Deep Learning — shared site script (multi-page) */
const PHASES = [
  {id:"p1", n:1, name:"Math, Python & Tooling Foundations", days:"1–14", rt:"10h 30m", written:true},
  {id:"p2", n:2, name:"Neural Networks From Scratch",       days:"15–28", rt:"13h 25m", written:true},
  {id:"p3", n:3, name:"Training Deep Networks Well",        days:"29–40", rt:"10h 50m", written:false},
  {id:"p4", n:4, name:"CNNs & Computer Vision",             days:"41–56", rt:"16h 10m", written:false},
  {id:"p5", n:5, name:"Sequence Models & Classical NLP",    days:"57–68", rt:"11h 10m", written:false},
  {id:"p6", n:6, name:"Transformers & Large Language Models", days:"69–86", rt:"18h 45m", written:false},
  {id:"p7", n:7, name:"Generative & Multimodal Models",     days:"87–94", rt:"8h 45m",  written:false},
  {id:"p8", n:8, name:"Advanced Topics, Deployment & Capstone", days:"95–100", rt:"9h 45m", written:false}
];

const RAW = {
p1:[
"1|1|Course Intro & The 100-Day Roadmap|20",
"2|2|Python for Deep Learning (NumPy-first)|40",
"3|3|Linear Algebra I — Vectors & Matrices|45",
"4|4|Linear Algebra II — Decompositions|50",
"5|5|Calculus for DL I — Derivatives & Gradients|45",
"6|6|Calculus for DL II — Jacobians & Chain Rule|45",
"7|7|Probability I — The Language of Uncertainty|45",
"8|8|Probability II — Information Theory & Estimation|50",
"9|9|Optimization Fundamentals|45",
"10|10|Numerical Stability & Floating Point|35",
"11|11|Environment Setup — CPU, GPU & Cloud|40",
"12|12|PyTorch Tensor Crash Course|50",
"12-b|13|Framework Landscape — PyTorch vs TF vs JAX|25",
"13|14|Data Pipelines — Loading, Batching & Splitting|45",
"14|15|Machine Learning Refresher|50"
],
p2:[
"15|16|The Perceptron|40",
"16|17|Logistic Regression as a One-Layer Net|45",
"17|18|A Single Neuron in Pure NumPy|40",
"18|19|Multi-Layer Perceptrons|45",
"19|20|Activation Functions — Deep Dive|50",
"20|21|Loss Functions — Deep Dive|50",
"21|22|Backpropagation From First Principles|60",
"22|23|Backprop By Hand — Numeric Walkthrough|50",
"23|24|Build Your Own Autodiff Engine|60",
"24|25|Train an MLP on MNIST — Pure NumPy|60",
"25|26|The Same Model in PyTorch|50",
"25-b|27|Weight Initialization|40",
"26|28|Vanishing & Exploding Gradients|45",
"27|29|Batch, Mini-Batch & Stochastic GD|35",
"27-b|30|The Learning Rate|35",
"28|31|Optimizers I — Momentum & Adaptive Methods|50",
"28-b|32|Optimizers II — Adam and Modern Successors|50"
],
p3:[
"29|33|Learning Rate Schedules & Warmup|45|Step, exponential, polynomial decay;Cosine annealing;Linear warmup and why large batches need it;Warm restarts (SGDR);One-cycle policy;ReduceLROnPlateau;Schedulers in PyTorch;Reading LR curves next to loss curves",
"30|34|Regularization I — Weight Penalties & Early Stopping|45|L2 penalty and shrinkage;L1 and sparsity;Elastic net;The Bayesian view (L2 = Gaussian prior);Weight decay vs L2 in adaptive optimizers;Early stopping with patience;Max-norm constraints",
"31|35|Regularization II — Dropout & Friends|45|Dropout mechanics, train vs inference;Inverted dropout scaling;Dropout as ensembling;Where to place it (not after BatchNorm);Spatial/2D dropout;DropConnect;Stochastic depth;Label smoothing derived;DropPath",
"32|36|Normalization I — Batch Normalization|50|The covariate shift story and the smoothing rebuttal;The exact BN formula;Learnable gamma and beta;Running statistics;Train vs eval divergence bugs;BN with small batches;BN as a regularizer;Folding BN into conv at inference",
"33|37|Normalization II — Layer, Group, Instance, RMSNorm|45|LayerNorm and why sequences need it;GroupNorm for small batches;InstanceNorm for style transfer;RMSNorm and modern LLMs;Pre-norm vs post-norm stability;Weight normalization;Comparison table across tasks",
"34|38|Data Augmentation|45|Augmentation as regularization;Geometric and photometric transforms;Test-time augmentation;mixup and manifold mixup;CutMix, Cutout, random erasing;AutoAugment, RandAugment, TrivialAugment;Text augmentation;SpecAugment;albumentations and torchvision v2",
"35|39|Hyperparameter Tuning|45|What to tune and in what order;Grid vs random search;Coarse-to-fine;Bayesian optimization / TPE;Hyperband and ASHA;Population-based training;Optuna hands-on;Budget planning;Reporting honestly",
"36|40|Debugging Neural Networks|50|The overfit-a-single-batch test;Shape mismatch and silent broadcasting;Forgetting zero_grad;Wrong loss/activation pairing;Label misalignment;NaN hunting;Check the data before the model;A 20-point debugging checklist",
"37|41|Experiment Tracking & Reproducibility|40|TensorBoard, Weights & Biases, MLflow;Logging metrics, hyperparameters, artifacts, gradients;Config management with Hydra/YAML;Seeding Python/NumPy/torch/CUDA;Deterministic algorithms and their speed cost;Versioning data and code;Structuring an experiments repo",
"38|42|Reading Loss Curves & Diagnosing Training|40|Healthy vs pathological curves;Train-val gap interpretation;Plateaus and how to break them;Loss spikes;Double descent;Grokking;When to stop;Benchmarking against a human baseline",
"39|43|Evaluation Metrics Done Properly|50|Confusion matrix;Accuracy failure modes;Precision, recall, F1, F-beta;Macro vs micro vs weighted;ROC-AUC vs PR-AUC on imbalanced data;Threshold selection;Calibration, reliability diagrams, temperature scaling, Platt, isotonic;RMSE, MAE, MAPE, R-squared;Significance and confidence intervals",
"39-b|44|Mixed Precision, Gradient Accumulation & Memory|45|fp16 vs bf16 vs fp32;Automatic mixed precision (torch.amp);Loss scaling and why fp16 needs it;Gradient accumulation for big effective batches;Gradient/activation checkpointing;Profiling GPU memory;torch.compile basics;Finding and fixing OOM",
"40|45|Transfer Learning & Fine-Tuning Fundamentals|45|Why pretrained features transfer;Feature extraction vs full fine-tuning;Freezing and progressive unfreezing;Discriminative layer-wise learning rates;Domain gap;Catastrophic forgetting;How much data you actually need",
"40-b|46|Project Checkpoint 1 — End-to-End Classifier|60|Raw files to a trained, tuned, tracked model;EDA;Baseline;Model;Augmentation;Schedule;Regularization;Evaluation;Error analysis;A written model report"
],
p4:[
"41|47|Why MLPs Fail on Images|30|Parameter explosion;Loss of spatial structure when flattening;No translation invariance;Local connectivity and weight sharing;Live MLP vs CNN demo on the same task",
"42|48|The Convolution Operation|55|Kernels as feature detectors;Cross-correlation vs true convolution;Stride, padding, dilation;The output-size formula derived;Multi-channel convolution;Receptive field computation;Edge/blur/sharpen kernels shown;Parameter counting",
"43|49|CNN Building Blocks|45|Feature maps and channel semantics;Max vs average pooling;Global average pooling;1x1 convolutions as channel mixers;Strided conv vs pooling;Transposed convolution and upsampling;The classification head;Assembling a full CNN",
"44|50|Build a CNN From Scratch|55|Naive loop convolution in NumPy;The im2col trick;Conv backward pass;Pooling forward and backward;Verifying against PyTorch;The same net with nn.Conv2d",
"45|51|Classic Architectures I — LeNet to VGG|50|LeNet-5 layer by layer;AlexNet and the 2012 ImageNet result;ZFNet visualization insights;VGG-16/19 and the 3x3 stacking principle;Network-in-Network;The depth trend and its compute cost",
"46|52|Classic Architectures II — Inception & ResNet|55|The Inception module and multi-scale filters;Dimensionality reduction with 1x1;Inception v2/v3/v4;The degradation problem;Residual blocks and identity mappings;Why gradients flow through skips;ResNet-18/34/50/101/152;Bottleneck blocks;Pre-activation ResNet",
"47|53|Modern CNN Architectures|55|DenseNet and feature reuse;ResNeXt cardinality;Squeeze-and-Excitation;CBAM;MobileNet v1/v2/v3 with FLOPs math;ShuffleNet;EfficientNet compound scaling;RegNet;ConvNeXt",
"48|54|Training a CNN on CIFAR-10 — The Full Recipe|60|Normalization statistics;A strong baseline;Augmentation stack;LR schedule plus AMP;Label smoothing;EMA of weights;Getting past 94-96%;An ablation table;Common CIFAR mistakes",
"49|55|Transfer Learning in Vision, Hands-On|50|torchvision and timm model zoos;Choosing a backbone by accuracy/latency/params;Replacing the head;Freezing schedules;Fine-tuning on a small custom dataset;Class imbalance;When a linear probe is enough",
"50|56|Object Detection I — Foundations|50|Classification vs localization vs detection vs segmentation;Box formats xyxy, xywh, normalized;IoU;Non-max suppression and soft-NMS;Anchor boxes;Positive/negative assignment;PR curves for detection;mAP and mAP@[.5:.95] step by step;COCO and Pascal VOC",
"51|57|Object Detection II — Two-Stage Detectors|50|Sliding windows and selective search;R-CNN;SPP-net;Fast R-CNN and RoI pooling;Faster R-CNN and the RPN;RoI Align;Mask R-CNN;Feature Pyramid Networks;Speed/accuracy tradeoffs",
"52|58|Object Detection III — One-Stage & DETR|55|YOLO v1 grid formulation;The YOLO lineage through v3, v5, v8;SSD multi-scale defaults;RetinaNet and focal loss;Anchor-free detectors FCOS and CenterNet;DETR set prediction with Hungarian matching;Deformable DETR;Picking a detector",
"53|59|Segmentation|55|Semantic vs instance vs panoptic;FCN and learned upsampling;U-Net and why medical imaging loves it;SegNet;DeepLab v1-v3+ with atrous conv and ASPP;PSPNet;Dice, IoU, Tversky and boundary losses;mIoU;Segment Anything (SAM)",
"54|60|Other Vision Tasks|50|Pose estimation with heatmaps, OpenPose, HRNet;OCR with CRNN and CTC;Face detection and recognition;Monocular depth;Super-resolution SRCNN and ESRGAN;Denoising and inpainting;Optical flow;Tracking with SORT, DeepSORT, ByteTrack;Video classification with 3D convs, two-stream, SlowFast",
"54-b|61|Metric Learning & Embeddings|40|Learning a similarity space;Siamese networks;Contrastive loss;Triplet loss and mining strategies;N-pair and InfoNCE;ArcFace and CosFace margin losses;Image retrieval with FAISS;Evaluating with recall@k",
"55|62|Vision Transformers|55|Patch embedding and image-as-16x16-words;The CLS token;ViT end to end;Data hunger and heavy augmentation;DeiT and distillation tokens;Swin shifted windows and hierarchy;PVT;Hybrid CNN-transformer designs;CNN vs ViT inductive biases",
"55-b|63|Self-Supervised Learning for Vision|50|Pretext tasks: rotation, jigsaw, colorization;SimCLR with NT-Xent;MoCo momentum queue;BYOL, SimSiam, Barlow Twins, VICReg;DINO and DINOv2 self-distillation;Masked image modeling with BEiT and MAE;Linear probe evaluation",
"56|64|Interpretability & Adversarial Robustness in Vision|50|Visualizing filters and feature maps;Activation maximization and feature inversion;Saliency maps;Guided Backprop;CAM, Grad-CAM, Grad-CAM++, Score-CAM;Occlusion sensitivity;FGSM and PGD;Adversarial training;Revealing spurious correlations",
"56-b|65|Project Checkpoint 2 — Custom Vision System|60|Collect and label a custom dataset;Pick and fine-tune a backbone or detector;Augmentation and training;Evaluate with the right metrics;Error analysis with Grad-CAM;Export and ship a Gradio/Streamlit demo"
],
p5:[
"57|66|Sequence Data & Why Feedforward Nets Fail|35|Sequences in text, audio, time series, video, genomics;Variable length;Order dependence;Long-range dependencies;One-to-one through many-to-many task shapes;Padding, masking and packing",
"58|67|Text Preprocessing & Tokenization|55|Unicode normalization, lowercasing, accents;Word tokenization and OOV;Character-level tradeoffs;Subword motivation;BPE trained step by step on a toy corpus;WordPiece;Unigram/SentencePiece;Byte-level BPE;Vocabulary size tradeoffs;Special tokens;Effects on cost, multilingual fairness and arithmetic",
"59|68|Word Representations I — Count-Based|40|One-hot vectors and their limits;Bag of words;n-grams;TF-IDF derived;Co-occurrence matrices;The distributional hypothesis;LSA/SVD on term-document matrices;Sparse vs dense",
"60|69|Word Representations II — Learned Embeddings|55|Word2Vec skip-gram derived;CBOW;Negative sampling and subsampling;Hierarchical softmax;GloVe;FastText subword vectors;Training your own;Vector arithmetic and analogies;t-SNE and UMAP;Measuring and mitigating bias;Static vs contextual",
"61|70|Recurrent Neural Networks|55|The recurrence relation;Unrolling through time;Shared weights;Hidden state as memory;Forward pass math;BPTT derived;Truncated BPTT;Why RNNs vanish and explode;An RNN cell from scratch",
"62|71|LSTM — Long Short-Term Memory|55|The cell-state highway;Forget, input and output gates with full equations;Candidate values;Gradient flow through the cell state;Peephole variants;Parameter count;An LSTM cell by hand;Visualizing gate activations",
"63|72|GRU, Bidirectional & Deep RNNs|45|GRU update and reset gates;GRU vs LSTM;Bidirectional RNNs and when they are legal;Stacked RNNs;Residual and dense connections in RNNs;Variational dropout;nn.LSTM arguments explained",
"64|73|Build a Character-Level Language Model|55|Corpus prep and vocabulary;Sequence batching;The training loop;Temperature sampling;Generating text;Measuring perplexity;Failure modes;LSTM vs GRU vs vanilla RNN compared",
"65|74|Seq2Seq & Encoder-Decoder|50|The encoder-decoder framework;The context vector bottleneck;Teacher forcing and exposure bias;Scheduled sampling;Variable-length input/output;Masking padded positions;A working NMT model",
"66|75|The Attention Mechanism|55|The fixed-context-vector problem;Bahdanau additive attention;Luong multiplicative attention;Alignment scores to weights to context;Visualizing alignment matrices;Global vs local attention;Self-attention teased",
"66-b|76|Decoding & Generation Strategies|45|Greedy decoding;Beam search with length normalization and coverage;The diversity problem;Pure sampling;Temperature;Top-k;Top-p nucleus;Typical and min-p;Repetition and frequency penalties;Constrained decoding;Deterministic vs creative settings",
"67|77|Convolutional & Causal Models for Sequences|40|1D convolutions over text;Causal convolutions;Dilated convolutions for exponential receptive field;Temporal Convolutional Networks;WaveNet;CNN vs RNN for sequences",
"67-b|78|Deep Learning for Time Series|45|Forecasting as supervised learning;Windowing and horizons;Stationarity, seasonality, trend;ARIMA, ETS, Prophet baselines;DeepAR;N-BEATS and N-HiTS;Temporal Fusion Transformer;Informer, Autoformer, PatchTST;TimesNet;Probabilistic forecasting and quantile loss;Backtesting correctly",
"68|79|Evaluating Language Models & Generation|40|Perplexity and its relation to cross-entropy;BLEU by hand;ROUGE-1/2/L;METEOR;chrF;BERTScore;Human evaluation protocols;Why automatic metrics mislead;GLUE, SuperGLUE, SQuAD"
],
p6:[
"69|80|Attention Is All You Need — Paper Walkthrough|60|The 2017 context;The full architecture diagram decoded;Encoder vs decoder stacks;The three attention types;The original training setup;What the paper got right and what changed;How to read an ML paper",
"70|81|Self-Attention — The Math|60|Queries, keys, values and the database analogy;The projection matrices;Scaled dot-product and why divide by sqrt(d_k);Softmax over keys;Causal masking;Padding masks;O(n^2) complexity;Coding attention from scratch",
"71|82|Multi-Head Attention|45|Splitting into heads;Per-head dimensionality;Concatenation and output projection;What different heads learn including induction heads;Head redundancy and pruning;Efficient batched implementation;Attention pattern visualization",
"72|83|Positional Encoding|50|Why attention is permutation-invariant;Sinusoidal encodings derived;Learned absolute embeddings;Relative position (Shaw, T5 bias);RoPE with complex-number intuition;ALiBi;NoPE;Context extrapolation, position interpolation, YaRN",
"73|84|Inside the Transformer Block|50|The position-wise FFN and its 4x expansion;ReLU to GELU to SwiGLU;Residual connections;Pre-norm vs post-norm stability;Dropout placement;Parameter and FLOP accounting per block;A Llama-style block vs the 2017 original",
"74|85|Build a Transformer From Scratch — Part 1|60|Config and tokenizer;Token and position embeddings;Attention module;MLP module;Block;Full model class;Weight tying;Initialization;Counting parameters;Verifying shapes",
"75|86|Build a Transformer From Scratch — Part 2|60|Data loading for next-token prediction;Training loop with AMP and gradient accumulation;Warmup plus cosine;Evaluating loss;Sampling text;Scaling from toy to bigger;Measuring tokens/sec;Profiling bottlenecks",
"76|87|Encoder-Only Models — BERT & Family|55|Bidirectional context;Masked language modeling and the 80/10/10 rule;Next-sentence prediction and why it was dropped;BERT-base vs large;CLS, SEP, segment embeddings;RoBERTa;ALBERT parameter sharing;ELECTRA replaced-token detection;DeBERTa disentangled attention;Fine-tuning for classification, NER, QA and Sentence-BERT",
"77|88|Decoder-Only Models — The GPT Lineage|55|Causal language modeling;GPT-1 to GPT-2 zero-shot to GPT-3 few-shot to GPT-4;Open-weight families Llama, Mistral, Qwen, Gemma, DeepSeek;Emergent abilities and the debate;The modern LLM stack",
"78|89|Encoder-Decoder Models — T5 & BART|45|Text-to-text unification;T5 span corruption;The C4 dataset;Relative position bias;mT5;BART denoising objectives;When encoder-decoder still wins;FLAN instruction-tuned variants",
"79|90|Efficient Attention & Long Context|55|The quadratic wall;Sparse and local attention;Longformer sliding window plus global tokens;BigBird;Reformer LSH;Linformer;Performer and linear attention;FlashAttention 1/2/3;The KV cache explained and sized;Multi-Query and Grouped-Query Attention;PagedAttention;Sliding-window inference;Context extension",
"80|91|Mixture of Experts|45|Dense vs sparse compute;Expert layers replacing the FFN;Top-k gating;Load balancing loss;Expert capacity and token dropping;Switch Transformer;GShard;Mixtral;DeepSeek-MoE fine-grained plus shared experts;Training instabilities;Inference memory vs FLOPs",
"81|92|State Space Models & Transformer Alternatives|45|Linear-time sequence modeling;State space model basics;HiPPO and S4;Mamba selective SSM and hardware-aware scan;Mamba-2;RWKV;RetNet;Hybrid attention-SSM;Where these win",
"82|93|Scaling Laws & Pretraining Data|50|Kaplan power laws;Chinchilla compute-optimal tokens per parameter;Inference-cost-aware overtraining;Emergent capability curves;Data sources and web crawls;Deduplication, quality filtering, classifier curation;Contamination;Multilingual and code mixes;Data curriculum;A worked token-vs-parameter budget",
"83|94|Distributed Training at Scale|55|Data parallelism and DDP internals;ZeRO stages 1/2/3 and FSDP;Tensor/model parallelism;Pipeline parallelism and bubbles;Sequence and context parallelism;3D parallelism;NCCL primitives;Mixed precision at scale;Checkpointing and fault tolerance;Multi-node setup",
"84|95|Instruction Tuning & Supervised Fine-Tuning|50|From base model to assistant;Instruction datasets FLAN, Alpaca-style, ShareGPT, synthetic;Chat templates and special tokens;Loss masking on prompts vs completions;Sequence packing;Multi-turn formatting;The LIMA lesson on data quality;Evaluating an SFT model;A hands-on SFT run",
"84-b|96|Parameter-Efficient Fine-Tuning|55|Why full fine-tuning is expensive;Adapter layers;Prefix and prompt tuning;P-tuning v2;IA3;LoRA derived from low-rank updates with rank, alpha, target modules;QLoRA with 4-bit NF4, double quantization, paged optimizers;DoRA;Adapter merging and multi-LoRA serving;A QLoRA fine-tune on one GPU",
"85|97|Alignment I — RLHF|60|Why next-token prediction is not helpfulness;Preference data collection;The Bradley-Terry reward model;Training the reward model;PPO in the LLM setting;The KL penalty against the reference policy;Value head and advantage estimation;Reward hacking and over-optimization;The three-stage pipeline",
"85-b|98|Alignment II — DPO and Modern Preference Optimization|55|DPO derived from the RLHF objective;IPO, KTO, ORPO, SimPO, CPO;GRPO and group-relative advantages;RLAIF and Constitutional AI;Rejection sampling and best-of-n distillation;Process vs outcome reward models;RL for reasoning and verifiable rewards;A practical DPO run",
"86|99|LLM Inference, Quantization & Serving|55|Prefill vs decode;Latency, throughput, TTFT, tokens/sec;Memory math for weights plus KV cache;Post-training quantization vs QAT;INT8/INT4, GPTQ, AWQ, GGUF/llama.cpp, bitsandbytes, SmoothQuant;Speculative decoding and Medusa heads;Continuous batching;vLLM, TGI, TensorRT-LLM, SGLang;Distillation;Pruning and sparsity;Cost per million tokens",
"86-b|100|Prompting, RAG & Agents|60|Zero and few-shot prompting;Chain-of-thought and self-consistency;ReAct;Structured output and function calling;Embeddings and vector databases;Chunking strategies;Hybrid search and reranking;A full RAG pipeline;RAG failure modes;Long-context vs RAG;Tool use and agent loops;Multi-agent patterns;Memory;LLM-as-judge and regression test suites"
],
p7:[
"87|101|Generative Modeling — The Landscape|40|Discriminative vs generative;Explicit vs implicit density;Tractable vs approximate likelihood;The taxonomy tree;The sample-quality, diversity, speed trilemma;How to evaluate generative models",
"88|102|Autoencoders|45|Encoder-bottleneck-decoder;Reconstruction loss;Undercomplete autoencoders vs PCA;Denoising autoencoders;Sparse autoencoders;Contractive autoencoders;Anomaly detection with reconstruction error;Why a plain AE latent is not generative",
"89|103|Variational Autoencoders|60|Latent variable models;Intractable posteriors;Variational inference;The ELBO derived line by line;Reconstruction plus KL interpreted;The reparameterization trick;Gaussian encoder/decoder implementation;Latent interpolation and arithmetic;Posterior collapse;beta-VAE and disentanglement;VQ-VAE and discrete latents",
"90|104|GANs I — Foundations|55|The two-player minimax game;Generator and discriminator objectives;The theoretical optimum and the JS divergence connection;Non-saturating loss;DCGAN guidelines;Training loop mechanics;Mode collapse, vanishing discriminator gradients, oscillation;Stabilization tricks",
"90-b|105|GANs II — Advanced & Applied|55|Wasserstein GAN and Earth Mover distance;Weight clipping vs gradient penalty;Spectral normalization;Conditional GANs;pix2pix;CycleGAN and cycle consistency;StyleGAN 1/2/3 with mapping network, AdaIN, style mixing, latent editing;BigGAN;Inception Score and FID and their flaws",
"91|106|Normalizing Flows & Autoregressive Generators|45|Change of variables;Invertible transformations and Jacobian determinants;Planar and radial flows;Coupling layers NICE and RealNVP;Glow 1x1 convolutions;PixelRNN, PixelCNN, gated PixelCNN;MADE;WaveNet for raw audio;Exact likelihood vs sampling speed",
"92|107|Diffusion Models I — DDPM|60|The forward noising process and its closed form;Variance schedules linear and cosine;The reverse denoising process;Deriving the simplified noise-prediction objective;The U-Net backbone with time conditioning;Training loop;Sampling loop;Connections to score matching and SDEs",
"92-b|108|Diffusion Models II — Modern Image Generation|60|DDIM and deterministic fast sampling;Classifier guidance;Classifier-free guidance and the CFG scale;Latent diffusion and Stable Diffusion;Text conditioning via cross-attention;ControlNet;LoRA, DreamBooth, textual inversion;Inpainting and img2img;SDXL and DiT;Flow matching and rectified flow;Consistency and distillation models;Prompt engineering for images",
"93|109|Multimodal Models|55|Joint embedding spaces;CLIP contrastive pretraining and zero-shot limits;ALIGN, SigLIP;BLIP and BLIP-2 Q-Former;Flamingo perceiver resampler and gated cross-attention;LLaVA-style projector plus LLM;Vision-language fine-tuning;Document and chart understanding;Video-language models;Text-to-video diffusion transformers;Any-to-any models",
"94|110|Speech & Audio Deep Learning|50|Waveforms, sampling rates, STFT, mel spectrograms, MFCCs;Audio augmentation;ASR with CTC loss;RNN-Transducer;Attention-based ASR;Whisper;wav2vec 2.0 and HuBERT;Speaker diarization and verification;Tacotron 2, FastSpeech, VITS;Neural vocoders WaveNet and HiFi-GAN;EnCodec and music generation"
],
p8:[
"95|111|Graph Neural Networks|50|Graph data and why grids and sequences do not cover it;Adjacency and degree matrices;The message-passing framework;Graph Convolutional Networks derived;GraphSAGE sampling and aggregation;Graph Attention Networks;Graph pooling and readout;Node, edge and graph-level tasks;Over-smoothing;Molecules, recommendations, fraud, traffic;PyTorch Geometric hands-on",
"95-b|112|Deep Reinforcement Learning I|55|The agent-environment loop;MDPs, states, actions, rewards, discounting;Policies and value functions;Bellman equations;Dynamic programming;Monte Carlo and TD learning;Q-learning;Exploration vs exploitation and epsilon-greedy;Deep Q-Networks with replay and target networks;Double DQN, Dueling DQN, Prioritized Replay, Rainbow;Training an agent on classic control",
"96|113|Deep Reinforcement Learning II|55|The policy gradient theorem;REINFORCE and baselines;Actor-critic;A2C and A3C;GAE;TRPO trust region;PPO clipped objective in full;DDPG, TD3, SAC for continuous control;Model-based RL and world models;Offline RL;Sim-to-real;How it connects back to LLM alignment",
"96-b|114|Recommenders & Deep Learning on Tabular Data|45|Collaborative filtering and matrix factorization;User and item embeddings;Neural collaborative filtering;Two-tower retrieval plus ranking;Wide and Deep;DeepFM;DIN;SASRec and BERT4Rec;Candidate generation, filtering, ranking, re-ranking;Cold start;Entity embeddings for tabular data;TabNet, FT-Transformer, TabPFN;The honest comparison against XGBoost and LightGBM",
"97|115|Efficient Deep Learning — Compression & NAS|45|Latency, memory and energy budgets;Unstructured vs structured pruning;Magnitude pruning and the Lottery Ticket Hypothesis;Iterative pruning schedules;Quantization-aware training;Knowledge distillation response, feature and relation based;Low-rank factorization;NAS with RL, evolution, DARTS, once-for-all;Hardware-aware design;Edge deployment",
"97-b|116|Robustness, Security & Privacy|50|Adversarial attacks white-box, black-box, transfer, physical;Certified defenses and randomized smoothing;Distribution shift and OOD detection;Data poisoning and backdoors;Model stealing;Membership inference;Differential privacy and DP-SGD;Federated learning;Secure aggregation;Prompt injection and jailbreaks;Threat modeling an ML product",
"98|117|Interpretability & Mechanistic Interpretability|55|Post-hoc vs intrinsic;Feature attribution LIME, SHAP, Integrated Gradients;Counterfactual explanations;Probing classifiers;Circuits, induction heads, superposition, polysemanticity;Sparse autoencoders for feature extraction;Activation patching and causal tracing;Logit lens;Attention analysis and its pitfalls;Why interpretability matters for safety",
"98-b|118|Ethics, Fairness & AI Safety|50|Sources of bias historical, representation, measurement, aggregation, deployment;Fairness definitions and their mathematical incompatibility;Auditing for disparate impact;Mitigation at data, model and output level;Hallucination and factuality;Toxicity and content safety;Copyright and training data;Environmental cost;Model cards and datasheets;Red teaming;Alignment research overview;The regulatory landscape",
"99|119|MLOps & Production Deployment|60|The gap between a notebook and a product;Project structure and packaging;Serialization with state_dict, TorchScript, ONNX, TensorRT, OpenVINO;Serving with FastAPI, TorchServe, Triton, BentoML;Batching and autoscaling;Docker and Kubernetes basics;GPU vs CPU serving economics;Feature stores;CI/CD for models;Monitoring latency, drift, data quality, performance;Shadow deploys, canary, A/B;Retraining pipelines;Incident response",
"99-b|120|Research Workflow — Reading, Reproducing, Staying Current|45|How to read a paper in three passes;arXiv, Papers with Code, Hugging Face;NeurIPS, ICML, ICLR, CVPR, ACL;Reproducing a paper end to end;Benchmark literacy and how leaderboards mislead;Writing up results;Open-sourcing;Building a portfolio;Contributing to open source;Research vs applied vs infra roles",
"100|121|Capstone — Build, Train, Ship, Present|75|Problem framing;Dataset;Baseline;Architecture choice;Training;Ablations;Evaluation;Interpretability check;Deployment;A written report;A review of Days 1-99;Three capstone tracks vision, LLM/NLP, generative;A plan for the next 100 days"
]
};

var ROOT    = (window.SITE && window.SITE.root) || "";
var CURRENT = (window.SITE && window.SITE.current) || 0;
var PHASE   = (window.SITE && window.SITE.phase) || null;
var MODE    = (window.SITE && window.SITE.mode) || "index";

function esc(s){ return String(s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function pad(n){ return ("00"+n).slice(-3); }
function lessonHref(n){ return ROOT + "lessons/lesson-" + pad(n) + ".html"; }
function phaseHref(p){ return ROOT + "phases/phase-" + p.slice(1) + ".html"; }
/* the phase page is where a lesson is meant to be read; stay on the page if we are already there */
function linkFor(l){
  return (MODE === "phase" && l.phase === PHASE) ? "#l" + l.no
                                                 : phaseHref(l.phase) + "#l" + l.no;
}

var LESSONS = [];
PHASES.forEach(function(ph){
  (RAW[ph.id]||[]).forEach(function(row){
    var p = row.split("|");
    LESSONS.push({ day:p[0], no:+p[1], title:p[2], rt:+p[3],
                   chapters:p[4]?p[4].split(";"):[], phase:ph.id, written:ph.written });
  });
});

/* ---------- sidebar ---------- */
var nav = document.getElementById("navscroll");
if (nav){
  var frag = document.createDocumentFragment(), activeEl = null;
  PHASES.forEach(function(ph){
    var wrap = document.createElement("div");
    wrap.className = "navphase" + (ph.id === PHASE ? " here" : ""); wrap.dataset.phase = ph.id;
    var head = document.createElement("div"); head.className = "ph";
    head.innerHTML = '<span class="n">0'+ph.n+'</span><span>'+esc(ph.name)+'</span>' +
      (ph.written ? '<span class="done">notes</span>'
                  : '<span class="done" style="color:var(--rule-2)">index</span>');
    wrap.appendChild(head);
    LESSONS.filter(function(l){ return l.phase===ph.id; }).forEach(function(l){
      var a = document.createElement("a");
      a.className = "navlink" + (l.written ? "" : " stub") + (l.no===CURRENT ? " active" : "");
      a.href = linkFor(l);
      a.dataset.no = l.no;
      if (l.no===CURRENT){ a.setAttribute("aria-current","page"); activeEl = a; }
      a.dataset.hay = (l.day+" "+l.no+" "+l.title+" "+l.chapters.join(" ")).toLowerCase();
      a.innerHTML = '<span class="day">D'+esc(l.day)+'</span><span>'+esc(l.title)+'</span>';
      wrap.appendChild(a);
    });
    frag.appendChild(wrap);
  });
  nav.appendChild(frag);
  if (activeEl) activeEl.scrollIntoView({block:"center"});
}

/* ---------- filter ---------- */
var search = document.getElementById("search");
if (search && nav){
  search.addEventListener("input", function(){
    var q = search.value.trim().toLowerCase(), any = false;
    document.querySelectorAll(".navphase").forEach(function(g){
      var shown = 0;
      g.querySelectorAll("a.navlink").forEach(function(a){
        var hit = !q || a.dataset.hay.indexOf(q) !== -1;
        a.style.display = hit ? "" : "none"; if (hit) shown++;
      });
      g.style.display = shown ? "" : "none"; if (shown) any = true;
    });
    var empty = document.getElementById("navempty");
    if (!any){
      if (!empty){ empty = document.createElement("div"); empty.id="navempty";
        empty.className="navempty"; nav.appendChild(empty); }
      empty.textContent = "No lesson matches \u201c"+search.value+"\u201d. Try: adam, resnet, rope, dice, ctc, lora.";
    } else if (empty) empty.remove();
  });
}

/* ---------- syntax highlighting ---------- */
(function highlight(){
  const KW = "import|from|as|def|class|return|if|elif|else|for|while|in|not|and|or|is|None|True|False|with|try|except|finally|raise|yield|lambda|global|nonlocal|assert|pass|break|continue|self|print|super|len|range|zip|enumerate|isinstance|float|int|str|list|dict|set|sum|max|min|abs|sorted";
  const rx = new RegExp(
    "(#[^\\n]*)" +
    "|('''[\\s\\S]*?'''|\"\"\"[\\s\\S]*?\"\"\"|'(?:\\\\.|[^'\\\\\\n])*'|\"(?:\\\\.|[^\"\\\\\\n])*\")" +
    "|(@[A-Za-z_]\\w*)" +
    "|\\b(" + KW + ")\\b" +
    "|\\b(\\d+\\.?\\d*(?:[eE][-+]?\\d+)?)\\b", "g");
  document.querySelectorAll("pre > code").forEach(code => {
    const src = code.textContent;
    let out = "", last = 0, m;
    rx.lastIndex = 0;
    while ((m = rx.exec(src)) !== null){
      out += esc(src.slice(last, m.index));
      if (m[1])      out += '<span class="tok-com">' + esc(m[1]) + "</span>";
      else if (m[2]) out += '<span class="tok-str">' + esc(m[2]) + "</span>";
      else if (m[3]) out += '<span class="tok-dec">' + esc(m[3]) + "</span>";
      else if (m[4]) out += '<span class="tok-kw">'  + esc(m[4]) + "</span>";
      else if (m[5]) out += '<span class="tok-num">' + esc(m[5]) + "</span>";
      last = m.index + m[0].length;
    }
    out += esc(src.slice(last));
    code.innerHTML = out;
  });
})();

/* ---------- drawer, progress, keyboard ---------- */
var sidebar = document.getElementById("sidebar"), scrim = document.getElementById("scrim");
function closeNav(){ if(sidebar) sidebar.classList.remove("open"); if(scrim) scrim.classList.remove("on"); }
var tgl = document.getElementById("navToggle");
if (tgl) tgl.addEventListener("click", function(){
  sidebar.classList.toggle("open"); scrim.classList.toggle("on"); });
if (scrim) scrim.addEventListener("click", closeNav);
if (nav) nav.addEventListener("click", function(e){ if (e.target.closest("a")) closeNav(); });
var topBtn = document.getElementById("topBtn");
if (topBtn) topBtn.addEventListener("click", function(){ window.scrollTo({top:0,behavior:"smooth"}); });

document.addEventListener("keydown", function(e){
  if (e.key === "Escape") closeNav();
  if (e.key === "/" && document.activeElement !== search && search){ e.preventDefault(); search.focus(); }
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  var p = document.getElementById("prevLink"), n = document.getElementById("nextLink");
  if (e.key === "ArrowLeft"  && p && p.href) location.href = p.href;
  if (e.key === "ArrowRight" && n && n.href) location.href = n.href;
});

var bar = document.getElementById("readbar"), tick = false;
if (bar) addEventListener("scroll", function(){
  if (tick) return; tick = true;
  requestAnimationFrame(function(){
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (scrollY/h)*100 : 0).toFixed(1) + "%";
    tick = false;
  });
}, {passive:true});

/* ---------- scroll spy (phase pages read many lessons in one scroll) ---------- */
if (MODE === "phase" && nav && "IntersectionObserver" in window){
  var byNo = {};
  document.querySelectorAll("a.navlink").forEach(function(a){ byNo[a.dataset.no] = a; });
  var cur = document.querySelector("a.navlink.active");
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (!en.isIntersecting) return;
      var a = byNo[en.target.id.replace(/^l/, "")];
      if (!a || a === cur) return;
      if (cur) cur.classList.remove("active");
      a.classList.add("active"); cur = a;
      var r = a.getBoundingClientRect(), nr = nav.getBoundingClientRect();
      if (r.top < nr.top || r.bottom > nr.bottom) a.scrollIntoView({block:"nearest"});
    });
  }, {rootMargin:"-84px 0px -68% 0px", threshold:0});
  document.querySelectorAll("article.lesson").forEach(function(t){ io.observe(t); });
}
