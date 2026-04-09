# Algebra 2 Learning Website — Implementation Plan

## Goal

Build a visually stunning, interactive website that helps kids learn **Algebra 2** concepts through structured lessons, interactive examples, and practice problems. The site will be deployed to **GitHub Pages** as a static website.

---

## Complete Algebra 2 Knowledge Points

### Unit 1 — Equations & Inequalities (Review & Foundation)
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 1.1 | Solving Linear Equations | One-variable equations, multi-step solving |
| 1.2 | Solving Linear Inequalities | Graphing on a number line, compound inequalities |
| 1.3 | Absolute Value Equations | Solving \|ax + b\| = c |
| 1.4 | Absolute Value Inequalities | Solving \|ax + b\| < c and \|ax + b\| > c |

---

### Unit 2 — Linear Functions & Systems
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 2.1 | Slope & Equations of Lines | Slope-intercept, point-slope, standard form |
| 2.2 | Parallel & Perpendicular Lines | Relationship between slopes |
| 2.3 | Systems of Linear Equations (2 variables) | Substitution, elimination, graphing |
| 2.4 | Systems of Linear Equations (3 variables) | Solving with elimination / matrices |
| 2.5 | Systems of Linear Inequalities | Graphing solution regions |
| 2.6 | Linear Programming | Optimization within constraint regions |

---

### Unit 3 — Quadratic Functions
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 3.1 | Graphing Quadratics (Standard, Vertex, Intercept Form) | Parabola shape, vertex, axis of symmetry |
| 3.2 | Completing the Square | Converting standard → vertex form |
| 3.3 | The Quadratic Formula | Deriving and applying the formula |
| 3.4 | The Discriminant | Nature & number of roots |
| 3.5 | Factoring Quadratics | GCF, trinomials, difference of squares |
| 3.6 | Quadratic Inequalities | Solving and graphing on a number line |
| 3.7 | Modeling with Quadratics | Projectile motion, area, revenue problems |

---

### Unit 4 — Polynomial Functions
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 4.1 | Polynomial Operations | Add, subtract, multiply polynomials |
| 4.2 | Polynomial Long Division | Dividing polynomials step-by-step |
| 4.3 | Synthetic Division | Shortcut division by (x − c) |
| 4.4 | Remainder & Factor Theorems | Testing possible zeros |
| 4.5 | Rational Root Theorem | Listing possible rational zeros |
| 4.6 | Fundamental Theorem of Algebra | Every polynomial has n complex roots |
| 4.7 | Graphing Polynomials | End behavior, multiplicity, turning points |

---

### Unit 5 — Complex Numbers
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 5.1 | Imaginary Numbers | Defining i, powers of i |
| 5.2 | Operations with Complex Numbers | Add, subtract, multiply, divide |
| 5.3 | Complex Conjugates | Rationalizing denominators |
| 5.4 | Complex Roots of Quadratics | When discriminant < 0 |

---

### Unit 6 — Radical & Rational Exponent Functions
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 6.1 | Rational Exponents | Converting between radicals and exponents |
| 6.2 | Simplifying Radical Expressions | Product & quotient rules for radicals |
| 6.3 | Solving Radical Equations | Isolating radicals, checking extraneous solutions |
| 6.4 | Graphing Square Root & Cube Root Functions | Transformations, domain, range |

---

### Unit 7 — Exponential & Logarithmic Functions
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 7.1 | Exponential Growth & Decay | Modeling populations, radioactive decay |
| 7.2 | The Number e & Continuous Growth | Natural base, compound interest |
| 7.3 | Intro to Logarithms | Log as inverse of exponential |
| 7.4 | Properties of Logarithms | Product, quotient, power rules |
| 7.5 | Solving Exponential Equations | Using logs to solve |
| 7.6 | Solving Logarithmic Equations | Converting and checking extraneous solutions |
| 7.7 | Natural Logarithms (ln) | Base-e logarithms |

---

### Unit 8 — Rational Functions
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 8.1 | Simplifying Rational Expressions | Factor and cancel |
| 8.2 | Multiplying & Dividing Rational Expressions | Factor, flip, simplify |
| 8.3 | Adding & Subtracting Rational Expressions | Finding LCD |
| 8.4 | Solving Rational Equations | Cross-multiply, LCD method, extraneous solutions |
| 8.5 | Graphing Rational Functions | Vertical/horizontal asymptotes, holes, domain |

---

### Unit 9 — Sequences & Series
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 9.1 | Arithmetic Sequences | Common difference, nth-term formula |
| 9.2 | Geometric Sequences | Common ratio, nth-term formula |
| 9.3 | Arithmetic Series | Sum formula for finite arithmetic series |
| 9.4 | Geometric Series | Finite and infinite geometric series |
| 9.5 | Sigma (Σ) Notation | Writing and evaluating sums |

---

### Unit 10 — Trigonometry
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 10.1 | Angles & Radian Measure | Converting degrees ↔ radians |
| 10.2 | The Unit Circle | Coordinates, reference angles |
| 10.3 | Trigonometric Functions (sin, cos, tan) | Definitions, evaluating with unit circle |
| 10.4 | Graphing Sine & Cosine | Amplitude, period, phase shift |
| 10.5 | Graphing Tangent & Other Functions | Period, asymptotes |
| 10.6 | Trigonometric Identities | Pythagorean, reciprocal, quotient identities |
| 10.7 | Solving Trigonometric Equations | Finding angles that satisfy equations |

---

### Unit 11 — Conic Sections & Statistics
| # | Knowledge Point | Description |
|---|----------------|-------------|
| 11.1 | Circles | Standard form, center, radius |
| 11.2 | Ellipses | Major/minor axis, foci, graphing |
| 11.3 | Hyperbolas | Transverse/conjugate axis, asymptotes |
| 11.4 | Parabolas (Conic form) | Focus, directrix, graphing |
| 11.5 | Permutations & Combinations | Counting principles |
| 11.6 | Probability | Basic probability, independent/dependent events |
| 11.7 | Normal Distribution | Bell curve, z-scores, percentiles |

---

## User Review Required

> [!IMPORTANT]
> **Knowledge Point Scope**: The list above covers **11 units with 63 knowledge points**. Please review and let me know if you'd like to add, remove, or reorganize any topics before I start building.

> [!IMPORTANT]
> **Initial Build Scope**: Building all 63 lessons at once would be a very large effort. I recommend a **phased approach** — build the full website framework and navigation first, then populate lessons unit by unit. Should I start with **all units having placeholder content**, or fully complete **Units 1–4 first** and iterate?

> [!IMPORTANT]
> **GitHub Pages Deployment**: The site will be built as a **pure static site** (HTML + CSS + JS, no server needed). This is perfect for GitHub Pages. Should the repo name be `Algebra2` (matching your workspace) or something else like `algebra2-learning`?

---

## Proposed Architecture

### Technology Stack
| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Structure** | HTML5 | Semantic, accessible, GitHub Pages compatible |
| **Styling** | Vanilla CSS | Full design control, custom properties, no build step |
| **Logic** | Vanilla JavaScript (ES Modules) | Interactive lessons, progress tracking, no framework overhead |
| **Math Rendering** | KaTeX (CDN) | Fast, lightweight LaTeX rendering for equations |
| **Graphing** | Desmos API or Chart.js | Interactive function graphing |
| **Storage** | localStorage | Client-side progress tracking (no backend needed) |
| **Deployment** | GitHub Pages | Free, automatic from `main` branch |

### File Structure
```
Algebra2/
├── index.html                    # Landing page (unit overview)
├── index.css                     # Global design system
├── app.js                        # Core app logic, routing, progress
├── README.md                     # Project documentation
│
├── components/
│   ├── header.js                 # Reusable header/nav
│   ├── progress-bar.js           # Progress tracking widget
│   ├── quiz.js                   # Interactive quiz engine
│   ├── graph.js                  # Function graphing component
│   └── math-renderer.js          # KaTeX rendering helper
│
├── units/
│   ├── unit1/
│   │   ├── index.html            # Unit 1 overview page
│   │   ├── 1.1-linear-equations.html
│   │   ├── 1.2-linear-inequalities.html
│   │   ├── 1.3-absolute-value-equations.html
│   │   └── 1.4-absolute-value-inequalities.html
│   ├── unit2/
│   │   ├── index.html
│   │   ├── 2.1-slope-equations.html
│   │   └── ... (one file per knowledge point)
│   └── ... (unit3 through unit11)
│
├── data/
│   ├── problems.json             # Practice problem bank
│   └── formulas.json             # Key formula reference data
│
└── assets/
    ├── fonts/
    ├── icons/
    └── images/
```

---

## Design System

### Visual Identity
- **Color Palette**: Deep navy primary (#0f172a), electric violet accent (#7c3aed), soft cyan highlights (#06b6d4), warm amber for success (#f59e0b), rose for errors (#f43f5e)
- **Dark Mode**: Default dark theme with optional light mode toggle
- **Typography**: Google Fonts — "Inter" for body, "Space Grotesk" for headings
- **Cards**: Glassmorphism cards with subtle blur backdrop
- **Animations**: Smooth page transitions, micro-interactions on buttons/cards, animated progress rings

### Key UI Elements
1. **Landing Page** — Animated hero, 11 unit cards in a grid, overall progress dashboard
2. **Unit Page** — Knowledge point list with completion status, unit progress bar
3. **Lesson Page** — Structured content: Concept → Example → Interactive → Practice
4. **Quiz Component** — Multiple choice & fill-in-the-blank with instant feedback
5. **Formula Sheet** — Searchable reference of all key formulas
6. **Progress Dashboard** — Visual rings showing completion per unit

---

## Feature Design

### Each Lesson Page Includes:
1. **📖 Learn** — Clear explanation with rendered math (KaTeX)
2. **📝 Examples** — Step-by-step worked examples
3. **🎮 Try It** — Interactive widgets (adjust sliders, plot points, manipulate equations)
4. **✅ Practice** — 3–5 auto-graded problems with hints and explanations
5. **⭐ Mastery** — Earn a completion badge, tracked in localStorage

### Progress Tracking (localStorage)
- Per-lesson completion status (not started / in progress / mastered)
- Practice problem scores
- Overall unit & course progress percentages
- "Streak" counter for consecutive days of practice

---

## Phased Build Plan

### Phase 1 — Foundation (Framework + Landing Page)
- [ ] Set up project structure
- [ ] Create global CSS design system (colors, typography, layout, animations)
- [ ] Build responsive landing page with unit grid and hero section
- [ ] Implement client-side routing / navigation
- [ ] Build reusable header, footer, and progress components

### Phase 2 — Lesson Engine + First Units
- [ ] Build lesson page template with Learn / Example / Practice sections
- [ ] Integrate KaTeX for math rendering
- [ ] Build quiz/practice engine with auto-grading
- [ ] Implement localStorage progress tracking
- [ ] Populate **Unit 1** (4 lessons) and **Unit 2** (6 lessons)

### Phase 3 — Interactive Features
- [ ] Add interactive graphing (function plotter)
- [ ] Build formula reference sheet
- [ ] Add animated transitions between pages
- [ ] Populate **Units 3–5** (18 lessons)

### Phase 4 — Full Content
- [ ] Populate **Units 6–8** (16 lessons)
- [ ] Populate **Units 9–11** (19 lessons)
- [ ] Add difficulty levels to practice problems

### Phase 5 — Polish & Deploy
- [ ] Responsive design testing (mobile, tablet, desktop)
- [ ] Accessibility audit (keyboard navigation, ARIA labels, color contrast)
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Create README with screenshots
- [ ] Deploy to GitHub Pages

---

## Verification Plan

### Automated Tests
- Open the site in the browser and verify all navigation links work
- Test quiz engine with correct and incorrect answers
- Verify KaTeX renders all math expressions correctly
- Test localStorage persistence (progress saves across page reloads)

### Manual Verification
- Visual review of every page on desktop and mobile viewports
- Verify GitHub Pages deployment renders correctly
- Test all interactive components (graphing, sliders, quizzes)

---

## Open Questions

> [!IMPORTANT]
> 1. **Content Depth**: Should each lesson be a quick reference (like a cheat sheet) or a full tutorial with detailed explanations? I recommend **tutorial-style** for a learning website.

> [!IMPORTANT]
> 2. **Target Audience Age**: Are these kids in ~9th–10th grade (typical Algebra 2 age), or younger advanced learners? This affects vocabulary and explanation complexity.

> [!IMPORTANT]
> 3. **Phase Priority**: Should I build the **complete framework with placeholder content for all 63 lessons**, or **fully build Units 1–4 first** with complete content, examples, and practice problems?
