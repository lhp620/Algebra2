// data/lessons/unit6.js — Unit 6: Radical & Rational Exponents

export const lessons = [
  {
    id: '6.1',
    learn: `
      <div class="concept-card">
        <h3>Rational Exponents</h3>
        <p>A rational (fractional) exponent connects powers and roots:</p>
        <div class="formula-box">$$a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}$$</div>
        <ul>
          <li>The <strong>denominator</strong> is the root index.</li>
          <li>The <strong>numerator</strong> is the power.</li>
        </ul>
        <div class="tip-box">$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Take the root first to keep numbers small!</div>
      </div>
      <div class="concept-card">
        <h3>Converting Between Forms</h3>
        <p>Radical form and exponential form are interchangeable:</p>
        <div class="formula-box">$$\\sqrt[n]{a^m} = a^{m/n}$$</div>
        <div class="warning-box">$a^{m/n}$ requires $a \\ge 0$ when $n$ is even (to stay in the reals).</div>
      </div>`,
    examples: [
      {
        problem: 'Evaluate $27^{2/3}$.',
        steps: [
          'Denominator 3 → cube root: $\\sqrt[3]{27} = 3$.',
          'Numerator 2 → square: $3^2 = 9$.'
        ],
        answer: '$9$'
      },
      {
        problem: 'Write $\\sqrt[4]{x^3}$ with a rational exponent.',
        steps: [
          'Root index 4 → denominator; power 3 → numerator.',
          '$\\sqrt[4]{x^3} = x^{3/4}$.'
        ],
        answer: '$x^{3/4}$'
      },
      {
        problem: 'Evaluate $16^{-3/4}$.',
        steps: [
          '$16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$.',
          'Negative exponent → reciprocal: $16^{-3/4} = \\dfrac{1}{8}$.'
        ],
        answer: '$\\dfrac{1}{8}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Evaluate $64^{1/3}$.', choices: ['$4$', '$8$', '$16$', '$2$'], correct: 0, explanation: '$\\sqrt[3]{64} = 4$.' },
      { type: 'fill', question: 'Write $\\sqrt[5]{x^2}$ as a rational exponent (e.g., x^(2/5)).', answer: 'x^(2/5)', altAnswers: ['x^2/5'], explanation: 'Root 5 → denominator, power 2 → numerator: $x^{2/5}$.' },
      { type: 'mc', question: 'Evaluate $32^{3/5}$.', choices: ['$6$', '$8$', '$16$', '$4$'], correct: 1, explanation: '$\\sqrt[5]{32} = 2$; $2^3 = 8$.' },
      { type: 'mc', question: 'Evaluate $9^{-1/2}$.', choices: ['$3$', '$-3$', '$\\frac{1}{3}$', '$\\frac{1}{9}$'], correct: 2, explanation: '$9^{1/2} = 3$; negative exponent → $\\frac{1}{3}$.' },
      { type: 'fill', question: 'Evaluate $4^{5/2}$. Enter the number.', answer: '32', altAnswers: [], explanation: '$\\sqrt{4} = 2$; $2^5 = 32$.' }
    ]
  },
  {
    id: '6.2',
    learn: `
      <div class="concept-card">
        <h3>Simplifying Radical Expressions</h3>
        <p>A radical $\\sqrt[n]{a}$ is in simplest form when:</p>
        <ul>
          <li>No perfect $n$th-power factors remain under the radical.</li>
          <li>No fractions are under the radical sign.</li>
          <li>No radicals are in the denominator.</li>
        </ul>
        <div class="formula-box">$$\\sqrt[n]{ab} = \\sqrt[n]{a}\\cdot\\sqrt[n]{b} \\qquad \\sqrt[n]{\\dfrac{a}{b}} = \\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$</div>
      </div>
      <div class="concept-card">
        <h3>Rationalizing the Denominator</h3>
        <p>For a square root in the denominator, multiply by $\\dfrac{\\sqrt{b}}{\\sqrt{b}}$.</p>
        <p>For a binomial denominator involving a radical, multiply by the <strong>conjugate</strong>.</p>
        <div class="tip-box">$(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a - b$ — the conjugate eliminates the radical.</div>
      </div>`,
    examples: [
      {
        problem: 'Simplify $\\sqrt{72}$.',
        steps: [
          'Factor out the largest perfect square: $72 = 36 \\cdot 2$.',
          '$\\sqrt{72} = \\sqrt{36}\\cdot\\sqrt{2} = 6\\sqrt{2}$.'
        ],
        answer: '$6\\sqrt{2}$'
      },
      {
        problem: 'Rationalize $\\dfrac{5}{\\sqrt{3}}$.',
        steps: [
          'Multiply by $\\dfrac{\\sqrt{3}}{\\sqrt{3}}$.',
          '$= \\dfrac{5\\sqrt{3}}{3}$.'
        ],
        answer: '$\\dfrac{5\\sqrt{3}}{3}$'
      },
      {
        problem: 'Simplify $\\sqrt[3]{54}$.',
        steps: [
          'Factor: $54 = 27 \\cdot 2$.',
          '$\\sqrt[3]{54} = \\sqrt[3]{27}\\cdot\\sqrt[3]{2} = 3\\sqrt[3]{2}$.'
        ],
        answer: '$3\\sqrt[3]{2}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Simplify $\\sqrt{50}$.', choices: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$5\\sqrt{10}$', '$10\\sqrt{5}$'], correct: 0, explanation: '$50 = 25 \\cdot 2$; $\\sqrt{50} = 5\\sqrt{2}$.' },
      { type: 'fill', question: 'Simplify $\\sqrt{200}$. Enter in the form a√b (e.g., 10√2).', answer: '10√2', altAnswers: ['10sqrt(2)', '10*sqrt(2)'], explanation: '$200 = 100 \\cdot 2$; $\\sqrt{200} = 10\\sqrt{2}$.' },
      { type: 'mc', question: 'Rationalize $\\dfrac{1}{\\sqrt{5}}$.', choices: ['$\\frac{\\sqrt{5}}{5}$', '$\\frac{1}{5}$', '$\\sqrt{5}$', '$\\frac{5}{\\sqrt{5}}$'], correct: 0, explanation: '$\\frac{1}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$.' },
      { type: 'mc', question: 'Simplify $\\sqrt[3]{16}$.', choices: ['$2\\sqrt[3]{4}$', '$4\\sqrt[3]{2}$', '$2\\sqrt[3]{2}$', '$8$'], correct: 0, explanation: '$16 = 8 \\cdot 2$; $\\sqrt[3]{16} = 2\\sqrt[3]{2}$.' },
      { type: 'fill', question: 'Rationalize $\\dfrac{6}{\\sqrt{6}}$. Enter the simplified result.', answer: '√6', altAnswers: ['sqrt(6)'], explanation: '$\\frac{6}{\\sqrt{6}} = \\frac{6\\sqrt{6}}{6} = \\sqrt{6}$.' }
    ]
  },
  {
    id: '6.3',
    learn: `
      <div class="concept-card">
        <h3>Operations with Radicals</h3>
        <p><strong>Like radicals</strong> have the same index and radicand. Only like radicals can be combined by addition/subtraction.</p>
        <div class="formula-box">$$a\\sqrt[n]{x} \\pm b\\sqrt[n]{x} = (a \\pm b)\\sqrt[n]{x}$$</div>
        <div class="tip-box">Simplify each radical first — hidden like radicals may appear!</div>
      </div>
      <div class="concept-card">
        <h3>Multiplying Radicals</h3>
        <p>Use the product rule: $\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$ (same index required).</p>
        <p>For expressions like $(2 + \\sqrt{3})(5 - \\sqrt{3})$, use FOIL and simplify.</p>
      </div>
      <div class="concept-card">
        <h3>Solving Radical Equations</h3>
        <ol>
          <li>Isolate the radical on one side.</li>
          <li>Raise both sides to the $n$th power.</li>
          <li>Solve the resulting equation.</li>
          <li><strong>Check for extraneous solutions</strong> — squaring can introduce false answers!</li>
        </ol>
        <div class="warning-box">Always substitute solutions back into the original equation.</div>
      </div>`,
    examples: [
      {
        problem: 'Combine $3\\sqrt{12} - \\sqrt{27}$.',
        steps: [
          '$\\sqrt{12} = 2\\sqrt{3}$, so $3\\sqrt{12} = 6\\sqrt{3}$.',
          '$\\sqrt{27} = 3\\sqrt{3}$.',
          '$6\\sqrt{3} - 3\\sqrt{3} = 3\\sqrt{3}$.'
        ],
        answer: '$3\\sqrt{3}$'
      },
      {
        problem: 'Solve $\\sqrt{2x + 1} = 5$.',
        steps: [
          'Square both sides: $2x + 1 = 25$.',
          '$2x = 24 \\Rightarrow x = 12$.',
          'Check: $\\sqrt{25} = 5$ ✓.'
        ],
        answer: '$x = 12$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Simplify $5\\sqrt{3} + 2\\sqrt{3}$.', choices: ['$7\\sqrt{3}$', '$7\\sqrt{6}$', '$10\\sqrt{3}$', '$7\\sqrt{9}$'], correct: 0, explanation: 'Like radicals: $(5+2)\\sqrt{3} = 7\\sqrt{3}$.' },
      { type: 'mc', question: 'Solve $\\sqrt{x} = 7$.', choices: ['$x = 7$', '$x = 14$', '$x = 49$', '$x = \\sqrt{7}$'], correct: 2, explanation: 'Square both sides: $x = 49$.' },
      { type: 'fill', question: 'Simplify $\\sqrt{8} + \\sqrt{32}$. Enter in the form a√b.', answer: '6√2', altAnswers: ['6sqrt(2)'], explanation: '$2\\sqrt{2} + 4\\sqrt{2} = 6\\sqrt{2}$.' },
      { type: 'mc', question: 'Solve $\\sqrt{3x - 2} = 4$.', choices: ['$x = 2$', '$x = 6$', '$x = 18$', '$x = 14/3$'], correct: 1, explanation: '$3x - 2 = 16 \\Rightarrow 3x = 18 \\Rightarrow x = 6$.' },
      { type: 'fill', question: 'Solve $\\sqrt{x + 4} = 3$. Enter x.', answer: '5', altAnswers: ['x=5'], explanation: '$x + 4 = 9 \\Rightarrow x = 5$.' }
    ]
  },
  {
    id: '6.4',
    learn: `
      <div class="concept-card">
        <h3>Function Operations</h3>
        <p>Given functions $f$ and $g$, we can build new functions:</p>
        <div class="formula-box">$$(f+g)(x) = f(x)+g(x) \\quad (f-g)(x) = f(x)-g(x)$$
$$(fg)(x) = f(x)\\cdot g(x) \\quad \\left(\\tfrac{f}{g}\\right)(x) = \\dfrac{f(x)}{g(x)},\\; g(x)\\ne 0$$</div>
      </div>
      <div class="concept-card">
        <h3>Composition of Functions</h3>
        <p>$(f \\circ g)(x) = f(g(x))$ — plug $g(x)$ into $f$.</p>
        <div class="warning-box">Composition is <strong>not</strong> commutative: $f(g(x)) \\ne g(f(x))$ in general.</div>
        <div class="tip-box">The domain of $f \\circ g$ requires $x$ to be in the domain of $g$, and $g(x)$ to be in the domain of $f$.</div>
      </div>
      <div class="concept-card">
        <h3>Inverse Functions</h3>
        <p>$f^{-1}$ undoes $f$: $f(f^{-1}(x)) = x$. To find $f^{-1}$:</p>
        <ol>
          <li>Write $y = f(x)$.</li>
          <li>Swap $x$ and $y$.</li>
          <li>Solve for $y$.</li>
        </ol>
        <p>Graphically, $f^{-1}$ is the reflection of $f$ over the line $y = x$.</p>
      </div>`,
    examples: [
      {
        problem: 'If $f(x) = x + 3$ and $g(x) = x^2$, find $(f \\circ g)(x)$ and $(g \\circ f)(x)$.',
        steps: [
          '$(f \\circ g)(x) = f(g(x)) = f(x^2) = x^2 + 3$.',
          '$(g \\circ f)(x) = g(f(x)) = g(x+3) = (x+3)^2$.',
          'They are different, confirming composition is not commutative.'
        ],
        answer: '$f\\circ g: x^2+3$; $g\\circ f: (x+3)^2$'
      },
      {
        problem: 'Find the inverse of $f(x) = 2x - 5$.',
        steps: [
          'Write $y = 2x - 5$.',
          'Swap: $x = 2y - 5$.',
          'Solve: $y = \\dfrac{x+5}{2}$.',
          '$f^{-1}(x) = \\dfrac{x+5}{2}$.'
        ],
        answer: '$f^{-1}(x) = \\dfrac{x+5}{2}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'If $f(x)=3x$ and $g(x)=x-2$, find $(f\\circ g)(4)$.', choices: ['$6$', '$10$', '$14$', '$12$'], correct: 0, explanation: '$g(4)=2$; $f(2)=6$.' },
      { type: 'fill', question: 'Find $f^{-1}(x)$ when $f(x) = x + 7$. Enter the expression (e.g., x-7).', answer: 'x-7', altAnswers: ['x - 7'], explanation: 'Swap and solve: $x = y+7 \\Rightarrow y = x-7$.' },
      { type: 'mc', question: 'If $f(x)=\\sqrt{x}$ and $g(x)=x+9$, find $(f\\circ g)(0)$.', choices: ['$3$', '$9$', '$\\sqrt{9}$', '$0$'], correct: 0, explanation: '$g(0)=9$; $f(9)=\\sqrt{9}=3$.' },
      { type: 'mc', question: 'Which test checks if a function has an inverse?', choices: ['Vertical Line Test', 'Horizontal Line Test', 'Diagonal Line Test', 'Origin Symmetry Test'], correct: 1, explanation: 'A function is one-to-one (has an inverse) if every horizontal line crosses it at most once.' },
      { type: 'fill', question: 'Find $f^{-1}(x)$ when $f(x) = 4x + 1$. Enter the expression.', answer: '(x-1)/4', altAnswers: ['(x - 1)/4', 'x/4-1/4'], explanation: 'Swap and solve: $x = 4y+1 \\Rightarrow y = \\frac{x-1}{4}$.' }
    ]
  }
];
