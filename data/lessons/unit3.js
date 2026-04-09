// data/lessons/unit3.js — Unit 3: Quadratic Functions

export const lessons = [
  // ── 3.1 ──────────────────────────────────────────────────────────────────
  {
    id: '3.1',
    learn: `
      <div class="concept-card">
        <h2>📖 Graphing Quadratic Functions</h2>
        <p>A <strong>quadratic function</strong> has the form $f(x) = ax^2 + bx + c$ and its graph is a <em>parabola</em> — a symmetric U-shape.</p>

        <h3>Three Forms</h3>
        <div class="formula-box"><div class="formula-label">Standard Form</div>$$f(x) = ax^2 + bx + c$$</div>
        <div class="formula-box"><div class="formula-label">Vertex Form</div>$$f(x) = a(x-h)^2 + k \\quad \\text{vertex at } (h,k)$$</div>
        <div class="formula-box"><div class="formula-label">Intercept (Factored) Form</div>$$f(x) = a(x-p)(x-q) \\quad \\text{x-intercepts at } p, q$$</div>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Vertex:</strong> $\\left(-\\dfrac{b}{2a},\\, f\\!\\left(-\\dfrac{b}{2a}\\right)\\right)$ — the highest or lowest point</li>
          <li><strong>Axis of symmetry:</strong> $x = -\\dfrac{b}{2a}$ — the vertical line through the vertex</li>
          <li><strong>Opens up</strong> if $a > 0$; <strong>opens down</strong> if $a < 0$</li>
          <li><strong>y-intercept:</strong> $(0, c)$</li>
        </ul>

        <div class="tip-box"><span class="tip-icon">💡</span><p>If $|a|$ is large, the parabola is narrow. If $|a|$ is small, it is wide.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Identify the vertex, axis of symmetry, and direction of $f(x) = 2x^2 - 8x + 5$.', steps: ['Axis of symmetry: $x = -\\dfrac{-8}{2(2)} = \\dfrac{8}{4} = 2$', 'Vertex x = 2; $f(2) = 2(4) - 16 + 5 = -3$. Vertex: $(2, -3)$', 'Since $a = 2 > 0$, parabola opens upward.'], answer: 'Vertex $(2,-3)$, axis $x=2$, opens up.' },
      { problem: 'Write $f(x) = -(x+1)^2 + 4$ in standard form and find the vertex.', steps: ['Vertex form reveals vertex directly: $(h,k) = (-1, 4)$', 'Expand: $-(x^2+2x+1)+4 = -x^2 - 2x - 1 + 4 = -x^2 - 2x + 3$'], answer: '$f(x) = -x^2 - 2x + 3$, vertex $(-1, 4)$' },
    ],
    practice: [
      { type: 'mc', question: 'The axis of symmetry of $f(x) = 3x^2 + 6x - 1$ is:', choices: ['$x = 1$', '$x = -1$', '$x = 2$', '$x = -2$'], correct: 1, explanation: '$x = -b/(2a) = -6/6 = -1$.' },
      { type: 'mc', question: 'The vertex of $f(x) = (x-3)^2 + 7$ is:', choices: ['$(3, 7)$', '$(-3, 7)$', '$(3, -7)$', '$(-3, -7)$'], correct: 0, explanation: 'In vertex form $a(x-h)^2+k$, vertex is $(h,k) = (3,7)$.' },
      { type: 'mc', question: 'If $a < 0$ in $f(x)=ax^2+bx+c$, the parabola:', choices: ['Opens upward', 'Opens downward', 'Is a horizontal line', 'Has no vertex'], correct: 1, explanation: 'Negative $a$ → parabola opens downward.' },
      { type: 'fill', question: 'What is the y-intercept of $f(x) = 4x^2 - 3x + 7$?', answer: '7', explanation: 'The y-intercept is the constant term $c = 7$, i.e., $f(0) = 7$.' },
      { type: 'mc', question: 'In the intercept form $f(x) = a(x-p)(x-q)$, the x-intercepts are:', choices: ['$a$ and $-a$', '$p$ and $q$', '$-p$ and $-q$', 'Only at 0'], correct: 1, explanation: 'Setting $f(x)=0$ gives $x=p$ or $x=q$ — the x-intercepts.' },
    ],
  },

  // ── 3.2 ──────────────────────────────────────────────────────────────────
  {
    id: '3.2',
    learn: `
      <div class="concept-card">
        <h2>📖 Completing the Square</h2>
        <p><strong>Completing the square</strong> converts a quadratic from standard form to vertex form. It's the foundation for deriving the quadratic formula.</p>

        <div class="formula-box"><div class="formula-label">The Key Identity</div>$$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$$</div>

        <h3>Steps (when leading coefficient = 1)</h3>
        <ol>
          <li>Move the constant to the right side</li>
          <li>Take half the coefficient of $x$, square it</li>
          <li>Add that value to both sides</li>
          <li>Factor the left side as a perfect square</li>
          <li>Isolate $y$ (or solve for $x$)</li>
        </ol>

        <h3>When $a \\neq 1$</h3>
        <p>Factor out $a$ from the $x^2$ and $x$ terms first, then complete the square inside the parentheses.</p>

        <div class="warning-box"><span class="warning-icon">⚠️</span><p>When $a \\neq 1$, remember to multiply the value you added inside the parentheses by $a$ when accounting for both sides!</p></div>
      </div>
    `,
    examples: [
      { problem: 'Convert $y = x^2 - 6x + 2$ to vertex form.', steps: ['Move constant: $y - 2 = x^2 - 6x$', 'Half of $-6$ is $-3$; $(-3)^2 = 9$. Add 9 to both sides: $y - 2 + 9 = x^2 - 6x + 9$', 'Factor right side: $y + 7 = (x - 3)^2$', 'Solve for $y$: $y = (x-3)^2 - 7$'], answer: '$y = (x-3)^2 - 7$, vertex $(3,-7)$' },
      { problem: 'Solve $x^2 + 4x - 5 = 0$ by completing the square.', steps: ['Move constant: $x^2 + 4x = 5$', 'Add $(4/2)^2 = 4$: $x^2 + 4x + 4 = 9$', 'Factor: $(x+2)^2 = 9$', 'Square root: $x + 2 = \\pm 3$', 'Solutions: $x = 1$ or $x = -5$'], answer: '$x = 1$ or $x = -5$' },
    ],
    practice: [
      { type: 'mc', question: 'To complete the square for $x^2 - 10x$, you add:', choices: ['$5$', '$10$', '$25$', '$100$'], correct: 2, explanation: 'Half of 10 is 5; $5^2 = 25$.' },
      { type: 'mc', question: '$y = x^2 + 8x + 10$ in vertex form is:', choices: ['$(x+4)^2 - 6$', '$(x+4)^2 + 6$', '$(x-4)^2 - 6$', '$(x+8)^2 + 10$'], correct: 0, explanation: '$y = x^2+8x+16-16+10 = (x+4)^2 - 6$.' },
      { type: 'fill', question: 'Complete the square: the vertex of $y = x^2 - 4x + 1$ is $(h, k)$. What is $k$?', answer: '-3', explanation: '$y = (x-2)^2 - 4 + 1 = (x-2)^2 - 3$. Vertex is $(2,-3)$, so $k=-3$.' },
      { type: 'mc', question: 'Solve $x^2 - 2x - 8 = 0$ by completing the square:', choices: ['$x = 4$ or $x = -2$', '$x = 2$ or $x = -4$', '$x = 4$ or $x = 2$', '$x = 1 \\pm 3$'], correct: 0, explanation: '$x^2-2x=8 \\to (x-1)^2=9 \\to x-1=\\pm3 \\to x=4$ or $x=-2$.' },
      { type: 'mc', question: 'When completing the square for $2x^2 + 12x + 5$, the first step is:', choices: ['Add 9 to both sides', 'Factor out 2 from first two terms', 'Move the constant to the right', 'Divide everything by 12'], correct: 1, explanation: 'When $a \\neq 1$, factor out $a$ from $2x^2 + 12x$ first: $2(x^2 + 6x) + 5$.' },
    ],
  },

  // ── 3.3 ──────────────────────────────────────────────────────────────────
  {
    id: '3.3',
    learn: `
      <div class="concept-card">
        <h2>📖 The Quadratic Formula</h2>
        <p>The quadratic formula solves <em>any</em> quadratic equation $ax^2 + bx + c = 0$ — even when factoring is impossible.</p>

        <div class="formula-box"><div class="formula-label">The Quadratic Formula</div>$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$</div>

        <p>It is derived by completing the square on the general form $ax^2 + bx + c = 0$.</p>

        <h3>How to Use It</h3>
        <ol>
          <li>Write the equation in the form $ax^2 + bx + c = 0$</li>
          <li>Identify $a$, $b$, and $c$</li>
          <li>Substitute into the formula</li>
          <li>Simplify under the square root (the discriminant $b^2 - 4ac$)</li>
          <li>Simplify the full expression</li>
        </ol>

        <div class="tip-box"><span class="tip-icon">💡</span><p>The $\\pm$ gives two answers. Simplify each separately. Always check whether the answer should be exact (simplified radical) or decimal.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Solve $2x^2 - 5x - 3 = 0$ using the quadratic formula.', steps: ['$a=2, b=-5, c=-3$', '$x = \\dfrac{-(-5) \\pm \\sqrt{(-5)^2 - 4(2)(-3)}}{2(2)} = \\dfrac{5 \\pm \\sqrt{25+24}}{4} = \\dfrac{5 \\pm \\sqrt{49}}{4} = \\dfrac{5 \\pm 7}{4}$', '$x = \\dfrac{12}{4} = 3$ or $x = \\dfrac{-2}{4} = -\\dfrac{1}{2}$'], answer: '$x = 3$ or $x = -\\dfrac{1}{2}$' },
      { problem: 'Solve $x^2 - 4x + 1 = 0$.', steps: ['$a=1, b=-4, c=1$', '$x = \\dfrac{4 \\pm \\sqrt{16-4}}{2} = \\dfrac{4 \\pm \\sqrt{12}}{2} = \\dfrac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$'], answer: '$x = 2 + \\sqrt{3}$ or $x = 2 - \\sqrt{3}$' },
    ],
    practice: [
      { type: 'fill', question: 'For $3x^2 - 2x - 1 = 0$, what is $b^2 - 4ac$?', answer: '16', explanation: '$b^2-4ac = 4-4(3)(-1) = 4+12 = 16$.' },
      { type: 'mc', question: 'Solve $x^2 - 5x + 6 = 0$ using the quadratic formula:', choices: ['$x=2$ or $x=3$', '$x=1$ or $x=6$', '$x=-2$ or $x=-3$', '$x=5 \\pm 1$'], correct: 0, explanation: '$x = (5 \\pm \\sqrt{25-24})/2 = (5\\pm1)/2$, so $x=3$ or $x=2$.' },
      { type: 'mc', question: 'Solve $x^2 + 2x + 5 = 0$. The discriminant is:', choices: ['$-16$', '$16$', '$-4$', '$4$'], correct: 0, explanation: '$b^2-4ac = 4-20 = -16$. Negative → complex roots.' },
      { type: 'mc', question: 'Solve $x^2 - 6x + 9 = 0$:', choices: ['$x = 3$ only', '$x = 3$ or $x = -3$', '$x = 9$', 'No solution'], correct: 0, explanation: '$x = (6 \\pm \\sqrt{36-36})/2 = 6/2 = 3$. One repeated root.' },
      { type: 'fill', question: 'Solve $x^2 - 2x - 8 = 0$. What is the larger root?', answer: '4', explanation: '$x = (2 \\pm \\sqrt{4+32})/2 = (2\\pm 6)/2$. Larger root: $(2+6)/2 = 4$.' },
    ],
  },

  // ── 3.4 ──────────────────────────────────────────────────────────────────
  {
    id: '3.4',
    learn: `
      <div class="concept-card">
        <h2>📖 The Discriminant</h2>
        <p>The <strong>discriminant</strong> is the expression under the square root in the quadratic formula. It tells you the nature and number of roots <em>before</em> you solve.</p>

        <div class="formula-box"><div class="formula-label">Discriminant</div>$$\\Delta = b^2 - 4ac$$</div>

        <h3>Interpreting the Discriminant</h3>
        <ul>
          <li>$\\Delta > 0$: <strong>Two distinct real roots</strong>. Parabola crosses x-axis twice.</li>
          <li>$\\Delta = 0$: <strong>One real root (repeated)</strong>. Parabola is tangent to x-axis (vertex on x-axis).</li>
          <li>$\\Delta < 0$: <strong>Two complex (non-real) roots</strong>. Parabola doesn't cross x-axis.</li>
        </ul>

        <div class="formula-box"><div class="formula-label">Perfect Square Discriminant</div>$$\\Delta > 0 \\text{ and } \\Delta \\text{ is a perfect square} \\implies \\text{two rational roots (factorable)}$$</div>

        <div class="tip-box"><span class="tip-icon">💡</span><p>Use the discriminant as a quick check: if $\\Delta < 0$, don't waste time trying to factor — the equation has no real solutions.</p></div>
      </div>
    `,
    examples: [
      { problem: 'Without solving, determine the nature of the roots of $3x^2 - 5x + 4 = 0$.', steps: ['$\\Delta = b^2 - 4ac = (-5)^2 - 4(3)(4) = 25 - 48 = -23$', '$\\Delta < 0$ → two complex (non-real) roots.'], answer: 'Two complex roots (no real solutions)' },
      { problem: 'Find the value of $k$ so that $kx^2 + 4x + 1 = 0$ has exactly one real solution.', steps: ['For one real solution, $\\Delta = 0$', '$\\Delta = 16 - 4k = 0 \\implies 4k = 16 \\implies k = 4$'], answer: '$k = 4$' },
    ],
    practice: [
      { type: 'mc', question: 'For $x^2 - 4x + 4 = 0$, the discriminant is:', choices: ['$0$', '$8$', '$-8$', '$32$'], correct: 0, explanation: '$\\Delta = 16 - 16 = 0$. One repeated root.' },
      { type: 'mc', question: 'How many real roots does $2x^2 + 3x + 5 = 0$ have?', choices: ['None', 'One', 'Two', 'Three'], correct: 0, explanation: '$\\Delta = 9 - 40 = -31 < 0$. No real roots.' },
      { type: 'mc', question: '$\\Delta = 25$ for some quadratic. This means the equation has:', choices: ['Two rational real roots', 'Two irrational real roots', 'One real root', 'No real roots'], correct: 0, explanation: '$25 > 0$ and is a perfect square → two rational real roots.' },
      { type: 'fill', question: 'What is the discriminant of $x^2 + 6x + 9 = 0$?', answer: '0', explanation: '$b^2-4ac = 36 - 36 = 0$.' },
      { type: 'mc', question: 'If the parabola $y = ax^2+bx+c$ does not intersect the x-axis, then:', choices: ['$\\Delta > 0$', '$\\Delta = 0$', '$\\Delta < 0$', '$a = 0$'], correct: 2, explanation: 'No x-intercepts → no real roots → discriminant is negative.' },
    ],
  },

  // ── 3.5 ──────────────────────────────────────────────────────────────────
  {
    id: '3.5',
    learn: `
      <div class="concept-card">
        <h2>📖 Factoring Quadratics</h2>
        <p>Factoring rewrites a quadratic as a product of simpler expressions, making it easy to find roots.</p>

        <h3>Common Factoring Patterns</h3>

        <div class="formula-box"><div class="formula-label">Greatest Common Factor (GCF)</div>$$6x^2 + 9x = 3x(2x + 3)$$</div>
        <div class="formula-box"><div class="formula-label">Difference of Squares</div>$$a^2 - b^2 = (a+b)(a-b)$$</div>
        <div class="formula-box"><div class="formula-label">Perfect Square Trinomial</div>$$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$$</div>
        <div class="formula-box"><div class="formula-label">Simple Trinomial (a = 1)</div>$$x^2 + bx + c = (x+p)(x+q) \\text{ where } p+q=b, pq=c$$</div>

        <h3>AC Method (a ≠ 1)</h3>
        <p>For $ax^2 + bx + c$: find two numbers that multiply to $ac$ and add to $b$. Then split the middle term and factor by grouping.</p>

        <div class="tip-box"><span class="tip-icon">💡</span><p>Always check your factoring by expanding (FOIL). If you get back the original, you're right!</p></div>
      </div>
    `,
    examples: [
      { problem: 'Factor: $x^2 - 7x + 12$', steps: ['Find two numbers with product $12$ and sum $-7$: $(-3)(-4) = 12$ and $(-3)+(-4) = -7$ ✓', 'Factor: $(x - 3)(x - 4)$'], answer: '$(x-3)(x-4)$' },
      { problem: 'Factor: $6x^2 + 7x - 3$ using the AC method.', steps: ['$ac = 6 \\cdot (-3) = -18$. Need two numbers with product $-18$ and sum $7$: $9$ and $-2$', 'Rewrite: $6x^2 + 9x - 2x - 3$', 'Group: $3x(2x+3) - 1(2x+3) = (3x-1)(2x+3)$'], answer: '$(3x-1)(2x+3)$' },
    ],
    practice: [
      { type: 'mc', question: 'Factor: $x^2 - 9$', choices: ['$(x-3)^2$', '$(x+3)(x-3)$', '$(x+9)(x-1)$', '$(x-3)(x+1)$'], correct: 1, explanation: '$x^2-9 = x^2-3^2 = (x+3)(x-3)$ — difference of squares.' },
      { type: 'mc', question: 'Factor: $x^2 + 5x + 6$', choices: ['$(x+1)(x+6)$', '$(x+2)(x+3)$', '$(x-2)(x-3)$', '$(x+5)(x+1)$'], correct: 1, explanation: 'Need $p+q=5, pq=6$: $p=2, q=3$. Answer: $(x+2)(x+3)$.' },
      { type: 'mc', question: 'What is the GCF of $4x^3 + 8x^2$?', choices: ['$2x$', '$4x$', '$4x^2$', '$8x^3$'], correct: 2, explanation: 'GCF of $4x^3$ and $8x^2$ is $4x^2$.' },
      { type: 'fill', question: 'Factor $x^2 - 4x - 12$. One factor is $(x+2)$. What is the other factor? Enter in the form (x-n).', answer: '(x-6)', altAnswers: ['x-6'], explanation: 'Need $p+q=-4, pq=-12$: $p=2, q=-6$. Factors: $(x+2)(x-6)$.' },
      { type: 'mc', question: 'Factor $2x^2 - 8$ completely:', choices: ['$2(x^2-4)$', '$2(x-2)(x+2)$', '$2(x-2)^2$', '$(2x-4)(x+2)$'], correct: 1, explanation: 'Factor out 2: $2(x^2-4) = 2(x+2)(x-2)$.' },
    ],
  },

  // ── 3.6 ──────────────────────────────────────────────────────────────────
  {
    id: '3.6',
    learn: `
      <div class="concept-card">
        <h2>📖 Quadratic Inequalities</h2>
        <p>A quadratic inequality compares a quadratic expression to zero. The solution is a set of intervals on the number line.</p>

        <h3>Method: Sign Chart</h3>
        <ol>
          <li>Move everything to one side: $ax^2 + bx + c > 0$ (or $< 0$, etc.)</li>
          <li>Find the <strong>zeros</strong> (roots) of the quadratic by solving $= 0$</li>
          <li>Plot the roots on a number line — they divide it into intervals</li>
          <li>Test a value from each interval in the original inequality</li>
          <li>Write the solution: the intervals where the inequality is satisfied</li>
        </ol>

        <div class="tip-box"><span class="tip-icon">💡</span>
          <p>For $a(x-p)(x-q) > 0$ with $p < q$:
          <br>• If parabola opens up ($a>0$): solution is $x < p$ or $x > q$
          <br>• If parabola opens up: for $< 0$: solution is $p < x < q$</p>
        </div>
      </div>
    `,
    examples: [
      { problem: 'Solve: $x^2 - 5x + 6 > 0$', steps: ['Factor: $(x-2)(x-3) > 0$. Zeros: $x=2, x=3$', 'Intervals: $(-\\infty,2)$, $(2,3)$, $(3,\\infty)$', 'Test $x=0$: $(0-2)(0-3)=(-2)(-3)=6>0$ ✓ → include $(-\\infty,2)$', 'Test $x=2.5$: $(0.5)(-0.5) = -0.25 < 0$ → exclude $(2,3)$', 'Test $x=4$: $(2)(1) = 2 > 0$ ✓ → include $(3,\\infty)$'], answer: '$x < 2$ or $x > 3$' },
      { problem: 'Solve: $x^2 - 4 \\leq 0$', steps: ['Factor: $(x-2)(x+2) \\leq 0$. Zeros: $x = \\pm 2$', 'Parabola opens up; the graph is below (or on) x-axis between the roots.', 'Solution: $-2 \\leq x \\leq 2$'], answer: '$-2 \\leq x \\leq 2$' },
    ],
    practice: [
      { type: 'mc', question: 'Solve: $x^2 - x - 6 < 0$', choices: ['$x < -2$ or $x > 3$', '$-2 < x < 3$', '$x < 2$ or $x > -3$', '$x < -3$ or $x > 2$'], correct: 1, explanation: 'Roots: $x=-2, x=3$. Parabola opens up: below x-axis between roots: $-2 < x < 3$.' },
      { type: 'mc', question: 'The solution to $x^2 > 9$ is:', choices: ['$-3 < x < 3$', '$x < -3$ or $x > 3$', '$x > 3$', '$x < -3$'], correct: 1, explanation: '$x^2-9>0 \\to (x+3)(x-3)>0$. Parabola up, above x-axis outside roots: $x<-3$ or $x>3$.' },
      { type: 'mc', question: 'Solve $x^2 - 6x + 9 \\leq 0$:', choices: ['All reals', '$x = 3$ only', '$x \\leq 3$', '$x \\geq 3$'], correct: 1, explanation: '$(x-3)^2 \\leq 0$. A square is always $\\geq 0$, equals 0 only at $x=3$. So $x=3$ only.' },
      { type: 'fill', question: 'The roots of $x^2-4x+3$ are $x=1$ and $x=3$. For the inequality $x^2-4x+3<0$, enter the interval notation left endpoint.', answer: '1', explanation: 'Parabola opens up; $< 0$ between the roots: $1 < x < 3$. Left endpoint is 1.' },
      { type: 'mc', question: 'How many regions does a sign chart divide the number line into when there are 2 roots?', choices: ['2', '3', '4', '1'], correct: 1, explanation: 'Two roots create three regions on the number line.' },
    ],
  },

  // ── 3.7 ──────────────────────────────────────────────────────────────────
  {
    id: '3.7',
    learn: `
      <div class="concept-card">
        <h2>📖 Modeling with Quadratics</h2>
        <p>Quadratic functions model many real-world situations: projectile motion, area problems, revenue optimization, and more.</p>

        <h3>Projectile Motion</h3>
        <div class="formula-box"><div class="formula-label">Height Model</div>$$h(t) = -16t^2 + v_0 t + h_0 \\quad (\\text{feet, where } g = 32 \\text{ ft/s}^2)$$</div>
        <p>$v_0$ = initial velocity (ft/s), $h_0$ = initial height (ft), $t$ = time (sec).</p>
        <p>In meters: $h(t) = -4.9t^2 + v_0 t + h_0$</p>

        <h3>Key Questions</h3>
        <ul>
          <li><strong>Maximum height</strong> → find the vertex (x-coordinate = time, y-coordinate = height)</li>
          <li><strong>Time to hit the ground</strong> → solve $h(t) = 0$</li>
          <li><strong>Height at time $t$</strong> → evaluate $h(t)$</li>
        </ul>

        <div class="tip-box"><span class="tip-icon">💡</span><p>For revenue/profit: if $p$ = price and $q$ = quantity, then Revenue $= p \\cdot q$. Often $q$ is a linear function of $p$.</p></div>
      </div>
    `,
    examples: [
      { problem: 'A ball is launched with $h(t) = -16t^2 + 64t + 5$. Find the maximum height.', steps: ['Vertex time: $t = -\\dfrac{64}{2(-16)} = -\\dfrac{64}{-32} = 2$ seconds', 'Max height: $h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69$ feet'], answer: 'Maximum height of 69 feet at $t = 2$ seconds' },
      { problem: 'A rectangular garden has perimeter 60 ft. Express area as a function of width $w$ and find the maximum area.', steps: ['Perimeter: $2l + 2w = 60 \\implies l = 30 - w$', 'Area: $A(w) = w(30-w) = 30w - w^2 = -w^2 + 30w$', 'Vertex: $w = -\\dfrac{30}{2(-1)} = 15$ ft', 'Max area: $A(15) = 15(15) = 225$ sq ft'], answer: 'Maximum area = 225 ft² when $w = 15$ ft' },
    ],
    practice: [
      { type: 'fill', question: 'An object follows $h(t) = -16t^2 + 32t + 10$. What is its height at $t=0$ seconds?', answer: '10', explanation: '$h(0) = 0 + 0 + 10 = 10$ ft. The initial height.' },
      { type: 'mc', question: 'For $h(t) = -16t^2 + 48t$, at what time does the object reach maximum height?', choices: ['$t = 1$ s', '$t = 1.5$ s', '$t = 2$ s', '$t = 3$ s'], correct: 1, explanation: '$t = -48 / (2 \\cdot -16) = 48/32 = 1.5$ seconds.' },
      { type: 'mc', question: 'The path of a ball is $h(t) = -16t^2 + 64t$. When does it hit the ground?', choices: ['$t = 2$ s', '$t = 4$ s', '$t = 8$ s', '$t = 16$ s'], correct: 1, explanation: '$-16t^2+64t = 0 \\to -16t(t-4) = 0 \\to t=0$ (launch) or $t=4$ s (lands).' },
      { type: 'mc', question: 'Revenue $R(x) = -x^2 + 200x$. What price $x$ maximizes revenue?', choices: ['$x = 50$', '$x = 100$', '$x = 200$', '$x = 150$'], correct: 1, explanation: 'Vertex: $x = -200/(2 \\cdot -1) = 100$.' },
      { type: 'fill', question: 'An object is launched from the ground with $h(t)=-16t^2+80t$. What is the maximum height in feet?', answer: '100', explanation: 'Vertex at $t = 80/32 = 2.5$. $h(2.5) = -16(6.25)+80(2.5) = -100+200 = 100$ ft.' },
    ],
  },
];
