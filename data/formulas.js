// data/formulas.js — Key Algebra 2 Formula Reference

export const FORMULAS = [
  // Unit 1
  { unit: 'Unit 1', name: 'Linear Equation Solution', formula: 'ax + b = c \\implies x = \\dfrac{c - b}{a}', notes: 'Isolate x by applying inverse operations.', tags: ['linear', 'equation', 'solve'] },
  { unit: 'Unit 1', name: 'Absolute Value Definition', formula: '|x| = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}', notes: 'Distance from zero on the number line.', tags: ['absolute value'] },
  { unit: 'Unit 1', name: 'Absolute Value Equation', formula: '|ax+b| = c \\implies ax+b = c \\text{ or } ax+b = -c', notes: 'Split into two cases (c ≥ 0).', tags: ['absolute value', 'equation'] },

  // Unit 2
  { unit: 'Unit 2', name: 'Slope Formula', formula: 'm = \\dfrac{y_2 - y_1}{x_2 - x_1}', notes: 'Rise over run between two points.', tags: ['slope', 'linear', 'line'] },
  { unit: 'Unit 2', name: 'Slope-Intercept Form', formula: 'y = mx + b', notes: 'm = slope, b = y-intercept.', tags: ['slope', 'line', 'equation'] },
  { unit: 'Unit 2', name: 'Point-Slope Form', formula: 'y - y_1 = m(x - x_1)', notes: 'Use when you know a point and the slope.', tags: ['slope', 'line'] },
  { unit: 'Unit 2', name: 'Parallel & Perpendicular Slopes', formula: 'm_{\\parallel} = m_1 \\qquad m_{\\perp} = -\\dfrac{1}{m_1}', notes: 'Parallel lines have equal slopes; perpendicular lines have negative reciprocal slopes.', tags: ['parallel', 'perpendicular', 'slope'] },

  // Unit 3
  { unit: 'Unit 3', name: 'Quadratic Formula', formula: 'x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', notes: 'Solves ax² + bx + c = 0 for any values of a, b, c.', tags: ['quadratic', 'formula', 'roots'] },
  { unit: 'Unit 3', name: 'Discriminant', formula: '\\Delta = b^2 - 4ac', notes: 'Δ > 0: two real roots; Δ = 0: one real root; Δ < 0: two complex roots.', tags: ['discriminant', 'quadratic'] },
  { unit: 'Unit 3', name: 'Vertex Form', formula: 'y = a(x - h)^2 + k', notes: 'Vertex is at (h, k). Opens up if a > 0, down if a < 0.', tags: ['vertex', 'quadratic', 'parabola'] },
  { unit: 'Unit 3', name: 'Vertex x-coordinate', formula: 'x_v = -\\dfrac{b}{2a}', notes: 'Axis of symmetry of the parabola y = ax² + bx + c.', tags: ['vertex', 'quadratic'] },
  { unit: 'Unit 3', name: 'Completing the Square', formula: 'x^2 + bx = \\left(x + \\dfrac{b}{2}\\right)^2 - \\dfrac{b^2}{4}', notes: 'Add (b/2)² to both sides.', tags: ['completing the square', 'quadratic'] },

  // Unit 4
  { unit: 'Unit 4', name: 'Remainder Theorem', formula: 'p(c) = \\text{remainder when } p(x) \\div (x-c)', notes: 'Evaluate the polynomial at x = c to find the remainder.', tags: ['remainder', 'polynomial', 'theorem'] },
  { unit: 'Unit 4', name: 'Factor Theorem', formula: '(x - c) \\mid p(x) \\iff p(c) = 0', notes: '(x − c) is a factor if and only if c is a zero.', tags: ['factor', 'polynomial', 'theorem'] },
  { unit: 'Unit 4', name: 'End Behavior (Even Degree)', formula: 'a_n > 0: \\text{both ends up} \\quad a_n < 0: \\text{both ends down}', notes: 'For polynomials with even degree.', tags: ['polynomial', 'end behavior'] },

  // Unit 5
  { unit: 'Unit 5', name: 'Imaginary Unit', formula: 'i = \\sqrt{-1}, \\quad i^2 = -1', notes: 'Powers cycle: i, -1, -i, 1, i, …', tags: ['complex', 'imaginary'] },
  { unit: 'Unit 5', name: 'Complex Number Operations', formula: '(a+bi)+(c+di) = (a+c)+(b+d)i', notes: 'Add real parts and imaginary parts separately.', tags: ['complex', 'add'] },
  { unit: 'Unit 5', name: 'Complex Conjugate Product', formula: '(a+bi)(a-bi) = a^2 + b^2', notes: 'Always a real number — use to rationalize denominators.', tags: ['complex', 'conjugate'] },

  // Unit 6
  { unit: 'Unit 6', name: 'Rational Exponent', formula: 'a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}', notes: 'The denominator is the root index; numerator is the power.', tags: ['exponent', 'radical', 'rational'] },
  { unit: 'Unit 6', name: 'Product Rule for Radicals', formula: '\\sqrt[n]{ab} = \\sqrt[n]{a}\\cdot\\sqrt[n]{b}', notes: 'Applies when a,b ≥ 0.', tags: ['radical', 'product'] },

  // Unit 7
  { unit: 'Unit 7', name: 'Exponential Growth / Decay', formula: 'y = a\\cdot b^t, \\quad b = 1+r \\text{ or } b = e^k', notes: 'a = initial amount, r = growth rate, t = time.', tags: ['exponential', 'growth', 'decay'] },
  { unit: 'Unit 7', name: 'Continuous Growth', formula: 'y = ae^{kt}', notes: 'k > 0: growth; k < 0: decay.', tags: ['exponential', 'e', 'continuous'] },
  { unit: 'Unit 7', name: 'Logarithm Definition', formula: '\\log_b x = y \\iff b^y = x', notes: 'b > 0, b ≠ 1, x > 0.', tags: ['logarithm', 'log'] },
  { unit: 'Unit 7', name: 'Log Product Rule', formula: '\\log_b(mn) = \\log_b m + \\log_b n', notes: null, tags: ['logarithm', 'properties'] },
  { unit: 'Unit 7', name: 'Log Quotient Rule', formula: '\\log_b\\!\\left(\\dfrac{m}{n}\\right) = \\log_b m - \\log_b n', notes: null, tags: ['logarithm', 'properties'] },
  { unit: 'Unit 7', name: 'Log Power Rule', formula: '\\log_b(m^p) = p\\log_b m', notes: null, tags: ['logarithm', 'properties'] },
  { unit: 'Unit 7', name: 'Change of Base', formula: '\\log_b x = \\dfrac{\\ln x}{\\ln b} = \\dfrac{\\log x}{\\log b}', notes: 'Use to evaluate logs with any base on a calculator.', tags: ['logarithm', 'change of base'] },

  // Unit 8
  { unit: 'Unit 8', name: 'Rational Function Domain', formula: '\\text{Exclude } x \\text{ where denominator} = 0', notes: 'Vertical asymptotes occur at excluded values (if not canceled).', tags: ['rational', 'domain', 'asymptote'] },

  // Unit 9
  { unit: 'Unit 9', name: 'Arithmetic Sequence nth Term', formula: 'a_n = a_1 + (n-1)d', notes: 'a₁ = first term, d = common difference.', tags: ['arithmetic', 'sequence'] },
  { unit: 'Unit 9', name: 'Arithmetic Series Sum', formula: 'S_n = \\dfrac{n}{2}(a_1 + a_n) = \\dfrac{n}{2}[2a_1 + (n-1)d]', notes: null, tags: ['arithmetic', 'series', 'sum'] },
  { unit: 'Unit 9', name: 'Geometric Sequence nth Term', formula: 'a_n = a_1 \\cdot r^{n-1}', notes: 'r = common ratio.', tags: ['geometric', 'sequence'] },
  { unit: 'Unit 9', name: 'Geometric Series Sum (Finite)', formula: 'S_n = \\dfrac{a_1(1 - r^n)}{1 - r}, \\quad r \\ne 1', notes: null, tags: ['geometric', 'series', 'sum'] },
  { unit: 'Unit 9', name: 'Infinite Geometric Series', formula: 'S = \\dfrac{a_1}{1 - r}, \\quad |r| < 1', notes: 'Converges only when |r| < 1.', tags: ['geometric', 'infinite', 'series'] },

  // Unit 10
  { unit: 'Unit 10', name: 'Radian–Degree Conversion', formula: '\\text{radians} = \\text{degrees} \\times \\dfrac{\\pi}{180}', notes: null, tags: ['radian', 'degree', 'convert'] },
  { unit: 'Unit 10', name: 'Unit Circle Definitions', formula: '\\sin\\theta = y, \\quad \\cos\\theta = x, \\quad \\tan\\theta = \\dfrac{y}{x}', notes: 'Point (x, y) on the unit circle.', tags: ['unit circle', 'trig', 'sin', 'cos', 'tan'] },
  { unit: 'Unit 10', name: 'Pythagorean Identity', formula: '\\sin^2\\theta + \\cos^2\\theta = 1', notes: 'Most fundamental trig identity.', tags: ['identity', 'pythagorean', 'trig'] },
  { unit: 'Unit 10', name: 'Sine Graph Parameters', formula: 'y = A\\sin(Bx - C) + D', notes: 'A = amplitude, period = 2π/B, phase shift = C/B, D = vertical shift.', tags: ['sine', 'graph', 'amplitude', 'period'] },

  // Unit 11
  { unit: 'Unit 11', name: 'Circle (Standard Form)', formula: '(x-h)^2 + (y-k)^2 = r^2', notes: 'Center (h, k), radius r.', tags: ['circle', 'conic'] },
  { unit: 'Unit 11', name: 'Ellipse (Standard Form)', formula: '\\dfrac{(x-h)^2}{a^2} + \\dfrac{(y-k)^2}{b^2} = 1', notes: 'a² under x: horizontal major axis; a² under y: vertical.', tags: ['ellipse', 'conic'] },
  { unit: 'Unit 11', name: 'Hyperbola (Standard Form)', formula: '\\dfrac{(x-h)^2}{a^2} - \\dfrac{(y-k)^2}{b^2} = 1', notes: 'Opens left/right; swap terms for up/down opening.', tags: ['hyperbola', 'conic'] },
  { unit: 'Unit 11', name: 'Combinations', formula: 'C(n,r) = \\binom{n}{r} = \\dfrac{n!}{r!(n-r)!}', notes: 'Choose r items from n without regard to order.', tags: ['combination', 'counting', 'probability'] },
  { unit: 'Unit 11', name: 'Permutations', formula: 'P(n,r) = \\dfrac{n!}{(n-r)!}', notes: 'Arrange r items from n in order.', tags: ['permutation', 'counting'] },
];
