// data/lessons/unit4.js — Unit 4: Polynomial Functions

export const lessons = [
  // ── 4.1 ──────────────────────────────────────────────────────────────────
  {
    id: '4.1',
    learn: `
      <div class="concept-card">
        <h2>📖 Polynomial Operations</h2>
        <p>A <strong>polynomial</strong> is a sum of terms of the form $ax^n$ where $n$ is a non-negative integer. Operations on polynomials follow the same rules as arithmetic, but with variable terms.</p>

        <h3>Adding & Subtracting</h3>
        <p>Combine <strong>like terms</strong> — terms with the same variable and exponent.</p>

        <h3>Multiplying Polynomials</h3>
        <p>Multiply each term in one polynomial by every term in the other (the distributive property). For binomials, use <strong>FOIL</strong>: First, Outer, Inner, Last.</p>

        <div class="formula-box"><div class="formula-label">Special Products</div>
          $$(a+b)^2 = a^2 + 2ab + b^2$$
          $$(a-b)^2 = a^2 - 2ab + b^2$$
          $$(a+b)(a-b) = a^2 - b^2$$
        </div>

        <div class="tip-box"><span class="tip-icon">💡</span><p>The <strong>degree</strong> of a polynomial is its highest exponent. When you multiply polynomials of degrees $m$ and $n$, the result has degree $m + n$.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Add: $(3x^3 - 2x + 5) + (x^3 + 4x^2 - x - 2)$', steps: ['Combine like terms: $(3+1)x^3 + 4x^2 + (-2-1)x + (5-2)$', '= $4x^3 + 4x^2 - 3x + 3$'], answer: '$4x^3 + 4x^2 - 3x + 3$' },
      { problem: 'Multiply: $(2x + 3)(3x^2 - x + 4)$', steps: ['Distribute: $2x(3x^2 - x + 4) + 3(3x^2 - x + 4)$', '= $6x^3 - 2x^2 + 8x + 9x^2 - 3x + 12$', '= $6x^3 + 7x^2 + 5x + 12$'], answer: '$6x^3 + 7x^2 + 5x + 12$' },
    ],
    practice: [
      { type: 'mc', question: 'Simplify: $(2x^2 + 3x - 1) - (x^2 - x + 4)$', choices: ['$x^2 + 4x - 5$', '$x^2 + 2x - 5$', '$3x^2 + 2x + 3$', '$x^2 + 4x + 3$'], correct: 0, explanation: '$2x^2-x^2 + 3x-(-x) + (-1-4) = x^2 + 4x - 5$.' },
      { type: 'mc', question: 'What is $(x+5)^2$?', choices: ['$x^2+25$', '$x^2+5x+25$', '$x^2+10x+25$', '$x^2+25x+25$'], correct: 2, explanation: '$(a+b)^2=a^2+2ab+b^2$: $x^2+2(x)(5)+25 = x^2+10x+25$.' },
      { type: 'fill', question: 'Multiply: $(x+4)(x-4)$. What is the result? (Enter as $x^2 - n$, give $n$)', answer: '16', explanation: '$(a+b)(a-b)=a^2-b^2$: $(x+4)(x-4)=x^2-16$. $n=16$.' },
      { type: 'mc', question: 'What is the degree of the product $(x^3+1)(x^2-x)$?', choices: ['3', '4', '5', '6'], correct: 2, explanation: 'Degree $3 \\times$ degree $2$ → product degree $3+2=5$.' },
      { type: 'mc', question: 'Which identity gives $4x^2 - 12x + 9$?', choices: ['$(2x-3)^2$', '$(2x+3)^2$', '$(4x-3)^2$', '$(2x-3)(2x+3)$'], correct: 0, explanation: '$(2x-3)^2 = 4x^2 - 12x + 9$.' },
    ],
  },

  // ── 4.2 ──────────────────────────────────────────────────────────────────
  {
    id: '4.2',
    learn: `
      <div class="concept-card">
        <h2>📖 Polynomial Long Division</h2>
        <p>Polynomial long division works just like numerical long division. It divides a polynomial by another polynomial of lower (or equal) degree.</p>

        <div class="formula-box"><div class="formula-label">Division Algorithm</div>$$\\frac{p(x)}{d(x)} = q(x) + \\frac{r(x)}{d(x)}$$</div>
        <p>where $q(x)$ is the quotient and $r(x)$ is the remainder, with $\\deg(r) < \\deg(d)$.</p>

        <h3>Steps</h3>
        <ol>
          <li>Arrange both polynomials in descending degree; use $0$ for missing terms</li>
          <li>Divide the leading term of the dividend by the leading term of the divisor</li>
          <li>Multiply the divisor by that result; subtract from the dividend</li>
          <li>Bring down the next term; repeat until the remainder has lower degree than the divisor</li>
        </ol>
      </div>
    `,
    examples: [
      { problem: 'Divide: $(x^3 - 2x^2 + 5x - 6) \\div (x - 1)$', steps: ['$x^3 \\div x = x^2$. Multiply: $x^2(x-1)=x^3-x^2$. Subtract: $(-2x^2)-(-x^2) = -x^2$. Bring down: $-x^2+5x$', '$-x^2 \\div x = -x$. Multiply: $-x(x-1) = -x^2+x$. Subtract: $5x - x = 4x$. Bring down: $4x-6$', '$4x \\div x = 4$. Multiply: $4(x-1) = 4x-4$. Subtract: $-6-(-4) = -2$. Remainder: $-2$'], answer: '$x^2 - x + 4 + \\dfrac{-2}{x-1}$' },
    ],
    practice: [
      { type: 'mc', question: 'When dividing $x^2+3x+2$ by $x+1$, the quotient is:', choices: ['$x+2$', '$x+3$', '$x-2$', '$x+1$'], correct: 0, explanation: '$(x^2+3x+2)\\div(x+1) = x+2$ with remainder 0.' },
      { type: 'fill', question: 'Divide $x^3 + x^2 - 2$ by $x - 1$. What is the remainder?', answer: '0', explanation: '$1^3+1^2-2 = 0$. By the Remainder Theorem, remainder is $p(1) = 0$.' },
      { type: 'mc', question: 'When dividing polynomials, the remainder must have:', choices: ['Degree equal to the divisor', 'Degree less than the divisor', 'Degree greater than the divisor', 'Degree equal to the dividend'], correct: 1, explanation: 'The degree of the remainder is always less than the degree of the divisor.' },
      { type: 'mc', question: '$(2x^3 - 6x^2 + 4x) \\div 2x = ?$', choices: ['$x^2 - 3x + 2$', '$x^2 - 6x + 4$', '$x^3 - 3x^2 + 2x$', '$2x^2 - 6x + 4$'], correct: 0, explanation: 'Divide each term: $x^2 - 3x + 2$.' },
      { type: 'mc', question: 'If the remainder when $p(x)$ is divided by $(x-3)$ is $0$, then:', choices: ['$p(0) = 3$', '$(x-3)$ is a factor of $p(x)$', '$p(3) = -1$', '$p(x)$ has no other factors'], correct: 1, explanation: 'Remainder 0 means $(x-3)$ divides evenly into $p(x)$, so it is a factor.' },
    ],
  },

  // ── 4.3 ──────────────────────────────────────────────────────────────────
  {
    id: '4.3',
    learn: `
      <div class="concept-card">
        <h2>📖 Synthetic Division</h2>
        <p><strong>Synthetic division</strong> is a shortcut for dividing a polynomial by a linear factor of the form $(x - c)$. It's much faster than long division.</p>

        <h3>When to Use</h3>
        <p>Only works when the divisor is linear: $x - c$ (or $x + c$, use $c = -$ the constant).</p>

        <h3>Setup</h3>
        <ol>
          <li>Write $c$ to the left (the value that makes the divisor zero)</li>
          <li>Write the coefficients of the dividend in a row (use 0 for missing terms)</li>
          <li>Bring down the first coefficient</li>
          <li>Multiply by $c$, write under next coefficient, add</li>
          <li>Repeat until done. Last value is remainder; others are quotient coefficients</li>
        </ol>

        <div class="tip-box"><span class="tip-icon">💡</span><p>If dividing by $(x - 3)$, use $c = 3$. If dividing by $(x + 2)$, use $c = -2$.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Use synthetic division: $(x^3 - 4x^2 + 2x + 5) \\div (x - 3)$', steps: ['$c = 3$. Coefficients: $1, -4, 2, 5$', 'Bring down 1. Multiply: $1 \\times 3 = 3$. Add to $-4$: $-1$', 'Multiply: $-1 \\times 3 = -3$. Add to $2$: $-1$', 'Multiply: $-1 \\times 3 = -3$. Add to $5$: $2$ (remainder)', 'Quotient: $x^2 - x - 1$, Remainder: $2$'], answer: '$x^2 - x - 1 + \\dfrac{2}{x-3}$' },
    ],
    practice: [
      { type: 'mc', question: 'To divide by $(x + 5)$ using synthetic division, the value $c$ is:', choices: ['$5$', '$-5$', '$-1$', '$0$'], correct: 1, explanation: '$x+5 = x-(-5)$, so $c = -5$.' },
      { type: 'fill', question: 'Synthetic division of $x^2 - x - 6$ by $x - 3$ gives quotient $x + 2$ and remainder ___. Enter the remainder.', answer: '0', explanation: '$3^2 - 3 - 6 = 0$. Remainder is 0.' },
      { type: 'mc', question: 'The coefficients of $x^4 + 0x^3 - 2x^2 + x - 5$ in synthetic division are:', choices: ['$1, -2, 1, -5$', '$1, 0, -2, 1, -5$', '$1, 2, 1, 5$', '$4, 0, 2, 1$'], correct: 1, explanation: 'Include a 0 for the missing $x^3$ term: $1, 0, -2, 1, -5$.' },
      { type: 'mc', question: 'Synthetic division gives the last number (after adding) as the:', choices: ['Leading coefficient', 'Quotient', 'Remainder', 'Dividend'], correct: 2, explanation: 'The last value computed is the remainder.' },
      { type: 'mc', question: 'The result of synthetic division gives quotient coefficients. If the dividend is degree 4 and divisor is degree 1, the quotient has degree:', choices: ['5', '4', '3', '2'], correct: 2, explanation: 'Degree of quotient = degree of dividend minus degree of divisor: $4 - 1 = 3$.' },
    ],
  },

  // ── 4.4 ──────────────────────────────────────────────────────────────────
  {
    id: '4.4',
    learn: `
      <div class="concept-card">
        <h2>📖 Remainder & Factor Theorems</h2>

        <div class="formula-box"><div class="formula-label">Remainder Theorem</div>$$\\text{When } p(x) \\text{ is divided by } (x-c), \\text{ the remainder} = p(c)$$</div>
        <p>This means you can find the remainder of any polynomial division simply by evaluating $p(c)$ — no long or synthetic division needed!</p>

        <div class="formula-box"><div class="formula-label">Factor Theorem</div>$$(x-c) \\text{ is a factor of } p(x) \\iff p(c) = 0$$</div>
        <p>$c$ is a zero (root) of $p(x)$ if and only if $(x - c)$ is a factor.</p>

        <h3>Using Together</h3>
        <p>To check if $(x - c)$ is a factor: just compute $p(c)$. If it equals 0, it's a factor; if not, $p(c)$ is the remainder.</p>

        <div class="tip-box"><span class="tip-icon">💡</span><p>These theorems connect division, factoring, and zeros of polynomials — three seemingly different things!</p></div>
      </div>
    `,
    examples: [
      { problem: 'Find the remainder when $p(x) = x^3 - 3x + 2$ is divided by $(x - 2)$.', steps: ['By the Remainder Theorem: remainder $= p(2)$', '$p(2) = 8 - 6 + 2 = 4$'], answer: 'Remainder $= 4$' },
      { problem: 'Is $(x + 3)$ a factor of $p(x) = x^3 + 2x^2 - 5x - 6$?', steps: ['$(x+3) = (x-(-3))$, so check $p(-3)$', '$p(-3) = (-27) + 2(9) - 5(-3) - 6 = -27 + 18 + 15 - 6 = 0$', 'Since $p(-3) = 0$, yes, $(x+3)$ is a factor.'], answer: 'Yes, $(x+3)$ is a factor.' },
    ],
    practice: [
      { type: 'fill', question: 'Find the remainder when $p(x) = x^3 - 4x + 1$ is divided by $(x-2)$: $p(2) = ?$', answer: '1', explanation: '$p(2) = 8 - 8 + 1 = 1$.' },
      { type: 'mc', question: 'Is $(x-1)$ a factor of $x^3 - x^2 + x - 1$?', choices: ['Yes, because $p(1) = 0$', 'No, because $p(1) \\neq 0$', 'Yes, because the degree is odd', 'Cannot be determined'], correct: 0, explanation: '$p(1) = 1-1+1-1 = 0$. Factor Theorem: $(x-1)$ is a factor.' },
      { type: 'mc', question: 'The Remainder Theorem says the remainder of $p(x) \\div (x-c)$ is:', choices: ['$p(0)$', '$c$', '$p(c)$', 'The quotient'], correct: 2, explanation: 'Evaluate the polynomial at $x = c$.' },
      { type: 'mc', question: 'If $p(-2) = 7$, what is the remainder of $p(x) \\div (x+2)$?', choices: ['$-7$', '$7$', '$2$', '$-2$'], correct: 1, explanation: 'By Remainder Theorem: remainder $= p(-2) = 7$.' },
      { type: 'mc', question: 'If $(x-5)$ is a factor of $p(x)$, then:', choices: ['$p(0) = 5$', '$p(5) = 1$', '$p(5) = 0$', '$p(-5) = 0$'], correct: 2, explanation: 'Factor Theorem: $(x-5)$ is a factor $\\iff p(5) = 0$.' },
    ],
  },

  // ── 4.5 ──────────────────────────────────────────────────────────────────
  {
    id: '4.5',
    learn: `
      <div class="concept-card">
        <h2>📖 Rational Root Theorem</h2>
        <p>The <strong>Rational Root Theorem</strong> gives us a list of <em>possible</em> rational zeros of a polynomial with integer coefficients — narrowing down our search.</p>

        <div class="formula-box"><div class="formula-label">Rational Root Theorem</div>$$\\text{Possible rational zeros} = \\pm\\frac{p}{q}$$</div>
        <p>where $p$ = factor of the constant term, $q$ = factor of the leading coefficient.</p>

        <h3>Strategy</h3>
        <ol>
          <li>List all factors of the constant term ($p$)</li>
          <li>List all factors of the leading coefficient ($q$)</li>
          <li>Form all fractions $\\pm p/q$</li>
          <li>Test each using synthetic division or direct evaluation until you find a zero</li>
          <li>Factor out the found zero and repeat on the quotient</li>
        </ol>

        <div class="warning-box"><span class="warning-icon">⚠️</span><p>This theorem only lists <em>possible</em> rational zeros — not all of them will actually be zeros. You must test each one.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Find all rational roots of $p(x) = x^3 - 4x^2 + x + 6$.', steps: ['Possible roots: $\\pm\\{1, 2, 3, 6\\}$', 'Test $x=1$: $1-4+1+6=4 \\neq 0$. Test $x=2$: $8-16+2+6=0$ ✓', 'Factor out $(x-2)$ by synthetic division: $p(x) = (x-2)(x^2-2x-3) = (x-2)(x-3)(x+1)$'], answer: 'Roots: $x = 2, 3, -1$' },
    ],
    practice: [
      { type: 'mc', question: 'For $p(x) = 2x^3 - x + 6$, the possible rational roots include:', choices: ['$\\pm 1, \\pm 2, \\pm 3, \\pm 6$', '$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm\\frac{1}{2}, \\pm\\frac{3}{2}$', '$\\pm 1, \\pm 6$', '$\\pm 2, \\pm 6$'], correct: 1, explanation: '$p$-values: $1,2,3,6$; $q$-values: $1,2$. All $\\pm p/q$ combinations.' },
      { type: 'mc', question: 'Is $x = -1$ a rational root of $x^3 + 2x^2 - x - 2$?', choices: ['Yes', 'No'], correct: 0, explanation: '$p(-1) = -1 + 2 + 1 - 2 = 0$. Yes, it is a root.' },
      { type: 'fill', question: 'For $p(x) = x^3 - 7x + 6$, test $x=1$: $p(1) = 1 - 7 + 6 = ?$', answer: '0', explanation: '$1 - 7 + 6 = 0$. So $x = 1$ is a root.' },
      { type: 'mc', question: 'The Rational Root Theorem applies only when:', choices: ['The leading coefficient is 1', 'All coefficients are integers', 'The degree is odd', 'The polynomial is factorable'], correct: 1, explanation: 'The theorem requires integer coefficients (leading and constant term).' },
      { type: 'mc', question: 'If $p(x) = 3x^2 + 5x - 2$, the possible rational roots are $\\pm\\{1, 2, \\frac{1}{3}, \\frac{2}{3}\\}$. Testing shows $x = \\frac{1}{3}$ works. What else must also be a root?', choices: ['$x = 3$', '$x = -2$', '$x = -\\frac{1}{3}$', '$x = 2$'], correct: 1, explanation: 'Factor out $(3x-1)$: $3x^2+5x-2=(3x-1)(x+2)$. Other root: $x=-2$.' },
    ],
  },

  // ── 4.6 ──────────────────────────────────────────────────────────────────
  {
    id: '4.6',
    learn: `
      <div class="concept-card">
        <h2>📖 Fundamental Theorem of Algebra</h2>
        <div class="formula-box"><div class="formula-label">Fundamental Theorem of Algebra</div>$$\\text{Every polynomial of degree } n \\geq 1 \\text{ has exactly } n \\text{ complex roots (counting multiplicity).}$$</div>
        <p>This guarantees every polynomial "fully factors" — over the complex numbers, it splits into $n$ linear factors.</p>

        <h3>Corollaries</h3>
        <ul>
          <li>A degree-$n$ polynomial has <strong>at most $n$ real zeros</strong></li>
          <li><strong>Complex roots come in conjugate pairs:</strong> if $a+bi$ is a root, so is $a-bi$ (when coefficients are real)</li>
          <li>A polynomial of odd degree always has at least one real root</li>
        </ul>

        <h3>Multiplicity</h3>
        <p>If $(x-c)^k$ is a factor, then $c$ is a root of <strong>multiplicity $k$</strong>. The graph <em>touches</em> (but doesn't cross) the x-axis at a root with even multiplicity, and <em>crosses</em> at a root with odd multiplicity.</p>

        <div class="tip-box"><span class="tip-icon">💡</span><p>Total roots (counting multiplicity) always equals the degree. A cubic always has exactly 3 roots — they might just be complex or repeated.</p></div>
      </div>
    `,
    examples: [
      { problem: 'A degree-4 polynomial has roots $2$, $2$ (multiplicity 2), and $1+i$. Find all roots.', steps: ['Degree 4 → exactly 4 roots', 'Given: $x=2$ (mult. 2), $x = 1+i$', 'Complex roots come in pairs: $x = 1-i$ is also a root', 'All 4 roots: $2, 2, 1+i, 1-i$'], answer: '$x = 2$ (double), $x = 1+i$, $x = 1-i$' },
    ],
    practice: [
      { type: 'fill', question: 'A degree-5 polynomial has how many roots (counting multiplicity)?', answer: '5', explanation: 'The Fundamental Theorem guarantees exactly 5 roots.' },
      { type: 'mc', question: 'If $3 - 2i$ is a root of a polynomial with real coefficients, then another root must be:', choices: ['$3 + 2i$', '$-3 + 2i$', '$2 - 3i$', '$-3 - 2i$'], correct: 0, explanation: 'Complex roots come in conjugate pairs: $3 - 2i$ paired with $3 + 2i$.' },
      { type: 'mc', question: 'A polynomial of odd degree (with real coefficients) always has:', choices: ['No real roots', 'At least one real root', 'Exactly one real root', 'All complex roots'], correct: 1, explanation: 'Complex roots pair up, so an odd-degree polynomial must have at least one real root.' },
      { type: 'mc', question: 'If $(x-4)^3$ is a factor, $x=4$ has multiplicity:', choices: ['1', '2', '3', '4'], correct: 2, explanation: 'The exponent of the factor is the multiplicity: $(x-4)^3 \\to$ multiplicity 3.' },
      { type: 'mc', question: 'At a root with even multiplicity, the graph:', choices: ['Crosses the x-axis', 'Touches but does not cross the x-axis', 'Has a vertical asymptote', 'Goes to infinity'], correct: 1, explanation: 'Even multiplicity → the graph bounces off the x-axis without crossing.' },
    ],
  },

  // ── 4.7 ──────────────────────────────────────────────────────────────────
  {
    id: '4.7',
    learn: `
      <div class="concept-card">
        <h2>📖 Graphing Polynomial Functions</h2>
        <p>The graph of a polynomial is a smooth, continuous curve. You can sketch it using a few key features.</p>

        <h3>End Behavior</h3>
        <p>Determined by the <strong>leading term</strong> $a_n x^n$:</p>
        <ul>
          <li>$n$ even, $a_n > 0$: both ends go up ↑↑</li>
          <li>$n$ even, $a_n < 0$: both ends go down ↓↓</li>
          <li>$n$ odd, $a_n > 0$: left end down, right end up ↓↑</li>
          <li>$n$ odd, $a_n < 0$: left end up, right end down ↑↓</li>
        </ul>

        <h3>Zeros & Multiplicity (crossing vs. touching)</h3>
        <ul>
          <li><strong>Odd multiplicity</strong>: graph crosses x-axis at the zero</li>
          <li><strong>Even multiplicity</strong>: graph touches but bounces back at the zero</li>
        </ul>

        <h3>Turning Points</h3>
        <p>A degree-$n$ polynomial has <strong>at most $n-1$</strong> turning points.</p>

        <div class="tip-box"><span class="tip-icon">💡</span><p>Sketch procedure: end behavior → plot zeros with their behavior → connect smoothly.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Describe end behavior of $f(x) = -2x^4 + 3x^2 - 1$.', steps: ['Leading term: $-2x^4$', '$n = 4$ (even), $a_n = -2 < 0$', 'Both ends go DOWN (↓↓)'], answer: 'As $x \\to \\pm\\infty$, $f(x) \\to -\\infty$' },
      { problem: 'Sketch key features of $f(x) = x(x-2)^2(x+1)$.', steps: ['Zeros: $x=0$ (mult. 1, crosses), $x=2$ (mult. 2, touches), $x=-1$ (mult. 1, crosses)', 'Leading term: $x \\cdot x^2 \\cdot x = x^4$, positive even → both ends up', 'Degree 4 → at most 3 turning points'], answer: 'Crosses at $x=0$ and $x=-1$, touches at $x=2$; both ends up.' },
    ],
    practice: [
      { type: 'mc', question: 'End behavior of $f(x) = 3x^5 - x^2 + 7$:', choices: ['Both ends up', 'Both ends down', 'Left down, right up', 'Left up, right down'], correct: 2, explanation: 'Odd degree, positive leading coefficient → left ↓, right ↑.' },
      { type: 'mc', question: 'At $x = -3$ with multiplicity 2, the graph:', choices: ['Crosses the x-axis', 'Touches but bounces', 'Has a hole', 'Has an asymptote'], correct: 1, explanation: 'Even multiplicity → graph touches but does not cross.' },
      { type: 'fill', question: 'The maximum number of turning points for a degree-6 polynomial is:', answer: '5', explanation: 'At most $n - 1 = 6 - 1 = 5$ turning points.' },
      { type: 'mc', question: 'Which polynomial has both ends going up?', choices: ['$-x^3 + 2x$', '$x^3 - x$', '$x^4 - 3x^2$', '$-x^4 + x$'], correct: 2, explanation: '$x^4$: even degree, positive leading coefficient → both ends up.' },
      { type: 'mc', question: 'The number of real zeros of $f(x) = x^3 - x^2 + x - 1$, knowing one zero is $x=1$:', choices: ['0', '1', '2', '3'], correct: 1, explanation: 'After factoring out $(x-1)$: $x^2(x-1)+-(x-1)=(x-1)(x^2+1)$. $x^2+1=0$ has no real roots. Only real zero: $x=1$.' },
    ],
  },
];
