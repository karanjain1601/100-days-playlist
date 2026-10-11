# 100 Days of Mathematical Prerequisites
### A complete, pure-math YouTube playlist blueprint — 122 lessons, 100 days, zero code

> **Scope assumption:** "Mathematical prerequisites" here means the full math foundation needed for machine learning, AI, data science, and quantitative work — built from absolute beginner level up to graduate-entry level. **No Python, no code, no libraries.** Every derivation is done by hand, on paper.

---

## 1. The numbers

| | |
|---|---|
| **Total days** | 100 |
| **Total lessons** | 122 |
| **Total video runtime** | ≈ 68 h 40 m |
| **Average lesson** | 33 min |
| **Single-lesson days** | 78 |
| **Double-lesson days** | 22 |
| **Daily commitment** | 1 h 30 m – 2 h 30 m (video + paper practice) |
| **Total study hours** | ≈ 180 h |

---

## 2. Phase map

| # | Phase | Days | Lessons | Video time | Exit skill |
|---|-------|------|---------|-----------|-----------|
| 0 | Number Sense & Algebraic Machinery | 1–9 | 1–11 | 5 h 52 m | Manipulate any algebraic expression fluently |
| 1 | Functions, Geometry, Trig & Complex Numbers | 10–18 | 12–22 | 5 h 46 m | Read/graph/invert any standard function |
| 2 | Logic, Sets, Proof & Combinatorics | 19–27 | 23–33 | 5 h 32 m | Write a correct proof; count anything |
| 3 | **Linear Algebra** | 28–49 | 34–58 | 14 h 34 m | Derive SVD, PCA, least squares by hand |
| 4 | Single-Variable Calculus | 50–63 | 59–74 | 8 h 52 m | Differentiate/integrate anything; Taylor expand |
| 5 | Multivariable & Vector Calculus | 64–74 | 75–87 | 7 h 22 m | Gradients, Jacobians, Hessians, Lagrange |
| 6 | Matrix Calculus & Optimization Theory | 75–81 | 88–95 | 4 h 42 m | Differentiate matrix expressions; prove convexity |
| 7 | **Probability** | 82–91 | 96–108 | 7 h 52 m | Full distribution theory + limit theorems |
| 8 | Statistics & Inference | 92–97 | 109–117 | 5 h 10 m | MLE, MAP, testing, regression from scratch |
| 9 | Information Theory, Numerics & Capstone | 98–100 | 118–122 | 2 h 57 m | Entropy, KL, conditioning, final exam |

**Dependency chain:** 0 → 1 → 2 → 3 → 4 → 5 → 6, and 0,1,2,4 → 7 → 8 → 9.
Phase 3 (Linear Algebra) and Phase 7 (Probability) are the two load-bearing pillars — they get the most time on purpose.

---

## 3. The daily timeline template

Every day follows the same shape. Put this in your playlist description so viewers know how to use it.

| Clock | Block | What happens |
|-------|-------|--------------|
| 0:00 – 0:08 | **Warm-up recall** | Re-derive yesterday's key result from a blank page. No notes. |
| 0:08 – 0:50 | **Lesson video** | Watch with pen in hand. Pause at every ▶ *Pause & Try* marker and attempt it before resuming. |
| 0:50 – 1:00 | **Note compression** | Rewrite the lesson onto one index card: definitions, one worked example, one gotcha. |
| 1:00 – 1:45 | **Problem set** | 8–15 problems. Hard-stop at 45 min even if unfinished. |
| 1:45 – 2:00 | **Error log** | Write down every mistake and *why* it happened. This is the highest-value 15 minutes of the day. |

**Double-lesson days** (marked ⚡): run two 25-min video blocks back to back, then one merged 50-min problem set. Budget 2 h 30 m.

**Weekly rhythm:** every 7th day, cut the problem set in half and spend the freed 25 min re-doing your error log from the past week.

---

## 4. Notation for the lesson entries

```
Day N · L## — Lesson Title                    🎥 runtime · 📝 practice
   Covered:   the full detailed sub-topic list
   Worked:    the specific examples demonstrated on screen
   Prove it:  the result the viewer must derive themselves
```

---
---

# PHASE 0 — Number Sense & Algebraic Machinery
**Days 1–9 · Lessons 1–11 · 5 h 52 m**
*Goal: eliminate every algebraic hesitation. Nothing later works if this phase is shaky.*

---

**Day 1 · L1 — Course Map, Study Method & the Number Systems** 🎥 32 m · 📝 40 m
- **Covered:** What "mathematical prerequisites" actually means and the dependency graph of the nine phases; how to read mathematical notation aloud (∀, ∃, ∈, ⊆, Σ, Π, ⇒, ⇔, :=); the difference between *reading* math and *doing* math; building a spaced-repetition index-card system; the error-log method; the number system tower ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ and *why* each extension had to be invented (closure under subtraction → ℤ, division → ℚ, limits/roots → ℝ, √−1 → ℂ); closure, identity, inverse, associativity, commutativity, distributivity as the five rules everything else is built from.
- **Worked:** Show a set closed under + but not −; show ℚ closed under ÷ but not limits (1, 1.4, 1.41, 1.414 … → √2).
- **Prove it:** The set of even integers is closed under + and ×, but not ÷.

**Day 2 · L2 — Integers, Divisibility & Modular Arithmetic** ⚡ 🎥 38 m · 📝 50 m
- **Covered:** Divisibility notation a | b and its properties; the Division Algorithm (existence and uniqueness of q, r); primes, composite numbers, and the Fundamental Theorem of Arithmetic with proof sketch; infinitude of primes (Euclid's proof); GCD and LCM, and the identity gcd·lcm = ab; the Euclidean Algorithm step by step; the Extended Euclidean Algorithm and Bézout's identity ax + by = gcd(a,b); congruence a ≡ b (mod n) as an equivalence relation; arithmetic in ℤₙ; modular inverses and when they exist; Fermat's Little Theorem and Euler's totient (statements + use).
- **Worked:** gcd(1071, 462) by Euclid; solve 17x ≡ 3 (mod 43); find 7¹⁰⁰ mod 13.
- **Prove it:** If d | a and d | b then d | (ax + by) for all integers x, y.

**Day 2 · L3 — Rationals, Irrationals & the Structure of the Real Line** ⚡ 🎥 24 m · 📝 30 m
- **Covered:** Rationals as equivalence classes of integer pairs; lowest terms; terminating vs repeating decimals and the exact criterion (denominator's prime factors ⊆ {2,5}); converting a repeating decimal to a fraction; the classical proof that √2 ∉ ℚ; irrationality of e and π (statements only); density of ℚ in ℝ; upper/lower bounds, supremum and infimum; the Completeness Axiom stated informally and why it is what separates ℝ from ℚ; interval notation, open/closed/half-open, unbounded intervals.
- **Worked:** 0.4̅5̅ → 5/11; find sup and inf of {1/n : n ∈ ℕ} and note sup is attained, inf is not.
- **Prove it:** √3 is irrational. Then explain why the same proof fails for √4.

**Day 3 · L4 — Exponents, Radicals & Orders of Magnitude** ⚡ 🎥 26 m · 📝 40 m
- **Covered:** The seven exponent laws and their derivations from repeated multiplication; zero and negative exponents as *definitions forced by consistency*; rational exponents and the equivalence a^(m/n) = ⁿ√(aᵐ); simplifying radicals and nested radicals; rationalizing denominators, including conjugate multiplication for binomial surds; scientific notation; orders of magnitude and why they matter for estimating; comparing growth of aⁿ vs nᵃ vs n! vs log n.
- **Worked:** Simplify (8x⁶y⁻³)^(2/3); rationalize 1/(√5 − √2); rank n², 2ⁿ, n log n, n!, √n by growth.
- **Prove it:** a^(m/n) is well defined — i.e. if m/n = p/q then a^(m/n) = a^(p/q).

**Day 3 · L5 — Logarithms** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Logarithm as the inverse of exponentiation; domain/range and the vertical asymptote; the product, quotient, and power laws with derivations; change of base formula and its proof; common (base 10), binary (base 2), and natural (base e) logs and where each is used; log scales, decibels, pH, and why log-log plots turn power laws into straight lines; logarithms as a variance-stabilizing and product-to-sum device; why log-likelihood is used instead of likelihood.
- **Worked:** Solve 3^(2x+1) = 7; expand log(x³√y / z²); read a slope off a log-log plot to recover the exponent.
- **Prove it:** log_b(x) = ln x / ln b.

**Day 4 · L6 — Polynomials & the Factoring Toolkit** 🎥 34 m · 📝 50 m
- **Covered:** Degree, leading coefficient, monic polynomials; addition, multiplication, and long division of polynomials; the complete factoring toolkit (common factor, grouping, difference of squares, sum/difference of cubes, perfect square trinomials, quadratic trinomial splitting, substitution for quartics); the Remainder Theorem and Factor Theorem with proofs; synthetic division; the Rational Root Theorem; symmetric polynomials and elementary symmetric functions; multiplicity of roots.
- **Worked:** Factor x³ − 7x + 6 fully; divide 2x⁴ − 3x² + 1 by x − 2 synthetically; factor x⁴ − 5x² + 4.
- **Prove it:** The Factor Theorem: (x − a) divides p(x) if and only if p(a) = 0.

**Day 5 · L7 — Rational Expressions & Partial Fractions** 🎥 28 m · 📝 45 m
- **Covered:** Simplifying rational expressions and identifying removable restrictions; adding/subtracting with LCD; complex (stacked) fractions; proper vs improper rational functions and reduction by division; the full partial-fraction decomposition procedure — distinct linear factors, repeated linear factors, irreducible quadratic factors, repeated quadratics; solving for coefficients by substitution and by equating coefficients; why this technique reappears in integration, Laplace transforms, and generating functions.
- **Worked:** Decompose (3x + 5)/((x−1)(x+2)); decompose (x² + 1)/((x−2)²(x²+4)).
- **Prove it:** Show that any proper rational function with distinct linear denominator factors admits a unique decomposition.

**Day 6 · L8 — Equations & Inequalities** 🎥 36 m · 📝 50 m
- **Covered:** Equivalent equations and operations that preserve/destroy solution sets (squaring, multiplying by an expression, taking logs); extraneous roots; linear equations; deriving the quadratic formula by completing the square; the discriminant and root classification; Vieta's formulas for sums and products of roots; equations reducible to quadratics; radical and absolute-value equations; systems of linear equations by substitution/elimination (preview of Gaussian elimination); polynomial and rational inequalities via sign charts; compound inequalities.
- **Worked:** Complete the square on 2x² − 8x + 3; solve √(x+5) = x − 1 and identify the extraneous root; sign-chart (x−1)(x+2)/(x−3) ≥ 0.
- **Prove it:** Derive the quadratic formula from ax² + bx + c = 0 without looking.

**Day 7 · L9 — Absolute Value, Intervals & Classical Inequalities** 🎥 30 m · 📝 45 m
- **Covered:** |x| as distance, as √(x²), and as a piecewise function; properties |ab| = |a||b|, |a/b| = |a|/|b|; the Triangle Inequality with proof and its reverse form ||a| − |b|| ≤ |a − b|; solving |f(x)| < c and |f(x)| > c; interval and set-builder notation; the AM–GM inequality (two-variable proof, n-variable statement); the Cauchy–Schwarz inequality in scalar form and its proof via the discriminant trick; Bernoulli's inequality; why these three inequalities are the workhorses of every later bound.
- **Worked:** Solve |2x − 3| ≤ 7; prove AM ≥ GM for two positives; use Cauchy–Schwarz to bound (a+b+c)².
- **Prove it:** The triangle inequality |a + b| ≤ |a| + |b|, by cases.

**Day 8 · L10 — Sequences, Series & Sigma Notation** 🎥 34 m · 📝 45 m
- **Covered:** Sequences as functions on ℕ; explicit vs recursive definitions; sigma and pi notation, index shifting, splitting and reindexing sums; linearity of Σ; arithmetic sequences and the sum formula (Gauss derivation); geometric sequences and the finite sum formula with derivation; infinite geometric series and the |r| < 1 condition; sums of powers Σk, Σk², Σk³ with derivations; telescoping sums; double sums and swapping order of summation; harmonic series divergence (grouping proof).
- **Worked:** Evaluate Σ_{k=1}^{n} (2k − 1); collapse Σ (1/k − 1/(k+1)); sum 3 + 3/4 + 3/16 + …
- **Prove it:** Σ_{k=1}^{n} k = n(n+1)/2 in two different ways.

**Day 9 · L11 — Factorials, Binomial Theorem & Phase 0 Workshop** 🎥 40 m · 📝 60 m
- **Covered:** Factorials and 0! = 1 as a forced convention; falling and rising factorials; binomial coefficients C(n,k), their symmetry, and Pascal's rule C(n,k) = C(n−1,k−1) + C(n−1,k); Pascal's triangle and the identities readable off it (row sums = 2ⁿ, alternating row sums = 0, hockey-stick identity); the Binomial Theorem with a combinatorial proof; extracting a specific coefficient; the generalized binomial series (1+x)^α for real α (statement, used later in Taylor series); Stirling's approximation (statement); **Workshop:** a 30-problem cumulative set covering L1–L10.
- **Worked:** Coefficient of x⁵ in (2x − 3)⁸; expand (1 + x)^(1/2) to four terms.
- **Prove it:** Σ_{k=0}^{n} C(n,k) = 2ⁿ combinatorially (count subsets) and algebraically (set x = 1).

---
---

# PHASE 1 — Functions, Geometry, Trigonometry & Complex Numbers
**Days 10–18 · Lessons 12–22 · 5 h 46 m**
*Goal: know every standard function's shape, inverse, domain, and behaviour cold.*

---

**Day 10 · L12 — Functions: The Central Object** 🎥 36 m · 📝 50 m
- **Covered:** Function as a rule and as a set of ordered pairs; domain, codomain, range and why codomain ≠ range; well-definedness and the vertical line test; finding natural domains (division by zero, even roots, logs); injective (one-to-one), surjective (onto), bijective — with the horizontal line test; composition f∘g, its domain, and non-commutativity; inverse functions, existence conditions, and the reflection-in-y=x picture; restricting domains to force invertibility; piecewise-defined functions; implicit vs explicit definitions; identity and constant functions.
- **Worked:** Find the domain of ln(x² − 4)/√(6 − x); show f(x) = x³ + x is a bijection on ℝ; invert f(x) = (2x+1)/(x−3).
- **Prove it:** If f and g are injective, then f∘g is injective.

**Day 11 · L13 — Graphs & Transformations** ⚡ 🎥 28 m · 📝 35 m
- **Covered:** The six library functions to memorize (x, x², x³, √x, 1/x, |x|); vertical and horizontal shifts; vertical and horizontal stretches/compressions and why horizontal ones are "backwards"; reflections across both axes; order of operations when composing transformations; even and odd functions with algebraic tests and symmetry; periodic functions; increasing, decreasing, and monotone; bounded above/below; recognizing concavity visually before calculus defines it.
- **Worked:** Graph y = −2|x − 3| + 1 in stages; classify x³ − x, x⁴ + cos x, and x + sin x as even/odd/neither.
- **Prove it:** Every function on ℝ can be written uniquely as the sum of an even and an odd function.

**Day 11 · L14 — Lines, Planes & Coordinate Geometry in 2D and 3D** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Cartesian coordinates; distance and midpoint formulas in ℝ² and ℝ³; slope, and slope conditions for parallel/perpendicular; slope-intercept, point-slope, two-point, and general form Ax + By = C; distance from a point to a line (derivation); the 3D coordinate system, octants, and right-hand orientation; equations of planes ax + by + cz = d and the normal vector; parametric and symmetric equations of a line in 3D; intersections of lines and planes; the equation of a sphere.
- **Worked:** Distance from (3,4) to 3x − 4y + 5 = 0; find the plane through three given points; parametrize the line through two 3D points.
- **Prove it:** Two non-vertical lines are perpendicular iff m₁m₂ = −1.

**Day 12 · L15 — Quadratics & Conic Sections** 🎥 32 m · 📝 45 m
- **Covered:** Vertex form and completing the square in two variables; the parabola as a locus (focus and directrix); the circle; the ellipse — standard form, foci, major/minor axes, eccentricity; the hyperbola — standard form, foci, asymptotes; the general second-degree equation Ax² + Bxy + Cy² + Dx + Ey + F = 0; the discriminant B² − 4AC as the conic classifier; rotation of axes to eliminate the xy term; **writing a conic as a quadratic form** xᵀAx = 1 — the direct bridge to Phase 3's eigen-analysis and to Gaussian contour ellipses in Phase 7.
- **Worked:** Convert 9x² + 4y² − 36x + 8y + 4 = 0 to standard form; classify 5x² + 4xy + 5y² = 9 and identify its axes.
- **Prove it:** For an ellipse, the sum of distances to the two foci is constant.

**Day 13 · L16 — Polynomial & Rational Function Behaviour** 🎥 30 m · 📝 40 m
- **Covered:** End behaviour determined by degree and leading coefficient; roots, multiplicity, and how the graph crosses vs touches; the intermediate-value idea for locating roots; rational functions; vertical asymptotes vs removable holes (why factor cancellation matters); horizontal asymptotes by degree comparison; oblique/slant asymptotes via polynomial division; curvilinear asymptotes; a complete sketching checklist (domain → intercepts → asymptotes → sign chart → shape).
- **Worked:** Full sketch of (x² − x − 6)/(x − 1); identify the hole in (x² − 4)/(x − 2).
- **Prove it:** A polynomial of odd degree with real coefficients has at least one real root.

**Day 14 · L17 — Exponential & Logarithmic Functions** 🎥 34 m · 📝 45 m
- **Covered:** aˣ for a > 0, its shape, domain/range, asymptote, and the a > 1 vs a < 1 cases; two definitions of e — the limit (1 + 1/n)ⁿ and the series Σ1/n! — and why they agree; continuous compounding; exponential growth and decay models, doubling time and half-life; the natural log as inverse of eˣ; solving exponential equations; the **logistic/sigmoid function** σ(x) = 1/(1 + e^(−x)): domain, range, symmetry σ(−x) = 1 − σ(x), inflection point, and saturation; **softmax** as its multi-input generalization and the shift-invariance property; the log-sum-exp function and why it is used for numerical stability.
- **Worked:** Population doubling problems; show σ′(x) = σ(x)(1 − σ(x)) will follow in Phase 4; verify softmax is invariant to adding a constant to all inputs.
- **Prove it:** σ(x) = 1 − σ(−x), and the sigmoid's inflection point is at x = 0.

**Day 15 · L18 — Trigonometry I: Unit Circle & the Six Functions** 🎥 38 m · 📝 50 m
- **Covered:** Angles, degree–radian conversion, and why radians are the only sane unit for calculus; arc length and sector area; the unit circle construction of sin and cos; exact values at 0, π/6, π/4, π/3, π/2 and all quadrant reflections; signs by quadrant; tan, cot, sec, csc as ratios, with their domains and asymptotes; graphs of all six functions; amplitude, period, phase shift, vertical shift for A·sin(Bx − C) + D; sinusoidal modelling; the Law of Sines and Law of Cosines with derivations; area formulas (½ab sin C, Heron's).
- **Worked:** Sketch 3 sin(2x − π/3) + 1 labelling all key points; solve a triangle given SAS and given SSA (ambiguous case).
- **Prove it:** sin²θ + cos²θ = 1 from the unit circle, and derive the other two Pythagorean identities from it.

**Day 16 · L19 — Trigonometry II: Identities, Equations & Inverses** 🎥 36 m · 📝 50 m
- **Covered:** The three Pythagorean identities; even/odd and cofunction identities; sum and difference formulas with a geometric derivation; double-angle and the three forms of cos 2θ; half-angle formulas; product-to-sum and sum-to-product; the harmonic addition formula a sin x + b cos x = R sin(x + φ); strategy for proving identities; solving trigonometric equations over a restricted domain and over all reals (general solution with +2πk); inverse trig functions arcsin, arccos, arctan — the restricted domains that make them functions, their ranges, graphs, and derivative-relevant identities; evaluating composites like sin(arctan x) using a reference triangle.
- **Worked:** Prove (1 − cos 2θ)/sin 2θ = tan θ; solve 2cos²x − cos x − 1 = 0 on [0, 2π); simplify cos(arcsin x).
- **Prove it:** The sum formula sin(A + B) = sin A cos B + cos A sin B.

**Day 17 · L20 — Hyperbolic Functions** 🎥 24 m · 📝 30 m
- **Covered:** Definitions sinh x = (eˣ − e⁻ˣ)/2, cosh x = (eˣ + e⁻ˣ)/2, tanh x and the reciprocals; graphs, domains, ranges, and symmetry; the fundamental identity cosh²x − sinh²x = 1 and the unit-hyperbola parametrization (contrast with the unit circle); addition and double-argument identities and the "Osborn's rule" sign pattern versus trig; inverse hyperbolic functions in closed logarithmic form, e.g. arsinh x = ln(x + √(x²+1)); **tanh as a zero-centred activation function** and its relation to the sigmoid: tanh x = 2σ(2x) − 1; the catenary curve.
- **Worked:** Derive arcosh x = ln(x + √(x²−1)); verify tanh x = 2σ(2x) − 1.
- **Prove it:** cosh²x − sinh²x = 1 directly from the exponential definitions.

**Day 18 · L21 — Complex Numbers I: Algebra & Geometry** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** i as the solution of x² = −1 and ℂ as ordered pairs of reals; addition, multiplication, and division via the conjugate; conjugate properties and z z̄ = |z|²; modulus and argument; the Argand plane; complex numbers as vectors (addition) and as rotation-scalings (multiplication); polar form r(cos θ + i sin θ); **Euler's formula** e^(iθ) = cos θ + i sin θ with the power-series justification; multiplication and division in polar form; De Moivre's Theorem; the n n-th roots of a complex number and roots of unity as vertices of a regular polygon.
- **Worked:** Compute (1 + i)⁸ via polar form; find all cube roots of −8; use De Moivre to derive cos 3θ in terms of cos θ.
- **Prove it:** |z₁z₂| = |z₁||z₂| and arg(z₁z₂) = arg z₁ + arg z₂.

**Day 18 · L22 — Complex Numbers II & Phase 1 Workshop** ⚡ 🎥 26 m · 📝 45 m
- **Covered:** The Fundamental Theorem of Algebra (statement, no proof) and its consequence that every degree-n polynomial has exactly n complex roots with multiplicity; the conjugate root theorem for real-coefficient polynomials; factoring over ℝ into linear and irreducible quadratic factors; e^(iπ) + 1 = 0; complex exponentials and the phasor idea; **why this matters later:** real matrices can have complex eigenvalues (rotation matrices), and complex eigenvalues encode oscillation; **Workshop:** 25-problem cumulative set on L12–L21.
- **Worked:** Factor x⁴ + 4 over ℝ and over ℂ; given that 2 + 3i is a root of a real cubic, find the others.
- **Prove it:** If p has real coefficients and p(z) = 0, then p(z̄) = 0.

---
---

# PHASE 2 — Logic, Sets, Proof & Combinatorics
**Days 19–27 · Lessons 23–33 · 5 h 32 m**
*Goal: read a theorem statement precisely, and write a proof someone else would accept.*

---

**Day 19 · L23 — Propositional Logic** 🎥 30 m · 📝 40 m
- **Covered:** Propositions vs sentences; the connectives ¬, ∧, ∨, →, ↔ and their truth tables; the counterintuitive truth table of implication and why it must be that way; tautology, contradiction, contingency; logical equivalence and the standard equivalence laws (De Morgan, distributive, absorption, double negation); the conditional as ¬p ∨ q; converse, inverse, and contrapositive, and which is equivalent to which; necessary vs sufficient conditions; valid argument forms — modus ponens, modus tollens, hypothetical syllogism, disjunctive syllogism; common fallacies (affirming the consequent, denying the antecedent).
- **Worked:** Build the truth table for (p → q) ∧ (q → r) → (p → r); rewrite "It rains only if the ground is wet" symbolically.
- **Prove it:** ¬(p → q) ≡ p ∧ ¬q using a truth table and then using equivalence laws.

**Day 20 · L24 — Predicate Logic & Quantifiers** ⚡ 🎥 28 m · 📝 35 m
- **Covered:** Predicates, domains of discourse, free vs bound variables; universal ∀ and existential ∃ quantifiers; translating English to logic and back; **nested quantifiers and why order changes meaning** (∀x∃y vs ∃y∀x, with concrete counterexamples); negating quantified statements (¬∀x P ≡ ∃x ¬P); uniqueness quantifier ∃!; quantifiers over multiple domains; **parsing the ε–δ definition of a limit as a nested quantifier statement** and negating it — the single most valuable exercise before Phase 4.
- **Worked:** Translate "every student has taken some course" and negate it; negate "∀ε>0 ∃δ>0 ∀x (0<|x−a|<δ → |f(x)−L|<ε)".
- **Prove it:** ∃x∀y P(x,y) → ∀y∃x P(x,y), and show the converse fails.

**Day 20 · L25 — Set Theory** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** Sets, elements, roster vs set-builder notation; ∈ vs ⊆ vs ⊂; the empty set and why ∅ ⊆ A always; equality by mutual inclusion; union, intersection, difference, symmetric difference, complement; Venn diagrams for two and three sets; the algebra of sets and De Morgan's laws for sets (with element-chasing proofs); power set and |P(A)| = 2^|A|; Cartesian products and ℝⁿ as an n-fold product; indexed families and ⋃/⋂ over an index set; disjoint sets and partitions; Russell's paradox as a caution.
- **Worked:** Prove A ∖ (B ∪ C) = (A ∖ B) ∩ (A ∖ C) by element chasing; list P({a,b,c}).
- **Prove it:** |P(A)| = 2ⁿ for |A| = n, by induction and by a binary-string bijection.

**Day 21 · L26 — Relations, Equivalence & Order** 🎥 28 m · 📝 40 m
- **Covered:** A relation as a subset of A × B; domain, range, inverse relation, composition of relations; matrix and digraph representations; properties — reflexive, irreflexive, symmetric, antisymmetric, transitive — with examples and non-examples of each; equivalence relations and the theorem that equivalence classes partition the set (with proof); the canonical examples (congruence mod n, similarity of matrices, "same cardinality"); partial orders, Hasse diagrams, total orders, well-orderings; maximal/greatest and minimal/least elements; functions re-cast as special relations.
- **Worked:** Verify congruence mod 5 is an equivalence relation and list its classes; draw the Hasse diagram of divisibility on {1,2,3,4,6,12}.
- **Prove it:** Distinct equivalence classes are disjoint.

**Day 22 · L27 — Proof Techniques I: Direct, Contrapositive, Contradiction, Cases** 🎥 34 m · 📝 55 m
- **Covered:** The anatomy of a theorem (hypothesis, conclusion, quantifier structure); what counts as a proof; **direct proof** — starting from the hypothesis and chaining implications; **proof by contrapositive** and when it is easier; **proof by contradiction** and its logical basis; **proof by cases** and exhaustiveness; proving biconditionals (both directions); proving existence (constructive vs non-constructive); disproof by counterexample; **the most common errors**: assuming what you're proving, dividing by a possibly-zero quantity, using a specific example as a general proof, and reversing an implication.
- **Worked:** Prove that if n² is even then n is even (contrapositive); prove there are infinitely many primes (contradiction); prove |x + y| ≤ |x| + |y| (cases).
- **Prove it:** For all integers n, n² + n is even. Then: √2 + √3 is irrational.

**Day 23 · L28 — Proof Techniques II: Mathematical Induction** 🎥 32 m · 📝 50 m
- **Covered:** The well-ordering principle and its equivalence to induction; the structure of an induction proof (base case, inductive hypothesis, inductive step) and why each part is non-negotiable; induction for sum formulas, divisibility statements, and inequalities; **strong induction** and when weak induction is insufficient (e.g. Fibonacci bounds, prime factorization existence); starting at values other than 1; structural/recursive induction; **classic failures**: the "all horses are the same colour" fallacy and what exactly breaks in it; double induction (brief).
- **Worked:** Prove Σk³ = (n(n+1)/2)²; prove 2ⁿ > n² for n ≥ 5; prove every integer > 1 has a prime factor by strong induction.
- **Prove it:** 3 | (n³ − n) for all n ≥ 1.

**Day 24 · L29 — Cardinality & the Sizes of Infinity** 🎥 26 m · 📝 35 m
- **Covered:** Equal cardinality via bijection; finite, countably infinite, and uncountable; ℕ, ℤ, and ℚ are all countable (with explicit bijections and the zigzag enumeration); a countable union of countable sets is countable; **Cantor's diagonal argument** proving ℝ is uncountable, in full detail; |P(A)| > |A| (Cantor's theorem); the continuum and the cardinality notation ℵ₀, 𝔠; the Schröder–Bernstein theorem (statement); why "almost all" real numbers are irrational/transcendental.
- **Worked:** Construct an explicit bijection ℕ → ℤ; run the diagonal argument on a sample list of decimals.
- **Prove it:** The set of finite-length strings over a finite alphabet is countable.

**Day 25 · L30 — Counting I: Permutations & Combinations** 🎥 32 m · 📝 45 m
- **Covered:** The addition and multiplication principles and when each applies; ordered selection with and without repetition; permutations P(n,k) = n!/(n−k)!; permutations of multisets (words with repeated letters) and the multinomial coefficient; circular permutations; combinations C(n,k) and the "divide by the overcount" logic; combinations with repetition; the four-way table (ordered/unordered × with/without repetition); distinguishable vs indistinguishable objects and boxes; the complement trick ("at least one").
- **Worked:** Arrangements of MISSISSIPPI; number of 5-card hands with exactly one pair; number of ways to seat 8 people around a round table.
- **Prove it:** C(n,k) = C(n, n−k) combinatorially, without algebra.

**Day 26 · L31 — Counting II: Inclusion–Exclusion, Pigeonhole & Stars and Bars** 🎥 32 m · 📝 50 m
- **Covered:** Inclusion–exclusion for two, three, and n sets, with a proof via the binomial theorem; counting surjections and derangements; the derangement formula and its e⁻¹ limit; the pigeonhole principle, its generalized form ⌈n/k⌉, and non-obvious applications; stars and bars for non-negative and positive integer solutions of x₁ + … + xₖ = n, and with lower/upper bounds; bijective proofs as a technique; combinatorial identities proved by double counting (Vandermonde's identity, hockey-stick).
- **Worked:** Count integers ≤ 1000 divisible by 2, 3, or 5; number of solutions to x+y+z = 20 with xᵢ ≥ 2; show any 6 people include 3 mutual acquaintances or 3 mutual strangers.
- **Prove it:** Vandermonde's identity Σ C(m,k)C(n,r−k) = C(m+n, r) by a double-counting argument.

**Day 27 · L32 — Recurrence Relations & Generating Functions** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Defining sequences recursively; first-order linear recurrences by iteration; **linear homogeneous recurrences with constant coefficients**: the characteristic equation, distinct roots, repeated roots, and complex roots (oscillating solutions); non-homogeneous recurrences and the particular + homogeneous method; the Fibonacci closed form (Binet's formula) derived in full; **ordinary generating functions**: the formal power series, the dictionary between operations on sequences and operations on functions, and solving a recurrence by generating function; the connection to the geometric series and to partial fractions from L7.
- **Worked:** Solve aₙ = 5aₙ₋₁ − 6aₙ₋₂; derive Binet's formula; solve aₙ = 2aₙ₋₁ + 1 by generating function.
- **Prove it:** Verify Binet's formula satisfies the Fibonacci recurrence and initial conditions.

**Day 27 · L33 — Graphs, Adjacency Matrices & Phase 2 Workshop** ⚡ 🎥 28 m · 📝 45 m
- **Covered:** Graph vocabulary — vertices, edges, directed/undirected, weighted, simple, multigraph; degree and the handshaking lemma; walks, trails, paths, cycles; connectedness and components; trees and their equivalent characterizations; bipartite graphs and the odd-cycle criterion; complete graphs and the edge count C(n,2); **adjacency matrices and incidence matrices** — the explicit bridge into Phase 3; the theorem that (Aᵏ)ᵢⱼ counts walks of length k from i to j; the degree matrix and the graph Laplacian L = D − A (definition and the fact that it is positive semidefinite, to be proved in Phase 3); **Workshop:** 25-problem cumulative set on L23–L32.
- **Worked:** Compute A² for a small graph and interpret the entries; verify handshaking on a drawn graph.
- **Prove it:** In any graph, the number of vertices of odd degree is even.

---
---

# PHASE 3 — Linear Algebra
**Days 28–49 · Lessons 34–58 · 14 h 34 m**
*The single most important phase. Goal: derive least squares, eigendecomposition, SVD and PCA on paper, from scratch.*

---

**Day 28 · L34 — Vectors: Geometry and Algebra** 🎥 34 m · 📝 45 m
- **Covered:** Vector as a directed segment, as an n-tuple, and as an element of an abstract vector space; column vs row convention and why column-first is standard; ℝ², ℝ³, ℝⁿ; components, magnitude, direction; the zero vector; equality and the position-independence of free vectors; standard basis vectors e₁…eₙ; vectors as data points, as feature vectors, as directions, and as parameter settings — four mental models used throughout ML; geometric vs algebraic addition (parallelogram/tip-to-tail); scalar multiplication and negation.
- **Worked:** Decompose (5,−2) in the standard basis; compute magnitudes in ℝ³.
- **Prove it:** ‖cv‖ = |c|‖v‖.

**Day 29 · L35 — Vector Arithmetic, Linear Combinations & Span** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** Vector addition and scalar multiplication axioms; **linear combination** c₁v₁ + … + cₖvₖ as the central operation of the whole subject; the **span** of a set of vectors, defined and visualized (point, line, plane, all of ℝ³); when a vector is in a span (reduces to solving a linear system); spanning sets and redundancy; affine combinations and convex combinations (coefficients summing to 1, and non-negative) with their geometric meaning as lines and segments/hulls — needed again in Phase 6.
- **Worked:** Is (1,2,3) in span{(1,1,0),(0,1,1)}? Describe span{(1,2),(2,4)} and explain the collapse.
- **Prove it:** The span of any set of vectors is closed under addition and scalar multiplication.

**Day 29 · L36 — Dot Product, Norms, Angles & Projections** ⚡ 🎥 38 m · 📝 50 m
- **Covered:** The dot product algebraically (Σaᵢbᵢ) and geometrically (‖a‖‖b‖cos θ), with proof of equivalence via the law of cosines; properties — commutativity, distributivity, bilinearity, positive-definiteness; the Euclidean norm from the dot product; **the Lᵖ norm family**: L¹ (Manhattan), L² (Euclidean), L^∞ (max), general Lᵖ, and their unit-ball shapes — the geometric reason L¹ induces sparsity; unit vectors and normalization; angle between vectors; orthogonality and the zero-dot-product criterion; **Cauchy–Schwarz** |a·b| ≤ ‖a‖‖b‖ with proof and equality condition; the triangle inequality for norms; **cosine similarity**; scalar and vector projection of a onto b, with the derivation of proj_b(a) = (a·b/b·b)b; orthogonal decomposition a = proj + perp.
- **Worked:** Project (3,4) onto (1,1) and verify the residual is orthogonal; compute the L¹, L², L^∞ norms of (3,−4,12); compute cosine similarity of two feature vectors.
- **Prove it:** Cauchy–Schwarz via the discriminant of ‖a + tb‖² ≥ 0.

**Day 30 · L37 — Cross Product & Triple Products** 🎥 26 m · 📝 35 m
- **Covered:** The cross product in ℝ³ via the determinant mnemonic; magnitude ‖a×b‖ = ‖a‖‖b‖ sin θ as parallelogram area; direction by the right-hand rule; anticommutativity, distributivity, and non-associativity; a×a = 0 and the parallel criterion; the scalar triple product a·(b×c) as signed parallelepiped volume and as a 3×3 determinant; coplanarity test; the vector triple product and the BAC−CAB identity; normal vectors to planes; torque and angular momentum as physical instances; **why the cross product is special to ℝ³** (and ℝ⁷) and what replaces it in higher dimensions (the wedge product, mentioned only).
- **Worked:** Area of the triangle with three given 3D vertices; find the plane through three points via a cross product; test four points for coplanarity.
- **Prove it:** a·(a×b) = 0.

**Day 31 · L38 — Linear Independence, Basis & Dimension** 🎥 38 m · 📝 55 m
- **Covered:** Linear dependence and independence — the definition via the trivial-solution-only condition; the equivalent statement that some vector is a combination of the others; testing independence by row reduction; geometric meaning in ℝ², ℝ³; the fact that any set containing 0 is dependent, and any n+1 vectors in ℝⁿ are dependent; **basis** as an independent spanning set; the standard basis and non-standard bases; uniqueness of representation in a basis (with proof); **dimension** and the theorem that all bases of a space have the same size; extending an independent set to a basis and shrinking a spanning set to a basis; coordinates relative to a basis.
- **Worked:** Determine independence of three vectors in ℝ³ by row reduction; find a basis for the span of four given vectors; express a vector in a non-standard basis.
- **Prove it:** If {v₁,…,vₙ} is a basis, the representation of any vector as a combination of them is unique.

**Day 32 · L39 — Systems of Linear Equations & Gaussian Elimination** 🎥 40 m · 📝 55 m
- **Covered:** Linear systems in ℝⁿ; coefficient matrix, augmented matrix; the three elementary row operations and why each preserves the solution set; row echelon form and reduced row echelon form; pivot columns, pivot variables, free variables; back substitution; the three outcomes — unique solution, infinitely many, none — and their geometric pictures (intersecting planes); consistency and the rank criterion; **the general solution as a particular solution plus the null space**; homogeneous systems always having the trivial solution; the algorithm's operation count (~2n³/3) and why pivoting matters numerically.
- **Worked:** Fully reduce a 3×4 augmented system with a free variable and write the parametric solution set; find the value of k making a system inconsistent.
- **Prove it:** Row operations do not change the solution set of a system.

**Day 33 · L40 — Matrices: Anatomy, Types & Basic Operations** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** Matrix as an array, as a list of columns, as a list of rows, and as a linear map; dimensions and indexing conventions; addition, scalar multiplication, and their vector-space structure; transpose and its properties (Aᵀᵀ, (A+B)ᵀ, (AB)ᵀ = BᵀAᵀ); trace and its properties (linearity, tr(AB) = tr(BA), invariance under similarity); **the matrix zoo**: zero, identity, diagonal, scalar, upper/lower triangular, symmetric, skew-symmetric, orthogonal, idempotent, nilpotent, permutation, sparse, banded, block, Toeplitz — with the defining property and a use case for each; block matrices and block operations.
- **Worked:** Decompose any square matrix into symmetric + skew-symmetric parts; verify tr(AB) = tr(BA) on 2×2s.
- **Prove it:** (AB)ᵀ = BᵀAᵀ from the definition of matrix multiplication.

**Day 33 · L41 — Matrix Multiplication, Four Ways** ⚡ 🎥 34 m · 📝 45 m
- **Covered:** The row-times-column definition; **view 2: Ax as a linear combination of A's columns** (the single most useful way to think about it); **view 3: rows of AB as combinations of rows of B**; **view 4: AB as a sum of outer products** (columns of A times rows of B) — the view that makes SVD and low-rank approximation obvious later; matrix multiplication as **composition of linear transformations**, which explains why it is associative but not commutative; conformability; powers of a matrix; the identity as multiplicative identity; failure of cancellation (AB = AC does not give B = C); zero divisors; computational cost O(mnp) and a mention of Strassen.
- **Worked:** Compute one product all four ways and confirm agreement; find nonzero A, B with AB = 0.
- **Prove it:** Matrix multiplication is associative, using the composition-of-maps view.

**Day 34 · L42 — Matrix Inverse & Elementary Matrices** 🎥 34 m · 📝 45 m
- **Covered:** Definition of the inverse and uniqueness; invertible = nonsingular = non-degenerate; the 2×2 formula and its derivation; **the Gauss–Jordan method** [A | I] → [I | A⁻¹] and why it works; elementary matrices as the row operations themselves, and A⁻¹ as a product of elementary matrices; properties (AB)⁻¹ = B⁻¹A⁻¹, (Aᵀ)⁻¹ = (A⁻¹)ᵀ, (cA)⁻¹; singular matrices and the collapse-of-dimension picture; **the Invertible Matrix Theorem** — a full list of a dozen equivalent conditions, revisited and extended after every later lesson; why you almost never actually compute an inverse to solve a system.
- **Worked:** Invert a 3×3 by Gauss–Jordan; show a matrix with a zero row is singular.
- **Prove it:** If A is invertible, its inverse is unique.

**Day 35 · L43 — LU Decomposition & Efficient Solving** 🎥 30 m · 📝 40 m
- **Covered:** Factoring A = LU by recording the elimination multipliers; the "L holds what you did, U holds what you got" intuition; forward substitution then back substitution; why LU is the right structure when solving Ax = b for many different b; partial pivoting and PA = LU; when LU fails without pivoting; LDU form; **Cholesky factorization A = LLᵀ** for symmetric positive definite matrices — stated here, justified in L56 — and its halved cost; operation counts compared.
- **Worked:** Factor a 3×3 into LU by hand and solve two right-hand sides; produce PA = LU for a matrix needing a row swap.
- **Prove it:** If A = LU with L unit lower triangular and U upper triangular, the factorization is unique.

**Day 36 · L44 — Determinants I: Definition & Computation** ⚡ 🎥 34 m · 📝 45 m
- **Covered:** The 2×2 determinant from the area of a parallelogram; the 3×3 rule of Sarrus and its trap (it does not generalize); **cofactor (Laplace) expansion** along any row or column, minors, and the checkerboard sign pattern; the **Leibniz/permutation definition** Σ sgn(σ)∏aᵢσ(ᵢ) and how it reconciles with cofactor expansion; the axiomatic characterization (multilinear, alternating, det I = 1) and why it pins the function down uniquely; **computing determinants by row reduction** — how each of the three row operations changes the value — which is the only practical method for large n; determinant of triangular and diagonal matrices.
- **Worked:** Evaluate a 4×4 by cofactor expansion along a row with zeros, then by row reduction, and compare effort.
- **Prove it:** Swapping two rows negates the determinant.

**Day 36 · L45 — Determinants II: Properties, Geometry & Applications** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** det(AB) = det A · det B (with the elementary-matrix argument); det(Aᵀ) = det A; det(A⁻¹) = 1/det A; det(cA) = cⁿ det A (a common trap); det ≠ 0 ⇔ invertible; **geometric meaning**: the determinant is the signed volume scaling factor of the linear map, with the sign encoding orientation reversal; area and volume of parallelograms/parallelepipeds; the determinant as the Jacobian factor in change of variables (forward reference to L85); the adjugate matrix and A⁻¹ = adj(A)/det(A); **Cramer's rule**, its derivation, and why it is theoretically pretty but computationally terrible; the Vandermonde determinant.
- **Worked:** Volume of a parallelepiped; solve a 2×2 system by Cramer; show a shear has determinant 1 and interpret it.
- **Prove it:** det(AB) = det(A)det(B) for 2×2 matrices directly, then argue the general case.

**Day 37 · L46 — Vector Spaces & Subspaces (Axiomatic)** 🎥 34 m · 📝 45 m
- **Covered:** The eight vector space axioms over a field; why abstraction pays off; **the standard examples**: ℝⁿ, ℂⁿ, the space of m×n matrices, polynomials of degree ≤ n, all polynomials, continuous functions on [a,b], sequences, and solution sets of homogeneous linear ODEs; non-examples and which axiom fails; **subspaces** and the three-part subspace test (contains 0, closed under +, closed under scalar ·); subspaces of ℝ² and ℝ³ classified completely; the intersection of subspaces is a subspace but the union generally is not; sum and **direct sum** of subspaces, and the dimension formula dim(U + W) = dim U + dim W − dim(U ∩ W); trivial subspaces.
- **Worked:** Show the set of symmetric matrices is a subspace and find its dimension; show {(x,y): x + y = 1} is not.
- **Prove it:** The intersection of two subspaces is a subspace; give a counterexample for the union.

**Day 38 · L47 — The Four Fundamental Subspaces** 🎥 38 m · 📝 55 m
- **Covered:** For A of size m×n: the **column space** C(A) ⊆ ℝᵐ (all reachable outputs), the **null space** N(A) ⊆ ℝⁿ (all inputs killed), the **row space** C(Aᵀ) ⊆ ℝⁿ, and the **left null space** N(Aᵀ) ⊆ ℝᵐ; finding a basis for each from the RREF (pivot columns of the *original* A for C(A); nonzero rows of R for the row space; special solutions for N(A)); their dimensions r, n−r, r, m−r; **the orthogonality relations**: row space ⊥ null space in ℝⁿ, column space ⊥ left null space in ℝᵐ, and the resulting orthogonal decompositions ℝⁿ = C(Aᵀ) ⊕ N(A) and ℝᵐ = C(A) ⊕ N(Aᵀ); the "big picture" diagram of A mapping between these; solvability of Ax = b restated as b ∈ C(A).
- **Worked:** For a specific 3×4 matrix, produce a basis for all four subspaces and verify every dimension and orthogonality claim.
- **Prove it:** N(A) ⊥ C(Aᵀ), directly from Ax = 0.

**Day 39 · L48 — Rank & the Rank–Nullity Theorem** 🎥 32 m · 📝 45 m
- **Covered:** Rank as the number of pivots, as dim C(A), as dim C(Aᵀ), and as the maximum number of independent rows or columns — and the theorem that **row rank = column rank**, with proof; full row rank, full column rank, full rank, rank-deficient; **rank–nullity**: rank(A) + nullity(A) = n, proved from the RREF pivot/free-variable split; the general version for linear maps dim(ker) + dim(im) = dim(domain); rank inequalities: rank(AB) ≤ min(rank A, rank B), rank(A+B) ≤ rank A + rank B, Sylvester's rank inequality; rank of AᵀA equals rank of A (proved, and used heavily in least squares); rank-one matrices as outer products uvᵀ; the rank of a data matrix as the number of genuinely independent features.
- **Worked:** Compute rank and nullity for a 4×5 matrix and verify the theorem; show rank(uvᵀ) = 1.
- **Prove it:** N(AᵀA) = N(A), and deduce rank(AᵀA) = rank(A).

**Day 40 · L49 — Linear Transformations** 🎥 36 m · 📝 50 m
- **Covered:** Definition via additivity and homogeneity; T(0) = 0 as a consequence; examples and non-examples (translation is affine, not linear); **every linear map from ℝⁿ to ℝᵐ is matrix multiplication** — build the matrix by feeding in basis vectors; kernel and image, and their identification with null space and column space; injective ⇔ trivial kernel, surjective ⇔ image = codomain; isomorphism and the fact that every n-dimensional real vector space is isomorphic to ℝⁿ; **the geometric transformation catalogue in 2D**: rotation by θ, reflection across a line, scaling, shear, orthogonal projection onto a line — each with its matrix derived; composition as matrix product; affine maps Ax + b and the homogeneous-coordinate trick; **the linear layer of a neural network as exactly an affine map**.
- **Worked:** Build the rotation matrix from first principles; find the matrix of "reflect across y = x then scale y by 3"; show why a rotation by θ then φ gives the angle-sum identities for free.
- **Prove it:** T is injective if and only if ker T = {0}.

**Day 41 · L50 — Change of Basis & Similarity** 🎥 34 m · 📝 50 m
- **Covered:** Coordinate vectors [v]_B relative to a basis; the change-of-coordinates matrix P_{B←C} built from writing one basis in terms of the other; converting coordinates in both directions; the matrix of a linear map **relative to a basis** and how it changes: A' = P⁻¹AP; **similarity** of matrices, its status as an equivalence relation, and its meaning ("same map, different coordinates"); **similarity invariants**: rank, trace, determinant, characteristic polynomial, eigenvalues — proved or stated; choosing a basis to make a matrix simple, which is exactly the motivation for diagonalization in L55; the special case of orthonormal bases where P⁻¹ = Pᵀ.
- **Worked:** Convert a vector between two bases of ℝ²; find the matrix of a projection in a rotated basis and observe how much simpler it becomes.
- **Prove it:** Similar matrices have equal trace and equal determinant.

**Day 42 · L51 — Orthogonality & Orthonormal Bases** 🎥 32 m · 📝 45 m
- **Covered:** Orthogonal and orthonormal sets; the theorem that orthogonal nonzero vectors are automatically independent; **the coordinate shortcut**: in an orthonormal basis, coefficients are just dot products, cᵢ = v·uᵢ — no system solving required; orthogonal complements S^⊥ and their properties ((S^⊥)^⊥ = S for subspaces, dim S + dim S^⊥ = n); **orthogonal matrices**: QᵀQ = I, Q⁻¹ = Qᵀ, columns orthonormal, determinant ±1, preservation of lengths and angles, the rotation/reflection classification; Parseval's identity ‖v‖² = Σ(v·uᵢ)²; why orthonormal bases are numerically ideal (perfect conditioning).
- **Worked:** Verify a given 3×3 is orthogonal and identify it as a rotation; expand a vector in an orthonormal basis using dot products only.
- **Prove it:** Orthogonal matrices preserve the dot product: (Qx)·(Qy) = x·y.

**Day 43 · L52 — Gram–Schmidt & QR Decomposition** 🎥 34 m · 📝 45 m
- **Covered:** The Gram–Schmidt process derived step by step as "subtract off the projections onto everything so far"; normalization; what happens when a vector is dependent (you get zero — and that detects dependence); classical vs **modified Gram–Schmidt** and why the modified version is numerically superior; **QR decomposition** A = QR with Q orthonormal columns and R upper triangular, read directly off the Gram–Schmidt bookkeeping; existence and uniqueness (with positive diagonal R); full vs reduced QR; **Householder reflections** and Givens rotations as the alternatives actually used in practice (conceptual overview); using QR to solve Ax = b and least squares stably.
- **Worked:** Orthonormalize three vectors in ℝ³ and assemble Q and R; verify A = QR.
- **Prove it:** The Gram–Schmidt output spans the same subspace as the input at every stage.

**Day 44 · L53 — Projections & Least Squares** 🎥 38 m · 📝 55 m
- **Covered:** Projection onto a line revisited; **projection onto a subspace**: the matrix P = A(AᵀA)⁻¹Aᵀ, derived from the orthogonality of the residual; properties of projection matrices — symmetric, idempotent (P² = P), eigenvalues 0 and 1, rank = dim of the subspace; I − P as the complementary projection; **the least squares problem**: minimize ‖Ax − b‖², what to do when Ax = b has no solution; **the normal equations AᵀAx̂ = Aᵀb** derived three ways (geometry of the residual, calculus, and projection); invertibility of AᵀA when A has full column rank; fitting a line, a polynomial, and a general linear model by hand; residuals, the fitted values Pb, and the geometry of the decomposition b = Pb + (I−P)b; weighted least squares; solving least squares via QR instead of the normal equations, and why that is better conditioned.
- **Worked:** Fit a least-squares line to four data points entirely by hand; fit a quadratic to five points; compute and interpret the projection matrix.
- **Prove it:** The least-squares solution makes the residual orthogonal to the column space, and derive the normal equations from that fact alone.

**Day 45 · L54 — Eigenvalues & Eigenvectors I** 🎥 38 m · 📝 55 m
- **Covered:** The defining equation Av = λv and its geometric meaning (directions the map only stretches); why v = 0 is excluded but λ = 0 is allowed (and what λ = 0 means — a nontrivial null space); deriving the **characteristic equation** det(A − λI) = 0; the characteristic polynomial, its degree, and its coefficients; computing eigenvalues for 2×2 and 3×3 by hand; **eigenspaces** as null spaces of A − λI; finding eigenvectors by solving the homogeneous system; **trace = sum of eigenvalues** and **determinant = product of eigenvalues**, both proved from the characteristic polynomial; eigenvalues of triangular matrices; complex eigenvalues of rotation matrices and their oscillatory meaning; eigenvalues of A + cI, cA, Aᵏ, A⁻¹, Aᵀ.
- **Worked:** Full eigen-analysis of a 3×3 with a repeated eigenvalue; eigenvalues of a 2D rotation and interpretation.
- **Prove it:** Eigenvectors corresponding to distinct eigenvalues are linearly independent.

**Day 46 · L55 — Eigenvalues II: Diagonalization & Matrix Powers** 🎥 36 m · 📝 50 m
- **Covered:** An **eigenbasis** and the factorization A = PDP⁻¹; the diagonalizability criterion (n independent eigenvectors); **algebraic vs geometric multiplicity**, the inequality gm ≤ am, and **defective matrices** where diagonalization fails (with the canonical shear example); the theorem that n distinct eigenvalues guarantees diagonalizability; **computing Aᵏ = PDᵏP⁻¹** and why this makes long-run behaviour transparent; the spectral radius and the condition for Aᵏ → 0; application to linear recurrences (Fibonacci via a 2×2 matrix — connecting back to L32) and to Markov chain steady states (forward to L108); the **matrix exponential** e^A = Σ Aᵏ/k! and its computation via diagonalization; Jordan normal form (statement only, as the repair for defective matrices); the Cayley–Hamilton theorem (statement and use).
- **Worked:** Diagonalize a 3×3 and compute A¹⁰; solve the Fibonacci recurrence with a matrix power; exhibit a defective 2×2 and show why no eigenbasis exists.
- **Prove it:** If A = PDP⁻¹ then Aᵏ = PDᵏP⁻¹.

**Day 47 · L56 — Symmetric Matrices, the Spectral Theorem & Quadratic Forms** 🎥 38 m · 📝 55 m
- **Covered:** Why symmetric matrices are the best-behaved class; **the Spectral Theorem**: a real symmetric matrix has all-real eigenvalues, orthogonal eigenvectors, and admits A = QΛQᵀ with Q orthogonal — each part proved or carefully argued; the spectral decomposition as a sum of rank-one projections A = Σλᵢqᵢqᵢᵀ; **quadratic forms** Q(x) = xᵀAx, the symmetric-matrix normalization, and the change of variables x = Qy that removes all cross terms (**principal axes theorem**) — this is exactly the conic-rotation problem from L15 solved properly; **definiteness**: positive definite, positive semidefinite, negative definite, indefinite, with three equivalent tests (all eigenvalues, all leading principal minors, and the pivot signs); the **Rayleigh quotient** xᵀAx/xᵀx, its range [λ_min, λ_max], and the variational characterization of eigenvalues; why covariance matrices and Gram matrices AᵀA are always PSD (proved); Cholesky existence for PD matrices; the Hessian preview.
- **Worked:** Diagonalize a symmetric 3×3 orthogonally; classify a quadratic form three different ways; identify the conic 5x² + 4xy + 5y² = 9 by eigen-analysis and find its axes.
- **Prove it:** Eigenvectors of a real symmetric matrix for distinct eigenvalues are orthogonal; and AᵀA is always positive semidefinite.

**Day 48 · L57 — Singular Value Decomposition** 🎥 42 m · 📝 60 m
- **Covered:** The problem SVD solves — eigendecomposition needs square and ideally symmetric matrices, but data matrices are neither; **the statement** A = UΣVᵀ for *any* m×n real matrix, with U and V orthogonal and Σ diagonal with non-negative entries; **construction**: V from the eigenvectors of AᵀA, singular values σᵢ = √λᵢ, U from Avᵢ/σᵢ, and the completion of U; existence and essential uniqueness; **the geometric picture**: every linear map is a rotation, then an axis-aligned scaling, then another rotation — the unit sphere always maps to an ellipsoid; full vs **reduced (thin)** SVD; the relationship between singular values, eigenvalues, rank, and the four fundamental subspaces (the columns of U and V give orthonormal bases for all four); **the outer-product form** A = Σσᵢuᵢvᵢᵀ; **the Eckart–Young theorem** — truncating to the top k terms gives the best rank-k approximation in both Frobenius and spectral norm; energy captured by the top k singular values.
- **Worked:** Compute the full SVD of a 2×3 matrix by hand, start to finish; build the rank-1 approximation and measure the error.
- **Prove it:** The singular values of A are the square roots of the eigenvalues of AᵀA, and AᵀA and AAᵀ have the same nonzero eigenvalues.

**Day 49 · L58 — Pseudoinverse, Matrix Norms, Conditioning, PCA & Phase 3 Workshop** 🎥 40 m · 📝 60 m
- **Covered:** The **Moore–Penrose pseudoinverse** A⁺ = VΣ⁺Uᵀ, the four defining conditions, and the reduction to A⁻¹ when invertible; A⁺ giving the minimum-norm least-squares solution, and the connection to L53's normal equations; **matrix norms**: Frobenius norm and its equality with √Σσᵢ², the spectral norm as σ_max, the nuclear norm as Σσᵢ, induced norms in general, and submultiplicativity; **the condition number** κ(A) = σ_max/σ_min, its interpretation as error amplification, ill-conditioning, and why it governs the convergence speed of gradient descent (forward to L91); **PCA derived from scratch**: centre the data, form the covariance matrix, note it is symmetric PSD, diagonalize it, and show the top eigenvectors maximize projected variance via the Rayleigh quotient — plus the equivalent SVD-of-the-centred-data-matrix route and the equivalence of the two; explained variance ratios; **Workshop:** 30-problem cumulative set spanning L34–L57.
- **Worked:** Compute A⁺ for a rank-deficient matrix; derive the first principal component of a small 2D dataset by hand; compute κ for a nearly singular matrix.
- **Prove it:** The first principal component direction is the top eigenvector of the covariance matrix (via the Rayleigh quotient).

---
---

# PHASE 4 — Single-Variable Calculus
**Days 50–63 · Lessons 59–74 · 8 h 52 m**
*Goal: differentiate and integrate anything, and understand approximation via Taylor series.*

---

**Day 50 · L59 — Limits: Intuition, Notation & Computation** 🎥 36 m · 📝 50 m
- **Covered:** The motivating problems (tangent line, instantaneous rate); intuitive limit notion and the crucial point that lim_{x→a} f(x) says nothing about f(a); one-sided limits and the two-sided existence criterion; limit laws (sum, product, quotient, power, composition) and their conditions; direct substitution for continuous functions; **the indeterminate forms** 0/0, ∞/∞, ∞−∞, 0·∞, 1^∞, 0⁰, ∞⁰ and what "indeterminate" actually means; algebraic techniques — factoring, rationalizing, common denominators, expanding; the Squeeze Theorem with proof-sketch; the two fundamental trig limits lim sin x/x = 1 and lim (1−cos x)/x² = ½ with geometric derivations; limits at infinity and horizontal asymptotes; infinite limits and vertical asymptotes; limits of sequences and the connection to series.
- **Worked:** lim (√(x+4)−2)/x as x→0; lim (3x²−x)/(2x²+5) as x→∞; squeeze x² sin(1/x).
- **Prove it:** lim_{x→0} sin x / x = 1 using the unit-circle area/length inequalities.

**Day 51 · L60 — Formal Limits: The ε–δ Definition** ⚡ 🎥 34 m · 📝 45 m
- **Covered:** Why intuition is insufficient and what a rigorous definition buys us; **the ε–δ definition**, parsed against the quantifier work from L24; the "challenge and response" game interpretation; the geometry of the ε-band and δ-band; **writing an ε–δ proof**: scratch work to find δ in terms of ε, then the formal write-up; linear, quadratic, and reciprocal examples; handling δ = min(…) when the estimate needs a bounded neighbourhood; formal definitions of one-sided limits, limits at infinity, and infinite limits; **negating the definition** to prove a limit does *not* exist; the formal definition of a sequence limit and Cauchy sequences (brief, revisited in L121).
- **Worked:** Prove lim_{x→3}(2x+1) = 7; prove lim_{x→2} x² = 4; prove lim_{x→0} sin(1/x) does not exist.
- **Prove it:** lim_{x→1} (x² + x) = 2 with a fully written ε–δ argument.

**Day 51 · L61 — Continuity, IVT & the Extreme Value Theorem** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Continuity at a point (three conditions) and on an interval; one-sided continuity and continuity on closed intervals; classifying discontinuities — removable, jump, infinite, oscillatory — with examples of each; continuity of polynomials, rationals, roots, trig, exponential, log, and of sums/products/quotients/composites; **the Intermediate Value Theorem**, its hypotheses, its use for root existence and for bisection, and counterexamples when continuity fails; **the Extreme Value Theorem**, why both closed and bounded are required, and its role as the existence guarantee behind every optimization argument later; uniform continuity (definition and contrast, brief).
- **Worked:** Locate a root of x³ − x − 1 to one decimal by IVT bisection; classify all discontinuities of a piecewise function.
- **Prove it:** Every polynomial of odd degree has a real root, using IVT.

**Day 52 · L62 — The Derivative: Definition & Interpretation** 🎥 36 m · 📝 50 m
- **Covered:** Average rate of change and the secant line; the **limit definition** f′(a) = lim_{h→0} [f(a+h) − f(a)]/h and the equivalent (x−a) form; computing derivatives from the definition for x², √x, 1/x, and sin x; the tangent line and linear approximation; notations (Leibniz, Lagrange, Newton) and when each is convenient; the derivative as a *function*; **differentiability implies continuity**, with proof, and the converse failing (|x| at 0, x^(1/3) at 0, the Weierstrass function mentioned); corners, cusps, vertical tangents; one-sided derivatives; the derivative as instantaneous rate, as slope, as sensitivity, and as the local best linear approximation — the interpretation that generalizes to gradients in Phase 5.
- **Worked:** Differentiate √x from the definition; find where a piecewise function fails to be differentiable and why.
- **Prove it:** Differentiability at a implies continuity at a.

**Day 53 · L63 — The Differentiation Rules** 🎥 34 m · 📝 50 m
- **Covered:** Constant, power (for integer, then rational, then real exponents), and constant-multiple rules; sum and difference; **product rule** with proof via the add-and-subtract trick and its geometric area interpretation; **quotient rule** with derivation from the product rule; derivatives of all six trig functions, derived from sin and cos; derivatives of eˣ and aˣ, and the reason e is the base that makes the derivative clean; derivatives of ln x and log_a x; derivatives of the hyperbolic functions; the **inverse function rule** (f⁻¹)′(y) = 1/f′(x) with its geometric picture, applied to derive the derivatives of arcsin, arccos, arctan; higher-order derivatives and notation.
- **Worked:** Differentiate x³ tan x · e^x; derive d/dx arctan x = 1/(1+x²); build a full derivative reference table.
- **Prove it:** The product rule from the limit definition, and the derivative of arcsin from the inverse rule.

**Day 54 · L64 — Chain Rule Deep Dive, Implicit & Logarithmic Differentiation** 🎥 32 m · 📝 50 m
- **Covered:** The chain rule statement, the Leibniz form dy/dx = (dy/du)(du/dx), and an intuition-first justification; multi-level nesting and a systematic outside-in procedure; **the chain rule as the mathematical core of backpropagation** — visualizing a composition as a computational graph and multiplying local derivatives along the path (developed further in L79); combining chain with product and quotient rules; **implicit differentiation** and finding dy/dx for curves not solvable for y (circles, folium of Descartes); tangent lines to implicit curves; **logarithmic differentiation** for products of many factors and for variable-base powers x^x; related rates — the full setup procedure with worked physical problems.
- **Worked:** Differentiate sin³(ln(x²+1)); find dy/dx for x³ + y³ = 6xy; differentiate x^(sin x); a ladder-sliding related-rates problem.
- **Prove it:** Use the chain rule to derive d/dx aˣ = aˣ ln a from eˣ.

**Day 55 · L65 — Mean Value Theorem, Rolle & Monotonicity** 🎥 28 m · 📝 40 m
- **Covered:** Fermat's theorem (interior extrema have zero derivative) and the definition of a critical point; **Rolle's Theorem** with proof from EVT + Fermat; **the Mean Value Theorem** with proof by tilting Rolle, and its geometric statement; the MVT as the engine behind almost every later theorem; consequences — a zero derivative on an interval means constant, two functions with equal derivatives differ by a constant (which is what makes antiderivatives well-behaved), and the increasing/decreasing test; strictly monotone functions and invertibility; the Cauchy Mean Value Theorem and its role in proving L'Hôpital; using MVT to prove inequalities.
- **Worked:** Verify MVT for f(x) = x³ on [0,2]; use MVT to prove |sin a − sin b| ≤ |a − b|.
- **Prove it:** If f′(x) > 0 on an interval, f is strictly increasing there.

**Day 56 · L66 — Higher Derivatives, Concavity & Curve Sketching** 🎥 30 m · 📝 45 m
- **Covered:** The second derivative as the rate of change of the slope, and as acceleration; **concavity** defined via the second derivative and via the chord-above-graph condition; inflection points and the fact that f″ = 0 is necessary but not sufficient; the relationship between the graphs of f, f′, and f″ — reading each off the others; **the complete curve-sketching algorithm**: domain, symmetry, intercepts, asymptotes, f′ sign chart for intervals of increase/decrease and local extrema, f″ sign chart for concavity and inflections, then assemble; sketching from a derivative graph alone; the connection between convexity and f″ ≥ 0 that becomes the foundation of Phase 6.
- **Worked:** Full sketch of f(x) = x/(x²+1) and of xe^(−x); given only the graph of f′, sketch f.
- **Prove it:** If f″ > 0 on an interval, then f lies above each of its tangent lines there.

**Day 57 · L67 — Optimization in One Variable** ⚡ 🎥 32 m · 📝 45 m
- **Covered:** Local vs global (absolute) extrema; the **Closed Interval Method** — evaluate at critical points and endpoints; the **First Derivative Test** and the **Second Derivative Test**, including the inconclusive case f″ = 0; optimization on open and infinite intervals and how to argue global optimality there (monotonicity or a single critical point on a convex function); a systematic word-problem procedure — define variables, write the objective, use the constraint to eliminate a variable, identify the domain, optimize, and interpret; classic applied problems (box volume, minimal fence, least material can, minimum-distance point on a curve, maximum-area inscribed shapes); a first look at least-squares in one parameter as an optimization problem.
- **Worked:** Minimize surface area of a fixed-volume cylinder; find the point on y = x² closest to (0, 2); maximize a revenue function.
- **Prove it:** Among rectangles of fixed perimeter, the square has maximum area — by calculus and by AM–GM.

**Day 57 · L68 — L'Hôpital's Rule & Indeterminate Forms** ⚡ 🎥 26 m · 📝 35 m
- **Covered:** Statement and hypotheses of L'Hôpital's rule for 0/0 and ∞/∞; the Cauchy MVT proof sketch; repeated application; **the common misuses** — applying it when the form is not indeterminate, forgetting to re-check the form, and using the quotient rule by mistake; converting 0·∞ and ∞−∞ into quotients; handling 1^∞, 0⁰, ∞⁰ by taking logarithms; when L'Hôpital loops forever and an algebraic trick is required; growth-rate hierarchy established rigorously: ln x ≺ x^p ≺ aˣ ≺ x! ≺ xˣ; using the rule to evaluate lim (1 + 1/n)ⁿ = e.
- **Worked:** lim x ln x as x→0⁺; lim (1 + a/x)ˣ as x→∞; lim (1/x − 1/sin x) as x→0.
- **Prove it:** lim_{x→∞} ln x / x^p = 0 for every p > 0.

**Day 58 · L69 — Taylor & Maclaurin Series** 🎥 40 m · 📝 55 m
- **Covered:** Linearization revisited and the natural push to higher-order matching; **construction of the Taylor polynomial** by matching derivatives at a point; the Maclaurin case; **the remainder term** in Lagrange form and the resulting error bound; using the bound to guarantee accuracy to a given number of decimals; the **standard expansions** — eˣ, sin x, cos x, ln(1+x), 1/(1−x), (1+x)^α, arctan x — with derivations and intervals of validity; manipulating known series (substitution, multiplication, differentiation, integration) instead of recomputing derivatives; **the second-order Taylor approximation as the direct ancestor of the Hessian-based quadratic model** used in optimization (L80, L92); Taylor series with a shifted centre; Euler's formula re-derived by comparing series.
- **Worked:** Approximate e^0.1 to five decimals with an error bound; get the series for x²e^(−x) by substitution; find sin(0.5) to four decimals and bound the error.
- **Prove it:** Derive the Maclaurin series for cos x and verify that differentiating it gives −sin x.

**Day 59 · L70 — Antiderivatives, Riemann Sums & the Fundamental Theorem** 🎥 36 m · 📝 50 m
- **Covered:** Antiderivatives, the +C family, and why the constant is unavoidable (from L65); basic antiderivative table; **the area problem**, partitions, left/right/midpoint sums, upper and lower sums, and refinement; the **definite integral as a limit of Riemann sums** and the meaning of integrability; properties of the definite integral — linearity, additivity over intervals, orientation reversal, comparison, and the bound |∫f| ≤ ∫|f|; the Mean Value Theorem for integrals and the average value of a function; **FTC Part 1** — the accumulation function's derivative is the integrand — with proof; **FTC Part 2** — evaluation by antiderivatives — with proof; differentiating integrals with variable limits (including chain-rule cases); net vs total area.
- **Worked:** Compute ∫₀¹ x² dx as a limit of Riemann sums; differentiate ∫_{0}^{x²} sin(t²) dt; find the average value of sin on [0, π].
- **Prove it:** FTC Part 1, using the MVT for integrals.

**Day 60 · L71 — Integration Techniques I: Substitution & Integration by Parts** 🎥 34 m · 📝 50 m
- **Covered:** **u-substitution** as the chain rule reversed; choosing u; changing the limits vs back-substituting for definite integrals; substitution with trig, exponential, and radical integrands; symmetry shortcuts for even/odd functions on symmetric intervals; **integration by parts** derived from the product rule; the LIATE heuristic for choosing u and dv; repeated parts; the "circular" case (∫eˣ sin x dx) solved by algebra; parts for ∫ln x and ∫arctan x; parts to build **reduction formulas** for ∫sinⁿx and ∫xⁿeˣ; the tabular method for polynomial × exponential/trig.
- **Worked:** ∫x³√(x²+1) dx; ∫x² ln x dx; ∫eˣ cos x dx by the circular trick.
- **Prove it:** Derive the reduction formula for ∫sinⁿx dx and use it to compute ∫₀^{π/2} sin⁴x dx.

**Day 61 · L72 — Integration Techniques II: Trig Powers, Trig Substitution & Partial Fractions** 🎥 34 m · 📝 50 m
- **Covered:** Powers of sine and cosine — the odd-power and even-power (half-angle) strategies; powers of tangent and secant; products with different arguments via product-to-sum; **trigonometric substitution** for √(a²−x²), √(a²+x²), √(x²−a²), including the right-triangle back-substitution and the domain restrictions; completing the square first when the quadratic is not in standard form; **integration by partial fractions**, using the full decomposition machinery from L7, across all four denominator cases; the ∫dx/(x²+a²) and ∫dx/(x²−a²) building blocks; the Weierstrass t = tan(x/2) substitution for rational functions of sine and cosine (brief); a decision flowchart for "which technique do I reach for?".
- **Worked:** ∫dx/(x²√(x²+4)); ∫(x²+2)/((x−1)(x²+1)) dx; ∫sin³x cos²x dx.
- **Prove it:** ∫dx/√(a²−x²) = arcsin(x/a) + C via substitution.

**Day 62 · L73 — Improper Integrals, the Gaussian Integral & Special Functions** 🎥 30 m · 📝 45 m
- **Covered:** Type I improper integrals (infinite limits) and Type II (unbounded integrand), each as a limit; convergence and divergence; the p-integral tests ∫₁^∞ dx/x^p and ∫₀¹ dx/x^p and the opposite thresholds; the comparison test and limit comparison test for integrals; absolute convergence; **the Gaussian integral** ∫_{−∞}^{∞} e^(−x²) dx = √π, derived by the polar-coordinates double-integral trick (previewing L85) — the normalizing constant of the normal distribution; the general form with mean and variance; **the Gamma function** Γ(t) = ∫₀^∞ x^(t−1)e^(−x) dx, the recursion Γ(t+1) = tΓ(t), Γ(n) = (n−1)!, and Γ(½) = √π; the **Beta function** and its relation to Gamma — both are the normalizing constants of distributions met in Phase 7.
- **Worked:** Evaluate ∫₁^∞ dx/x^1.5; show ∫₀^∞ xe^(−x²) dx converges and find it; compute Γ(5/2).
- **Prove it:** Γ(t+1) = tΓ(t) by integration by parts.

**Day 63 · L74 — Series Convergence, Power Series & Phase 4 Workshop** 🎥 40 m · 📝 60 m
- **Covered:** Sequences vs series; partial sums and the definition of convergence; the geometric and telescoping series revisited with full rigour; **the convergence test toolkit** — n-th term divergence test, integral test (with the p-series conclusion), direct comparison, limit comparison, ratio test, root test, and the alternating series test with its remainder bound — plus a decision flowchart for choosing among them; **absolute vs conditional convergence** and the Riemann rearrangement theorem (statement); **power series**: radius and interval of convergence found by the ratio test, endpoint checking, term-by-term differentiation and integration; representing functions as power series and the link back to L69's Taylor series; a brief note on Fourier series as the orthogonal-basis analogue (tying back to L51); **Workshop:** 30-problem cumulative set on L59–L73.
- **Worked:** Test Σ n²/2ⁿ, Σ 1/(n ln n), Σ (−1)ⁿ/√n; find the interval of convergence of Σ (x−2)ⁿ/(n·3ⁿ) including endpoints.
- **Prove it:** The harmonic series diverges (integral test), and Σ1/n² converges (integral or comparison test).

---
---

# PHASE 5 — Multivariable & Vector Calculus
**Days 64–74 · Lessons 75–87 · 7 h 22 m**
*Goal: gradients, Jacobians, Hessians and constrained optimization — the calculus that machine learning actually runs on.*

---

**Day 64 · L75 — Functions of Several Variables** 🎥 32 m · 📝 45 m
- **Covered:** Functions f: ℝⁿ → ℝ (scalar fields) and F: ℝⁿ → ℝᵐ (vector fields), with ML examples (loss surfaces, layer maps); domains and ranges in ℝⁿ and how to sketch a domain in ℝ²; graphs as surfaces in ℝ³ and why n > 2 cannot be graphed; **level curves and level sets**, contour maps, and reading steepness from contour spacing; level surfaces in ℝ³; traces and cross-sections; the **quadric surface catalogue** — ellipsoid, elliptic/hyperbolic paraboloid, hyperboloid of one and two sheets, cone, cylinders — with the standard equation and the trace-based identification method; the saddle (hyperbolic paraboloid) as the single most important shape in optimization; cylindrical and spherical coordinates introduced.
- **Worked:** Sketch the domain and contours of f(x,y) = ln(4 − x² − y²); identify z = x² − y² from its traces; convert a point between Cartesian, cylindrical, and spherical.
- **Prove it:** The level curves of a plane ax + by + cz = d are parallel straight lines.

**Day 65 · L76 — Limits & Continuity in ℝⁿ** ⚡ 🎥 28 m · 📝 40 m
- **Covered:** Neighbourhoods, open and closed sets, boundary, interior, bounded sets in ℝⁿ; **the definition of a multivariable limit and why it is much stronger than the 1D version** — the value must agree along *every* path, of which there are infinitely many; the path test for showing a limit does not exist (straight lines y = mx, parabolas y = kx², and the classic xy/(x²+y²) and x²y/(x⁴+y²) examples); the polar-coordinate technique for proving a limit does exist; the squeeze theorem in ℝⁿ; continuity of multivariable functions and closure under the usual operations; the multivariable Extreme Value Theorem on closed bounded sets — the existence guarantee for later optimization.
- **Worked:** Show lim xy/(x²+y²) at the origin fails via two paths; prove lim x²y/(x²+y²) = 0 via polar coordinates.
- **Prove it:** If a multivariable limit exists, it is unique.

**Day 65 · L77 — Partial Derivatives** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** ∂f/∂x defined as a limit holding other variables fixed, and its slope-of-a-trace geometry; notations fₓ, ∂f/∂x, ∂ₓf, D₁f; computing partials by treating other variables as constants; partials for three or more variables; **higher-order and mixed partials** and **Clairaut/Schwarz's theorem** on equality of mixed partials (with hypotheses and a counterexample where it fails); the surprising fact that **existence of all partials does not imply continuity** in ℝⁿ, and the stronger notion of differentiability that fixes it; the total differential dz = fₓdx + f_ydy and linear approximation; interpretation of partials as sensitivities — "how much does the loss change if I nudge this one weight?".
- **Worked:** All second partials of f(x,y) = x³y² − e^(xy) and verification of Clairaut; a function with both partials at the origin that is discontinuous there.
- **Prove it:** For f = xʸ, compute fₓ and f_y and explain why they look so different.

**Day 66 · L78 — The Gradient & Directional Derivatives** 🎥 36 m · 📝 50 m
- **Covered:** The **directional derivative** D_uf as a limit along a unit vector, and the formula D_uf = ∇f · u; **the gradient** ∇f as the vector of partials — an object with a direction and a magnitude, not just a list; **the three defining properties**: ∇f points in the direction of steepest ascent, ‖∇f‖ is the maximum rate of increase, and ∇f is orthogonal to the level set through the point — each proved from D_uf = ‖∇f‖cos θ; the direction of steepest *descent* −∇f and its identity as the gradient-descent update direction; tangent planes to surfaces z = f(x,y) and to level surfaces g(x,y,z) = c; normal lines; **linear approximation and the differential in ℝⁿ**, and the definition of differentiability via the vanishing-remainder condition; gradient fields.
- **Worked:** Rate of change of temperature in a given direction; tangent plane to an ellipsoid at a point; show ∇f ⊥ level curve for f = x² + y².
- **Prove it:** The maximum of D_uf over unit u equals ‖∇f‖, attained at u = ∇f/‖∇f‖.

**Day 67 · L79 — Multivariable Chain Rule, the Total Derivative & the Jacobian** 🎥 38 m · 📝 55 m
- **Covered:** The chain rule for z = f(x(t), y(t)) and for z = f(x(s,t), y(s,t)); **tree diagrams** as a systematic bookkeeping device; the general statement as a matrix product; **the Jacobian matrix** J of a map F: ℝⁿ → ℝᵐ, its shape convention, and its identity as the total derivative — the best linear approximation to a nonlinear map; the gradient as the Jacobian of a scalar function (a row vector, and the layout debate that L88 resolves); **composing Jacobians is matrix multiplication — this is precisely backpropagation**, with a fully worked three-layer composition showing the reverse-mode ordering and why reverse accumulation is cheaper when the output is scalar; the Jacobian determinant and its volume-scaling meaning (forward to L85); implicit differentiation in several variables; the Implicit Function Theorem and the Inverse Function Theorem (statements, hypotheses, and meaning).
- **Worked:** ∂z/∂s and ∂z/∂t for a nested map; Jacobian of the polar map (r,θ) → (x,y) and its determinant r; hand-propagate derivatives through f(g(h(x))) with vector-valued intermediates.
- **Prove it:** For F(x) = Ax, the Jacobian is A. Then compute the Jacobian of the softmax function.

**Day 68 · L80 — Second-Order Structure: The Hessian & Taylor in ℝⁿ** 🎥 34 m · 📝 50 m
- **Covered:** The **Hessian matrix** H of second partials, and its symmetry by Clairaut — which immediately hands it every property proved for symmetric matrices in L56; **the second-order Taylor expansion** f(x + h) ≈ f(x) + ∇f(x)ᵀh + ½hᵀH(x)h, derived by reducing to the single-variable case along a line; the local quadratic model as the object every second-order optimizer actually minimizes; **curvature read off the eigenvalues of H** — all positive means a bowl, all negative a dome, mixed signs a saddle; the connection to the quadratic forms and definiteness tests of L56; the Hessian of a quadratic form xᵀAx is 2A (for symmetric A); condition number of the Hessian as the eccentricity of the local level ellipses and hence the difficulty of the optimization landscape.
- **Worked:** Hessian of f = x³ + 2xy² − y³ and its eigen-classification at each critical point; second-order Taylor expansion of e^(x+y) about the origin.
- **Prove it:** For f(x) = ½xᵀAx − bᵀx with A symmetric, show ∇f = Ax − b and H = A.

**Day 69 · L81 — Unconstrained Optimization in ℝⁿ** 🎥 34 m · 📝 50 m
- **Covered:** Local and global extrema in ℝⁿ; **the first-order necessary condition ∇f = 0** and the definition of a critical/stationary point; solving the resulting system of equations; **the second-derivative test via the Hessian**: positive definite → local minimum, negative definite → local maximum, indefinite → saddle, semidefinite → inconclusive; the 2D shortcut using D = fₓₓf_yy − fₓy² and the discriminant's identity as det(H); degenerate cases and how to resolve them by inspection; **saddle points and why they, not local minima, dominate high-dimensional loss landscapes** (a counting/eigenvalue-sign argument); absolute extrema on closed bounded regions — interior critical points plus a boundary analysis, parametrizing each boundary piece; coercivity as a criterion for the existence of a global minimum on an unbounded domain.
- **Worked:** Classify all critical points of f = x⁴ + y⁴ − 4xy; find absolute extrema of xy on the unit disc via interior + boundary.
- **Prove it:** If H is positive definite at a critical point, that point is a strict local minimum (use the second-order Taylor expansion).

**Day 70 · L82 — Constrained Optimization: Lagrange Multipliers** ⚡ 🎥 36 m · 📝 50 m
- **Covered:** The constrained problem "optimize f subject to g = c"; **the tangency insight** — at an optimum the level set of f is tangent to the constraint set, so the gradients are parallel: ∇f = λ∇g; the Lagrangian L(x, λ) = f − λ(g − c) and the equivalence of ∇L = 0 with the system; the full solution procedure and the common algebra pitfalls (dividing by a possibly-zero variable, losing solutions); **multiple constraints** and ∇f = Σλᵢ∇gᵢ, with the constraint-qualification requirement that the ∇gᵢ be independent; **the interpretation of λ as a shadow price** — df*/dc = λ, proved; constrained problems on compact sets and comparing candidate values; **the Rayleigh quotient re-derived by Lagrange multipliers**, showing that maximizing xᵀAx subject to ‖x‖ = 1 gives Ax = λx — the eigenvalue problem falling out of optimization, and with it the PCA derivation of L58 completed from a second direction.
- **Worked:** Maximize xyz subject to x + y + z = 3; minimize distance from the origin to a plane; maximize xᵀAx on the unit sphere and recover the top eigenvector.
- **Prove it:** Derive the eigenvalue equation from the constrained Rayleigh problem, and prove the shadow-price interpretation of λ.

**Day 70 · L83 — Inequality Constraints & the KKT Conditions** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Inequality constraints g(x) ≤ 0 and the notion of **active vs inactive** constraints; the generalized Lagrangian with multipliers for both equality and inequality constraints; **the four KKT conditions** — stationarity, primal feasibility, dual feasibility (μ ≥ 0), and **complementary slackness** (μᵢgᵢ = 0) — each with its geometric meaning; why the multiplier sign matters for inequalities but not equalities; KKT as necessary conditions in general and as sufficient conditions under convexity (forward to L90, L93); the case-analysis solution method (enumerate which constraints are active); worked examples with box constraints and with a norm-ball constraint; **ridge and lasso regression posed as norm-constrained least squares**, and the geometric reason the L¹ ball's corners produce exactly-zero coefficients while the L² ball does not — closing the loop with the unit-ball shapes from L36.
- **Worked:** Minimize x² + y² subject to x + y ≥ 2 by case analysis; solve a 1D lasso subproblem and obtain the soft-thresholding rule by hand.
- **Prove it:** For a convex objective and convex constraints, any KKT point is a global minimum.

**Day 71 · L84 — Double & Triple Integrals** 🎥 36 m · 📝 50 m
- **Covered:** Double integrals as limits of double Riemann sums and as volume under a surface; integration over rectangles and **Fubini's theorem**; **regions of Type I and Type II** and the systematic method for setting up the inner and outer limits; **changing the order of integration** — when it is merely convenient and when it is the only way to evaluate the integral; sketching the region as the essential first step; area as ∬1 dA; triple integrals over boxes and general solids, with all six possible orders; volume, mass, centre of mass, and moments as applications; **the probabilistic reading**: a joint density integrates to 1 over the plane, marginalization is integrating out a variable, and probabilities are volumes — the exact setup for L103.
- **Worked:** Evaluate ∬ over a triangular region both orders; reverse the order to make ∫₀¹∫_y¹ e^(x²) dx dy solvable; set up a triple integral for a tetrahedron's volume.
- **Prove it:** Explain via Fubini why a joint density's marginals are obtained by integrating out the other variable.

**Day 72 · L85 — Change of Variables & the Jacobian Determinant** 🎥 32 m · 📝 45 m
- **Covered:** The 1D substitution rule re-read as a change of variables with a scaling factor; **the general change-of-variables theorem** ∬f dA = ∬ f(x(u,v), y(u,v)) |∂(x,y)/∂(u,v)| du dv, with the Jacobian determinant as the local area-scaling factor — the direct payoff of L45's geometric determinant; **polar coordinates** and dA = r dr dθ derived rather than memorized; **cylindrical** (dV = r dz dr dθ) and **spherical** (dV = ρ² sin φ dρ dφ dθ) coordinates, with careful attention to the φ convention; choosing a substitution to simplify either the region or the integrand; the Gaussian integral finished properly in polar coordinates (completing L73); **the change-of-variables formula for probability densities**, p_Y(y) = p_X(x)|det J| — the exact statement needed for transformations of random variables in L106 and for normalizing flows.
- **Worked:** ∬e^(−(x²+y²)) over the plane in polar; volume of a sphere in spherical coordinates; transform a uniform density through y = x² and get the new density.
- **Prove it:** Derive dA = r dr dθ from the Jacobian of the polar map.

**Day 73 · L86 — Vector Fields, Line Integrals & Conservative Fields** 🎥 34 m · 📝 45 m
- **Covered:** Vector fields in ℝ² and ℝ³, sketching them, and gradient fields as a special case; parametrized curves, smooth and piecewise-smooth, and arc length ds; **line integrals of a scalar field** ∫f ds and **of a vector field** ∫F·dr, with the work interpretation; orientation dependence; the differential form ∫P dx + Q dy; **conservative vector fields**, potential functions, and the **Fundamental Theorem for Line Integrals** — path independence and the fact that closed-loop integrals vanish; the cross-partial test ∂P/∂y = ∂Q/∂x for conservativeness on a simply connected domain, and the classic counterexample on a punctured domain; recovering a potential function by partial integration; the physical reading (work, circulation, flux).
- **Worked:** ∫F·dr along two different paths for a non-conservative field, showing they differ; test a field for conservativeness and find its potential.
- **Prove it:** Every gradient field is conservative, and its closed-loop integrals are zero.

**Day 74 · L87 — Divergence, Curl, the Big Theorems & Phase 5 Workshop** 🎥 40 m · 📝 55 m
- **Covered:** The del operator ∇ as gradient, divergence, and curl; **divergence** ∇·F as local outflow/source density; **curl** ∇×F as local rotation, with the paddle-wheel picture; the identities curl(grad f) = 0 and div(curl F) = 0 and their interpretations; the **Laplacian** ∇²f = div grad f, harmonic functions, and its later appearance as the trace of the Hessian; **Green's theorem** relating a plane circulation integral to a double integral of the curl, with the area corollary; **Stokes' theorem** as its 3D surface generalization; the **Divergence (Gauss) theorem** relating flux through a closed surface to the triple integral of divergence; the unifying view that all four (including FTC) are one statement — the integral of a derivative over a region equals the original evaluated on the boundary; surface integrals and flux, parametrized surfaces and dS; **Workshop:** 25-problem cumulative set on L75–L86.
- **Worked:** Verify Green's theorem on a specific field and square region; compute flux through a sphere using the divergence theorem; compute a Laplacian and check harmonicity.
- **Prove it:** curl(∇f) = 0 for any twice-differentiable f, and explain why this is Clairaut's theorem in disguise.

---
---

# PHASE 6 — Matrix Calculus & Optimization Theory
**Days 75–81 · Lessons 88–95 · 4 h 42 m**
*Goal: differentiate expressions in matrices and vectors without leaving matrix notation, and reason about optimization on paper.*

---

**Day 75 · L88 — Matrix Calculus I: Layouts, Shapes & Basic Derivatives** 🎥 36 m · 📝 50 m
- **Covered:** Why matrix calculus exists — index-by-index differentiation is correct but unusable at scale; **the six derivative types** organized by input/output shape: scalar-by-scalar, scalar-by-vector (gradient), vector-by-scalar, vector-by-vector (Jacobian), scalar-by-matrix, and matrix-by-scalar; **numerator vs denominator layout**, the transpose disagreement between textbooks, and the recommendation to fix one convention and state it every time; **the shape-checking discipline** — the derivative of a scalar with respect to an n-vector must itself be an n-vector, and this single check catches most errors; deriving ∂(aᵀx)/∂x = a and ∂(xᵀa)/∂x = a from the index definition; ∂(Ax)/∂x = A; the differential method (compute df, then read off the gradient from df = gᵀdx) as the most reliable technique; the trace trick tr(AB) = tr(BA) as the tool for moving factors around.
- **Worked:** Derive ∂(aᵀx)/∂x by indices and then by differentials; check the shape of every result in a small table.
- **Prove it:** ∂(xᵀx)/∂x = 2x, both ways.

**Day 76 · L89 — Matrix Calculus II: The Identity Toolbox** 🎥 38 m · 📝 55 m
- **Covered:** **The core identity list, each derived rather than quoted**: ∇(aᵀx) = a; ∇(xᵀAx) = (A + Aᵀ)x, reducing to 2Ax for symmetric A; ∇‖x‖² = 2x; ∇‖Ax − b‖² = 2Aᵀ(Ax − b); ∂tr(AX)/∂X = Aᵀ; ∂tr(XᵀAX)/∂X; ∂log det(X)/∂X = X⁻ᵀ; ∂X⁻¹/∂t = −X⁻¹(∂X/∂t)X⁻¹; ∂det(X)/∂X = det(X)X⁻ᵀ; the chain rule for matrix expressions and the Kronecker/vec notation (brief, for completeness); **the full derivation of the normal equations by matrix calculus**, expanding ‖Ax−b‖² = xᵀAᵀAx − 2bᵀAx + bᵀb, differentiating, and setting to zero — compared side by side with the geometric derivation from L53; **the ridge regression closed form** (AᵀA + λI)⁻¹Aᵀb derived the same way, with a note on why the λI term guarantees invertibility (via L56's definiteness); gradients of common loss functions (squared error, cross-entropy with softmax) worked out by hand.
- **Worked:** Derive the OLS and ridge solutions; differentiate the softmax cross-entropy loss and obtain the famous (ŷ − y) result.
- **Prove it:** ∇_x (xᵀAx) = (A + Aᵀ)x from first principles.

**Day 77 · L90 — Convex Sets & Convex Functions** 🎥 36 m · 📝 50 m
- **Covered:** **Convex sets** — the segment definition, and the catalogue: hyperplanes, halfspaces, balls in any norm, ellipsoids, polyhedra, the positive semidefinite cone; convex hulls; operations preserving set convexity (intersection, affine image, Cartesian product); **convex functions** via the chord-above-graph inequality f(θx + (1−θ)y) ≤ θf(x) + (1−θ)f(y); strict and strong convexity; concavity; **the first-order condition** f(y) ≥ f(x) + ∇f(x)ᵀ(y − x) — the graph lies above every tangent plane, which is why a zero gradient forces a global minimum; **the second-order condition** ∇²f ⪰ 0, linking directly to L56's definiteness tests; the epigraph characterization; **operations preserving function convexity** — non-negative combinations, pointwise maximum, composition with an affine map, and the composition rules; **Jensen's inequality** and its extension to expectations (reused in L107 and L118); the sublevel-set property; verifying convexity of the standard ML objectives (squared error, logistic loss, hinge loss, L¹ and L² regularizers) and noting where neural network losses are *not* convex.
- **Worked:** Prove x², eˣ, −log x, and ‖x‖ are convex; show the logistic loss is convex by computing its second derivative; show max(0, 1−t) is convex but not differentiable.
- **Prove it:** For a differentiable convex f, ∇f(x*) = 0 implies x* is a global minimum.

**Day 78 · L91 — Gradient Descent: The Mathematics** 🎥 38 m · 📝 50 m
- **Covered:** Descent directions and the condition ∇fᵀd < 0; **the gradient descent update x_{k+1} = x_k − α∇f(x_k)** derived from the first-order Taylor model plus a proximity penalty; the step size / learning rate and the three regimes (too small, too large, divergent); **L-smoothness** (Lipschitz gradient) and the descent lemma f(y) ≤ f(x) + ∇f(x)ᵀ(y−x) + (L/2)‖y−x‖², proved and then used to show the guaranteed per-step decrease for α ≤ 1/L; **convergence rates**: O(1/k) for convex L-smooth objectives and linear (geometric) convergence with factor depending on 1 − μ/L for μ-strongly convex ones; **the condition number κ = L/μ as the governing quantity**, and the zig-zag picture on elongated elliptical contours — the same κ from L58, now controlling optimization speed; exact line search and backtracking (Armijo) conditions; **momentum and Nesterov acceleration** analysed on a quadratic via eigenvalue arguments, giving the √κ improvement; the mathematics of a decaying learning-rate schedule; the expectation-and-variance view of stochastic gradients (analysis only, no implementation).
- **Worked:** Run four gradient-descent iterations by hand on f = x² + 10y² and watch the zig-zag; compute the optimal fixed step size for a quadratic from its eigenvalues; show divergence when α > 2/L.
- **Prove it:** The descent lemma, and the resulting guarantee that α = 1/L decreases f by at least ‖∇f‖²/(2L) each step.

**Day 79 · L92 — Newton & Quasi-Newton Methods** 🎥 34 m · 📝 45 m
- **Covered:** **Newton's method for root finding** and its geometric tangent-line derivation, with the quadratic-convergence argument; Newton's method for optimization as root-finding on ∇f = 0, giving the step x_{k+1} = x_k − H⁻¹∇f; **the same step obtained by exactly minimizing the second-order Taylor model** from L80; affine invariance and why Newton is immune to the conditioning problems that cripple gradient descent; failure modes — indefinite or singular Hessians, and overshooting far from the optimum; damped/line-search Newton and trust-region ideas; Levenberg–Marquardt damping H + λI; **the cost problem**: forming and inverting an n×n Hessian is O(n³), which is fatal for large models; **quasi-Newton methods** — the secant condition, rank-one and rank-two updates, and the BFGS idea of maintaining an approximate inverse Hessian, plus L-BFGS's limited-memory trick; **Gauss–Newton** for least-squares problems, dropping the second-order residual term to get JᵀJ; the Fisher information matrix and natural gradient (brief mention, connecting forward to L111).
- **Worked:** Three Newton iterations on x³ − 2x − 5 = 0; one Newton step on a 2D quadratic showing it lands exactly on the minimum; a Gauss–Newton step on a small nonlinear least-squares problem.
- **Prove it:** Newton's method converges in one step for a quadratic objective with positive definite Hessian.

**Day 80 · L93 — Lagrangian Duality** ⚡ 🎥 36 m · 📝 50 m
- **Covered:** The general constrained problem in standard form; **the Lagrangian** L(x, λ, μ) and the multiplier interpretation as prices on constraint violation; **the dual function** g(λ, μ) = inf_x L, and the fact that it is always concave regardless of the primal's convexity (proved as a pointwise infimum of affine functions); **weak duality** d* ≤ p*, proved in two lines, and the duality gap; **strong duality**, **Slater's condition** for convex problems, and what strong duality buys you; **complementary slackness** derived from a zero duality gap, and its meaning (only active constraints have nonzero multipliers); the KKT conditions of L83 re-derived from duality; **the dual of a linear program** and of a quadratic program, both derived by hand; sensitivity analysis and the shadow-price reading of multipliers; **the SVM dual** as the worked showcase — from the margin-maximization primal to the dual in inner products, with support vectors emerging exactly as the points with nonzero multipliers, and the kernel substitution becoming possible only because the dual depends on data through inner products alone.
- **Worked:** Derive the dual of min cᵀx s.t. Ax ≥ b, x ≥ 0; derive the SVM dual step by step; identify support vectors via complementary slackness.
- **Prove it:** Weak duality, and the concavity of the dual function.

**Day 80 · L94 — Linear & Quadratic Programming by Hand** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Linear programs in standard and canonical form, and converting between them (slack variables, free-variable splitting, sign flips); the feasible region as a **polyhedron**, and the fundamental theorem that an optimum, if it exists, occurs at a vertex — with the convexity argument for why; graphical solution in two variables; degeneracy, unboundedness, and infeasibility; the **simplex method's geometric idea** (walk vertex to vertex along improving edges) and one worked tableau pivot, with a note on interior-point methods as the modern alternative; **quadratic programs** min ½xᵀQx + cᵀx subject to linear constraints; the equality-constrained QP solved exactly via the **KKT block system** [[Q, Aᵀ],[A, 0]][x; λ] = [−c; b]; positive definiteness of Q as the condition for a unique solution; recognizing least squares, ridge, lasso, and the SVM as instances of LP/QP.
- **Worked:** Solve a two-variable LP graphically and confirm the vertex optimum; solve an equality-constrained QP via the KKT system.
- **Prove it:** The optimum of a bounded, feasible LP is attained at an extreme point of the feasible polyhedron.

**Day 81 · L95 — Phase 6 Optimization Workshop** 🎥 34 m · 📝 60 m
- **Covered:** A fully worked mixed problem set tying the phase together: derive the OLS solution three ways (geometry, single-variable calculus, matrix calculus) and confirm they agree; derive the ridge solution and analyse its behaviour as λ → 0 and λ → ∞ using the SVD of the design matrix; show the ridge estimator shrinks each singular direction by σᵢ²/(σᵢ² + λ) and explain why that stabilizes ill-conditioned problems; prove convexity for a battery of objectives; classify a set of critical points by Hessian; set up and solve three constrained problems (one equality, one inequality, one with both); compute a convergence-rate bound for a given quadratic; write down and interpret the KKT conditions for the SVM; **a checklist for approaching any optimization problem on paper**: identify the variables, write the objective, check convexity, write the constraints, decide first- or second-order method, and state what guarantees you have.
- **Worked:** All of the above, with full solutions on screen.
- **Prove it:** Using the SVD, show that ridge regression's solution has coefficients uᵢᵀb·σᵢ/(σᵢ² + λ) in the singular basis, and interpret.

---
---

# PHASE 7 — Probability
**Days 82–91 · Lessons 96–108 · 7 h 52 m**
*The second pillar. Goal: full distribution theory, joint behaviour, inequalities and limit theorems — derived, not memorized.*

---

**Day 82 · L96 — Sample Spaces, Events & the Axioms of Probability** 🎥 34 m · 📝 45 m
- **Covered:** Random experiments, outcomes, sample spaces (finite, countable, uncountable); **events as subsets**, which makes every set operation from L25 immediately meaningful — union as "or", intersection as "and", complement as "not", disjointness as mutual exclusivity; σ-algebras and why not every subset of ℝ can be assigned a probability (motivation only, resolved in L121); **Kolmogorov's three axioms** and the consequences derived from them: P(∅) = 0, P(Aᶜ) = 1 − P(A), monotonicity, finite additivity, and the **general addition rule / inclusion–exclusion for probability** (reusing L31); the classical/equally-likely model and the reduction of probability to counting (reusing L30 and L31); geometric probability and probability as area; odds vs probability; interpretations — frequentist, Bayesian, and subjective — and why the axioms are agnostic between them.
- **Worked:** Probability of at least one shared birthday among 23 people; probability a random point in a square falls in an inscribed circle; a three-set inclusion–exclusion problem.
- **Prove it:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B) from the axioms alone.

**Day 83 · L97 — Conditional Probability, Independence & Bayes' Theorem** ⚡ 🎥 38 m · 📝 50 m
- **Covered:** **Conditional probability** P(A|B) = P(A∩B)/P(B) as a renormalization of the sample space, and the verification that it is itself a valid probability measure; the multiplication rule and the general chain rule P(A₁…Aₙ) = ∏P(Aᵢ | earlier); tree diagrams; **the law of total probability** with a partition; **Bayes' theorem** derived in one line, and the vocabulary of prior, likelihood, evidence, and posterior; the odds form of Bayes and sequential updating; **base-rate neglect** shown concretely with the medical-test example (high sensitivity and specificity, low prevalence, and a surprisingly low positive predictive value); sensitivity, specificity, PPV, NPV, and the confusion matrix; **independence** P(A∩B) = P(A)P(B), pairwise vs mutual independence, and an example distinguishing them; **conditional independence** and how it differs from independence in both directions; Simpson's paradox; the Monty Hall problem solved by conditioning.
- **Worked:** The full disease-testing computation with numbers; Monty Hall by explicit conditioning; a two-step sequential Bayesian update.
- **Prove it:** If A and B are independent, so are A and Bᶜ.

**Day 83 · L98 — Discrete Random Variables & PMFs** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** A random variable as a **function from the sample space to ℝ**, not as a "variable"; discrete vs continuous vs mixed; the **probability mass function**, its two defining properties, and its graph; the **cumulative distribution function** for a discrete variable as a right-continuous step function, and the properties every CDF must satisfy (non-decreasing, limits 0 and 1, right-continuity); recovering the pmf from the CDF; computing P(a < X ≤ b) from the CDF and the care needed with endpoints in the discrete case; the support of a distribution; functions of a discrete random variable and how the pmf transforms; indicator random variables and the identity E[1_A] = P(A) — a device that trivializes many later computations.
- **Worked:** Build the pmf and CDF for the sum of two dice; find the pmf of X² for a small X; use indicators to count expected matches.
- **Prove it:** Any valid CDF is non-decreasing and right-continuous, from the axioms.

**Day 84 · L99 — The Discrete Distribution Zoo** 🎥 40 m · 📝 55 m
- **Covered:** For each distribution — the generating story, the pmf, the parameter meaning, the support, the derived mean and variance, and the typical application: **Bernoulli(p)**; **Binomial(n,p)** with the pmf derived combinatorially and the mean/variance obtained by the sum-of-indicators trick; **Geometric(p)** in both conventions and its **memorylessness** (proved); **Negative Binomial(r,p)**; **Hypergeometric** (sampling without replacement) and its binomial limit for large populations; **Poisson(λ)** with the mean and variance both equal to λ, and the **derivation of Poisson as the limit of Binomial(n, λ/n)** as n → ∞; the Poisson process and the exponential inter-arrival connection (forward to L101); **Discrete Uniform**; **Multinomial** as the multi-category generalization of the binomial; **Categorical/one-hot** as the ML workhorse; a decision table for "which distribution models this situation?"; a first look at moment generating functions as a tool for these derivations.
- **Worked:** Derive E[X] and Var(X) for Binomial via indicators, and for Poisson via the series; verify the Poisson limit numerically for n = 1000; solve a hypergeometric quality-control problem.
- **Prove it:** The geometric distribution is memoryless, and it is the only discrete distribution with that property.

**Day 85 · L100 — Continuous Random Variables, PDFs & CDFs** 🎥 34 m · 📝 45 m
- **Covered:** Why P(X = x) = 0 for continuous variables and what that does and does not imply; **the probability density function** — its two defining properties, the fact that it can exceed 1, and the correct reading of f(x)dx as probability of an infinitesimal interval; probability as **area under the density**; the CDF as the integral of the density and the density as the derivative of the CDF (an application of FTC from L70); computing probabilities over intervals and the irrelevance of endpoint inclusion; the **quantile function** as the inverse CDF, medians, quartiles, and percentiles; the **inverse transform sampling** result — F⁻¹(U) has distribution F, proved — which is the mathematical basis of random generation; mixed distributions and where they arise (censored data); support, mode, and symmetry of a density.
- **Worked:** Normalize a given density to find its constant; find the CDF, median, and an interval probability from a density; prove inverse transform sampling for the exponential.
- **Prove it:** If U ~ Uniform(0,1) then F⁻¹(U) has CDF F.

**Day 86 · L101 — The Continuous Distribution Zoo** ⚡ 🎥 42 m · 📝 55 m
- **Covered:** For each — the story, the density, the parameters, the mean and variance, the shape, and where it appears: **Uniform(a,b)**; **Exponential(λ)**, its memorylessness (proved), and its role as the Poisson-process waiting time; **Normal/Gaussian(μ, σ²)**, with the density's normalizing constant justified by the Gaussian integral from L73, the standardization Z = (X−μ)/σ, the 68–95–99.7 rule, the closure of the normal family under affine transformation and under independent sums (both proved via MGFs in L102), and the reasons the normal is ubiquitous (CLT, maximum entropy under a variance constraint, analytic convenience); **Gamma(α, β)** as the sum of exponentials, and its Γ-function normalizer from L73; **Beta(α, β)** as a density on [0,1] and the natural prior for a probability; **Chi-square** as a sum of squared standard normals; **Student's t** and its heavy tails; **F** as a ratio of scaled chi-squares; **Laplace** and its L¹ connection; **Cauchy** as the cautionary example with no mean; **Log-normal**; a family tree diagram showing how all of these are related by transformation and limiting.
- **Worked:** Standard-normal table computations by hand; show the sum of independent exponentials is Gamma; show the square of a standard normal is chi-square with 1 df.
- **Prove it:** The exponential distribution is memoryless, and the normal density integrates to 1.

**Day 86 · L102 — Expectation, Variance, Moments & MGFs** ⚡ 🎥 36 m · 📝 50 m
- **Covered:** Expectation for discrete and continuous variables, its physical centre-of-mass reading, and when it fails to exist (Cauchy); **the Law of the Unconscious Statistician** E[g(X)] = ∫g(x)f(x)dx and why it saves you from finding g(X)'s distribution; **linearity of expectation**, proved, and the crucial point that it needs no independence — with the indicator-based problems that exploit it; **variance** defined and the computational form Var(X) = E[X²] − (E[X])², proved; Var(aX + b) = a²Var(X); standard deviation and units; **moments**, central moments, standardization, skewness, and kurtosis with their shape interpretations; **moment generating functions** — definition, the moment-extraction property M^(k)(0) = E[Xᵏ], uniqueness, and the MGF of a sum of independent variables as a product — then used to prove that sums of independent normals are normal, sums of independent Poissons are Poisson, and sums of exponentials are Gamma; the characteristic function as the always-existing alternative (brief).
- **Worked:** Derive the MGF of the normal and read off its mean and variance; prove Var(X+Y) = Var X + Var Y for independent X, Y; use linearity to find the expected number of fixed points in a random permutation.
- **Prove it:** E[X²] ≥ (E[X])², and identify exactly when equality holds.

**Day 87 · L103 — Joint, Marginal & Conditional Distributions** 🎥 38 m · 📝 55 m
- **Covered:** Joint pmfs and joint pdfs and their normalization over ℝ²; joint CDFs; **marginalization** by summing or integrating out — a direct application of the double integrals of L84; **conditional distributions** f(y|x) = f(x,y)/f(x) and their validity as distributions in their own right; **independence of random variables** and the factorization criterion f(x,y) = f(x)f(y), plus the support-must-be-a-rectangle consequence; i.i.d. samples defined properly; **conditional expectation E[Y|X]** as a random variable, not a number; **the tower property / law of iterated expectations** E[E[Y|X]] = E[Y], proved and applied; **the law of total variance** Var(Y) = E[Var(Y|X)] + Var(E[Y|X]) with its "explained vs unexplained" reading — the probabilistic ancestor of the bias–variance decomposition in L111; conditional independence and its graphical meaning (a first glimpse of graphical models); the joint distribution of more than two variables and the chain rule for densities.
- **Worked:** From a joint density on a triangular region, find both marginals, a conditional, and check independence; compute E[Y|X] and verify the tower property; a full law-of-total-variance computation.
- **Prove it:** The law of total variance.

**Day 88 · L104 — Covariance, Correlation & the Covariance Matrix** 🎥 34 m · 📝 45 m
- **Covered:** **Covariance** defined, the computational form E[XY] − E[X]E[Y], and its properties — symmetry, bilinearity, Cov(X,X) = Var(X); Var(X + Y) = Var X + Var Y + 2Cov(X,Y) and the general sum formula; **correlation** as normalized covariance, the proof via Cauchy–Schwarz (from L36) that |ρ| ≤ 1, and the equality case being exact linear dependence; **what correlation does and does not measure** — a worked example of a strong deterministic relationship with zero correlation, establishing that uncorrelated does not imply independent, while independent does imply uncorrelated (proved); the **covariance matrix** Σ = E[(x−μ)(x−μ)ᵀ], its symmetry, and the proof that it is always positive semidefinite (using L56); the covariance matrix under an affine transform, Cov(Ax + b) = AΣAᵀ; the correlation matrix; the sample covariance matrix as (1/(n−1))XᶜᵀXᶜ, connecting directly to PCA in L58; whitening/decorrelation via Σ^(−1/2) and its eigen-construction.
- **Worked:** Compute a 3×3 covariance matrix from a small dataset by hand; show X and X² are uncorrelated when X is symmetric about 0; verify Cov(Ax) = AΣAᵀ on a 2×2 example.
- **Prove it:** Every covariance matrix is positive semidefinite, and |ρ(X,Y)| ≤ 1.

**Day 89 · L105 — The Multivariate Gaussian** ⚡ 🎥 38 m · 📝 50 m
- **Covered:** The multivariate normal density, term by term — the (2π)^(−k/2) and |Σ|^(−1/2) normalizers and the quadratic form in the exponent; **the Mahalanobis distance** (x−μ)ᵀΣ⁻¹(x−μ) as a covariance-aware distance metric, and its contrast with Euclidean distance; **the contours are ellipsoids**, whose axes are the eigenvectors of Σ and whose semi-axis lengths scale as √λᵢ — a direct payoff of the spectral theorem (L56) and the quadratic-form work (L15); the isotropic, diagonal, and full covariance cases; **affine transformations of a Gaussian are Gaussian**, with the mean and covariance transformation rules; **marginals of a multivariate normal are normal**, obtained by simply deleting rows and columns of μ and Σ; **conditionals are normal**, with the conditional mean and the Schur-complement conditional covariance formula — the machinery behind Gaussian processes and the Kalman filter; independence ⇔ zero covariance *for jointly Gaussian variables only*, with a counterexample showing marginally-normal is not enough; whitening and sampling by the Cholesky factor L of Σ (using L43).
- **Worked:** Sketch the contour ellipse for a specified 2×2 Σ, computing its axes from the eigenvectors; derive the conditional distribution for a bivariate normal and recognize the regression line inside it.
- **Prove it:** If x ~ N(μ, Σ) then Ax + b ~ N(Aμ + b, AΣAᵀ).

**Day 89 · L106 — Transformations of Random Variables** ⚡ 🎥 32 m · 📝 45 m
- **Covered:** **The CDF method** — the universally applicable technique of computing P(g(X) ≤ y) directly; the **change-of-variables formula** for a monotone transformation, f_Y(y) = f_X(g⁻¹(y))|d/dy g⁻¹(y)|, with the absolute value explained; non-monotone transformations handled by splitting into monotone pieces (with Y = X² as the canonical example, producing the chi-square density); **the multivariate change of variables** with the Jacobian determinant, straight from L85, and the general density transformation rule; **sums of independent random variables via convolution**, derived and applied; the MGF shortcut for sums (from L102); products and quotients of random variables; **order statistics** — the densities of the minimum, the maximum, and the k-th order statistic; the **delta method** for approximating the mean and variance of g(X) via a first-order Taylor expansion (using L69), and its role in producing asymptotic standard errors in Phase 8.
- **Worked:** Find the density of Y = X² for X standard normal and recognize χ²₁; convolve two uniforms to get the triangular density; find the density of the maximum of n i.i.d. uniforms; apply the delta method to log(X̄).
- **Prove it:** The change-of-variables density formula for a strictly increasing differentiable g.

**Day 90 · L107 — Concentration & Classical Inequalities** 🎥 34 m · 📝 45 m
- **Covered:** Why bounds matter when exact distributions are unavailable; **Markov's inequality** P(X ≥ a) ≤ E[X]/a for non-negative X, proved in three lines, plus its weakness; **Chebyshev's inequality** derived from Markov applied to (X−μ)², and its distribution-free k-sigma guarantee; the tightness examples showing neither bound can be improved in general; **Jensen's inequality** for convex functions, E[g(X)] ≥ g(E[X]), proved from the supporting-line characterization of convexity in L90, and its many corollaries (E[X²] ≥ (E[X])², AM–GM, and the non-negativity of KL divergence in L118); **Cauchy–Schwarz for random variables**; **the union bound** and its use in multiple-comparison arguments; **Hoeffding's inequality** for bounded variables — statement, the exponential improvement over Chebyshev, and its role in generalization bounds; the Chernoff bounding method via MGFs; sub-Gaussian variables (brief); a comparison table of when each inequality is the right tool.
- **Worked:** Bound P(X ≥ 3μ) three ways for a specific distribution and compare with the exact answer; use Hoeffding to find the sample size needed for a given accuracy and confidence.
- **Prove it:** Markov's inequality, then derive Chebyshev's from it.

**Day 91 · L108 — Limit Theorems, Markov Chains & Phase 7 Workshop** 🎥 42 m · 📝 60 m
- **Covered:** **Modes of convergence** — in distribution, in probability, almost surely, and in L² — with the implication diagram and counterexamples separating them; **the Weak and Strong Laws of Large Numbers**, the WLLN proved directly from Chebyshev, and the distinction between them made concrete; the sample mean's variance σ²/n and the √n rate as the origin of every "more data helps, but with diminishing returns" statement; **the Central Limit Theorem** — precise statement, a proof sketch via MGFs/characteristic functions, and the conditions it needs; what the CLT does *not* say (it is about the standardized sum, not about the data becoming normal); rate of convergence and the Berry–Esseen bound (statement); the normal approximation to the binomial with the continuity correction; **Markov chains** — the memoryless property, the transition matrix P, the Chapman–Kolmogorov equation and the identity that n-step probabilities are entries of Pⁿ (using L55's matrix powers), state classification (accessible, recurrent, transient, periodic), the **stationary distribution as the left eigenvector of P for eigenvalue 1**, existence and uniqueness under irreducibility and aperiodicity, detailed balance and reversibility, and the convergence rate governed by the second-largest eigenvalue modulus; **Workshop:** 30-problem cumulative set on L96–L107.
- **Worked:** Apply the CLT to a sample mean and compute an approximate probability; find the stationary distribution of a 3-state chain by solving πP = π; compute P⁵ by diagonalization and watch the rows converge.
- **Prove it:** The WLLN from Chebyshev's inequality; and that a stationary distribution is a left eigenvector of P with eigenvalue 1.

---
---

# PHASE 8 — Statistics & Inference
**Days 92–97 · Lessons 109–117 · 5 h 10 m**
*Goal: derive estimators, quantify uncertainty, and build regression from probability rather than recipes.*

---

**Day 92 · L109 — Descriptive Statistics & Data Summaries** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** Population vs sample and the parameter/statistic distinction; measures of centre — mean, median, mode — and their robustness properties and behaviour under skew; **the sample variance and Bessel's correction**, with the derivation showing why dividing by n−1 makes it unbiased and what "degrees of freedom" actually counts; sample standard deviation and its slight bias; quantiles, percentiles, the five-number summary, IQR, and the 1.5·IQR outlier rule; boxplots, histograms, bin-width sensitivity, and kernel density estimates conceptually; **robust statistics** — median, MAD, trimmed mean — and breakdown points; skewness and kurtosis computed from data; standardization (z-scores) and min–max scaling, and when each is appropriate; the sample correlation coefficient and the sample covariance matrix (linking to L104); **Simpson's paradox** and Anscombe's quartet as demonstrations that summary statistics can hide everything that matters.
- **Worked:** Compute the full five-number summary and flag outliers for a small dataset; show how one extreme value moves the mean but not the median; walk through a Simpson's paradox table.
- **Prove it:** E[s²] = σ² when s² uses the n−1 denominator.

**Day 92 · L110 — Sampling Distributions** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** The key conceptual leap — **a statistic is a random variable, so it has its own distribution**; random sampling, i.i.d. assumptions, and how they fail in practice; the sampling distribution of the sample mean, with E[X̄] = μ and Var(X̄) = σ²/n proved; **the standard error** and its distinction from the standard deviation; the exact normality of X̄ when the population is normal, and approximate normality otherwise via the CLT; the finite population correction; **the derivation of the chi-square distribution** as the sampling distribution of (n−1)s²/σ² for normal data, and the degrees-of-freedom count; **the t distribution** derived as the ratio of a standard normal to the root of an independent scaled chi-square — showing precisely why the t appears when σ is estimated rather than known; **the F distribution** as a ratio of two scaled chi-squares; the independence of X̄ and s² for normal samples (Cochran's theorem, stated with the geometric orthogonality intuition from L47); the sampling distribution of a proportion.
- **Worked:** Compute the standard error and the exact sampling distribution for a normal population; show why t → normal as df → ∞.
- **Prove it:** Var(X̄) = σ²/n for an i.i.d. sample.

**Day 93 · L111 — Point Estimation: Bias, Variance & Efficiency** 🎥 34 m · 📝 50 m
- **Covered:** Estimators as functions of the sample, and estimates as their realized values; **bias** and unbiasedness, with worked examples of biased and unbiased estimators of the same parameter; **consistency** and its proof via Chebyshev; **efficiency** and the variance comparison between competing estimators; **mean squared error and the decomposition MSE = Bias² + Variance**, proved algebraically — the single most important identity in applied statistics and machine learning; the **bias–variance trade-off** explained through the decomposition, with underfitting and overfitting identified as the two ends, and regularization understood as deliberately accepting bias to cut variance (tying back to ridge in L89/L95); **Fisher information** defined via the score function, the two equivalent formulas, and its meaning as curvature of the log-likelihood; **the Cramér–Rao lower bound** and the notion of an efficient estimator attaining it; sufficiency and the factorization theorem (brief); asymptotic properties.
- **Worked:** Show the sample mean is unbiased, consistent, and efficient for a normal mean; compute the Fisher information for Bernoulli and for normal; demonstrate the MSE decomposition numerically for a shrinkage estimator.
- **Prove it:** MSE(θ̂) = Bias(θ̂)² + Var(θ̂).

**Day 94 · L112 — Maximum Likelihood Estimation** ⚡ 🎥 38 m · 📝 55 m
- **Covered:** The likelihood function L(θ|data) and the essential distinction that it is a function of the parameter, not of the data; why the **log-likelihood** is used (products become sums — the payoff from L5, and numerical stability); **the MLE procedure**: write the joint density, take logs, differentiate, set to zero, solve, and verify a maximum with the second derivative; **full derivations** of the MLE for Bernoulli (the sample proportion), Binomial, Poisson, Exponential, Uniform (where calculus fails and the answer is the sample maximum — an instructive edge case), and Normal (both μ and σ², noting the σ̂² MLE is biased); MLE for the multivariate normal; **invariance** of the MLE under reparametrization; **asymptotic properties** — consistency, asymptotic normality with variance equal to the inverse Fisher information, and asymptotic efficiency; **the equivalence of maximizing the likelihood and minimizing cross-entropy**, derived explicitly, and the corollary that **least squares is exactly the MLE under Gaussian noise** — proved line by line, which retroactively explains the squared-error loss used since L53; the likelihood for logistic regression and why it has no closed form.
- **Worked:** Derive the Poisson and Normal MLEs completely; derive the Uniform MLE and explain the failure of the derivative method; show squared error = Gaussian negative log-likelihood.
- **Prove it:** The MLE of σ² for a normal sample is biased, and identify the correction factor.

**Day 94 · L113 — Bayesian Estimation: MAP, Priors & Conjugacy** ⚡ 🎥 34 m · 📝 45 m
- **Covered:** The Bayesian framing — parameters as random variables with distributions; **posterior ∝ likelihood × prior** and the role of the marginal likelihood as a normalizer; **MAP estimation** as maximizing the posterior, and its reduction to the MLE under a flat prior; **the derivation showing that a Gaussian prior on the weights gives exactly L² regularization, and a Laplace prior gives exactly L¹** — closing the loop with L83's geometric account of lasso; **conjugate priors** and the three canonical pairs worked in full: Beta–Binomial (with the pseudo-count reading of α and β), Gamma–Poisson, and Normal–Normal (with the precision-weighted-average form of the posterior mean); the posterior mean as a shrinkage estimator that interpolates between prior and data, and its convergence to the MLE as n grows; **credible intervals** and their honest probability interpretation, contrasted carefully with confidence intervals; the posterior predictive distribution; informative, weakly informative, and improper priors, and the practical objections to each.
- **Worked:** Full Beta–Binomial update with a sequence of coin flips, tracking how the posterior tightens; derive the Normal–Normal posterior mean and variance; show MAP with a Gaussian prior yields ridge regression.
- **Prove it:** For a Beta(α,β) prior and k successes in n trials, the posterior is Beta(α+k, β+n−k).

**Day 95 · L114 — Confidence Intervals** 🎥 30 m · 📝 45 m
- **Covered:** Interval estimation and the general pivotal-quantity construction; **the z-interval** for a mean with known σ, derived step by step from the sampling distribution; **the t-interval** for unknown σ and why the t-critical value is larger; intervals for a proportion (Wald, and a note on why Wilson's is better for small n or extreme p̂); intervals for a variance via the chi-square distribution; intervals for a difference of means (pooled and Welch) and for a difference of proportions; margin of error and the three levers that control it (confidence level, σ, n); **sample-size determination** solved for n; **the correct interpretation** — the procedure captures the parameter 95% of the time across repeated samples — and a careful enumeration of the three most common misinterpretations; the duality between confidence intervals and hypothesis tests; bootstrap intervals as the assumption-light alternative (conceptual).
- **Worked:** Build a 95% t-interval from a small sample by hand; compute the n needed for a ±3% margin at 95% confidence; interpret an interval correctly and then state three wrong interpretations and why each fails.
- **Prove it:** Derive the z-interval from P(−z ≤ (X̄−μ)/(σ/√n) ≤ z) = 0.95.

**Day 96 · L115 — Hypothesis Testing** ⚡ 🎥 40 m · 📝 55 m
- **Covered:** The logic of falsification; **null and alternative hypotheses** and the rules for stating them; one- vs two-tailed tests; test statistics and their null distributions; **the rejection region and the significance level α**; **the p-value** defined precisely as the probability under H₀ of a result at least as extreme, together with an explicit list of what it is not; **Type I and Type II errors**, the α/β trade-off, and **power** 1−β with the four factors that raise it (effect size, n, α, and reduced variance); power and sample-size calculations; **the standard test catalogue** — one- and two-sample z and t tests, paired t, chi-square goodness-of-fit and test of independence, F-test for variances, and one-way ANOVA with its between/within variance decomposition; **the likelihood ratio test** and the **Neyman–Pearson lemma** establishing its optimality for simple hypotheses; Wald and score tests (brief); **the multiple-testing problem**, the family-wise error rate, Bonferroni, and the false discovery rate; effect size and the difference between statistical and practical significance; the reproducibility crisis, p-hacking, and pre-registration.
- **Worked:** Run a two-sample t-test entirely by hand; run a chi-square test of independence on a contingency table; compute the power of a specified test and the n needed to reach 80% power.
- **Prove it:** Show the two-sided z-test at level α rejects exactly when the (1−α) confidence interval excludes the null value.

**Day 96 · L116 — Linear Regression: The Full Derivation** ⚡ 🎥 38 m · 📝 55 m
- **Covered:** The model y = Xβ + ε and its four assumptions (linearity in parameters, independence, homoscedasticity, and normality of errors — noting exactly which results need which); **the OLS estimator β̂ = (XᵀX)⁻¹Xᵀy derived three ways** — by calculus on the sum of squares, by the projection geometry of L53, and by matrix calculus from L89 — with the three shown to coincide; the hat matrix H = X(XᵀX)⁻¹Xᵀ and its projection properties; residuals, fitted values, and the orthogonality of residuals to the column space; **the sampling distribution of β̂**, its unbiasedness, and Cov(β̂) = σ²(XᵀX)⁻¹; **the Gauss–Markov theorem** — OLS is BLUE — stated with proof sketch, and the note that normality is not needed for it; standard errors, t-tests on individual coefficients, and F-tests on groups of them; the ANOVA decomposition SST = SSR + SSE, **R² and adjusted R²**, and the reason R² never decreases when predictors are added; **multicollinearity**, its effect on Cov(β̂) via near-singular XᵀX, and the variance inflation factor — an issue that is exactly the condition-number problem from L58; **ridge and lasso** re-derived here as constrained/penalized least squares, with the ridge closed form and the SVD shrinkage reading from L95; residual diagnostics; and **logistic regression** — the log-odds link, the Bernoulli likelihood, the convexity of its negative log-likelihood (from L90), the absence of a closed form, and the resulting need for Newton/IRLS from L92.
- **Worked:** Fit a two-predictor regression completely by hand, including standard errors, t-statistics, and R²; compute a VIF; derive the ridge estimator and show its effect on an ill-conditioned XᵀX.
- **Prove it:** β̂ is unbiased, and Cov(β̂) = σ²(XᵀX)⁻¹.

**Day 97 · L117 — Statistics Workshop & Inferential Fallacies** 🎥 34 m · 📝 55 m
- **Covered:** A mixed 30-problem workshop spanning L109–L116, with full solutions; then a systematic tour of **the ways inference goes wrong**: correlation mistaken for causation, confounding variables and the need for controls, selection and survivorship bias, Berkson's paradox, regression to the mean misread as an effect, the base-rate fallacy revisited, p-hacking and garden-of-forking-paths analysis, HARKing, publication bias, overfitting to a test set through repeated evaluation, Goodhart's law, the ecological fallacy, Simpson's paradox revisited with a causal reading, and the misuse of statistical significance as evidence of importance; **a decision checklist** for reading any statistical claim — what was the population, what was the sampling method, what is the estimand, what are the assumptions, what is the uncertainty, and what would falsify it.
- **Worked:** Diagnose five real-style flawed studies and name the specific failure in each.
- **Prove it:** Construct a dataset exhibiting Simpson's paradox from scratch.

---
---

# PHASE 9 — Information Theory, Numerics & Capstone
**Days 98–100 · Lessons 118–122 · 2 h 57 m**
*Goal: the last two toolkits, then assemble everything.*

---

**Day 98 · L118 — Information Theory I: Entropy, Cross-Entropy & KL Divergence** ⚡ 🎥 36 m · 📝 45 m
- **Covered:** **Self-information** −log p(x) motivated by three axioms (a certain event carries none, rarer means more, and independent events add) and the proof that the logarithm is the only function satisfying them; units — bits, nats, bans; **Shannon entropy** H(X) = −Σp log p as expected surprise, with its properties: non-negativity, maximization by the uniform distribution (proved by Lagrange multipliers from L82), zero exactly for a deterministic variable, and the bounds 0 ≤ H ≤ log n; entropy of a Bernoulli variable and the shape of the binary entropy function; **joint entropy, conditional entropy** H(Y|X), and the chain rule H(X,Y) = H(X) + H(Y|X); **cross-entropy** H(p,q) = −Σp log q and its decomposition H(p) + D_KL(p‖q); **KL divergence** — the definition, the proof of non-negativity via Jensen's inequality (from L107), the equality condition, and the asymmetry that makes it a divergence and not a metric; the forward vs reverse KL asymmetry and the mode-seeking/mass-covering behaviours; **why cross-entropy is the standard classification loss** — minimizing it over q is exactly minimizing KL to the true p, which is exactly maximum likelihood from L112, all three shown to be the same optimization.
- **Worked:** Compute entropies for several small distributions; compute a KL divergence in both directions and observe the asymmetry; show cross-entropy loss on one-hot labels reduces to −log q(correct class).
- **Prove it:** D_KL(p‖q) ≥ 0 with equality iff p = q, and that the uniform distribution maximizes entropy on a finite support.

**Day 98 · L119 — Information Theory II: Mutual Information & Coding Bounds** ⚡ 🎥 30 m · 📝 40 m
- **Covered:** **Mutual information** I(X;Y) as the reduction in uncertainty about one variable from learning the other, with all four equivalent expressions and the Venn-diagram picture; symmetry, non-negativity, and the fact that I(X;Y) = 0 exactly when X and Y are independent — a strictly stronger statement than zero correlation (contrasting with L104); the chain rule for mutual information; conditional mutual information; **the data processing inequality** and its meaning for feature pipelines; **Gibbs' inequality**; **the Jensen–Shannon divergence** as a symmetric, bounded alternative to KL, and the f-divergence family; **source coding**: Kraft's inequality, the expected code length bound L ≥ H(X), and Shannon's source coding theorem (statement) establishing entropy as the true compression limit, with Huffman coding as a worked illustration; channel capacity and the noisy-channel theorem (statement only); **maximum entropy distributions** — the uniform under a support constraint, the exponential under a mean constraint, and the Gaussian under a variance constraint — each derived by Lagrange multipliers, which finally explains from an information-theoretic direction why the normal distribution is so pervasive; a closing map of where each quantity shows up in machine learning (cross-entropy loss, KL in variational inference, mutual information in feature selection, entropy in decision-tree splitting).
- **Worked:** Compute I(X;Y) from a joint table three different ways; build a Huffman code and compare its expected length to the entropy; derive the max-entropy distribution under a fixed variance.
- **Prove it:** I(X;Y) = H(X) − H(X|Y) = H(X) + H(Y) − H(X,Y).

**Day 99 · L120 — Numerical Mathematics (By Hand, No Code)** ⚡ 🎥 34 m · 📝 45 m
- **Covered:** **Floating-point representation** — sign, exponent, mantissa, the IEEE 754 layout, and the finite set of representable numbers; machine epsilon and relative vs absolute error; rounding modes and accumulated error; **why 0.1 + 0.2 ≠ 0.3**, worked out in binary; overflow, underflow, and the log-sum-exp trick as the standard remedy (returning to L17); **catastrophic cancellation** when subtracting nearly equal quantities, with the classic quadratic-formula failure and its rearranged fix, and the two-pass vs naive variance formula comparison; **conditioning of a problem versus stability of an algorithm** — the crucial distinction, with the condition number of L58 as the quantitative measure; forward and backward error; **numerical differentiation** — forward and central difference formulas with their O(h) and O(h²) truncation errors, and the round-off/truncation trade-off that yields an optimal step size around √ε (the reason finite differences are used for gradient *checking* but never for training); **root finding** — bisection with its guaranteed linear convergence, Newton–Raphson with quadratic convergence and its failure modes, and the secant method; fixed-point iteration and the contraction-mapping convergence condition; **numerical integration** — trapezoid and Simpson's rules with their error terms and orders, Richardson extrapolation, and Gaussian quadrature (brief); a note on the numerical hierarchy of linear solvers (why QR and Cholesky are preferred to explicit inversion).
- **Worked:** Compute machine epsilon by hand for a small toy format; demonstrate cancellation in the quadratic formula with specific numbers and fix it; approximate an integral by trapezoid and Simpson and compare against the exact value.
- **Prove it:** Derive the central difference formula's O(h²) error via Taylor expansion, and find the step size that minimizes total error.

**Day 99 · L121 — Analysis Touchstones & a Measure-Theoretic Preview** ⚡ 🎥 32 m · 📝 40 m
- **Covered:** A tour of the rigorous foundations under everything already covered, aimed at making graduate texts readable rather than at full proofs: supremum and infimum revisited with the completeness axiom; **sequences in ℝ**, monotone convergence, Bolzano–Weierstrass, and **Cauchy sequences** with completeness as "every Cauchy sequence converges"; open, closed, and **compact** sets, the Heine–Borel theorem, and why compactness is exactly what the Extreme Value Theorem needs; **pointwise vs uniform convergence** of functions, with the standard example where pointwise convergence destroys continuity, and the theorems uniform convergence rescues (continuity, integrability, and differentiation term by term); series of functions and the Weierstrass M-test; **why the Riemann integral is not good enough** — the indicator of the rationals, and the failure of limit interchange; **measure theory in outline**: σ-algebras (returning to L96), measures, measurable functions, the Lebesgue integral built from simple functions, and the payoff theorems — monotone convergence, dominated convergence, and Fubini–Tonelli; **probability restated measure-theoretically** — a probability space (Ω, F, P), a random variable as a measurable function, expectation as an integral against P, and densities as Radon–Nikodym derivatives, which finally unifies the discrete and continuous cases treated separately throughout Phase 7; a short reading list for going deeper.
- **Worked:** Show fₙ(x) = xⁿ on [0,1] converges pointwise but not uniformly and identify the consequence; verify that the rational indicator is Lebesgue integrable with integral 0 but not Riemann integrable.
- **Prove it:** Every convergent sequence is Cauchy, and every Cauchy sequence is bounded.

**Day 100 · L122 — Capstone: The Whole Map & Comprehensive Exam** 🎥 45 m · 📝 90 m
- **Covered:** **The full dependency map redrawn**, now with every node filled in, showing how each phase feeds the next and where each tool actually gets used downstream; **six integration threads traced end to end**: (1) the *quadratic form* thread — completing the square in L8, conics in L15, xᵀAx in L56, the Hessian in L80, the Gaussian exponent in L105, and the QP objective in L94; (2) the *orthogonality* thread — dot products in L36, the four subspaces in L47, projections and least squares in L53, uncorrelatedness in L104, and orthogonal residuals in L116; (3) the *chain rule* thread — L64, the Jacobian in L79, matrix calculus in L89, and backpropagation; (4) the *optimization* thread — 1D in L67, ℝⁿ in L81, Lagrange in L82, KKT in L83, convexity in L90, gradient descent in L91, and duality in L93; (5) the *approximation* thread — linearization in L62, Taylor in L69, second-order models in L80, and Newton in L92; (6) the *likelihood* thread — probability axioms in L96, MLE in L112, MAP in L113, cross-entropy in L118, and the squared-error/Gaussian equivalence proved in L112; **the comprehensive final exam** — 40 problems, 8 per pillar, timed at 3 hours, with a full worked solution set; a self-assessment rubric mapping scores to readiness; and **what to study next**, with three branching paths (machine learning theory, mathematical statistics, or applied numerical/scientific computing) and the specific books for each.
- **Worked:** Solutions to all 40 exam problems.
- **Prove it:** Everything. That was the point.

---
---

# 5. Production notes for the playlist

## Title convention
Use a fixed pattern so the playlist sorts correctly and search picks it up:

```
Day 07 | L09 — Absolute Value & Classical Inequalities | 100 Days of Math Prerequisites
```

Zero-pad the day number. Keep the lesson number visible — viewers will reference it in comments and the lessons cross-reference each other constantly.

## Per-video description template
```
Day 7 of 100 · Lesson 9 of 122 · Phase 0: Number Sense & Algebraic Machinery

In this lesson: [one-sentence summary]

CHAPTERS
00:00 What we're solving today
02:10 [Concept 1]
...

PREREQUISITES: L1, L8
USED LATER IN: L36 (Cauchy–Schwarz for vectors), L107 (Jensen's inequality)

PROBLEM SET: [link]
FULL 100-DAY ROADMAP: [link to this document]
```

The **"used later in"** line is the highest-value part. Prerequisite math is demotivating precisely because nothing seems to be for anything; naming the future payoff fixes that.

## Recording rules that keep the series consistent
- **One notation convention, declared once and never broken.** Column vectors, numerator layout for matrix derivatives, and a fixed symbol set. Announce it in L1 and put it in a pinned comment.
- **Derive, don't display.** Every formula should appear on screen being built, not already built.
- **▶ Pause & Try markers**, 2–4 per video, with 5 seconds of silence and an on-screen countdown.
- **The "why now" opening.** The first 90 seconds of every video answer: what breaks if I don't know this?
- **Callback closings.** End each video by naming the exact lesson where the idea returns.
- **Errata card** at the top of the description, not buried in comments.

## Playlist sectioning
YouTube playlists don't support headers, so publish **10 sub-playlists** (one per phase) plus one master playlist containing all 122 in order. Name them "Phase 3 — Linear Algebra (Days 28–49)".

---

# 6. Recovery plan for falling behind

| Situation | What to do |
|---|---|
| Missed 1–3 days | Do not double up. Shift everything later by the same number of days. |
| Missed a week | Skip the missed phase's workshop lesson only; keep every content lesson. |
| Falling behind consistently | Watch at 1.25× and cut the problem set to the 5 hardest problems. Never cut the error log. |
| A phase isn't landing | Repeat the phase's workshop day and redo its 5 hardest problems before moving on. Phases 3 and 7 are worth a full extra week each. |
| Short on time overall | The minimum viable path is Phases 0, 3, 4, 5, 7 — 71 lessons. Add 6 and 8 next. Phases 1, 2, 9 are the most compressible. |

---

# 7. Self-assessment gates

Do not advance past these five checkpoints until you can do the listed task **from a blank page, no notes**:

| After | Gate |
|---|---|
| Day 9 (Phase 0) | Derive the quadratic formula and prove √2 is irrational. |
| Day 27 (Phase 2) | Prove Σk² = n(n+1)(2n+1)/6 by induction and state the ε–δ definition of a limit with its negation. |
| **Day 49 (Phase 3)** | Compute an SVD of a 2×3 matrix by hand and derive the normal equations from projection geometry. |
| Day 74 (Phase 5) | Classify all critical points of a two-variable function via the Hessian and solve a Lagrange multiplier problem. |
| **Day 91 (Phase 7)** | Derive the mean and variance of the Poisson distribution and prove the law of total variance. |

The two bolded gates are the ones that matter most. Everything downstream depends on them.
