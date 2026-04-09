// ============================================================
// ALGEBRA 2 CURRICULUM DATA
// Complete data for all 11 units and 63 knowledge points
// ============================================================

export const UNITS = [
  {
    id: 1,
    title: "Equations & Inequalities",
    description: "Review foundational skills: solve linear equations, inequalities, and absolute value problems.",
    icon: "⚖️",
    lessons: [
      { id: "1.1", title: "Solving Linear Equations", desc: "One-variable equations, multi-step solving", file: "1.1-linear-equations" },
      { id: "1.2", title: "Solving Linear Inequalities", desc: "Graphing on a number line, compound inequalities", file: "1.2-linear-inequalities" },
      { id: "1.3", title: "Absolute Value Equations", desc: "Solving |ax + b| = c", file: "1.3-absolute-value-equations" },
      { id: "1.4", title: "Absolute Value Inequalities", desc: "Solving |ax + b| < c and |ax + b| > c", file: "1.4-absolute-value-inequalities" },
    ]
  },
  {
    id: 2,
    title: "Linear Functions & Systems",
    description: "Master lines, slopes, and solve systems of equations with two or three variables.",
    icon: "📐",
    lessons: [
      { id: "2.1", title: "Slope & Equations of Lines", desc: "Slope-intercept, point-slope, standard form", file: "2.1-slope-equations" },
      { id: "2.2", title: "Parallel & Perpendicular Lines", desc: "Relationship between slopes", file: "2.2-parallel-perpendicular" },
      { id: "2.3", title: "Systems of Equations (2 Variables)", desc: "Substitution, elimination, graphing", file: "2.3-systems-2var" },
      { id: "2.4", title: "Systems of Equations (3 Variables)", desc: "Solving with elimination / matrices", file: "2.4-systems-3var" },
      { id: "2.5", title: "Systems of Inequalities", desc: "Graphing solution regions", file: "2.5-systems-inequalities" },
      { id: "2.6", title: "Linear Programming", desc: "Optimization within constraint regions", file: "2.6-linear-programming" },
    ]
  },
  {
    id: 3,
    title: "Quadratic Functions",
    description: "Explore parabolas: graphing, factoring, the quadratic formula, and real-world modeling.",
    icon: "📈",
    lessons: [
      { id: "3.1", title: "Graphing Quadratics", desc: "Standard, vertex, and intercept forms", file: "3.1-graphing-quadratics" },
      { id: "3.2", title: "Completing the Square", desc: "Converting standard → vertex form", file: "3.2-completing-the-square" },
      { id: "3.3", title: "The Quadratic Formula", desc: "Deriving and applying the formula", file: "3.3-quadratic-formula" },
      { id: "3.4", title: "The Discriminant", desc: "Nature & number of roots", file: "3.4-discriminant" },
      { id: "3.5", title: "Factoring Quadratics", desc: "GCF, trinomials, difference of squares", file: "3.5-factoring-quadratics" },
      { id: "3.6", title: "Quadratic Inequalities", desc: "Solving and graphing on a number line", file: "3.6-quadratic-inequalities" },
      { id: "3.7", title: "Modeling with Quadratics", desc: "Projectile motion, area, revenue problems", file: "3.7-modeling-quadratics" },
    ]
  },
  {
    id: 4,
    title: "Polynomial Functions",
    description: "Dive into higher-degree polynomials: operations, division, theorems, and graphing.",
    icon: "🔢",
    lessons: [
      { id: "4.1", title: "Polynomial Operations", desc: "Add, subtract, multiply polynomials", file: "4.1-polynomial-operations" },
      { id: "4.2", title: "Polynomial Long Division", desc: "Dividing polynomials step-by-step", file: "4.2-long-division" },
      { id: "4.3", title: "Synthetic Division", desc: "Shortcut division by (x − c)", file: "4.3-synthetic-division" },
      { id: "4.4", title: "Remainder & Factor Theorems", desc: "Testing possible zeros", file: "4.4-remainder-factor" },
      { id: "4.5", title: "Rational Root Theorem", desc: "Listing possible rational zeros", file: "4.5-rational-root" },
      { id: "4.6", title: "Fundamental Theorem of Algebra", desc: "Every polynomial has n complex roots", file: "4.6-fundamental-theorem" },
      { id: "4.7", title: "Graphing Polynomials", desc: "End behavior, multiplicity, turning points", file: "4.7-graphing-polynomials" },
    ]
  },
  {
    id: 5,
    title: "Complex Numbers",
    description: "Enter the world of imaginary numbers: operations, conjugates, and complex roots.",
    icon: "💠",
    lessons: [
      { id: "5.1", title: "Imaginary Numbers", desc: "Defining i, powers of i", file: "5.1-imaginary-numbers" },
      { id: "5.2", title: "Operations with Complex Numbers", desc: "Add, subtract, multiply, divide", file: "5.2-complex-operations" },
      { id: "5.3", title: "Complex Conjugates", desc: "Rationalizing denominators", file: "5.3-complex-conjugates" },
      { id: "5.4", title: "Complex Roots of Quadratics", desc: "When discriminant < 0", file: "5.4-complex-roots" },
    ]
  },
  {
    id: 6,
    title: "Radical & Rational Exponents",
    description: "Work with radicals, rational exponents, and root functions.",
    icon: "√",
    lessons: [
      { id: "6.1", title: "Rational Exponents", desc: "Converting between radicals and exponents", file: "6.1-rational-exponents" },
      { id: "6.2", title: "Simplifying Radical Expressions", desc: "Product & quotient rules for radicals", file: "6.2-simplifying-radicals" },
      { id: "6.3", title: "Solving Radical Equations", desc: "Isolating radicals, checking extraneous solutions", file: "6.3-radical-equations" },
      { id: "6.4", title: "Graphing Root Functions", desc: "Transformations, domain, range", file: "6.4-graphing-root-functions" },
    ]
  },
  {
    id: 7,
    title: "Exponential & Logarithmic Functions",
    description: "Understand growth, decay, logarithms, and the natural base e.",
    icon: "📊",
    lessons: [
      { id: "7.1", title: "Exponential Growth & Decay", desc: "Modeling populations, radioactive decay", file: "7.1-exponential-growth" },
      { id: "7.2", title: "The Number e & Continuous Growth", desc: "Natural base, compound interest", file: "7.2-number-e" },
      { id: "7.3", title: "Intro to Logarithms", desc: "Log as inverse of exponential", file: "7.3-intro-logarithms" },
      { id: "7.4", title: "Properties of Logarithms", desc: "Product, quotient, power rules", file: "7.4-log-properties" },
      { id: "7.5", title: "Solving Exponential Equations", desc: "Using logs to solve", file: "7.5-solving-exponential" },
      { id: "7.6", title: "Solving Logarithmic Equations", desc: "Converting and checking extraneous solutions", file: "7.6-solving-logarithmic" },
      { id: "7.7", title: "Natural Logarithms (ln)", desc: "Base-e logarithms", file: "7.7-natural-logarithms" },
    ]
  },
  {
    id: 8,
    title: "Rational Functions",
    description: "Simplify, operate on, solve, and graph rational expressions and functions.",
    icon: "➗",
    lessons: [
      { id: "8.1", title: "Simplifying Rational Expressions", desc: "Factor and cancel", file: "8.1-simplifying-rational" },
      { id: "8.2", title: "Multiplying & Dividing Rational Expressions", desc: "Factor, flip, simplify", file: "8.2-multiply-divide-rational" },
      { id: "8.3", title: "Adding & Subtracting Rational Expressions", desc: "Finding LCD", file: "8.3-add-subtract-rational" },
      { id: "8.4", title: "Solving Rational Equations", desc: "Cross-multiply, LCD method, extraneous solutions", file: "8.4-rational-equations" },
      { id: "8.5", title: "Graphing Rational Functions", desc: "Vertical/horizontal asymptotes, holes, domain", file: "8.5-graphing-rational" },
    ]
  },
  {
    id: 9,
    title: "Sequences & Series",
    description: "Discover patterns in arithmetic and geometric sequences and their sums.",
    icon: "🔗",
    lessons: [
      { id: "9.1", title: "Arithmetic Sequences", desc: "Common difference, nth-term formula", file: "9.1-arithmetic-sequences" },
      { id: "9.2", title: "Geometric Sequences", desc: "Common ratio, nth-term formula", file: "9.2-geometric-sequences" },
      { id: "9.3", title: "Arithmetic Series", desc: "Sum formula for finite arithmetic series", file: "9.3-arithmetic-series" },
      { id: "9.4", title: "Geometric Series", desc: "Finite and infinite geometric series", file: "9.4-geometric-series" },
      { id: "9.5", title: "Sigma (Σ) Notation", desc: "Writing and evaluating sums", file: "9.5-sigma-notation" },
    ]
  },
  {
    id: 10,
    title: "Trigonometry",
    description: "Explore angles, the unit circle, trig functions, identities, and equations.",
    icon: "🌀",
    lessons: [
      { id: "10.1", title: "Angles & Radian Measure", desc: "Converting degrees ↔ radians", file: "10.1-angles-radians" },
      { id: "10.2", title: "The Unit Circle", desc: "Coordinates, reference angles", file: "10.2-unit-circle" },
      { id: "10.3", title: "Trig Functions (sin, cos, tan)", desc: "Definitions, evaluating with unit circle", file: "10.3-trig-functions" },
      { id: "10.4", title: "Graphing Sine & Cosine", desc: "Amplitude, period, phase shift", file: "10.4-graphing-sine-cosine" },
      { id: "10.5", title: "Graphing Tangent & Others", desc: "Period, asymptotes", file: "10.5-graphing-tangent" },
      { id: "10.6", title: "Trigonometric Identities", desc: "Pythagorean, reciprocal, quotient identities", file: "10.6-trig-identities" },
      { id: "10.7", title: "Solving Trig Equations", desc: "Finding angles that satisfy equations", file: "10.7-solving-trig-equations" },
    ]
  },
  {
    id: 11,
    title: "Conic Sections & Statistics",
    description: "Study circles, ellipses, hyperbolas, parabolas, probability, and distributions.",
    icon: "🎯",
    lessons: [
      { id: "11.1", title: "Circles", desc: "Standard form, center, radius", file: "11.1-circles" },
      { id: "11.2", title: "Ellipses", desc: "Major/minor axis, foci, graphing", file: "11.2-ellipses" },
      { id: "11.3", title: "Hyperbolas", desc: "Transverse/conjugate axis, asymptotes", file: "11.3-hyperbolas" },
      { id: "11.4", title: "Parabolas (Conic Form)", desc: "Focus, directrix, graphing", file: "11.4-parabolas" },
      { id: "11.5", title: "Permutations & Combinations", desc: "Counting principles", file: "11.5-permutations-combinations" },
      { id: "11.6", title: "Probability", desc: "Basic probability, independent/dependent events", file: "11.6-probability" },
      { id: "11.7", title: "Normal Distribution", desc: "Bell curve, z-scores, percentiles", file: "11.7-normal-distribution" },
    ]
  }
];

// Total lesson count
export const TOTAL_LESSONS = UNITS.reduce((sum, u) => sum + u.lessons.length, 0);
