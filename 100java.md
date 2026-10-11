# 365 Days of Java Backend — Complete YouTube Playlist Curriculum

**480 lessons · Zero to Senior Backend Engineer · Java 21/25 + Spring Boot 3.x**

---

## How This Playlist Is Structured

Every entry below is **one video**. Each has:

- **Day / Lesson number** — the playlist position
- 🎥 **Runtime** — target video length
- 💻 **Practice** — hands-on time the viewer should spend after watching
- A dense list of every subtopic that must be covered in that video

### Two ways to run the calendar

| Option | How it works |
|---|---|
| **A — 480 days, 1 lesson/day** | Truest to the material. Finishes in ~16 months. |
| **B — 365 days (recommended for the title)** | Double up on the short foundational lessons (Days 6–98, avg 30 min each). Pairing ~115 of those gets you to exactly 365 calendar days. |

If you start on **Day 1 = Jan 1**, Option B lands your finale on **Dec 31**.

### Totals

| Metric | Value |
|---|---|
| Total lessons | **480** |
| Total video runtime | **≈ 392 hours** |
| Total practice time | **≈ 610 hours** |
| Combined commitment | **≈ 1,000 hours** (~2h 05m/day) |
| Capstone projects | **3 full production-grade systems** |
| Spring dependencies covered | **140+** (full reference in Appendix A) |

### Weekly rhythm to recommend on-camera

| Day | Activity |
|---|---|
| Mon–Fri | 1 lesson + practice |
| Sat | Mini-project / integration exercise |
| Sun | Review, flashcards, re-implement one thing from memory |

### Video chapter template (use for every upload)

```
00:00  Hook — the problem this solves
01:30  What you'll build today
02:30  Theory / mental model (whiteboard)
10:00  Live coding walkthrough
30:00  Common mistakes & gotchas
36:00  Interview questions on this topic
40:00  Homework + what's next
```

---

## Phase Timeline At A Glance

| # | Phase | Days | Lessons | ≈ Video Hrs |
|---|---|---|---|---|
| 0 | Setup & Orientation | 1–5 | 5 | 3 |
| 1 | Java Language Core | 6–55 | 50 | 30 |
| 2 | Collections & Generics | 56–80 | 25 | 18 |
| 3 | Functional Java, Lambdas & Streams | 81–98 | 18 | 13 |
| 4 | Modern Java, I/O, Date-Time, Reflection | 99–120 | 22 | 16 |
| 5 | Concurrency & Multithreading | 121–152 | 32 | 27 |
| 6 | JVM Internals, GC & Performance | 153–170 | 18 | 16 |
| 7 | Build Tools & Project Structure | 171–182 | 12 | 9 |
| 8 | Testing | 183–198 | 16 | 12 |
| 9 | Databases, SQL & JDBC | 199–222 | 24 | 19 |
| 10 | JPA & Hibernate | 223–246 | 24 | 21 |
| 11 | Web Fundamentals, HTTP & Servlets | 247–258 | 12 | 9 |
| 12 | Spring Core | 259–278 | 20 | 16 |
| 13 | Spring Boot | 279–298 | 20 | 17 |
| 14 | Spring MVC & REST APIs | 299–316 | 18 | 15 |
| 15 | Spring Data | 317–328 | 12 | 10 |
| 16 | Transaction Management | 329–334 | 6 | 5 |
| 17 | Spring Security | 335–356 | 22 | 20 |
| 18 | Reactive Spring & WebFlux | 357–368 | 12 | 10 |
| 19 | Messaging: Kafka & RabbitMQ | 369–384 | 16 | 15 |
| 20 | Caching & NoSQL | 385–396 | 12 | 10 |
| 21 | Microservices & Spring Cloud | 397–418 | 22 | 21 |
| 22 | DevOps, Containers & Cloud | 419–438 | 20 | 19 |
| 23 | Architecture, Patterns & System Design | 439–456 | 18 | 17 |
| 24 | Capstone Projects | 457–472 | 16 | 24 |
| 25 | Interview Prep & Career | 473–480 | 8 | 10 |

---

# PHASE 0 — Setup & Orientation
**Days 1–5 · Week 1**

**Day 1 — Course Roadmap: What a Java Backend Engineer Actually Does** · 🎥 35m · 💻 20m
Backend vs frontend vs full-stack · anatomy of a request from browser to database and back · what a Java backend dev builds day to day (APIs, batch jobs, event consumers, integrations) · the 2026 Java job market and salary bands · the full 480-lesson roadmap walkthrough · how to use this playlist · setting up a learning journal and GitHub repo for the year

**Day 2 — JDK, JRE, JVM & Installing Java 21/25** · 🎥 40m · 💻 40m
JVM vs JRE vs JDK explained with diagrams · OpenJDK vs Oracle JDK vs Temurin vs Corretto vs Zulu licensing · LTS versions (8, 11, 17, 21, 25) and which to pick · installing on Windows/macOS/Linux · `JAVA_HOME` and `PATH` · managing multiple JDKs with SDKMAN and jEnv · verifying with `java -version` and `javac -version` · the `bin/` directory tour

**Day 3 — IntelliJ IDEA Setup & The Debugger Tour** · 🎥 45m · 💻 45m
IntelliJ Community vs Ultimate (what you actually need) · alternatives: VS Code + Extension Pack, Eclipse · creating your first project · project structure, modules, SDK config · 30 shortcuts that save hours · live templates and postfix completion · refactoring menu · breakpoints, conditional breakpoints, watch expressions, evaluate expression, step into/over/out · frames and variables panel · plugin recommendations (SonarLint, Key Promoter X, GitToolBox)

**Day 4 — Git & GitHub for Backend Engineers** · 🎥 50m · 💻 60m
Version control concepts · `init`, `clone`, `add`, `commit`, `push`, `pull` · branching and merging · merge vs rebase · resolving conflicts · `.gitignore` for Java projects · commit message conventions (Conventional Commits) · pull requests and code review etiquette · tags and releases · `git stash`, `git bisect`, `reflog` · SSH keys · setting up the repo you'll use for all 480 days

**Day 5 — Terminal, HTTP Preview & Your Dev Environment** · 🎥 40m · 💻 40m
Essential shell commands (`cd`, `ls`, `grep`, `find`, `curl`, `ps`, `kill`, pipes, redirection) · environment variables · installing Docker Desktop and verifying · installing Postman/Bruno/HTTPie · what an HTTP request looks like on the wire (`curl -v`) · JSON in 10 minutes · the mental model of client → server → database that the next 475 days build on

---

# PHASE 1 — Java Language Core
**Days 6–55 · Weeks 2–8**
> **Milestone project:** a console-based Library Management System using only core Java.

**Day 6 — Your First Java Program & The Compilation Pipeline** · 🎥 35m · 💻 40m
`HelloWorld` line by line · anatomy of `public static void main(String[] args)` · why each keyword is required · source → `.class` bytecode → JVM execution · `javac` and `java` under the hood · `System.out.println` explained · comments (line, block, Javadoc) · naming conventions and code style · your first compile error and how to read a stack trace

**Day 7 — javac, java, Classpath, JAR Basics & JShell** · 🎥 40m · 💻 40m
Compiling multiple files · `-d` output directory · what the classpath is and why it breaks · `-cp` flag · packages on disk vs in source · creating a runnable JAR with `jar cfe` · `MANIFEST.MF` and `Main-Class` · single-file source execution (`java Hello.java`) · JShell REPL for experimenting · `javap` first look

**Day 8 — Variables, Identifiers & Primitive Types** · 🎥 35m · 💻 40m
Declaration vs initialization · the 8 primitives with exact sizes and ranges · stack storage for primitives · identifier rules and reserved keywords · `final` variables and constants · naming conventions (camelCase, UPPER_SNAKE) · default values for fields vs local variables · definite assignment rules · `var` teaser

**Day 9 — Integer Types, Literals, Overflow & Bitwise Operations** · 🎥 45m · 💻 50m
`byte`, `short`, `int`, `long` ranges · integer literals: decimal, hex, octal, binary, underscores · the `L` suffix · silent integer overflow and `Math.addExact` · `Integer.MAX_VALUE` wraparound demo · bitwise `&`, `|`, `^`, `~` · shifts `<<`, `>>`, `>>>` · practical uses: flags, bitmasks, hashing, fast multiply/divide · two's complement representation

**Day 10 — Floating Point, IEEE 754, BigDecimal & BigInteger** · 🎥 50m · 💻 50m
`float` vs `double` · IEEE 754 binary representation · why `0.1 + 0.2 != 0.3` · precision loss demos · `NaN`, `Infinity`, `-0.0` and comparison traps · never use `double` for money — the rule · `BigDecimal`: construction from String vs double, scale, rounding modes, `compareTo` vs `equals` · `BigInteger` for cryptography and large math · `Math.round`/`floor`/`ceil` behavior

**Day 11 — char, Unicode, Escapes & the Character API** · 🎥 35m · 💻 35m
`char` as unsigned 16-bit · ASCII vs Unicode vs UTF-8 vs UTF-16 · code points vs code units · surrogate pairs and emoji handling · escape sequences (`\n`, `\t`, `\\`, `\u0041`) · `Character` utility methods (`isDigit`, `isLetter`, `toUpperCase`) · char arithmetic · converting between `char`, `int`, and `String`

**Day 12 — Booleans, Relational & Logical Operators** · 🎥 30m · 💻 35m
`boolean` type · relational operators `==`, `!=`, `<`, `>`, `<=`, `>=` · logical `&&`, `||`, `!` · short-circuit evaluation and why it matters for null checks and performance · non-short-circuit `&` and `|` · XOR on booleans · common mistakes: `=` vs `==`, comparing objects with `==`

**Day 13 — Operator Precedence, Ternary & Compound Assignment** · 🎥 30m · 💻 30m
Full precedence table walkthrough · associativity · when parentheses are mandatory vs stylistic · the ternary `?:` operator and nesting (and when to stop nesting) · compound assignment `+=`, `-=`, `*=`, `/=`, `%=`, `<<=` etc. · the hidden cast inside compound assignment · `++`/`--` prefix vs postfix · evaluation order gotchas like `i = i++`

**Day 14 — Type Casting, Widening, Narrowing & Autoboxing** · 🎥 40m · 💻 40m
Implicit widening conversions and the promotion chart · explicit narrowing casts and data loss · integer division truncation · numeric promotion in expressions · casting reference types, upcast vs downcast · `ClassCastException` · `instanceof` guard · autoboxing/unboxing rules · `NullPointerException` from unboxing · performance cost of boxing in loops

**Day 15 — Strings: Immutability, the String Pool & Interning** · 🎥 45m · 💻 40m
Why `String` is immutable (security, caching, thread safety, hashcode caching) · the string constant pool in heap · literal vs `new String()` · `intern()` · `==` vs `.equals()` demonstrated in memory diagrams · compact strings (Java 9+, byte[] backing) · string concatenation compiled to `StringConcatFactory`/invokedynamic · memory implications of concatenating in loops

**Day 16 — The String API, Method by Method** · 🎥 50m · 💻 50m
`length`, `charAt`, `substring`, `indexOf`, `lastIndexOf`, `contains`, `startsWith`, `endsWith` · `equals` vs `equalsIgnoreCase` vs `compareTo` · `toUpperCase`/`toLowerCase` with Locale traps (Turkish i) · `trim` vs `strip` vs `isBlank` vs `isEmpty` · `split` with limits and regex behavior · `join`, `replace` vs `replaceAll` · `repeat`, `lines`, `chars` · `matches` · `toCharArray` · `String.valueOf` and `format`

**Day 17 — StringBuilder, StringBuffer & Text Blocks** · 🎥 40m · 💻 40m
Why mutable string builders exist · `StringBuilder` API: `append`, `insert`, `delete`, `reverse`, `replace`, `setLength` · capacity and internal array growth · `StringBuffer` and synchronization (and why you rarely need it) · benchmark: concatenation vs builder in a 100k loop · text blocks (`"""`) with incidental whitespace rules, escapes `\` and `\s` · when text blocks beat concatenation (SQL, JSON, HTML)

**Day 18 — String Formatting: printf, String.format & MessageFormat** · 🎥 35m · 💻 35m
Format specifiers `%s`, `%d`, `%f`, `%n`, `%x`, `%b`, `%e` · width, precision, flags (`-`, `+`, `0`, `,`) · argument index `%1$s` · `String.format` vs `printf` vs `formatted()` · `Formatter` class · locale-aware formatting · `MessageFormat` for i18n templates · `NumberFormat` and currency · common formatting bugs

**Day 19 — Console I/O: Scanner, BufferedReader & System Streams** · 🎥 35m · 💻 40m
`System.in`, `System.out`, `System.err` · `Scanner`: `nextInt`, `nextLine`, `hasNext*`, delimiters · the classic `nextInt()` then `nextLine()` bug and three fixes · `BufferedReader` + `InputStreamReader` and why it's faster · `Console` class and password reading · input validation loops · closing streams · `System.exit` and exit codes

**Day 20 — Conditionals: if / else if / else** · 🎥 30m · 💻 35m
`if` syntax and braces (always use them) · `else if` chains and evaluation order · nested conditionals and how to flatten them · guard clauses and early return · avoiding deep nesting · truthiness does not exist in Java · null-safe condition ordering · boolean expression simplification · De Morgan's laws in practice

**Day 21 — switch: Statements, Expressions & Pattern Matching** · 🎥 45m · 💻 45m
Classic `switch` with `case`/`break`/`default` · fall-through behavior and when it's intentional · supported types (int, char, String, enum) · switch expressions with `->` and `yield` · exhaustiveness requirements · pattern matching for switch (type patterns) · guarded patterns with `when` · record patterns in switch · `null` case handling · refactoring if-else chains into switch

**Day 22 — Loops: for, while & do-while** · 🎥 40m · 💻 50m
Classic `for` anatomy: init, condition, update · counter scope · multiple init/update expressions · `while` for unknown iteration counts · `do-while` guaranteed first execution · infinite loops and controlled exit · loop invariants · off-by-one errors dissected · choosing the right loop · performance: hoisting invariant work out of loops

**Day 23 — Enhanced for, break, continue & Labeled Loops** · 🎥 35m · 💻 40m
Enhanced for-each syntax and what it compiles to · iterating arrays vs Iterables · why you can't modify the collection inside for-each · `break` and `continue` semantics · labeled break/continue for nested loops · when labels are acceptable vs a code smell · nested loop patterns: matrix traversal, pair generation, search-and-exit · complexity of nested loops

**Day 24 — Arrays: Declaration, Initialization & Traversal** · 🎥 40m · 💻 45m
Array declaration syntaxes · fixed length and `length` field (not method) · default initialization values · array literals and anonymous arrays · heap storage and reference semantics · `ArrayIndexOutOfBoundsException` · copying: manual loop vs `System.arraycopy` vs `Arrays.copyOf` vs `clone` (shallow!) · arrays as method parameters · returning arrays · varargs preview

**Day 25 — Multi-Dimensional Arrays & java.util.Arrays** · 🎥 40m · 💻 45m
2D arrays as arrays of arrays · rectangular vs jagged arrays · row-major traversal and cache friendliness · 3D+ arrays · `Arrays.toString` vs `Arrays.deepToString` · `Arrays.sort` (dual-pivot quicksort for primitives, TimSort for objects) · `Arrays.binarySearch` preconditions · `Arrays.fill`, `equals`, `deepEquals`, `hashCode`, `asList`, `stream`, `setAll`, `compare`, `mismatch`

**Day 26 — Methods: Signatures, Parameters & Pass-by-Value** · 🎥 40m · 💻 40m
Method anatomy: modifiers, return type, name, parameters, throws, body · calling methods · `void` and `return` · Java is always pass-by-value — proving it with primitives and object references · what "copying the reference" means in memory · mutating vs reassigning a parameter · method length and single-responsibility · Javadoc for methods (`@param`, `@return`, `@throws`)

**Day 27 — Overloading, Varargs & Method Resolution** · 🎥 40m · 💻 40m
Overloading rules (signature must differ; return type alone is not enough) · compile-time resolution vs runtime dispatch · the three-phase overload resolution algorithm (exact → widening → boxing → varargs) · ambiguity errors · varargs syntax, restrictions, and array under the hood · `@SafeVarargs` · heap pollution warning · overloading pitfalls with `null` and autoboxing (`remove(int)` vs `remove(Object)`)

**Day 28 — Recursion: Stack Frames, Tail Calls & Memoization** · 🎥 45m · 💻 55m
How the call stack works, frame by frame · base case and recursive case · factorial, Fibonacci, power, GCD · `StackOverflowError` and default stack size (`-Xss`) · tree/directory recursion · recursion vs iteration tradeoffs · why the JVM has no tail-call optimization · converting recursion to iteration with an explicit stack · memoization to fix exponential Fibonacci · mutual recursion · backtracking preview

**Day 29 — Variable Scope, Shadowing & final** · 🎥 30m · 💻 30m
Block, method, instance, and class scope · lifetime vs visibility · shadowing a field with a local variable and the `this.` fix · shadowing in inner classes · `final` on locals, parameters, fields, methods, classes · effectively final and why lambdas need it · `static final` constants and compile-time inlining · immutability as a design default

**Day 30 — Classes, Objects, References & Memory** · 🎥 45m · 💻 50m
Class as blueprint, object as instance · fields and methods · `new` and heap allocation · reference variables on the stack pointing to heap objects · multiple references to one object (aliasing) · `null` references · garbage collection preview: when an object becomes unreachable · object identity vs equality · designing your first real class (`BankAccount`) · UML class diagram basics

**Day 31 — Constructors, this() & Constructor Chaining** · 🎥 40m · 💻 40m
Default (no-arg) constructor and when the compiler stops supplying it · parameterized constructors · overloading constructors · `this()` delegation rules (must be first statement) · `this` as the current instance reference · initialization order: fields → initializer blocks → constructor body · copy constructors · private constructors for utility/singleton classes · the builder pattern preview for many parameters

**Day 32 — Encapsulation, Accessors & Designing for Immutability** · 🎥 40m · 💻 45m
Why public fields are a design failure · private fields + public accessors · validation inside setters · read-only classes (no setters) · defensive copying of mutable fields in constructor and getter · the 5 rules for a truly immutable class · immutability and thread safety · JavaBeans conventions and where they matter (frameworks) · when getters/setters are boilerplate worth replacing with records

**Day 33 — static Fields, Methods, Blocks & Utility Classes** · 🎥 40m · 💻 40m
Class-level vs instance-level state · `static` fields shared across all instances · static counters · static methods and why they can't use `this` · calling static members correctly · `static` blocks for one-time initialization and ordering · static imports · utility class pattern (`final class` + private constructor) · static vs singleton · why static state hurts testability · `Math`, `Collections`, `Objects` as reference designs

**Day 34 — Initializer Blocks & Full Initialization Order** · 🎥 30m · 💻 30m
Instance initializer blocks vs constructors · static initializer blocks · exact initialization order in a class hierarchy: static fields/blocks (once, on first use) → instance fields/blocks → constructor · what happens when a superclass constructor calls an overridden method (the classic bug) · class loading triggers · lazy vs eager initialization · initialization-on-demand holder idiom

**Day 35 — Inheritance, extends & super** · 🎥 45m · 💻 45m
IS-A relationships · `extends` and single inheritance of classes · what gets inherited and what doesn't (constructors, private members) · `super.method()` and `super(...)` · implicit `super()` call and compile errors when the parent has no no-arg constructor · constructor chaining up the hierarchy · `Object` as the root of everything · protected access · when inheritance is the wrong tool (preview of Day 42) · `final` classes to prevent extension

**Day 36 — Method Overriding, @Override & Hiding** · 🎥 40m · 💻 40m
Overriding rules: same signature, covariant return types, no weaker access, no broader checked exceptions · `@Override` annotation and why it's mandatory in practice · overriding vs overloading side by side · you cannot override `static`, `private`, or `final` methods · method hiding for statics and field hiding · calling `super` inside an override · the Liskov Substitution Principle preview

**Day 37 — Polymorphism & Dynamic Dispatch** · 🎥 45m · 💻 45m
Compile-time type vs runtime type · virtual method invocation and the vtable mental model · programming to the supertype · upcasting (implicit) and downcasting (explicit) · `instanceof` and pattern-matching `instanceof` with binding variable · `ClassCastException` prevention · polymorphic collections · polymorphism replacing if-else type checks · real example: `PaymentMethod` hierarchy processing

**Day 38 — Abstract Classes & Abstract Methods** · 🎥 40m · 💻 40m
`abstract` keyword on classes and methods · why abstract classes can't be instantiated · abstract classes with constructors, fields, and concrete methods · forcing subclasses to implement · partial implementation and the Template Method pattern · abstract vs concrete design decisions · protected abstract hooks · a real example: abstract `Report` with `generateHeader()` template

**Day 39 — Interfaces: Contracts & Multiple Inheritance of Type** · 🎥 45m · 💻 45m
`interface` declaration · implicitly public abstract methods · `implements` and implementing multiple interfaces · constants in interfaces (`public static final`) and why that's an anti-pattern · interface as a contract for decoupling · interface-based programming and dependency inversion · abstract class vs interface decision table · interfaces you'll use constantly: `Comparable`, `Runnable`, `Iterable`, `AutoCloseable`

**Day 40 — default, static & private Interface Methods** · 🎥 40m · 💻 40m
Why `default` methods were added in Java 8 (API evolution without breaking implementors) · writing default methods · overriding a default method · the diamond problem and explicit resolution with `Interface.super.method()` · `static` methods in interfaces (factory methods) · `private` and `private static` interface methods (Java 9+) for shared internals · real examples from the JDK (`List.sort`, `Comparator.reversed`, `Iterable.forEach`)

**Day 41 — Marker & Functional Interfaces** · 🎥 35m · 💻 35m
Marker interfaces (`Serializable`, `Cloneable`) and how the JVM/libraries check them · annotations as a modern replacement for markers · functional interfaces: exactly one abstract method (SAM) · `@FunctionalInterface` and its compile-time check · default/static methods don't count toward SAM · writing your own functional interface · anonymous-class implementation today, lambda on Day 81 · JDK functional interface preview

**Day 42 — Composition Over Inheritance & Delegation** · 🎥 40m · 💻 45m
The fragile base class problem · inheritance breaks encapsulation (the classic `InstrumentedHashSet` example) · HAS-A vs IS-A · composition with delegation · the Decorator pattern as composition · wrapper classes · when inheritance is genuinely right (true subtype, stable API, designed for extension) · "design for inheritance or prohibit it" · refactoring an inheritance hierarchy into composition live

**Day 43 — Object.equals & hashCode: The Contract** · 🎥 50m · 💻 50m
Default identity-based `equals` · the 5-part equals contract (reflexive, symmetric, transitive, consistent, null-false) · writing a correct `equals`: `==` shortcut, `instanceof`/`getClass` decision, field-by-field comparison, float/double via `compare`, arrays via `Arrays.equals` · the hashCode contract and why unequal hashCodes break HashMap · writing hashCode with `Objects.hash` vs manual 31-multiplier · symmetry breaking with inheritance · IDE generation and Lombok `@EqualsAndHashCode` caveats

**Day 44 — toString, clone, getClass & the Objects Utility** · 🎥 35m · 💻 35m
Overriding `toString` for debugging and logging (never leak secrets) · `getClass()` and runtime type · `clone()`, `Cloneable`, shallow vs deep copy, and why `clone` is broken · copy constructors and static factories as replacements · `finalize()` deprecation and `Cleaner` · `Objects.requireNonNull`, `equals`, `hash`, `toString`, `isNull`, `requireNonNullElse` · `@Deprecated` and `@SuppressWarnings`

**Day 45 — Comparable & Comparator** · 🎥 45m · 💻 50m
Natural ordering with `Comparable.compareTo` · the compareTo contract and consistency with equals · sorting objects with `Collections.sort` / `Arrays.sort` / `List.sort` · `Comparator` for alternate orderings · anonymous class comparators · `Comparator.comparing`, `thenComparing`, `reversed`, `nullsFirst`/`nullsLast`, `comparingInt` · chaining multi-field sorts · the subtraction-overflow bug in comparators · `TreeSet`/`TreeMap` ordering preview

**Day 46 — Enums: Far More Than Constants** · 🎥 45m · 💻 45m
`enum` declaration and implicit `Enum` superclass · `values()`, `valueOf()`, `name()`, `ordinal()` (and why never to persist ordinal) · enums with fields, constructors, and methods · constant-specific method implementations (abstract methods per constant) · enums implementing interfaces · `switch` over enums · `EnumMap` and `EnumSet` performance · enum singleton pattern · strategy pattern with enums · enums in JPA (`@Enumerated`) preview

**Day 47 — Records: Concise Immutable Data Carriers** · 🎥 40m · 💻 45m
`record` syntax and what the compiler generates (private final fields, accessors, `equals`, `hashCode`, `toString`, canonical constructor) · compact constructors for validation and normalization · additional constructors, static factories, and instance methods · records are implicitly final and can't extend · implementing interfaces · nested/local records · records as DTOs, value objects, and API responses · record patterns in `instanceof` and `switch` · limitations (no inheritance, shallow immutability)

**Day 48 — Sealed Classes & Interfaces** · 🎥 40m · 💻 40m
`sealed`, `permits`, and the `final`/`sealed`/`non-sealed` rule for subtypes · same-module/package constraints · why sealing enables exhaustive pattern matching without a `default` branch · algebraic data types in Java (sealed interface + records) · modeling a `Result<T>` success/failure type · modeling domain state machines · sealed hierarchies vs enums vs polymorphism

**Day 49 — Nested Classes: static, Inner, Local & Anonymous** · 🎥 45m · 💻 45m
Static nested classes and when to use them (Builder!) · inner (non-static) classes and the implicit outer reference · `Outer.this` · creating an inner instance from outside (`outer.new Inner()`) · the memory-leak risk of inner class outer references · local classes inside methods · anonymous classes, captured effectively-final variables, and their compiled `$1` names · when a lambda replaces an anonymous class and when it can't · builder pattern implemented end to end

**Day 50 — Packages, Imports & Access Modifiers** · 🎥 40m · 💻 40m
Package declaration and directory structure · reverse-domain naming · `import`, wildcard imports, static imports, fully-qualified names · name collisions · the 4 access levels (`private`, package-private, `protected`, `public`) with a full visibility matrix · `protected` across packages (the subtle rule) · package-by-layer vs package-by-feature project layout · encapsulation strategy for a real backend project · `module-info.java` teaser

**Day 51 — The Exception Hierarchy: Checked vs Unchecked** · 🎥 45m · 💻 40m
`Throwable` → `Error` / `Exception` → `RuntimeException` · what each branch means · the full hierarchy diagram of common exceptions · checked vs unchecked: compile-time enforcement and the design debate · `Error` types you should never catch (`OutOfMemoryError`, `StackOverflowError`) · reading a stack trace top to bottom · `Caused by:` chains · `getMessage`, `getCause`, `getStackTrace`, `printStackTrace` (and why you shouldn't use the last one in production)

**Day 52 — try / catch / finally, Multi-Catch & try-with-resources** · 🎥 50m · 💻 50m
`try`/`catch` mechanics and catch ordering (most specific first) · `finally` and guaranteed execution · when `finally` does NOT run · the `return`-in-finally trap that swallows exceptions · multi-catch `catch (A | B e)` and its effectively-final restriction · nested try blocks · `AutoCloseable`/`Closeable` and try-with-resources · multiple resources and reverse close order · suppressed exceptions (`getSuppressed`) · rewriting legacy finally-close code

**Day 53 — throw, throws, Custom Exceptions & Exception Design** · 🎥 45m · 💻 45m
`throw` vs `throws` · declaring and propagating checked exceptions · overriding methods and exception narrowing rules · creating custom exception classes (all 4 constructors) · checked or unchecked for your domain? decision guide · exception translation and wrapping (never lose the cause) · exception chaining · fail-fast with `IllegalArgumentException`/`IllegalStateException` · never swallow exceptions · logging vs rethrowing (not both) · designing an exception hierarchy for a backend service · performance cost of exceptions and `fillInStackTrace`

**Day 54 — Wrapper Classes, Integer Cache & Parsing** · 🎥 40m · 💻 40m
The 8 wrapper classes and their utility methods · autoboxing/unboxing compiled output · the Integer cache (-128..127) and the `==` comparison trap · `Integer.valueOf` vs `new Integer` (deprecated) · `parseInt` vs `valueOf` · `NumberFormatException` handling · radix parsing · `MIN_VALUE`/`MAX_VALUE` · `Boolean.parseBoolean` quirks · wrappers in collections and the boxing cost · `Integer.compare`, `sum`, `bitCount`, `toBinaryString`

**Day 55 — java.lang Toolbox + Phase 1 Capstone** · 🎥 55m · 💻 120m
`Math` (rounding, min/max, pow, sqrt, random, exact arithmetic) · `Random` vs `ThreadLocalRandom` vs `SecureRandom` · `UUID` generation and versions · `System` (currentTimeMillis, nanoTime, getenv, getProperty, arraycopy, lineSeparator) · `Runtime` (availableProcessors, memory) · `Optional` first look · **Capstone: build the Library Management System** — books, members, loans, fines, search, custom exceptions, immutable value objects, enums for state, full OOP design, `equals`/`hashCode`, `Comparable` sorting, and a console menu

---

# PHASE 2 — Collections & Generics
**Days 56–80 · Weeks 9–12**
> **Milestone project:** a generic, type-safe in-memory repository with indexing and querying.

**Day 56 — The Collections Framework Map** · 🎥 40m · 💻 35m
The full hierarchy diagram: `Iterable` → `Collection` → `List`/`Set`/`Queue`, and `Map` standing apart · what each interface guarantees · the "interface type, implementation instance" rule · legacy classes (`Vector`, `Hashtable`, `Stack`, `Enumeration`) and why they persist · choosing a collection: the decision tree you'll reuse all year · mutability, ordering, duplicates, and null-tolerance comparison table

**Day 57 — List & ArrayList Internals** · 🎥 45m · 💻 45m
`List` contract: ordered, indexed, duplicates allowed · `add`, `get`, `set`, `remove`, `indexOf`, `contains`, `subList` (and the view/leak trap) · `ArrayList` backed by `Object[]` · default capacity 10, growth formula (oldCapacity + oldCapacity>>1) · `System.arraycopy` on insert/remove in the middle · `ensureCapacity` and `trimToSize` · amortized O(1) append, O(n) middle insert · `removeIf` and safe removal · `modCount` and fail-fast iteration

**Day 58 — LinkedList Internals & When Not To Use It** · 🎥 40m · 💻 40m
Doubly-linked node structure · `LinkedList` implements both `List` and `Deque` · O(1) head/tail ops vs O(n) index access · `addFirst`, `addLast`, `peek`, `poll`, `push`, `pop` · memory overhead per node vs ArrayList · cache locality and why ArrayList usually wins benchmarks even for insertions · genuine LinkedList use cases (queue/deque, LRU chains) · benchmark demo with JMH preview

**Day 59 — Vector, Stack & CopyOnWriteArrayList** · 🎥 30m · 💻 30m
`Vector` synchronization on every method and its cost · `Stack` extends Vector (a design mistake) — use `ArrayDeque` instead · `Collections.synchronizedList` wrapper and the compound-operation problem · `CopyOnWriteArrayList` semantics, snapshot iterators, and read-heavy use cases · write cost analysis · choosing thread-safe list implementations

**Day 60 — Set & HashSet Internals** · 🎥 40m · 💻 40m
`Set` contract: no duplicates, no index · `HashSet` is a `HashMap` with a dummy value · how `hashCode` and `equals` determine membership · what happens when you mutate an object after adding it to a set (the lost-element bug) · `add` return value · set operations: union (`addAll`), intersection (`retainAll`), difference (`removeAll`) · null handling · initial capacity and load factor tuning

**Day 61 — LinkedHashSet, TreeSet, SortedSet & NavigableSet** · 🎥 40m · 💻 40m
`LinkedHashSet` insertion-order iteration via a doubly-linked list · deduplication while preserving order · `TreeSet` red-black tree, O(log n) ops, sorted iteration · natural ordering vs supplied `Comparator` · `NavigableSet`: `first`, `last`, `floor`, `ceiling`, `higher`, `lower`, `headSet`, `tailSet`, `subSet`, `pollFirst`, `descendingSet` · TreeSet uses `compareTo`, not `equals` — the consistency requirement · no nulls in TreeSet

**Day 62 — Map & HashMap Internals** · 🎥 50m · 💻 45m
`Map` contract and why it isn't a `Collection` · `put`, `get`, `remove`, `containsKey`, `getOrDefault`, `putIfAbsent`, `computeIfAbsent`, `computeIfPresent`, `compute`, `merge`, `forEach`, `replaceAll` · `entrySet`/`keySet`/`values` as live views · `Map.Entry` · bucket array + `Node` chain structure · index computation `(n-1) & hash` · the hash spreading function `h ^ (h >>> 16)` · why keys must be immutable

**Day 63 — HashMap Resizing, Treeification & Collision Attacks** · 🎥 45m · 💻 40m
Load factor 0.75 and the math behind it · threshold and doubling resize · rehashing and node splitting into lo/hi lists (Java 8 improvement over the Java 7 infinite-loop bug) · treeification at 8 nodes per bucket with capacity ≥ 64, untreeify at 6 · red-black tree buckets · worst case O(log n) instead of O(n) · hash collision DoS attacks · sizing a HashMap correctly for known element counts · `Map.Entry` memory footprint

**Day 64 — LinkedHashMap & Building an LRU Cache** · 🎥 35m · 💻 45m
Insertion order vs access order (`accessOrder=true`) · the doubly-linked entry chain · `removeEldestEntry` hook · building a working LRU cache in 20 lines · thread safety concerns and wrapping · when to reach for Caffeine instead (Day 387) · `LinkedHashMap` for deterministic JSON serialization order

**Day 65 — TreeMap, SortedMap & NavigableMap** · 🎥 40m · 💻 40m
Red-black tree implementation · O(log n) put/get/remove · sorted key iteration · `firstKey`, `lastKey`, `floorKey`, `ceilingKey`, `higherEntry`, `lowerEntry`, `headMap`, `tailMap`, `subMap`, `descendingMap`, `pollFirstEntry` · range queries and time-series bucketing · comparator-based ordering · practical uses: leaderboards, interval lookup, rate windows

**Day 66 — Specialized Maps: ConcurrentHashMap, WeakHashMap, EnumMap, IdentityHashMap** · 🎥 40m · 💻 35m
`Hashtable` legacy and full-method synchronization · `ConcurrentHashMap` overview (deep dive on Day 145) · `WeakHashMap` and weak-reference keys for caches · `IdentityHashMap` using `==` instead of `equals` · `EnumMap` array-backed, extremely fast, ordinal-indexed · `Properties` · `Map.of`/`Map.ofEntries` immutable factories · choosing the right map: a decision matrix

**Day 67 — Queue, Deque, ArrayDeque & PriorityQueue** · 🎥 45m · 💻 45m
`Queue` contract: `add`/`offer`, `remove`/`poll`, `element`/`peek` — throwing vs returning-null pairs · `Deque` double-ended operations · `ArrayDeque` circular buffer implementation, why it beats `Stack` and `LinkedList` · using ArrayDeque as a stack · `PriorityQueue` binary heap internals, sift-up/sift-down, O(log n) insert, O(1) peek · custom comparators · why PriorityQueue iteration is NOT sorted · top-K problems · `BlockingQueue` preview

**Day 68 — Iterator, ListIterator & ConcurrentModificationException** · 🎥 35m · 💻 40m
`Iterable`/`Iterator` contract: `hasNext`, `next`, `remove` · what for-each compiles to · `ListIterator` bidirectional traversal, `add`, `set`, `previous` · fail-fast iterators and `modCount` · reproducing and fixing `ConcurrentModificationException` (iterator.remove, removeIf, copy-then-modify, concurrent collection) · fail-safe/weakly-consistent iterators · writing a custom `Iterable` class · `Spliterator` teaser

**Day 69 — Collections & List Utility Methods** · 🎥 35m · 💻 35m
`Collections.sort` with and without comparator · `binarySearch` (and the sorted precondition) · `reverse`, `shuffle`, `swap`, `rotate`, `fill`, `nCopies`, `frequency`, `disjoint`, `min`, `max`, `addAll` · `emptyList`/`singletonList` and their allocation benefits · `synchronizedXxx` wrappers · `unmodifiableXxx` views (view, not copy!) · `Collections.reverseOrder` · `List.copyOf`

**Day 70 — Immutable Collections & Defensive Copying** · 🎥 35m · 💻 35m
`List.of`, `Set.of`, `Map.of` — truly immutable, null-hostile, iteration-order-randomized for Set/Map · `Arrays.asList` is fixed-size but mutable (and backed by the array!) · `Collections.unmodifiableList` is a view that reflects source changes · `List.copyOf` for a real snapshot · defensive copies in constructors and getters · immutable collections in API design · Guava immutable collections comparison · performance and memory benefits

**Day 71 — Contract Violations in Collections: A Bug Hunt** · 🎥 40m · 💻 45m
Live debugging session: mutable key in a HashMap · missing `hashCode` causing duplicate set entries · `compareTo` inconsistent with `equals` breaking TreeSet · asymmetric `equals` across a class hierarchy · comparator that isn't a total order throwing "Comparison method violates its general contract!" · `Arrays.asList` + `add` → `UnsupportedOperationException` · unmodifiable view mutation through the backing list · fixing every one on camera

**Day 72 — Generics: Why They Exist & Raw Types** · 🎥 35m · 💻 35m
Life before generics: casts everywhere and runtime `ClassCastException` · compile-time type safety · `List<String>` syntax · the diamond operator `<>` and inference · raw types and unchecked warnings · why raw types disable ALL generic checks in a class · `@SuppressWarnings("unchecked")` used responsibly · generics and backward compatibility

**Day 73 — Generic Classes & Interfaces** · 🎥 40m · 💻 45m
Declaring `class Box<T>` · multiple type parameters `<K, V>` · naming conventions (T, E, K, V, R, N, S, U) · type parameters in fields, methods, and constructors · generic interfaces and implementing them with a concrete type or staying generic · nested generics `Map<String, List<Order>>` · building a generic `Pair`, `Result<T, E>`, and `Stack<T>` from scratch

**Day 74 — Generic Methods & Type Inference** · 🎥 35m · 💻 40m
Method-level type parameters `<T> void swap(T[] a, int i, int j)` · placement of the type parameter before the return type · inference from arguments, from the target type, and from the return context · explicit type witness `Collections.<String>emptyList()` · generic static factory methods · generic constructors · inference limitations and when you must be explicit

**Day 75 — Bounded Type Parameters** · 🎥 35m · 💻 40m
Upper bounds `<T extends Number>` and what methods become available · multiple bounds `<T extends Comparable<T> & Serializable>` (class first, then interfaces) · recursive bounds `<T extends Comparable<? super T>>` and why the JDK uses them · bounded types enabling arithmetic and comparison · writing a generic `max` method · bounds vs wildcards

**Day 76 — Wildcards & PECS** · 🎥 45m · 💻 45m
Unbounded `<?>` and what you can/can't do with it · upper-bounded `<? extends T>` (covariant, read-only) · lower-bounded `<? super T>` (contravariant, write-only) · **Producer Extends, Consumer Super** explained with `Collections.copy` · why `List<String>` is not a `List<Object>` · arrays are covariant (and unsafe) while generics are invariant · `ArrayStoreException` · applying PECS to real API signatures · wildcard capture and helper methods

**Day 77 — Type Erasure, Bridge Methods & Generic Limitations** · 🎥 40m · 💻 35m
What the compiler actually emits: erasure to raw types plus casts · `javap` demonstration · bridge methods for covariant overrides · consequences: no `new T()`, no `T[]`, no `instanceof T`, no static fields of type T, no primitive type arguments, no overloading on erased signatures, no generic exception types · reifiable vs non-reifiable types · heap pollution and `@SafeVarargs` · `Class<T>` tokens and super type tokens as workarounds

**Day 78 — Complexity Analysis & Choosing the Right Collection** · 🎥 45m · 💻 45m
Big-O notation refresher: O(1), O(log n), O(n), O(n log n), O(n²) · time and space complexity of every collection operation in a single reference table · amortized analysis of ArrayList growth · practical measurement vs theory (constant factors, cache effects) · memory footprint comparison (ArrayList vs LinkedList vs HashMap vs TreeMap) · real scenarios: dedupe 10M records, top-100 by score, LRU cache, ordered range query — pick and justify

**Day 79 — Arrays ↔ Collections Conversions** · 🎥 30m · 💻 35m
`Arrays.asList` and its three surprises · `List.of` from varargs · `toArray()` vs `toArray(new T[0])` vs `toArray(T[]::new)` and the performance myth · primitive arrays can't become `List<int>` — boxing with streams · `Arrays.stream` vs `Stream.of` for primitives · `Collectors.toList` vs `Stream.toList` (mutability difference) · converting between Set, List, and Map cleanly

**Day 80 — Phase 2 Capstone: A Generic In-Memory Repository** · 🎥 45m · 💻 150m
Design `Repository<T, ID>` interface · implement with `ConcurrentHashMap` storage · secondary indexes with `Map<String, Map<Object, Set<ID>>>` · generic query filters with predicates · sorted views with `TreeMap` · pagination · optimistic ID generation · full unit tests · complexity documentation for every operation · this becomes the mock persistence layer you'll reuse until Day 223

---

# PHASE 3 — Functional Java, Lambdas & Streams
**Days 81–98 · Weeks 13–15**
> **Milestone project:** an in-memory analytics engine over a 1M-row dataset using streams only.

**Day 81 — Lambda Expressions: Syntax, Capture & Semantics** · 🎥 45m · 💻 45m
From anonymous class to lambda, step by step · all syntax forms: `() ->`, `x ->`, `(x, y) ->`, block bodies, explicit types, `var` parameters · target typing and how the compiler infers the functional interface · capturing local variables (must be effectively final) and why · capturing `this` — lambdas do NOT create a new scope, unlike anonymous classes · lambdas compile to `invokedynamic`, not to `$1` classes · serialization and debugging of lambdas · when a lambda hurts readability

**Day 82 — Method References: All Four Kinds** · 🎥 35m · 💻 40m
Static method reference `Integer::parseInt` · bound instance reference `System.out::println` · unbound instance reference `String::toUpperCase` (first parameter becomes the receiver) · constructor reference `ArrayList::new` and array constructor `String[]::new` · `super::method` · when a method reference is clearer than a lambda and when it isn't · resolving ambiguity errors

**Day 83 — Function, BiFunction, compose & andThen** · 🎥 35m · 💻 40m
`Function<T, R>` and `apply` · `andThen` vs `compose` and evaluation order · `Function.identity()` and where it's used (`Collectors.toMap`) · `BiFunction<T, U, R>` · primitive specializations `IntFunction`, `ToIntFunction`, `IntToDoubleFunction` and why they exist · building pipelines of transformations · function composition as a design tool for validation chains

**Day 84 — Predicate, Consumer & Supplier** · 🎥 35m · 💻 40m
`Predicate<T>`: `test`, `and`, `or`, `negate`, `isEqual`, `not` · composing business rules as predicates · `BiPredicate` · `Consumer<T>`: `accept`, `andThen`, side-effect semantics · `BiConsumer` and `Map.forEach` · `Supplier<T>`: lazy evaluation, deferred expensive computation, `Optional.orElseGet`, logging suppliers · primitive variants (`IntPredicate`, `IntConsumer`, `IntSupplier`, `BooleanSupplier`)

**Day 85 — UnaryOperator, BinaryOperator & Custom Functional Interfaces** · 🎥 35m · 💻 40m
`UnaryOperator<T>` as `Function<T,T>` and `List.replaceAll` · `BinaryOperator<T>`, `minBy`, `maxBy`, and use in `reduce` · `IntBinaryOperator` and friends · writing your own functional interface when the JDK has no fit (e.g. `TriFunction`, `ThrowingFunction`) · handling checked exceptions in lambdas: wrapper interfaces, sneaky throws, and the `Either`/`Result` approach · a complete `ThrowingFunction` utility you'll reuse

**Day 86 — Streams: The Pipeline Model** · 🎥 45m · 💻 45m
What a Stream is and is NOT (not a data structure, not reusable, doesn't mutate the source) · source → 0..n intermediate ops → 1 terminal op · laziness and why nothing runs until the terminal op · short-circuiting and fusion (single-pass execution proven with `peek`) · stream sources: `Collection.stream`, `Arrays.stream`, `Stream.of`, `Stream.iterate` (both forms), `Stream.generate`, `Files.lines`, `Random.ints`, `String.chars`, `Stream.empty` · `IllegalStateException` on reuse

**Day 87 — Intermediate Operations: filter, map, flatMap, mapMulti** · 🎥 45m · 💻 50m
`filter` with predicates and ordering for performance · `map` transformations and type changes · `flatMap` for flattening nested collections (orders → line items) · flatMap for `Optional` streams · flatMap to split lines into words · `mapMulti` (Java 16+) as a lower-allocation flatMap · `mapToInt`/`mapToObj` boxing transitions · chaining order and its effect on work done

**Day 88 — sorted, distinct, limit, skip, takeWhile, dropWhile & peek** · 🎥 40m · 💻 40m
`distinct` and its dependence on `equals`/`hashCode` (and its statefulness) · `sorted` natural vs comparator, stability, and the full-buffering cost · `limit` and `skip` on ordered vs unordered streams · `takeWhile`/`dropWhile` (Java 9+) and the difference from filter · `peek` for debugging only, and why it may be skipped entirely under optimization · stateful vs stateless op performance implications

**Day 89 — Terminal Operations: forEach, count, match, find, toArray** · 🎥 35m · 💻 40m
`forEach` vs `forEachOrdered` · `count` and the source-size optimization that can skip the pipeline · `anyMatch`, `allMatch`, `noneMatch` short-circuiting and vacuous truth on empty streams · `findFirst` vs `findAny` (and parallel implications) · `toArray` with generators · `iterator()` escape hatch · `min`/`max` returning Optional · `toList()` (Java 16+) vs `collect(toList())`

**Day 90 — reduce: Fold Semantics Done Right** · 🎥 40m · 💻 45m
The three `reduce` overloads · identity value requirements · accumulator associativity requirement and what breaks without it · the combiner in the 3-arg form and its role in parallel execution · summing, concatenating, and finding max with reduce · why `reduce` with a mutable container is wrong (use `collect`) · `Optional` result of the 1-arg form · implementing custom aggregations

**Day 91 — Collectors I: toList, toSet, toMap, joining, counting** · 🎥 40m · 💻 45m
`Collectors.toList` / `toSet` / `toCollection(TreeSet::new)` · `toUnmodifiableList` · `toMap` with key and value mappers · **duplicate key → IllegalStateException** and the merge-function fix · `toMap` with a map supplier for `LinkedHashMap`/`TreeMap` · the null-value trap in `toMap` · `joining` with delimiter, prefix, suffix · `counting`, `summingInt`, `averagingDouble`, `summarizingInt`, `minBy`/`maxBy`, `reducing`

**Day 92 — Collectors II: groupingBy & partitioningBy** · 🎥 45m · 💻 50m
`groupingBy` with a classifier · the returned `Map<K, List<T>>` · downstream collectors: `counting`, `mapping`, `summingInt`, `toSet`, `joining` · multi-level grouping (grouping inside grouping) · `groupingBy` with a map factory for ordered results · `partitioningBy` returning a boolean-keyed map with both keys always present · `groupingByConcurrent` · real report-building exercises (sales by region by month)

**Day 93 — Collectors III: mapping, flatMapping, filtering, teeing & Custom Collectors** · 🎥 45m · 💻 50m
`mapping` downstream · `flatMapping` and `filtering` (Java 9+) and why filtering-downstream differs from filtering-upstream · `collectingAndThen` for post-processing (e.g. wrapping in an unmodifiable map) · `teeing` (Java 12+) to run two collectors and merge · the `Collector` interface: supplier, accumulator, combiner, finisher, characteristics · `Collector.of` for a custom collector · writing a `toImmutableSortedMap` collector from scratch

**Day 94 — Primitive Streams & Boxing Costs** · 🎥 35m · 💻 40m
`IntStream`, `LongStream`, `DoubleStream` · `range` vs `rangeClosed` · `sum`, `average`, `max`, `min`, `summaryStatistics` · `IntSummaryStatistics` fields · `boxed()` and `mapToObj` · `asDoubleStream` · avoiding boxing in hot loops with benchmark evidence · `Arrays.stream(int[])` · `String.chars()` returning `IntStream` and the `(char)` cast gotcha · when the JIT elides boxing anyway

**Day 95 — Parallel Streams, Spliterator & When NOT To Use Them** · 🎥 50m · 💻 45m
`parallelStream()` / `.parallel()` · the common ForkJoinPool and `availableProcessors - 1` · `Spliterator`: `tryAdvance`, `trySplit`, `estimateSize`, characteristics · splittability of ArrayList vs LinkedList vs HashMap vs `Stream.iterate` · the NQ model (data size × per-element cost) for deciding · ordering costs (`forEachOrdered`, `findFirst`, `sorted`) · shared mutable state = wrong answers, demonstrated · why parallel streams in a web server can starve the common pool · custom ForkJoinPool submission trick · measured benchmarks, not guesses

**Day 96 — Optional: Correct Usage & Anti-Patterns** · 🎥 45m · 💻 45m
Why `Optional` exists and what problem it actually solves · `of`, `ofNullable`, `empty` · `isPresent`/`isEmpty`/`get` (and why `get` is a smell) · `ifPresent`, `ifPresentOrElse` · `map`, `flatMap`, `filter` chains · `or` (Java 9+), `orElse` vs `orElseGet` (eager vs lazy — the classic bug), `orElseThrow` · `stream()` on Optional · **anti-patterns**: Optional fields, Optional parameters, Optional in collections, serializing Optional · the official rule: return type only · null vs Optional in a real service layer

**Day 97 — Stream Gatherers & Modern Stream Additions** · 🎥 40m · 💻 40m
`Stream.gather` and the `Gatherer` interface (Java 22+, final in 24) · built-in gatherers: `windowFixed`, `windowSliding`, `fold`, `scan`, `mapConcurrent` · writing a custom gatherer for running totals and deduplication-by-key · how gatherers fill the gap intermediate ops always had · `Stream.iterate` with predicate · `Stream.ofNullable` · `takeWhile` vs gatherers · migration notes if you're on Java 17 LTS

**Day 98 — Phase 3 Capstone: Streams Analytics Engine** · 🎥 50m · 💻 150m
Load a 1M-row CSV of e-commerce orders · compute revenue by category by quarter · top-10 customers by lifetime value · median and percentile order value · cohort retention buckets · flatMap over line items · custom collectors for weighted averages · `Optional`-safe lookups · benchmark sequential vs parallel with real numbers · refactor an imperative 200-line version into 30 declarative lines and compare readability and speed

---

# PHASE 4 — Modern Java, I/O, Date-Time & Reflection
**Days 99–120 · Weeks 15–18**
> **Milestone project:** a file-based CSV/JSON ETL tool with a plugin system loaded by reflection.

**Day 99 — java.io Overview, File & Byte Streams** · 🎥 40m · 💻 40m
The `java.io` class map: `InputStream`/`OutputStream` vs `Reader`/`Writer` · the decorator design of the whole package · `File` API: exists, length, isDirectory, listFiles, mkdirs, delete, renameTo, canonical vs absolute path · why `File` is legacy · `FileInputStream`/`FileOutputStream` · reading byte by byte vs into a `byte[]` · `read()` returning -1 · resource closing and try-with-resources · `ByteArrayInputStream`/`ByteArrayOutputStream` for in-memory work

**Day 100 — Character Streams, Encodings & Charset Pitfalls** · 🎥 40m · 💻 40m
`Reader`/`Writer` hierarchy · `FileReader`/`FileWriter` and the platform-default-charset trap · always specifying `StandardCharsets.UTF_8` · `InputStreamReader`/`OutputStreamWriter` as bridges · UTF-8 vs UTF-16 vs ISO-8859-1 byte-level demo · BOM handling · mojibake reproduction and fix · `file.encoding` and Java 18's UTF-8-by-default change · `String.getBytes(Charset)` and `new String(bytes, Charset)`

**Day 101 — Buffered Streams, PrintWriter & I/O Performance** · 🎥 35m · 💻 40m
Why unbuffered I/O is slow (syscall per byte) · `BufferedInputStream`/`BufferedReader`/`BufferedWriter` and buffer sizing · `readLine()` semantics · `PrintWriter` vs `PrintStream`, autoflush, and swallowed exceptions · `DataInputStream`/`DataOutputStream` for binary primitives and endianness · `flush()` and when data actually hits disk · benchmark: 100 MB file read with and without buffering

**Day 102 — Serialization, transient, serialVersionUID & Its Risks** · 🎥 45m · 💻 40m
`Serializable` marker and `ObjectOutputStream`/`ObjectInputStream` · what the binary format contains · `transient` fields · `serialVersionUID` and `InvalidClassException` on mismatch · custom `writeObject`/`readObject`, `readResolve`, `writeReplace` · `Externalizable` · serialization of inheritance hierarchies and non-serializable parents · **why Java serialization is a security disaster** (gadget chains, deserialization RCE) · serialization filters (`ObjectInputFilter`) · modern alternatives: JSON, Protobuf, Avro — and what you'll actually use in backend work

**Day 103 — NIO.2: Path, Files & Directory Walking** · 🎥 45m · 💻 45m
`Path`, `Paths.get`, `Path.of`, resolve, relativize, normalize, getParent, getFileName · `Files.exists`, `createDirectories`, `copy`, `move` (with `StandardCopyOption`), `delete`, `deleteIfExists`, `size` · `Files.readAllBytes`, `readString`, `writeString`, `newBufferedReader`, `lines` (and closing the stream!) · `Files.list` vs `walk` vs `find` vs `newDirectoryStream` · `FileVisitor` and `walkFileTree` for recursive deletes · file attributes, permissions, POSIX vs DOS · `Files.probeContentType`

**Day 104 — NIO Buffers, Channels & Memory-Mapped Files** · 🎥 40m · 💻 40m
`ByteBuffer`: capacity, position, limit, mark · `flip`, `clear`, `rewind`, `compact` explained with diagrams · heap vs direct buffers and when direct wins · `FileChannel` read/write/transferTo/transferFrom (zero-copy) · `MappedByteBuffer` for huge files · `Selector` and non-blocking I/O concepts (the foundation of Netty and WebFlux on Day 363) · character sets with `CharsetDecoder`

**Day 105 — WatchService, Temp Files, Locks & Atomic Operations** · 🎥 35m · 💻 35m
`WatchService` for directory change events (create/modify/delete) and its platform quirks · building a hot-reload config watcher · `Files.createTempFile`/`createTempDirectory` and cleanup on exit · `FileLock` and advisory locking across processes · atomic move for safe file publishing (write temp → atomic rename) · `StandardOpenOption` flags (APPEND, CREATE_NEW, TRUNCATE_EXISTING, SYNC) · handling partial writes and crash safety

**Day 106 — Resource Management Patterns & Leak Detection** · 🎥 35m · 💻 35m
`AutoCloseable` design for your own classes · idempotent `close()` · closing in reverse order · resource leaks in long-running servers (file descriptors, sockets, connections) · `lsof`/`ulimit` to observe FD exhaustion · `Cleaner` and `PhantomReference` as `finalize` replacements · reference types recap: strong, soft, weak, phantom · try-with-resources over a wrapper stack · the "who owns closing?" API design question

**Day 107 — java.time: LocalDate, LocalTime & LocalDateTime** · 🎥 40m · 💻 40m
Why `java.util.Date` and `Calendar` had to be replaced (mutability, zero-based months, thread safety) · `LocalDate`: `now`, `of`, `parse`, `plusDays`, `minusMonths`, `withDayOfMonth`, `getDayOfWeek`, `lengthOfMonth`, `isLeapYear` · `LocalTime` and nanosecond precision · `LocalDateTime` composition and decomposition · immutability and the fluent with-er pattern · `TemporalAdjusters` (firstDayOfMonth, next(MONDAY), lastDayOfYear) · comparison methods `isBefore`/`isAfter`/`isEqual`

**Day 108 — Instant, Duration, Period & Testable Clocks** · 🎥 40m · 💻 40m
`Instant` as a point on the UTC timeline and epoch seconds/nanos · `Duration` (time-based) vs `Period` (date-based) and why they're not interchangeable · `ChronoUnit.between` · `Duration.ofSeconds/toMillis/toHoursPart` · measuring elapsed time correctly with `System.nanoTime` vs `Instant` · **`Clock` injection for testable time** — `Clock.systemUTC`, `Clock.fixed`, `Clock.offset` · never calling `LocalDate.now()` inside business logic · `Year`, `YearMonth`, `MonthDay`, `DayOfWeek`

**Day 109 — Time Zones, ZonedDateTime & Storing Time in Databases** · 🎥 45m · 💻 45m
`ZoneId`, `ZoneOffset`, `ZonedDateTime`, `OffsetDateTime` · the IANA tz database and how it updates · DST gaps and overlaps demonstrated (the 2:30 AM that doesn't exist, and the one that happens twice) · `ZoneRules`, `withEarlierOffsetAtOverlap` · converting between zones correctly · **the golden rule: store UTC (`Instant`/`timestamptz`), render in the user's zone** · `TIMESTAMP` vs `TIMESTAMPTZ` in Postgres · JPA `@Column` mapping for `Instant` vs `LocalDateTime` (preview of Day 226) · scheduling across zones

**Day 110 — DateTimeFormatter, Parsing, Locales & i18n** · 🎥 40m · 💻 40m
`DateTimeFormatter.ISO_*` constants · `ofPattern` and the full pattern letter table · `ofLocalizedDate/Time` with `FormatStyle` · `DateTimeFormatterBuilder` for optional sections and case-insensitive parsing · strict/smart/lenient `ResolverStyle` · `DateTimeParseException` handling · thread safety (unlike `SimpleDateFormat`) · `Locale` basics, `ResourceBundle`, `MessageSource` preview · `NumberFormat`/`Currency` for money display · RTL and pluralization considerations

**Day 111 — Legacy Date/Calendar & Migration Strategy** · 🎥 30m · 💻 30m
`java.util.Date` internals (a wrapper over epoch millis) · `Calendar`/`GregorianCalendar` and the zero-based month bug · `SimpleDateFormat` is not thread-safe — the classic production incident · `java.sql.Date`/`Time`/`Timestamp` and how they differ from `java.util.Date` · conversion bridges: `Date.toInstant`, `Date.from(Instant)`, `Timestamp.toLocalDateTime`, `Calendar.toInstant` · a migration checklist for legacy codebases · ThreeTen-Backport for Java 6/7 systems

**Day 112 — Regex I: Pattern, Matcher & Core Syntax** · 🎥 45m · 💻 50m
Literals, metacharacters, and escaping · character classes `[a-z]`, negation, predefined `\d \w \s \b` · quantifiers `* + ? {n,m}` · greedy vs reluctant vs possessive · anchors `^ $ \A \z \Z` · alternation and grouping · `Pattern.compile` (compile once, reuse — it's expensive) and flags (`CASE_INSENSITIVE`, `MULTILINE`, `DOTALL`, `COMMENTS`) · `Matcher`: `matches` vs `find` vs `lookingAt`, `start`, `end`, `group`, `reset`, `appendReplacement` · `String.matches/replaceAll/split` and their hidden compile cost

**Day 113 — Regex II: Groups, Lookaround & Catastrophic Backtracking** · 🎥 45m · 💻 45m
Capturing groups and group numbering · named groups `(?<name>...)` and `matcher.group("name")` · non-capturing `(?:...)` · backreferences `\1` · lookahead `(?=) (?!)` and lookbehind `(?<=) (?<!)` · practical patterns: email (and why you shouldn't), URL, IP, log line parsing, password policy validation · **ReDoS**: nested quantifiers, the `(a+)+$` explosion, demonstrating a hang, and defenses (possessive quantifiers, atomic groups, input length limits, timeouts) · when to stop using regex and write a parser

**Day 114 — Annotations: Built-in & Meta-Annotations** · 🎥 35m · 💻 35m
What annotations are (metadata, not behavior) · `@Override`, `@Deprecated` (with `since`/`forRemoval`), `@SuppressWarnings`, `@SafeVarargs`, `@FunctionalInterface` · meta-annotations: `@Retention` (SOURCE/CLASS/RUNTIME), `@Target` (all `ElementType`s), `@Documented`, `@Inherited`, `@Repeatable` · type annotations (Java 8+) and `ElementType.TYPE_USE` · nullability annotations (JSpecify, JetBrains, Jakarta) and IDE/static-analysis integration

**Day 115 — Custom Annotations & Annotation Processors** · 🎥 40m · 💻 45m
Declaring `@interface` with elements, defaults, and allowed types · array and enum elements · the `value` shortcut · repeatable annotations with a container · reading annotations at runtime via reflection (`isAnnotationPresent`, `getAnnotation`) · building a mini `@Validate`/`@NotBlank` framework in 60 lines · compile-time annotation processing with `AbstractProcessor`, `RoundEnvironment`, and `Filer` · generating source code · this is exactly how Lombok, MapStruct, and Spring's `@ConfigurationProperties` metadata work

**Day 116 — Reflection I: Class, Fields, Methods & Constructors** · 🎥 45m · 💻 45m
Getting a `Class` object three ways (`.class`, `getClass()`, `Class.forName`) · `getName` vs `getSimpleName` vs `getCanonicalName` · `getFields` vs `getDeclaredFields` (and the same split for methods and constructors) · reading and writing field values · invoking methods dynamically · instantiating with `getDeclaredConstructor().newInstance()` · inspecting modifiers, generics via `getGenericType`, annotations, interfaces, and superclasses · a tiny dependency-injection container built live to demystify Spring

**Day 117 — Reflection II: setAccessible, Proxies, MethodHandles & Performance** · 🎥 45m · 💻 40m
`setAccessible(true)`, `InaccessibleObjectException`, and strong encapsulation since Java 17 · `--add-opens` and why frameworks need it · JDK dynamic proxies: `Proxy.newProxyInstance` + `InvocationHandler`, building a logging/timing proxy · limitations (interfaces only) and the CGLIB alternative · `MethodHandle` and `VarHandle` as faster, type-safe reflection · `LambdaMetafactory` for near-native invocation · benchmark: direct call vs reflection vs cached reflection vs MethodHandle · reflection's cost in startup time and why native images restrict it

**Day 118 — The Java Module System (JPMS)** · 🎥 40m · 💻 40m
The problems JPMS solves: classpath hell, split packages, no real encapsulation · `module-info.java`: `requires`, `requires transitive`, `requires static`, `exports`, `exports ... to`, `opens`, `uses`, `provides ... with` · named vs automatic vs unnamed modules · the module path vs classpath · running a modular app · `jdeps` for dependency analysis · `jlink` to build a minimal custom runtime (and shrink your Docker image) · why most Spring apps still run on the classpath, and when modules pay off

**Day 119 — Modern Syntax: var, Pattern Matching, Text Blocks & Record Patterns** · 🎥 40m · 💻 40m
`var` rules, where it's forbidden, and readability guidelines · pattern matching for `instanceof` with a binding variable and flow scoping · guarded patterns · record patterns and nested deconstruction `case Order(Customer(var name, _), var total)` · unnamed patterns and variables `_` · exhaustive switches over sealed hierarchies · text blocks recap in real use (SQL, JSON fixtures) · rewriting a legacy visitor-pattern class hierarchy with sealed types + switch patterns

**Day 120 — Java 8 → 25: The Complete Feature Tour** · 🎥 55m · 💻 40m
**8:** lambdas, streams, Optional, java.time, default methods, `CompletableFuture`, Nashorn · **9:** modules, JShell, collection factories, private interface methods, `Flow` API · **10:** `var`, `List.copyOf` · **11 (LTS):** HTTP Client, `String` methods, single-file run, `var` in lambdas, epsilon/ZGC preview · **12–13:** switch expressions, text blocks · **14:** records (preview), helpful NPEs, `instanceof` patterns · **15:** sealed classes (preview), hidden classes · **16:** records final, `Stream.toList`, `mapMulti` · **17 (LTS):** sealed final, strong encapsulation, new random API · **18:** UTF-8 default, simple web server · **19–20:** virtual threads/structured concurrency preview, FFM API · **21 (LTS):** virtual threads, pattern matching for switch, record patterns, sequenced collections, generational ZGC, KEM API · **22–23:** stream gatherers, FFM final, unnamed variables, Markdown javadoc · **24–25 (LTS):** gatherers final, compact source files & instance main, module import declarations, scoped values, structured concurrency, primitive patterns · **migration guidance**: what to adopt at 17 vs 21 vs 25, and how to choose your baseline

---

# PHASE 5 — Concurrency & Multithreading
**Days 121–152 · Weeks 18–22**
> **Milestone project:** a bounded, instrumented, back-pressured job-processing engine.

**Day 121 — Concurrency vs Parallelism, Processes vs Threads** · 🎥 40m · 💻 30m
Concurrency (dealing with many things) vs parallelism (doing many things) · processes, address spaces, and IPC vs threads sharing a heap · what each thread owns (stack, program counter, thread-local) vs shares (heap, metaspace) · OS scheduling, time slicing, context-switch cost (~1–10 µs) · CPU-bound vs I/O-bound workloads and why they need different strategies · Amdahl's law and the ceiling on speedup · Little's law for sizing · Gustafson's law · why backend engineers hit concurrency on day one (every request is a thread)

**Day 122 — Creating Threads: Thread, Runnable & Good Hygiene** · 🎥 40m · 💻 45m
`extends Thread` vs `implements Runnable` and why Runnable wins · `start()` vs `run()` — the single most common beginner bug · lambda runnables · naming threads and why unnamed threads make production debugging miserable · `Thread.currentThread()` · `UncaughtExceptionHandler` per-thread and default · `ThreadFactory` for consistent naming/daemon/priority · what happens to an exception thrown in a thread · why you'll almost never create raw threads after Day 137

**Day 123 — Thread Lifecycle, States & Scheduling** · 🎥 35m · 💻 35m
The six `Thread.State` values: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED · exact transitions between them, with a diagram · RUNNABLE covers both "running" and "ready" · what puts a thread in BLOCKED vs WAITING · observing states live with `getState()` and with `jstack` · preemptive scheduling, priorities as hints only · `Thread.onSpinWait` · green threads history and the return of user-mode threads (Day 150)

**Day 124 — join, sleep, yield, interrupt & Interruption Policy** · 🎥 45m · 💻 45m
`sleep` and why it doesn't release locks · `join` with and without timeout · `yield` as a scheduling hint · `Thread.interrupt()`, the interrupt flag, `isInterrupted()` vs `interrupted()` (which clears it) · `InterruptedException`: what it means and the two correct responses (propagate, or restore the flag and exit) · **never swallow InterruptedException** · writing an interruptible worker loop · cancelling blocking I/O (and why some blocking calls ignore interrupts) · cooperative cancellation with a `volatile boolean` and its limits

**Day 125 — Daemon Threads, Priorities & Shutdown Hooks** · 🎥 30m · 💻 30m
Daemon vs user threads and JVM exit semantics · setting daemon before start · when daemon threads are appropriate (background maintenance) and when they're dangerous (in-flight work silently killed) · thread priorities `MIN`/`NORM`/`MAX` and their OS-dependent, near-useless reality · thread groups (legacy) · `Runtime.addShutdownHook` for graceful cleanup · `SIGTERM` handling, and how this maps to Kubernetes pod termination on Day 427

**Day 126 — Race Conditions & Atomicity: A Live Demo** · 🎥 40m · 💻 45m
Shared mutable state as the root of all concurrency bugs · `count++` decompiled to read-modify-write and why it loses updates · reproducing a lost-update with 10 threads × 100k increments · check-then-act races (lazy init, `if (!map.containsKey) map.put`) · read-modify-write races · TOCTOU bugs · compound actions needing atomicity · why bugs are non-deterministic and vanish under a debugger · the three fixes preview: confinement, immutability, synchronization

**Day 127 — synchronized, Monitors & Reentrancy** · 🎥 45m · 💻 45m
Every object has a monitor/intrinsic lock · `synchronized` methods (lock = `this`) vs static synchronized (lock = `Class` object) · `synchronized` blocks and choosing the smallest correct scope · private final lock objects to prevent external locking · reentrancy and why recursive synchronized calls don't deadlock · lock granularity and contention · lock striping preview · biased/thin/fat lock optimization history and its removal in Java 15+ · what `synchronized` guarantees: mutual exclusion **and** visibility

**Day 128 — The Java Memory Model: Visibility, Reordering & happens-before** · 🎥 50m · 💻 40m
CPU caches, store buffers, and why one thread can't see another's write · compiler and CPU instruction reordering, with a demo that only fails on some machines · the JMM as a contract, not a description of hardware · **happens-before** edges: program order, monitor lock/unlock, volatile write/read, `Thread.start`, `Thread.join`, final field freeze, `ThreadLocal`, executor submit/complete · safe publication and the four safe ways to publish an object · unsafe publication and partially constructed objects · `final` field semantics and immutable object guarantees

**Day 129 — volatile: Semantics, Use Cases & Limits** · 🎥 40m · 💻 40m
What `volatile` guarantees (visibility + ordering) and what it does NOT (atomicity of compound ops) · the stop-flag pattern done right · `volatile` on 64-bit long/double and word tearing · memory barriers emitted (LoadLoad, StoreStore, LoadStore, StoreLoad) · the broken double-checked locking pre-Java-5 and the correct `volatile` version · initialization-on-demand holder as the better idiom · when volatile is enough vs when you need a lock or an atomic

**Day 130 — Atomic Classes & Compare-And-Swap** · 🎥 45m · 💻 45m
`AtomicInteger`, `AtomicLong`, `AtomicBoolean`, `AtomicReference` · CAS at the hardware level (`cmpxchg`) and the retry loop · `incrementAndGet`, `getAndIncrement`, `compareAndSet`, `updateAndGet`, `accumulateAndGet` · lock-free vs wait-free vs blocking algorithms · the **ABA problem** and `AtomicStampedReference`/`AtomicMarkableReference` · building a lock-free stack and seeing its bug · when CAS retry storms make locks faster · `AtomicIntegerArray` and friends

**Day 131 — LongAdder, Striped64, Field Updaters & VarHandle** · 🎥 35m · 💻 35m
Contention on a single atomic cache line (false sharing) · `@Contended` padding · `LongAdder`/`DoubleAdder` cell striping and `sum()` semantics (not a consistent snapshot) · `LongAccumulator` with a custom function · benchmark: `AtomicLong` vs `LongAdder` under 1/4/16/64 threads · `AtomicIntegerFieldUpdater` for memory-lean atomics · `VarHandle` as the modern, safe replacement for `sun.misc.Unsafe` · acquire/release/opaque/volatile access modes

**Day 132 — ReentrantLock: tryLock, Fairness & Lock vs synchronized** · 🎥 45m · 💻 45m
`Lock` interface: `lock`, `unlock` (always in `finally`), `tryLock`, `tryLock(timeout)`, `lockInterruptibly` · fair vs non-fair locks and throughput cost of fairness · `getHoldCount`, `isLocked`, `getQueueLength` for diagnostics · AQS (AbstractQueuedSynchronizer) internals in brief: state + CLH queue · deadlock avoidance with `tryLock` and backoff · when `synchronized` is still the right default and when you need `ReentrantLock`

**Day 133 — ReadWriteLock, StampedLock & Optimistic Reading** · 🎥 40m · 💻 40m
`ReentrantReadWriteLock`: shared reads, exclusive writes · read-to-write lock downgrading (and why upgrading deadlocks) · writer starvation with unfair locks · when RWLock actually beats a plain lock (long reads, high read ratio) — and when it loses · `StampedLock`: `writeLock`, `readLock`, `tryOptimisticRead` + `validate` retry pattern · non-reentrant and non-interruptible caveats · a thread-safe `Point` cache implemented three ways with benchmarks

**Day 134 — Condition, await/signal & Legacy wait/notify** · 🎥 45m · 💻 45m
`Object.wait`, `notify`, `notifyAll` — must hold the monitor, releases it while waiting · **always wait in a loop** (spurious wakeups and missed signals) · `notify` vs `notifyAll` and the lost-wakeup bug · `Condition` from a `Lock`: `await`, `signal`, `signalAll`, `awaitNanos`, `awaitUninterruptibly` · multiple conditions per lock (notFull/notEmpty) for a bounded buffer · implementing a bounded blocking queue from scratch, twice (wait/notify and Condition) · why you should then just use `ArrayBlockingQueue`

**Day 135 — Deadlock, Livelock, Starvation & Detection** · 🎥 45m · 💻 45m
The four Coffman conditions for deadlock · reproducing a lock-ordering deadlock in 20 lines · **global lock ordering** as the primary fix · lock timeout + backoff as fallback · open calls (never call foreign code holding a lock) · nested lock hazards in ORM and callbacks · database deadlocks vs JVM deadlocks · livelock (mutual politeness) and starvation (unfair scheduling) · detecting deadlock with `jstack`, `jcmd Thread.print`, `ThreadMXBean.findDeadlockedThreads`, and JFR · a deadlock detector utility you can drop into any app

**Day 136 — Immutability, Confinement & Thread-Safe Design** · 🎥 40m · 💻 40m
The three strategies: don't share, don't mutate, or synchronize · stack confinement and local variables · thread confinement (`ThreadLocal`, single-threaded event loop) · instance confinement with a private lock and guarded fields · `@GuardedBy` documentation · immutable objects are automatically thread-safe (with the final-field caveat) · copy-on-write for mostly-read data · designing a thread-safe class checklist: identify state, identify invariants, choose a policy, document it · delegation of thread safety

**Day 137 — The Executor Framework** · 🎥 45m · 💻 45m
Why raw threads don't scale (unbounded creation = OOM) · `Executor`, `ExecutorService`, `ScheduledExecutorService` interfaces · `Executors` factory methods: `newFixedThreadPool`, `newCachedThreadPool`, `newSingleThreadExecutor`, `newWorkStealingPool`, `newVirtualThreadPerTaskExecutor` · **why `Executors` factories are dangerous in production** (unbounded queues and unbounded threads) · `submit` vs `execute` and the swallowed-exception trap with `submit` · lifecycle: `shutdown` vs `shutdownNow` vs `awaitTermination` vs `close` (Java 19+) · a correct shutdown routine

**Day 138 — ThreadPoolExecutor Internals & Sizing** · 🎥 50m · 💻 45m
All seven constructor parameters explained · the exact task-admission algorithm: core threads → queue → max threads → rejection · why `newFixedThreadPool` never grows past core · `keepAliveTime` and `allowCoreThreadTimeOut` · queue choice changes everything: `SynchronousQueue` vs `LinkedBlockingQueue` (unbounded!) vs `ArrayBlockingQueue` (bounded, correct) · sizing formulas: CPU-bound ≈ cores+1, I/O-bound ≈ cores × (1 + wait/service) · measuring wait/service ratio · `prestartAllCoreThreads`, `beforeExecute`/`afterExecute` hooks for MDC and metrics

**Day 139 — Rejection Policies, Backpressure & Pool Monitoring** · 🎥 35m · 💻 40m
The four built-in `RejectedExecutionHandler`s: `AbortPolicy`, `CallerRunsPolicy` (natural backpressure!), `DiscardPolicy`, `DiscardOldestPolicy` · writing a custom handler that blocks with a semaphore · why unbounded queues turn latency problems into OOM · instrumenting a pool: `getActiveCount`, `getQueue().size()`, `getCompletedTaskCount`, `getLargestPoolSize` · exporting these to Micrometer (forward reference to Day 410) · alerting on saturated pools · thread pool per bounded context vs one shared pool

**Day 140 — ScheduledExecutorService & Recurring Work** · 🎥 35m · 💻 35m
`schedule`, `scheduleAtFixedRate` vs `scheduleWithFixedDelay` — the crucial difference when a task overruns · task pile-up and the fixed-rate catch-up burst · **an uncaught exception silently cancels all future executions** — the bug that eats production jobs, and how to wrap every task in try/catch · `ScheduledFuture` cancellation · clock changes and DST effects · limitations vs a real scheduler (Quartz, `@Scheduled`, ShedLock for multi-instance) · preview of distributed scheduling

**Day 141 — Callable, Future, invokeAll & Cancellation** · 🎥 40m · 💻 40m
`Callable<V>` vs `Runnable` (returns a value, throws checked exceptions) · `Future`: `get`, `get(timeout)`, `isDone`, `cancel(mayInterruptIfRunning)`, `isCancelled` · **`get()` blocks** — the source of most thread-pool deadlocks · `ExecutionException` unwrapping the real cause · `CancellationException` · `invokeAll` (waits for all) vs `invokeAny` (first success wins) · timeouts on `invokeAll` · `FutureTask` internals · the limitations that motivated `CompletableFuture`

**Day 142 — CompletableFuture I: Creation & Chaining** · 🎥 45m · 💻 50m
`completedFuture`, `supplyAsync`, `runAsync`, manual `complete`/`completeExceptionally` · the default `ForkJoinPool.commonPool` and **why you should always pass your own executor** · `thenApply` vs `thenCompose` (map vs flatMap) vs `thenAccept` vs `thenRun` · the `*Async` variants and which thread runs the callback · building a non-blocking service call chain · avoiding nested `CompletableFuture<CompletableFuture<T>>` · `join()` vs `get()`

**Day 143 — CompletableFuture II: Combining, Errors & Timeouts** · 🎥 45m · 💻 50m
`thenCombine`, `thenAcceptBoth`, `runAfterBoth` · `applyToEither`, `acceptEither` for fastest-wins · `allOf` (and extracting results) and `anyOf` · exception handling: `exceptionally`, `handle`, `whenComplete`, `exceptionallyCompose` · exception propagation rules through a chain · `orTimeout` and `completeOnTimeout` (Java 9+) · manual timeouts pre-9 · fan-out/fan-in aggregation of 5 downstream APIs with per-call fallbacks · debugging: lost exceptions, stack traces without context, MDC propagation

**Day 144 — Fork/Join, RecursiveTask & Work Stealing** · 🎥 40m · 💻 45m
Divide-and-conquer parallelism · `ForkJoinPool`, `RecursiveTask<V>`, `RecursiveAction` · the `fork`/`join` protocol and the correct order (`fork` right, compute left, `join` right) · work-stealing deques and why they beat a shared queue · choosing a sequential threshold (and measuring it) · parallel merge sort and parallel sum implemented live · `ForkJoinPool.commonPool` sharing with parallel streams · `ManagedBlocker` for blocking inside FJP · why FJP is a poor fit for I/O work

**Day 145 — Concurrent Collections In Depth** · 🎥 45m · 💻 45m
`ConcurrentHashMap`: Java 7 segments vs Java 8 CAS + per-bin synchronized, treeification, `size()` being an estimate · atomic composite ops: `putIfAbsent`, `computeIfAbsent` (and its **do-not-block-or-recurse** rule), `merge`, `compute`, `reduce`, `forEach`, `search` · `KeySetView` as a concurrent set · `ConcurrentSkipListMap`/`Set` for sorted concurrent access · `CopyOnWriteArrayList`/`Set` write cost · weakly-consistent iterators · when `Collections.synchronizedMap` is still wrong (compound operations) · choosing a concurrent collection

**Day 146 — BlockingQueue & Producer–Consumer** · 🎥 45m · 💻 50m
The `BlockingQueue` contract and the four method families (throws / returns special value / blocks / times out) · `ArrayBlockingQueue` (bounded, single lock), `LinkedBlockingQueue` (optionally bounded, two locks), `SynchronousQueue` (handoff), `PriorityBlockingQueue`, `DelayQueue`, `LinkedTransferQueue` · **bounded queues as the backpressure mechanism** · poison-pill shutdown · `drainTo` for batching · building a multi-producer/multi-consumer pipeline with graceful shutdown and metrics

**Day 147 — CountDownLatch & CyclicBarrier** · 🎥 35m · 💻 40m
`CountDownLatch`: one-shot gate, `await`, `countDown`, `getCount` · start-gate/end-gate pattern for benchmarking · waiting for N services to be ready at startup · why a latch can't be reset · `CyclicBarrier`: N parties rendezvous, reusable, optional barrier action · `BrokenBarrierException` and what breaks a barrier · latch vs barrier decision table · simulation and iterative-algorithm use cases

**Day 148 — Semaphore, Phaser & Exchanger** · 🎥 35m · 💻 40m
`Semaphore` for permit-based resource limiting: `acquire`, `tryAcquire(timeout)`, `release`, fairness · bounding concurrent DB connections or outbound API calls · binary semaphore vs mutex (semaphores are not reentrant and can be released by another thread) · building a simple rate limiter · `Phaser` as a flexible, dynamic-party barrier with phases · `Exchanger` for pairwise data handoff · which of these you'll actually use in backend work (spoiler: Semaphore, constantly)

**Day 149 — ThreadLocal, ScopedValue & Context Leaks** · 🎥 40m · 💻 40m
`ThreadLocal` mechanics: the per-thread `ThreadLocalMap` with weak keys · `withInitial`, `get`, `set`, `remove` · classic uses: `SimpleDateFormat` (legacy), MDC/correlation IDs, transaction context, `SecurityContextHolder` · **the memory leak in thread pools and app servers** — why you must call `remove()` in a finally block · `InheritableThreadLocal` and its executor pitfalls · `ScopedValue` (Java 21+/25) as the immutable, structured, virtual-thread-friendly replacement · propagating context across `CompletableFuture` and executors

**Day 150 — Virtual Threads I: The Loom Model** · 🎥 50m · 💻 45m
Platform threads (1:1 OS mapping, ~1 MB stack, ~10k ceiling) vs virtual threads (M:N, heap-allocated continuations, millions possible) · mounting/unmounting on carrier threads · what triggers unmount (blocking I/O, `sleep`, locks, `BlockingQueue`) · `Thread.ofVirtual().start()`, `Thread.startVirtualThread`, `Executors.newVirtualThreadPerTaskExecutor` · **never pool virtual threads** — one per task · the thread-per-request model made cheap again · benchmark: 10,000 concurrent HTTP calls, platform pool vs virtual threads · `-Djdk.virtualThreadScheduler.parallelism`

**Day 151 — Virtual Threads II: Pinning, Structured Concurrency & Migration** · 🎥 50m · 💻 45m
**Pinning**: `synchronized` blocks holding the carrier (largely fixed in Java 24, still relevant on 21) and native frames · detecting pinning with `-Djdk.tracePinnedThreads=full` and JFR events · migrating `synchronized` → `ReentrantLock` · `ThreadLocal` cost at millions of threads and the ScopedValue answer · structured concurrency: `StructuredTaskScope`, `ShutdownOnFailure`, `ShutdownOnSuccess`, `join`, `throwIfFailed` · scoped cancellation and error propagation · when virtual threads do NOT help (CPU-bound work) · enabling them in Spring Boot with one property (forward reference to Day 287)

**Day 152 — Phase 5 Capstone: Testing, Debugging & Building a Job Engine** · 🎥 55m · 💻 150m
Thread dumps: capturing with `jstack`/`jcmd`, reading states, spotting contention and deadlock · JFR events for locks and thread parking · `jcstress` for memory-model testing · deterministic concurrency tests with latches and `Awaitility` · stress testing and flaky-test triage · **Capstone: a job-processing engine** with a bounded queue, configurable worker pool, priority tiers, retry with exponential backoff, graceful shutdown draining in-flight work, per-job timeouts, Micrometer-style metrics, and a virtual-thread mode toggle — with tests proving correctness under load

---

# PHASE 6 — JVM Internals, GC & Performance
**Days 153–170 · Weeks 22–25**
> **Milestone project:** diagnose and fix a deliberately broken app — memory leak, GC thrash, and a hot lock.

**Day 153 — JVM Architecture End To End** · 🎥 45m · 💻 30m
The three subsystems: class loader, runtime data areas, execution engine · the full architecture diagram you'll refer to for the rest of the phase · HotSpot vs OpenJ9 vs GraalVM vs Azul Zing · JVM startup sequence step by step · `java` launcher, `-X`, `-XX` and `-D` flag categories, product vs diagnostic vs experimental flags · `-XX:+PrintFlagsFinal` to dump every setting · JVM ergonomics and default heap sizing · `java -XshowSettings:all`

**Day 154 — Class Loading: Loading, Linking, Initialization** · 🎥 45m · 💻 40m
The three phases and their sub-steps: loading → linking (verification, preparation, resolution) → initialization · what bytecode verification actually checks · static field preparation with default values, then initialization with real values · the `<clinit>` method and its thread-safe, once-only guarantee · what triggers initialization (new, static access, reflection, subclass init) and what doesn't (`Class.forName` with `initialize=false`, constant field access) · `NoClassDefFoundError` vs `ClassNotFoundException` — the difference that confuses everyone

**Day 155 — ClassLoaders, Delegation & Custom Loaders** · 🎥 40m · 💻 40m
Bootstrap → platform → application loader hierarchy · the parent-delegation model and why it protects `java.lang.String` · breaking delegation: web containers (WAR isolation), OSGi, Spring Boot's `LaunchedURLClassLoader` · `Thread.getContextClassLoader()` and the SPI problem · writing a custom `ClassLoader` that loads a class from a byte array · class identity = (name, loader) and `ClassCastException` between "the same" class · `LinkageError`, jar hell, and shading · hot reloading and why it's hard

**Day 156 — Runtime Data Areas: Heap, Stacks, Metaspace, Code Cache** · 🎥 45m · 💻 35m
Per-thread: PC register, JVM stack (frames: local variable array, operand stack, frame data), native method stack · shared: heap, metaspace, code cache, string constant pool (moved to heap in Java 7) · young generation (eden + 2 survivors) and old generation layout · TLABs (thread-local allocation buffers) and why allocation is a pointer bump · `-Xms`, `-Xmx`, `-Xss`, `-XX:MetaspaceSize`, `-XX:MaxMetaspaceSize`, `-XX:ReservedCodeCacheSize` · `StackOverflowError` vs `OutOfMemoryError: Java heap space` vs `Metaspace` vs `unable to create native thread`

**Day 157 — Object Memory Layout, Headers & Compressed Oops** · 🎥 40m · 💻 35m
Object header: mark word (hash, GC age, lock bits) + klass pointer · instance data and field reordering by the JVM · 8-byte alignment and padding · array header with a length field · **compressed oops** below 32 GB and the surprising cliff when you cross it · measuring real object size with JOL (`ClassLayout.parseClass`) · the true cost of `Integer` vs `int` (16 bytes vs 4) · `String` footprint before and after compact strings · false sharing and cache lines · designing data structures for memory efficiency

**Day 158 — Bytecode & javap** · 🎥 45m · 💻 45m
The JVM as a stack machine · reading `javap -c -p -v` output · constant pool entries · load/store instructions (`iload`, `astore`), arithmetic, `if_icmpge`, `goto`, `return` variants · the five invoke instructions: `invokevirtual`, `invokestatic`, `invokespecial`, `invokeinterface`, `invokedynamic` · how lambdas and string concatenation compile to `invokedynamic` · seeing autoboxing, string switch, enhanced-for, and try-with-resources desugaring · StackMapTable · why reading bytecode settles arguments

**Day 159 — JIT Compilation: Interpreter, C1, C2 & Tiered** · 🎥 45m · 💻 35m
Interpretation vs JIT vs AOT · profiling counters (invocation + backedge) and compilation thresholds · tiered compilation levels 0–4 and the path a hot method takes · C1 (fast, less optimized) vs C2 (slow, aggressively optimized) · on-stack replacement for long-running loops · the code cache and what happens when it fills · warmup and why the first 10,000 requests are slow · `-XX:+PrintCompilation`, `-XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining`, JITWatch

**Day 160 — JIT Optimizations: Inlining, Escape Analysis & Deopt** · 🎥 40m · 💻 35m
Method inlining, `MaxInlineSize`/`FreqInlineSize`, and why small methods are free · monomorphic/bimorphic/megamorphic call sites and inline caches · escape analysis → scalar replacement and stack allocation → allocation elimination, demonstrated with JMH · lock elision and lock coarsening · loop unrolling, range-check elimination, vectorization · constant folding and dead-code elimination · **deoptimization** and uncommon traps · why microbenchmarks lie without JMH · writing JIT-friendly code (and when to stop caring)

**Day 161 — GC Theory: Reachability, Generations & Safepoints** · 🎥 45m · 💻 35m
Automatic memory management vs manual · GC roots (stack locals, static fields, JNI, active threads) · mark-sweep, mark-compact, copying collection · the weak generational hypothesis with real allocation-lifetime data · minor vs major vs full GC · card tables and remembered sets for cross-generational references · **safepoints**: what they are, time-to-safepoint, and why a counted loop can delay GC for seconds · stop-the-world explained · concurrent vs parallel vs incremental collection · the throughput/latency/footprint triangle

**Day 162 — Serial, Parallel & CMS Collectors** · 🎥 35m · 💻 30m
Serial GC: single-threaded, small heaps, containers with one CPU (`-XX:+UseSerialGC`) · Parallel/Throughput GC: multithreaded young and old, best raw throughput, long pauses (`-XX:+UseParallelGC`), `-XX:MaxGCPauseMillis` and `-XX:GCTimeRatio` ergonomics · CMS: concurrent mark-sweep, its phases, fragmentation and concurrent-mode failure, and its removal in Java 14 (covered because you'll meet it in legacy systems) · survivor spaces, tenuring threshold, and premature promotion

**Day 163 — G1 GC Internals & Tuning** · 🎥 50m · 💻 40m
Region-based heap (1–32 MB regions), eden/survivor/old/humongous regions · humongous allocations and their cost · concurrent marking cycle: initial mark, root region scan, concurrent mark, remark, cleanup · SATB (snapshot-at-the-beginning) write barriers · evacuation pauses and the collection set · pause-time goal driven behavior (`-XX:MaxGCPauseMillis=200`) · mixed collections · `-XX:G1HeapRegionSize`, `InitiatingHeapOccupancyPercent`, `G1NewSizePercent` · full-GC fallback and how to avoid it · why G1 is the default and when it's the wrong default

**Day 164 — ZGC & Shenandoah: Low-Latency Collectors** · 🎥 40m · 💻 30m
Sub-millisecond pause goals independent of heap size · ZGC colored pointers and load barriers · concurrent relocation and remapping · generational ZGC (Java 21+) and why it changed the recommendation · `-XX:+UseZGC -XX:+ZGenerational` · Shenandoah's Brooks pointers/forwarding and concurrent evacuation · throughput cost of barriers (typically 5–15%) · Epsilon GC for benchmarking and short-lived batch jobs · a decision guide: heap size, pause SLO, and throughput needs → collector choice

**Day 165 — GC Logs, Tuning Flags & Containers** · 🎥 45m · 💻 45m
Unified logging: `-Xlog:gc*,gc+heap=debug,safepoint:file=gc.log:time,uptime,level,tags:filecount=5,filesize=20M` · reading a G1 log line by line · analyzing with GCViewer / GCeasy / JFR · the metrics that matter: pause p99, GC overhead %, allocation rate, promotion rate, live-set size · **container awareness**: `UseContainerSupport`, `MaxRAMPercentage` / `InitialRAMPercentage` instead of `-Xmx`, cgroup CPU limits and `ActiveProcessorCount` · why your pod gets OOMKilled while the heap looks fine (native + metaspace + thread stacks + direct buffers) · a tuning methodology: measure, change one thing, re-measure

**Day 166 — Memory Leaks: Heap Dumps, MAT & Common Patterns** · 🎥 50m · 💻 50m
What a leak looks like in Java (unintentional retention, not lost pointers) · the sawtooth-that-climbs graph · capturing dumps: `jmap -dump:live,format=b`, `jcmd GC.heap_dump`, `-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath` · Eclipse MAT: histogram, dominator tree, path to GC roots, leak suspects report, OQL queries · VisualVM and JFR alternatives · **the classic leak sources**: static collections, unbounded caches, `ThreadLocal` in pools, listener/callback registration without deregistration, `ClassLoader` leaks on redeploy, string interning, unclosed resources, inner-class outer references, `substring` in old JDKs · fixing each on camera

**Day 167 — Profiling with JFR & async-profiler** · 🎥 50m · 💻 50m
Java Flight Recorder: near-zero-overhead always-on profiling · starting with `-XX:StartFlightRecording=duration=60s,filename=app.jfr,settings=profile` and with `jcmd JFR.start/dump/stop` · JDK Mission Control walkthrough: hot methods, allocation profiling, lock contention, exceptions, I/O, thread parking, GC events · custom JFR events for your own business operations · async-profiler for wall-clock, CPU, alloc, and lock modes without safepoint bias · **flame graphs**: how to read them and how to find the wide bar that matters · differential flame graphs before/after a fix · profiling in production safely

**Day 168 — JMH: Microbenchmarking Done Right** · 🎥 45m · 💻 50m
Why `System.currentTimeMillis()` around a loop is always wrong (JIT warmup, dead-code elimination, constant folding, loop unrolling, OSR) · JMH setup via the Maven archetype · `@Benchmark`, `@State`, `@Setup`/`@TearDown`, `@Warmup`, `@Measurement`, `@Fork`, `@BenchmarkMode`, `@OutputTimeUnit` · `Blackhole` to consume results · `@Param` for parameter sweeps · `@CompilerControl` · reading the output: score, error, and confidence intervals · `-prof gc`, `-prof perfasm` · benchmarking `StringBuilder` vs concat, `ArrayList` vs `LinkedList`, `stream` vs `for`, `AtomicLong` vs `LongAdder` and publishing honest numbers

**Day 169 — The CLI Toolbox: jcmd, jstack, jmap, jstat & Friends** · 🎥 40m · 💻 45m
`jps` to find PIDs · `jcmd` as the universal front door (`help`, `VM.flags`, `VM.system_properties`, `VM.native_memory`, `GC.run`, `GC.heap_info`, `GC.class_histogram`, `Thread.print`, `JFR.*`) · `jstack` for thread dumps and reading them · `jmap -histo` for a quick class histogram · `jstat -gcutil <pid> 1s` for live GC stats · `jinfo` for runtime flag changes · `jhsdb` for post-mortem debugging of a core file · `jdb` basics · `jdeps`, `jlink`, `jpackage` · a runbook: "the service is slow — what do I run first?"

**Day 170 — Native Memory, FFM, GraalVM & Phase 6 Capstone** · 🎥 50m · 💻 120m
Native Memory Tracking (`-XX:NativeMemoryTracking=summary` + `jcmd VM.native_memory summary.diff`) · where non-heap memory goes: metaspace, code cache, GC structures, thread stacks, direct byte buffers, JNI, malloc arenas (and the `MALLOC_ARENA_MAX` fix) · `-XX:MaxDirectMemorySize` and direct-buffer leaks · Foreign Function & Memory API (Java 22+) replacing JNI · GraalVM native image: build-time initialization, closed-world assumption, reflection/resource/proxy configuration, tracing agent, startup in milliseconds vs peak throughput tradeoff · **Capstone: fix the broken app** — find the leak with MAT, kill the GC thrash with sizing and allocation reduction, find the hot lock with async-profiler, and prove each fix with JMH and JFR

---

# PHASE 7 — Build Tools & Project Structure
**Days 171–182 · Weeks 25–27**
> **Milestone project:** a multi-module Maven build with quality gates, reproducible and CI-ready.

**Day 171 — Build Tools Overview & Installation** · 🎥 35m · 💻 35m
Why `javac` by hand stops working at file #20 · what a build tool does: dependency resolution, compilation, resource processing, testing, packaging, publishing · Ant → Maven → Gradle history and philosophy (imperative vs declarative vs programmable) · installing Maven and Gradle (SDKMAN, wrappers) · **always commit the wrapper** (`mvnw`, `gradlew`) for reproducible builds · local repository layout (`~/.m2/repository`) · offline mode · which to choose in 2026 and why most Spring shops are on Maven

**Day 172 — Maven POM Anatomy & Coordinates** · 🎥 40m · 💻 40m
`pom.xml` element by element · GAV coordinates (groupId, artifactId, version) and naming conventions · SNAPSHOT vs release versions and how SNAPSHOT resolution works · packaging types (jar, war, pom, maven-plugin) · `<properties>` for version centralization · `<parent>` inheritance and what is and isn't inherited · `mvn help:effective-pom` to see the truth · standard directory layout (`src/main/java`, `src/main/resources`, `src/test/java`) and why convention over configuration saves you

**Day 173 — Maven Lifecycles, Phases & Goals** · 🎥 40m · 💻 40m
Three lifecycles: default, clean, site · the default lifecycle's 23 phases with the ones you actually use (validate, compile, test, package, verify, install, deploy) · phases vs goals vs plugins · default plugin bindings per packaging type · `mvn clean install` explained precisely (and why `install` is overused vs `verify`) · `-DskipTests` vs `-Dmaven.test.skip=true` (compile or not) · `-o`, `-U`, `-X`, `-e`, `-T 1C` for parallel builds · `mvn dependency:tree`, `help:describe`, `versions:display-dependency-updates`

**Day 174 — Dependencies: Scopes, Transitivity & Conflicts** · 🎥 45m · 💻 45m
The six scopes: compile, provided, runtime, test, system, import — and exactly when each is on which classpath · transitive dependency resolution and the scope-combination table · **nearest-wins mediation** and why it silently downgrades your library · `mvn dependency:tree -Dverbose -Dincludes=...` to find the culprit · `<exclusions>` · `<optional>` · `dependencyManagement` to pin versions across the tree · `mvn dependency:analyze` for used-undeclared and unused-declared warnings · the Enforcer plugin banning duplicate/conflicting classes · diagnosing `NoSuchMethodError` and `ClassNotFoundException` from version skew

**Day 175 — dependencyManagement, BOMs & the Spring Boot BOM** · 🎥 40m · 💻 40m
What a BOM (Bill of Materials) is and why it exists · importing a BOM with `<scope>import</scope><type>pom</type>` · `spring-boot-dependencies` — the BOM that pins 300+ library versions so you never write a version tag for a managed dependency · `spring-boot-starter-parent` vs importing the BOM (and when you must use the latter because you already have a corporate parent) · overriding a managed version with a property (e.g. `<postgresql.version>`) and the risks · the `spring-cloud-dependencies` BOM and release-train alignment · publishing your own BOM for a multi-service org

**Day 176 — Essential Maven Plugins** · 🎥 45m · 💻 45m
`maven-compiler-plugin`: `<release>`, `--enable-preview`, annotation processor paths (Lombok + MapStruct ordering!) · `maven-surefire-plugin` (unit tests) vs `maven-failsafe-plugin` (integration tests, `*IT` naming, bound to verify) · `maven-resources-plugin` and resource filtering with `@...@` placeholders · `maven-jar-plugin` manifests · `maven-shade-plugin` vs `maven-assembly-plugin` for uber-jars, relocation, and service-file merging · `spring-boot-maven-plugin`: `repackage`, `run`, `build-image`, `build-info`, layering · `exec-maven-plugin` · `maven-enforcer-plugin` rules · `git-commit-id-plugin` for build metadata

**Day 177 — Profiles, settings.xml & Private Repositories** · 🎥 35m · 💻 35m
`<profiles>` with activation by property, JDK, OS, file presence, or default · activating with `-P` and deactivating with `-P!name` · profile-specific dependencies, plugins, and properties · the CI vs local vs release profile pattern · `~/.m2/settings.xml`: servers (credentials), mirrors, proxies, active profiles · encrypting passwords with `mvn --encrypt-password` · repository and pluginRepository definitions · mirroring everything through Nexus/Artifactory for security and speed · why you should never put credentials in `pom.xml`

**Day 178 — Multi-Module Maven Project Design** · 🎥 45m · 💻 55m
Aggregator POM with `<packaging>pom</packaging>` and `<modules>` · parent vs aggregator (they're different roles that often coincide) · reactor build order derived from inter-module dependencies · module layout for a real service: `api`, `domain`, `application`, `infrastructure`, `web`, `bootstrap` · shared `common`/`starter` modules · `-pl`, `-am`, `-amd` for building a subset · versioning strategies (unified vs independent) and `versions:set` · `flatten-maven-plugin` and CI-friendly versions with `${revision}` · when a multi-module monolith beats microservices

**Day 179 — Gradle Basics: DSLs, Tasks & Configurations** · 🎥 45m · 💻 45m
Groovy DSL vs **Kotlin DSL** (and why new projects should pick Kotlin for type safety and IDE support) · `settings.gradle.kts` and `build.gradle.kts` structure · the build lifecycle: initialization, configuration, execution · tasks, task dependencies, inputs/outputs, and up-to-date checks · writing a custom task · plugins: `java`, `application`, `java-library`, `org.springframework.boot`, `io.spring.dependency-management` · configurations: `implementation` vs `api` (and why `compile` is dead), `compileOnly`, `runtimeOnly`, `annotationProcessor`, `testImplementation` · the Gradle daemon and incremental builds

**Day 180 — Gradle Advanced: Version Catalogs, Multi-Project & Caching** · 🎥 45m · 💻 45m
Version catalogs in `gradle/libs.versions.toml` — the modern replacement for `ext` blocks · type-safe accessors (`libs.spring.boot.starter.web`) and bundles · `platform()` and `enforcedPlatform()` to import the Spring Boot BOM · multi-project builds, `subprojects`/`allprojects` vs convention plugins in `buildSrc` · composite builds · the build cache (local and remote) and configuration cache · `--scan` for build performance analysis · dependency locking for reproducibility · migrating a Maven build to Gradle (and honestly evaluating whether you should)

**Day 181 — Versioning, Releases & Artifact Repositories** · 🎥 40m · 💻 40m
Semantic versioning: MAJOR.MINOR.PATCH, pre-release and build metadata, and what actually constitutes a breaking change for a library · CalVer as an alternative for services · SNAPSHOT workflow and its dangers in reproducible builds · `maven-release-plugin` vs a modern tag-driven CI release · publishing to Nexus/Artifactory/GitHub Packages/Maven Central (Sonatype, GPG signing, required POM metadata) · `maven-publish` in Gradle · repository layout, proxying, retention policies · consuming a private registry from CI

**Day 182 — Code Quality Gates: Checkstyle, PMD, SpotBugs, JaCoCo, Sonar & ArchUnit** · 🎥 50m · 💻 55m
Static analysis categories and what each tool catches · **Checkstyle** for formatting/conventions (Google/Sun style, custom rules, `mvn checkstyle:check` failing the build) · **PMD** for code smells and CPD for copy-paste detection · **SpotBugs** (successor to FindBugs) with the `find-sec-bugs` plugin for security bugs · **Error Prone** and NullAway · **JaCoCo**: instrumentation, line/branch coverage, `check` goal with minimum thresholds, and why 100% coverage is a bad target · **SonarQube/SonarCloud**: quality gate, new-code focus, technical debt, security hotspots · **ArchUnit**: enforcing layering, naming, and dependency rules as JUnit tests · **Spotless**/**google-java-format** for auto-formatting · wiring all of it into one `verify` run and into CI

---

# PHASE 8 — Testing
**Days 183–198 · Weeks 27–29**
> **Milestone project:** take the Day 80 repository and Day 152 job engine to 90% meaningful coverage with unit, integration, and container tests.

**Day 183 — The Testing Pyramid, TDD & What Makes a Good Test** · 🎥 40m · 💻 40m
Unit vs integration vs end-to-end: cost, speed, and confidence tradeoffs · the pyramid vs the testing trophy vs the ice-cream-cone anti-pattern · **FIRST** principles (Fast, Independent, Repeatable, Self-validating, Timely) · Arrange–Act–Assert / Given–When–Then · test naming conventions that read as documentation (`shouldRejectOrderWhenInventoryInsufficient`) · one logical assertion per test · testing behavior, not implementation · TDD's red-green-refactor loop demonstrated live · BDD vocabulary · flaky tests: causes (time, ordering, shared state, concurrency, network) and cures

**Day 184 — JUnit 5 Architecture & Your First Tests** · 🎥 40m · 💻 45m
JUnit Platform + Jupiter + Vintage explained · dependencies: `junit-jupiter` aggregate vs api/engine/params split, and the `spring-boot-starter-test` bundle · `@Test`, test class/method visibility rules (no `public` needed) · running from IDE, Maven Surefire, and Gradle (`useJUnitPlatform()`) · test source layout and naming (`*Test` vs `*IT`) · migrating from JUnit 4: annotation mapping table, `@RunWith` → `@ExtendWith`, `@Rule` → extensions, running both engines during migration

**Day 185 — Assertions, Assumptions, Exceptions & Timeouts** · 🎥 40m · 💻 40m
`assertEquals`/`assertNotEquals` and the expected-actual argument order · `assertTrue`/`assertFalse` with lazy message suppliers · `assertNull`/`assertNotNull`, `assertSame`, `assertArrayEquals`, `assertIterableEquals`, `assertLinesMatch` · **`assertAll`** for grouped assertions that all report · `assertThrows` capturing and asserting on the exception (message, cause, custom fields) · `assertDoesNotThrow` · `assertTimeout` vs `assertTimeoutPreemptively` · `assumeTrue`/`assumingThat` for environment-conditional tests · `fail()` and when it's legitimate

**Day 186 — Lifecycle, @Nested, Display Names, Ordering & Tags** · 🎥 40m · 💻 40m
`@BeforeEach`/`@AfterEach` vs `@BeforeAll`/`@AfterAll` (static, or use `@TestInstance(PER_CLASS)`) · default PER_METHOD instance lifecycle and why it protects you · `@Nested` inner classes for context grouping (`WhenCartIsEmpty`, `WhenUserIsPremium`) · `@DisplayName` and `@DisplayNameGeneration` for readable reports · `@Order` + `@TestMethodOrder` (and why order-dependent tests are usually a design smell) · `@Tag` + surefire `groups`/`excludedGroups` to split fast and slow suites · `@Disabled` with a reason · `@RepeatedTest` · conditional execution: `@EnabledOnOs`, `@EnabledOnJre`, `@EnabledIfSystemProperty`, `@EnabledIfEnvironmentVariable`

**Day 187 — Parameterized Tests & Argument Sources** · 🎥 40m · 💻 45m
`@ParameterizedTest` with `@ValueSource` (primitives and strings) · `@NullSource`, `@EmptySource`, `@NullAndEmptySource` for boundary coverage · `@EnumSource` with include/exclude/mode · `@MethodSource` returning `Stream<Arguments>` for complex objects · `@CsvSource` and `@CsvFileSource` with delimiters, nullValues, and headers · `@ArgumentsSource` with a custom provider · implicit and explicit argument conversion (`@ConvertWith`), `@AggregateWith` and `ArgumentsAccessor` · `@DisplayName` templates with `{0}`, `{argumentsWithNames}` · turning 12 near-identical tests into one table-driven test

**Day 188 — Dynamic Tests & The Extension Model** · 🎥 40m · 💻 40m
`@TestFactory` returning `DynamicTest`/`DynamicContainer` streams for runtime-generated cases (e.g. every file in a fixtures directory) · dynamic vs parameterized: when each fits · the extension model interfaces: `BeforeAllCallback`, `BeforeEachCallback`, `ParameterResolver`, `TestExecutionExceptionHandler`, `TestWatcher`, `ExecutionCondition`, `InvocationInterceptor` · registering with `@ExtendWith`, `@RegisterExtension`, and auto-registration via ServiceLoader · the `ExtensionContext` store for sharing state · writing a `@TempDirectory`-style extension and a timing/reporting extension · parallel execution config (`junit-platform.properties`) and thread-safety requirements

**Day 189 — AssertJ: Fluent Assertions** · 🎥 40m · 💻 45m
Why AssertJ beats plain JUnit assertions (discoverability, error messages, chaining) · `assertThat(...)` core: `isEqualTo`, `isNotNull`, `isIn`, `matches`, `satisfies` · String assertions: `contains`, `startsWith`, `containsIgnoringCase`, `hasSize` · collection assertions: `containsExactly`, `containsExactlyInAnyOrder`, `extracting`, `flatExtracting`, `filteredOn`, `allSatisfy`, `anyMatch`, `singleElement` · object graph comparison: `usingRecursiveComparison`, `ignoringFields`, `ignoringCollectionOrder` · exception assertions: `assertThatThrownBy`, `assertThatExceptionOfType`, `hasMessageContaining`, `hasRootCauseInstanceOf` · `SoftAssertions` and `assertSoftly` · `Optional`, `LocalDate`, and `BigDecimal` assertions · writing a custom assertion class for your domain

**Day 190 — Mockito I: Mocks, Stubbing & Answers** · 🎥 45m · 💻 50m
Why mocks exist: isolating the unit under test from slow/nondeterministic collaborators · `mock()`, `@Mock` + `@ExtendWith(MockitoExtension.class)`, `@InjectMocks` (and its silent-failure risks — prefer constructor injection manually) · `when(...).thenReturn(...)`, `thenThrow`, `thenAnswer`, consecutive stubbing · default return values (null, 0, empty collection) and `RETURNS_DEEP_STUBS`/`RETURNS_SMART_NULLS` · argument matchers: `any()`, `eq()`, `anyString()`, `argThat()` — and the **all-or-nothing matcher rule** · stubbing void methods with `doThrow`/`doNothing`/`doAnswer` · `Answer` for dynamic responses based on arguments

**Day 191 — Mockito II: Verification, Captors & Spies** · 🎥 45m · 💻 50m
`verify()` with `times`, `never`, `atLeast`, `atMost`, `only` · `verifyNoInteractions` and `verifyNoMoreInteractions` (and why overusing it makes brittle tests) · `InOrder` verification across multiple mocks · `ArgumentCaptor` (`@Captor`, `getValue`, `getAllValues`) to assert on what was passed to a collaborator · captor vs matcher: when to use which · `spy()` and partial mocks, `doReturn` vs `when` on spies (the real-method-invocation trap) · `@MockitoSettings(strictness = ...)` and `UnnecessaryStubbingException` — why strict stubs make better tests · resetting mocks (and why needing `reset()` signals a bad test)

**Day 192 — Mockito III: Static, Final, Construction & Boundaries** · 🎥 40m · 💻 40m
The inline mock maker (default since Mockito 5) and mocking `final` classes/methods · `mockStatic()` with try-with-resources scoping, `mockedStatic.verify()` · mocking `LocalDateTime.now()` — and why injecting a `Clock` is better · `mockConstruction()` for `new` inside a method — and why constructor injection is better · what you should never mock: value objects, types you don't own (wrap them), the JDK · classicist vs mockist testing schools · when a fake or in-memory stub beats a mock · PowerMock and why you shouldn't need it anymore

**Day 193 — Test Doubles & Designing for Testability** · 🎥 40m · 💻 40m
The five doubles precisely: dummy, fake, stub, spy, mock · hand-rolled fakes (in-memory repository, fake clock, fake message publisher) and why they often produce better tests than mocks · dependency injection as the enabler of testing · hexagonal boundaries: mock at the port, not at every class · seams and how to introduce them into legacy code · avoiding static/singleton/`new` in business logic · test data builders and the Object Mother pattern · `Instancio`/`EasyRandom` for generating test objects · fixture management and shared-state hazards

**Day 194 — Testcontainers I: Real Dependencies in Tests** · 🎥 45m · 💻 50m
The problem with H2-as-a-Postgres-stand-in (dialect drift, missing features, false confidence) · Testcontainers architecture and Docker requirements · dependencies: `testcontainers-bom`, `junit-jupiter`, module artifacts · `@Testcontainers` + `@Container` (static = per class, instance = per method) · `GenericContainer` with image, exposed ports, env, wait strategies (`Wait.forHttp`, `forLogMessage`, `forListeningPort`) · getting the mapped port and host · container reuse (`testcontainers.reuse.enable`) and Ryuk cleanup · startup time budgeting and keeping the suite fast

**Day 195 — Testcontainers II: Postgres, Kafka, Redis & LocalStack** · 🎥 45m · 💻 55m
`PostgreSQLContainer` with init scripts and `@DynamicPropertySource` wiring into Spring · `@ServiceConnection` (Spring Boot 3.1+) removing all the boilerplate · `KafkaContainer`/`ConfluentKafkaContainer` and bootstrap-servers wiring · `GenericContainer` for Redis and Elasticsearch · `LocalStackContainer` for S3/SQS/SNS · `MockServerContainer` · Docker Compose module for a full stack · sharing one container across the whole suite with a singleton pattern to avoid restart cost · running Testcontainers in CI (GitHub Actions, Docker-in-Docker, rootless) · `@ServiceConnection` in local dev with `spring-boot-testcontainers`

**Day 196 — WireMock: Stubbing External HTTP APIs** · 🎥 40m · 💻 45m
Why you can't call the real payment gateway in tests · WireMock standalone, JUnit 5 extension, and the Testcontainers module · stubbing with `stubFor(get(urlEqualTo(...)).willReturn(aResponse()...))` · request matching on URL, method, headers, query params, body (JSON path, XPath, regex) · response templating with Handlebars · simulating latency (`withFixedDelay`), faults (`CONNECTION_RESET_BY_PEER`), and error status codes to test your retry/circuit-breaker logic · stateful scenarios for multi-step flows · verification (`verify(exactly(2), postRequestedFor(...))`) · record-and-playback proxying against a real API · JSON stub files in `src/test/resources/mappings`

**Day 197 — REST Assured & API-Level Testing** · 🎥 40m · 💻 45m
`given().when().then()` fluent syntax · setting base URI/port, headers, auth (basic, bearer, OAuth2), cookies, query and path params · request/response body serialization with Jackson · assertions with Hamcrest matchers and JSON Path (`body("data.items[0].id", equalTo(5))`) · schema validation with `matchesJsonSchemaInClasspath` · extracting responses into POJOs for chained calls · logging filters for debugging (`log().ifValidationFails()`) · using REST Assured against `@SpringBootTest(webEnvironment = RANDOM_PORT)` and against a deployed environment · comparing with `MockMvc` and `WebTestClient` (Days 294/368)

**Day 198 — Coverage, Mutation Testing, Contract Testing & Phase 8 Capstone** · 🎥 45m · 💻 120m
JaCoCo line/branch/instruction coverage and reading the HTML report · why coverage is a floor, not a goal, and how 100% coverage can still assert nothing · **mutation testing with PIT**: mutation operators, killed vs survived mutants, mutation score as a real quality signal, `pitest-junit5-plugin` setup and incremental analysis · consumer-driven contract testing concepts (Pact / Spring Cloud Contract — implemented on Day 418) · **Capstone**: build a full test suite for the job engine and repository — unit tests with Mockito, integration tests with Testcontainers Postgres, HTTP stubs with WireMock, property-based edge cases, concurrency tests with `Awaitility`, ArchUnit layering rules, JaCoCo gate at 85% branch, and a PIT mutation score above 70%

---

# PHASE 9 — Databases, SQL & JDBC
**Days 199–222 · Weeks 29–32**
> **Milestone project:** design and implement the full schema for an e-commerce platform, with indexes, constraints, and a raw-JDBC data access layer.

**Day 199 — The Relational Model & ER Modeling** · 🎥 40m · 💻 40m
Relations, tuples, attributes, domains · why relational databases still dominate backend work · primary keys (natural vs surrogate), candidate keys, composite keys, foreign keys · one-to-one, one-to-many, many-to-many and how each is physically realized · ER diagrams: entities, attributes, relationships, cardinality, crow's foot notation · conceptual → logical → physical modeling · modeling an e-commerce domain live (users, addresses, products, categories, carts, orders, order_items, payments, shipments) · OLTP vs OLAP workloads

**Day 200 — Installing PostgreSQL & MySQL, and the Tooling** · 🎥 40m · 💻 45m
Installing Postgres and MySQL natively and via Docker (`docker run postgres:16`) · `psql` essentials (`\l`, `\c`, `\dt`, `\d table`, `\di`, `\x`, `\timing`) · `mysql` CLI equivalents · DBeaver / DataGrip / pgAdmin tour · creating databases, roles, and grants · connection strings and JDBC URLs · Postgres vs MySQL vs Oracle vs SQL Server: dialect differences you'll actually hit (auto-increment, `LIMIT` vs `TOP` vs `FETCH FIRST`, string concat, boolean types, `RETURNING`, upsert syntax) · why this course standardizes on PostgreSQL

**Day 201 — DDL: Databases, Schemas, Tables & Data Types** · 🎥 45m · 💻 45m
`CREATE DATABASE`, `CREATE SCHEMA`, search_path · `CREATE TABLE` full syntax · numeric types (`smallint`, `integer`, `bigint`, `numeric/decimal` for money, `real`/`double precision` and why not for money) · character types (`varchar(n)`, `text`, `char`) and Postgres's lack of a performance difference · `boolean` · date/time types (`date`, `time`, `timestamp`, `timestamptz`, `interval`) and the timezone rule from Day 109 · `uuid`, `json` vs `jsonb`, arrays, `enum` types, `bytea` · `ALTER TABLE` add/drop/rename/alter column and the locking implications on a live table · `DROP`/`TRUNCATE` vs `DELETE` · generated and identity columns

**Day 202 — Constraints: The Database as the Last Line of Defense** · 🎥 40m · 💻 45m
`PRIMARY KEY` and its implicit unique index · `FOREIGN KEY` with `ON DELETE`/`ON UPDATE` actions (CASCADE, SET NULL, RESTRICT, NO ACTION) and when cascade deletes are a footgun · `UNIQUE` (single and composite) and NULL's special treatment in unique indexes · `CHECK` constraints for domain invariants · `NOT NULL` · `DEFAULT` values including function defaults (`now()`, `gen_random_uuid()`) · deferrable constraints · naming constraints so error messages are actionable · **why application-level validation is not enough** and how to map constraint violations to clean API errors

**Day 203 — DML: INSERT, UPDATE, DELETE, UPSERT & RETURNING** · 🎥 40m · 💻 45m
`INSERT` single row, multi-row, and `INSERT ... SELECT` · `RETURNING` to get generated keys without a second round trip · `UPDATE` with `FROM` joins · `DELETE` with `USING` · **always check your `WHERE` clause** — running updates inside a transaction first · `ON CONFLICT DO NOTHING` / `DO UPDATE` (Postgres upsert) vs MySQL `INSERT ... ON DUPLICATE KEY UPDATE` vs standard `MERGE` · bulk loading with `COPY` and multi-row inserts · soft deletes vs hard deletes and their long-term costs · optimistic concurrency with a version column at the SQL level

**Day 204 — SELECT: Projection, Filtering & NULL Semantics** · 🎥 40m · 💻 45m
`SELECT` column list vs `SELECT *` (and why `*` is a production hazard) · aliases and quoting · `WHERE` with comparison, `BETWEEN`, `IN`, `LIKE`/`ILIKE` and wildcard performance, `SIMILAR TO`, regex operators · `AND`/`OR`/`NOT` precedence · **three-valued logic**: `NULL` is not equal to anything, including `NULL` · `IS NULL`, `IS NOT NULL`, `COALESCE`, `NULLIF`, `IS DISTINCT FROM` · `NOT IN` with NULLs returning nothing — the classic silent bug · `CASE` expressions · `CAST` and type coercion

**Day 205 — ORDER BY, LIMIT/OFFSET, DISTINCT & Pagination Basics** · 🎥 35m · 💻 40m
`ORDER BY` with multiple keys, `ASC`/`DESC`, `NULLS FIRST`/`NULLS LAST` · ordering by expression, alias, or ordinal · collation and locale-sensitive sorting · `DISTINCT` vs `DISTINCT ON` (Postgres) · `LIMIT`/`OFFSET` and **why deep offset pagination degrades to O(n)** · keyset/seek pagination with a composite cursor — the fix you'll implement again on Day 324 · stable ordering requirements for correct pagination · `FETCH FIRST n ROWS WITH TIES`

**Day 206 — Joins: Every Kind, With Diagrams** · 🎥 50m · 💻 55m
`INNER JOIN` and the join condition · `LEFT`/`RIGHT`/`FULL OUTER JOIN` and reading the NULL-padded rows · `CROSS JOIN` and accidental Cartesian products · self-joins (manager hierarchies) · `USING` vs `ON` vs natural join (and why to avoid natural join) · semi-joins with `EXISTS` and anti-joins with `NOT EXISTS` · joining more than two tables and the effect of join order · **the fan-out trap**: joining two one-to-many relations multiplies rows and breaks your aggregates · lateral joins for per-row subqueries · `JOIN` vs subquery vs CTE performance

**Day 207 — Aggregation: GROUP BY, HAVING & Grouping Sets** · 🎥 45m · 💻 50m
`COUNT(*)` vs `COUNT(col)` vs `COUNT(DISTINCT col)` · `SUM`, `AVG`, `MIN`, `MAX`, `STRING_AGG`/`GROUP_CONCAT`, `ARRAY_AGG`, `JSON_AGG` · `GROUP BY` semantics and the rule that every non-aggregated select column must be grouped (and MySQL's `ONLY_FULL_GROUP_BY`) · logical execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT · `WHERE` vs `HAVING` and the performance difference · `FILTER (WHERE ...)` for conditional aggregates · `GROUPING SETS`, `ROLLUP`, `CUBE` for multi-level reports · building a monthly revenue report

**Day 208 — Subqueries & Correlated Subqueries** · 🎥 40m · 💻 45m
Scalar subqueries in `SELECT`, `WHERE`, and `FROM` · derived tables and mandatory aliasing · `IN`/`NOT IN` vs `EXISTS`/`NOT EXISTS` and the NULL difference · correlated subqueries and their per-row execution model · `ANY`/`ALL` comparison operators · rewriting a correlated subquery as a join or window function for a 100× speedup, measured with EXPLAIN · when the optimizer decorrelates automatically and when it can't · common patterns: "latest row per group", "records with no children", "above-average earners"

**Day 209 — CTEs & Recursive Queries** · 🎥 40m · 💻 45m
`WITH` syntax and readability benefits over nested subqueries · multiple CTEs and referencing earlier ones · materialization: Postgres 12+ `MATERIALIZED`/`NOT MATERIALIZED` and the optimization-fence history · CTEs vs derived tables vs views vs temp tables · **recursive CTEs**: anchor + recursive term + `UNION ALL`, termination conditions · traversing category trees, org charts, and bill-of-materials · generating date series for gap-filling reports · cycle detection with a path array · graph traversal limits and when to move to a graph database

**Day 210 — Window Functions** · 🎥 50m · 💻 55m
Why window functions exist: aggregate without collapsing rows · `OVER (PARTITION BY ... ORDER BY ...)` · ranking: `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `NTILE`, `PERCENT_RANK` · offsets: `LAG`, `LEAD`, `FIRST_VALUE`, `LAST_VALUE`, `NTH_VALUE` · aggregates as windows: running totals, moving averages, cumulative counts · frame clauses: `ROWS` vs `RANGE` vs `GROUPS`, `UNBOUNDED PRECEDING`, `CURRENT ROW`, and the default frame surprise with `LAST_VALUE` · named windows with `WINDOW` · **top-N-per-group** solved cleanly · deduplication with `ROW_NUMBER` · sessionization and funnel analysis

**Day 211 — Views & Materialized Views** · 🎥 30m · 💻 35m
`CREATE VIEW` for encapsulating complex queries and enforcing column-level access · updatable views and their restrictions · `WITH CHECK OPTION` · views as a backward-compatibility layer during schema migration · **materialized views**: physical storage, `REFRESH MATERIALIZED VIEW` (with and without `CONCURRENTLY`), required unique index, staleness tradeoffs · scheduling refreshes · when a materialized view beats a cache and when it doesn't · views vs application-layer queries in a Spring project

**Day 212 — Indexes: Types, Structure & Design** · 🎥 55m · 💻 55m
Why an index turns O(n) into O(log n) · B-tree structure walkthrough (root, internal, leaf, page splits, fill factor) · clustered vs non-clustered / heap vs index-organized (Postgres heap + ctid vs MySQL InnoDB clustered PK) · **composite indexes and the leftmost-prefix rule** · column order driven by selectivity and query shape · covering indexes and `INCLUDE` for index-only scans · partial indexes (`WHERE deleted_at IS NULL`) · expression/functional indexes (`LOWER(email)`) · unique indexes · Postgres index types: B-tree, Hash, GIN (jsonb, full-text, arrays), GiST, BRIN, SP-GiST · **the cost of indexes**: slower writes, more storage, bloat, and vacuum pressure · finding unused and duplicate indexes · `CREATE INDEX CONCURRENTLY` for zero-downtime creation

**Day 213 — EXPLAIN, Query Plans & Statistics** · 🎥 50m · 💻 55m
`EXPLAIN` vs `EXPLAIN ANALYZE` vs `EXPLAIN (ANALYZE, BUFFERS, VERBOSE, FORMAT JSON)` · reading a plan tree bottom-up · scan nodes: Seq Scan, Index Scan, Index Only Scan, Bitmap Heap/Index Scan · join nodes: Nested Loop, Hash Join, Merge Join — and when each is chosen · Sort, Aggregate, HashAggregate, Materialize, Gather (parallel workers) · **estimated vs actual rows**: the row-estimate mismatch that explains most bad plans · cost units and what they mean · buffers: shared hit vs read · the statistics collector, `ANALYZE`, `default_statistics_target`, extended statistics for correlated columns · `pg_stat_statements` to find your worst queries · visual tools (explain.depesz, pev2)

**Day 214 — Query Optimization Patterns & Anti-Patterns** · 🎥 50m · 💻 55m
**Anti-patterns**: `SELECT *`, functions on indexed columns in `WHERE` (`WHERE YEAR(created_at) = 2026`), implicit type casts killing index use, leading-wildcard `LIKE '%x'`, `OR` across columns, `NOT IN` with subqueries, N+1 queries, unbounded result sets, `COUNT(*)` on huge tables for pagination · **fixes**: sargable predicates, expression indexes, `UNION ALL` instead of `OR`, `EXISTS` instead of `IN`, batching, keyset pagination, approximate counts (`reltuples`), denormalized counters · query rewriting exercises with before/after `EXPLAIN ANALYZE` numbers · when to add an index vs rewrite vs cache vs denormalize · a repeatable optimization checklist

**Day 215 — Normalization, Denormalization & Schema Evolution** · 🎥 45m · 💻 45m
Functional dependencies and anomalies (insert, update, delete) · 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF, and a brief look at 4NF/5NF · normalizing a messy spreadsheet-style table step by step · **deliberate denormalization**: read-heavy workloads, precomputed aggregates, materialized counters, JSONB for sparse attributes, and the consistency cost each carries · EAV and why it usually ends badly · choosing surrogate vs natural keys, and UUID vs bigint (index locality, UUIDv7 as the compromise) · **zero-downtime migrations**: expand-contract, backfill in batches, dual writes, and never doing a blocking `ALTER` on a hot table

**Day 216 — Transactions & ACID** · 🎥 40m · 💻 40m
`BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`, `ROLLBACK TO SAVEPOINT` · **Atomicity** (all or nothing), **Consistency** (constraints hold), **Isolation** (concurrent transactions don't corrupt each other), **Durability** (committed means survived a crash) · the write-ahead log and how durability is actually implemented · `fsync`, `synchronous_commit`, and the durability/throughput knob · autocommit mode and why it surprises people · transaction scope and why long transactions are toxic (locks held, vacuum blocked, connection pinned) · read-only transactions · nested transactions in reality (savepoints, not true nesting)

**Day 217 — Isolation Levels & Concurrency Anomalies** · 🎥 50m · 💻 50m
The four anomalies with live two-terminal demonstrations: **dirty read**, **non-repeatable read**, **phantom read**, and **lost update** · plus write skew and read skew · the four SQL standard levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE — and the exact anomaly each prevents · **what the levels actually mean per database**: Postgres has no dirty reads at all and implements RR via snapshot isolation; MySQL InnoDB defaults to RR with gap locks; Oracle offers RC and Serializable only · `SERIALIZABLE` in Postgres (SSI) and handling `could not serialize access` retries · choosing a level per use case · setting it in JDBC and later with `@Transactional(isolation = ...)`

**Day 218 — Locking, MVCC & Deadlocks** · 🎥 50m · 💻 50m
Pessimistic locking: `SELECT ... FOR UPDATE`, `FOR NO KEY UPDATE`, `FOR SHARE`, `SKIP LOCKED`, `NOWAIT` · row locks vs table locks vs advisory locks · lock modes and the conflict matrix for `ALTER TABLE`, `VACUUM`, and DDL · **MVCC**: tuple versions, xmin/xmax, snapshots, and why readers never block writers in Postgres · dead tuples, bloat, `VACUUM`/autovacuum, and transaction ID wraparound · `pg_locks` and `pg_stat_activity` to find blockers · **deadlock demonstration** with two sessions, the deadlock detector, and the lock-ordering fix · implementing a work queue safely with `FOR UPDATE SKIP LOCKED` · optimistic locking with a version column as the usual better answer

**Day 219 — Functions, Triggers, Sequences & Key Strategies** · 🎥 40m · 💻 40m
`CREATE FUNCTION` in SQL and PL/pgSQL, parameters, return types, `RETURNS TABLE` · stored procedures vs functions and transaction control · **triggers**: BEFORE/AFTER/INSTEAD OF, ROW vs STATEMENT, `NEW`/`OLD`, and legitimate uses (audit trails, `updated_at`, denormalized counters) · why business logic in triggers becomes invisible and unmaintainable · sequences: `CREATE SEQUENCE`, `nextval`, caching, gaps, and why gaps are fine · `IDENTITY` vs `SERIAL` vs `BIGSERIAL` · UUID generation strategies (v4 random vs **v7 time-ordered**) and their index-locality impact · database-generated vs application-generated IDs and the tradeoff for distributed systems (Snowflake IDs)

**Day 220 — Partitioning, Replication, Read Replicas & Sharding** · 🎥 45m · 💻 40m
Declarative partitioning in Postgres: RANGE, LIST, HASH · partition pruning in query plans · attaching/detaching partitions for instant archival · partitioning a 500M-row events table by month · **streaming replication**: primary/standby, WAL shipping, synchronous vs asynchronous, replication lag and its consequences for read-your-writes · read replicas and routing read-only traffic (and the staleness bug it causes) · failover, `pg_auto_failover`/Patroni, connection routing with PgBouncer/HAProxy · logical replication and CDC (foreshadowing Debezium on Day 383) · **sharding**: shard keys, resharding pain, cross-shard joins and transactions, and Vitess/Citus · when to shard (much later than you think)

**Day 221 — JDBC I: Connections, Statements & ResultSets** · 🎥 45m · 💻 50m
The JDBC architecture: API, driver manager, driver types (type 4 in practice) · adding `org.postgresql:postgresql` and `com.mysql:mysql-connector-j` · JDBC URL anatomy and useful driver params (`reWriteBatchedInserts`, `prepareThreshold`, `ApplicationName`, `socketTimeout`) · `DriverManager.getConnection` vs a `DataSource` (and why production always uses a DataSource) · `Statement` vs `PreparedStatement` vs `CallableStatement` · **`PreparedStatement` for parameterization and server-side plan caching** · setting parameters by index, handling `NULL` with `setNull`, and type mapping (Java ↔ SQL type table) · `ResultSet` navigation, getters by index vs label, `wasNull()`, `ResultSetMetaData` · try-with-resources for `Connection`/`Statement`/`ResultSet` and what leaks if you forget

**Day 222 — JDBC II: Batching, Transactions, Pooling & SQL Injection** · 🎥 50m · 💻 55m
`setAutoCommit(false)`, `commit`, `rollback`, `setSavepoint` and a correct try/catch/finally transaction template · `addBatch`/`executeBatch` and `executeLargeBatch`, batch size tuning, and the 10–50× insert speedup measured live · `getGeneratedKeys` · `setFetchSize` and streaming large result sets without OOM (and the Postgres requirement that autocommit be off) · **HikariCP**: why pooling exists (connection setup is expensive), `maximumPoolSize` sizing formula, `minimumIdle`, `connectionTimeout`, `idleTimeout`, `maxLifetime` (shorter than the DB/network idle timeout!), `leakDetectionThreshold`, and pool metrics · **SQL injection**: a live exploit against string concatenation, then the `PreparedStatement` fix, plus identifier allowlisting for dynamic ORDER BY, least-privilege DB users, and why ORMs don't automatically save you · building a small `JdbcOrderRepository` with mapping, batching, and transactions — the baseline you'll compare against JPA tomorrow

---

# PHASE 10 — JPA & Hibernate
**Days 223–246 · Weeks 32–36**
> **Milestone project:** port the JDBC data layer to JPA, then prove with SQL logs that it issues the same (or fewer) queries.

**Day 223 — ORM Concepts: JPA vs Hibernate vs Spring Data** · 🎥 40m · 💻 35m
The object-relational impedance mismatch: identity, inheritance, associations, granularity, navigation · what an ORM buys you and what it costs · **JPA is a specification; Hibernate is an implementation; Spring Data JPA is a layer on top** — the diagram that clears up 90% of confusion · other implementations (EclipseLink, OpenJPA) · Jakarta Persistence 3.x and the `javax` → `jakarta` namespace change · when NOT to use an ORM (reporting, bulk ETL, complex analytics — use JDBC/jOOQ) · a realistic assessment of the "ORM is evil" argument

**Day 224 — Setup, Configuration & Dialects** · 🎥 40m · 💻 40m
Dependencies: `spring-boot-starter-data-jpa` (which pulls hibernate-core, jakarta.persistence-api, spring-data-jpa, spring-orm, HikariCP) · classic `persistence.xml` and `EntityManagerFactory` bootstrap (so you understand what Boot does for you) · Spring Boot auto-configuration: `spring.datasource.*`, `spring.jpa.*` · `hibernate.dialect` and why Boot usually detects it · **`spring.jpa.hibernate.ddl-auto`**: none / validate / update / create / create-drop — and why `update` must never touch production · `show-sql` vs the proper `org.hibernate.SQL` + `BasicBinder` loggers · p6spy / datasource-proxy for readable, parameter-filled SQL · naming strategies (implicit and physical) and how `firstName` becomes `first_name`

**Day 225 — @Entity, @Id & Identifier Generation** · 🎥 45m · 💻 45m
`@Entity`, `@Table(name, schema, uniqueConstraints, indexes)` · entity requirements: no-arg constructor, non-final class, an id · `@Id` and `@GeneratedValue` strategies: **IDENTITY** (uses DB auto-increment but **disables JDBC batch inserts**), **SEQUENCE** (the recommended default, with a pooled optimizer), **TABLE** (avoid), **AUTO** · `@SequenceGenerator` with `allocationSize` and the `pooled`/`pooled-lo` optimizers explained with SQL logs · UUID ids: `@GeneratedValue(strategy = UUID)`, UUIDv7 custom generators, and index fragmentation · composite keys preview · natural ids with `@NaturalId` · equals/hashCode for entities — **the correct implementation using a business key or a stable UUID**, and why using a generated id breaks `Set` semantics before flush

**Day 226 — Basic Mappings: Columns, Enums, LOBs & Converters** · 🎥 45m · 💻 45m
`@Column(name, nullable, length, precision, scale, unique, insertable, updatable, columnDefinition)` · `@Basic(fetch = LAZY)` and bytecode enhancement · `@Transient` for non-persistent fields · `@Enumerated(EnumType.STRING)` — **never ORDINAL** — and the reordering disaster it prevents · `@Lob` for `CLOB`/`BLOB` and streaming large objects · `java.time` mapping: `Instant`/`OffsetDateTime` → `timestamptz`, `LocalDateTime` → `timestamp` · `@AttributeConverter` for custom types (Money, encrypted fields, JSON columns) and `autoApply` · Hibernate's `@JdbcTypeCode(SqlTypes.JSON)` for native jsonb mapping · `@Formula` for derived read-only columns · `@ColumnTransformer` for encryption at rest

**Day 227 — EntityManager & The Persistence Context** · 🎥 50m · 💻 45m
`EntityManager` API: `persist`, `merge`, `find`, `getReference`, `remove`, `refresh`, `detach`, `clear`, `flush`, `contains`, `lock` · **the persistence context as a first-level cache and a unit of work** · identity guarantee: `find` twice in one context returns the same instance (`==`) · repeatable-read-within-a-transaction behavior · `persist` vs `merge` — the crucial difference, with a diagram of what happens to your reference · `getReference` returning a proxy and `EntityNotFoundException` on access · transaction-scoped vs extended persistence contexts · `EntityManagerFactory` as a heavyweight singleton · how Spring injects a thread-bound proxy `EntityManager`

**Day 228 — Entity Lifecycle, Dirty Checking & Flush Modes** · 🎥 45m · 💻 45m
The four states: **transient/new**, **managed/persistent**, **detached**, **removed** — with the full transition diagram · automatic dirty checking: Hibernate snapshots the loaded state and diffs at flush · **you don't call save() on a managed entity** — demonstrating that a setter inside a transaction issues an UPDATE by itself · the memory cost of snapshots and why loading 100k entities is a mistake · flush timing: before query execution, at commit, or explicit · `FlushModeType.AUTO` vs `COMMIT` · SQL statement ordering at flush (inserts, updates, deletes — and the constraint-violation surprise) · `@DynamicUpdate`/`@DynamicInsert` and their tradeoffs · lifecycle callbacks (`@PrePersist`, `@PostLoad`, `@PreUpdate`, `@PreRemove`) and `@EntityListeners`

**Day 229 — @OneToOne Mappings** · 🎥 40m · 💻 40m
Unidirectional `@OneToOne` with `@JoinColumn` · bidirectional with `mappedBy` on the inverse side · **shared primary key with `@MapsId`** — the cleanest one-to-one · one-to-one via a join table · **the notorious lazy-loading problem on the inverse side**: Hibernate must query to know whether to use null or a proxy, so `fetch = LAZY` is ignored — with three fixes (`@MapsId`, `optional = false` + bytecode enhancement, or model it as `@ManyToOne`) · cascade and orphan removal on one-to-one · User ↔ UserProfile and Order ↔ Invoice modeled live

**Day 230 — @ManyToOne, @OneToMany & Bidirectional Sync** · 🎥 50m · 💻 50m
`@ManyToOne` as the owning side holding the FK — **the side that matters** · `@JoinColumn(name, nullable, foreignKey)` · `@OneToMany(mappedBy = ...)` as the inverse, read-only side · **the #1 beginner bug**: setting only one side of a bidirectional link and the update never persisting · helper methods `addItem`/`removeItem` that maintain both sides · unidirectional `@OneToMany` with a join column vs a join table, and the extra UPDATE statements it generates · `List` vs `Set` vs `Map` for collections and the `MultipleBagFetchException` that `Set` avoids · `@OrderBy` (SQL-side ordering) vs `@OrderColumn` (persisted index) · when to skip the `@OneToMany` entirely and just query by parent id

**Day 231 — @ManyToMany & Association Entities** · 🎥 40m · 💻 45m
`@ManyToMany` with `@JoinTable(name, joinColumns, inverseJoinColumns)` · owning vs inverse side and `mappedBy` · **why `@ManyToMany` with `List` deletes and reinserts the whole join table on every change** — and why `Set` fixes it · the deeper problem: you can never add columns (quantity, added_at, role) to the join table · **the recommended pattern: replace it with two `@ManyToOne` relations through an explicit association entity** with an `@EmbeddedId` or its own id · Student ↔ Course ↔ Enrollment modeled both ways with SQL comparison · cascade behavior on many-to-many and why `CascadeType.REMOVE` is dangerous here

**Day 232 — Cascade Types & Orphan Removal** · 🎥 40m · 💻 40m
All cascade types: `PERSIST`, `MERGE`, `REMOVE`, `REFRESH`, `DETACH`, `ALL` · what each propagates and when · transitive persistence by reachability · `orphanRemoval = true` vs `CascadeType.REMOVE` — the precise difference (removing from the collection vs deleting the parent) · composition vs aggregation: cascade for parts you own (OrderItem), never for shared references (Category, User) · **the cascade-remove performance trap**: Hibernate loads the whole collection and issues N deletes instead of one bulk delete · `@OnDelete(action = CASCADE)` to push it to the database · a decision table for choosing cascade settings

**Day 233 — Fetch Types, Proxies & LazyInitializationException** · 🎥 50m · 💻 50m
Default fetch types (`@ManyToOne`/`@OneToOne` = EAGER, `@OneToMany`/`@ManyToMany` = LAZY) and **why you should make every association LAZY explicitly** · how proxies work: subclass generation, uninitialized state, `Hibernate.isInitialized`, `Hibernate.initialize`, `unproxy` · `PersistentBag`/`PersistentSet` collection wrappers · **`LazyInitializationException`**: reproducing it by touching a lazy field after the transaction closes · the five responses: fetch join, entity graph, DTO projection, keeping the transaction open at the service boundary, or `Hibernate.initialize` · **Open Session In View**: what `spring.jpa.open-in-view=true` (the default!) actually does, why it hides bugs, holds connections, and should be disabled — and what breaks when you disable it · serializing entities to JSON and the proxy/`ByteBuddyInterceptor` error

**Day 234 — The N+1 Problem: Detection and Every Fix** · 🎥 50m · 💻 55m
Reproducing N+1 with SQL logging: one query for orders, then one per order for items · why it's the single most common ORM performance bug · **detection**: SQL log counting, `hibernate.generate_statistics`, datasource-proxy assertions, and failing a test when query count exceeds a threshold · **fixes, with measured results for each**: `JOIN FETCH` in JPQL, `@EntityGraph` (named and ad-hoc, `fetch` vs `load`), `@BatchSize` / `hibernate.default_batch_fetch_size` (the low-effort global win), `@Fetch(FetchMode.SUBSELECT)`, DTO projections that avoid entities entirely, and two-query "hydrate" patterns · **pagination + fetch join = `HHH000104` in-memory pagination** — the trap and its fixes (two-step id query, `@BatchSize`, window functions) · `MultipleBagFetchException` and how to avoid fetching two collections at once

**Day 235 — Embeddables, Element Collections & Composite Keys** · 🎥 40m · 💻 45m
`@Embeddable` / `@Embedded` for value objects (Address, Money, DateRange) that have no identity of their own · `@AttributeOverride`/`@AttributeOverrides` for reusing an embeddable twice in one entity · nested embeddables · **`@ElementCollection`** with `@CollectionTable` for lists of basic types or embeddables (tags, phone numbers) and its delete-and-reinsert behavior · composite keys with `@EmbeddedId` (preferred) vs `@IdClass`, and the `equals`/`hashCode`/`Serializable` requirements · `@MapsId` in composite-key associations · when a composite key is right and when a surrogate key is simpler

**Day 236 — Inheritance Mapping Strategies** · 🎥 45m · 💻 45m
`@MappedSuperclass` — shared fields, no table, not queryable polymorphically (perfect for `BaseEntity` with id/audit fields) · **SINGLE_TABLE**: one table, `@DiscriminatorColumn`/`@DiscriminatorValue`, fastest queries, but nullable columns everywhere and no NOT NULL constraints on subclass fields · **JOINED**: normalized, one table per class plus joins, `@PrimaryKeyJoinColumn`, correct constraints, slower reads · **TABLE_PER_CLASS**: no shared table, UNION ALL for polymorphic queries, broken identity generation · a decision guide with query plans for each · modeling `Payment` → `CardPayment`/`BankTransfer`/`WalletPayment` three ways · polymorphic queries and `TYPE()` in JPQL · why composition often beats entity inheritance

**Day 237 — JPQL: The Query Language** · 🎥 50m · 💻 50m
JPQL vs SQL: you query entities and fields, not tables and columns · `SELECT o FROM Order o WHERE o.customer.name = :name` (implicit joins and their hidden cost) · explicit `JOIN`, `LEFT JOIN`, `JOIN FETCH`, and `ON` clauses · named parameters (`:name`) vs positional (`?1`) — and never string concatenation · **constructor expressions**: `SELECT new com.app.OrderSummary(o.id, o.total)` for DTO projections · aggregate functions, `GROUP BY`, `HAVING` · subqueries in JPQL · `TREAT` for downcasting · bulk `UPDATE`/`DELETE` statements and **the fact that they bypass the persistence context** (stale entities, and the `clearAutomatically`/`flushAutomatically` fix) · `@NamedQuery` and validation at startup · Criteria vs JPQL vs native decision guide

**Day 238 — Criteria API & The Metamodel** · 🎥 45m · 💻 50m
When to use Criteria: type-safe, programmatically composed, dynamic filters · `CriteriaBuilder`, `CriteriaQuery`, `Root`, `Join`, `Predicate` · building a query step by step: from, where, order, select · combining predicates with `and`/`or` and a list of predicates for optional filters · the **static metamodel** (`Order_.customer`) generated by `hibernate-jpamodelgen`, and configuring the annotation processor · `CriteriaBuilder` functions: `like`, `between`, `in`, `isNull`, `lower`, `coalesce`, `sum`, `count` · fetch joins in Criteria · `CriteriaUpdate`/`CriteriaDelete` · Criteria's verbosity honestly assessed vs Spring Data Specifications (Day 321) and Querydsl (Day 322)

**Day 239 — Native Queries, Result Mapping & Stored Procedures** · 🎥 40m · 💻 45m
`createNativeQuery` and `@Query(nativeQuery = true)` · mapping to entities, to scalars, and to DTOs · `@SqlResultSetMapping` with `@EntityResult`, `@ColumnResult`, `@ConstructorResult` · `@NamedNativeQuery` · Hibernate's `addScalar`/`setResultTransformer` (and its deprecation path to `TupleTransformer`) · using database-specific features (window functions, `jsonb` operators, full-text search, CTEs) that JPQL can't express · **when to drop to native SQL or jOOQ instead of fighting the ORM** · calling stored procedures with `@NamedStoredProcedureQuery` and `StoredProcedureQuery`, IN/OUT/INOUT parameters and cursors · keeping native SQL testable and dialect-aware

**Day 240 — Projections, DTOs & MapStruct** · 🎥 45m · 💻 50m
**Never return entities from your API layer** — coupling, lazy-loading errors, over-fetching, accidental data exposure · projection options ranked: constructor expressions in JPQL, Spring Data interface projections, class-based projections, `Tuple`, native + `@ConstructorResult` · read-only queries that skip the persistence context entirely and skip dirty-checking snapshots (a real memory and CPU win) · **MapStruct**: dependencies and annotation-processor ordering with Lombok, `@Mapper(componentModel = "spring")`, `@Mapping` for renames and expressions, nested mapping, collection mapping, `@AfterMapping`, update methods, and reading the generated source · MapStruct vs ModelMapper vs manual mapping · mapping in the right layer

**Day 241 — Pagination & Sorting in JPA** · 🎥 35m · 💻 40m
`setFirstResult`/`setMaxResults` and the generated `LIMIT`/`OFFSET` · counting total elements and the second count query's cost · **fetch join + pagination = full in-memory pagination** (`HHH000104`) and the three correct workarounds · sorting by joined and computed columns · `Sort` and `Pageable` preview from Spring Data · deep-offset degradation and **keyset pagination in JPQL** with a composite cursor · stable sort keys as a correctness requirement · streaming large result sets with `Stream<T>` + `@QueryHints(HINT_FETCH_SIZE)` and mandatory closing, or scrolling with `ScrollableResults`

**Day 242 — Caching: First Level, Second Level & Query Cache** · 🎥 45m · 💻 45m
First-level cache recap (per persistence context, always on, not configurable) · **second-level cache**: shared across sessions per `EntityManagerFactory`, `@Cacheable` + `@Cache(usage = ...)` · concurrency strategies: READ_ONLY, NONSTRICT_READ_WRITE, READ_WRITE, TRANSACTIONAL — and exactly what each guarantees · providers: Ehcache 3, Caffeine, Infinispan, Redis (via Redisson) · collection caching (you must cache the collection, not just the entity) · **query cache**: how it stores only ids, why it needs the entity cache too, and why it's frequently a net loss · `hibernate.generate_statistics` and reading cache hit/miss/put counts · **cache invalidation across multiple app instances** — the hard part · when the application-level Spring Cache (Day 386) is the better choice

**Day 243 — Optimistic & Pessimistic Locking** · 🎥 45m · 💻 50m
The lost-update problem in a web application, demonstrated with two browser tabs · **optimistic locking**: `@Version` on an int/long/timestamp, the automatic `WHERE version = ?` predicate, `OptimisticLockException`/`ObjectOptimisticLockingFailureException`, and retry strategies · versionless optimistic locking with `@OptimisticLocking(type = ALL/DIRTY)` · `LockModeType.OPTIMISTIC` and `OPTIMISTIC_FORCE_INCREMENT` for parent-child invariants · **pessimistic locking**: `PESSIMISTIC_READ`, `PESSIMISTIC_WRITE`, `PESSIMISTIC_FORCE_INCREMENT`, `jakarta.persistence.lock.timeout`, and `@Lock` on repository methods · `SELECT FOR UPDATE SKIP LOCKED` for job queues via native query · deadlock risk and lock ordering · **choosing**: optimistic for low contention and web flows, pessimistic for short critical sections and hot rows · surfacing conflicts as a clean HTTP 409 to the client

**Day 244 — Auditing & Envers** · 🎥 40m · 💻 45m
Why audit trails matter (compliance, debugging, disputes) · **Spring Data JPA auditing**: `@EnableJpaAuditing`, `@CreatedDate`, `@LastModifiedDate`, `@CreatedBy`, `@LastModifiedBy`, `@EntityListeners(AuditingEntityListener.class)`, `AuditorAware` wired to `SecurityContextHolder` · a reusable `BaseAuditableEntity` `@MappedSuperclass` · `DateTimeProvider` and injecting a testable `Clock` · **Hibernate Envers**: `@Audited`, `@NotAudited`, revision tables (`_AUD`, `REVINFO`), `AuditReaderFactory`, querying historical state and revision diffs, custom `RevisionEntity` with user and IP · Envers' storage and write cost · alternatives: application-emitted domain events, database triggers, and CDC-based audit logs

**Day 245 — Flyway: Versioned Schema Migrations** · 🎥 45m · 💻 50m
Why `ddl-auto=update` is not a migration strategy (no ordering, no data migration, no review, no rollback, silent divergence) · Flyway dependencies (`flyway-core` + `flyway-database-postgresql`) and Boot auto-configuration · naming convention `V1__create_users.sql`, `V1.1__add_index.sql`, `R__view_order_summary.sql`, `U1__undo.sql` · the `flyway_schema_history` table, checksums, and **never editing an applied migration** · `baseline`, `repair`, `clean` (and disabling `clean` in production), `outOfOrder`, `validateOnMigrate` · Java-based migrations for data backfills · **zero-downtime patterns**: expand/contract, adding a nullable column then backfilling in batches then adding NOT NULL, renaming via add-copy-drop, and blue-green-safe schema changes · migrations in CI, per-environment placeholders, and testing migrations with Testcontainers

**Day 246 — Liquibase, Schema Strategy & Hibernate Performance Tuning** · 🎥 50m · 💻 120m
**Liquibase**: changelogs in XML/YAML/JSON/SQL, changesets with author and id, `DATABASECHANGELOG` and `DATABASECHANGELOGLOCK`, preconditions, contexts and labels, rollback blocks, `diff` and `generateChangeLog` for existing databases · Flyway vs Liquibase decision guide · **Hibernate performance tuning**: enabling `hibernate.generate_statistics` and reading `Statistics` (query count, entity loads, cache hits, flushes) · JDBC batching (`hibernate.jdbc.batch_size`, `order_inserts`, `order_updates`, `batch_versioned_data`) and why IDENTITY ids disable it · `@BatchSize` defaults · read-only transactions and `setReadOnly` to skip dirty checking · `StatelessSession` for bulk work · avoiding `merge` where `find`+setters suffice · connection release modes · **Capstone**: port the Day 222 JDBC repository to JPA, prove query-count parity with a datasource-proxy assertion test, add Flyway migrations, audit fields, optimistic locking, and a Testcontainers integration suite

---

# PHASE 11 — Web Fundamentals, HTTP & Servlets
**Days 247–258 · Weeks 36–38**
> **Milestone project:** a REST API built on the raw Servlet API — so you understand exactly what Spring MVC automates.

**Day 247 — How the Web Works: DNS, TCP, TLS & the Request Lifecycle** · 🎥 45m · 💻 35m
Typing a URL and following the whole path: DNS resolution (recursive resolvers, records, TTL), TCP three-way handshake, TLS handshake (ClientHello, certificate chain, key exchange, ALPN), HTTP request, server processing, response, connection reuse or close · latency budget of each step and why RTT dominates · load balancers, reverse proxies, and CDNs in the path · sockets, ports, and what "listening on 8080" means · IPv4/IPv6, NAT, and localhost · watching it all with `curl -v`, `dig`, `openssl s_client`, and browser dev tools

**Day 248 — HTTP/1.1 Deep Dive: Methods, Status Codes & Headers** · 🎥 50m · 💻 45m
Request line, headers, blank line, body — the raw wire format typed by hand over telnet/netcat · **methods**: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS, TRACE, CONNECT · **status codes** by class with the ones that matter: 200/201/202/204, 301/302/303/304/307/308, 400/401/403/404/405/406/409/410/412/415/422/429, 500/502/503/504 — and choosing correctly · **headers**: Host, Content-Type, Content-Length, Accept, Accept-Encoding, Authorization, User-Agent, Referer, Cookie/Set-Cookie, Location, ETag, Cache-Control, X-Forwarded-For/Proto · chunked transfer encoding · keep-alive and connection pooling

**Day 249 — HTTP Semantics: Idempotency, Safety, Caching & Conditional Requests** · 🎥 40m · 💻 40m
**Safe** methods (no side effects) vs **idempotent** methods (repeatable with the same result) — the table, and why POST retries are dangerous while PUT retries are fine · designing idempotent endpoints with an `Idempotency-Key` header (used again on Day 416) · caching: `Cache-Control` directives (max-age, s-maxage, no-cache vs no-store, private vs public, must-revalidate, stale-while-revalidate), `Expires`, `Vary` · **conditional requests**: `ETag` + `If-None-Match` → 304, `Last-Modified` + `If-Modified-Since`, and `If-Match` for optimistic concurrency → 412 · strong vs weak ETags · CDN and browser cache interaction · compression with `Accept-Encoding` and gzip/br

**Day 250 — REST: Constraints, Maturity & Resource Modeling** · 🎥 45m · 💻 40m
Fielding's six constraints: client-server, statelessness, cacheability, layered system, uniform interface, code-on-demand · what "stateless" really forbids (server-side session affinity for application state) and what it permits · the uniform interface's four sub-constraints, including HATEOAS · **Richardson Maturity Model** levels 0–3 with concrete examples of each · resources vs RPC-style endpoints · identifying resources from a domain model · collections, singletons, sub-resources, and non-CRUD actions (`POST /orders/42/cancel`) · REST vs RPC vs GraphQL vs gRPC — an honest comparison of when each wins

**Day 251 — REST API Design: URIs, Versioning, Filtering, Pagination & Errors** · 🎥 50m · 💻 45m
URI design: plural nouns, lowercase-hyphenated, no verbs, no file extensions, hierarchy that reflects ownership, and when to flatten · query parameters for filtering, sorting, field selection (sparse fieldsets), and search · **pagination contracts**: offset/limit vs page/size vs cursor, and the response envelope (`items`, `page`, `totalElements`, `next` cursor) · partial updates: PUT vs PATCH, JSON Patch (RFC 6902) vs JSON Merge Patch (RFC 7386) · bulk operations · **error response design**: consistent shape, machine-readable code, human message, field-level violations, trace id, and never leaking stack traces · versioning strategies preview · naming, casing, date formats (always ISO-8601 UTC), money as minor units or decimal strings · a written API style guide you can reuse

**Day 252 — JSON & Jackson Core** · 🎥 45m · 💻 50m
JSON syntax, types, and its limits (no comments, no dates, no integers-vs-floats distinction, precision loss for big numbers in JavaScript clients) · `ObjectMapper`: `writeValueAsString`, `readValue`, `convertValue`, `TypeReference` for generics, `JsonNode`/`ObjectNode` tree model, and streaming with `JsonParser`/`JsonGenerator` for huge payloads · **annotations**: `@JsonProperty`, `@JsonIgnore`, `@JsonIgnoreProperties(ignoreUnknown = true)`, `@JsonInclude(NON_NULL)`, `@JsonFormat` for dates and enums, `@JsonAlias`, `@JsonAnyGetter/@JsonAnySetter`, `@JsonCreator` + `@JsonProperty` for immutable objects and records, `@JsonUnwrapped`, `@JsonRawValue` · configuring naming strategies (snake_case) · `FAIL_ON_UNKNOWN_PROPERTIES`, `WRITE_DATES_AS_TIMESTAMPS`, and the `jackson-datatype-jsr310` module you must register for `java.time`

**Day 253 — Jackson Advanced: Custom Serializers, Polymorphism & Views** · 🎥 45m · 💻 45m
Writing a `JsonSerializer`/`JsonDeserializer` and registering it via `@JsonSerialize(using = ...)` or a `SimpleModule` · `@JsonComponent` in Spring Boot · **polymorphic types**: `@JsonTypeInfo` + `@JsonSubTypes`, `Id.NAME` vs `Id.CLASS` and the **deserialization RCE risk of enabling default typing** · sealed interfaces + Jackson for safe polymorphism · `@JsonView` for role-based field exposure and its use with `@JsonView` in controllers · `MixIn` annotations for third-party classes you can't modify · `@JsonFilter` and dynamic filtering · handling `BigDecimal` and money precisely · Jackson vs Gson vs JSON-B vs the new JDK JSON API · performance: reuse the `ObjectMapper` (it's thread-safe), afterburner/blackbird modules, and streaming vs binding benchmarks

**Day 254 — The Servlet API: Lifecycle, Request & Response** · 🎥 45m · 💻 50m
Servlet containers and the `jakarta.servlet` namespace (the Spring Boot 3 migration from `javax`) · `Servlet` lifecycle: `init` → `service`/`doGet`/`doPost` → `destroy`, and the **single-instance-multi-thread** model that makes servlet fields a race condition · `@WebServlet` vs `web.xml` · `HttpServletRequest`: parameters, headers, path info, `getReader`/`getInputStream` (**and why you can only read the body once**), attributes, parts · `HttpServletResponse`: status, headers, `getWriter`/`getOutputStream`, `sendError`, `sendRedirect`, content type and encoding · `ServletContext` as application scope · `RequestDispatcher` forward vs include vs redirect · writing a JSON REST endpoint with nothing but servlets

**Day 255 — Filters, Listeners, Sessions & Cookies** · 🎥 45m · 💻 45m
`Filter` chain: `doFilter`, ordering, `@WebFilter` vs `FilterRegistrationBean` · practical filters: request logging, correlation id/MDC injection, gzip, authentication, CORS, request wrapping with `HttpServletRequestWrapper` to make the body re-readable (`ContentCachingRequestWrapper`) · **listeners**: `ServletContextListener`, `HttpSessionListener`, `ServletRequestListener` · `HttpSession`: creation, `getAttribute`/`setAttribute`, `invalidate`, timeout, and **why server-side sessions complicate horizontal scaling** (sticky sessions, session replication, or Spring Session with Redis) · cookies: attributes (`HttpOnly`, `Secure`, `SameSite`, `Domain`, `Path`, `Max-Age`), session cookies vs persistent, and cookie-based auth vs tokens · URL rewriting and why it's dead

**Day 256 — Servlet Containers: Tomcat, Jetty, Undertow & Threading** · 🎥 45m · 💻 40m
Tomcat architecture: Server → Service → Connector → Engine → Host → Context · NIO vs NIO2 vs APR connectors · **the thread-per-request model**: `maxThreads`, `minSpareThreads`, `acceptCount` (the OS accept queue), `maxConnections`, `connectionTimeout`, `keepAliveTimeout` — and how these interact under load · thread pool exhaustion and what it looks like in a thread dump · Jetty and Undertow compared (memory, throughput, async support) · **WAR vs executable JAR**: the historical deployment model, `SpringBootServletInitializer`, and why embedded servers won · session management and clustering · `server.tomcat.*` properties you'll actually tune · virtual threads in Tomcat (Java 21) and what changes

**Day 257 — CORS, Content Negotiation, Compression & Caching Headers** · 🎥 40m · 💻 45m
**The Same-Origin Policy** and what an "origin" is · why CORS exists and what it protects · **simple vs preflighted requests**: which methods/headers trigger an `OPTIONS` preflight · response headers: `Access-Control-Allow-Origin` (and why `*` breaks credentials), `-Allow-Methods`, `-Allow-Headers`, `-Allow-Credentials`, `-Expose-Headers`, `-Max-Age` · debugging a CORS failure in the browser console, step by step · configuring CORS at the filter, controller, and gateway levels (and the Spring Security interaction on Day 354) · **content negotiation** with `Accept`, `Accept-Language`, `Accept-Encoding`, quality values, and `Vary` · gzip/brotli response compression and the size threshold worth compressing · applying the Day 249 caching headers in real endpoints

**Day 258 — HTTP/2, HTTP/3, WebSocket, SSE & gRPC Preview** · 🎥 45m · 💻 35m
HTTP/1.1's head-of-line blocking and the six-connection workaround · **HTTP/2**: binary framing, multiplexed streams, header compression (HPACK), server push (and its deprecation), and why domain sharding and sprite sheets became anti-patterns · **HTTP/3 / QUIC**: UDP transport, 0-RTT, connection migration, and per-stream loss recovery · **WebSocket**: the HTTP upgrade handshake, frames, ping/pong, and full-duplex use cases · **Server-Sent Events**: `text/event-stream`, auto-reconnect, `Last-Event-ID`, and why SSE is often the right choice over WebSocket · long polling as the fallback · gRPC and Protobuf preview (built on Day 450) · a decision guide: request/response vs streaming vs push

---

# PHASE 12 — Spring Core
**Days 259–278 · Weeks 38–41**
> **Milestone project:** a mini IoC container with `@Component` scanning, constructor injection, and AOP proxies — built from scratch to demystify Spring.

**Day 259 — The Spring Ecosystem: What It Is and Why It Won** · 🎥 40m · 💻 30m
The J2EE/EJB pain Spring was created to solve, and Rod Johnson's "without EJB" thesis · the Spring Framework modules: core/beans, context, expression, AOP, JDBC, ORM, transactions, web MVC, WebFlux, messaging, test · the wider portfolio: Boot, Data, Security, Cloud, Batch, Integration, Session, AMQP, Kafka, GraphQL, AI, Modulith, Authorization Server, Shell, StateMachine · version landscape: Spring Framework 6.x + Boot 3.x on Java 17/21 baseline, and the Jakarta EE 9+ namespace migration · Spring vs Quarkus vs Micronaut vs Jakarta EE — an honest comparison · why the rest of this course lives in the Spring world

**Day 260 — Inversion of Control & Dependency Injection** · 🎥 45m · 💻 45m
The problem: `new` inside a class hard-codes a dependency, prevents substitution, and makes unit testing impossible · **Inversion of Control** as the general principle and **Dependency Injection** as one implementation · writing the same service three ways: `new`, a manual factory, and constructor injection — and unit-testing each · the Hollywood Principle · the **Dependency Inversion Principle**: depend on abstractions, and where the interface should live · loose coupling, substitutability, and the seams that make mocking possible · DI containers vs manual wiring, and when manual wiring is honestly fine · service locator as the anti-pattern DI replaced

**Day 261 — The Container: BeanFactory, ApplicationContext & Context Hierarchy** · 🎥 40m · 💻 40m
`BeanFactory` as the basic container (lazy, minimal) vs `ApplicationContext` as the enterprise superset (eager singletons, events, i18n, resource loading, AOP, environment) · implementations: `AnnotationConfigApplicationContext`, `ClassPathXmlApplicationContext`, `GenericWebApplicationContext`, `AnnotationConfigServletWebServerApplicationContext` · the container startup sequence: read bean definitions → run `BeanFactoryPostProcessor`s → instantiate singletons → run `BeanPostProcessor`s → publish `ContextRefreshedEvent` · `getBean` by type, name, and with generics · parent/child context hierarchies (root vs servlet context, and Spring Cloud's bootstrap context) · closing the context and `close()`/`registerShutdownHook`

**Day 262 — Configuration Styles: XML, Annotations & Java Config** · 🎥 40m · 💻 40m
XML configuration (`<bean>`, `<constructor-arg>`, `<property>`, `<import>`) — covered because you will meet legacy codebases, not because you'll write it · annotation configuration with `@Component` + `<context:component-scan>` · **Java configuration** with `@Configuration` + `@Bean` as the modern default · mixing all three with `@ImportResource` · a side-by-side of the same three-bean graph in each style · type safety, refactorability, and IDE support as the reason Java config won · `@Import` for composing configuration classes · configuration class organization for a real project

**Day 263 — @Configuration, @Bean & proxyBeanMethods** · 🎥 45m · 💻 45m
`@Bean` methods: name (method name by default, or explicit), `initMethod`, `destroyMethod`, `autowireCandidate` · **inter-bean references**: calling one `@Bean` method from another and getting the singleton back, not a new object — because `@Configuration` classes are CGLIB-enhanced · proving it with a counter, then setting `proxyBeanMethods = false` (**"lite" mode**) and watching the behavior change · when lite mode is correct (no inter-bean calls) and its startup/native-image benefit · method parameters as injection points · `@Bean` returning an interface vs an implementation and its effect on proxying · `static @Bean` methods for `BeanFactoryPostProcessor`s and why they must be static · `@Import`, `@ImportSelector`, `@ImportBeanDefinitionRegistrar`

**Day 264 — Stereotypes & Component Scanning** · 🎥 40m · 💻 40m
`@Component` and its specializations: `@Service`, `@Repository`, `@Controller`, `@RestController`, `@Configuration` — and what each adds beyond documentation (`@Repository` gets exception translation, `@Controller` gets handler mapping) · `@ComponentScan`: `basePackages`, `basePackageClasses`, `includeFilters`, `excludeFilters`, `useDefaultFilters`, `lazyInit` · filter types: ANNOTATION, ASSIGNABLE_TYPE, ASPECTJ, REGEX, CUSTOM · **Spring Boot's implicit scan from `@SpringBootApplication`'s package downward** — and the classic "my bean isn't found" bug when a class lives outside it · bean naming conventions and `@Component("name")` · scanning cost at startup and how to keep it fast · meta-annotations: creating your own `@UseCase` composed stereotype

**Day 265 — Injection Types & Circular Dependencies** · 🎥 45m · 💻 45m
**Constructor injection** — the recommended default: immutable `final` fields, mandatory dependencies enforced at construction, trivially unit-testable without a container, and no `@Autowired` needed for a single constructor since Spring 4.3 · **setter injection** for optional dependencies and reconfiguration · **field injection** — why it's convenient and why it's wrong: hidden dependencies, no immutability, impossible to instantiate in a plain unit test, encourages god classes, and reflection-only access · `@Autowired(required = false)`, `Optional<T>`, and `ObjectProvider<T>` for optional beans · **circular dependencies**: how Spring's three-level singleton cache resolves them for setter/field injection, why constructor cycles fail outright, why Boot 2.6+ disables circular refs by default, and the correct fixes (extract a third collaborator, use an event, or `@Lazy` as a last resort) · injecting `List<T>`, `Map<String, T>`, and generic-typed beans

**Day 266 — @Autowired Resolution, @Qualifier & @Primary** · 🎥 40m · 💻 45m
The resolution algorithm: by type → if multiple, by `@Primary` → by `@Qualifier` → by parameter/field name → else `NoUniqueBeanDefinitionException` · `NoSuchBeanDefinitionException` and how to read its message · `@Qualifier` on the injection point and on the bean definition · **custom qualifier annotations** (`@Fast`, `@Postgres`) as a type-safe alternative to string qualifiers · `@Primary` for a sensible default and when it's a smell · `@Order`/`Ordered` for ordering injected collections · generic type resolution (`Repository<Order>` vs `Repository<User>`) · `@Resource` (by name) and `@Inject` (JSR-330) compared to `@Autowired` · injecting into `@Bean` method parameters

**Day 267 — Bean Scopes** · 🎥 40m · 💻 40m
**singleton** (one per container, the default — and *not* the singleton pattern) and its thread-safety obligation: no mutable instance state · **prototype** (a new instance per request, and the container does not manage its destruction) · web scopes: **request**, **session**, **application**, **websocket** · **the scoped-proxy problem**: injecting a prototype or request-scoped bean into a singleton captures one instance forever · four fixes compared: `@Scope(proxyMode = TARGET_CLASS)`, `ObjectProvider`/`ObjectFactory`, `Provider<T>`, and method injection with `@Lookup` · defining a **custom scope** (`Scope` interface + `CustomScopeConfigurer`), e.g. a tenant scope · scopes and virtual threads / reactive contexts

**Day 268 — Bean Lifecycle & Callbacks** · 🎥 45m · 💻 40m
The full lifecycle in order: instantiation → populate properties → `BeanNameAware`/`BeanFactoryAware`/`ApplicationContextAware` → `BeanPostProcessor.postProcessBeforeInitialization` → `@PostConstruct` → `InitializingBean.afterPropertiesSet` → custom `initMethod` → `BeanPostProcessor.postProcessAfterInitialization` (**where proxies are created**) → bean is ready → `@PreDestroy` → `DisposableBean.destroy` → custom `destroyMethod` · demonstrating every step with log statements · **why `@PostConstruct` runs before the proxy exists**, so self-calls there bypass AOP · `SmartInitializingSingleton` and `ApplicationRunner` as later hooks · `@Lazy` initialization and its startup-time vs fail-fast tradeoff · destruction and prototype beans

**Day 269 — BeanPostProcessor & BeanFactoryPostProcessor** · 🎥 45m · 💻 45m
`BeanFactoryPostProcessor` operates on **bean definitions** before instantiation (e.g. `PropertySourcesPlaceholderConfigurer` resolving `${...}`) · `BeanDefinitionRegistryPostProcessor` for registering new definitions programmatically (this is how `ConfigurationClassPostProcessor` and Spring Data repositories work) · `BeanPostProcessor` operates on **bean instances** — and is how `@Autowired`, `@Value`, `@PostConstruct`, `@Transactional`, `@Async`, `@Cacheable`, and every AOP proxy are actually implemented · writing your own: an auditing post-processor and a timing proxy · ordering with `PriorityOrdered`/`Ordered` · the caveat that a `BeanPostProcessor` itself is instantiated early and can't be advised · `BeanDefinition` API: registering beans dynamically at runtime

**Day 270 — @Value, Environment, Property Sources & Conversion** · 🎥 40m · 💻 45m
`@Value("${app.name}")` with defaults (`${app.name:fallback}`) and nested placeholders · injecting into fields, constructor parameters, and `@Bean` method parameters · `Environment` and `getProperty(key, type, default)` · `@PropertySource` for extra files (and why it doesn't support YAML) · **the property source hierarchy** and precedence order · `ConversionService`/`Converter`/`Formatter` and registering custom converters · `@Value` with SpEL, lists (`${servers}` split by comma), and `Duration`/`DataSize` binding (`30s`, `10MB`) · **why `@ConfigurationProperties` (Day 282) is better than scattering `@Value` everywhere** · secrets: never in `application.properties`, and where they belong instead

**Day 271 — Profiles & Environment-Specific Wiring** · 🎥 35m · 💻 40m
`@Profile` on `@Component`, `@Configuration`, and `@Bean` methods · profile expressions: `!prod`, `dev & !cloud`, `prod | staging` · activating via `spring.profiles.active`, `SPRING_PROFILES_ACTIVE`, JVM args, or programmatically · **`spring.profiles.include` and profile groups** (Boot 2.4+) · `spring.config.activate.on-profile` in property files · the default profile · profiles for environments (dev/test/staging/prod) vs features (with-kafka, embedded-db) and why mixing the two gets messy · `@ActiveProfiles` in tests · common patterns: mock external services in `dev`, real ones in `prod` · profile-specific property files and their precedence

**Day 272 — @Conditional & the @ConditionalOn* Family** · 🎥 40m · 💻 40m
The `Condition` interface and `matches(ConditionContext, AnnotatedTypeMetadata)` · writing a custom `@ConditionalOnFeatureFlag` · **Spring Boot's conditions**: `@ConditionalOnClass`/`OnMissingClass` (the mechanism that makes auto-configuration classpath-aware), `@ConditionalOnBean`/`OnMissingBean` (**the "user override wins" pattern**), `@ConditionalOnProperty` with `havingValue` and `matchIfMissing`, `@ConditionalOnResource`, `@ConditionalOnWebApplication`, `@ConditionalOnExpression`, `@ConditionalOnJava`, `@ConditionalOnCloudPlatform`, `@ConditionalOnThreading` · **evaluation ordering hazards** with `@ConditionalOnBean` and why auto-configuration ordering matters · debugging with `--debug` and the condition evaluation report · this is the exact machinery you'll use on Day 286 to write your own starter

**Day 273 — Spring Expression Language (SpEL)** · 🎥 35m · 💻 35m
`#{...}` (expression) vs `${...}` (property placeholder) and combining them · literals, operators, ternary and Elvis (`?:`), safe navigation (`?.`) · property and method access on beans (`#{userService.defaultRole}`) · collection selection `.?[...]`, projection `.![...]`, and map access · `T()` for static access and `new` for construction · variables: `#root`, `#this`, `#p0`/`#paramName`, `#result`, `#returnObject` · **where SpEL actually shows up in real work**: `@Value`, `@Scheduled(cron = "${...}")`, `@Cacheable(key = "#id")`, `@PreAuthorize("hasRole('ADMIN') and #userId == authentication.principal.id")`, Spring Data `@Query` · parsing SpEL programmatically with `SpelExpressionParser` and `StandardEvaluationContext` · **SpEL injection as a real security vulnerability** and never evaluating user input

**Day 274 — AOP Concepts & Terminology** · 🎥 40m · 💻 35m
Cross-cutting concerns: logging, metrics, security, transactions, caching, retry, auditing — and the code duplication they cause without AOP · **the vocabulary**: aspect, join point, pointcut, advice, target object, proxy, weaving, introduction · Spring AOP (proxy-based, method execution join points only) vs full AspectJ (compile-time/load-time weaving, field and constructor join points) · what Spring uses AOP for internally: `@Transactional`, `@Async`, `@Cacheable`, `@Retryable`, `@PreAuthorize`, `@Validated` · adding `spring-boot-starter-aop` · when AOP clarifies a codebase and when it makes behavior invisible and undebuggable

**Day 275 — @Aspect: Pointcuts, Advice Types & Ordering** · 🎥 50m · 💻 50m
`@Aspect` + `@Component` and `@EnableAspectJAutoProxy` (auto-enabled by Boot) · **pointcut designators**: `execution()` (the full signature pattern grammar with wildcards), `within()`, `@annotation()`, `@within()`, `bean()`, `args()`, `this()`, `target()`, `@args` · combining with `&&`, `||`, `!` · named pointcuts with `@Pointcut` for reuse · **advice types**: `@Before`, `@After` (finally), `@AfterReturning` (with `returning`), `@AfterThrowing` (with `throwing`), and `@Around` with `ProceedingJoinPoint.proceed()` — including modifying arguments and the return value · `JoinPoint` metadata: signature, args, target · **`@Order` on aspects** and the nesting semantics · building three real aspects: method timing to Micrometer, an `@Auditable` audit-log aspect, and a `@RetryOnFailure` aspect

**Day 276 — Proxies: JDK Dynamic vs CGLIB & the Self-Invocation Trap** · 🎥 45m · 💻 45m
How Spring creates proxies inside `AbstractAutoProxyCreator` (a `BeanPostProcessor`) · **JDK dynamic proxies** (interface-based, `Proxy.newProxyInstance`) vs **CGLIB** (subclass-based, no interface required) · `proxyTargetClass = true` and why Boot forces CGLIB by default · CGLIB's constraints: no `final` classes or methods, needs a usable constructor, and `final` fields aren't copied · **the self-invocation problem**: an internal `this.method()` call bypasses the proxy entirely, silently breaking `@Transactional`, `@Cacheable`, `@Async`, and `@PreAuthorize` — demonstrated live · the four fixes: split into another bean (best), self-injection with `@Lazy`, `AopContext.currentProxy()` with `exposeProxy = true`, or AspectJ load-time weaving · why `private` and `static` methods can never be advised · proxy performance overhead measured with JMH

**Day 277 — Application Events & Decoupled Communication** · 🎥 45m · 💻 45m
`ApplicationEventPublisher.publishEvent` and plain POJO events (no `ApplicationEvent` subclass needed since Spring 4.2) · `@EventListener` with a payload parameter and a `condition` SpEL filter · listener ordering with `@Order` · **synchronous by default** — the listener runs in the caller's thread and transaction, and an exception propagates back · `@Async` listeners with a proper `TaskExecutor` and their independent error handling · **`@TransactionalEventListener`** with `AFTER_COMMIT` (the pattern that prevents publishing events for rolled-back work), `AFTER_ROLLBACK`, `AFTER_COMPLETION`, `BEFORE_COMMIT`, and `fallbackExecution` · built-in context events (`ContextRefreshed`, `ApplicationReady`, `ContextClosed`) · returning a value from a listener to publish a follow-up event · events for decoupling modules inside a monolith, and where they stop being enough (foreshadowing Kafka on Day 382)

**Day 278 — Resources, i18n, Validation, @Scheduled & @Async** · 🎥 50m · 💻 50m
The `Resource` abstraction: `ClassPathResource`, `FileSystemResource`, `UrlResource`, `ResourceLoader`, and `@Value("classpath:data/seed.json")` including wildcard patterns · **internationalization**: `MessageSource`, `ResourceBundleMessageSource` vs `ReloadableResourceBundleMessageSource`, `messages_en.properties`/`messages_fr.properties`, `LocaleResolver` (Accept-Language, cookie, session), `LocaleChangeInterceptor`, and parameterized messages · **`Validator`** and `LocalValidatorFactoryBean` (full Bean Validation coverage on Days 305–306) · **task execution**: `@EnableScheduling`, `@Scheduled` with `fixedRate`/`fixedDelay`/`initialDelay`/`cron` (six-field syntax and `zone`), and the single-threaded default scheduler that serializes your jobs — plus the `ThreadPoolTaskScheduler` fix · **`@EnableAsync` and `@Async`** returning `void`/`Future`/`CompletableFuture`, the self-invocation trap again, `AsyncUncaughtExceptionHandler`, and configuring a bounded `ThreadPoolTaskExecutor` instead of the unbounded `SimpleAsyncTaskExecutor` default · multi-instance scheduling with ShedLock

---

# PHASE 13 — Spring Boot
**Days 279–298 · Weeks 41–44**
> **Milestone project:** a production-shaped Spring Boot service with layered config, custom actuator health, structured logging, and a custom starter.

**Day 279 — Spring Boot: Philosophy, Initializr & Project Anatomy** · 🎥 40m · 💻 45m
What Boot adds to Spring: auto-configuration, starters, embedded servers, production-ready features (Actuator), and no XML · "opinionated defaults with easy overrides" as the design principle · **start.spring.io** walkthrough: project metadata, packaging, Java version, and dependency selection · the generated project tour: `pom.xml`, `Application.java`, `@SpringBootApplication` (= `@SpringBootConfiguration` + `@EnableAutoConfiguration` + `@ComponentScan`), `src/main/resources/application.properties`, `static/`, `templates/`, `mvnw` wrapper · `SpringApplication.run` and what it does step by step · package structure conventions and the **"put your main class in the root package"** rule · Boot 3.x baseline: Java 17+, Jakarta EE 9+

**Day 280 — Starters: What They Are & The BOM That Powers Them** · 🎥 40m · 💻 40m
A starter is a curated, empty POM of transitive dependencies · opening `spring-boot-starter-web`'s POM live to see exactly what you get (starter, starter-json, starter-tomcat, spring-web, spring-webmvc) · **`spring-boot-starter-parent`**: dependency management, plugin management, Java version property, resource filtering, and UTF-8 defaults · **importing `spring-boot-dependencies` as a BOM** when you already have a corporate parent · why you never write `<version>` for a managed dependency, and how to override one when you must · `spring-boot-starter` (core: context, autoconfigure, logging, YAML) · swapping `starter-tomcat` for `starter-jetty`/`starter-undertow` with an exclusion · the complete starter catalogue is in **Appendix A**

**Day 281 — Configuration Files: Properties, YAML & Relaxed Binding** · 🎥 40m · 💻 40m
`application.properties` vs `application.yml`: syntax, nesting, lists, multi-document files with `---`, and multiline strings · **relaxed binding**: `spring.datasource.maxPoolSize`, `max-pool-size`, `MAX_POOL_SIZE`, and `SPRING_DATASOURCE_MAX_POOL_SIZE` all bind to the same property — and the canonical kebab-case recommendation · placeholder resolution `${...}` and referencing other properties · `random.*` values · type conversion: `Duration` (`30s`, `PT30S`), `DataSize` (`10MB`), `List`/`Map`, enums · profile-specific files (`application-prod.yml`) and `spring.config.activate.on-profile` · `spring.config.import` for extra files, optional files, and config trees · the complete list of common properties and where to look them up

**Day 282 — @ConfigurationProperties: Type-Safe Configuration** · 🎥 45m · 💻 50m
`@ConfigurationProperties(prefix = "app.mail")` on a class, plus `@EnableConfigurationProperties` or `@ConfigurationPropertiesScan` · **constructor binding with records and `@ConstructorBinding`** (implicit for a single-constructor class since Boot 3) for immutable config · binding nested objects, `List<T>`, `Map<String, T>`, `Duration`, `DataSize`, and enums · **`@Validated` + Jakarta Validation on config** so the app fails fast at startup with a readable report instead of failing at 3 a.m. · `@DefaultValue` in constructor binding · `spring-boot-configuration-processor` for IDE autocomplete of your own properties · `@ConfigurationProperties` on a `@Bean` method for third-party classes · **why this beats scattered `@Value`**: grouping, validation, testability, documentation, and refactorability · testing config binding with `ApplicationContextRunner`

**Day 283 — Externalized Configuration & Precedence** · 🎥 40m · 💻 40m
**The full precedence order** (highest wins): devtools global settings → `@TestPropertySource` → command-line args → `SPRING_APPLICATION_JSON` → servlet params → JNDI → System properties → OS environment variables → profile-specific files outside the jar → profile-specific files inside the jar → `application.yml` outside the jar → inside the jar → `@PropertySource` → default properties · demonstrating override at each level live · **`SPRING_CONFIG_LOCATION` / `spring.config.additional-location`** for mounted config in containers · the 12-factor config principle and why config belongs in the environment, not the artifact · **config trees** (`spring.config.import=configtree:/etc/secrets/`) for Kubernetes secrets mounted as files · handling secrets: env vars, Vault, AWS Secrets Manager, sealed secrets — and never in Git · `spring-boot-starter-actuator`'s `/env` endpoint and sanitizing sensitive keys

**Day 284 — Profiles in Boot: Groups, Overrides & Patterns** · 🎥 35m · 💻 35m
Profile-specific property files and the merge (not replace) behavior with the base file · **profile groups**: `spring.profiles.group.prod=prod-db,prod-cache,monitoring` so one activation flag pulls in several · `spring.profiles.include` vs groups and which to prefer · **the deprecated `spring.profiles` key** and its replacement `spring.config.activate.on-profile` · multi-document YAML with per-document activation · `@Profile` on beans revisited with Boot-specific patterns: an in-memory `MailSender` in `dev`, SES in `prod` · profile pitfalls: forgetting to activate in production, profile-dependent bean graphs that only fail in prod, and the "works on my machine" class of bugs · **testing with `@ActiveProfiles`** and profile-aware Testcontainers

**Day 285 — Auto-Configuration Internals** · 🎥 50m · 💻 45m
`@EnableAutoConfiguration` → `AutoConfigurationImportSelector` → reading `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` (which replaced `spring.factories` in Boot 2.7/3.0) · opening `DataSourceAutoConfiguration`, `JpaRepositoriesAutoConfiguration`, and `WebMvcAutoConfiguration` and reading them line by line · **how `@ConditionalOnClass` makes it classpath-driven** and `@ConditionalOnMissingBean` makes your bean always win · `@AutoConfigureBefore`/`@AutoConfigureAfter`/`@AutoConfigureOrder` · **the condition evaluation report**: `--debug`, the Actuator `/conditions` endpoint, and reading "Positive matches" / "Negative matches" / "Exclusions" to answer *why is this bean here* and *why isn't it* · excluding an auto-configuration three ways (`@SpringBootApplication(exclude = ...)`, `spring.autoconfigure.exclude`, and removing the dependency) · startup-time impact and `spring-context-indexer`

**Day 286 — Writing Your Own Auto-Configuration & Starter** · 🎥 50m · 💻 60m
The two-module convention: `acme-spring-boot-starter` (dependencies only) + `acme-spring-boot-autoconfigure` (the code) — and when a single module is fine · writing the `@AutoConfiguration` class with `@ConditionalOnClass`, `@ConditionalOnMissingBean`, `@ConditionalOnProperty`, and `@EnableConfigurationProperties` · registering it in `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` · exposing `@ConfigurationProperties` with the configuration processor for IDE hints · providing sensible defaults and letting the user override every bean · adding `spring-configuration-metadata.json` descriptions and deprecations · **testing with `ApplicationContextRunner`**: asserting a bean exists, doesn't exist, gets overridden, and fails with a helpful message · naming rules (never prefix with `spring-boot`) · **build a real one**: an `@Auditable` audit-logging starter with configurable sinks, published to a local repo and consumed from a second project

**Day 287 — Embedded Servers, Tuning & Virtual Threads** · 🎥 45m · 💻 45m
How the embedded server is created (`ServletWebServerFactory`) and the `WebServerFactoryCustomizer` extension point · `server.port` (including `0` for a random port), `server.address`, `server.servlet.context-path` · **Tomcat tuning**: `server.tomcat.threads.max` / `threads.min-spare`, `accept-count`, `max-connections`, `connection-timeout`, `keep-alive-timeout`, `max-http-form-post-size`, `max-swallow-size`, access logs · switching to Jetty or Undertow with exclusions, and when each is worth it · HTTPS: `server.ssl.*`, keystores, PKCS12, and SSL bundles (`spring.ssl.bundle.*`, Boot 3.1+) · HTTP/2 with `server.http2.enabled` · response compression settings · **`spring.threads.virtual.enabled=true`** — what it changes, what to check first (pinning, `ThreadLocal` usage, connection pool sizing), and a before/after load test · graceful shutdown settings

**Day 288 — Logging: SLF4J, Logback, MDC & Structured Logs** · 🎥 50m · 💻 50m
The logging façade landscape: SLF4J API, Logback (Boot's default), Log4j2, JUL, Commons Logging — and how `spring-boot-starter-logging` bridges them all so one config controls everything · `LoggerFactory.getLogger` and `@Slf4j` from Lombok · **levels** (TRACE/DEBUG/INFO/WARN/ERROR) and choosing correctly · **parameterized logging** `log.debug("user {} order {}", id, orderId)` and why string concatenation in a log call wastes CPU · `logging.level.*`, `logging.pattern.console/file`, `logging.file.name/path`, rolling policies · `logback-spring.xml` with `<springProfile>` and `<springProperty>` · **MDC for correlation ids**: putting a request id in a filter, clearing it in a finally block, including `%X{traceId}` in the pattern, and propagating it across `@Async` and executors · **structured JSON logging** (`logging.structured.format.console=ecs|logstash|gelf` in Boot 3.4+, or logstash-logback-encoder) for log aggregation · what never to log: passwords, tokens, PII, full card numbers · async appenders and their queue/drop behavior

**Day 289 — Log4j2, Async Logging & Log Shipping** · 🎥 35m · 💻 35m
Swapping Logback for Log4j2 (`spring-boot-starter-log4j2` + excluding `spring-boot-starter-logging`) · `log4j2-spring.xml` structure: appenders, loggers, root, patterns · **async loggers** with the LMAX Disruptor and their throughput advantage under heavy logging · garbage-free mode · `RollingFileAppender` policies (size, time, composite) and retention · Log4Shell (CVE-2021-44228): what happened, why JNDI lookup in message interpolation was catastrophic, and the lesson about supply-chain risk · shipping logs: stdout in containers (the 12-factor way), Filebeat/Fluent Bit/Promtail sidecars, and the ELK/Loki pipelines built on Day 412 · sampling and rate-limiting noisy loggers

**Day 290 — DevTools, Hot Reload & Developer Experience** · 🎥 30m · 💻 35m
`spring-boot-devtools`: automatic restart via the two-classloader trick (base loader for jars, restart loader for your classes) — and why it's fast · trigger files and `spring.devtools.restart.*` exclusions/additional-paths · LiveReload for browser refresh · property defaults DevTools sets in development (template caching off, more logging) · remote debugging and `spring.devtools.remote.secret` (and why you should not use it in production) · DevTools is automatically disabled in a repackaged jar · **alternatives**: JRebel, HotswapAgent, and plain JVM hot-swap limits · `spring-boot:run` vs IDE run configs · docker-compose support (`spring-boot-docker-compose`, Boot 3.1+) that starts your Postgres/Redis automatically on `bootRun` · Testcontainers at development time with `@ServiceConnection` and `SpringApplication.from(...).with(...)`

**Day 291 — Actuator I: Endpoints, Health, Info & Metrics** · 🎥 45m · 💻 50m
Adding `spring-boot-starter-actuator` and what you get for free · **the endpoint catalogue**: `/health`, `/info`, `/metrics`, `/env`, `/configprops`, `/beans`, `/mappings`, `/conditions`, `/loggers`, `/threaddump`, `/heapdump`, `/httpexchanges`, `/scheduledtasks`, `/caches`, `/quartz`, `/flyway`, `/liquibase`, `/startup`, `/sbom` · exposure control: `management.endpoints.web.exposure.include/exclude`, `management.endpoint.<id>.access` (Boot 3.4 replaced `enabled`) · **moving Actuator to a separate port** (`management.server.port`) so it's not internet-facing · **`/health`**: status aggregation, `show-details`, `show-components`, built-in indicators (db, diskSpace, ping, redis, kafka, mail), and health **groups** (`liveness`, `readiness`) mapped to Kubernetes probes · `/info` contributors: build info (`spring-boot-maven-plugin` `build-info`), git info (`git-commit-id-plugin`), env, java, os · `/metrics` and drilling into a metric with tags · `/loggers` for changing log level at runtime without a redeploy — the single most useful production trick in this lesson

**Day 292 — Actuator II: Custom Endpoints, Health Indicators & Security** · 🎥 45m · 💻 50m
Writing a **`HealthIndicator`** for a downstream dependency, returning `Health.up().withDetail(...)` / `.down(exception)` · `ReactiveHealthIndicator` · `AbstractHealthIndicator` and `HealthContributor` composition · **health groups for Kubernetes**: `management.endpoint.health.group.readiness.include=readinessState,db` and `.group.liveness.include=livenessState` — plus why liveness must never depend on an external service · `AvailabilityChangeEvent`, `LivenessState`, and `ReadinessState` for controlled shutdown · **custom endpoints**: `@Endpoint` + `@ReadOperation`/`@WriteOperation`/`@DeleteOperation`, `@WebEndpoint`, `@EndpointWebExtension`, and `@Selector` parameters · custom `InfoContributor` · **securing Actuator** with Spring Security (`EndpointRequest.toAnyEndpoint()`), a dedicated role, and network-level restriction · sanitizing `/env` and `/configprops` values · `/heapdump` and `/threaddump` as production forensics — and why they must never be public

**Day 293 — Testing in Boot: @SpringBootTest & Context Caching** · 🎥 45m · 💻 50m
`spring-boot-starter-test` contents: JUnit 5, Spring Test, Boot Test, AssertJ, Hamcrest, Mockito, JSONassert, JsonPath, Awaitility, XMLUnit · **`@SpringBootTest`** and its `webEnvironment` options: MOCK (default), RANDOM_PORT, DEFINED_PORT, NONE · `@LocalServerPort` and `TestRestTemplate` vs `WebTestClient` · **the test context cache**: how the context key is computed, why a single differing property or `@MockBean` forces a whole new context, and how to keep your suite from taking 10 minutes · `@DirtiesContext` and why it's usually the wrong answer · `@TestPropertySource`, `@DynamicPropertySource`, and `properties = {...}` · `@TestConfiguration` and `@Import` for test-only beans · `@Sql` and `@SqlGroup` for data setup · transactional tests and `@Transactional` rollback (and why it can hide bugs that appear in production)

**Day 294 — Test Slices: @WebMvcTest, @DataJpaTest & Friends** · 🎥 45m · 💻 55m
Why slices exist: load only the beans that layer needs and cut startup from seconds to milliseconds · **`@WebMvcTest`**: loads controllers, advice, converters, filters, and `MockMvc` — but no services or repositories, so collaborators must be mocked · `MockMvc` API: `perform`, `andExpect(status/jsonPath/content/header)`, `andDo(print())`, `andReturn` · `@MockitoBean` (Boot 3.4+, replacing `@MockBean`) and `@MockitoSpyBean` · **`@DataJpaTest`**: in-memory or Testcontainers database, `TestEntityManager`, transactional rollback, `@AutoConfigureTestDatabase(replace = NONE)` to test against real Postgres · other slices: `@JsonTest` (`JacksonTester`), `@RestClientTest` (`MockRestServiceServer`), `@JdbcTest`, `@DataRedisTest`, `@DataMongoTest`, `@WebFluxTest`, `@GraphQlTest` · `@AutoConfigureMockMvc` on a full `@SpringBootTest` when a slice isn't enough · a testing strategy for a real service: what to unit test, what to slice, and what to run end-to-end

**Day 295 — Packaging: Executable JARs, Layers & Container Images** · 🎥 45m · 💻 50m
The **executable jar format**: `BOOT-INF/classes`, `BOOT-INF/lib`, `org/springframework/boot/loader`, `MANIFEST.MF` with `Main-Class: JarLauncher` and `Start-Class: your.App` — and why nested jars need a custom classloader · `spring-boot-maven-plugin` `repackage` and the `.original` artifact · running with `java -jar` and passing JVM flags · **layered jars**: `layers.idx`, `java -Djarmode=tools extract` (Boot 3.3+) / `-Djarmode=layertools`, and the Dockerfile that caches dependencies separately from your code for fast rebuilds (implemented on Day 422) · **Cloud Native Buildpacks**: `mvn spring-boot:build-image`, Paketo buildpacks, automatic JVM sizing and CDS, and image customization without a Dockerfile · WAR packaging for legacy app servers with `SpringBootServletInitializer` · CDS/AOT cache (`-XX:ArchiveClassesAtExit`) for faster startup

**Day 296 — Runtime: Runners, Lifecycle, Graceful Shutdown & Exit Codes** · 🎥 40m · 💻 40m
`SpringApplication` customization: banner, `setWebApplicationType`, `setAdditionalProfiles`, `setDefaultProperties`, `setLazyInitialization`, and the `SpringApplicationBuilder` fluent API · **`CommandLineRunner` vs `ApplicationRunner`** (raw `String[]` vs parsed `ApplicationArguments`), ordering with `@Order`, and their use for seeding data and one-shot jobs · application events in order: `ApplicationStartingEvent` → `EnvironmentPrepared` → `ContextInitialized` → `ContextPrepared` → `ContextLoaded` → `Started` → `Ready` → `Failed` · `ApplicationReadyEvent` as the correct place to start background work · **graceful shutdown**: `server.shutdown=graceful` + `spring.lifecycle.timeout-per-shutdown-phase`, what happens to in-flight requests, `SmartLifecycle` phases, and how this maps to `SIGTERM` and Kubernetes `terminationGracePeriodSeconds` · `ExitCodeGenerator` and `SpringApplication.exit` for batch jobs · `FailureAnalyzer` for readable startup failure messages, and writing your own

**Day 297 — Spring Boot 3.x: Jakarta, Migration & What Changed** · 🎥 40m · 💻 40m
The **`javax.*` → `jakarta.*` namespace migration**: what it affects (persistence, servlet, validation, annotation, transaction), how to do it (OpenRewrite recipes, IntelliJ migration, or manual), and third-party libraries that must be upgraded in lockstep · Java 17 baseline (21 recommended) · **Boot 3.x removals and replacements**: `WebSecurityConfigurerAdapter` → `SecurityFilterChain` bean, `antMatchers` → `requestMatchers`, `@MockBean` → `@MockitoBean`, Spring Cloud Sleuth → Micrometer Tracing, `spring.redis.*` → `spring.data.redis.*`, trailing-slash matching removed, `management.endpoint.*.enabled` → `.access` · property migration with `spring-boot-properties-migrator` · Hibernate 6 changes that bite (JPQL strictness, `@Enumerated` handling, ID generator defaults, `NUMERIC` mapping) · the migration checklist and running it on a real Boot 2.7 project

**Day 298 — AOT, Native Images & Production Project Structure** · 🎥 50m · 💻 55m
**Spring AOT**: what `process-aot` generates (bean definitions as source, reflection/resource/proxy hints) and how it removes runtime reflection · running an AOT-optimized JVM app (`spring.aot.enabled`) for faster startup without going native · **GraalVM native images** with `spring-boot-maven-plugin` `native` profile: closed-world assumption, build time and memory cost, startup in ~50 ms, tiny memory footprint, and the peak-throughput tradeoff · `RuntimeHintsRegistrar`, `@RegisterReflectionForBinding`, and the tracing agent for uncovered reflection · what breaks in native (dynamic proxies, `Class.forName`, resource loading, some libraries) · when native is worth it (serverless, CLI, scale-to-zero) and when it isn't · **project structure for a real service**: package-by-feature vs package-by-layer, a recommended layout (`api`, `application`, `domain`, `infrastructure`, `config`), ArchUnit rules to enforce it, and a production readiness checklist for everything covered in this phase

---

# PHASE 14 — Spring MVC & REST APIs
**Days 299–316 · Weeks 44–46**
> **Milestone project:** a fully documented, validated, versioned REST API with consistent error handling and an OpenAPI spec.

**Day 299 — Spring MVC Architecture & DispatcherServlet** · 🎥 45m · 💻 40m
The Front Controller pattern and `DispatcherServlet` as its implementation · the **complete request flow**: servlet container → filter chain → DispatcherServlet → `HandlerMapping` → `HandlerAdapter` → `HandlerInterceptor.preHandle` → argument resolution → your controller method → return value handling → `HandlerInterceptor.postHandle` → `ViewResolver` or message converter → response → `afterCompletion` · the special beans: `HandlerMapping` (`RequestMappingHandlerMapping`), `HandlerAdapter`, `HandlerExceptionResolver`, `ViewResolver`, `LocaleResolver`, `MultipartResolver` · `WebMvcAutoConfiguration` and what Boot configures for you · customizing with `WebMvcConfigurer` vs `@EnableWebMvc` (**and why adding `@EnableWebMvc` in Boot disables auto-configuration and breaks things**) · the `/mappings` actuator endpoint to see every registered route

**Day 300 — @Controller, @RestController & Request Mapping** · 🎥 40m · 💻 45m
`@Controller` (returns view names) vs `@RestController` (= `@Controller` + `@ResponseBody`) · `@RequestMapping` at class and method level and how paths compose · shortcuts: `@GetMapping`, `@PostMapping`, `@PutMapping`, `@PatchMapping`, `@DeleteMapping` · mapping attributes: `path`, `method`, `params`, `headers`, `consumes`, `produces` · **path pattern syntax**: `PathPattern` (the Boot 3 default) vs `AntPathMatcher`, `{var}`, `{var:regex}`, `*`, `**`, and the trailing-slash change in Boot 3 · ambiguous mapping errors and pattern precedence rules · organizing controllers by resource, keeping them thin, and the controller → service → repository layering rule

**Day 301 — Request Data: Path Variables, Params, Headers & Cookies** · 🎥 40m · 💻 45m
`@PathVariable` with name inference, `required`, `Map<String, String>`, and regex-constrained segments · `@RequestParam` with `defaultValue`, `required`, `List<T>` for repeated params, `MultiValueMap`, and `Map<String, String>` for arbitrary params · **`@RequestParam` vs `@PathVariable`**: identity in the path, filters in the query · `@RequestHeader` and `@CookieValue` with defaults · `@ModelAttribute` for binding flat query params to an object (with the `@Valid` interaction) · `@MatrixVariable` and enabling it · injecting `HttpServletRequest`/`Response`, `Principal`, `Locale`, `TimeZone`, `UriComponentsBuilder`, `HttpMethod` · **the complete list of supported argument types** as a reference table · custom argument resolution with `HandlerMethodArgumentResolver` (e.g. `@CurrentUser`)

**Day 302 — Request/Response Bodies & ResponseEntity** · 🎥 40m · 💻 45m
`@RequestBody` and deserialization via `HttpMessageConverter` · the body can only be read once (and `ContentCachingRequestWrapper` when you need it twice) · `@ResponseBody` and implicit serialization · **`ResponseEntity<T>`**: `ok`, `created(uri)`, `noContent`, `accepted`, `badRequest`, `notFound`, `status(...)`, plus `.header()`, `.contentType()`, `.eTag()`, `.cacheControl()`, `.location()` · when to return the DTO directly, `ResponseEntity<T>`, or `ResponseEntity<Void>` · `@ResponseStatus` on methods and exception classes · building a `Location` header for 201 with `ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id)` · returning `void`, `Optional<T>` (and the 404 behavior), `Callable`, `CompletableFuture`, and `ResponseBodyEmitter`

**Day 303 — HttpMessageConverters & Content Negotiation** · 🎥 40m · 💻 40m
The `HttpMessageConverter` SPI and the default chain (`MappingJackson2HttpMessageConverter`, `StringHttpMessageConverter`, `ByteArrayHttpMessageConverter`, `ResourceHttpMessageConverter`, form converters) · adding XML with `jackson-dataformat-xml`, and CBOR/Smile/YAML converters · **customizing Jackson in Boot**: `spring.jackson.*` properties, `Jackson2ObjectMapperBuilderCustomizer` (the recommended way), and why replacing the `ObjectMapper` bean outright breaks other things · `@JsonComponent` for registering serializers · registering custom converters via `WebMvcConfigurer.extendMessageConverters` vs `configureMessageConverters` · **content negotiation strategy**: `Accept` header (default), `?format=json` parameter, path extension (removed in Boot 3), and `ContentNegotiationConfigurer` · `produces`/`consumes` and 406/415 responses · custom media types for versioning (Day 312)

**Day 304 — Data Binding, Formatters & @ModelAttribute** · 🎥 35m · 💻 40m
`WebDataBinder` and how query/form parameters become objects · `@InitBinder` methods for per-controller customization: registering custom editors, trimming empty strings to null, and **disallowing fields to prevent mass-assignment vulnerabilities** (`setDisallowedFields`) · `PropertyEditor` (legacy) vs **`Converter<S,T>` and `Formatter<T>`** (modern), and registering them with `WebMvcConfigurer.addFormatters` · `@DateTimeFormat(iso = ISO.DATE)` and `@NumberFormat` on fields · binding nested objects, lists, and maps from form data · `BindingResult` and binding errors vs validation errors · `@ModelAttribute` on a method to pre-populate the model · the security risk of binding directly to entities, and why request DTOs matter

**Day 305 — Bean Validation I: Constraints, @Valid & Error Reporting** · 🎥 45m · 💻 50m
Jakarta Bean Validation (JSR-380) and the Hibernate Validator implementation, added via **`spring-boot-starter-validation`** (not included in web by default in Boot 3) · **built-in constraints**: `@NotNull`, `@NotEmpty`, `@NotBlank` (and the precise difference), `@Size`, `@Min`/`@Max`, `@Positive`/`@Negative`/`@PositiveOrZero`, `@DecimalMin`/`@DecimalMax`, `@Digits`, `@Email`, `@Pattern`, `@Past`/`@PastOrPresent`/`@Future`, `@AssertTrue`/`@AssertFalse` · Hibernate extras: `@URL`, `@CreditCardNumber`, `@Range`, `@Length`, `@UniqueElements` · **`@Valid` on `@RequestBody`** producing `MethodArgumentNotValidException` → 400, and on `@ModelAttribute` producing `BindException` · **`@Validated` on the class for `@RequestParam`/`@PathVariable` constraints** producing `ConstraintViolationException` · cascading validation into nested objects and collections with `@Valid` on the field · validating records and constructor parameters · `message`, `{placeholders}`, and `ValidationMessages.properties`

**Day 306 — Bean Validation II: Custom Constraints, Groups & Cross-Field Rules** · 🎥 45m · 💻 50m
Writing a custom constraint: the annotation (`@Constraint(validatedBy = ...)`, `message`, `groups`, `payload`) plus a `ConstraintValidator<A, T>` with `initialize` and `isValid` · injecting Spring beans into a validator (e.g. checking email uniqueness against a repository — **and why that's a race condition without a DB unique constraint**) · **class-level constraints for cross-field validation** (`@PasswordsMatch`, `@ValidDateRange`) and customizing the violation's property path with `ConstraintValidatorContext` · **validation groups**: defining marker interfaces, `@Validated(OnCreate.class)`, `@GroupSequence` for ordered validation, and default group redefinition · composed constraints · programmatic validation with the injected `Validator` · **validation at the right layer**: request DTO validation vs domain invariants enforced in the constructor · i18n of messages via `MessageSource` and `LocalValidatorFactoryBean`

**Day 307 — Exception Handling: @ExceptionHandler & @ControllerAdvice** · 🎥 45m · 💻 50m
The default Boot error handling: `BasicErrorController`, `/error`, the whitelabel page, and `server.error.include-message/include-stacktrace/include-binding-errors` · **`@ExceptionHandler`** on a controller for local handling, with `Exception` parameters, `WebRequest`, and multiple exception types per method · **`@RestControllerAdvice`** for global handling, scoped by `basePackages`, `assignableTypes`, or `annotations`, and ordered with `@Order` · handler method resolution (most specific exception wins) · `@ResponseStatus` on custom exception classes vs returning `ResponseEntity` (and why the latter gives you control) · `ResponseStatusException` for quick one-offs · **extending `ResponseEntityExceptionHandler`** to override Spring's own exceptions (`MethodArgumentNotValidException`, `HttpMessageNotReadableException`, `HttpRequestMethodNotSupportedException`, `NoHandlerFoundException`, `MissingServletRequestParameterException`, `TypeMismatchException`) · mapping `DataIntegrityViolationException` and `OptimisticLockException` to 409 · **logging strategy**: log 5xx with stack traces, log 4xx at debug, and never log-and-rethrow · what must never appear in an error response

**Day 308 — Problem Details (RFC 9457) & Error Contract Design** · 🎥 40m · 💻 45m
The RFC 9457/7807 `application/problem+json` format: `type`, `title`, `status`, `detail`, `instance`, plus extensions · **Spring 6's built-in support**: `ProblemDetail`, `ErrorResponse`, `ErrorResponseException`, and `spring.mvc.problemdetails.enabled=true` · `ProblemDetail.forStatusAndDetail`, `setType`, `setProperty` for custom fields · designing your error contract: a stable machine-readable `code`, a human `message`, a `traceId` that matches your logs and traces, a `timestamp`, and a `violations` array with `field`/`rejectedValue`/`message` · mapping validation failures into that shape · **error catalogue**: documenting every code, keeping them stable across versions, and treating them as part of your API contract · localizing error messages · consistent errors across MVC, WebFlux, and the gateway

**Day 309 — Interceptors, Filters & Request Logging** · 🎥 40m · 💻 45m
`HandlerInterceptor`: `preHandle` (return false to stop), `postHandle` (before view rendering, skipped on exception), `afterCompletion` (always runs) · registering with `WebMvcConfigurer.addInterceptors`, `addPathPatterns`, `excludePathPatterns` · **filter vs interceptor**: filters are servlet-level and see every request including static resources and errors; interceptors are Spring-level and know the handler method · ordering: `FilterRegistrationBean.setOrder`, `@Order`, and `OrderedFilter` constants · **practical implementations**: a correlation-id filter that sets MDC and an `X-Request-Id` response header, a request/response logging filter using `ContentCachingRequestWrapper`/`ContentCachingResponseWrapper` with body-size limits and sensitive-field masking, a timing interceptor feeding Micrometer, and a tenant-resolution interceptor · Boot's `CommonsRequestLoggingFilter` and Actuator's `httpexchanges` · where Spring Security's filter chain sits relative to yours (Day 336)

**Day 310 — File Upload & Download** · 🎥 40m · 💻 45m
`multipart/form-data` on the wire · `MultipartFile`: `getOriginalFilename`, `getContentType`, `getSize`, `getBytes`, `getInputStream`, `transferTo` · single, multiple (`MultipartFile[]`, `List<MultipartFile>`), and mixed JSON + file requests with `@RequestPart` · limits: `spring.servlet.multipart.max-file-size`, `max-request-size`, `file-size-threshold`, `location`, and handling `MaxUploadSizeExceededException` · **security**: validating content type by magic bytes rather than trusting the header or extension, sanitizing filenames against path traversal (`../`), generating server-side names, storing outside the web root, virus scanning, and size limits enforced before buffering · **download**: `ResponseEntity<Resource>`, `Content-Disposition` (inline vs attachment, RFC 5987 filename encoding), `Content-Length`, range requests · streaming large files with `InputStreamResource` and `StreamingResponseBody` to avoid loading into memory · uploading to S3 with presigned URLs instead of proxying through your app

**Day 311 — Async MVC, Streaming & Server-Sent Events** · 🎥 45m · 💻 45m
The servlet async model (`AsyncContext`) and how it frees the request thread while work continues · returning **`Callable<T>`** (Spring runs it on a `TaskExecutor`) vs **`DeferredResult<T>`** (you complete it from anywhere — perfect for long polling and event-driven completion) vs **`CompletableFuture<T>`** · configuring `spring.mvc.async.request-timeout` and an `AsyncTaskExecutor` via `WebMvcConfigurer.configureAsyncSupport` · `WebAsyncTask` for per-request timeouts and callbacks · **`ResponseBodyEmitter`** for chunked streaming and **`SseEmitter`** for Server-Sent Events: `send`, `complete`, `completeWithError`, `onTimeout`, `onCompletion`, event names, ids, and retry hints · a live notification endpoint built with SSE · `StreamingResponseBody` for large file/CSV export · **the honest comparison**: async MVC vs WebFlux vs virtual threads, and why virtual threads make most of this unnecessary in Java 21+

**Day 312 — API Versioning & Deprecation** · 🎥 40m · 💻 40m
Why versioning is unavoidable and how to postpone it (additive-only changes, tolerant readers, optional fields) · **the four strategies with real tradeoffs**: URI path (`/api/v1/orders` — visible, cacheable, breaks REST purity, duplicates routes), query parameter (`?version=1`), custom header (`X-API-Version`), and content negotiation (`Accept: application/vnd.acme.v2+json` — purest, hardest to test in a browser) · implementing each in Spring MVC, including a custom `RequestCondition` and `RequestMappingHandlerMapping` for header-based routing · **versioning at the gateway** vs in the service · what counts as a breaking change (removing/renaming a field, tightening validation, changing types or error codes) · deprecation process: `Deprecation` and `Sunset` headers, changelogs, telemetry on old-version usage, client migration windows, and finally removing it · Spring Framework 7's built-in API versioning support

**Day 313 — OpenAPI & Swagger with springdoc** · 🎥 45m · 💻 50m
OpenAPI 3.1 structure: info, servers, paths, operations, parameters, requestBody, responses, components, schemas, securitySchemes · adding **`springdoc-openapi-starter-webmvc-ui`** and getting `/swagger-ui.html` and `/v3/api-docs` for free · what springdoc infers automatically from your controllers, DTOs, and validation annotations · **annotations for the rest**: `@Tag`, `@Operation(summary, description)`, `@Parameter`, `@ApiResponse`/`@ApiResponses`, `@Schema` (description, example, required, allowableValues), `@Hidden`, `@SecurityRequirement`, `@RequestBody` (the Swagger one) · a global `OpenAPI` bean for info, servers, security schemes (bearer JWT, OAuth2), and common responses · **`GroupedOpenApi`** for splitting public and admin APIs · documenting error responses with your `ProblemDetail` shape · exporting the spec at build time (`springdoc-openapi-maven-plugin`) and committing it · **spec-first vs code-first**: generating server stubs and typed clients with `openapi-generator`, and contract linting with Spectral · disabling Swagger UI in production

**Day 314 — HATEOAS with Spring HATEOAS** · 🎥 40m · 💻 40m
The case for hypermedia: discoverability, decoupled clients, and server-driven state transitions — and the honest case against (client complexity, few real consumers) · **`spring-boot-starter-hateoas`** · `RepresentationModel`, `EntityModel<T>`, `CollectionModel<T>`, `PagedModel<T>` · building links with `WebMvcLinkBuilder.linkTo(methodOn(Controller.class).method(args)).withSelfRel()` and `withRel("cancel")` · `RepresentationModelAssembler` to keep link logic out of controllers · **HAL** (`application/hal+json`) and HAL-FORMS, plus the HAL Explorer (`spring-data-rest-hal-explorer`) · affordances for describing available actions · conditional links based on state and the current user's permissions (a cancel link only when the order is cancelable) · Spring Data REST as a fully hypermedia-driven shortcut, and when exposing repositories directly is a bad idea

**Day 315 — HTTP Clients: RestClient, RestTemplate & @HttpExchange** · 🎥 45m · 💻 50m
**`RestClient`** (Spring 6.1+, the modern synchronous client): `RestClient.create`/`builder`, `get().uri(...).retrieve().body(Type.class)`, `toEntity`, `onStatus` error handling, `exchange` for full control, default headers, base URL, and request/response interceptors · **`RestTemplate`** (maintenance mode but everywhere in existing code): `getForObject`, `getForEntity`, `postForEntity`, `exchange`, `ParameterizedTypeReference` for generics, `ResponseErrorHandler`, `ClientHttpRequestInterceptor`, and `RestTemplateBuilder` · **HTTP interfaces**: declaring `@HttpExchange`/`@GetExchange`/`@PostExchange` on an interface and creating a proxy with `HttpServiceProxyFactory` — Feign-style clients with no extra dependency · configuring the underlying request factory (JDK `HttpClient`, Apache HttpClient 5, Reactor Netty) with **connect/read/response timeouts and a connection pool** — and why a missing timeout is the most common cause of cascading production outages · retries, and the forward reference to Resilience4j (Day 408) · testing with `MockRestServiceServer` and `@RestClientTest`

**Day 316 — WebClient in a Blocking App, Static Resources & Views** · 🎥 45m · 💻 45m
Using **`WebClient`** from `spring-boot-starter-webflux` inside an MVC application: when it's worth it (parallel fan-out calls, streaming responses) and when `RestClient` is simpler · `WebClient.builder()`, `baseUrl`, `defaultHeaders`, `filter` for auth and logging, `retrieve` vs `exchangeToMono`, `onStatus`, `bodyToMono`/`bodyToFlux` · **`block()`** and its legitimate use at the boundary of a blocking app · configuring `HttpClient` (Reactor Netty) with connection provider limits, `responseTimeout`, and `ConnectionProvider` metrics · `retryWhen` with exponential backoff and jitter · **static resources**: `spring.web.resources.static-locations`, cache control (`spring.web.resources.cache.cachecontrol.max-age`), content versioning with `ResourceUrlProvider`, and serving an SPA with a fallback controller · **Thymeleaf basics** for server-rendered pages and email templates: `spring-boot-starter-thymeleaf`, expressions (`${}`, `*{}`, `#{}`, `@{}`), `th:text`/`th:each`/`th:if`/`th:fragment`, layout dialect, and escaping for XSS safety

---

# PHASE 15 — Spring Data
**Days 317–328 · Weeks 46–48**
> **Milestone project:** a repository layer with derived queries, specifications, projections, keyset pagination, and auditing — benchmarked against raw SQL.

**Day 317 — Spring Data Architecture & Repository Interfaces** · 🎥 40m · 💻 45m
The Spring Data module family (JPA, JDBC, MongoDB, Redis, Elasticsearch, Cassandra, R2DBC, Neo4j, REST) and the shared programming model · **how a repository interface becomes a bean**: `@EnableJpaRepositories` → `RepositoryBeanDefinitionRegistrarSupport` → a JDK proxy backed by `SimpleJpaRepository` and a `QueryExecutorMethodInterceptor` · the interface hierarchy: `Repository` (marker) → `CrudRepository` → `ListCrudRepository` → `PagingAndSortingRepository` → `JpaRepository` · what each adds: `save`, `saveAll`, `findById`, `existsById`, `findAll`, `count`, `delete`, `deleteAllInBatch`, `flush`, `saveAndFlush`, `getReferenceById` · **`save()` is really "persist or merge"** — and the extra SELECT it costs for a detached entity with an assigned id · `JpaRepository` vs the narrower interfaces, and why exposing less is better · `@NoRepositoryBean` base interfaces for shared methods · repository scanning configuration

**Day 318 — Derived Query Methods** · 🎥 40m · 💻 50m
The query-derivation grammar: subject (`find`/`read`/`get`/`query`/`search`/`stream`/`count`/`exists`/`delete`) + `By` + predicate · **keywords**: `And`, `Or`, `Is`/`Equals`, `Between`, `LessThan`/`GreaterThanEqual`, `After`/`Before`, `IsNull`/`IsNotNull`, `Like`/`NotLike`/`StartingWith`/`EndingWith`/`Containing`, `IgnoreCase`/`AllIgnoreCase`, `In`/`NotIn`, `True`/`False`, `OrderBy...Asc/Desc`, `Distinct`, `First10`/`Top5` · traversing nested properties (`findByCustomerAddressCity`) and resolving ambiguity with `_` · **return types**: `T`, `Optional<T>`, `List<T>`, `Stream<T>` (must be closed), `Page<T>`, `Slice<T>`, `Window<T>`, `Future`/`CompletableFuture` for `@Async` · `IncorrectResultSizeDataAccessException` when a single-result query returns many · **when method names become unreadable** (the 12-word method name) and it's time for `@Query`, a Specification, or Querydsl · validating derived queries at startup

**Day 319 — @Query: JPQL, Native SQL & SpEL** · 🎥 40m · 💻 45m
`@Query` with JPQL and named parameters via `@Param` · positional parameters and why named ones are safer · `nativeQuery = true` for database-specific SQL, and the loss of dialect portability · `countQuery` — **required when a native query is paginated** · dynamic sorting with a `Sort` parameter (works with JPQL, fragile with native) · **SpEL in queries**: `#{#entityName}` for generic base repositories, `?#{principal.tenantId}` for multi-tenancy, `SpEL` in `LIKE` patterns with `%` concatenation · `@Query` returning DTOs via constructor expressions and interface projections · `@NamedQuery`/`@NamedNativeQuery` on the entity vs `@Query` on the repository (startup validation vs locality) · `@QueryHints` for fetch size, read-only, cacheable, and timeout

**Day 320 — Modifying Queries & Repository Transactions** · 🎥 35m · 💻 40m
`@Modifying` on `@Query` for bulk `UPDATE`/`DELETE`, and the required `@Transactional` · **`clearAutomatically = true` and `flushAutomatically = true`** — why the persistence context goes stale after a bulk update and how these flags fix it · bulk operations bypassing cascades, `@Version` checks, and lifecycle callbacks — and when that's a problem · `deleteAllInBatch` vs `deleteAll` (one statement vs N) and `deleteAllByIdInBatch` · **transaction defaults in Spring Data**: `SimpleJpaRepository` is annotated `@Transactional(readOnly = true)` at class level with write methods overriding it, so a read-only repository call outside a service transaction still opens one · declaring transactions at the **service** layer, not the repository, and why · `saveAll` batching and the `hibernate.jdbc.batch_size` requirement from Day 246

**Day 321 — Specifications & Dynamic Queries** · 🎥 45m · 💻 50m
`JpaSpecificationExecutor<T>`: `findAll(Specification)`, with `Pageable`, with `Sort`, `count`, `exists`, `delete` · the `Specification<T>` functional interface wrapping `toPredicate(Root, CriteriaQuery, CriteriaBuilder)` · composing with `Specification.where(...).and(...).or(...).not()` · **building a reusable filter library**: `hasStatus(status)`, `createdBetween(from, to)`, `customerNameContains(text)` — each returning null when the input is null so optional filters compose cleanly · joins and fetch joins inside a specification (and the `query.getResultType()` check to avoid fetch joins in the count query) · `distinct` and duplicate rows from joins · specifications for multi-tenancy and soft-delete defaults · **Specifications vs Querydsl vs a hand-written dynamic JPQL builder** — an honest comparison of verbosity and type safety

**Day 322 — Querydsl: Type-Safe Queries** · 🎥 45m · 💻 50m
Setting up Querydsl with JPA: `querydsl-jpa` (with the `jakarta` classifier), `querydsl-apt`, and the annotation-processor configuration that generates `QOrder`, `QCustomer` metamodel classes — plus the Lombok/MapStruct processor-ordering trap · `JPAQueryFactory`: `selectFrom`, `where`, `join`/`leftJoin`/`fetchJoin`, `groupBy`, `having`, `orderBy`, `offset`/`limit`, `fetch`/`fetchOne`/`fetchFirst`/`fetchCount` · **`BooleanBuilder` and `BooleanExpression`** for dynamic predicates with null-safe composition · `Projections.constructor`/`bean`/`fields` and `@QueryProjection` for DTOs · subqueries with `JPAExpressions` · `CaseBuilder` and SQL functions via `Expressions.stringTemplate` · **`QuerydslPredicateExecutor`** on a repository and `@QuerydslPredicate` binding query params to a predicate in a controller · pagination with Querydsl and a separate count query · Querydsl's maintenance status and OpenFeign's fork as an honest caveat

**Day 323 — Projections & DTO Mapping** · 🎥 40m · 💻 45m
**Closed interface projections**: declare getters matching entity properties and Spring Data generates a proxy — and Hibernate selects only those columns · **open projections** with `@Value("#{target.firstName + ' ' + target.lastName}")` — and the crucial catch that they load the whole entity · **class-based (DTO) projections** with a matching constructor · **dynamic projections** with `<T> List<T> findByStatus(String status, Class<T> type)` so one query method serves several shapes · nested projections and their N+1 risk · projections with `@Query`, native queries, and `Tuple` · **why projections are one of the highest-leverage performance tools**: no persistence context, no dirty-check snapshots, fewer columns, no lazy loading · benchmark of entity vs projection for a 50k-row read · combining with MapStruct when mapping logic is non-trivial

**Day 324 — Pagination, Sorting, Page vs Slice & Keyset** · 🎥 45m · 💻 50m
`Pageable`, `PageRequest.of(page, size, Sort)`, and zero-based page numbers · **`Page<T>`** (executes an extra `COUNT` query, gives `getTotalElements`/`getTotalPages`) vs **`Slice<T>`** (fetches size+1 to know if there's a next page, no count query) vs **`List<T>`** — and choosing by whether the UI actually needs a total · `Sort.by("field").descending()`, multi-property sort, `Sort.Order` with null handling and `ignoreCase` · **`Pageable` as a controller parameter** with `@PageableDefault`, `PageableHandlerMethodArgumentResolver` config, `spring.data.web.pageable.max-page-size`, and the DoS risk of an unbounded page size · serializing `Page` in a response — **and why you should map it to your own envelope instead of leaking Spring's unstable JSON structure** (`spring.data.web.pageable.serialization-mode`) · **the deep-offset problem** measured on a 5M-row table, then solved with **keyset pagination** using `Window<T>`, `ScrollPosition.keyset()`, and `findFirst20ByOrderByIdAsc` style methods · cursor encoding and stable sort keys

**Day 325 — Auditing, Custom Implementations & Fragment Composition** · 🎥 40m · 💻 45m
`@EnableJpaAuditing`, `@CreatedDate`, `@LastModifiedDate`, `@CreatedBy`, `@LastModifiedBy`, `AuditingEntityListener`, and an `AuditorAware<String>` reading from `SecurityContextHolder` · a `BaseEntity` `@MappedSuperclass` with id, audit fields, and `@Version` · `DateTimeProvider` backed by an injectable `Clock` for deterministic tests · **custom repository implementations**: declaring a `OrderRepositoryCustom` interface, implementing `OrderRepositoryImpl` (the `Impl` suffix matters), and extending both from `OrderRepository` — with an injected `EntityManager` for anything Spring Data can't express · **fragment composition**: multiple custom interfaces on one repository and their precedence order · customizing the base repository class with `@EnableJpaRepositories(repositoryBaseClass = ...)` to add soft-delete or tenant filtering everywhere · repository fragments for read/write splitting

**Day 326 — Spring Data JDBC: The Simpler Alternative** · 🎥 40m · 💻 45m
Spring Data JDBC's philosophy: **no persistence context, no lazy loading, no dirty checking — every `save` writes, every `find` reads** · DDD aggregates as the unit of persistence, with the aggregate root owning its children and no references *into* another aggregate (only ids) · entity mapping: `@Id`, `@Table`, `@Column`, `@MappedCollection`, `@Embedded`, `AggregateReference` · `CrudRepository` and `@Query` with named parameters (SQL only, no JPQL) · **when Spring Data JDBC beats JPA**: predictable SQL, simpler mental model, no N+1 surprises, faster startup — and when it doesn't (complex object graphs, existing JPA codebase, caching needs) · `JdbcTemplate` and `NamedParameterJdbcTemplate` for everything else: `query`, `queryForObject`, `RowMapper`, `BeanPropertyRowMapper`, `batchUpdate`, `SimpleJdbcInsert`, and `JdbcClient` (Spring 6.1's fluent API) · a brief look at **jOOQ** as the type-safe SQL option

**Day 327 — Spring Data MongoDB** · 🎥 45m · 💻 50m
When a document store fits: flexible schemas, denormalized read models, deep nesting, high write throughput · `spring-boot-starter-data-mongodb` and `spring.data.mongodb.uri` · **document mapping**: `@Document(collection)`, `@Id` (ObjectId vs String), `@Field`, `@Indexed`, `@CompoundIndex`, `@TextIndexed`, `@DBRef` (**and why to avoid it** — no joins, N+1 by design), `@DocumentReference`, `@Version` · `MongoRepository` with derived queries and `@Query` using JSON query syntax with `?0` placeholders, `fields`, and `sort` · **`MongoTemplate`**: `Query`/`Criteria` builder, `find`, `findAndModify`, `updateFirst`/`updateMulti`, `upsert`, `bulkOps` · the **aggregation pipeline**: `match`, `group`, `project`, `sort`, `unwind`, `lookup`, `facet` via `Aggregation.newAggregation` · transactions on replica sets and their limits · schema design: embed vs reference, the 16 MB document limit, the bucket pattern for time series, and index strategy · Testcontainers with `MongoDBContainer`

**Day 328 — Spring Data Redis** · 🎥 45m · 💻 50m
`spring-boot-starter-data-redis` and the **Lettuce** (default, netty-based, thread-safe) vs **Jedis** driver choice · connection config: `spring.data.redis.host/port/password/database/ssl`, `LettuceConnectionFactory`, pooling with commons-pool2, cluster and sentinel setup · **`RedisTemplate<K,V>` vs `StringRedisTemplate`** and the serializer decision that trips everyone up: `JdkSerializationRedisSerializer` (default, unreadable, Java-only) vs `StringRedisSerializer` for keys plus `GenericJackson2JsonRedisSerializer` for values — configured explicitly · operation interfaces: `opsForValue`, `opsForHash`, `opsForList`, `opsForSet`, `opsForZSet`, `opsForStream`, `opsForGeo`, `HyperLogLog` · TTL with `expire` and `set(key, value, Duration)` · **Redis repositories** (`@RedisHash`, secondary indexes with `@Indexed`, TTL with `@TimeToLive`) and their limitations · pipelining and `executePipelined` for batch throughput · Lua scripts with `DefaultRedisScript` for atomic multi-key operations · key naming conventions and the `KEYS` vs `SCAN` production rule · (caching patterns and distributed locks come on Days 386–390)

---

# PHASE 16 — Transaction Management
**Days 329–334 · Week 48**
> **Milestone project:** a transactional money-transfer service with correct propagation, retries, and an outbox.

**Day 329 — Spring's Transaction Abstraction** · 🎥 45m · 💻 45m
The problem: JDBC, JPA, JTA, and JMS each have their own transaction API · **`PlatformTransactionManager`** as the unifying abstraction, with `DataSourceTransactionManager`, `JpaTransactionManager`, `JtaTransactionManager`, `KafkaTransactionManager`, and `ChainedTransactionManager` (and why chaining is not real 2PC) · `TransactionDefinition`, `TransactionStatus`, `getTransaction`/`commit`/`rollback` · **how `@Transactional` actually works**: `@EnableTransactionManagement` → `TransactionInterceptor` → an AOP proxy around your bean → begin, invoke, commit or rollback · `TransactionSynchronizationManager` and the thread-bound resource holder that binds one `Connection`/`EntityManager` to the current thread · why the same `EntityManager` is reused across repository calls in one transaction · declarative vs programmatic transactions · multiple transaction managers and `@Transactional("txManagerName")`

**Day 330 — @Transactional Propagation** · 🎥 50m · 💻 50m
All seven propagation modes with a live demo of each: **REQUIRED** (join or create — the default), **REQUIRES_NEW** (suspend the outer, start an independent one — genuinely separate commit/rollback, and it consumes a second connection), **SUPPORTS**, **NOT_SUPPORTED** (suspend), **MANDATORY** (throw if none), **NEVER** (throw if one exists), **NESTED** (a JDBC savepoint — rolls back to the savepoint without killing the outer transaction; supported by `DataSourceTransactionManager`, not by JTA) · **the "rollback-only" trap**: an inner REQUIRED transaction that throws marks the whole thing rollback-only, and the outer catch block then gets `UnexpectedRollbackException` — reproduced and explained · using REQUIRES_NEW correctly for audit logging that must survive a business rollback · **deadlock risk** when REQUIRES_NEW waits on a row the outer transaction locked · propagation decision guide

**Day 331 — Isolation, Timeout, readOnly & Rollback Rules** · 🎥 45m · 💻 45m
`isolation` mapping to the SQL levels from Day 217, `Isolation.DEFAULT`, and which databases support which · setting isolation per transaction and the cost of SERIALIZABLE · **`timeout`** and how it maps to a query/statement timeout — plus why a database-level `statement_timeout` and a pool-level `connectionTimeout` are also needed · **`readOnly = true`**: Hibernate switches the flush mode to MANUAL and skips dirty-check snapshots (a real memory and CPU win on large reads), and the driver may route to a replica — but it does **not** guarantee the database rejects writes · **rollback rules**: unchecked exceptions and `Error` roll back by default, **checked exceptions do not** — the single most surprising default in Spring — and fixing it with `rollbackFor = Exception.class` or `noRollbackFor` · `TransactionAspectSupport.currentTransactionStatus().setRollbackOnly()` · `@Transactional` on a class vs a method and the precedence order · `label` and `Transactional` on interfaces (and why it doesn't work with CGLIB)

**Day 332 — Programmatic Transactions & Synchronization Callbacks** · 🎥 40m · 💻 45m
When declarative isn't enough: fine-grained boundaries inside a method, transactions in a lambda, dynamic settings, and code that isn't a Spring bean · **`TransactionTemplate`**: `execute(status -> ...)`, `executeWithoutResult`, configuring propagation/isolation/timeout per template, and `status.setRollbackOnly()` · `TransactionOperations` and Spring 6's `TransactionalOperator` for reactive · **`TransactionSynchronizationManager.registerSynchronization`** with `afterCommit`, `afterCompletion`, `beforeCommit`, `beforeCompletion` — the correct place to publish a message, send an email, or evict a cache **only if the transaction actually committed** · `@TransactionalEventListener(phase = AFTER_COMMIT)` as the declarative version (from Day 277) · shrinking transaction scope: never call an external HTTP API inside a transaction, and the pattern of "load → close transaction → call → reopen to save"

**Day 333 — Transaction Pitfalls: The Complete List** · 🎥 50m · 💻 50m
**Self-invocation** — calling a `@Transactional` method from another method in the same bean bypasses the proxy entirely (demonstrated, then fixed four ways) · `@Transactional` on **private, final, or static** methods silently does nothing · `@Transactional` on a `@PostConstruct` method (the proxy doesn't exist yet) · **checked exceptions not rolling back** · catching an exception inside the transactional method so nothing rolls back · **`LazyInitializationException`** after the transaction closes, and the open-in-view debate revisited · **long transactions** holding connections and locks, blocking vacuum, and exhausting the pool — plus the HTTP-call-inside-a-transaction anti-pattern · transactions and `@Async` (a new thread gets a new transaction context) · transactions and multi-threading generally · **testing transactions**: `@Transactional` in tests rolls back and can hide real failures — using `@Commit`, `TestTransaction`, or a non-transactional test with explicit cleanup instead · reading the `org.springframework.transaction` DEBUG log to see exactly what Spring did

**Day 334 — Distributed Transactions, Sagas & the Outbox Pattern** · 🎥 50m · 💻 55m
Why ACID stops at the boundary of one database · **two-phase commit (2PC)/XA**: the coordinator protocol, prepare and commit phases, blocking behavior when the coordinator dies, `JtaTransactionManager` with Atomikos/Narayana — and why almost nobody uses XA for microservices now · the **CAP theorem** and BASE as the pragmatic alternative · **the dual-write problem**: writing to the database and publishing to Kafka in one method is not atomic, demonstrated with a crash between the two · **the transactional outbox**: write the event to an `outbox` table in the same local transaction, then relay it with a poller or CDC — with at-least-once delivery and the idempotent-consumer requirement · the inbox pattern for deduplication · **sagas** as a sequence of local transactions with compensating actions (fully implemented on Days 414–415) · idempotency keys, `Idempotency-Key` headers, and dedupe tables · eventual consistency and how to explain it to a product manager

---

# PHASE 17 — Spring Security
**Days 335–356 · Weeks 48–51**
> **Milestone project:** a complete auth service with JWT, refresh-token rotation, OAuth2 social login, RBAC, and an OWASP-hardened configuration.

**Day 335 — Security Fundamentals & the Threat Model** · 🎥 45m · 💻 35m
**Authentication** (who you are) vs **authorization** (what you may do) vs **accounting/audit** · identification, credentials, and factors (knowledge, possession, inherence) · sessions vs tokens: server-side state, scalability, revocation, and the honest tradeoffs · confidentiality, integrity, availability, and non-repudiation · **the attacker's view**: threat modeling with STRIDE, trust boundaries, and attack surface · common attacks you'll defend against in this phase — credential stuffing, brute force, session fixation, CSRF, XSS, SQL injection, IDOR/broken object-level authorization, privilege escalation, token theft, replay · defense in depth, least privilege, fail securely, and never rolling your own crypto · security as a cross-cutting concern that cannot be bolted on at the end

**Day 336 — Spring Security Architecture & The Filter Chain** · 🎥 50m · 💻 45m
Adding `spring-boot-starter-security` and what changes immediately (everything secured, a generated password, a login form) · **`DelegatingFilterProxy`** → `FilterChainProxy` → one or more `SecurityFilterChain`s, each with an ordered list of filters · **the default filter order** and what each does: `DisableEncodeUrlFilter`, `WebAsyncManagerIntegrationFilter`, `SecurityContextHolderFilter`, `HeaderWriterFilter`, `CorsFilter`, `CsrfFilter`, `LogoutFilter`, `UsernamePasswordAuthenticationFilter`, `DefaultLoginPageGeneratingFilter`, `BasicAuthenticationFilter`, `RequestCacheAwareFilter`, `SecurityContextHolderAwareRequestFilter`, `AnonymousAuthenticationFilter`, `SessionManagementFilter`, `ExceptionTranslationFilter`, `AuthorizationFilter` · **the core objects**: `SecurityContextHolder` (a `ThreadLocal` by default — and the strategies for `@Async` and virtual threads), `SecurityContext`, `Authentication`, `Principal`, `GrantedAuthority`, `AuthenticationManager`, `ProviderManager`, `AuthenticationProvider`, `UserDetailsService`, `UserDetails` · **the full authentication flow diagram** you'll refer to for the rest of the phase · debugging with `logging.level.org.springframework.security=DEBUG` and `@EnableWebSecurity(debug = true)`

**Day 337 — Modern Configuration: SecurityFilterChain & the Lambda DSL** · 🎥 45m · 💻 50m
**`WebSecurityConfigurerAdapter` is gone** — the Boot 3 way is a `SecurityFilterChain` `@Bean` · the lambda DSL: `http.authorizeHttpRequests(auth -> auth...)`, `.csrf(csrf -> ...)`, `.sessionManagement(...)`, `.formLogin(...)`, `.httpBasic(...)`, `.oauth2ResourceServer(...)`, `.exceptionHandling(...)`, `.headers(...)`, `.cors(...)` · `Customizer.withDefaults()` · **request matchers**: `requestMatchers("/api/**")` (replacing `antMatchers`), `requestMatchers(HttpMethod.POST, "/orders")`, `AntPathRequestMatcher`, `RegexRequestMatcher`, `EndpointRequest.toAnyEndpoint()` for Actuator, `PathRequest.toStaticResources()` · **matcher order matters** — most specific first, and `anyRequest()` last · `permitAll`, `authenticated`, `denyAll`, `hasRole`, `hasAnyAuthority`, `access(...)` · **multiple `SecurityFilterChain` beans** with `@Order` and `securityMatcher` to split an API chain from a UI chain · `WebSecurityCustomizer` to ignore paths entirely (and why `permitAll` is usually safer)

**Day 338 — UserDetailsService, UserDetails & Custom Principals** · 🎥 40m · 💻 50m
`UserDetails` (username, password, authorities, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled) and `User.builder()` · **`InMemoryUserDetailsManager`** for demos and tests · **`JdbcUserDetailsManager`** with the default schema, and customizing the queries · **implementing your own `UserDetailsService`** backed by a JPA repository, throwing `UsernameNotFoundException`, and the deliberate decision to return a generic error so you don't leak which accounts exist · a **custom `UserDetails` implementation** carrying your domain user (id, tenant, email) so `@AuthenticationPrincipal` gives you something useful · `@AuthenticationPrincipal` in controllers and a `@CurrentUser` meta-annotation · `AuthenticationPrincipalArgumentResolver` · `UserDetailsService` vs `AuthenticationProvider` — which extension point to use when · caching user lookups and the invalidation problem when roles change

**Day 339 — Password Storage: BCrypt, Argon2 & Upgrades** · 🎥 40m · 💻 40m
Why plaintext, encryption, and fast hashes (MD5, SHA-256) are all wrong for passwords · **salting** (per-password, stored with the hash) and **peppering** (a secret outside the database) · adaptive/slow hashing and the work-factor concept · **`BCryptPasswordEncoder`** (strength 10–12, the 72-byte input limit, the salt embedded in the `$2a$` output) · **`Argon2PasswordEncoder`** (memory-hard, the OWASP first choice, with memory/iterations/parallelism parameters) · `SCryptPasswordEncoder` and `Pbkdf2PasswordEncoder` · **`DelegatingPasswordEncoder`** and the `{bcrypt}` prefix format that lets you run several algorithms at once and migrate seamlessly · `upgradeEncoding` and rehashing on successful login · benchmarking a work factor to a ~250 ms target · password policy that actually helps (length over composition, breach-list checks against Have I Been Pwned's k-anonymity API, no forced rotation) and OWASP's current guidance · never logging or emailing passwords, and secure reset-token design

**Day 340 — Form Login, Logout & Remember-Me** · 🎥 40m · 💻 45m
The default generated login page and replacing it: `formLogin(f -> f.loginPage("/login").loginProcessingUrl("/perform-login").defaultSuccessUrl("/", true).failureUrl("/login?error").usernameParameter("email"))` · `AuthenticationSuccessHandler`/`AuthenticationFailureHandler` for JSON responses, redirect logic, and failure auditing · `SavedRequest` and returning the user to the page they originally wanted · **logout**: `logout(l -> l.logoutUrl("/logout").logoutSuccessUrl("/").invalidateHttpSession(true).deleteCookies("JSESSIONID").addLogoutHandler(...))` and why logout must be a POST · `LogoutSuccessHandler` for APIs · **remember-me**: the hash-based token (username + expiry + password hash + key) vs the **persistent token** approach (`PersistentTokenRepository`, series + token rotation, and theft detection), cookie security attributes, and the reduced-privilege authentication that remember-me should produce · account lockout after repeated failures (implemented fully on Day 355)

**Day 341 — HTTP Basic, Session Management & Fixation** · 🎥 40m · 💻 40m
**HTTP Basic**: the `Authorization: Basic base64(user:pass)` header, the `WWW-Authenticate` challenge, the browser popup, and why it's only acceptable over TLS for machine-to-machine or internal endpoints · Digest auth and why it's obsolete · **session management**: `sessionManagement(s -> s.sessionCreationPolicy(...))` with ALWAYS, IF_REQUIRED (default), NEVER, and **STATELESS for token-based APIs** · `JSESSIONID`, cookie attributes (`HttpOnly`, `Secure`, `SameSite=Lax/Strict`), and `server.servlet.session.*` timeout config · **session fixation** explained with an attack walkthrough, and `sessionFixation().changeSessionId()` (the default) · **concurrent session control**: `maximumSessions(1)`, `maxSessionsPreventsLogin`, `SessionRegistry`, and expiring the older session · **scaling sessions**: sticky sessions vs session replication vs **Spring Session with Redis** (`spring-session-data-redis`), and how that makes your app stateless-ish without going to tokens

**Day 342 — CSRF: How It Works and How to Defend** · 🎥 40m · 💻 40m
A live CSRF attack: a hidden form on an attacker's page submitting to your bank endpoint using the victim's ambient cookie · why it works (cookies are sent automatically) and why it's only a cookie-auth problem · **the synchronizer token pattern**: `CsrfToken`, `CsrfTokenRepository`, `HttpSessionCsrfTokenRepository` vs **`CookieCsrfTokenRepository.withHttpOnlyFalse()`** for SPAs · `CsrfTokenRequestAttributeHandler` and the **BREACH-protection change in Spring Security 6** that trips up every SPA migration · which methods are protected (not GET/HEAD/OPTIONS/TRACE) · `csrf(csrf -> csrf.ignoringRequestMatchers("/api/webhooks/**"))` · **when disabling CSRF is legitimate**: a stateless API authenticated purely by an `Authorization` header · **`SameSite` cookies as a complementary defense**, and why it isn't a complete replacement · double-submit cookies and their weaknesses · testing CSRF with `MockMvc` and `csrf()` post-processors

**Day 343 — Authorization: Matchers, Roles, Authorities & Hierarchies** · 🎥 45m · 💻 50m
`authorizeHttpRequests` and the `AuthorizationManager` API (Spring Security 6) replacing the old voter/decision-manager model · **roles vs authorities**: `hasRole("ADMIN")` automatically prefixes `ROLE_`, `hasAuthority("ROLE_ADMIN")` does not — the mismatch that costs people hours · `hasAnyRole`, `hasAnyAuthority`, `hasIpAddress`, `authenticated`, `fullyAuthenticated`, `rememberMe`, `anonymous`, `denyAll` · `access(AuthorizationManager)` for custom logic and `AuthorizationManagers.allOf/anyOf` · **`RoleHierarchy`**: `ROLE_ADMIN > ROLE_MANAGER > ROLE_USER` configured as a bean so you stop listing every role everywhere · **designing an authorization model**: coarse roles vs fine-grained permissions, a `role_permissions` table, loading permissions into authorities at login, and the token-size consequence · **RBAC vs ABAC vs ReBAC**, and a look at externalized authorization (OPA, Cedar, OpenFGA) for complex domains · multi-tenancy: enforcing tenant isolation at the data layer, not just the controller

**Day 344 — Method Security & Object-Level Authorization** · 🎥 45m · 💻 50m
`@EnableMethodSecurity` (replacing `@EnableGlobalMethodSecurity`) and `prePostEnabled`/`securedEnabled`/`jsr250Enabled` · **`@PreAuthorize`** with SpEL: `hasRole('ADMIN')`, `hasAuthority('order:write')`, `#userId == authentication.principal.id`, `@orderSecurity.canEdit(#orderId, authentication)` calling a bean · **`@PostAuthorize`** with `returnObject` (and the warning that the method already ran, so it's unsuitable for anything with side effects) · `@PreFilter`/`@PostFilter` on collections, and why filtering in the database is almost always better than filtering 10,000 loaded rows in memory · `@Secured` and JSR-250 `@RolesAllowed` · **custom `PermissionEvaluator`** and `hasPermission(#id, 'Order', 'write')` · **the broken-object-level-authorization (IDOR) problem** — the #1 API vulnerability — and enforcing ownership in the query (`findByIdAndOwnerId`) rather than after the fetch · method security and AOP proxying (self-invocation strikes again) · `@AuthorizeReturnObject` and the new authorization annotations in Spring Security 6.3+

**Day 345 — Custom Authentication: Providers, Filters & Entry Points** · 🎥 45m · 💻 50m
`AuthenticationManager` → `ProviderManager` → a list of `AuthenticationProvider`s, each with `supports(Class)` and `authenticate(Authentication)` · `DaoAuthenticationProvider` internals: loading the user, `PasswordEncoder.matches`, `UserDetailsChecker` pre/post checks, and the deliberate dummy hash comparison that mitigates username-enumeration timing attacks · **writing a custom `AuthenticationProvider`** (e.g. API key, LDAP, or a legacy system) and a custom `Authentication` token · **writing a custom filter**: extending `OncePerRequestFilter` or `AbstractAuthenticationProcessingFilter`, and placing it with `addFilterBefore`/`addFilterAfter`/`addFilterAt` · **`AuthenticationEntryPoint`** (what to do when an unauthenticated user hits a protected resource — a redirect for UIs, a 401 with `ProblemDetail` for APIs) vs **`AccessDeniedHandler`** (403 for an authenticated but unauthorized user) · `ExceptionTranslationFilter` and how these two get invoked · **authentication events** (`AuthenticationSuccessEvent`, `AbstractAuthenticationFailureEvent`, `AuthorizationDeniedEvent`) for audit logging and lockout counters

**Day 346 — JWT I: Structure, Signing & Validation Pitfalls** · 🎥 45m · 💻 45m
**JWT anatomy**: base64url header `.` payload `.` signature — decoded live, and the crucial point that **the payload is encoded, not encrypted** · registered claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) and custom claims · **JWS vs JWE** · signing algorithms: HMAC (`HS256`, shared secret, symmetric) vs RSA (`RS256`) vs ECDSA (`ES256`) vs `EdDSA` — and choosing based on who needs to verify · **JWKS** (`/.well-known/jwks.json`), `kid`, and key rotation · **the attacks**: the `alg: none` bypass, algorithm confusion (RS256 verified as HS256 using the public key as the HMAC secret), missing `exp`/`aud`/`iss` validation, weak HMAC secrets, and accepting an unverified token · what to put in a token and what never to (PII, secrets, anything large) · token size and header limits · **the revocation problem**: you cannot un-issue a JWT — short expiry, a `jti` denylist, or a token-version claim · **JWT vs opaque tokens vs sessions**: a genuinely balanced comparison, because JWTs are widely over-used

**Day 347 — JWT II: Implementing Stateless Auth in Spring Security** · 🎥 50m · 💻 60m
**The recommended path — `spring-boot-starter-oauth2-resource-server`**: `oauth2ResourceServer(oauth2 -> oauth2.jwt(...))`, `JwtDecoder` from a JWKS URI or a shared secret, `NimbusJwtDecoder` with custom `OAuth2TokenValidator`s for issuer/audience/clock skew, `JwtAuthenticationConverter` and `JwtGrantedAuthoritiesConverter` to map claims to authorities, and `@AuthenticationPrincipal Jwt` · **the manual path with `jjwt`** (`jjwt-api`, `jjwt-impl`, `jjwt-jackson`) or `nimbus-jose-jwt`: building a `JwtService` for generation and parsing, then a `OncePerRequestFilter` that extracts the bearer token, validates it, builds an `Authentication`, and sets the `SecurityContext` — plus the correct `SessionCreationPolicy.STATELESS` and filter placement · a `/auth/login` endpoint issuing the token · handling expired and malformed tokens with a clean 401 `ProblemDetail` · **integration tests** with `@WithMockUser`, `@WithUserDetails`, a custom `@WithMockJwt`, and `SecurityMockMvcRequestPostProcessors.jwt()`

**Day 348 — Refresh Tokens, Rotation & Revocation** · 🎥 45m · 💻 50m
Why short-lived access tokens (5–15 min) plus a long-lived refresh token is the standard shape · **storing the refresh token server-side** (hashed, with user id, device, IP, user agent, expiry, and a revoked flag) so it is revocable · the `/auth/refresh` endpoint flow · **refresh-token rotation**: issue a new refresh token on every use and invalidate the old one · **reuse detection**: if a rotated token is presented again, the token family has been stolen — revoke the entire family and force re-authentication · storage on the client: `HttpOnly` `Secure` `SameSite` cookie vs `localStorage` (**and why `localStorage` is XSS-exposed**), and the BFF pattern as the safest option for SPAs · logout (single device) vs logout-everywhere · a `token_version` claim for instant global invalidation · session/device management UI · sliding vs absolute expiry · handling refresh races from parallel tabs

**Day 349 — OAuth2 & OpenID Connect Fundamentals** · 🎥 50m · 💻 40m
**The four roles**: resource owner, client, authorization server, resource server · why OAuth2 exists (delegated authorization without sharing passwords) and the crucial point that **OAuth2 is authorization, OIDC is authentication** · **the grant types**: Authorization Code (+ **PKCE**, now required for all clients), Client Credentials (machine-to-machine), Device Code (TVs and CLIs), Refresh Token — and the **deprecated** Implicit and Resource Owner Password Credentials grants and exactly why they were deprecated · the authorization code flow walked through step by step with a sequence diagram and real HTTP messages · `state` for CSRF protection, `nonce` for replay protection, `code_verifier`/`code_challenge` for PKCE · scopes vs claims vs authorities · **OIDC additions**: the ID token (a JWT about the user), the UserInfo endpoint, discovery via `/.well-known/openid-configuration`, and standard scopes (`openid`, `profile`, `email`) · access token vs ID token — never use an ID token to call an API

**Day 350 — OAuth2 Client: Social Login** · 🎥 45m · 💻 55m
**`spring-boot-starter-oauth2-client`** · `spring.security.oauth2.client.registration.<id>.*` (client-id, client-secret, scope, redirect-uri, authorization-grant-type, client-name) and `.provider.<id>.*` (authorization-uri, token-uri, user-info-uri, jwk-set-uri, user-name-attribute, issuer-uri) · the built-in `CommonOAuth2Provider` presets for Google, GitHub, Facebook, and Okta · `oauth2Login(o -> o.loginPage(...).userInfoEndpoint(u -> u.userService(...).oidcUserService(...)).successHandler(...))` · **a custom `OAuth2UserService`/`OidcUserService`** to look up or provision a local user record, link accounts by verified email, and map local roles into authorities · `OAuth2AuthenticationToken`, `OAuth2User`, `OidcUser`, and `@AuthenticationPrincipal` · **`OAuth2AuthorizedClientService`/`Repository`** and using the stored access token to call the provider's API, with automatic refresh via `OAuth2AuthorizedClientManager` and a `WebClient`/`RestClient` filter · the `redirect-uri` template `{baseUrl}/login/oauth2/code/{registrationId}` and the proxy/`X-Forwarded-*` problem behind a load balancer · **`client_credentials`** for service-to-service calls · account-linking and just-in-time provisioning strategies

**Day 351 — OAuth2 Resource Server: Protecting Your API** · 🎥 45m · 💻 50m
**`spring-boot-starter-oauth2-resource-server`** and the two validation modes · **JWT mode**: `spring.security.oauth2.resourceserver.jwt.issuer-uri` (which triggers discovery) or `jwk-set-uri` or `public-key-location`, `JwtDecoder` customization, `JwtValidators.createDefaultWithIssuer`, audience validation as a custom `OAuth2TokenValidator`, and clock-skew tolerance · **opaque token mode**: `opaquetoken.introspection-uri`, `client-id`, `client-secret`, RFC 7662 introspection, `OpaqueTokenIntrospector`, and caching introspection results to avoid hammering the auth server · **converting claims to authorities**: `JwtGrantedAuthoritiesConverter` with `setAuthoritiesClaimName("roles")` and `setAuthorityPrefix("ROLE_")`, plus a custom converter for Keycloak's nested `realm_access.roles` · scope-based authorization with `hasAuthority('SCOPE_orders:read')` · **multi-tenant resource servers** with `JwtIssuerAuthenticationManagerResolver` · **propagating the token downstream** in a microservice call chain with a `RestClient`/`WebClient` interceptor, and the token-exchange alternative · bearer token errors and `WWW-Authenticate` responses

**Day 352 — Spring Authorization Server: Running Your Own IdP** · 🎥 50m · 💻 60m
When you actually need your own authorization server (multiple first-party clients, third-party API access, no vendor lock-in) vs using Keycloak, Auth0, Okta, Cognito, or Entra ID · adding **`spring-boot-starter-oauth2-authorization-server`** · `OAuth2AuthorizationServerConfiguration.applyDefaultSecurity` and the default endpoints: `/oauth2/authorize`, `/oauth2/token`, `/oauth2/jwks`, `/oauth2/introspect`, `/oauth2/revoke`, `/.well-known/openid-configuration`, `/userinfo` · **`RegisteredClient`** and `RegisteredClientRepository` (in-memory and JDBC): client id/secret, authentication methods, grant types, redirect URIs, scopes, `ClientSettings` (`requireProofKey`, `requireAuthorizationConsent`), and `TokenSettings` (token lifetimes, formats, reuse of refresh tokens) · `JWKSource`, key generation, persistence, and **key rotation** · `OAuth2TokenCustomizer` for adding claims · `OAuth2AuthorizationService` and `OAuth2AuthorizationConsentService` with JDBC persistence · a federated-login setup and a custom consent page · issuing tokens to your own SPA and mobile clients with PKCE, then consuming them from the Day 351 resource server

**Day 353 — Keycloak Integration** · 🎥 45m · 💻 55m
Running Keycloak in Docker and the admin console tour · **realms, clients, roles (realm vs client), groups, users, and identity providers** · creating a confidential client for your backend and a public client with PKCE for the SPA · client scopes, protocol mappers, and putting custom claims (tenant id, permissions) into the token · **wiring Spring Boot as a resource server** to Keycloak's `issuer-uri`, and the converter that flattens `realm_access.roles` and `resource_access.<client>.roles` into `GrantedAuthority`s · **wiring Spring Boot as an OAuth2 client** for browser login and the `logout` + `end_session_endpoint` flow (including `id_token_hint` and back-channel logout) · service accounts and `client_credentials` for machine-to-machine · token exchange for downstream calls · **testing**: the Keycloak Testcontainers module, realm import JSON, and getting a real token in an integration test · Keycloak vs Auth0/Cognito/Entra — cost, operations, and lock-in

**Day 354 — CORS with Security, Security Headers & TLS** · 🎥 45m · 💻 45m
**The CORS + Spring Security interaction**: `http.cors(Customizer.withDefaults())` plus a `CorsConfigurationSource` bean, and why the preflight `OPTIONS` request must be permitted before authentication runs (`CorsFilter` ordering) · debugging the "CORS error" that's really a 401 · `@CrossOrigin` vs global config vs gateway-level CORS, and never configuring it in two places · **security headers** written by `HeaderWriterFilter`: `X-Content-Type-Options: nosniff`, `X-Frame-Options`/`frame-ancestors` for clickjacking, `Strict-Transport-Security` (max-age, includeSubDomains, preload), `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`/`Embedder-Policy`/`Resource-Policy`, and the removal of the obsolete `X-XSS-Protection` · **Content Security Policy**: building a real policy, `nonce`/`hash` for inline scripts, `report-only` mode, and rolling it out without breaking the app · **TLS**: certificate chains, Let's Encrypt/ACME, terminating at the load balancer vs in the app, mTLS for service-to-service, `X-Forwarded-*` headers and `server.forward-headers-strategy=framework|native`, and `requiresChannel().anyRequest().requiresSecure()`

**Day 355 — Rate Limiting, Brute Force Protection & Audit Logging** · 🎥 45m · 💻 50m
**Why rate limiting is a security control, not just a capacity control** · algorithms compared: fixed window, sliding window log, sliding window counter, token bucket, leaky bucket · **implementation**: Bucket4j with a Redis/Hazelcast backend for distributed limits, a Spring interceptor or filter, and the correct `429` response with `Retry-After`, `RateLimit-Limit`, `RateLimit-Remaining`, and `RateLimit-Reset` headers · limiting by IP, by user, by API key, and by endpoint cost — and the shared-NAT problem with IP-based limits · rate limiting at the gateway/CDN vs in the app · **brute-force protection**: failed-attempt counters keyed by username *and* IP, exponential backoff, temporary lockout with a documented policy, the account-enumeration risk of "account locked" messages, and CAPTCHA as a last resort · credential-stuffing defenses (breached-password checks, device fingerprinting, anomaly detection) · **audit logging**: what to record (who, what, when, from where, outcome), tamper resistance, retention, and never logging credentials or tokens

**Day 356 — OWASP Top 10 for Java Backends & Secrets Management** · 🎥 55m · 💻 60m
**A walk through the OWASP API Security Top 10 and Web Top 10 with a Java example of each and its fix**: broken object-level authorization (IDOR — enforce ownership in the query), broken authentication, broken object property level authorization (mass assignment — use request DTOs and `setDisallowedFields`), unrestricted resource consumption (pagination limits, timeouts, payload size), broken function level authorization, unrestricted access to sensitive business flows, SSRF (allowlist outbound URLs, block link-local and private ranges), security misconfiguration (default credentials, exposed actuator, verbose errors, directory listing), improper inventory management, unsafe consumption of APIs · plus injection (SQL, JPQL, SpEL, LDAP, command, log injection), XSS in server-rendered views and JSON responses, insecure deserialization, XXE (`DocumentBuilderFactory` hardening), and vulnerable components · **dependency scanning**: OWASP Dependency-Check, `mvn versions:display-dependency-updates`, Snyk, Dependabot, and reading a CVE · **secrets management**: environment variables vs mounted files vs a secret manager, HashiCorp Vault with `spring-cloud-starter-vault-config`, AWS Secrets Manager and Parameter Store, sealed secrets, dynamic database credentials, rotation, and detecting committed secrets with gitleaks/trufflehog · encryption at rest with JPA `AttributeConverter` and envelope encryption with KMS · a **security checklist** to run before every production release

---

# PHASE 18 — Reactive Spring & WebFlux
**Days 357–368 · Weeks 51–53**
> **Milestone project:** a fully reactive streaming API with R2DBC, backpressure, and a load-test comparison against the MVC version.

**Day 357 — Why Reactive: Blocking vs Non-Blocking & Backpressure** · 🎥 45m · 💻 35m
The thread-per-request model's cost: memory per thread, context switching, and threads parked on I/O doing nothing · the C10K/C10M problem · **the event loop model**: a small number of threads, callbacks on completion, and never blocking them · reactive programming as asynchronous data streams with non-blocking backpressure · **backpressure** — the consumer telling the producer how much it can handle — with a real example of a fast producer overwhelming a slow consumer · push vs pull vs push-pull · the honest cost: harder debugging, unreadable stack traces, a steeper learning curve, and the requirement that the *entire* chain be non-blocking · **when reactive genuinely wins** (high concurrency with I/O-bound work, streaming, SSE/WebSocket fan-out, gateways) and when it doesn't (CPU-bound work, simple CRUD, blocking drivers) · **and the elephant in the room: virtual threads (Day 151) deliver much of the scalability with none of the complexity** — how to decide in 2026

**Day 358 — The Reactive Streams Specification** · 🎥 35m · 💻 35m
The four interfaces: `Publisher<T>`, `Subscriber<T>`, `Subscription`, `Processor<T,R>` · the protocol: `subscribe` → `onSubscribe(subscription)` → `subscription.request(n)` → `onNext` × n → `onComplete`/`onError` · **the request-n contract as the backpressure mechanism** · `Long.MAX_VALUE` as unbounded demand · the specification rules that implementations must obey (serialized signals, no signals after terminal, cancellation semantics) · `java.util.concurrent.Flow` in the JDK and its equivalence · the implementation landscape: **Project Reactor** (Spring), RxJava 3, Akka Streams, Mutiny (Quarkus), and interoperability between them · writing a minimal `Publisher` and `Subscriber` by hand to internalize the protocol, then never doing it again

**Day 359 — Reactor: Mono, Flux & Subscription Lifecycle** · 🎥 45m · 💻 50m
`Mono<T>` (0 or 1 element) vs `Flux<T>` (0..N elements) and choosing between them · **creation**: `just`, `empty`, `error`, `fromCallable`, `fromSupplier`, `fromFuture`, `fromIterable`, `fromStream`, `range`, `interval`, `defer`, `generate`, `create`, `push`, `using` · **`defer` vs `just`** — the eager-evaluation bug where `Mono.just(expensiveCall())` runs immediately · **nothing happens until you subscribe**: `subscribe()`, `subscribe(consumer)`, `subscribe(onNext, onError, onComplete)`, `BaseSubscriber` for manual demand control · **cold vs hot publishers**: a cold `Flux` replays per subscriber, a hot one shares — with `share()`, `publish().refCount()`, `cache()`, `Sinks.many()` · lifecycle hooks: `doOnNext`, `doOnSubscribe`, `doOnCancel`, `doOnError`, `doOnComplete`, `doFinally`, `log()` · `block()`/`blockFirst()`/`blockLast()` and **why calling them inside a reactive chain is a production-stopping mistake** (`BlockHound` to detect it)

**Day 360 — Reactor Operators I: Transform, Combine & Flatten** · 🎥 45m · 💻 55m
`map` (synchronous 1:1) vs **`flatMap`** (asynchronous 1:N, **interleaved and out of order**, with a concurrency parameter) vs **`concatMap`** (sequential, order-preserving) vs **`flatMapSequential`** (concurrent execution, ordered emission) vs `switchMap` (cancel the previous inner) — the single most important distinction in Reactor, demonstrated with timings · `filter`, `take`, `takeUntil`, `skip`, `distinct`, `distinctUntilChanged`, `defaultIfEmpty`, `switchIfEmpty` · **combining**: `zip` (pairwise, waits for all), `merge` (interleaved), `concat` (sequential), `combineLatest`, `Mono.zip` for parallel service calls, `then`/`thenMany`/`thenReturn` for sequencing without the value · `collectList`, `collectMap`, `reduce`, `scan`, `buffer`, `window`, `groupBy` · `expand` for recursive pagination · `transform` and `transformDeferred` for reusable operator chains

**Day 361 — Reactor Operators II: Errors, Retries & Timeouts** · 🎥 45m · 💻 50m
Error handling as a first-class signal: `onErrorReturn` (a static fallback), `onErrorResume` (a fallback publisher), `onErrorMap` (translate to a domain exception), `onErrorContinue` (**and why it's dangerous** — it violates the operator contract and silently swallows errors mid-stream), `doOnError` for logging without handling · `Mono.error` and `Flux.error` · **`retry(n)`** vs **`retryWhen(Retry.backoff(3, Duration.ofMillis(200)).jitter(0.5).filter(this::isRetryable).onRetryExhaustedThrow(...))`** — exponential backoff with jitter, done properly · `timeout(Duration)` and `timeout(duration, fallback)` · `repeat` vs `retry` · `using` and `usingWhen` for resource cleanup · **the `Context`/`ContextView` API** for propagating request-scoped data (trace ids, security context, tenant) without `ThreadLocal`, with `contextWrite` and `deferContextual` · Micrometer context propagation for MDC in reactive chains · `checkpoint()` and `Hooks.onOperatorDebug()`/`ReactorDebugAgent` for readable stack traces

**Day 362 — Schedulers, publishOn & subscribeOn** · 🎥 45m · 💻 45m
Reactor's threading model: by default everything runs on the subscribing thread · **the schedulers**: `Schedulers.parallel()` (fixed pool sized to cores, for CPU work), `Schedulers.boundedElastic()` (for **wrapping blocking calls**, capped at 10× cores with a queue), `Schedulers.single()`, `Schedulers.immediate()`, `Schedulers.fromExecutor()`, and `Schedulers.newParallel` for isolation · **`subscribeOn`** affects the source and everything upstream, takes effect wherever it appears in the chain, and only the first one counts · **`publishOn`** switches the thread for everything downstream of it, and can appear multiple times · a live demo printing thread names at each stage to make the difference concrete · wrapping a blocking JDBC call correctly: `Mono.fromCallable(...).subscribeOn(Schedulers.boundedElastic())` · `parallel()` + `runOn()` for true parallel processing of a `Flux` · scheduler metrics and diagnosing a starved `boundedElastic`

**Day 363 — Spring WebFlux Architecture** · 🎥 40m · 💻 40m
WebFlux vs Spring MVC: the same annotations, a completely different runtime · **`DispatcherHandler`** instead of `DispatcherServlet`, `HandlerMapping`/`HandlerAdapter`/`HandlerResultHandler` · the server options: **Reactor Netty** (default), Undertow, Jetty, and Tomcat/Jetty via Servlet 3.1+ async · the event loop: a small fixed set of worker threads (`reactor.netty.ioWorkerCount`), and **the absolute rule that you must never block one** · `ServerWebExchange`, `ServerHttpRequest`/`Response`, and `WebFilter` replacing servlet filters · `spring-boot-starter-webflux` and the fact that adding it alongside `starter-web` gives you MVC (the classpath precedence rule) · `WebFluxAutoConfiguration`, `WebFluxConfigurer`, codecs instead of message converters · reactive `WebSession` · **the mandatory checklist for a reactive stack**: reactive DB driver, reactive Redis, reactive HTTP client, reactive security — one blocking link ruins the whole chain

**Day 364 — Annotated Controllers in WebFlux** · 🎥 40m · 💻 50m
The same `@RestController`, `@GetMapping`, `@PathVariable`, `@RequestParam`, `@RequestBody`, `@Valid` — now returning `Mono<T>`, `Flux<T>`, `Mono<ResponseEntity<T>>`, or `Flux<ServerSentEvent<T>>` · returning `Flux` as a JSON array vs as a stream with `produces = MediaType.TEXT_EVENT_STREAM_VALUE` or `APPLICATION_NDJSON_VALUE` · `ServerWebExchange`, `@AuthenticationPrincipal`, and `ReactiveSecurityContextHolder` (a `Context` key, not a `ThreadLocal`) · **exception handling**: `@ExceptionHandler`, `@RestControllerAdvice`, and a custom `ErrorWebExceptionHandler` for errors that occur outside the handler · `WebFilter` for correlation ids and logging in a reactive world · streaming a large database result set to the client without buffering it in memory · **the classic mistake**: calling a blocking repository from a WebFlux controller and destroying throughput — demonstrated with a load test

**Day 365 — Functional Endpoints: RouterFunction & HandlerFunction** · 🎥 40m · 💻 45m
The functional alternative to annotations: `RouterFunctions.route()` with `RequestPredicates` (`GET`, `POST`, `path`, `accept`, `contentType`, `queryParam`) mapped to `HandlerFunction<ServerResponse>` · `ServerRequest` (`pathVariable`, `queryParam`, `bodyToMono`, `bodyToFlux`, `headers`) and `ServerResponse` (`ok`, `created`, `status`, `bodyValue`, `body`, `contentType`, `header`) · nesting routes with `nest()` and composing with `and()`/`andRoute()` · handler classes as plain Spring beans, with no reflection or proxying · filters with `.filter((request, next) -> ...)` and `before`/`after` · **annotated vs functional**: explicit routing and testability vs familiarity and tooling — and the fact that you can mix both in one app · `RouterFunctions.toHttpHandler` · testing with `WebTestClient.bindToRouterFunction`

**Day 366 — WebClient In Depth** · 🎥 45m · 💻 50m
`WebClient.create`, `builder()`, `baseUrl`, `defaultHeader`, `defaultUriVariables`, and `mutate()` for per-call variants · **`retrieve()`** (with `onStatus` for error mapping and `bodyToMono`/`bodyToFlux`) vs **`exchangeToMono()`** (full control over the response, and the requirement to always consume or release the body) · `bodyValue`, `body(Publisher, Class)`, `BodyInserters` for form data and multipart · **`ExchangeFilterFunction`** for auth token injection, logging, retries, and metrics · **connection configuration** with `HttpClient` from Reactor Netty: `ConnectionProvider` (max connections, pending acquire timeout, max idle/life time), `responseTimeout`, `ChannelOption.CONNECT_TIMEOUT_MILLIS`, and read/write timeout handlers — **the settings whose absence causes cascading outages** · `retryWhen` with backoff and jitter, `timeout`, and a Resilience4j circuit breaker in a filter · streaming responses with `bodyToFlux` and NDJSON/SSE · exchange strategies and the 256 KB in-memory buffer limit you will eventually hit · testing with `MockWebServer` (OkHttp) or WireMock

**Day 367 — R2DBC & Reactive Data Access** · 🎥 45m · 💻 55m
Why JDBC is fundamentally blocking and what R2DBC changes · `spring-boot-starter-data-r2dbc` and drivers (`r2dbc-postgresql`, `r2dbc-mysql`, `r2dbc-h2`) · `spring.r2dbc.url/username/password` and `ConnectionFactoryOptions` · **`R2dbcRepository`** with derived queries and `@Query` (SQL only — there is no JPQL and **no ORM, no lazy loading, no dirty checking, and no relationship mapping**) · `DatabaseClient` for fluent SQL: `sql(...).bind(...).fetch().one()/all()/rowsUpdated()`, and `R2dbcEntityTemplate` for criteria-style queries · mapping with `@Table`/`@Id`/`@Column` and custom `Converter`s · **handling relationships manually** — the biggest practical difference from JPA · **transactions**: `@Transactional` with `R2dbcTransactionManager`, `TransactionalOperator`, and the fact that the transaction lives in the Reactor `Context`, not a `ThreadLocal` · connection pooling with `r2dbc-pool` · Flyway/Liquibase still run over JDBC for migrations · **reactive Redis** (`ReactiveRedisTemplate`) and **reactive MongoDB** (`ReactiveMongoRepository`) · an honest benchmark of R2DBC vs JDBC vs JDBC-on-virtual-threads

**Day 368 — Testing Reactive Code & the Final Comparison** · 🎥 45m · 💻 55m
**`StepVerifier`**: `create`, `expectNext`, `expectNextMatches`, `expectNextCount`, `assertNext`, `expectComplete`, `expectError`, `expectErrorMatches`, `verify()`, and `verifyComplete()` — plus the reminder that nothing runs until `verify()` · **`StepVerifier.withVirtualTime`** and `thenAwait(Duration)` to test a 24-hour `interval` in milliseconds · `expectSubscription`, `thenRequest(n)`, and `expectNoEvent` for backpressure testing · `TestPublisher` for driving a stream manually · **`WebTestClient`**: `bindToApplicationContext`, `bindToController`, `bindToRouterFunction`, or `bindToServer`, with `expectStatus`, `expectHeader`, `expectBody(Class)`, `expectBodyList`, `jsonPath`, and `returnResult` for streaming assertions — and note that it works against MVC too · `@WebFluxTest` slice · **`BlockHound`** to fail the build when blocking code sneaks onto an event loop · **the closing comparison**: MVC + virtual threads vs WebFlux — a real load test of both under 10k concurrent connections, measuring throughput, latency percentiles, memory, and CPU, plus an honest verdict on which to choose for a new project in 2026

---

# PHASE 19 — Messaging: Kafka & RabbitMQ
**Days 369–384 · Weeks 53–56**
> **Milestone project:** an event-driven order pipeline with exactly-once semantics, a dead-letter topic, and full observability.

**Day 369 — Messaging Fundamentals** · 🎥 40m · 💻 35m
Why asynchronous messaging: temporal decoupling, load leveling, resilience to downstream failure, and independent scaling · synchronous request/response vs asynchronous messaging vs event streaming · **queues (point-to-point, one consumer wins) vs topics (publish/subscribe, everyone gets a copy)** · the broker's role and the message anatomy (headers, key, payload, timestamp) · **delivery semantics**: at-most-once, at-least-once, and exactly-once — what each really means, why exactly-once end-to-end is impossible without idempotency, and which to pick · ordering guarantees and their cost · message durability, acknowledgement, and redelivery · the **dead-letter queue** concept · **the broker landscape**: RabbitMQ, Kafka, ActiveMQ/Artemis, Pulsar, NATS, AWS SQS/SNS, Google Pub/Sub, Azure Service Bus — and a decision guide by use case · JMS as the legacy Java standard

**Day 370 — RabbitMQ: Exchanges, Queues & Routing** · 🎥 45m · 💻 50m
AMQP 0-9-1 model: producer → **exchange** → binding → **queue** → consumer · running RabbitMQ in Docker with the management UI · **exchange types**: direct (exact routing key), topic (`order.*.created` with `*` and `#` wildcards), fanout (broadcast), headers, and the default exchange · bindings and routing keys designed for a real domain · queue properties: durable, exclusive, auto-delete, TTL (`x-message-ttl`), max length, `x-dead-letter-exchange`, and quorum vs classic queues · virtual hosts, users, and permissions · publisher confirms and consumer acknowledgements (`ack`, `nack`, `reject`, `requeue`) · prefetch (`basic.qos`) and why an unbounded prefetch destroys fair dispatch · the management UI and `rabbitmqctl` for inspecting queues, connections, and shovels

**Day 371 — Spring AMQP: RabbitTemplate & @RabbitListener** · 🎥 45m · 💻 55m
**`spring-boot-starter-amqp`** and `spring.rabbitmq.*` configuration (host, port, virtual-host, username, password, ssl, connection-timeout) · declaring topology as beans: `Queue`, `DirectExchange`/`TopicExchange`/`FanoutExchange`, `Binding`, and `BindingBuilder` — with `RabbitAdmin` auto-declaring them at startup · **`RabbitTemplate`**: `convertAndSend`, `convertSendAndReceive` (RPC-style), `MessagePostProcessor` for headers, and the `Jackson2JsonMessageConverter` you must register (the default is Java serialization) · **`@RabbitListener`** on methods and classes, with `@Payload`, `@Header`, `@Headers`, and `queues`/`bindings` declaration inline · `SimpleRabbitListenerContainerFactory` vs `DirectRabbitListenerContainerFactory`, concurrency (`concurrentConsumers`, `maxConcurrentConsumers`), and prefetch tuning · manual vs auto acknowledgement modes · `@RabbitHandler` for polymorphic payloads · type mapping and the `__TypeId__` header

**Day 372 — RabbitMQ Reliability: Confirms, DLQ & Retries** · 🎥 45m · 💻 50m
**Publisher reliability**: `spring.rabbitmq.publisher-confirm-type=correlated` with a `ConfirmCallback`, `publisher-returns` with a `ReturnsCallback` and `mandatory=true` for unroutable messages, and correlating confirms back to your business record · **consumer reliability**: `AcknowledgeMode.MANUAL` with `channel.basicAck/basicNack`, and the requeue-loop poison-message trap · **dead-letter setup**: a DLX and DLQ per queue, `x-dead-letter-exchange`/`x-dead-letter-routing-key`, and the `x-death` header that records why · **retry with delay**: the TTL + DLX "delayed retry" pattern, the `rabbitmq_delayed_message_exchange` plugin, and Spring Retry (`RetryTemplate`, `StatefulRetryOperationsInterceptor`) with exponential backoff · `RepublishMessageRecoverer` to preserve the stack trace · idempotent consumers with a dedupe table or Redis set · monitoring queue depth, unacked counts, and consumer utilisation · alerting on a growing DLQ

**Day 373 — Kafka Architecture: Brokers, Topics & Partitions** · 🎥 50m · 💻 45m
Kafka as a **distributed, replicated, append-only commit log** — not a queue · brokers, the controller, and **KRaft mode replacing ZooKeeper** · **topics and partitions**: the unit of parallelism and of ordering, offsets, and the guarantee that ordering holds *within* a partition only · partition assignment by key hash, and choosing a key (order id, customer id) to get the ordering you need · **replication**: leader and followers, the replication factor, the **ISR (in-sync replicas)** set, `min.insync.replicas`, unclean leader election and the data-loss tradeoff · segments, the log directory layout, **retention by time and size**, and **log compaction** for changelog topics · consumer groups and how partitions are distributed among consumers (and why more consumers than partitions leaves some idle) · running Kafka in Docker and the essential CLI: `kafka-topics`, `kafka-console-producer/consumer`, `kafka-consumer-groups --describe` for lag

**Day 374 — Kafka Producers: Batching, Acks & Idempotence** · 🎥 45m · 💻 50m
The producer's internal pipeline: serializer → partitioner → record accumulator (batching) → sender thread · **`acks`**: 0 (fire and forget), 1 (leader only), **all/-1** (all in-sync replicas) — and the durability/latency tradeoff, plus why `acks=all` needs `min.insync.replicas>=2` to actually mean anything · `retries`, `delivery.timeout.ms`, `request.timeout.ms`, `max.in.flight.requests.per.connection` and **how in-flight > 1 with retries can reorder messages** · **`enable.idempotence=true`** (the default since 3.0): producer id + sequence numbers to deduplicate on the broker and preserve order · throughput tuning: `batch.size`, `linger.ms`, `compression.type` (lz4/snappy/zstd), `buffer.memory`, and `max.request.size` · custom `Partitioner` and the sticky partitioner · `send()` returning a `Future` vs the callback form, and the fire-and-forget mistake

**Day 375 — Kafka Consumers: Groups, Offsets & Rebalancing** · 🎥 45m · 💻 50m
The poll loop: `poll(Duration)`, processing, then committing — and the fact that a consumer is **not thread-safe** · **consumer groups**: `group.id`, partition assignment, and scaling by adding consumers up to the partition count · **offset management**: `enable.auto.commit` (and why the default auto-commit causes message loss on rebalance), `auto.commit.interval.ms`, `commitSync` vs `commitAsync`, committing offset+1, and storing offsets externally for exactly-once sinks · `auto.offset.reset` = earliest / latest / none · **rebalancing**: what triggers it (member join/leave, `max.poll.interval.ms` exceeded, `session.timeout.ms`/`heartbeat.interval.ms`), the stop-the-world eager protocol vs **cooperative-sticky incremental rebalancing**, static membership with `group.instance.id`, and `ConsumerRebalanceListener` for committing before losing partitions · `max.poll.records` and the "processing takes too long → rebalance loop" failure mode · **consumer lag** as your primary health metric

**Day 376 — Spring for Apache Kafka: KafkaTemplate & @KafkaListener** · 🎥 50m · 💻 60m
**`spring-kafka`** (and `spring-boot-starter` wiring) with `spring.kafka.*` properties for bootstrap servers, producer, consumer, and admin · **`KafkaTemplate`**: `send(topic, key, value)` returning a `CompletableFuture<SendResult>`, `sendDefault`, `ProducerRecord` with headers, `executeInTransaction`, and `setObservationEnabled` for tracing · `NewTopic` beans and `KafkaAdmin` for topic creation in dev · **`@KafkaListener`**: `topics`/`topicPattern`/`topicPartitions`, `groupId`, `concurrency`, `containerFactory`, `@Payload`, `@Header(KafkaHeaders.RECEIVED_KEY)`, `Acknowledgment` for manual ack, and `ConsumerRecord`/batch listeners (`batch=true`) · `ConcurrentKafkaListenerContainerFactory` and `ContainerProperties.AckMode` (RECORD, BATCH, MANUAL, MANUAL_IMMEDIATE, TIME, COUNT) · `@KafkaListener` on a class with `@KafkaHandler` for multiple payload types · pausing/resuming containers and `KafkaListenerEndpointRegistry` · `ReplyingKafkaTemplate` for request/reply · testing with `EmbeddedKafka` vs a Kafka Testcontainer

**Day 377 — Serialization, Schema Registry & Evolution** · 🎥 45m · 💻 50m
Serializer/deserializer pairs and the fact that **the wire format is your real API contract** · `StringSerializer`, `JsonSerializer`/`JsonDeserializer` (with `spring.json.trusted.packages` — **and the deserialization security risk of trusting everything**), `ErrorHandlingDeserializer` to prevent one poison record from killing the consumer · **Avro** with Confluent Schema Registry: schema definition, code generation, the compact binary format, and the schema id embedded in each message · **Protobuf** and JSON Schema as alternatives · **compatibility modes**: BACKWARD, FORWARD, FULL, and NONE — with concrete examples of what each allows (adding an optional field, removing a field, renaming) · schema evolution rules that keep old consumers working · registering schemas in CI and failing the build on an incompatible change · a comparison of payload size and throughput across JSON, Avro, and Protobuf · versioning events and the "expand then contract" approach

**Day 378 — Kafka Error Handling: Retries, DLT & Idempotency** · 🎥 45m · 💻 55m
Why an unhandled exception in a listener blocks the partition forever (or spins in a retry loop) · **`DefaultErrorHandler`** with `FixedBackOff`/`ExponentialBackOffWithMaxRetries`, `addNotRetryableExceptions` (validation errors should never be retried), and `setCommitRecovered` · **`DeadLetterPublishingRecoverer`** and the `<topic>.DLT` convention, with headers carrying the original topic, partition, offset, exception class, and stack trace · **`@RetryableTopic`** for non-blocking retries: separate `-retry-0`, `-retry-1` topics with increasing delays so the main partition keeps flowing, plus `attempts`, `backoff`, `dltStrategy`, `include`/`exclude`, and `@DltHandler` · blocking vs non-blocking retry — when each is appropriate and how they interact with ordering · **idempotent consumers**: a processed-message table keyed by `topic-partition-offset` or a business idempotency key, upserts instead of inserts, and conditional updates · replaying from the DLT after a fix, and resetting offsets with `kafka-consumer-groups --reset-offsets` · alerting on DLT growth and consumer lag

**Day 379 — Kafka Transactions & Exactly-Once Semantics** · 🎥 45m · 💻 45m
What EOS actually guarantees: exactly-once processing **within Kafka** for a consume-transform-produce loop — not exactly-once side effects in your database · `transactional.id`, the transaction coordinator, and the transaction log · `initTransactions`, `beginTransaction`, `sendOffsetsToTransaction`, `commitTransaction`, `abortTransaction` · **`isolation.level=read_committed`** on the consumer and how aborted messages are filtered out · **Spring's `KafkaTransactionManager`**, `@Transactional` on a listener, `spring.kafka.producer.transaction-id-prefix`, and `ChainedKafkaTransactionManager` (deprecated) — and **why chaining a Kafka transaction with a JPA transaction is not atomic** · the correct pattern instead: the **transactional outbox** from Day 334, implemented here properly · `processing.guarantee=exactly_once_v2` in Kafka Streams · the throughput cost of transactions, measured · zombie fencing and epoch numbers

**Day 380 — Kafka Streams** · 🎥 50m · 💻 55m
Kafka Streams as a library, not a cluster — your app *is* the stream processor · the topology: source → processors → sink, and `StreamsBuilder` · **`KStream`** (an event stream) vs **`KTable`** (a changelog/current-state table) vs `GlobalKTable` (fully replicated) and the stream-table duality · stateless operations: `filter`, `map`, `mapValues`, `flatMap`, `branch`, `merge`, `selectKey`, `peek`, `to`/`through` · **stateful operations**: `groupByKey`/`groupBy` → `count`, `reduce`, `aggregate`, with **state stores** (RocksDB) backed by changelog topics for fault tolerance · **windowing**: tumbling, hopping, sliding, and session windows, plus grace periods and out-of-order handling with event-time semantics · **joins**: KStream-KStream (windowed), KStream-KTable, KTable-KTable, and foreign-key joins · repartitioning and why it happens · **`spring-kafka-streams`** with `@EnableKafkaStreams`, `StreamsBuilderFactoryBean`, and `KafkaStreamsConfiguration` · interactive queries against state stores · `TopologyTestDriver` for unit testing a topology without a broker · Kafka Streams vs Flink vs Spark Streaming

**Day 381 — Spring Cloud Stream** · 🎥 40m · 💻 45m
The binder abstraction: write business logic once, bind to Kafka, RabbitMQ, Kinesis, or Pub/Sub by swapping a dependency · **the functional programming model**: `Supplier<T>` (source), `Function<T,R>` (processor), `Consumer<T>` (sink) as `@Bean`s, discovered automatically · `spring.cloud.function.definition` and composing functions with `|` · **bindings configuration**: `spring.cloud.stream.bindings.<name>-in-0.destination/group/content-type` and `<name>-out-0.destination`, plus consumer/producer properties (concurrency, partitioning, max-attempts) · binder-specific properties under `spring.cloud.stream.kafka.binder.*` · **error handling**: `enableDlq`, error channels, `@ServiceActivator(inputChannel = "...errors")`, and retry configuration · `StreamBridge` for imperative sends · partitioning with `partitionKeyExpression` · **reactive bindings** with `Function<Flux<T>, Flux<R>>` · testing with `spring-cloud-stream-test-binder` · the honest question of whether the abstraction earns its complexity versus using `spring-kafka` directly

**Day 382 — Event-Driven Architecture: EDA, CQRS & Event Sourcing** · 🎥 50m · 💻 45m
**Event notification vs event-carried state transfer vs event sourcing** — three different things people all call "events" · **choreography** (each service reacts to events, no central coordinator — loosely coupled but hard to follow) vs **orchestration** (a coordinator drives the flow — visible and testable but centralized) · designing good events: past tense, immutable facts, a stable schema, an event id, a timestamp, a correlation id and causation id, and the "thin vs fat event" tradeoff · **CQRS**: separating the write model from one or more read models, projections built by consuming events, and eventual consistency in the UI · **event sourcing**: the event store as the source of truth, rebuilding state by replay, snapshots for performance, and the hard parts (schema evolution over years, GDPR deletion, debugging) · when event sourcing is worth it and when it is architectural theatre · event catalogues, AsyncAPI documentation, and schema governance

**Day 383 — Transactional Outbox & CDC with Debezium** · 🎥 45m · 💻 55m
The dual-write problem restated with a crash demo · **implementing the outbox**: an `outbox_event` table (id, aggregate type, aggregate id, event type, payload, created_at, processed_at), writing the domain change and the event in **one local transaction**, and the relay that publishes them · **polling publisher** implementation with `FOR UPDATE SKIP LOCKED`, batching, ordering per aggregate, and cleanup — plus its latency and load characteristics · **CDC with Debezium**: reading the Postgres WAL via logical replication (or the MySQL binlog), Kafka Connect, connector configuration, and the **outbox event router SMT** that turns outbox rows into properly-keyed topic messages · replication slots, WAL retention, and the disk-fill hazard if a connector stops · initial snapshots and the `snapshot.mode` options · at-least-once delivery from CDC and the idempotent-consumer requirement · the **inbox pattern** for consumer-side deduplication · Debezium Embedded Engine as an alternative to running Kafka Connect

**Day 384 — Phase 19 Capstone: The Order Events Pipeline** · 🎥 50m · 💻 150m
Build the full pipeline end to end: an **order service** that writes an order and an outbox event in one transaction; a **Debezium/outbox relay** publishing to `orders.events`; an **inventory service** consuming with an idempotent handler that reserves stock and emits `inventory.reserved` or `inventory.rejected`; a **payment service** with retryable and non-retryable error classification, `@RetryableTopic` backoff, and a DLT; a **notification service** consuming with a fan-out; and a **Kafka Streams job** producing a live `orders-per-minute-by-region` aggregate to a state store exposed via an interactive-query endpoint · add Avro schemas with a registry and a compatibility check in CI · add consumer-lag and DLT metrics to Micrometer, and trace propagation across every hop · write integration tests with Kafka Testcontainers, then deliberately break each component and prove the pipeline recovers

---

# PHASE 20 — Caching & NoSQL
**Days 385–396 · Weeks 56–58**
> **Milestone project:** a multi-level cache with metrics, invalidation, and a measured latency improvement on a real endpoint.

**Day 385 — Caching Theory & Strategies** · 🎥 40m · 💻 35m
Why caching works: temporal and spatial locality, and the Pareto shape of real access patterns · the **hit ratio** as the number that governs everything, and the math showing why 80% → 95% matters more than it sounds · the caching layers in a real system: CPU → application local → distributed → database buffer pool → CDN → browser · **patterns**: cache-aside (lazy loading — the most common), read-through, write-through, write-behind/write-back, and refresh-ahead — with the failure mode of each · **eviction policies**: LRU, LFU, FIFO, TinyLFU, and random, plus size-based vs time-based (TTL, TTI) expiry · **the hard problems**: invalidation, staleness tolerance, cache stampede/dogpile, hot keys, and the thundering herd on restart · what should never be cached (per-user secrets in a shared cache, data with strict consistency needs) · measuring cache effectiveness rather than assuming it

**Day 386 — Spring's Cache Abstraction** · 🎥 45m · 💻 50m
`@EnableCaching`, the `CacheManager`/`Cache` SPI, and the AOP proxy that implements it (self-invocation applies again) · **`@Cacheable`**: `value`/`cacheNames`, `key` (SpEL: `#id`, `#user.id`, `#root.methodName`), `keyGenerator`, `condition` (evaluated before), `unless` (evaluated after, on the result), and `sync = true` to prevent a stampede · **`@CachePut`** (always executes, always updates) and the difference from `@Cacheable` · **`@CacheEvict`** with `key`, `allEntries`, and `beforeInvocation` · `@Caching` for combining several, and `@CacheConfig` at class level · **`Cache.ValueWrapper` and caching `null`** — the `unless = "#result == null"` decision and negative caching for missing keys · custom `KeyGenerator` and why the default `SimpleKeyGenerator` breaks with overloaded methods · `CacheErrorHandler` so a Redis outage degrades instead of failing requests · `CacheManager` implementations: `ConcurrentMapCacheManager` (dev only), `CaffeineCacheManager`, `RedisCacheManager`, `JCacheCacheManager`, `CompositeCacheManager` · Actuator's `/caches` endpoint

**Day 387 — Caffeine: High-Performance Local Caching** · 🎥 40m · 💻 45m
Caffeine as the successor to Guava Cache, using **Window TinyLFU** for a near-optimal hit ratio · `Caffeine.newBuilder()`: `maximumSize`, `maximumWeight` + `weigher`, `expireAfterWrite`, `expireAfterAccess`, `expireAfterVariably`, `refreshAfterWrite` (**the difference between expiry and refresh** — refresh serves stale while reloading asynchronously), `softValues`/`weakKeys`, and `recordStats` · `LoadingCache` and `AsyncLoadingCache` with a `CacheLoader` · Spring integration: `spring.cache.caffeine.spec=maximumSize=1000,expireAfterWrite=10m`, per-cache specs with a `CaffeineSpec`, and a `CacheManager` bean with different configs per cache name · `CacheStats` (hit rate, load penalty, eviction count) exported to Micrometer · **the fundamental limitation of local caches**: each instance has its own copy, so invalidation across N pods needs a pub/sub broadcast — the setup for Day 391 · sizing a local cache against your heap and its GC impact

**Day 388 — Redis Fundamentals** · 🎥 45m · 💻 50m
Redis as a single-threaded, in-memory data structure server (and how the single thread makes commands atomic) · **data types and their real uses**: strings (cache values, counters with `INCR`), hashes (objects, partial updates), lists (queues, recent-items with `LPUSH`/`LTRIM`), sets (tags, unique visitors, set ops), sorted sets (leaderboards, priority queues, sliding-window rate limits), bitmaps (daily active users), HyperLogLog (cardinality estimation in 12 KB), streams (an append-only log with consumer groups), and geospatial indexes · key commands: `SET`/`GET`/`SETEX`/`SETNX`/`GETSET`, `EXPIRE`/`TTL`/`PERSIST`, `DEL`/`UNLINK`, `SCAN` (**never `KEYS` in production**), `MULTI`/`EXEC`, `EVAL` for Lua · **expiration**: lazy plus active sampling, and why a key can outlive its TTL briefly · **eviction policies**: `noeviction`, `allkeys-lru`, `volatile-lru`, `allkeys-lfu`, `volatile-ttl` and choosing one with `maxmemory` · **persistence**: RDB snapshots vs AOF (and `appendfsync` modes) and the fact that a cache usually needs neither · replication, Sentinel, and Cluster with hash slots · `redis-cli`, `INFO`, `MONITOR`, `SLOWLOG`, and `--bigkeys`

**Day 389 — Redis as a Spring Cache** · 🎥 45m · 💻 50m
`RedisCacheManager` with `RedisCacheConfiguration`: `entryTtl`, `disableCachingNullValues`, `prefixCacheNameWith`, `computePrefixWith`, and `serializeValuesWith` · **choosing serializers deliberately**: `StringRedisSerializer` for keys, `GenericJackson2JsonRedisSerializer` for readable and language-agnostic values, `Jackson2JsonRedisSerializer<T>` for a fixed type, and why the JDK default is a trap (unreadable, Java-only, and a deserialization risk) · handling `java.time` and polymorphic types in cached values · **per-cache configuration** with `withInitialCacheConfigurations` so `users` gets 5 minutes and `countries` gets a day · key design: `app:v1:users:42`, including a version segment so a deploy can invalidate everything · `CacheErrorHandler` for graceful degradation when Redis is down, plus circuit breaking around the cache · `RedisCacheWriter` and locking · connection pool sizing with Lettuce, and the shared-`StatefulRedisConnection` model · monitoring hit rate, memory, evictions, and latency

**Day 390 — Redis Patterns: Locks, Rate Limits, Pub/Sub & Streams** · 🎥 50m · 💻 55m
**Distributed locks**: `SET key value NX PX ttl`, the unique-token requirement, and the Lua compare-and-delete for safe release · **why a naive lock is unsafe** (TTL expiry mid-work, clock drift, GC pauses) and what fencing tokens fix · **Redisson**: `RLock` with lease time and watchdog auto-renewal, `RReadWriteLock`, `RSemaphore`, `RRateLimiter`, `RBucket`, `RMap` with local caching, `RBloomFilter`, and `RScheduledExecutorService` · the Redlock debate and Martin Kleppmann's critique — and the honest conclusion that a lock for correctness needs a fencing token or a database constraint · **rate limiting** with a Lua token bucket and with sorted-set sliding windows · **pub/sub** with `RedisMessageListenerContainer` for cache-invalidation broadcasts (fire-and-forget, no persistence) · **Redis Streams** with consumer groups as a lightweight durable queue (`XADD`, `XREADGROUP`, `XACK`, `XPENDING`, `XAUTOCLAIM`) and `StreamListener` in Spring · leaderboards, session storage with Spring Session, and idempotency-key storage

**Day 391 — Cache Consistency, Stampedes & Multi-Level Caches** · 🎥 45m · 💻 50m
**The invalidation problem**: cache-aside write ordering (update the database then delete the cache — and the race that still exists), delete vs update, and delayed double-delete · TTL as the pragmatic safety net, and choosing one from your staleness tolerance · read-your-own-writes and the replica-lag interaction from Day 220 · **cache stampede**: what happens when a hot key expires under load, and the fixes — `@Cacheable(sync = true)`, a distributed lock on reload, probabilistic early expiration (XFetch), and refresh-ahead · **cache penetration** (repeated misses for keys that don't exist) fixed with negative caching and a Bloom filter · **cache avalanche** (mass simultaneous expiry) fixed with TTL jitter · **hot keys** and how to shard or replicate them · **multi-level caching**: Caffeine as L1 and Redis as L2, with a Redis pub/sub channel broadcasting invalidations to every pod's L1 — implemented live · warming the cache at startup without hammering the database · measuring the end-to-end latency improvement and deciding whether the complexity paid for itself

**Day 392 — MongoDB: Modeling, Indexes & Transactions** · 🎥 45m · 💻 50m
The document model and when it fits (variable schemas, deeply nested read-mostly aggregates, rapid iteration) versus when it doesn't (heavily relational data, ad-hoc joins, strong multi-document invariants) · BSON types, `ObjectId` structure, and the 16 MB document limit · **CRUD**: `insertOne/Many`, `find` with query operators (`$eq`, `$gt`, `$in`, `$regex`, `$exists`, `$elemMatch`), projections, `updateOne/Many` with `$set`, `$inc`, `$push`, `$pull`, `$addToSet`, array filters, `replaceOne`, `deleteOne/Many`, `findOneAndUpdate`, and `bulkWrite` · **schema design**: embed vs reference decided by cardinality, access pattern, and update frequency; the subset, extended reference, computed, and bucket patterns; and modeling one-to-few, one-to-many, and one-to-squillions · **indexes**: single field, compound (with the ESR rule — Equality, Sort, Range), multikey on arrays, text, geospatial, TTL, partial, and unique · `explain("executionStats")`, `COLLSCAN` vs `IXSCAN`, and covered queries · write concern (`w`, `j`, `wtimeout`) and read concern/read preference · multi-document transactions on replica sets and their cost

**Day 393 — MongoDB Advanced: Aggregation, Change Streams & Scaling** · 🎥 45m · 💻 50m
**The aggregation pipeline** stage by stage: `$match` (push it first!), `$project`, `$group` with accumulators, `$sort`, `$limit`/`$skip`, `$unwind`, `$lookup` (a left outer join, with the pipeline form for correlated lookups), `$facet` for multiple aggregations in one pass, `$bucket`, `$addFields`/`$set`, `$replaceRoot`, `$merge`/`$out` for materialized views, and `$graphLookup` for hierarchies · running aggregations from Spring with `Aggregation.newAggregation` and typed results · pipeline optimization and the memory limit with `allowDiskUse` · **change streams**: `watch()` with resume tokens for CDC-style reactions, and `ReactiveMongoTemplate.changeStream` in Spring · **scaling**: replica sets, elections, and read preference; sharding with a shard key (cardinality, frequency, monotonicity), chunk balancing, hashed vs ranged shards, and **why a bad shard key is nearly impossible to fix** · Atlas Search and vector search briefly · schema validation rules and migration strategies for schemaless data

**Day 394 — Elasticsearch & Full-Text Search** · 🎥 45m · 💻 50m
Why a relational `LIKE '%term%'` cannot do search: no relevance, no stemming, no typo tolerance, no facets · **the inverted index** explained by building one by hand · analyzers: character filters → tokenizer → token filters (lowercase, stop words, stemming, synonyms, edge n-grams), and the crucial rule that index-time and search-time analysis must be compatible · mappings: `text` vs `keyword` (and the `.keyword` sub-field), numeric, date, `nested` vs `object`, and dynamic mapping risks · **queries**: `match`, `match_phrase`, `multi_match`, `term`, `range`, `bool` (must/should/filter/must_not — and why `filter` is cacheable and score-free), `fuzzy`, `prefix`, `wildcard`, and `function_score` · relevance scoring with BM25 and boosting · **aggregations** for faceted navigation · autocomplete with completion suggesters and edge n-grams · **Spring Data Elasticsearch**: `@Document`, `@Field`, `ElasticsearchRepository`, `ElasticsearchOperations`, `NativeQuery`, and `Criteria` · keeping Elasticsearch in sync with Postgres (dual write vs outbox vs CDC — and why CDC usually wins) · index aliases and zero-downtime reindexing · Elasticsearch vs OpenSearch vs Postgres full-text search vs Meilisearch/Typesense

**Day 395 — Cassandra, DynamoDB & Wide-Column Modeling** · 🎥 45m · 💻 45m
**Cassandra**: a masterless ring, consistent hashing with vnodes, tunable consistency (`ONE`, `QUORUM`, `ALL`, `LOCAL_QUORUM`) and the R + W > N rule, hinted handoff, read repair, and the LSM-tree storage engine with SSTables and compaction · **query-first data modeling**: the partition key determines distribution, clustering columns determine on-disk order, and **you design a table per query** · primary key design, wide rows, and the anti-patterns (unbounded partitions, `ALLOW FILTERING`, secondary indexes, deletes and tombstones) · CQL basics and lightweight transactions · `spring-boot-starter-data-cassandra`, `@Table`, `@PrimaryKeyClass`, `CassandraTemplate` · **DynamoDB**: partition key + sort key, single-table design, GSIs and LSIs, capacity modes and hot partitions, conditional writes for optimistic concurrency, DynamoDB Streams, and the Enhanced Client from the AWS SDK v2 · **when a wide-column store is the right answer** (massive write throughput, time series, known access patterns) and when it's a trap

**Day 396 — Polyglot Persistence & Choosing a Datastore** · 🎥 45m · 💻 45m
**CAP** stated precisely (and the common misreadings) and **PACELC** as the more useful framing — because the latency-vs-consistency tradeoff applies even when the network is healthy · consistency models: strong, sequential, causal, read-your-writes, monotonic reads, and eventual · **a decision framework**: data shape, access patterns, consistency requirements, scale, query flexibility, team expertise, and operational cost · a comparison matrix across relational, document, key-value, wide-column, search, graph (Neo4j), time series (TimescaleDB, InfluxDB), and vector (pgvector, Pinecone) stores · **polyglot persistence in practice**: Postgres as the system of record, Redis for cache and sessions, Elasticsearch for search, Kafka as the integration backbone, S3 for blobs — and the synchronization burden each addition creates · **"just use Postgres"** as a serious default: JSONB, full-text search, arrays, LISTEN/NOTIFY, PostGIS, pgvector, partitioning, and how far one database really goes · migrating between stores and the strangler pattern

---

# PHASE 21 — Microservices & Spring Cloud
**Days 397–418 · Weeks 58–61**
> **Milestone project:** a five-service system with a gateway, discovery, config server, resilience, sagas, and end-to-end tracing.

**Day 397 — Monolith, Modular Monolith & Microservices** · 🎥 45m · 💻 35m
What a monolith actually is, and the fact that most monoliths are fine · the real drivers for splitting: independent deployability, team autonomy, differing scaling profiles, and technology heterogeneity — none of which are "microservices are modern" · **the costs nobody mentions on the first day**: distributed transactions, network failure as a first-class concern, eventual consistency, operational complexity, distributed debugging, data duplication, contract versioning, and a 5× infrastructure bill · **the modular monolith** as the right default: module boundaries enforced with ArchUnit or **Spring Modulith**, in-process events, one database with schema-per-module, and a clean extraction path · Conway's law and the inverse maneuver · the distributed monolith anti-pattern (all the costs, none of the benefits) · **a decision checklist**: when to split, what to split first, and how to know it worked

**Day 398 — Domain-Driven Design: Strategic Patterns** · 🎥 45m · 💻 45m
Why DDD is the prerequisite for good service boundaries · **ubiquitous language** and why "Order" means three different things in three departments · **bounded contexts** as the unit of consistency and of team ownership, and how one physical entity becomes several context-specific models · **context mapping** relationships: partnership, shared kernel, customer/supplier, conformist, **anti-corruption layer**, open host service, published language, separate ways · **event storming** as a practical workshop technique — running one on camera for an e-commerce domain to discover aggregates, commands, events, policies, and read models · subdomains: core, supporting, and generic (and buying rather than building the generic ones) · mapping bounded contexts to services (usually one-to-one, sometimes several contexts per service to start)

**Day 399 — Decomposition Strategies & Database Per Service** · 🎥 45m · 💻 45m
Decomposition **by business capability** vs **by subdomain** vs (badly) by technical layer · the strangler fig pattern for extracting a service from a monolith incrementally, with a routing façade · branch-by-abstraction and parallel run for safety · **database per service**: why sharing a database recouples everything, and what you lose (joins, foreign keys, ACID across services) · handling the loss: API composition, CQRS read models, data duplication with events, and the **shared reference data** problem · splitting a database: identify the seam, break foreign keys, move the tables, dual-write then cut over · **service granularity**: too big (a distributed monolith) vs too small (a chatty nano-service mesh) and the heuristics in between · service templates, ownership, on-call, and the "you build it, you run it" principle · the folder and repo structure question: monorepo vs polyrepo

**Day 400 — Spring Cloud: Overview, Release Trains & Compatibility** · 🎥 35m · 💻 35m
What Spring Cloud provides and — just as importantly — what it has dropped: Netflix Ribbon, Hystrix, Zuul 1, and Sleuth are all gone, replaced by Spring Cloud LoadBalancer, Resilience4j, Spring Cloud Gateway, and Micrometer Tracing · **the release train** naming (from London Underground stations to calendar versioning) and the **strict Boot ↔ Cloud compatibility matrix** — the single most common source of "it doesn't start" · importing `spring-cloud-dependencies` as a BOM · the module map: Config, Netflix (Eureka), Gateway, OpenFeign, Circuit Breaker, LoadBalancer, Bus, Stream, Contract, Task, Vault, Consul, Kubernetes, AWS/GCP/Azure · **the bootstrap context** and its replacement by `spring.config.import` · when you don't need Spring Cloud at all because Kubernetes provides discovery, config, and load balancing natively · the reference architecture the rest of this phase builds

**Day 401 — Spring Cloud Config Server & Client** · 🎥 45m · 💻 50m
Why externalized, centralized, versioned configuration matters across N services and M environments · **the server**: `spring-cloud-config-server`, `@EnableConfigServer`, and backends — Git (the default, with branches as labels, `searchPaths`, and private-repo auth), file system, Vault, JDBC, AWS S3/Parameter Store · the resource resolution order for `{application}-{profile}.yml`, `application.yml` as shared defaults, and label-based versioning · **the client**: `spring-cloud-starter-config` and `spring.config.import=optional:configserver:http://config:8888`, plus `spring.application.name` and `spring.profiles.active` as the lookup key · **encryption**: `{cipher}` values, symmetric keys and a JKS keystore, and the `/encrypt` and `/decrypt` endpoints · **refreshing at runtime**: `@RefreshScope`, the Actuator `/actuator/refresh` endpoint, and `spring-cloud-bus` broadcasting `/busrefresh` over Kafka or RabbitMQ so every instance updates at once · securing the config server itself · **and the honest alternative**: Kubernetes ConfigMaps and Secrets with a rolling restart, which is simpler and what most teams actually use

**Day 402 — Service Discovery with Eureka** · 🎥 45m · 💻 50m
The problem: instances come and go, IPs change, and hardcoded URLs don't survive autoscaling · **client-side discovery** (the client gets the instance list and chooses) vs **server-side discovery** (a load balancer or DNS chooses) · **Eureka Server**: `spring-cloud-starter-netflix-eureka-server`, `@EnableEurekaServer`, the dashboard, and peer-to-peer replication for HA · **Eureka Client**: `spring-cloud-starter-netflix-eureka-client`, registration, the 30-second heartbeat/renewal cycle, the client-side registry cache and its refresh interval, and `eureka.instance.*` (preferIpAddress, instanceId, metadata, lease durations) · **self-preservation mode** — what it is, why it exists, and why it confuses everyone during a partial outage · the **eventual-consistency delay** between an instance dying and clients noticing, and tuning it (at the cost of chattier heartbeats) · `DiscoveryClient` and `@LoadBalanced RestTemplate`/`WebClient` resolving `http://order-service/...` · zones and region awareness

**Day 403 — Consul, Kubernetes-Native Discovery & DNS** · 🎥 40m · 💻 40m
**Consul**: the agent/server architecture, the gossip protocol, service registration with health checks, the KV store for configuration, and DNS + HTTP interfaces · `spring-cloud-starter-consul-discovery` and `-config`, and how it plugs into the same `DiscoveryClient` abstraction · **Kubernetes-native discovery**: `Service` objects, `ClusterIP`, kube-dns/CoreDNS, environment variables, and why `http://order-service.default.svc.cluster.local` needs no library at all · `spring-cloud-kubernetes-discovery` and `-config` for reading ConfigMaps and Secrets as property sources, plus RBAC requirements · **headless services** and `StatefulSet` stable identities for stateful workloads · **the honest recommendation**: if you're on Kubernetes, use its discovery and skip Eureka entirely; Eureka earns its place on VMs, ECS, or hybrid estates · service mesh discovery as a third option (Day 417)

**Day 404 — Client-Side Load Balancing** · 🎥 35m · 💻 40m
`spring-cloud-starter-loadbalancer` replacing Netflix Ribbon · `@LoadBalanced` on a `RestTemplate`, `RestClient.Builder`, or `WebClient.Builder`, and the `ReactorLoadBalancerExchangeFilterFunction` that resolves the logical service name · **`ReactorServiceInstanceLoadBalancer`** implementations: `RoundRobinLoadBalancer` (the default) and `RandomLoadBalancer`, plus writing a custom one (weighted, least-connections, or latency-aware) · per-service configuration with `@LoadBalancerClient`/`@LoadBalancerClients` · **`ServiceInstanceListSupplier` decorators**: caching, health checks, zone preference, same-instance preference, hints, and **request-based sticky sessions** · retries with `spring-retry` and `spring.cloud.loadbalancer.retry.*` — and why retrying a non-idempotent POST is dangerous · load balancer metrics · client-side vs server-side (Kubernetes Service, or a mesh sidecar) and the tradeoff in fan-out latency

**Day 405 — Spring Cloud Gateway I: Routes & Predicates** · 🎥 45m · 💻 50m
The API gateway pattern: a single entry point, cross-cutting concerns in one place, protocol translation, and the backend-for-frontend variant · Gateway is **reactive** (Netty + WebFlux) — and the resulting rule that everything in a filter must be non-blocking, plus the newer `spring-cloud-gateway-server-webmvc` blocking option · route definition in YAML and with the `RouteLocatorBuilder` Java DSL: `id`, `uri` (including `lb://order-service` for discovery), `predicates`, `filters`, `order` · **predicate factories**: Path, Method, Header, Query, Host, Cookie, RemoteAddr, After/Before/Between, Weight (for canary splits), CloudFoundryRouteService, and custom `RoutePredicateFactory` · combining predicates and route evaluation order · `spring.cloud.gateway.discovery.locator.enabled` for automatic routes · the Actuator `/gateway/routes` endpoint and dynamic route refresh · testing routes with `WebTestClient`

**Day 406 — Spring Cloud Gateway II: Filters, Security & Resilience** · 🎥 50m · 💻 55m
**GatewayFilter factories**: AddRequestHeader/Parameter, RemoveResponseHeader, RewritePath, SetPath, StripPrefix, PrefixPath, SetStatus, RedirectTo, PreserveHostHeader, SaveSession, RequestSize, ModifyRequestBody/ModifyResponseBody, Retry, `CircuitBreaker` (Resilience4j) with a `fallbackUri` · **`GlobalFilter`** for correlation ids, logging, and auth applied to every route, plus `Ordered` and the pre/post phases (`chain.filter(exchange).then(Mono.fromRunnable(...))`) · writing a **custom `AbstractGatewayFilterFactory`** with configuration properties · **`RequestRateLimiter`** with the Redis token-bucket implementation, `KeyResolver` (by user, IP, or API key), replenishRate/burstCapacity/requestedTokens, and the `429` response · **security at the gateway**: terminating OAuth2/JWT validation, `TokenRelay` to forward tokens downstream, and the decision of whether services re-validate (they should) · CORS configuration in one place · response aggregation and why the gateway should not become a business-logic layer · gateway metrics, tracing, and access logs

**Day 407 — OpenFeign: Declarative HTTP Clients** · 🎥 45m · 💻 50m
`spring-cloud-starter-openfeign`, `@EnableFeignClients`, and `@FeignClient(name = "order-service", path = "/orders")` on an interface with standard Spring MVC annotations · resolving the name through discovery and load balancing, or pinning a `url` for external APIs · **configuration**: `logger-level` (NONE/BASIC/HEADERS/FULL) plus the DEBUG logger it requires, connect/read timeouts, `Retryer`, `ErrorDecoder` to map 4xx/5xx into typed domain exceptions, `RequestInterceptor` for auth headers and trace propagation, and the encoder/decoder beans · per-client vs default configuration classes and the `@Configuration` scoping trap · **Feign + Resilience4j circuit breaking** with `feign.circuitbreaker.enabled` and a `fallback`/`fallbackFactory` (and why the factory version, which exposes the cause, is better) · sharing the interface between provider and consumer — the coupling debate · file upload with `feign-form` · **Feign vs `RestClient` vs Spring 6 `@HttpExchange` interfaces**, and why new projects often no longer need Feign · testing with WireMock and `@SpringBootTest`

**Day 408 — Resilience4j I: Circuit Breakers** · 🎥 45m · 💻 50m
**The cascading failure** problem: one slow dependency exhausts the caller's threads and takes down the whole chain — demonstrated live · the circuit breaker state machine: **CLOSED → OPEN → HALF_OPEN**, and the `DISABLED`/`FORCED_OPEN` manual states · `resilience4j-spring-boot3` and the `@CircuitBreaker(name = "...", fallbackMethod = "...")` annotation, plus the functional/decorator API · **configuration**: `slidingWindowType` (COUNT_BASED vs TIME_BASED), `slidingWindowSize`, `minimumNumberOfCalls`, `failureRateThreshold`, `slowCallRateThreshold`/`slowCallDurationThreshold`, `waitDurationInOpenState`, `permittedNumberOfCallsInHalfOpenState`, `automaticTransitionFromOpenToHalfOpenEnabled`, `recordExceptions`/`ignoreExceptions` · **fallback method rules** (same signature plus the exception parameter) and designing a fallback that degrades meaningfully — cached data, a default, or a clear partial response — rather than hiding the failure · circuit breaker events, the Actuator endpoints, and Micrometer metrics on a Grafana panel · Hystrix's retirement and why Resilience4j replaced it

**Day 409 — Resilience4j II: Retry, Bulkhead, Rate Limiter & TimeLimiter** · 🎥 45m · 💻 50m
**`@Retry`**: `maxAttempts`, `waitDuration`, `enableExponentialBackoff` with a multiplier, `enableRandomizedWait` (**jitter, to avoid synchronized retry storms**), `retryExceptions`/`ignoreExceptions`, and `retryOnResultPredicate` · **only retry idempotent operations**, and the retry-amplification effect where 3 retries at 3 layers becomes 27 requests · **`@Bulkhead`**: SEMAPHORE (limit concurrent calls) vs THREADPOOL (isolate on a separate pool) — bounding the blast radius of one slow dependency · **`@RateLimiter`**: `limitForPeriod`, `limitRefreshPeriod`, `timeoutDuration` for client-side throttling of a partner API · **`@TimeLimiter`** for `CompletableFuture`-returning methods, and why a transport-level timeout is still mandatory · **the correct decorator order**: Retry(CircuitBreaker(RateLimiter(TimeLimiter(Bulkhead(call))))) and what goes wrong if you invert it · combining annotations on one method and their interaction · fallback chains · configuring instances and defaults in `application.yml` · Spring Retry as the simpler alternative for local retries

**Day 410 — Metrics: Micrometer, Prometheus & Grafana** · 🎥 50m · 💻 55m
**Micrometer** as the vendor-neutral metrics façade (SLF4J for metrics) and its registry model · **meter types**: Counter (monotonic), Gauge (a sampled value, and the strong-reference pitfall), Timer (count + total + max + percentiles), DistributionSummary, LongTaskTimer, and FunctionCounter · **tags/labels** and the **cardinality explosion** that will take down your Prometheus (never tag with a user id, order id, or raw URL) · out-of-the-box Boot metrics: `http.server.requests`, `jvm.memory.*`, `jvm.gc.*`, `jvm.threads.*`, `hikaricp.*`, `cache.*`, `kafka.*`, `resilience4j.*`, `logback.events`, `process.*` · custom metrics with `MeterRegistry`, `@Timed`, `@Counted`, and `@Observed` · common tags for application, environment, and instance · **Prometheus**: `micrometer-registry-prometheus`, the `/actuator/prometheus` endpoint, the pull model, scrape config, service discovery, PromQL basics (`rate`, `histogram_quantile`, `sum by`, `increase`), recording rules, and Alertmanager · **Grafana**: data sources, building a dashboard for the RED metrics (Rate, Errors, Duration) and USE metrics, variables, and importing the JVM/Spring Boot community dashboards · histogram buckets vs client-side percentiles and why only histograms aggregate correctly across instances · SLIs, SLOs, and error budgets

**Day 411 — Distributed Tracing** · 🎥 50m · 💻 55m
Why logs and metrics aren't enough when one user request touches eight services · **the model**: trace, span, parent/child, trace id, span id, baggage, and span attributes/events · **W3C Trace Context** (`traceparent`, `tracestate`) and the older B3 headers · **Micrometer Tracing** (which replaced Spring Cloud Sleuth in Boot 3): `micrometer-tracing-bridge-brave` + `zipkin-reporter-brave`, or `micrometer-tracing-bridge-otel` + the OTLP exporter · automatic instrumentation of controllers, `RestClient`/`WebClient`/Feign, `@KafkaListener`, JDBC, and scheduled tasks — and the manual `Observation` API for your own spans · **context propagation**: across threads, `@Async`, `CompletableFuture`, and Reactor's `Context`, plus putting the trace id into MDC so every log line carries it · **sampling**: head-based probability sampling, tail-based sampling, and the cost/coverage tradeoff · **backends**: Zipkin, Jaeger, Tempo, and vendor APM tools — running Zipkin/Jaeger in Docker and reading a real waterfall to find the slow hop · linking traces ↔ logs ↔ metrics as the "three pillars" story, and OpenTelemetry as the converging standard (the Java agent vs manual instrumentation)

**Day 412 — Centralized Logging** · 🎥 45m · 💻 50m
Why `kubectl logs` stops working at three services · **the pipeline**: application → stdout → collector → buffer → store → query UI · **ELK**: Elasticsearch, Logstash (and its cost), Kibana, plus Filebeat as the shipper · **the lighter alternatives**: Grafana Loki (indexing labels, not content — much cheaper) with Promtail/Alloy, and Fluent Bit/Fluentd as collectors · **structured JSON logging** from Day 288 revisited as the enabler: one JSON object per line with timestamp, level, logger, message, thread, `traceId`, `spanId`, service, environment, and business context fields · `logstash-logback-encoder` or Boot 3.4's native `logging.structured.format` · MDC fields as first-class searchable keys · **log levels in production**, dynamic level changes via `/actuator/loggers`, and sampling noisy loggers · **what must never be logged**: passwords, tokens, full card numbers, PII — and masking patterns to enforce it · retention, index lifecycle management, and cost control · building a Kibana/Grafana dashboard that goes from an alert to the exact request in three clicks

**Day 413 — Health Checks, Probes & Graceful Shutdown in Orchestrators** · 🎥 40m · 💻 45m
The three Kubernetes probes and their distinct jobs: **liveness** (restart me if I'm wedged), **readiness** (stop sending me traffic), and **startup** (give me time to boot before the others apply) · **the classic outage**: a liveness probe that checks the database, the database blips, and Kubernetes restarts every pod simultaneously — why liveness must only check the process itself · mapping Actuator health groups to probes: `/actuator/health/liveness` and `/actuator/health/readiness` with `management.endpoint.health.probes.enabled=true` · `ApplicationAvailability`, `LivenessState`, `ReadinessState`, and publishing an `AvailabilityChangeEvent` to take yourself out of rotation during maintenance · **graceful shutdown end to end**: SIGTERM → readiness flips to DOWN → the endpoint controller removes the pod → in-flight requests finish → `spring.lifecycle.timeout-per-shutdown-phase` → the process exits before `terminationGracePeriodSeconds` — plus the `preStop` sleep that covers the propagation race · draining Kafka consumers and executor pools on shutdown · probe timing (`initialDelaySeconds`, `periodSeconds`, `failureThreshold`) and how it interacts with JVM warmup

**Day 414 — Saga Pattern I: Orchestration** · 🎥 45m · 💻 55m
The distributed-transaction problem restated for a real order flow: reserve inventory, charge payment, allocate shipping — three services, no 2PC · **the saga**: a sequence of local transactions where each step publishes an event, and each step has a **compensating action** · **orchestration**: a central saga orchestrator holds the state machine, issues commands, and reacts to replies · implementing it: a `saga_instance` table with the current step and payload, command and reply channels over Kafka, timeouts for steps that never answer, and idempotent command handlers · using **Spring StateMachine** or a hand-rolled state machine, and a look at Axon, Eventuate Tram, and Temporal/Camunda as off-the-shelf orchestrators · **compensations are not rollbacks**: refunds leave a record, emails can't be unsent, and some steps are irreversible — so order the risky steps last · semantic locks and the `PENDING` state to prevent concurrent conflicting sagas · observability: a saga dashboard showing stuck and compensating instances

**Day 415 — Saga Pattern II: Choreography & Compensation** · 🎥 45m · 💻 55m
**Choreography**: no coordinator — each service listens for events and emits its own, with the flow emerging from the subscriptions · implementing the same order flow this way and comparing the two side by side: choreography is loosely coupled and easy to extend, but **the flow exists nowhere in the code**, cyclic dependencies creep in, and debugging requires tracing · a decision guide: choreography for 2–4 simple steps, orchestration for anything longer, conditional, or business-critical · **designing compensations**: idempotent, retryable forever, and never failing permanently (a compensation that fails needs a manual intervention queue) · the pivot transaction concept — the point after which you can only go forward · handling partial failure, duplicate events, and out-of-order delivery · **testing sagas**: unit-testing the state machine, integration-testing the happy path, and deliberately failing each step to verify the compensation · dead-letter handling and the operational runbook for a stuck saga

**Day 416 — Idempotency, Retries & Distributed Correctness** · 🎥 45m · 💻 50m
**At-least-once delivery is the norm**, so every consumer and every mutating endpoint must be idempotent · the **`Idempotency-Key` header** pattern for HTTP APIs: the client generates a key, the server stores key → response in a table or Redis with a TTL, returns the stored response on replay, and handles the concurrent in-flight case with a unique constraint and a `409`/wait · natural idempotency: `PUT` with the full state, conditional updates (`UPDATE ... WHERE status = 'PENDING'`), upserts, and unique business constraints as the ultimate backstop · **deduplication** on the consumer side with a processed-events table and the transactional boundary that makes it correct · **retry safety**: which HTTP methods and which error codes are retryable, exponential backoff with jitter, retry budgets, and the amplification problem across layers · **timeouts** everywhere (connect, read, total, per-attempt) and the rule that every remote call has one · clock skew, NTP, and why `System.currentTimeMillis()` across machines is not an ordering mechanism (logical clocks, Lamport timestamps, and monotonic ids) · the "exactly-once" marketing claim, deconstructed

**Day 417 — Service Mesh vs Library-Based Resilience** · 🎥 40m · 💻 40m
The idea: move retries, timeouts, circuit breaking, load balancing, mTLS, and telemetry **out of your application and into a sidecar proxy** · the data plane (Envoy) and control plane (Istio, Linkerd) · what a mesh gives you: language-agnostic policy, zero-code mTLS between services, traffic splitting for canaries, fault injection for chaos testing, and uniform golden metrics · **Istio** concepts: `VirtualService`, `DestinationRule`, `Gateway`, `PeerAuthentication`, `AuthorizationPolicy` · **Linkerd** as the simpler, lighter option, and ambient/sidecar-less modes as the current direction · **the costs**: a per-pod proxy's memory and latency, operational complexity, another control plane to run, and debugging through an extra hop · **the overlap problem**: if the mesh retries and Resilience4j retries, you get retry multiplication — deciding which layer owns which concern · an honest recommendation: start with libraries, adopt a mesh when you have many services in several languages and a platform team to run it · Kubernetes Gateway API as the emerging standard

**Day 418 — Testing Microservices: Contracts, Components & Chaos** · 🎥 50m · 💻 60m
The testing pyramid redrawn for a distributed system: unit → component (one service with its dependencies stubbed) → **contract** → integration → end-to-end (few, slow, and flaky by nature) · **why end-to-end tests don't scale**: N services means exponential combinations, a shared environment everyone breaks, and multi-hour feedback · **consumer-driven contract testing**: the consumer declares what it needs, the provider verifies it can deliver — catching breaking changes at build time instead of in production · **Spring Cloud Contract**: writing contracts in the Groovy/YAML DSL, auto-generating provider verification tests, publishing stubs to a repository, and `@AutoConfigureStubRunner` on the consumer side · **Pact** as the polyglot alternative with a broker, `can-i-deploy`, and pending/WIP pacts · **component tests** with Testcontainers plus WireMock for every external call · testing async flows and eventual consistency with Awaitility · **chaos engineering**: hypothesis-driven experiments, Chaos Monkey for Spring Boot (latency, exception, memory, and kill assaults), Litmus/Chaos Mesh on Kubernetes, and running a GameDay · load testing the whole system (Day 437) · a CI pipeline that runs the right tests at the right stage

---

# PHASE 22 — DevOps, Containers & Cloud
**Days 419–438 · Weeks 61–64**
> **Milestone project:** ship the Phase 21 system to Kubernetes through a full CI/CD pipeline with monitoring, alerting, and a canary release.

**Day 419 — Linux for Backend Engineers** · 🎥 45m · 💻 50m
Filesystem hierarchy (`/etc`, `/var/log`, `/proc`, `/opt`, `/tmp`) · file permissions, ownership, `chmod`/`chown`, and umask · **process management**: `ps aux`, `top`/`htop`, `pstree`, signals (`SIGTERM` vs `SIGKILL` vs `SIGHUP`), `kill`, `nohup`, job control, and `/proc/<pid>` · **text processing** that pays for itself daily: `grep`/`rg`, `awk`, `sed`, `cut`, `sort`, `uniq -c`, `wc`, `head`/`tail -f`, `jq` for JSON, and pipelines that answer real questions from a log file · `find` and `xargs` · **disk and memory**: `df -h`, `du -sh`, `free -m`, `iostat`, and understanding the page cache · **systemd**: unit files, `systemctl start/status/enable`, `journalctl -u -f` · users, groups, sudo, and SSH keys · environment variables, shell startup files, and `set -euo pipefail` in scripts · a practical debugging session on a "the server is slow" report

**Day 420 — Networking Essentials & TLS in Practice** · 🎥 45m · 💻 45m
The OSI/TCP-IP layers as they actually matter to you · IP addressing, subnets, CIDR, private ranges, and NAT · **ports, sockets, and connection states** — reading `ss -tulpn`/`netstat`, `TIME_WAIT` accumulation, ephemeral port exhaustion, and connection limits · TCP handshake, teardown, keep-alive, and Nagle · **DNS deep enough to debug**: record types, TTL, resolution order, `/etc/hosts`, `dig +trace`, and DNS caching inside the JVM (`networkaddress.cache.ttl` — the setting that breaks failover) · **TLS operationally**: certificate chains and intermediates, CN vs SAN, expiry monitoring, Let's Encrypt/ACME automation, `openssl s_client -connect` and `openssl x509 -text`, cipher suites and TLS 1.3, mTLS, and Java truststores/keystores (`keytool`, PKCS12, and the `PKIX path building failed` error everyone hits) · load balancers: L4 vs L7, health checks, connection draining, and `X-Forwarded-For` · **the debugging toolkit**: `curl -v`, `ping`, `traceroute`/`mtr`, `telnet`/`nc`, `tcpdump` basics

**Day 421 — Docker Fundamentals** · 🎥 45m · 💻 50m
Containers vs VMs: namespaces (pid, net, mnt, uts, ipc, user), cgroups (cpu, memory, io), and a shared kernel — so a container is a process, not a machine · images, layers, the union filesystem, and content-addressable digests · **the essential commands**: `run` (with `-d`, `-p`, `-e`, `-v`, `--name`, `--rm`, `--network`), `ps`, `logs -f`, `exec -it`, `inspect`, `stats`, `stop`/`kill`/`rm`, `images`, `pull`/`push`, `system prune` · **Dockerfile instructions**: `FROM`, `RUN`, `COPY` vs `ADD`, `WORKDIR`, `ENV`, `ARG`, `EXPOSE`, `USER`, `VOLUME`, `HEALTHCHECK`, and `ENTRYPOINT` vs `CMD` (exec form vs shell form, and why signal handling depends on it) · **layer caching** and instruction ordering for fast rebuilds · `.dockerignore` · volumes vs bind mounts vs tmpfs, and where data actually lives · networks: bridge, host, none, and user-defined networks with DNS-based service names · resource limits (`--memory`, `--cpus`) and what happens at the limit

**Day 422 — Dockerizing Spring Boot Properly** · 🎥 50m · 💻 55m
The naive Dockerfile and everything wrong with it (fat base image, root user, no layer caching, latest tags, JVM unaware of container limits) · **multi-stage builds**: a Maven/Gradle build stage with dependency caching, then a slim runtime stage copying only the artifact · **base image choice**: `eclipse-temurin:21-jre`, Alpine and the musl caveat, distroless, and Chainguard — compared on size, CVE count, and debuggability · **layered jars in action**: `java -Djarmode=tools -jar app.jar extract --layers` and separate `COPY` instructions for dependencies, spring-boot-loader, snapshot dependencies, and application code — turning a 60 MB rebuild into 2 MB · **JVM in a container**: `-XX:MaxRAMPercentage=75`, `UseContainerSupport`, `ActiveProcessorCount`, why `-Xmx` equal to the pod limit gets you OOMKilled, and choosing a collector for a 512 MB container · running as a non-root user, read-only root filesystem, and dropping capabilities · `HEALTHCHECK` and `STOPSIGNAL` · **Cloud Native Buildpacks** (`mvn spring-boot:build-image`) as the zero-Dockerfile alternative, plus **Jib** for daemonless reproducible builds · startup time with CDS and AOT

**Day 423 — Docker Compose for Local Development** · 🎥 40m · 💻 50m
`compose.yaml` structure: services, images, build contexts, ports, environment, `env_file`, volumes, networks, and `depends_on` with `condition: service_healthy` · **a full local stack**: your service, Postgres with an init script, Redis, Kafka in KRaft mode, Zipkin, Prometheus, Grafana, and Mailhog — one `docker compose up` to a working environment · healthchecks so startup order actually works · profiles for optional services · `docker compose logs -f`, `exec`, `down -v`, `up --build`, and `watch` for live sync · overriding with `compose.override.yaml` per developer · **Spring Boot 3.1's `spring-boot-docker-compose`** starting the stack automatically on `bootRun` and wiring the connection details with `@ServiceConnection` — and the Testcontainers equivalent at development time · resource limits so your laptop survives · when Compose stops being enough and you move to a local Kubernetes (kind, k3d, minikube)

**Day 424 — Registries, Image Security & Supply Chain** · 🎥 40m · 💻 40m
Registries: Docker Hub and its rate limits, GitHub Container Registry, AWS ECR, GCP Artifact Registry, and self-hosted Harbor/Nexus · authentication, `docker login`, and pull secrets in Kubernetes · **tagging strategy**: never deploy `latest`, use immutable tags (git SHA, semver, build number), and pin by digest for reproducibility · retention and cleanup policies · **image scanning** with Trivy, Grype, Snyk, or Docker Scout — running it in CI and failing on HIGH/CRITICAL with a documented exception process · minimizing attack surface: distroless, no shell, no package manager, no build tools in the runtime image · **SBOM** generation (CycloneDX/SPDX) with the CycloneDX Maven plugin and Boot's `/actuator/sbom` · image signing and verification with Cosign/Sigstore, and admission policies that reject unsigned images · base image update automation (Renovate/Dependabot) · the log4shell and xz lessons about transitive supply-chain risk

**Day 425 — Kubernetes I: Architecture, Pods, Deployments & Services** · 🎥 50m · 💻 55m
**Control plane**: API server, etcd, scheduler, controller manager, cloud controller manager · **node components**: kubelet, kube-proxy, container runtime · the declarative model and the reconciliation loop — you describe desired state, controllers converge toward it · **Pods**: one or more containers sharing a network namespace and volumes, init containers, sidecars, and why a pod is the atom of scheduling · **ReplicaSet** and **Deployment**: `replicas`, selectors, pod templates, `RollingUpdate` with `maxSurge`/`maxUnavailable`, `kubectl rollout status/history/undo`, and `revisionHistoryLimit` · **Services**: `ClusterIP`, `NodePort`, `LoadBalancer`, `ExternalName`, headless services, endpoints, and kube-proxy's iptables/IPVS routing · labels, selectors, and annotations · namespaces for isolation · **`kubectl` fluency**: `get`, `describe`, `logs -f --previous`, `exec -it`, `port-forward`, `apply`/`delete`, `-o yaml`, `explain`, `top`, `events --sort-by`, and contexts · writing the manifests for your Spring Boot service from scratch

**Day 426 — Kubernetes II: Config, Secrets, Storage & StatefulSets** · 🎥 45m · 💻 50m
**ConfigMaps**: from literals, files, or directories; consumed as environment variables (no live update) or **mounted as files (which do update)** — and the `spring.config.import=configtree:` pattern from Day 283 that makes this seamless · **Secrets**: types, base64 (**which is encoding, not encryption**), encryption at rest with a KMS provider, and the safer options — External Secrets Operator, Sealed Secrets, Vault Agent injection, and cloud-native CSI drivers · **triggering a rolling restart on config change** with a checksum annotation or Reloader · **storage**: volumes, `PersistentVolume`, `PersistentVolumeClaim`, StorageClasses, dynamic provisioning, access modes, and reclaim policies · **StatefulSets** for stable network identity and per-pod storage (and why your stateless Spring service should not be one) · **Jobs and CronJobs** for batch work, with `backoffLimit`, `activeDeadlineSeconds`, concurrency policy, and the "did my cron actually run?" monitoring problem · ServiceAccounts, RBAC (Roles, RoleBindings, ClusterRoles), and least privilege for pods

**Day 427 — Kubernetes III: Ingress, Probes, Resources & Autoscaling** · 🎥 50m · 💻 55m
**Ingress** and ingress controllers (NGINX, Traefik, HAProxy, cloud ALB): host and path routing, TLS termination with cert-manager and Let's Encrypt, annotations for rewrites, timeouts, body size, and rate limits · the **Gateway API** as Ingress's successor · **probes wired to Actuator** (from Day 413) with correct `initialDelaySeconds`, `periodSeconds`, `timeoutSeconds`, `failureThreshold`, and a `startupProbe` for slow JVM boots · **resources**: `requests` (used for scheduling) vs `limits` (enforced at runtime), CPU throttling under a limit (and the case for no CPU limit), memory limits and **OOMKilled**, QoS classes (Guaranteed, Burstable, BestEffort), and sizing a JVM inside them · `LimitRange` and `ResourceQuota` · **autoscaling**: HPA on CPU, memory, and custom/Prometheus metrics (KEDA for queue depth), scaling behavior and stabilization windows, VPA, and Cluster Autoscaler/Karpenter · `PodDisruptionBudget` for safe node drains · affinity, anti-affinity, topology spread, taints and tolerations · `terminationGracePeriodSeconds` and the `preStop` hook completing the graceful shutdown story

**Day 428 — Helm & Kustomize** · 🎥 45m · 💻 50m
The problem: the same manifests duplicated across dev, staging, and prod with small differences · **Helm**: chart structure (`Chart.yaml`, `values.yaml`, `templates/`, `_helpers.tpl`, `NOTES.txt`), Go templating with `.Values`/`.Release`/`.Chart`, functions and pipelines (`quote`, `default`, `toYaml`, `nindent`, `required`), conditionals and loops, and named templates · `helm install/upgrade --install/rollback/uninstall/list/history`, `--dry-run --debug`, `helm template`, `--atomic`, and `--wait` · values precedence and per-environment values files · dependencies/subcharts and `Chart.lock` · chart repositories and OCI registries · `helm lint`, `helm test`, and chart unit tests · **writing a reusable chart for a Spring Boot service** covering Deployment, Service, Ingress, HPA, ConfigMap, Secret, ServiceAccount, and PDB · **Kustomize** as the template-free alternative: bases and overlays, strategic merge and JSON patches, `configMapGenerator` with hash suffixes (which triggers rollouts automatically), and `kubectl apply -k` · Helm vs Kustomize vs both together

**Day 429 — CI/CD Concepts & Branching Strategy** · 🎥 40m · 💻 40m
Continuous integration, continuous delivery, and continuous deployment — three different things · **the pipeline stages**: checkout → build → unit test → static analysis → package → container build → scan → integration test → publish → deploy to staging → smoke test → deploy to production · fast feedback and the ten-minute build rule · **branching strategies**: Git Flow (and why it's heavy for continuous delivery), GitHub Flow, and **trunk-based development** with short-lived branches and feature flags · pull requests, required reviews, and branch protection · **feature flags** as the decoupling of deploy from release: LaunchDarkly, Unleash, Togglz, or a simple database-backed toggle, plus flag lifecycle and cleanup · versioning and tagging releases from CI · artifact promotion — build once, deploy the same artifact everywhere, with configuration injected per environment · environment parity, seed data, and database migrations in the pipeline · secrets in CI and the OIDC federation pattern that removes long-lived cloud keys

**Day 430 — GitHub Actions Pipeline for Spring Boot** · 🎥 50m · 💻 60m
Workflow anatomy: `on` triggers (push, pull_request, workflow_dispatch, schedule, tags), jobs, runners, steps, and `uses` vs `run` · `actions/checkout`, `actions/setup-java` with built-in Maven/Gradle caching, and `actions/cache` for anything else · **the full build job**: compile, unit tests, JaCoCo, publishing the test report, and failing on a coverage or Sonar quality gate · **integration tests with Testcontainers** on a GitHub runner (Docker is available; the gotchas are resource limits and reuse) · matrix builds across Java versions · **the container job**: `docker/setup-buildx-action`, `docker/login-action`, `docker/build-push-action` with layer caching, multi-arch builds with QEMU, tagging by SHA and semver, and Trivy scanning · **the deploy job**: environments with required reviewers, `needs` dependencies, OIDC to assume an AWS/GCP role with no stored secrets, `helm upgrade --install`, and a smoke test · reusable workflows and composite actions · concurrency groups to cancel superseded runs · badge, notifications, and a total pipeline time budget

**Day 431 — Jenkins Pipelines** · 🎥 40m · 💻 45m
Why Jenkins is still everywhere in enterprises, and what it costs to run · controller/agent architecture, agent labels, and ephemeral Kubernetes agents · **declarative pipelines**: `pipeline`, `agent`, `environment`, `tools`, `options`, `parameters`, `triggers`, `stages`/`stage`/`steps`, `when` conditions, `parallel` stages, and `post` blocks (always/success/failure/unstable) · scripted pipelines and when you actually need Groovy · `Jenkinsfile` in the repo and multibranch pipelines · credentials binding with `withCredentials` and never echoing them · `junit`, `jacoco`, `archiveArtifacts`, and `publishHTML` for reports · **shared libraries**: `vars/`, `src/`, and a `standardJavaPipeline()` step that every team reuses · Blue Ocean and the stage view · agent hygiene, workspace cleanup, and build retention · Jenkins vs GitHub Actions vs GitLab CI vs CircleCI vs Tekton — an honest comparison

**Day 432 — GitOps with Argo CD & Progressive Delivery** · 🎥 45m · 💻 50m
**GitOps principles**: the desired state is declarative, versioned in Git, applied automatically, and continuously reconciled — with Git as the single source of truth and the audit log · push-based CI/CD vs **pull-based GitOps**, and why the latter needs no cluster credentials in CI · **Argo CD**: the `Application` CRD, sync policies (manual vs automated, prune, self-heal), sync waves and hooks, health assessment, the diff view, and drift detection · repository structure: app-of-apps, per-environment folders, and separating the application repo from the config repo · updating the image tag from CI (`kustomize edit set image` or Argo CD Image Updater) · Flux CD as the alternative · **progressive delivery**: blue-green (two environments, instant switch, instant rollback), **canary** (a percentage of traffic, watched metrics, automatic promotion or rollback), and shadow/mirror traffic — implemented with Argo Rollouts or Flagger, with analysis templates querying Prometheus · rollback strategy and database migration compatibility during a canary

**Day 433 — AWS Core for Java Backends** · 🎥 50m · 💻 55m
The mental model: regions, availability zones, and designing for AZ failure · **IAM**: users, groups, roles, policies, the trust relationship, assume-role, instance profiles, and **IRSA** (IAM roles for service accounts) on EKS — plus least privilege and never using root or long-lived access keys · **VPC**: subnets (public/private), route tables, internet and NAT gateways, security groups vs NACLs, and VPC endpoints · **EC2**: instance families, AMIs, user data, and when you still use raw EC2 · **S3**: buckets, keys, storage classes, lifecycle rules, versioning, encryption (SSE-S3/KMS), presigned URLs for direct upload/download, and blocking public access · **RDS/Aurora**: engine choice, Multi-AZ vs read replicas, parameter groups, automated backups and PITR, failover behavior, and connection handling through RDS Proxy · **Secrets Manager and Parameter Store** for configuration · **CloudWatch** logs, metrics, alarms, and log insights · cost awareness: the four things that actually cost money and how to tag for chargeback

**Day 434 — AWS Compute for Java: ECS, EKS & Lambda** · 🎥 45m · 💻 50m
**ECS/Fargate**: task definitions (image, CPU/memory, environment, secrets, log configuration), services, desired count, target groups, rolling and blue-green deployments with CodeDeploy, service auto scaling, and why Fargate removes the node management burden · **EKS**: managed control plane, node groups vs Fargate profiles vs Karpenter, the AWS Load Balancer Controller for Ingress, EBS/EFS CSI drivers, IRSA, and cluster upgrades · ECS vs EKS — a genuine decision guide by team size and portability needs · **Lambda for Java**: the execution model, cold starts and why the JVM suffers, `RequestHandler` and Spring Cloud Function, `AWSLambdaStreamingHandler`, provisioned concurrency, **SnapStart** and how it changes the calculus for Spring Boot, and GraalVM native images with a custom runtime · API Gateway (REST vs HTTP APIs) in front, plus SQS, SNS, EventBridge, and Step Functions as event sources and orchestrators · **when serverless fits a Java backend and when it doesn't** · App Runner and Elastic Beanstalk as simpler on-ramps

**Day 435 — Spring Cloud AWS & Cloud SDK Integration** · 🎥 45m · 💻 50m
`spring-cloud-aws-dependencies` BOM and the starter modules · **credentials and region resolution**: the default provider chain (env, system properties, profile, container, instance metadata) and configuring it explicitly · **S3**: `S3Client`, `S3Template`, the `s3://` `Resource` protocol, streaming uploads and multipart, and presigned URL generation · **SQS**: `SqsTemplate`, `@SqsListener` with acknowledgement modes, batch listeners, visibility timeout extension, FIFO queues and message group ids, and dead-letter queues with a redrive policy · **SNS**: `SnsTemplate`, topic fan-out, and HTTP subscriptions · **Parameter Store and Secrets Manager** as property sources via `spring.config.import=aws-parameterstore:` and `aws-secretsmanager:`, with refresh support · **DynamoDB** with the Enhanced Client and the Spring Cloud AWS integration · CloudWatch metrics export via Micrometer, and structured logs to CloudWatch · **LocalStack with Testcontainers** for integration tests against S3, SQS, SNS, and DynamoDB without touching real AWS · a brief look at the GCP and Azure equivalents so the concepts transfer

**Day 436 — Infrastructure as Code with Terraform** · 🎥 45m · 💻 50m
Why clicking in a console doesn't scale and can't be reviewed · **Terraform core concepts**: providers, resources, data sources, variables, locals, outputs, and expressions · the workflow: `init`, `plan`, `apply`, `destroy` — and **reading a plan carefully as the single most important habit** · **state**: what it is, why it must be remote (S3 + DynamoDB locking, or Terraform Cloud), never editing it by hand, and `import` for existing infrastructure · **modules** for reuse: writing one for "a Spring Boot service on ECS with an ALB, RDS, and secrets", versioning it, and consuming it per environment · workspaces vs separate state files per environment (and why the latter is usually safer) · dependencies, `depends_on`, and the graph · lifecycle rules, `prevent_destroy`, and drift detection · secrets in Terraform and the state-file exposure problem · Terraform in CI with plan-on-PR and apply-on-merge · alternatives: Pulumi, AWS CDK, CloudFormation, and Crossplane

**Day 437 — Load & Performance Testing** · 🎥 50m · 💻 55m
Test types and what each answers: smoke, **load** (expected traffic), **stress** (find the breaking point), **spike**, **soak/endurance** (find leaks and degradation over hours), and capacity planning · defining the workload model from real traffic: request mix, think time, concurrency vs arrival rate, and **the open vs closed model distinction that invalidates most naive tests** · **the tools**: **k6** (JavaScript, developer-friendly, great CI integration), **Gatling** (Scala/Java DSL, excellent reports), **JMeter** (GUI, huge plugin ecosystem, heavier), and Locust · writing a k6 script with stages, thresholds that fail the build, checks, and custom metrics · writing a Gatling simulation with scenarios, injection profiles, and assertions · **what to measure**: throughput, latency percentiles (p50/p95/p99/p99.9 — **never the average**), error rate, and saturation (CPU, memory, connection pool, GC, thread pool) — correlating the load generator's view with your Grafana dashboards · **coordinated omission** and why it makes your p99 a lie · finding the knee of the curve · test data management and environment parity · profiling under load with JFR and async-profiler, then fixing the top bottleneck and re-running

**Day 438 — Production Readiness, SLOs & Incident Response** · 🎥 50m · 💻 55m
**The production readiness review checklist**: health probes, graceful shutdown, resource requests/limits, autoscaling, timeouts on every remote call, retries with backoff and idempotency, circuit breakers, connection pool sizing, structured logging with trace ids, metrics and dashboards, alerts tied to symptoms, runbooks, backups with a *tested* restore, and a rollback plan · **SLIs, SLOs, and error budgets**: choosing user-facing indicators (availability, latency, correctness), setting realistic targets, multi-window multi-burn-rate alerting, and using the error budget to decide between shipping features and shipping reliability · **alerting that people don't ignore**: alert on symptoms not causes, every page must be actionable, and pruning noisy alerts ruthlessly · on-call rotations, escalation, and handoffs · **incident response**: detect → triage → mitigate (roll back first, diagnose later) → resolve → communicate, with severity levels and an incident commander · **blameless postmortems**, contributing factors instead of root cause, and action items with owners · disaster recovery: RTO/RPO, backup testing, and multi-AZ vs multi-region · capacity planning and the cost/reliability tradeoff conversation

---

# PHASE 23 — Architecture, Patterns & System Design
**Days 439–456 · Weeks 64–66**
> **Milestone project:** refactor the Phase 21 order service into hexagonal architecture with ArchUnit-enforced boundaries.

**Day 439 — SOLID Principles in Real Java** · 🎥 45m · 💻 50m
**Single Responsibility**: one reason to change, demonstrated by splitting a 600-line `OrderService` that validates, prices, persists, emails, and reports · **Open/Closed**: extending behavior through strategy and polymorphism instead of adding another `if` to a growing switch — with the pricing-rules example · **Liskov Substitution**: the `Square extends Rectangle` violation, precondition/postcondition rules, and why an override that throws `UnsupportedOperationException` breaks the contract · **Interface Segregation**: fat interfaces forcing empty implementations, and splitting `Repository` into read and write ports · **Dependency Inversion**: the domain defining the port, the infrastructure implementing it, and where the interface should live (with the domain, not with the adapter) · SOLID's limits — cargo-culting it produces a thousand tiny classes; the goal is changeability, not compliance · related principles: DRY vs the wrong abstraction, KISS, YAGNI, composition over inheritance, Law of Demeter, and Tell-Don't-Ask

**Day 440 — Creational Patterns** · 🎥 45m · 💻 50m
**Singleton**: the enum implementation, the initialization-on-demand holder, why double-checked locking needs `volatile`, and why in Spring you just declare a bean · **Factory Method** and **Abstract Factory** with a payment-provider example, and their relationship to Spring's `FactoryBean` and `@Bean` methods · **Builder**: the classic nested builder, telescoping-constructor elimination, required vs optional parameters, Lombok's `@Builder`/`@SuperBuilder`/`@Builder.Default` and its pitfalls, and building immutable objects with validation in `build()` · **Prototype** and defensive copying, plus record `with`-style copies · **Object Pool** and why connection pools are the one place it still matters · dependency injection as the pattern that replaced most of these · when a static factory method beats a constructor (Effective Java item 1) · recognizing these patterns inside the Spring and JDK source

**Day 441 — Structural Patterns** · 🎥 45m · 💻 50m
**Adapter**: wrapping a third-party client behind your own interface — and its identity with the anti-corruption layer from DDD · **Decorator**: `BufferedInputStream` as the canonical example, then building a caching/logging/retrying repository decorator chain, and how Spring AOP proxies are decorators · **Proxy**: virtual (lazy loading in Hibernate), protection (security), and remote (Feign) proxies, plus JDK dynamic vs CGLIB from Day 276 · **Facade**: an application service simplifying a subsystem · **Composite** for tree structures like category hierarchies and permission groups · **Bridge** for separating abstraction from implementation (notification channel × message type) · **Flyweight** and Java's `Integer` cache and string interning · choosing between decorator, proxy, and adapter when they all "wrap something" · the cost of wrapper layers in stack traces and debugging

**Day 442 — Behavioral Patterns I** · 🎥 45m · 💻 50m
**Strategy**: pluggable algorithms, injecting `Map<String, PricingStrategy>` in Spring so the container assembles the registry for you, and replacing a switch statement with polymorphism · **Template Method**: the invariant skeleton with overridable steps (`AbstractHandler`, `JdbcTemplate`, `AbstractRoutingDataSource`) and its inheritance coupling · **Observer**: listeners, Spring's `ApplicationEvent`, and the difference from a message broker · **Chain of Responsibility**: servlet filters, the Spring Security filter chain, and building a validation/discount chain · **Command**: encapsulating a request as an object, with undo, queuing, and its role in CQRS · **State**: an order state machine implemented with an enum, with a sealed interface, and with Spring StateMachine — plus enforcing legal transitions · recognizing these in framework code you use every day

**Day 443 — Behavioral Patterns II & Anti-Patterns** · 🎥 45m · 💻 45m
**Iterator** and Java's `Iterable`/`Iterator`/`Spliterator` · **Mediator** and its relationship to an orchestrator · **Memento** for snapshots and undo · **Visitor** and the double-dispatch problem — then **replacing it entirely with sealed interfaces and pattern-matching switch** (Day 119), which is the modern Java answer · **Interpreter** briefly, and why you should use a parser generator instead · **Null Object** vs `Optional` · **Specification** as a composable business-rule object (and the Spring Data version from Day 321) · **the anti-patterns**: god class, anemic domain model (a real debate — when it's fine and when it's a symptom), service layer that's just a pass-through, primitive obsession, feature envy, shotgun surgery, circular dependencies, magic strings, over-abstraction and speculative generality, singleton abuse, static utility sprawl, and exception swallowing · a refactoring catalogue mapping each smell to its fix

**Day 444 — Enterprise Application Patterns** · 🎥 45m · 💻 50m
Fowler's catalogue as it applies to a Spring codebase · **Layered architecture** done right: what belongs in the controller, the application service, the domain, and the infrastructure — and the dependency direction rule · **Repository** as a collection-like abstraction over persistence, and how Spring Data's interface differs from the pure pattern · **Unit of Work** and how the JPA persistence context implements it implicitly · **Data Mapper vs Active Record** and where JPA sits · **Service Layer**, application services vs domain services, and keeping transactions at the application boundary · **DTO** and the assembler/mapper, plus separate request, response, and internal models · **Identity Map** (the first-level cache) and **Lazy Load** · **Table Module vs Domain Model vs Transaction Script** — and the honest observation that transaction script is the right choice for a simple CRUD service · **Gateway** and **Registry** · the mapping cost between layers and when to collapse them

**Day 445 — Clean & Hexagonal Architecture in Spring** · 🎥 50m · 💻 60m
**The dependency rule**: source code dependencies point inward, and the domain knows nothing about Spring, JPA, or HTTP · **Hexagonal/ports and adapters**: driving (primary) ports and adapters — REST controllers, message listeners, CLI — versus driven (secondary) ports and adapters — repositories, HTTP clients, publishers · **Onion and Clean architecture** as the same idea with different diagrams, plus entities, use cases, interface adapters, and frameworks · **implementing it in a Spring project**: a `domain` module with zero framework dependencies, an `application` module with use-case classes and port interfaces, an `infrastructure` module with JPA entities and adapters, and a `bootstrap` module wiring it together with Spring · **the mapping question**: domain model vs JPA entity — when to keep them separate (purity, testability) and when one class is honestly enough · testing the domain with zero Spring context and millisecond feedback · **the honest cost/benefit**: this is excellent for complex core domains and overkill for a CRUD service, and choosing per bounded context

**Day 446 — Domain-Driven Design: Tactical Patterns** · 🎥 50m · 💻 60m
**Entities** (identity over time) vs **Value Objects** (defined by their attributes, immutable, side-effect-free) — implementing `Money`, `EmailAddress`, `Quantity`, and `DateRange` as records with validation in the compact constructor, and the readability and bug-prevention payoff over primitives · **Aggregates**: the consistency boundary, the aggregate root as the only entry point, referencing other aggregates by id only, and **one transaction per aggregate** as the design rule that makes distribution possible later · sizing aggregates (small is usually right) and the contention problem with large ones · **Domain events** raised inside the aggregate and published after commit (`AbstractAggregateRoot`, `@DomainEvents`, `@TransactionalEventListener`) · **Repositories** as collection abstractions over aggregate roots only · **Domain services** for logic that belongs to no single entity, and **application services** for orchestration · **Factories** for complex creation · **Specifications** for reusable business rules · invariants enforced in the constructor so an invalid object can never exist · Spring Modulith for enforcing module boundaries in a monolith

**Day 447 — CQRS & Event Sourcing in Practice** · 🎥 50m · 💻 60m
**CQRS**: separating the command model (behavior-rich, normalized, transactional) from the query model (denormalized, shaped for the screen) · the lightweight version — the same database, entities for writes and projections/native SQL for reads — and when that's all you need · the full version with separate stores kept in sync by events, and the **eventual consistency in the UI** problem (with the read-your-own-writes mitigations) · commands, command handlers, queries, and query handlers · **event sourcing**: appending immutable events, rebuilding aggregate state by replay, snapshots at intervals, optimistic concurrency by expected version, and an event store schema in Postgres · projections and rebuilding them from scratch (the superpower) · **the hard parts, honestly**: schema evolution over five years, GDPR deletion in an immutable log, debugging, tooling, and team learning curve · a look at Axon Framework and EventStoreDB · **when to use it**: audit-critical domains, temporal queries, complex collaborative domains — and when it is architectural theatre

**Day 448 — Refactoring, Code Smells & Architecture Enforcement** · 🎥 45m · 💻 55m
**Refactoring discipline**: small behavior-preserving steps behind a green test suite, and never mixing refactoring with feature work in one commit · the core moves: extract method/class/interface, inline, rename, move field, replace conditional with polymorphism, introduce parameter object, replace magic number with constant, decompose conditional, replace nested conditionals with guard clauses, and split loop · **working with legacy code**: characterization tests, finding seams, sprout method and wrap class, and breaking dependencies to get code under test · the strangler fig for large-scale replacement · **automated detection**: SonarQube's smells and cognitive complexity, PMD, and IDE inspections · **ArchUnit** in depth: layer rules (`layeredArchitecture().consideringOnlyDependenciesInLayers()`), onion architecture rules, naming conventions, "no class in domain may depend on org.springframework", cycle detection between packages, and freezing violations to stop the bleeding on a legacy codebase · running architecture tests in CI so the design can't silently rot · Spring Modulith's `ApplicationModules.verify()` and generated documentation

**Day 449 — GraphQL with Spring for GraphQL** · 🎥 45m · 💻 55m
The problems GraphQL targets: over-fetching, under-fetching, and endpoint proliferation for varied clients · **the schema language**: types, fields, scalars, enums, interfaces, unions, input types, `Query`, `Mutation`, `Subscription`, and non-null/list modifiers · **`spring-boot-starter-graphql`**: schema files in `src/main/resources/graphql`, `@QueryMapping`, `@MutationMapping`, `@SchemaMapping`, `@Argument`, `@ProjectedPayload`, and the GraphiQL playground · **the N+1 problem is worse in GraphQL** and `DataLoader`/`BatchLoaderRegistry` with `@BatchMapping` as the fix · pagination with the Relay cursor connection spec · error handling with `DataFetcherExceptionResolver` and error classifications · **security**: field-level authorization with `@PreAuthorize`, query depth and complexity limits, disabling introspection in production, and persisted queries — because a public GraphQL endpoint is a DoS surface · subscriptions over WebSocket · testing with `GraphQlTester` and the `@GraphQlTest` slice · schema evolution without versioning, and deprecation · **GraphQL vs REST**: an honest decision guide

**Day 450 — gRPC & Protocol Buffers** · 🎥 45m · 💻 55m
When binary RPC beats JSON over HTTP: internal service-to-service calls, strict contracts, streaming, and polyglot environments · **Protocol Buffers**: `.proto` syntax, scalar types, `message`, `repeated`, `oneof`, `map`, `enum`, nested messages, and **field numbers as the compatibility contract** (never reuse or renumber; use `reserved`) · schema evolution rules for adding, removing, and changing fields · the `protobuf-maven-plugin` generating Java classes, and the size/speed advantage over JSON measured · **gRPC**: the four call types — unary, server streaming, client streaming, and bidirectional streaming — built on HTTP/2 · service definition, generated stubs, blocking vs async vs future stubs · deadlines (**always set one**), cancellation propagation, metadata, interceptors for auth/logging/tracing, and status codes · **Spring Boot integration** with `grpc-spring-boot-starter`: `@GrpcService`, `@GrpcClient`, and channel configuration · error handling and mapping to domain exceptions · load balancing gRPC (why L4 balancers fail with long-lived HTTP/2 connections) and the proxyless/mesh options · gRPC-Web and grpc-gateway for browser clients · testing with an in-process server

**Day 451 — System Design I: Fundamentals & Scaling** · 🎥 50m · 💻 45m
**The interview and real-world framework**: clarify requirements → estimate scale → define the API → sketch the high-level design → deep-dive the bottleneck → identify tradeoffs · functional vs non-functional requirements, and pinning down availability, latency, consistency, and durability targets before drawing anything · **back-of-the-envelope estimation**: QPS from DAU and actions per user, peak-to-average ratio, storage per record × retention, bandwidth, and the latency numbers every engineer should know (memory ~100 ns, SSD ~100 µs, network round trip within a datacenter ~0.5 ms, cross-continent ~150 ms) · **vertical vs horizontal scaling** and where each hits a wall · **statelessness** as the prerequisite for horizontal scaling, and where state actually lives (database, cache, object store, client token) · **load balancing**: L4 vs L7, algorithms (round robin, least connections, consistent hashing), health checks, session affinity and why to avoid it, and DNS/anycast/GSLB for global traffic · single points of failure, redundancy, N+1 capacity, and availability math (why 99.9% is 43 minutes a month)

**Day 452 — System Design II: Caching, CDN, Queues & Async** · 🎥 45m · 💻 45m
Where to put a cache and the hit-ratio math from Day 385 applied to a real design · **CDN**: edge caching, origin shielding, cache keys and `Vary`, TTL and purging, signed URLs, and what should and shouldn't be behind a CDN · static asset strategy and image/video delivery · **read replicas** and the replication-lag consequences for read-your-own-writes · **asynchronous processing** as the main latency lever: return `202 Accepted` with a status URL, do the slow work in a worker, and notify by webhook, SSE, or polling · queues for load leveling and buffering traffic spikes, with the queue depth as a backpressure signal and autoscaling trigger · **fan-out**: on write (precompute per-consumer, fast reads, expensive writes — the Twitter timeline problem) vs on read (compute per request, cheap writes) and the hybrid for celebrity accounts · scheduled and batch work, and the difference between a job queue and an event log · rate limiting and admission control as availability protection · graceful degradation and the "what do we turn off first" plan

**Day 453 — System Design III: Data at Scale** · 🎥 50m · 💻 45m
**Replication**: single-leader, multi-leader, and leaderless (quorum) — with the failure modes and conflict-resolution needs of each · synchronous vs asynchronous replication, failover, split-brain, and fencing · **partitioning/sharding**: by key range, by hash, and by directory; **consistent hashing** with virtual nodes explained with a diagram; choosing a shard key for even distribution; hot partitions; and the resharding problem that makes a bad choice nearly permanent · cross-shard queries, scatter-gather, and cross-shard transactions · **indexing at scale**: local vs global secondary indexes · **the CAP and PACELC** framing applied to concrete database choices · consistency models revisited (linearizable, causal, eventual) and what your product genuinely needs · **distributed consensus** at a working level: leader election, Raft's basic operation, and where you get it for free (etcd, ZooKeeper, Kafka's controller) · idempotency and exactly-once revisited · time-series and analytics stores, the data lake/warehouse split, and CDC as the bridge to them · data retention, archival, and GDPR deletion in a partitioned world

**Day 454 — Case Study: URL Shortener & Distributed Rate Limiter** · 🎥 50m · 💻 60m
**URL shortener**: requirements (100:1 read/write, 100M new URLs a month, sub-100 ms redirects, custom aliases, expiry, analytics) · estimation of QPS and 5-year storage · API design and the 301-vs-302 decision and its analytics consequence · **key generation** compared: base62 of an auto-increment id, hashing with collision retry, a pre-generated key pool, and distributed counters (Snowflake, or Redis `INCR` ranges) — with the security implication of predictable ids · storage choice and the schema, plus why this is a perfect key-value workload · caching the hot 20%, CDN and edge redirects, and cache warming · analytics via an async event pipeline so the redirect stays fast · **distributed rate limiter**: the requirements and the algorithm choice from Day 355, then the distributed implementation — a Redis Lua token bucket with atomicity, the race conditions in a naive version, handling Redis failure (fail open or closed?), sharding the limiter, approximate local counters with periodic sync for extreme scale, and the response headers · **implementing both in Spring Boot** and load-testing them

**Day 455 — Case Study: E-Commerce Checkout & Payments** · 🎥 50m · 💻 60m
Requirements: correctness above all, no double charges, no overselling, and a checkout that stays up when the recommendation service doesn't · **the domain**: cart, inventory reservation, pricing and promotions, tax, order, payment, fulfilment · **inventory correctness**: pessimistic row locks vs optimistic versioning vs a reservation table with expiry — and the flash-sale scenario that breaks the naive version, with the queue-based admission answer · **payment integration**: never storing card data (PCI scope and hosted fields/tokens), the authorize-then-capture flow, 3-D Secure and asynchronous redirects, **webhooks** with signature verification, replay protection, and out-of-order delivery, and reconciliation against the provider's ledger as the ultimate source of truth · **idempotency** end to end: the client key, the provider key, and the internal dedupe table · **the saga** from Days 414–415 applied: reserve → charge → confirm, with compensations and the pivot point · handling the "charged but order failed" case and the manual-intervention queue · read models for order history and admin search · what to make synchronous and what to defer

**Day 456 — Case Study: Real-Time Chat & Notifications** · 🎥 50m · 💻 60m
Requirements: 1-to-1 and group messaging, delivery and read receipts, presence, offline delivery, message history, and push to mobile · **transport choice**: WebSocket vs SSE vs long polling, and the fallback strategy · **connection scaling**: how many WebSockets a JVM can hold, the memory per connection, why virtual threads or Netty matter here, and the sticky-session/consistent-hashing problem when user A is on pod 1 and user B is on pod 3 · **the pub/sub backplane**: Redis pub/sub or Kafka to route a message to whichever node holds the recipient's connection, and the tradeoffs of each · **presence** with heartbeats, TTL keys, and the thundering-herd on reconnect after a deploy · **message storage**: the write-heavy pattern, partitioning by conversation, ordering with monotonic ids, and the read pattern for scrollback · **offline and push**: a device registry, FCM/APNs fan-out, retry and token invalidation, and the notification-preferences and quiet-hours logic · **delivery semantics**: at-least-once with client-side dedupe by message id, and receipts as their own event stream · rate limiting and abuse prevention · implementing the core with Spring WebSocket/STOMP and Redis, then load-testing 10k concurrent connections

---

# PHASE 24 — Capstone Projects
**Days 457–472 · Weeks 66–68**
> Three complete, deployable systems. Every lesson is a build session: architecture first, then code, then tests, then deploy.

## Project A — E-Commerce Microservices Platform (Days 457–463)

**Day 457 — Project A, Part 1: Requirements, Domain Model & Foundations** · 🎥 50m · 💻 150m
Product vision and the functional scope: catalog browsing and search, cart, checkout, payment, inventory, order tracking, and admin · non-functional targets: 99.9% availability, p95 under 300 ms for reads, correctness for money and stock · **event storming the domain** and identifying bounded contexts: Identity, Catalog, Cart, Ordering, Payment, Inventory, Notification · context mapping and the anti-corruption layers · service boundaries, ownership, and the database-per-service decision · **the repository and build setup**: a monorepo with a shared parent POM, a `common` library for events and error contracts (and the coupling caveat), and per-service module structure following Day 445 · Docker Compose for the local stack (Postgres per service, Kafka, Redis, Keycloak, Zipkin, Prometheus, Grafana) · the CI skeleton that builds, tests, and publishes every service · API-first: writing the OpenAPI specs and the AsyncAPI event catalogue before any code

**Day 458 — Project A, Part 2: Identity & Auth Service** · 🎥 50m · 💻 150m
User registration with email verification, login, password reset, and profile management · **password storage** with Argon2 and a `DelegatingPasswordEncoder` for future migration · **JWT issuance** with short-lived access tokens and rotating refresh tokens with reuse detection (Day 348), stored hashed with device metadata · role and permission model with a `role_permissions` table, and mapping to authorities · **OAuth2 social login** for Google and GitHub with just-in-time provisioning and account linking by verified email · optional TOTP two-factor · session and device management endpoints, plus logout-everywhere via a token version claim · **rate limiting and brute-force protection** on the auth endpoints, with lockout and audit events · the JWKS endpoint that every other service uses as a resource server · integration tests with Testcontainers and a full auth-flow suite

**Day 459 — Project A, Part 3: Catalog Service** · 🎥 50m · 💻 150m
Product, variant, category, and attribute modeling with a category tree (recursive CTE from Day 209) · **JPA mapping** with careful fetch strategies, `@BatchSize`, and DTO projections for list endpoints · the admin write API with validation, optimistic locking, and image upload to S3 via presigned URLs · **the read path**: keyset pagination, filtering with Specifications, sorting, and a response contract that won't break clients · **search with Elasticsearch**: the index mapping and analyzers, faceted filtering and aggregations, autocomplete, relevance tuning, and keeping the index in sync with the outbox/CDC pattern rather than dual writes · **caching**: Caffeine L1 plus Redis L2 for product detail, with pub/sub invalidation on update and TTL jitter · price and availability freshness rules · a load test proving the p95 target, before and after caching

**Day 460 — Project A, Part 4: Cart & Ordering Service with Saga Orchestration** · 🎥 50m · 💻 150m
Cart as a Redis-backed, TTL-expiring aggregate for guests and a persisted one for logged-in users, with merge-on-login · pricing, promotions, and tax calculated at checkout time and snapshotted onto the order so history never changes retroactively · **the Order aggregate** designed per Day 446: root, invariants, state machine (CREATED → PENDING_PAYMENT → PAID → FULFILLING → SHIPPED → COMPLETED, plus CANCELLED and REFUNDED), and legal transitions enforced in the domain · **the checkout saga orchestrator**: a persisted saga instance, commands to Inventory and Payment, reply handling, per-step timeouts, and compensations — with a semantic lock preventing concurrent checkouts of the same cart · **idempotency** on the checkout endpoint with an `Idempotency-Key` · the transactional outbox for every published event · order history and tracking read models · integration tests that fail each saga step and assert the compensation

**Day 461 — Project A, Part 5: Payment & Inventory Services** · 🎥 50m · 💻 150m
**Payment service**: a provider abstraction (a port) with a Stripe-style adapter and a fake for tests, authorize/capture/refund flows, never touching card data, and a payment-attempt ledger · **webhook handling**: signature verification, an idempotent handler keyed by the provider event id, out-of-order and duplicate delivery, and a reconciliation job that compares your ledger to theirs · retries with backoff for provider timeouts and the "did it actually go through?" query-before-retry rule · **Inventory service**: stock per SKU per warehouse, a reservation table with expiry, `SELECT ... FOR UPDATE` vs optimistic versioning benchmarked under contention, and a release job for expired reservations · handling oversell attempts and the flash-sale admission queue · **the Kafka event contracts** between all three services: Avro schemas in a registry, compatibility checks in CI, `@RetryableTopic` with a DLT, and idempotent consumers with a processed-events table

**Day 462 — Project A, Part 6: Gateway, Discovery, Config & Resilience** · 🎥 50m · 💻 150m
**Spring Cloud Gateway** as the single entry point: routes per service, path rewriting, CORS in one place, request size limits, and the Redis-backed rate limiter keyed by user and API key · **security at the edge**: JWT validation against the Identity service's JWKS, token relay downstream, and the decision that each service still validates independently · **service discovery**: Eureka for the Compose environment and Kubernetes DNS for the cluster, with the same code working in both · **configuration**: Spring Cloud Config over Git for Compose, ConfigMaps and Secrets for Kubernetes, and `spring.config.import` making the switch a property change · **resilience everywhere**: timeouts on every call, Resilience4j circuit breakers with meaningful fallbacks (a cached catalog, a queued order), bulkheads per dependency, retries only where idempotent, and the correct decorator order · a chaos exercise: kill each service in turn and verify the system degrades instead of collapsing

**Day 463 — Project A, Part 7: Observability, Testing & Kubernetes Deployment** · 🎥 55m · 💻 180m
**Observability**: Micrometer metrics with consistent tags, RED dashboards per service in Grafana, business metrics (orders per minute, checkout conversion, payment failure rate), distributed tracing across every hop including Kafka, structured JSON logs with trace ids shipped to Loki, and a dashboard that goes from alert to root cause in three clicks · **alerting** on SLO burn rate, consumer lag, DLT growth, saga stalls, and error budget · **the test suite**: unit tests for domain logic, slice tests for web and persistence, Testcontainers component tests per service, **Spring Cloud Contract** between every producer/consumer pair, and a thin end-to-end happy-path suite · **Kubernetes deployment**: Helm charts per service with Deployment, Service, Ingress, HPA, ConfigMap, Secret, PDB, and probes wired to Actuator health groups; resource requests and limits with a correctly sized JVM; and graceful shutdown verified under load · **CI/CD**: the GitHub Actions pipeline from Day 430 through to Argo CD, with a canary rollout and automatic rollback on error-rate regression · a final load test and a production readiness review against the Day 438 checklist

## Project B — Real-Time Collaboration & Notification Platform (Days 464–468)

**Day 464 — Project B, Part 1: Requirements & Real-Time Architecture** · 🎥 45m · 💻 150m
The product: workspace channels, direct messages, typing indicators, presence, read receipts, mentions, and multi-channel notifications (in-app, email, push) · scale targets: 50k concurrent connections, sub-200 ms message delivery, and no message loss · **transport decision** worked through explicitly: WebSocket with STOMP for bidirectional chat, SSE for one-way notification streams, and long polling as the fallback — with the reasoning written down · **the architecture**: a stateless HTTP API, a connection/gateway tier holding WebSockets, a Redis or Kafka backplane for cross-node routing, Postgres for message history, and Redis for presence and ephemeral state · connection lifecycle, authentication on the WebSocket handshake (and why the browser can't send an `Authorization` header), and reconnection with resume · the data model for channels, memberships, messages, and receipts, partitioned for the write-heavy workload · the project skeleton and local stack

**Day 465 — Project B, Part 2: WebSocket Messaging with STOMP & Redis** · 🎥 50m · 💻 150m
`spring-boot-starter-websocket`: `@EnableWebSocketMessageBroker`, `WebSocketMessageBrokerConfigurer`, `registerStompEndpoints` with SockJS fallback, and `configureMessageBroker` with the simple broker and application/user destination prefixes · `@MessageMapping`, `@SendTo`, `@SendToUser`, `SimpMessagingTemplate` for server-initiated sends, and `@SubscribeMapping` · **authentication and authorization**: a `ChannelInterceptor` on the inbound channel validating the JWT on `CONNECT`, populating the `Principal`, and enforcing channel membership on `SUBSCRIBE` — because an unauthorized subscribe is the classic hole · **the cross-node problem**: the simple broker is in-memory, so a message published on node 1 never reaches a subscriber on node 3 — solved with a Redis pub/sub backplane (and the alternative of a full STOMP broker relay to RabbitMQ) · message persistence with an async writer so the socket path stays fast, ordering with monotonic ids, and history/scrollback endpoints · typing indicators and read receipts as ephemeral events · client-side dedupe by message id

**Day 466 — Project B, Part 3: Notification Service** · 🎥 50m · 💻 150m
A dedicated service consuming domain events from every other service and deciding **who to notify, on which channel, and when** · **the preference model**: per-user, per-event-type, per-channel settings, quiet hours with time zones, digest vs immediate, and unsubscribe handling · **templating**: Thymeleaf for HTML email with a plain-text alternative, i18n via `MessageSource`, and versioned templates with preview endpoints · **channels**: email via SMTP/SES with `JavaMailSender` and bounce/complaint handling, in-app notifications persisted and delivered over SSE, and push via FCM/APNs with a device token registry and invalidation on failure · **reliability**: an outbox on the producing side, idempotent consumption keyed by event id, retry with exponential backoff and a DLT, and a dead-letter review UI · rate limiting and batching so a burst of 500 events doesn't send 500 emails · delivery tracking, open/click metrics, and a notification audit log · testing with Mailhog and a fake push provider

**Day 467 — Project B, Part 4: Presence, Scaling & Connection Management** · 🎥 50m · 💻 150m
**Presence**: heartbeats from the client, a Redis key per connection with a TTL, aggregation to a user-level status (online/away/offline), and publishing presence changes to interested subscribers only · the fan-out problem when a popular user's presence changes, and how to bound it · **scaling WebSockets**: measuring memory and CPU per connection on the JVM, tuning the container (Netty vs Tomcat, `spring.threads.virtual.enabled`), file descriptor and ephemeral port limits, and the load balancer settings that silently kill idle sockets (idle timeout, and the ping/pong keepalive that prevents it) · **sticky sessions vs a backplane**, and why the backplane is the scalable answer · **deployment without dropping every connection**: draining, connection migration, client reconnect with exponential backoff and jitter, and the thundering-herd reconnect storm after a rolling restart · session resume with a last-seen message id so no history is lost · load testing 10k, then 50k concurrent connections with k6/Gatling and reading the resource curves

**Day 468 — Project B, Part 5: Deployment, Monitoring & Hardening** · 🎥 45m · 💻 150m
Kubernetes manifests for a connection-heavy workload: a separate Deployment for the WebSocket tier with different resource shapes and autoscaling signals (connection count via KEDA rather than CPU), longer `terminationGracePeriodSeconds`, and an Ingress configured for WebSocket upgrades and long idle timeouts · **monitoring what matters here**: concurrent connections, connect/disconnect rate, message throughput and end-to-end latency, backplane lag, presence key count, notification delivery success by channel, and DLT depth — on a purpose-built Grafana dashboard with alerts · distributed tracing across the WebSocket boundary · **security hardening**: origin checks on the handshake, message size limits, per-connection and per-user rate limits, subscription authorization audits, XSS-safe message rendering, and content moderation hooks · abuse scenarios and how each is blocked · a chaos run: kill Redis, kill a gateway pod, and partition the network — verifying reconnect, no message loss, and correct presence recovery

## Project C — Fintech Ledger & Payments Engine (Days 469–472)

**Day 469 — Project C, Part 1: Double-Entry Ledger Domain Modeling** · 🎥 50m · 💻 150m
Why a fintech system is built on a **double-entry ledger** and not a `balance` column: auditability, provable correctness, and the ability to reconstruct any historical state · **the model**: accounts with types (asset, liability, equity, revenue, expense), journal entries as the atomic unit, and postings (debits and credits) that must sum to zero — enforced by a database constraint, not just code · normal balances, the accounting equation, and worked examples of a deposit, a transfer, a fee, and a refund · **money in Java**: `BigDecimal` with an explicit scale and `RoundingMode`, or minor units in a `long` — the tradeoffs, and a `Money` value object with currency that refuses to add EUR to USD · multi-currency, exchange rates, and where rounding differences go · **immutability**: entries are never updated or deleted; corrections are reversing entries · balance calculation by aggregation vs materialized running balances with a consistency check job · the schema with the right indexes and partitioning by period · property-based tests asserting the ledger always balances

**Day 470 — Project C, Part 2: Money Movement, Idempotency & Exactly-Once** · 🎥 50m · 💻 150m
The transfer API: request validation, authorization, limits and velocity checks, and the state machine (INITIATED → VALIDATED → POSTED → SETTLED, plus FAILED and REVERSED) · **idempotency done rigorously**: a client-supplied key, a unique constraint, storing and replaying the exact original response, and handling the concurrent in-flight duplicate correctly · **concurrency and correctness**: pessimistic locking on account rows in a deterministic order to avoid deadlocks, versus an append-only posting model with balance derived — benchmarked under contention, with the overdraft race demonstrated and prevented · **transaction boundaries**: everything that must be atomic in one local transaction, everything else via the outbox · **exactly-once effects** across services: the outbox plus idempotent consumers plus a reconciliation job, and the explicit statement that "exactly once" is really "at least once plus idempotence" · timeouts, the unknown-outcome problem with an external rail, and the query-then-retry pattern · a chaos test that kills the service mid-transfer and asserts no money is created or destroyed

**Day 471 — Project C, Part 3: Reporting, Spring Batch & Scheduling** · 🎥 50m · 💻 150m
**Spring Batch**: `Job`, `Step`, chunk-oriented processing with `ItemReader`/`ItemProcessor`/`ItemWriter`, `JobRepository` and restartability, `JobParameters` and instance identity, skip and retry policies, listeners, partitioning and multi-threaded steps, and `JobLauncher` from a scheduled trigger or an endpoint · building the **end-of-day settlement job**: read the day's postings with a paging reader, aggregate, write settlement records, and produce a report — restartable after a mid-run failure · **statement generation** to PDF and CSV with streaming so a 5M-row export doesn't OOM · **reconciliation**: comparing the internal ledger against an external provider file, classifying breaks, and producing an exceptions queue · **scheduling**: `@Scheduled` and its single-instance problem, **Quartz** with a JDBC job store for clustered scheduling, misfire policies, and ShedLock as the lightweight alternative — plus the monitoring question of "did the job actually run and succeed?" · idempotent jobs and safe re-runs

**Day 472 — Project C, Part 4: Security, Compliance & Production Deployment** · 🎥 50m · 💻 150m
**Regulatory shape without the legal lecture**: what PCI DSS scope means for card data (and how tokenization keeps you out of it), KYC/AML touchpoints, SOX-style audit requirements, and GDPR/data-residency constraints on an immutable ledger · **encryption**: TLS everywhere including internal calls (mTLS), field-level encryption for PII with a JPA `AttributeConverter`, envelope encryption with a KMS, and key rotation without re-encrypting the world · **audit logging** that satisfies an auditor: append-only, tamper-evident (hash chaining), who/what/when/where/outcome, retention, and separation from application logs · **access control**: fine-grained permissions, maker-checker approval flows for high-value operations, break-glass access with alerting, and least privilege for the database user · secrets in Vault with dynamic database credentials · **production deployment**: multi-AZ, backup and a *tested* restore, RTO/RPO targets, a runbook for the top five incidents, and a final production readiness review · the full CI/CD pipeline with a manual approval gate for the production apply

---

# PHASE 25 — Interview Preparation & Career
**Days 473–480 · Weeks 68–69**
> **Milestone:** a portfolio, a rehearsed set of answers, and a plan for the next twelve months.

**Day 473 — Java Core Interview Questions** · 🎥 60m · 💻 60m
Rapid-fire with full explanations, not memorized one-liners: JDK vs JRE vs JVM · `==` vs `equals` and the `equals`/`hashCode` contract with a live bug · `String` immutability, the string pool, `intern()`, and `StringBuilder` vs concatenation · pass-by-value (and why "Java passes objects by reference" is wrong) · autoboxing, the `Integer` cache, and the `==` comparison trap · `static` and `final` in all their positions, and static initialization order · overloading vs overriding, covariant returns, and dispatch rules · abstract classes vs interfaces after default methods · checked vs unchecked exceptions, try-with-resources, and the `finally` return trap · access modifiers and the package-private default · inner, static nested, local, and anonymous classes · records, sealed classes, and enums with behavior · shallow vs deep copy · `Optional` usage rules · what happens between `java Main` and `main()` running · **how to answer**: state the rule, give an example, name the gotcha, and mention the tradeoff

**Day 474 — Collections & Concurrency Interview Drills** · 🎥 60m · 💻 60m
**Collections**: `ArrayList` vs `LinkedList` (and why `LinkedList` almost always loses) · `HashMap` internals — buckets, hash spreading, load factor, resize, treeification, and what happens with a bad `hashCode` · `HashMap` vs `LinkedHashMap` vs `TreeMap` vs `ConcurrentHashMap` · `HashSet` vs `TreeSet` · fail-fast vs fail-safe iterators and `ConcurrentModificationException` · `Comparable` vs `Comparator` and the contract that must be consistent with `equals` · mutable keys as a bug factory · `Arrays.asList` vs `List.of` vs `new ArrayList<>()` immutability differences · time complexity for every common operation · **Concurrency**: process vs thread · thread states and transitions · `synchronized` vs `ReentrantLock` vs `volatile` vs atomics — what each guarantees · happens-before and the memory model in interview-sized answers · deadlock, its four conditions, detection, and prevention · thread pool sizing and `ThreadPoolExecutor` parameters · `CompletableFuture` composition · `ThreadLocal` leaks · virtual threads: what changed and what didn't · **the classic whiteboard problems**: producer-consumer, a thread-safe singleton, a bounded blocking queue, printing odd/even with two threads, and a rate limiter

**Day 475 — Spring & Spring Boot Interview Questions** · 🎥 60m · 💻 60m
IoC and DI in your own words, and why constructor injection · bean scopes and the singleton thread-safety obligation · the bean lifecycle in order · `BeanFactory` vs `ApplicationContext` · `@Component` vs `@Bean` and when each is right · how component scanning finds your class (and the package trap) · circular dependencies: how Spring resolves them and why constructor cycles fail · `@Qualifier` vs `@Primary` · **AOP**: proxies, JDK vs CGLIB, and the self-invocation trap — expect this one · **`@Transactional`**: propagation modes with a scenario for each, isolation levels, why checked exceptions don't roll back, and `readOnly` · **Spring Boot**: what auto-configuration is and how `@ConditionalOnMissingBean` lets you override it, what a starter contains, the property precedence order, how the embedded server is started, and what `@SpringBootApplication` expands to · Actuator endpoints you'd expose in production · **Spring Security**: the filter chain, authentication vs authorization, how JWT validation works, and CSRF — when to disable it and when never to · **Spring Data**: how a repository interface becomes an implementation, derived queries, and `@Query` · common "design this" follow-ups

**Day 476 — SQL, JPA & Hibernate Interview Questions** · 🎥 60m · 💻 60m
**SQL**: joins with a diagram, `WHERE` vs `HAVING`, the logical execution order, `GROUP BY` rules, window functions and a top-N-per-group query written live, `EXISTS` vs `IN` with NULLs, indexes and the leftmost-prefix rule, what makes a query non-sargable, reading an `EXPLAIN` plan, normalization forms and when to denormalize, transactions and ACID, isolation levels and the anomalies each prevents, optimistic vs pessimistic locking, and deadlock prevention · **live query writing**: second-highest salary, employees earning more than their manager, running totals, gap detection, deduplication, and a pivot · **JPA/Hibernate**: the persistence context and dirty checking, `persist` vs `merge` vs `save`, the entity lifecycle states, lazy vs eager and `LazyInitializationException`, **the N+1 problem and every fix** (expect this), `@BatchSize` and fetch joins, why fetch join plus pagination breaks, first vs second level cache, `equals`/`hashCode` on entities, cascade types and orphan removal, `@Version`, bulk updates bypassing the context, and open-session-in-view · when you'd choose JDBC or jOOQ over JPA

**Day 477 — Microservices & System Design Interviews** · 🎥 60m · 💻 60m
**Conceptual**: monolith vs microservices tradeoffs and when *not* to split · how you'd decide service boundaries (DDD, bounded contexts) · database per service and how you handle joins and transactions afterwards · saga orchestration vs choreography with a concrete example · the outbox pattern and why dual writes fail · idempotency and at-least-once delivery · circuit breakers, retries, timeouts, and bulkheads — and the correct ordering · service discovery and load balancing options · API gateway responsibilities · distributed tracing and how you'd debug a slow request across eight services · CAP and what you'd sacrifice for a payments system versus a feed · **the design round format**: the 45-minute structure (requirements 5 min, estimation 5 min, high-level design 10 min, deep dive 15 min, tradeoffs and wrap-up 10 min), thinking out loud, driving the conversation, and asking clarifying questions early · **practice designs**: a rate limiter, a URL shortener, a news feed, a ride-hailing dispatch, a distributed job scheduler, a notification system, and a payment system — with the key decision points and the follow-up questions interviewers actually ask

**Day 478 — DSA for Backend Interviews** · 🎥 60m · 💻 90m
Complexity analysis and the ability to state and justify big-O for your own code · **the patterns that cover most questions**: two pointers, sliding window, fast/slow pointers, prefix sums, hash map counting, binary search (including on the answer), sorting plus greedy, intervals and merging, stack and monotonic stack, BFS/DFS on grids and graphs, topological sort, union-find, heaps and top-K, backtracking, and dynamic programming (1-D, 2-D, and knapsack shapes) · **the Java specifics**: `HashMap`/`ArrayDeque`/`PriorityQueue`/`TreeMap` as your working set, `Arrays.sort` vs `Collections.sort`, `int[]` vs `List<Integer>` performance, `StringBuilder`, and avoiding `substring` in loops · **a realistic study plan**: 60–80 curated problems over the phase, sorted by pattern, with spaced repetition and a written solution log · **how to perform**: restate the problem, ask about constraints and edge cases, state a brute force, then optimize out loud, write clean compilable code, dry-run an example, and analyze complexity — plus what to do when you're stuck · backend-flavored variants: LRU cache, a rate limiter, an in-memory key-value store with TTL, a task scheduler with dependencies, and log/stream processing

**Day 479 — Coding Rounds, Code Review & Behavioral** · 🎥 55m · 💻 90m
**The take-home and pairing round**: how a "build a small REST API" assignment is actually graded — correctness, layering, tests, error handling, README, commit history, and knowing what you deliberately left out · a live walkthrough of a good and a bad submission for the same brief · scoping to the time limit and documenting the tradeoffs · **the code review round**: reviewing a deliberately flawed Spring service on camera and calling out an N+1, a missing transaction boundary, an unbounded thread pool, a swallowed exception, a SQL injection, a mutable singleton field, a missing timeout, and an untestable design — and how to phrase feedback constructively · **the debugging round**: a service with a memory leak and a hot lock, diagnosed live with the Day 169 toolbox · **behavioral**: STAR structure with real specifics and numbers, and prepared stories for conflict, failure, a production incident, a technical disagreement, mentoring, and a decision you'd make differently · questions to ask your interviewer that actually tell you something · remote interview logistics and thinking out loud without rambling

**Day 480 — Portfolio, Resume, Job Search & The Next 365 Days** · 🎥 55m · 💻 90m
**The portfolio**: three deployed projects with live URLs, a README that leads with the architecture diagram and the tradeoffs, clean commit history, tests, CI badges, and a short demo video — quality over quantity, and why one excellent project beats twelve tutorials · pinning and presenting repositories · writing about your work (a blog post per capstone) and why it compounds · **open source**: finding a first issue, reading a contributing guide, making a small useful PR, and building a public track record · **the resume**: one page for under ten years, impact statements with numbers, a technology list that matches the job description honestly, ATS-friendly formatting, and the mistakes that get instant rejections · LinkedIn and GitHub as the two profiles recruiters actually open · **the search**: targeting companies, referrals as the highest-yield channel, cold outreach that works, tracking applications, and managing rejection · **negotiation**: knowing your number, never anchoring first, the total-compensation view (base, bonus, equity, and what equity is actually worth), competing offers, and the exact scripts · **the first 90 days** in a new backend role · **the roadmap after this playlist**: depth (JVM performance, distributed systems, security), breadth (Kotlin, Go, data engineering, platform), and the senior-engineer skills that aren't code — design documents, mentoring, incident leadership, and influencing without authority · how to keep learning when there's no curriculum left

---
---

# APPENDIX A — The Complete Spring & Ecosystem Dependency Reference

> **How to read this appendix.** Every dependency marked **BOM** has its version managed by `spring-boot-dependencies` (inherited via `spring-boot-starter-parent`, or imported — see Appendix B). **Never write a `<version>` tag for those.** Dependencies marked **v** need an explicit version, ideally through a `<properties>` block so it appears once. Dependencies marked **CLOUD** are managed by the `spring-cloud-dependencies` BOM.
>
> This list is referenced throughout the playlist — the lesson number in the last column tells you where it's taught.

## A.1 — Core Spring Boot Starters

| Dependency (`org.springframework.boot:…`) | What it pulls in / what it's for | Ver | Day |
|---|---|---|---|
| `spring-boot-starter` | Core: context, beans, autoconfigure, logging (Logback), SnakeYAML. Every other starter includes it. | BOM | 280 |
| `spring-boot-starter-web` | Spring MVC, embedded Tomcat, Jackson, validation-free REST APIs | BOM | 299 |
| `spring-boot-starter-webflux` | Reactive stack: WebFlux, Reactor, Reactor Netty, `WebClient` | BOM | 363 |
| `spring-boot-starter-validation` | Hibernate Validator + Jakarta Validation API. **Not included in `-web` since Boot 3** — add it explicitly | BOM | 305 |
| `spring-boot-starter-test` | JUnit 5, Spring Test, AssertJ, Hamcrest, Mockito, JSONassert, JsonPath, Awaitility, XMLUnit. Scope `test` | BOM | 293 |
| `spring-boot-starter-actuator` | Production endpoints, health, metrics, Micrometer core | BOM | 291 |
| `spring-boot-starter-aop` | Spring AOP + AspectJ weaver (`@Aspect` support) | BOM | 274 |
| `spring-boot-starter-jdbc` | `JdbcTemplate`, `JdbcClient`, HikariCP, `DataSourceTransactionManager` | BOM | 326 |
| `spring-boot-starter-data-jpa` | Hibernate 6, Jakarta Persistence, Spring Data JPA, Spring ORM, HikariCP | BOM | 224 |
| `spring-boot-starter-data-jdbc` | Spring Data JDBC (no ORM, aggregate-oriented) | BOM | 326 |
| `spring-boot-starter-data-r2dbc` | Reactive relational data access | BOM | 367 |
| `spring-boot-starter-data-mongodb` | Blocking MongoDB driver + Spring Data MongoDB | BOM | 327 |
| `spring-boot-starter-data-mongodb-reactive` | Reactive MongoDB | BOM | 367 |
| `spring-boot-starter-data-redis` | Lettuce driver + `RedisTemplate` + Spring Data Redis | BOM | 328 |
| `spring-boot-starter-data-redis-reactive` | `ReactiveRedisTemplate` | BOM | 367 |
| `spring-boot-starter-data-elasticsearch` | Elasticsearch Java client + Spring Data Elasticsearch | BOM | 394 |
| `spring-boot-starter-data-cassandra` | DataStax driver + Spring Data Cassandra | BOM | 395 |
| `spring-boot-starter-data-cassandra-reactive` | Reactive Cassandra | BOM | 395 |
| `spring-boot-starter-data-neo4j` | Neo4j driver + Spring Data Neo4j | BOM | 396 |
| `spring-boot-starter-data-rest` | Auto-expose repositories as hypermedia REST | BOM | 314 |
| `spring-boot-starter-security` | Spring Security core, web, config | BOM | 336 |
| `spring-boot-starter-oauth2-client` | OAuth2/OIDC login + client credentials | BOM | 350 |
| `spring-boot-starter-oauth2-resource-server` | JWT / opaque-token API protection | BOM | 351 |
| `spring-boot-starter-oauth2-authorization-server` | Run your own OAuth2/OIDC provider | BOM | 352 |
| `spring-boot-starter-mail` | `JavaMailSender` over SMTP | BOM | 466 |
| `spring-boot-starter-thymeleaf` | Thymeleaf templating (HTML pages, HTML email) | BOM | 316 |
| `spring-boot-starter-freemarker` | FreeMarker templating | BOM | 316 |
| `spring-boot-starter-mustache` | Mustache templating | BOM | 316 |
| `spring-boot-starter-batch` | Spring Batch: `Job`, `Step`, chunk processing, `JobRepository` | BOM | 471 |
| `spring-boot-starter-quartz` | Quartz scheduler with a clustered JDBC job store | BOM | 471 |
| `spring-boot-starter-cache` | The `@Cacheable` abstraction (bring your own provider) | BOM | 386 |
| `spring-boot-starter-amqp` | Spring AMQP + RabbitMQ client | BOM | 371 |
| `spring-boot-starter-activemq` / `-artemis` | JMS with ActiveMQ Classic / Artemis | BOM | 369 |
| `spring-boot-starter-graphql` | Spring for GraphQL + GraphQL Java | BOM | 449 |
| `spring-boot-starter-websocket` | WebSocket + STOMP messaging | BOM | 465 |
| `spring-boot-starter-hateoas` | `EntityModel`, `CollectionModel`, HAL | BOM | 314 |
| `spring-boot-starter-integration` | Spring Integration (EIP channels, adapters) | BOM | 369 |
| `spring-boot-starter-jooq` | jOOQ type-safe SQL | BOM | 326 |
| `spring-boot-starter-json` | Jackson (pulled in by `-web` automatically) | BOM | 252 |
| `spring-boot-starter-logging` | Logback + SLF4J bridges (**default**; exclude to swap) | BOM | 288 |
| `spring-boot-starter-log4j2` | Log4j2 instead of Logback (exclude `-logging` first) | BOM | 289 |
| `spring-boot-starter-tomcat` | Embedded Tomcat (**default** in `-web`) | BOM | 287 |
| `spring-boot-starter-jetty` | Embedded Jetty (exclude `-tomcat` first) | BOM | 287 |
| `spring-boot-starter-undertow` | Embedded Undertow (exclude `-tomcat` first) | BOM | 287 |
| `spring-boot-devtools` | Restart, LiveReload, dev property defaults. `optional`, `runtime` | BOM | 290 |
| `spring-boot-docker-compose` | Auto-start `compose.yaml` on `bootRun`. `optional`, `runtime` | BOM | 423 |
| `spring-boot-testcontainers` | `@ServiceConnection`, dev-time containers. Scope `test` | BOM | 195 |
| `spring-boot-configuration-processor` | Generates IDE metadata for your `@ConfigurationProperties`. `optional` | BOM | 282 |
| `spring-boot-properties-migrator` | Warns about renamed/removed properties during a Boot upgrade. `runtime`, temporary | BOM | 297 |
| `spring-boot-starter-parent` | Parent POM: dependency + plugin management, Java version, UTF-8 | — | 280 |
| `spring-boot-dependencies` | The BOM to `import` when you can't use the parent | — | 175 |

## A.2 — Spring Framework Modules (usually transitive, listed for reference)

`org.springframework:spring-core` · `spring-beans` · `spring-context` · `spring-context-support` · `spring-aop` · `spring-aspects` · `spring-expression` · `spring-web` · `spring-webmvc` · `spring-webflux` · `spring-websocket` · `spring-messaging` · `spring-jdbc` · `spring-orm` · `spring-tx` · `spring-jms` · `spring-oxm` · `spring-test` — all **BOM**-managed. You rarely declare these directly; a starter brings the right set.

## A.3 — Spring Cloud

> Requires importing `org.springframework.cloud:spring-cloud-dependencies` as a BOM, with a release-train version matched to your Boot version (**see Appendix D**).

| Dependency (`org.springframework.cloud:…`) | Purpose | Ver | Day |
|---|---|---|---|
| `spring-cloud-dependencies` | The release-train BOM (`import` scope, `pom` type) | v | 400 |
| `spring-cloud-config-server` | Centralized config server (Git/Vault/JDBC backends) | CLOUD | 401 |
| `spring-cloud-starter-config` | Config client (`spring.config.import=configserver:`) | CLOUD | 401 |
| `spring-cloud-starter-bootstrap` | Legacy bootstrap context (only for old-style config) | CLOUD | 401 |
| `spring-cloud-starter-netflix-eureka-server` | Eureka registry server | CLOUD | 402 |
| `spring-cloud-starter-netflix-eureka-client` | Eureka registration + discovery | CLOUD | 402 |
| `spring-cloud-starter-consul-discovery` | Consul service discovery | CLOUD | 403 |
| `spring-cloud-starter-consul-config` | Consul KV as a property source | CLOUD | 403 |
| `spring-cloud-starter-kubernetes-client-config` | ConfigMaps/Secrets as property sources | CLOUD | 403 |
| `spring-cloud-starter-kubernetes-client-discovery` | Kubernetes-native discovery | CLOUD | 403 |
| `spring-cloud-starter-gateway` | Reactive API gateway (Netty/WebFlux) | CLOUD | 405 |
| `spring-cloud-starter-gateway-mvc` | Servlet/blocking gateway variant | CLOUD | 405 |
| `spring-cloud-starter-openfeign` | Declarative HTTP clients | CLOUD | 407 |
| `spring-cloud-starter-loadbalancer` | Client-side load balancing (replaces Ribbon) | CLOUD | 404 |
| `spring-cloud-starter-circuitbreaker-resilience4j` | Circuit breaker abstraction (blocking) | CLOUD | 408 |
| `spring-cloud-starter-circuitbreaker-reactor-resilience4j` | Reactive variant | CLOUD | 408 |
| `spring-cloud-starter-stream-kafka` | Spring Cloud Stream, Kafka binder | CLOUD | 381 |
| `spring-cloud-starter-stream-rabbit` | Spring Cloud Stream, RabbitMQ binder | CLOUD | 381 |
| `spring-cloud-stream-test-binder` | In-memory binder for tests (scope `test`) | CLOUD | 381 |
| `spring-cloud-starter-bus-kafka` / `-bus-amqp` | Broadcast `/busrefresh` config events | CLOUD | 401 |
| `spring-cloud-starter-vault-config` | HashiCorp Vault as a property source + dynamic DB creds | CLOUD | 356 |
| `spring-cloud-starter-contract-verifier` | Provider-side contract test generation | CLOUD | 418 |
| `spring-cloud-starter-contract-stub-runner` | Consumer-side stubs (scope `test`) | CLOUD | 418 |
| `spring-cloud-function-context` | `Supplier`/`Function`/`Consumer` programming model | CLOUD | 381 |
| `spring-cloud-starter-task` | Short-lived batch/task lifecycle | CLOUD | 471 |
| `io.awspring.cloud:spring-cloud-aws-dependencies` | Spring Cloud AWS BOM (separate project) | v | 435 |
| `io.awspring.cloud:spring-cloud-aws-starter-s3` | S3 client, `S3Template`, `s3://` resources | v | 435 |
| `io.awspring.cloud:spring-cloud-aws-starter-sqs` | `@SqsListener`, `SqsTemplate` | v | 435 |
| `io.awspring.cloud:spring-cloud-aws-starter-sns` | SNS publishing | v | 435 |
| `io.awspring.cloud:spring-cloud-aws-starter-parameter-store` | SSM Parameter Store property source | v | 435 |
| `io.awspring.cloud:spring-cloud-aws-starter-secrets-manager` | Secrets Manager property source | v | 435 |
| `io.awspring.cloud:spring-cloud-aws-starter-dynamodb` | DynamoDB Enhanced Client integration | v | 435 |

## A.4 — Messaging: Kafka, RabbitMQ & Schema

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `org.springframework.kafka:spring-kafka` | `KafkaTemplate`, `@KafkaListener`, containers | BOM | 376 |
| `org.springframework.kafka:spring-kafka-test` | `EmbeddedKafka`, test utilities (scope `test`) | BOM | 376 |
| `org.apache.kafka:kafka-clients` | Raw producer/consumer/admin API (transitive) | BOM | 374 |
| `org.apache.kafka:kafka-streams` | Kafka Streams DSL + Processor API | BOM | 380 |
| `org.springframework.kafka:spring-kafka-streams` *(or `spring-kafka` + `kafka-streams`)* | `@EnableKafkaStreams`, `StreamsBuilderFactoryBean` | BOM | 380 |
| `org.apache.kafka:kafka-streams-test-utils` | `TopologyTestDriver` (scope `test`) | BOM | 380 |
| `io.confluent:kafka-avro-serializer` | Avro serde + Schema Registry client (Confluent repo) | v | 377 |
| `io.confluent:kafka-schema-registry-client` | Schema Registry REST client | v | 377 |
| `org.apache.avro:avro` + `avro-maven-plugin` | Avro schema compilation to Java | v | 377 |
| `com.google.protobuf:protobuf-java` + `protobuf-maven-plugin` | Protobuf runtime + codegen | v | 450 |
| `org.springframework.amqp:spring-rabbit` | Spring AMQP core (via `starter-amqp`) | BOM | 371 |
| `org.springframework.amqp:spring-rabbit-test` | Rabbit test support (scope `test`) | BOM | 371 |
| `io.grpc:grpc-netty-shaded`, `grpc-protobuf`, `grpc-stub` | gRPC runtime | v | 450 |
| `net.devh:grpc-spring-boot-starter` | `@GrpcService` / `@GrpcClient` | v | 450 |
| `io.debezium:debezium-embedded` + `debezium-connector-postgres` | Embedded CDC without Kafka Connect | v | 383 |

## A.5 — Database Drivers, Pools & Migrations

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `org.postgresql:postgresql` | PostgreSQL JDBC driver (scope `runtime`) | BOM | 221 |
| `com.mysql:mysql-connector-j` | MySQL 8 JDBC driver (scope `runtime`) | BOM | 221 |
| `org.mariadb.jdbc:mariadb-java-client` | MariaDB driver | BOM | 221 |
| `com.h2database:h2` | In-memory DB — **tests and demos only** | BOM | 194 |
| `com.microsoft.sqlserver:mssql-jdbc` | SQL Server driver | BOM | 221 |
| `com.oracle.database.jdbc:ojdbc11` | Oracle driver (Java 11+) | v | 221 |
| `com.zaxxer:HikariCP` | Connection pool (transitive via `-jdbc`/`-data-jpa`) | BOM | 222 |
| `org.postgresql:r2dbc-postgresql` | Reactive Postgres driver | BOM | 367 |
| `io.asyncer:r2dbc-mysql` | Reactive MySQL driver | v | 367 |
| `io.r2dbc:r2dbc-pool` | Reactive connection pool | BOM | 367 |
| `io.r2dbc:r2dbc-h2` | Reactive H2 (tests) | BOM | 367 |
| `org.flywaydb:flyway-core` | Versioned SQL migrations | BOM | 245 |
| `org.flywaydb:flyway-database-postgresql` | **Required for Postgres on Flyway 10+** | BOM | 245 |
| `org.flywaydb:flyway-mysql` | MySQL/MariaDB support module | BOM | 245 |
| `org.liquibase:liquibase-core` | Changelog-based migrations | BOM | 246 |
| `org.hibernate.orm:hibernate-core` | Hibernate (transitive via `-data-jpa`) | BOM | 224 |
| `org.hibernate.orm:hibernate-envers` | Entity revision history / audit tables | BOM | 244 |
| `org.hibernate.orm:hibernate-jpamodelgen` | Static JPA metamodel (`Order_`) — annotation processor | BOM | 238 |
| `org.hibernate.validator:hibernate-validator` | Bean Validation impl (via `-validation`) | BOM | 305 |
| `com.querydsl:querydsl-jpa` *(classifier `jakarta`)* | Type-safe queries | v | 322 |
| `com.querydsl:querydsl-apt` *(classifier `jakarta`)* | Querydsl `Q`-class generator | v | 322 |
| `org.jooq:jooq` | Type-safe SQL DSL | BOM | 326 |
| `org.springframework.data:spring-data-envers` | Envers-backed repositories | BOM | 244 |

## A.6 — Mapping, Boilerplate & JSON

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `org.projectlombok:lombok` | `@Getter`, `@Builder`, `@Slf4j`, `@RequiredArgsConstructor`. `optional` | BOM | 240 |
| `org.projectlombok:lombok-mapstruct-binding` | **Required** so Lombok and MapStruct processors cooperate | v | 240 |
| `org.mapstruct:mapstruct` | Compile-time DTO ↔ entity mapping | v | 240 |
| `org.mapstruct:mapstruct-processor` | The annotation processor (declare in `annotationProcessorPaths`) | v | 240 |
| `org.modelmapper:modelmapper` | Reflection-based mapping (slower, less safe — for legacy) | v | 240 |
| `com.fasterxml.jackson.core:jackson-databind` | Core JSON binding (transitive) | BOM | 252 |
| `com.fasterxml.jackson.datatype:jackson-datatype-jsr310` | **`java.time` support — register this or dates break** | BOM | 252 |
| `com.fasterxml.jackson.module:jackson-module-parameter-names` | Constructor param names without `@JsonProperty` | BOM | 252 |
| `com.fasterxml.jackson.datatype:jackson-datatype-jdk8` | `Optional` support | BOM | 252 |
| `com.fasterxml.jackson.dataformat:jackson-dataformat-xml` | XML via Jackson | BOM | 303 |
| `com.fasterxml.jackson.dataformat:jackson-dataformat-yaml` | YAML via Jackson | BOM | 303 |
| `com.fasterxml.jackson.datatype:jackson-datatype-hibernate6` | Handles lazy proxies during serialization | v | 253 |
| `com.google.code.gson:gson` | Alternative JSON library | BOM | 253 |
| `com.jayway.jsonpath:json-path` | JSONPath assertions and extraction | BOM | 197 |

## A.7 — API Documentation

| Dependency (`org.springdoc:…`) | Purpose | Ver | Day |
|---|---|---|---|
| `springdoc-openapi-starter-webmvc-ui` | OpenAPI 3 + Swagger UI for Spring MVC | v | 313 |
| `springdoc-openapi-starter-webmvc-api` | Spec generation only, no UI | v | 313 |
| `springdoc-openapi-starter-webflux-ui` | OpenAPI + Swagger UI for WebFlux | v | 313 |
| `springdoc-openapi-starter-common` | Core annotations/config | v | 313 |
| `springdoc-openapi-maven-plugin` | Dump the spec to a file at build time | v | 313 |
| `org.openapitools:openapi-generator-maven-plugin` | Generate server stubs / typed clients from a spec | v | 313 |

## A.8 — Security & JWT

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `org.springframework.security:spring-security-test` | `@WithMockUser`, `SecurityMockMvcRequestPostProcessors` (scope `test`) | BOM | 347 |
| `org.springframework.security:spring-security-oauth2-jose` | JOSE/JWT support (transitive with resource server) | BOM | 351 |
| `com.nimbusds:nimbus-jose-jwt` | JWT/JWS/JWE library used by Spring Security | BOM | 346 |
| `io.jsonwebtoken:jjwt-api` | JJWT builder/parser API | v | 347 |
| `io.jsonwebtoken:jjwt-impl` | JJWT implementation (`runtime`) | v | 347 |
| `io.jsonwebtoken:jjwt-jackson` | JJWT JSON binding (`runtime`) | v | 347 |
| `com.auth0:java-jwt` | Alternative JWT library | v | 347 |
| `org.springframework.security:spring-security-rsa` | `{cipher}` config encryption support | v | 401 |
| `org.bouncycastle:bcprov-jdk18on` | Extra crypto algorithms (Argon2, etc.) | v | 339 |
| `com.warrenstrange:googleauth` | TOTP two-factor codes | v | 458 |
| `org.owasp:dependency-check-maven` | CVE scanning of your dependency tree (plugin) | v | 356 |

## A.9 — Testing

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `org.junit.jupiter:junit-jupiter` | JUnit 5 aggregate (via `-starter-test`) | BOM | 184 |
| `org.junit.platform:junit-platform-suite` | Test suites | BOM | 186 |
| `org.mockito:mockito-core` | Mocking (via `-starter-test`) | BOM | 190 |
| `org.mockito:mockito-junit-jupiter` | `@ExtendWith(MockitoExtension.class)` | BOM | 190 |
| `org.assertj:assertj-core` | Fluent assertions | BOM | 189 |
| `org.hamcrest:hamcrest` | Matchers used by MockMvc | BOM | 189 |
| `org.awaitility:awaitility` | Polling assertions for async code | BOM | 198 |
| `org.testcontainers:testcontainers-bom` | Testcontainers BOM (`import`) | BOM | 194 |
| `org.testcontainers:junit-jupiter` | `@Testcontainers`, `@Container` | BOM | 194 |
| `org.testcontainers:postgresql` / `mysql` / `mongodb` / `kafka` / `elasticsearch` / `localstack` / `rabbitmq` / `redis` | Per-technology container modules | BOM | 195 |
| `org.wiremock:wiremock-standalone` *(or `com.github.tomakehurst:wiremock-jre8`)* | HTTP stubbing | v | 196 |
| `org.springframework.cloud:spring-cloud-contract-wiremock` | WireMock + Spring test integration | CLOUD | 196 |
| `io.rest-assured:rest-assured` | Fluent API testing | BOM | 197 |
| `io.rest-assured:json-schema-validator` | JSON Schema assertions | BOM | 197 |
| `com.tngtech.archunit:archunit-junit5` | Architecture rules as tests | v | 448 |
| `org.pitest:pitest-maven` + `pitest-junit5-plugin` | Mutation testing | v | 198 |
| `org.jacoco:jacoco-maven-plugin` | Coverage instrumentation + thresholds | v | 182 |
| `io.projectreactor:reactor-test` | `StepVerifier`, `TestPublisher` | BOM | 368 |
| `io.projectreactor.tools:blockhound` | Detects blocking calls on event loops | v | 368 |
| `net.jqwik:jqwik` | Property-based testing | v | 198 |
| `org.instancio:instancio-junit` | Random test-object generation | v | 193 |
| `com.squareup.okhttp3:mockwebserver` | Lightweight HTTP mock server | BOM | 366 |
| `de.codecentric:chaos-monkey-spring-boot` | In-app chaos assaults | v | 418 |
| `org.openjdk.jmh:jmh-core` + `jmh-generator-annprocess` | Microbenchmarking | v | 168 |
| `org.openjdk.jcstress:jcstress-core` | Java Memory Model stress tests | v | 152 |

## A.10 — Observability

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `io.micrometer:micrometer-core` | Metrics façade (via `-actuator`) | BOM | 410 |
| `io.micrometer:micrometer-registry-prometheus` | `/actuator/prometheus` scrape endpoint | BOM | 410 |
| `io.micrometer:micrometer-registry-otlp` | OTLP metrics export | BOM | 410 |
| `io.micrometer:micrometer-registry-cloudwatch2` | AWS CloudWatch metrics | BOM | 435 |
| `io.micrometer:micrometer-tracing-bridge-brave` | Tracing via Brave | BOM | 411 |
| `io.zipkin.reporter2:zipkin-reporter-brave` | Send spans to Zipkin | BOM | 411 |
| `io.micrometer:micrometer-tracing-bridge-otel` | Tracing via OpenTelemetry | BOM | 411 |
| `io.opentelemetry:opentelemetry-exporter-otlp` | OTLP span export (Jaeger/Tempo/collector) | BOM | 411 |
| `io.micrometer:micrometer-observation` | The `Observation` API for custom instrumentation | BOM | 411 |
| `net.logstash.logback:logstash-logback-encoder` | Structured JSON logs for Logback | v | 288 |
| `com.github.loki4j:loki-logback-appender` | Ship logs straight to Grafana Loki | v | 412 |
| `org.springframework.boot:spring-boot-starter-actuator` | (see A.1) | BOM | 291 |

## A.11 — Resilience, Caching & Rate Limiting

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `io.github.resilience4j:resilience4j-spring-boot3` | `@CircuitBreaker`, `@Retry`, `@Bulkhead`, `@RateLimiter`, `@TimeLimiter` | v | 408 |
| `io.github.resilience4j:resilience4j-micrometer` | Resilience4j metrics | v | 409 |
| `io.github.resilience4j:resilience4j-reactor` | Reactive operators | v | 409 |
| `org.springframework.retry:spring-retry` | `@Retryable`, `RetryTemplate` (needs `spring-aspects`) | BOM | 372 |
| `com.github.ben-manes.caffeine:caffeine` | High-performance local cache | BOM | 387 |
| `org.ehcache:ehcache` *(classifier `jakarta`)* | JSR-107 cache provider | BOM | 242 |
| `org.redisson:redisson-spring-boot-starter` | `RLock`, `RRateLimiter`, distributed collections | v | 390 |
| `com.bucket4j:bucket4j_jdk17-core` *(or `com.bucket4j:bucket4j-core`)* | Token-bucket rate limiting | v | 355 |
| `net.javacrumbs.shedlock:shedlock-spring` + `shedlock-provider-jdbc-template` | Run `@Scheduled` on one instance only | v | 278 |
| `org.springframework.session:spring-session-data-redis` | Externalize HTTP sessions to Redis | BOM | 341 |

## A.12 — Utilities

| Dependency | Purpose | Ver | Day |
|---|---|---|---|
| `org.apache.commons:commons-lang3` | `StringUtils`, `ObjectUtils`, `Pair`, `RandomStringUtils` | BOM | 120 |
| `commons-io:commons-io` | `IOUtils`, `FileUtils` | v | 103 |
| `org.apache.commons:commons-csv` | CSV read/write | v | 471 |
| `com.opencsv:opencsv` | CSV with bean binding | v | 471 |
| `com.google.guava:guava` | Collections, caches, `Preconditions`, rate limiter | v | 120 |
| `org.apache.poi:poi-ooxml` | Excel generation | v | 471 |
| `com.openhtmltopdf:openhtmltopdf-pdfbox` *(or `com.itextpdf:itext7-core`)* | PDF generation | v | 471 |
| `org.apache.httpcomponents.client5:httpclient5` | Apache HTTP client 5 (a `RestClient` backend) | BOM | 315 |
| `com.squareup.okhttp3:okhttp` | OkHttp client | BOM | 315 |
| `org.jsoup:jsoup` | HTML parsing / sanitization | v | 310 |
| `com.github.f4b6a3:uuid-creator` *(or `com.fasterxml.uuid:java-uuid-generator`)* | UUIDv7 time-ordered ids | v | 219 |
| `org.owasp.encoder:encoder` | Context-aware output encoding (XSS defence) | v | 356 |
| `io.hypersistence:hypersistence-utils-hibernate-63` | JSON/array/interval Hibernate types | v | 226 |
| `org.zalando:problem-spring-web` | RFC 9457 support pre-Spring-6 (legacy) | v | 308 |

## A.13 — Build Plugins

| Plugin | Purpose | Day |
|---|---|---|
| `org.springframework.boot:spring-boot-maven-plugin` | `repackage`, `run`, `build-image`, `build-info`, AOT, native | 295 |
| `org.apache.maven.plugins:maven-compiler-plugin` | `<release>`, preview features, **`annotationProcessorPaths` ordering** | 176 |
| `org.apache.maven.plugins:maven-surefire-plugin` | Unit tests (`*Test`) | 176 |
| `org.apache.maven.plugins:maven-failsafe-plugin` | Integration tests (`*IT`), bound to `verify` | 176 |
| `org.apache.maven.plugins:maven-enforcer-plugin` | Ban duplicate/conflicting deps, require Java/Maven versions | 174 |
| `org.apache.maven.plugins:maven-shade-plugin` | Uber-jar with relocation (non-Boot apps) | 176 |
| `org.jacoco:jacoco-maven-plugin` | Coverage report + `check` threshold gate | 182 |
| `org.pitest:pitest-maven` | Mutation testing gate | 198 |
| `org.sonarsource.scanner.maven:sonar-maven-plugin` | SonarQube/SonarCloud analysis | 182 |
| `com.diffplug.spotless:spotless-maven-plugin` | Auto-format (google-java-format, import order) | 182 |
| `org.apache.maven.plugins:maven-checkstyle-plugin` | Style enforcement | 182 |
| `org.apache.maven.plugins:maven-pmd-plugin` | Smells + CPD duplicate detection | 182 |
| `com.github.spotbugs:spotbugs-maven-plugin` | Bug patterns (+ `find-sec-bugs` plugin) | 182 |
| `io.github.git-commit-id:git-commit-id-maven-plugin` | Git metadata for `/actuator/info` | 176 |
| `org.cyclonedx:cyclonedx-maven-plugin` | SBOM generation | 424 |
| `com.google.cloud.tools:jib-maven-plugin` | Daemonless, reproducible container images | 422 |
| `org.graalvm.buildtools:native-maven-plugin` | GraalVM native image build | 298 |
| `org.flywaydb:flyway-maven-plugin` | Run migrations from the CLI/CI | 245 |
| `org.liquibase:liquibase-maven-plugin` | Liquibase CLI goals | 246 |
| `org.apache.avro:avro-maven-plugin` | Avro codegen | 377 |
| `io.github.ascopes:protobuf-maven-plugin` *(or `org.xolstice.maven.plugins:protobuf-maven-plugin`)* | Protobuf/gRPC codegen | 450 |
| `com.querydsl:querydsl-maven-plugin` *(or APT via compiler plugin)* | Querydsl `Q`-class generation | 322 |
| `org.springdoc:springdoc-openapi-maven-plugin` | Export the OpenAPI spec | 313 |
| `org.openapitools:openapi-generator-maven-plugin` | Generate clients/stubs | 313 |
| `org.owasp:dependency-check-maven` | CVE scan gate | 356 |
| `org.codehaus.mojo:versions-maven-plugin` | `display-dependency-updates`, `set` | 181 |
| `org.codehaus.mojo:flatten-maven-plugin` | CI-friendly `${revision}` versions | 178 |

---

# APPENDIX B — Production-Grade `pom.xml` Skeleton

> This is the file the playlist builds toward. Comment out what a given service doesn't need. Versions for BOM-managed artifacts are deliberately absent — that's the point of the BOM.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.0</version>   <!-- check current: see Appendix D -->
    <relativePath/>
  </parent>

  <groupId>com.acme</groupId>
  <artifactId>order-service</artifactId>
  <version>${revision}</version>
  <name>order-service</name>
  <description>Order management service</description>

  <properties>
    <revision>1.0.0-SNAPSHOT</revision>
    <java.version>21</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>

    <!-- Versions NOT managed by the Spring Boot BOM -->
    <spring-cloud.version>2025.0.0</spring-cloud.version>
    <mapstruct.version>1.6.3</mapstruct.version>
    <lombok-mapstruct-binding.version>0.2.0</lombok-mapstruct-binding.version>
    <springdoc.version>2.8.5</springdoc.version>
    <resilience4j.version>2.3.0</resilience4j.version>
    <jjwt.version>0.12.6</jjwt.version>
    <archunit.version>1.3.0</archunit.version>
    <wiremock.version>3.9.2</wiremock.version>
    <jacoco.version>0.8.12</jacoco.version>
    <pitest.version>1.17.0</pitest.version>
    <jacoco.branch.min>0.80</jacoco.branch.min>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-dependencies</artifactId>
        <version>${spring-cloud.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <!-- ===== Web ===== -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

    <!-- ===== Persistence ===== -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>org.flywaydb</groupId>
      <artifactId>flyway-core</artifactId>
    </dependency>
    <dependency>
      <groupId>org.flywaydb</groupId>
      <artifactId>flyway-database-postgresql</artifactId>
    </dependency>

    <!-- ===== Security ===== -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
    </dependency>
    <dependency>
      <groupId>io.jsonwebtoken</groupId>
      <artifactId>jjwt-api</artifactId>
      <version>${jjwt.version}</version>
    </dependency>
    <dependency>
      <groupId>io.jsonwebtoken</groupId>
      <artifactId>jjwt-impl</artifactId>
      <version>${jjwt.version}</version>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>io.jsonwebtoken</groupId>
      <artifactId>jjwt-jackson</artifactId>
      <version>${jjwt.version}</version>
      <scope>runtime</scope>
    </dependency>

    <!-- ===== Messaging & Cache ===== -->
    <dependency>
      <groupId>org.springframework.kafka</groupId>
      <artifactId>spring-kafka</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-redis</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-cache</artifactId>
    </dependency>
    <dependency>
      <groupId>com.github.ben-manes.caffeine</groupId>
      <artifactId>caffeine</artifactId>
    </dependency>

    <!-- ===== Resilience & Cloud ===== -->
    <dependency>
      <groupId>io.github.resilience4j</groupId>
      <artifactId>resilience4j-spring-boot3</artifactId>
      <version>${resilience4j.version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-openfeign</artifactId>
    </dependency>

    <!-- ===== Observability ===== -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>io.micrometer</groupId>
      <artifactId>micrometer-registry-prometheus</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>io.micrometer</groupId>
      <artifactId>micrometer-tracing-bridge-brave</artifactId>
    </dependency>
    <dependency>
      <groupId>io.zipkin.reporter2</groupId>
      <artifactId>zipkin-reporter-brave</artifactId>
      <scope>runtime</scope>
    </dependency>

    <!-- ===== Docs ===== -->
    <dependency>
      <groupId>org.springdoc</groupId>
      <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
      <version>${springdoc.version}</version>
    </dependency>

    <!-- ===== Mapping & boilerplate ===== -->
    <dependency>
      <groupId>org.mapstruct</groupId>
      <artifactId>mapstruct</artifactId>
      <version>${mapstruct.version}</version>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <optional>true</optional>
    </dependency>

    <!-- ===== Dev-time ===== -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
      <scope>runtime</scope>
      <optional>true</optional>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-configuration-processor</artifactId>
      <optional>true</optional>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-docker-compose</artifactId>
      <scope>runtime</scope>
      <optional>true</optional>
    </dependency>

    <!-- ===== Test ===== -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.security</groupId>
      <artifactId>spring-security-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.kafka</groupId>
      <artifactId>spring-kafka-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-testcontainers</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>junit-jupiter</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>postgresql</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>kafka</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.wiremock</groupId>
      <artifactId>wiremock-standalone</artifactId>
      <version>${wiremock.version}</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>com.tngtech.archunit</groupId>
      <artifactId>archunit-junit5</artifactId>
      <version>${archunit.version}</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <release>${java.version}</release>
          <parameters>true</parameters>
          <!-- ORDER MATTERS: Lombok, then the binding, then MapStruct -->
          <annotationProcessorPaths>
            <path>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <version>${lombok.version}</version>
            </path>
            <path>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok-mapstruct-binding</artifactId>
              <version>${lombok-mapstruct-binding.version}</version>
            </path>
            <path>
              <groupId>org.mapstruct</groupId>
              <artifactId>mapstruct-processor</artifactId>
              <version>${mapstruct.version}</version>
            </path>
            <path>
              <groupId>org.hibernate.orm</groupId>
              <artifactId>hibernate-jpamodelgen</artifactId>
              <version>${hibernate.version}</version>
            </path>
          </annotationProcessorPaths>
          <compilerArgs>
            <arg>-Amapstruct.defaultComponentModel=spring</arg>
            <arg>-Amapstruct.unmappedTargetPolicy=ERROR</arg>
          </compilerArgs>
        </configuration>
      </plugin>

      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <configuration>
          <excludes>
            <exclude>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
            </exclude>
          </excludes>
        </configuration>
        <executions>
          <execution>
            <goals><goal>build-info</goal></goals>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <configuration>
          <excludes><exclude>**/*IT.java</exclude></excludes>
        </configuration>
      </plugin>

      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-failsafe-plugin</artifactId>
        <executions>
          <execution>
            <goals>
              <goal>integration-test</goal>
              <goal>verify</goal>
            </goals>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <groupId>org.jacoco</groupId>
        <artifactId>jacoco-maven-plugin</artifactId>
        <version>${jacoco.version}</version>
        <executions>
          <execution>
            <goals><goal>prepare-agent</goal></goals>
          </execution>
          <execution>
            <id>report</id>
            <phase>verify</phase>
            <goals><goal>report</goal></goals>
          </execution>
          <execution>
            <id>check</id>
            <phase>verify</phase>
            <goals><goal>check</goal></goals>
            <configuration>
              <rules>
                <rule>
                  <element>BUNDLE</element>
                  <limits>
                    <limit>
                      <counter>BRANCH</counter>
                      <value>COVEREDRATIO</value>
                      <minimum>${jacoco.branch.min}</minimum>
                    </limit>
                  </limits>
                </rule>
              </rules>
            </configuration>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <groupId>io.github.git-commit-id</groupId>
        <artifactId>git-commit-id-maven-plugin</artifactId>
        <executions>
          <execution><goals><goal>revision</goal></goals></execution>
        </executions>
      </plugin>

      <plugin>
        <groupId>org.cyclonedx</groupId>
        <artifactId>cyclonedx-maven-plugin</artifactId>
        <executions>
          <execution>
            <phase>package</phase>
            <goals><goal>makeAggregateBom</goal></goals>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>flatten-maven-plugin</artifactId>
        <configuration>
          <updatePomFile>true</updatePomFile>
          <flattenMode>resolveCiFriendliesOnly</flattenMode>
        </configuration>
        <executions>
          <execution><id>flatten</id><phase>process-resources</phase><goals><goal>flatten</goal></goals></execution>
          <execution><id>flatten-clean</id><phase>clean</phase><goals><goal>clean</goal></goals></execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  <profiles>
    <profile>
      <id>native</id>
      <build>
        <plugins>
          <plugin>
            <groupId>org.graalvm.buildtools</groupId>
            <artifactId>native-maven-plugin</artifactId>
          </plugin>
        </plugins>
      </build>
    </profile>
  </profiles>
</project>
```

**Common commands for this POM**

| Command | Effect |
|---|---|
| `./mvnw clean verify` | Full build: compile, unit tests, integration tests, coverage gate |
| `./mvnw test` | Unit tests only (Surefire) |
| `./mvnw verify -DskipITs` | Skip integration tests |
| `./mvnw spring-boot:run` | Run locally (starts `compose.yaml` services too) |
| `./mvnw spring-boot:build-image` | Buildpack container image, no Dockerfile |
| `./mvnw -Pnative native:compile` | GraalVM native binary |
| `./mvnw dependency:tree -Dverbose` | Diagnose a version conflict |
| `./mvnw versions:display-dependency-updates` | What's out of date |
| `./mvnw -T 1C clean verify` | Parallel build, one thread per core |

---

# APPENDIX C — The Gradle Equivalent

## C.1 — `gradle/libs.versions.toml` (version catalog)

```toml
[versions]
java = "21"
springBoot = "3.5.0"
springDepMgmt = "1.1.7"
springCloud = "2025.0.0"
mapstruct = "1.6.3"
lombokMapstruct = "0.2.0"
springdoc = "2.8.5"
resilience4j = "2.3.0"
jjwt = "0.12.6"
archunit = "1.3.0"
testcontainers = "1.20.4"
wiremock = "3.9.2"

[libraries]
# Starters (versions come from the Boot plugin's dependency management)
boot-web            = { module = "org.springframework.boot:spring-boot-starter-web" }
boot-validation     = { module = "org.springframework.boot:spring-boot-starter-validation" }
boot-jpa            = { module = "org.springframework.boot:spring-boot-starter-data-jpa" }
boot-security       = { module = "org.springframework.boot:spring-boot-starter-security" }
boot-oauth2-rs      = { module = "org.springframework.boot:spring-boot-starter-oauth2-resource-server" }
boot-actuator       = { module = "org.springframework.boot:spring-boot-starter-actuator" }
boot-aop            = { module = "org.springframework.boot:spring-boot-starter-aop" }
boot-cache          = { module = "org.springframework.boot:spring-boot-starter-cache" }
boot-redis          = { module = "org.springframework.boot:spring-boot-starter-data-redis" }
boot-test           = { module = "org.springframework.boot:spring-boot-starter-test" }
boot-testcontainers = { module = "org.springframework.boot:spring-boot-testcontainers" }
boot-devtools       = { module = "org.springframework.boot:spring-boot-devtools" }
boot-configproc     = { module = "org.springframework.boot:spring-boot-configuration-processor" }

postgresql          = { module = "org.postgresql:postgresql" }
flyway-core         = { module = "org.flywaydb:flyway-core" }
flyway-postgres     = { module = "org.flywaydb:flyway-database-postgresql" }
caffeine            = { module = "com.github.ben-manes.caffeine:caffeine" }
kafka               = { module = "org.springframework.kafka:spring-kafka" }
kafka-test          = { module = "org.springframework.kafka:spring-kafka-test" }
micrometer-prom     = { module = "io.micrometer:micrometer-registry-prometheus" }
micrometer-brave    = { module = "io.micrometer:micrometer-tracing-bridge-brave" }
zipkin-brave        = { module = "io.zipkin.reporter2:zipkin-reporter-brave" }
lombok              = { module = "org.projectlombok:lombok" }
security-test       = { module = "org.springframework.security:spring-security-test" }

cloud-openfeign     = { module = "org.springframework.cloud:spring-cloud-starter-openfeign" }

mapstruct           = { module = "org.mapstruct:mapstruct", version.ref = "mapstruct" }
mapstruct-processor = { module = "org.mapstruct:mapstruct-processor", version.ref = "mapstruct" }
lombok-mapstruct    = { module = "org.projectlombok:lombok-mapstruct-binding", version.ref = "lombokMapstruct" }
springdoc-ui        = { module = "org.springdoc:springdoc-openapi-starter-webmvc-ui", version.ref = "springdoc" }
resilience4j        = { module = "io.github.resilience4j:resilience4j-spring-boot3", version.ref = "resilience4j" }
jjwt-api            = { module = "io.jsonwebtoken:jjwt-api", version.ref = "jjwt" }
jjwt-impl           = { module = "io.jsonwebtoken:jjwt-impl", version.ref = "jjwt" }
jjwt-jackson        = { module = "io.jsonwebtoken:jjwt-jackson", version.ref = "jjwt" }
archunit            = { module = "com.tngtech.archunit:archunit-junit5", version.ref = "archunit" }
wiremock            = { module = "org.wiremock:wiremock-standalone", version.ref = "wiremock" }
tc-junit            = { module = "org.testcontainers:junit-jupiter" }
tc-postgres         = { module = "org.testcontainers:postgresql" }
tc-kafka            = { module = "org.testcontainers:kafka" }

[bundles]
observability = ["boot-actuator", "micrometer-prom", "micrometer-brave", "zipkin-brave"]
jwt           = ["jjwt-api", "jjwt-impl", "jjwt-jackson"]
testcontainers = ["boot-testcontainers", "tc-junit", "tc-postgres", "tc-kafka"]

[plugins]
springBoot     = { id = "org.springframework.boot", version.ref = "springBoot" }
springDepMgmt  = { id = "io.spring.dependency-management", version.ref = "springDepMgmt" }
```

## C.2 — `build.gradle.kts`

```kotlin
plugins {
    java
    alias(libs.plugins.springBoot)
    alias(libs.plugins.springDepMgmt)
    jacoco
}

group = "com.acme"
version = "1.0.0-SNAPSHOT"

java {
    toolchain { languageVersion = JavaLanguageVersion.of(21) }
}

configurations {
    compileOnly { extendsFrom(configurations.annotationProcessor.get()) }
}

repositories { mavenCentral() }

dependencyManagement {
    imports {
        mavenBom("org.springframework.cloud:spring-cloud-dependencies:${libs.versions.springCloud.get()}")
        mavenBom("org.testcontainers:testcontainers-bom:${libs.versions.testcontainers.get()}")
    }
}

dependencies {
    implementation(libs.boot.web)
    implementation(libs.boot.validation)
    implementation(libs.boot.jpa)
    implementation(libs.boot.security)
    implementation(libs.boot.oauth2.rs)
    implementation(libs.boot.aop)
    implementation(libs.boot.cache)
    implementation(libs.boot.redis)
    implementation(libs.kafka)
    implementation(libs.caffeine)
    implementation(libs.cloud.openfeign)
    implementation(libs.resilience4j)
    implementation(libs.springdoc.ui)
    implementation(libs.mapstruct)
    implementation(libs.bundles.jwt)
    implementation(libs.bundles.observability)
    implementation(libs.flyway.core)

    runtimeOnly(libs.postgresql)
    runtimeOnly(libs.flyway.postgres)

    compileOnly(libs.lombok)
    // ORDER MATTERS
    annotationProcessor(libs.lombok)
    annotationProcessor(libs.lombok.mapstruct)
    annotationProcessor(libs.mapstruct.processor)
    annotationProcessor(libs.boot.configproc)

    developmentOnly(libs.boot.devtools)

    testImplementation(libs.boot.test)
    testImplementation(libs.security.test)
    testImplementation(libs.kafka.test)
    testImplementation(libs.bundles.testcontainers)
    testImplementation(libs.wiremock)
    testImplementation(libs.archunit)
}

tasks.withType<JavaCompile> {
    options.compilerArgs.addAll(
        listOf("-parameters", "-Amapstruct.defaultComponentModel=spring")
    )
}

tasks.test {
    useJUnitPlatform()
    finalizedBy(tasks.jacocoTestReport)
}

tasks.jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                counter = "BRANCH"
                value = "COVEREDRATIO"
                minimum = "0.80".toBigDecimal()
            }
        }
    }
}

tasks.check { dependsOn(tasks.jacocoTestCoverageVerification) }
```

**Gradle command equivalents**

| Maven | Gradle |
|---|---|
| `./mvnw clean verify` | `./gradlew clean build` |
| `./mvnw test` | `./gradlew test` |
| `./mvnw spring-boot:run` | `./gradlew bootRun` |
| `./mvnw spring-boot:build-image` | `./gradlew bootBuildImage` |
| `./mvnw dependency:tree` | `./gradlew dependencies` |
| `./mvnw versions:display-dependency-updates` | `./gradlew dependencyUpdates` (versions plugin) |
| — | `./gradlew build --scan` (build performance analysis) |

---

# APPENDIX D — Version Compatibility Matrix

> **The single most common startup failure is a Boot ↔ Cloud mismatch.** Check this table before adding Spring Cloud. Always verify against the official Spring release notes, since new trains ship several times a year.

## D.1 — Spring Boot ↔ Framework ↔ Java ↔ Hibernate

| Spring Boot | Spring Framework | Min Java | Recommended Java | Hibernate | Jakarta EE | Notes |
|---|---|---|---|---|---|---|
| 2.7.x | 5.3.x | 8 | 11/17 | 5.6 | `javax.*` (EE 8) | **End of OSS support** — migrate |
| 3.0.x | 6.0.x | 17 | 17 | 6.1 | `jakarta.*` (EE 9) | The namespace break |
| 3.1.x | 6.0.x | 17 | 17 | 6.2 | EE 10 | `@ServiceConnection`, docker-compose support |
| 3.2.x | 6.1.x | 17 | 21 | 6.4 | EE 10 | Virtual threads, `RestClient`, JVM checkpoint |
| 3.3.x | 6.1.x | 17 | 21 | 6.5 | EE 10 | CDS support, `-Djarmode=tools` |
| 3.4.x | 6.2.x | 17 | 21 | 6.6 | EE 10 | Structured logging, `@MockitoBean`, endpoint `access` |
| 3.5.x | 6.2.x | 17 | 21/25 | 6.6 | EE 10 | Current line at time of writing |

**Rules of thumb**
- Java **21 LTS** is the sweet spot for Boot 3.2+ (virtual threads, pattern matching, sequenced collections).
- Java **25 LTS** is worth adopting once your whole dependency chain supports it — verify Lombok, Mockito (inline mock maker), and any bytecode-manipulating agents first.
- Never mix Spring Framework versions manually; let the Boot BOM decide.

## D.2 — Spring Boot ↔ Spring Cloud Release Train

| Spring Cloud train | Spring Boot | Status |
|---|---|---|
| 2021.0.x (Jubilee) | 2.6.x, 2.7.x | Legacy |
| 2022.0.x (Kilburn) | 3.0.x, 3.1.x | Legacy |
| 2023.0.x (Leyton) | 3.2.x, 3.3.x | Maintenance |
| 2024.0.x | 3.4.x | Supported |
| 2025.0.x | 3.5.x | Current |

> Spring Cloud switched from London-Underground code names to calendar versioning at 2020.0.0. Pick the train that matches your Boot **minor** version, not just the major.

## D.3 — Other Ecosystem Pairings Worth Knowing

| Component | Constraint |
|---|---|
| Flyway 10+ | Requires a per-database module (`flyway-database-postgresql`, `flyway-mysql`) alongside `flyway-core` |
| Hibernate 6 | JPQL is stricter than 5; `@Enumerated` and ID generator defaults changed; `NUMERIC` mapping differs |
| Mockito 5 | Inline mock maker is the default (can mock `final`); requires Java 11+ |
| Testcontainers 1.20+ | Requires Docker API 1.41+; the `kafka` module targets Confluent images |
| Querydsl | Needs the `jakarta` classifier for Boot 3; the codegen setup is the fiddliest part of the build |
| Lombok | Must be a new enough version for your JDK — a JDK upgrade with an old Lombok produces cryptic compile errors |
| Kafka clients ↔ broker | Clients are forward/backward compatible within reason, but Kafka Streams should match the broker generation |
| GraalVM native | Needs `spring-boot-maven-plugin` AOT processing plus a matching GraalVM JDK |

## D.4 — Upgrade Playbook

1. Read the **release notes and migration guide** for every minor version you're skipping — don't jump 3.1 → 3.5 blind.
2. Add `spring-boot-properties-migrator` (runtime, temporary) and fix every warning it prints.
3. Bump Boot, then bump the Cloud train to the matching row in D.2.
4. Run `mvn dependency:tree -Dverbose` and resolve every conflict.
5. Run the full test suite, then the integration suite, then a load test.
6. Check the `/actuator/conditions` report for auto-configurations that silently stopped matching.
7. Remove the properties-migrator before shipping.

---

# APPENDIX E — Tooling & Environment Checklist

## E.1 — Install Before Day 1

| Tool | Why | Notes |
|---|---|---|
| **JDK 21 (LTS)** | The course baseline | Install via SDKMAN (`sdk install java 21-tem`) so you can switch versions |
| **SDKMAN** (or jEnv / jabba) | Manage multiple JDKs, Maven, Gradle | Windows: use Scoop or the Chocolatey equivalents |
| **IntelliJ IDEA** (Community is enough to start; Ultimate for Spring/DB tooling) | Primary IDE | VS Code + Extension Pack for Java is a viable alternative |
| **Git** | Version control | Configure `user.name`, `user.email`, and an SSH key |
| **Docker Desktop / Colima / Podman** | Containers, Testcontainers, local infra | Testcontainers needs a working Docker socket |
| **Maven wrapper** (`mvnw`) | Comes with the project | Don't install Maven globally if you can avoid it |
| **Postman / Insomnia / Bruno / `curl` + `httpie`** | API testing | Bruno stores collections as files you can commit |
| **DBeaver / DataGrip / pgAdmin** | Database client | DBeaver is free and handles every engine in this course |
| **jq** | JSON on the command line | Used constantly from Phase 22 onward |

## E.2 — Add As The Course Progresses

| Phase | Tool |
|---|---|
| 6 (JVM) | VisualVM, JDK Mission Control, Eclipse MAT, async-profiler, JITWatch |
| 8 (Testing) | (Testcontainers needs Docker — already installed) |
| 9 (Databases) | PostgreSQL + MySQL via Docker, `psql` |
| 19 (Kafka) | Kafka CLI tools, Kafdrop / AKHQ / Redpanda Console, Confluent Schema Registry |
| 20 (Redis) | `redis-cli`, RedisInsight |
| 21 (Micro) | Zipkin or Jaeger, Prometheus, Grafana |
| 22 (DevOps) | `kubectl`, kind / k3d / minikube, Helm, k9s, Lens, Terraform, AWS CLI, LocalStack, Trivy, k6 or Gatling |
| 24 (Capstones) | Argo CD (or Flux), Keycloak, MailHog, Stripe CLI (test mode) |

## E.3 — IDE Configuration Worth Doing Once

- Enable **annotation processing** (required for Lombok, MapStruct, Querydsl, JPA metamodel).
- Install the **Lombok** plugin.
- Set the code style to **google-java-format** or your team's Checkstyle config, and enable format-on-save.
- Turn on **"Optimize imports on the fly"** and **"Add unambiguous imports on the fly"**.
- Configure the **Spring Boot run configuration** with an active profile and `--debug` for the condition report.
- Enable **inlay hints** for parameter names and inferred types.
- Set up **Live Templates** for `psvm`, test methods, and your logging pattern.
- Increase the IDE heap (`-Xmx4g` in the custom VM options) if you're working with the multi-module capstone.
- Bind a shortcut for **"Show Bytecode"** (Phase 6) and **"Analyze Dependencies"**.

## E.4 — Shell Aliases That Save Hours

```bash
alias mci='./mvnw clean install'
alias mcv='./mvnw clean verify'
alias mst='./mvnw spring-boot:run'
alias dcu='docker compose up -d'
alias dcd='docker compose down -v'
alias dps='docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"'
alias k='kubectl'
alias kgp='kubectl get pods -o wide'
alias klf='kubectl logs -f'
alias jps='jps -lvm'
```

---

# APPENDIX F — YouTube Production Notes

## F.1 — Playlist & File Naming

Use a **zero-padded three-digit day number** so the playlist sorts correctly and viewers can navigate by number:

```
Day 001 — Course Roadmap: What "Java Backend Engineer" Actually Means
Day 042 — HashMap Internals: Buckets, Collisions & Treeification
Day 234 — The N+1 Problem: Detection and Every Fix
Day 480 — Portfolio, Resume, Job Search & The Next 365 Days
```

Keep the prefix identical everywhere — video title, description, thumbnail, source-code folder, and the GitHub tag (`day-042`).

## F.2 — Title Formula

`Day NNN — [Concrete Topic]: [The Payoff or the Gotcha]`

Titles should promise a specific thing, not a category. Compare:

| Weak | Strong |
|---|---|
| "Java Collections Part 3" | "Day 062 — Why Your HashMap Breaks with Mutable Keys" |
| "Spring Transactions" | "Day 333 — 11 Ways @Transactional Silently Does Nothing" |
| "Kafka Consumers" | "Day 375 — Consumer Lag: Why Your Messages Are 40 Minutes Behind" |

Keep under ~70 characters so nothing truncates on mobile.

## F.3 — Thumbnail System

Build a **template** and change only three elements per video, so the playlist looks like a course rather than a pile of uploads:

- **Phase colour** — one colour per phase (26 colours), instantly signalling where a video sits.
- **Big day number** — top-left, huge, high contrast.
- **Three to five words maximum** — the concept, not the title. ("N+1 FIXED", "GC PAUSES", "JWT LEAKS").
- Optional: a small code snippet, a red circle around the bug, or a before/after arrow.
- Face optional but consistent — pick one and stick with it.

## F.4 — Video Structure Template

```
00:00  Hook — the problem, the bug, or the question (max 90 seconds)
01:30  What you'll be able to do by the end
02:30  Theory on the whiteboard/diagram — the mental model
10:00  Live coding — build it, break it, fix it
30:00  Mistakes & gotchas — what goes wrong in production
36:00  Interview questions on this topic
40:00  Homework + what's next tomorrow
```

Adjust proportionally for shorter lessons. **Never skip the gotchas section** — it's the part that separates this from every other tutorial series.

## F.5 — Description Template

```
Day 234 of 480 — The N+1 Problem: Detection and Every Fix

In this lesson we reproduce the single most common ORM performance bug,
measure it with SQL logging, then fix it six different ways and benchmark
each one.

⏱ CHAPTERS
00:00 The 1-second page that should take 20ms
02:10 Reproducing N+1 with SQL logging
06:40 Why it happens: lazy loading + iteration
11:15 Fix 1 — JOIN FETCH
16:30 Fix 2 — @EntityGraph
21:00 Fix 3 — @BatchSize (the low-effort win)
26:20 Fix 4 — DTO projections
31:00 Pagination + fetch join = HHH000104
36:45 Detecting N+1 automatically in tests
41:00 Interview questions
44:30 Homework

💻 SOURCE CODE
https://github.com/<you>/java-backend-365/tree/day-234

📚 PREREQUISITES
Day 233 — Fetch Types, Proxies & LazyInitializationException
Day 230 — @ManyToOne, @OneToMany & Bidirectional Sync

➡️ NEXT
Day 235 — Embeddables, Element Collections & Composite Keys

📋 FULL CURRICULUM
[link to the playlist / curriculum doc]

#java #springboot #hibernate #jpa #backend
```

## F.6 — Practical Production Advice

- **Record in phase batches.** Setting up a Kafka environment once for 16 videos beats doing it 16 times.
- **Pin the source repo to a tag per day** so a viewer on Day 234 gets exactly the code in that video.
- **Show the failure first.** Every gotcha lands harder when the viewer watches it break before they see the fix.
- **Keep the terminal font at 16–18pt minimum** and the IDE at 18–20pt. Most viewers are on phones.
- **Say the version numbers out loud** in the intro ("Boot 3.5, Java 21") — it dates the video honestly and prevents confusion later.
- **Re-record, don't patch.** Pinned-comment corrections get missed; a re-upload with the same title doesn't.
- **Publish the curriculum document** (this file) as a companion link. It's the reason people subscribe rather than watch one video and leave.
- **Batch the Shorts.** Every "gotcha" section is a 45-second Short that funnels back to the full lesson.
- **Community post on Sundays** with the week's review questions — it turns passive viewers into a cohort.

---

# APPENDIX G — Scheduling: Mapping Day N to a Calendar Date

## G.1 — The Two Calendars (recap)

| | Option A — Full | Option B — "365 Days" |
|---|---|---|
| Lessons | 480 | 480 |
| Calendar days | 480 (~16 months at 1/day) | 365 |
| How | One lesson per day | Pair ~115 of the short foundational lessons (mostly Days 6–98, avg 30 min) into single sessions |
| Daily load | ~50 min video + ~75 min practice | ~65 min video + ~100 min practice |
| Best for | Working full-time, learning evenings | Full-time study, bootcamp pace, or the literal 365-day title |

Starting **Option B on 1 January** puts the finale on **31 December**.

## G.2 — Weekly Rhythm

| Day | Activity | Time |
|---|---|---|
| Mon–Fri | Watch the lesson, then do the practice task immediately | ~2h |
| Saturday | Mini-project: combine the week's lessons into something that runs | 3–4h |
| Sunday | Review: re-implement one thing from memory, answer the week's interview questions, update your notes | 1–2h |

**Why Sunday matters:** re-implementing from memory (rather than re-watching) is the single highest-return study habit in this whole plan.

## G.3 — Phase Milestones as Calendar Checkpoints

| Checkpoint | Day | What you should be able to do |
|---|---|---|
| Java is no longer scary | 98 | Write idiomatic modern Java with collections, streams, and generics without looking things up |
| You understand the machine | 170 | Read a GC log, take a heap dump, find a leak, and benchmark honestly |
| You can test properly | 198 | Unit, slice, and container tests with a coverage and mutation gate |
| You speak database | 246 | Design a schema, read a query plan, and use JPA without N+1 surprises |
| You can build an API | 316 | A documented, validated, versioned REST API with clean error handling |
| You can secure it | 356 | JWT, OAuth2, RBAC, and an OWASP-hardened configuration |
| You can distribute it | 418 | Events, sagas, resilience, tracing, and contract tests across services |
| You can ship it | 438 | Container, Kubernetes, CI/CD, monitoring, alerts, and a rollback plan |
| You can design it | 456 | Take a vague requirement to a defensible architecture in 45 minutes |
| You have a portfolio | 472 | Three deployed systems with README architecture docs |
| You're interview-ready | 480 | Answers, stories, a resume, and a plan |

## G.4 — Falling Behind (you will)

- **Never skip forward past a prerequisite.** Phases 1–5, 9–10, and 12–14 are load-bearing; everything after depends on them.
- **Do skip the practice task** before you skip the lesson — half a day beats none.
- **Batch catch-up on weekends** rather than abandoning the sequence.
- **If you miss more than a week**, restart at the beginning of the current phase, not where you stopped. The re-watch is cheap; the gap isn't.
- **Phases 4, 7, 11, 16, and 25 are the most compressible** if you have relevant experience. Phases 5, 6, 10, 12, 17, and 19 are the least.

---

## Curriculum Totals

| Metric | Value |
|---|---|
| **Lessons** | **480** |
| Phases | 26 (Phase 0 – Phase 25) |
| Video runtime | ≈ 392 hours |
| Practice time | ≈ 610 hours |
| **Total commitment** | **≈ 1,000 hours** (~2h 05m/day over 480 days) |
| Milestone projects | 22 (one per phase) |
| Capstone systems | 3 (e-commerce, real-time platform, fintech ledger) |
| Spring & ecosystem dependencies covered | 140+ (Appendix A) |
| Interview-prep lessons | 8 (Days 473–480) |

*End of curriculum.*