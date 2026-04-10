// data/lessons/unit5.js — Unit 5: Complex Numbers

export const lessons = [
  {
    id: '5.1',
    learn: `
      <div class="concept-card">
        <h3>The Imaginary Unit</h3>
        <p>Sometimes the discriminant $b^2 - 4ac$ is negative, meaning no real square root exists. We introduce the <strong>imaginary unit</strong> $i$ to handle this.</p>
        <div class="formula-box">$$i = \\sqrt{-1}, \\qquad i^2 = -1$$</div>
        <p>Any square root of a negative number can be written using $i$:</p>
        <div class="formula-box">$$\\sqrt{-n} = i\\sqrt{n} \\quad (n > 0)$$</div>
      </div>
      <div class="concept-card">
        <h3>Powers of $i$ — The Cycle of Four</h3>
        <p>Powers of $i$ repeat every 4 steps:</p>
        <div class="formula-box">$$i^1 = i,\\quad i^2 = -1,\\quad i^3 = -i,\\quad i^4 = 1,\\quad i^5 = i,\\ldots$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>To find $i^n$, divide $n$ by 4 and use the remainder: remainder 0 → 1, remainder 1 → $i$, remainder 2 → $-1$, remainder 3 → $-i$.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Complex Numbers</h3>
        <p>A <strong>complex number</strong> has the form $a + bi$ where $a$ is the real part and $b$ is the imaginary part.</p>
        <ul>
          <li>If $b = 0$: purely real (e.g., 5)</li>
          <li>If $a = 0$: purely imaginary (e.g., $3i$)</li>
          <li>If $a \\ne 0$ and $b \\ne 0$: complex (e.g., $2 + 3i$)</li>
        </ul>
      </div>`,
    examples: [
      {
        problem: 'Simplify $\\sqrt{-49}$.',
        steps: [
          'Write as $\\sqrt{-1 \\cdot 49}$.',
          '$= \\sqrt{-1} \\cdot \\sqrt{49}$',
          '$= i \\cdot 7 = 7i$'
        ],
        answer: '$7i$'
      },
      {
        problem: 'Find $i^{23}$.',
        steps: [
          'Divide the exponent: $23 \\div 4 = 5$ remainder $3$.',
          'Remainder 3 → $i^3 = -i$.'
        ],
        answer: '$-i$'
      },
      {
        problem: 'Simplify $\\sqrt{-18}$.',
        steps: [
          '$\\sqrt{-18} = \\sqrt{-1 \\cdot 9 \\cdot 2} = i \\cdot 3\\sqrt{2}$',
          '$= 3i\\sqrt{2}$'
        ],
        answer: '$3i\\sqrt{2}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Simplify $\\sqrt{-64}$.', choices: ['$8$', '$-8$', '$8i$', '$-8i$'], correct: 2, explanation: '$\\sqrt{-64} = \\sqrt{64}\\cdot i = 8i$.' },
      { type: 'mc', question: 'What is $i^{30}$?', choices: ['$1$', '$-1$', '$i$', '$-i$'], correct: 1, explanation: '$30 \\div 4 = 7$ R $2$; remainder $2 \\Rightarrow i^2 = -1$.' },
      { type: 'fill', question: 'Simplify $\\sqrt{-25}$. Enter your answer (e.g., 5i).', answer: '5i', altAnswers: ['5*i'], explanation: '$\\sqrt{-25} = 5i$.' },
      { type: 'mc', question: 'Which is a purely imaginary number?', choices: ['$3 + 0i$', '$0 + 4i$', '$2 + 2i$', '$0 + 0i$'], correct: 1, explanation: 'Purely imaginary means real part = 0 and imaginary part ≠ 0.' },
      { type: 'fill', question: 'What is $i^{100}$? Enter the number.', answer: '1', altAnswers: [], explanation: '$100 \\div 4 = 25$ R $0$; remainder $0 \\Rightarrow i^4 = 1$.' }
    ]
  },
  {
    id: '5.2',
    learn: `
      <div class="concept-card">
        <h3>Adding and Subtracting Complex Numbers</h3>
        <p>Combine <strong>like parts</strong>: add real parts together and imaginary parts together.</p>
        <div class="formula-box">$$(a+bi) + (c+di) = (a+c) + (b+d)i$$</div>
        <div class="formula-box">$$(a+bi) - (c+di) = (a-c) + (b-d)i$$</div>
      </div>
      <div class="concept-card">
        <h3>Multiplying Complex Numbers</h3>
        <p>Use FOIL, then substitute $i^2 = -1$.</p>
        <div class="formula-box">$$(a+bi)(c+di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Always replace $i^2$ with $-1$ at the end and collect real and imaginary parts.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Add $(3 + 5i) + (1 - 2i)$.',
        steps: [
          'Real parts: $3 + 1 = 4$.',
          'Imaginary parts: $5 + (-2) = 3$.',
          'Result: $4 + 3i$.'
        ],
        answer: '$4 + 3i$'
      },
      {
        problem: 'Multiply $(2 + 3i)(1 - 4i)$.',
        steps: [
          'FOIL: $2(1) + 2(-4i) + 3i(1) + 3i(-4i)$',
          '$= 2 - 8i + 3i - 12i^2$',
          'Replace $i^2 = -1$: $= 2 - 8i + 3i + 12$',
          'Collect: $(2+12) + (-8+3)i = 14 - 5i$'
        ],
        answer: '$14 - 5i$'
      },
      {
        problem: 'Subtract $(4 - i) - (2 + 6i)$.',
        steps: [
          'Distribute the minus: $4 - i - 2 - 6i$',
          'Real: $4 - 2 = 2$; Imaginary: $-1 - 6 = -7$.',
          'Result: $2 - 7i$.'
        ],
        answer: '$2 - 7i$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Add $(5 - 3i) + (-2 + 7i)$.', choices: ['$3 + 4i$', '$3 - 4i$', '$7 + 4i$', '$3 + 10i$'], correct: 0, explanation: 'Real: $5-2=3$; Imaginary: $-3+7=4$. Answer: $3+4i$.' },
      { type: 'fill', question: 'Subtract $(6 + 2i) - (3 - 5i)$. Enter in the form a+bi (e.g., 3+7i).', answer: '3+7i', altAnswers: ['3 + 7i'], explanation: 'Real: $6-3=3$; Imaginary: $2-(-5)=7$. Answer: $3+7i$.' },
      { type: 'mc', question: 'Multiply $(3i)(4i)$.', choices: ['$12i$', '$-12$', '$12$', '$-12i$'], correct: 1, explanation: '$3i \\cdot 4i = 12i^2 = 12(-1) = -12$.' },
      { type: 'mc', question: 'Multiply $(1 + i)(1 - i)$.', choices: ['$1 - i^2$', '$2$', '$1 + 2i - i^2$', '$0$'], correct: 1, explanation: '$1 - i^2 = 1 - (-1) = 2$.' },
      { type: 'fill', question: 'Multiply $(2 + i)(3 + 2i)$. Enter real part only.', answer: '4', altAnswers: [], explanation: 'FOIL: $6 + 4i + 3i + 2i^2 = 6 + 7i - 2 = 4 + 7i$. Real part = 4.' }
    ]
  },
  {
    id: '5.3',
    learn: `
      <div class="concept-card">
        <h3>Complex Conjugates</h3>
        <p>The <strong>conjugate</strong> of $a + bi$ is $a - bi$ (flip the sign of the imaginary part).</p>
        <div class="formula-box">$$(a+bi)(a-bi) = a^2 + b^2$$</div>
        <p>The product of conjugates is always a <em>real</em> number — no $i$ terms remain!</p>
      </div>
      <div class="concept-card">
        <h3>Dividing Complex Numbers</h3>
        <p>To divide, multiply numerator and denominator by the conjugate of the denominator.</p>
        <div class="formula-box">$$\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{(c+di)(c-di)} = \\frac{(a+bi)(c-di)}{c^2+d^2}$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>This process is called <strong>rationalizing</strong> the denominator — same idea as removing radicals from a denominator.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Divide $\\dfrac{3 + 2i}{1 - i}$.',
        steps: [
          'Conjugate of $1 - i$ is $1 + i$.',
          'Multiply: $\\dfrac{(3+2i)(1+i)}{(1-i)(1+i)}$',
          'Denominator: $1^2 + 1^2 = 2$.',
          'Numerator: $3 + 3i + 2i + 2i^2 = 3 + 5i - 2 = 1 + 5i$.',
          '$= \\dfrac{1 + 5i}{2} = \\dfrac{1}{2} + \\dfrac{5}{2}i$'
        ],
        answer: '$\\dfrac{1}{2} + \\dfrac{5}{2}i$'
      },
      {
        problem: 'Find the conjugate of $-4 + 7i$ and compute their product.',
        steps: [
          'Conjugate: $-4 - 7i$.',
          'Product: $(-4)^2 + 7^2 = 16 + 49 = 65$.'
        ],
        answer: '$65$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the conjugate of $5 - 3i$?', choices: ['$-5 + 3i$', '$5 + 3i$', '$3 - 5i$', '$-5 - 3i$'], correct: 1, explanation: 'Flip the sign of the imaginary part: $5 + 3i$.' },
      { type: 'mc', question: 'What is $(2 + 3i)(2 - 3i)$?', choices: ['$4 - 9$', '$4 + 9 = 13$', '$4 - 9i^2$', '$13$'], correct: 3, explanation: '$a^2 + b^2 = 4 + 9 = 13$.' },
      { type: 'fill', question: 'Divide $\\dfrac{4}{2i}$. Enter the simplified imaginary result (e.g., -2i).', answer: '-2i', altAnswers: ['-2*i'], explanation: '$\\frac{4}{2i} \\cdot \\frac{-2i}{-2i} = \\frac{-8i}{4} = -2i$.' },
      { type: 'mc', question: 'Divide $\\dfrac{1+i}{1-i}$.', choices: ['$1$', '$i$', '$-i$', '$2i$'], correct: 1, explanation: '$\\frac{(1+i)^2}{(1-i)(1+i)} = \\frac{1+2i-1}{2} = \\frac{2i}{2} = i$.' },
      { type: 'fill', question: 'What is the real part of $\\dfrac{6}{3+i}$?', answer: '9/5', altAnswers: ['1.8'], explanation: '$\\frac{6(3-i)}{10} = \\frac{18-6i}{10}$. Real part $= \\frac{18}{10} = \\frac{9}{5}$.' }
    ]
  },
  {
    id: '5.4',
    learn: `
      <div class="concept-card">
        <h3>Complex Solutions to Quadratics</h3>
        <p>When the discriminant $\\Delta = b^2 - 4ac < 0$, the quadratic has <strong>two complex conjugate roots</strong>.</p>
        <div class="formula-box">$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Complex roots always come in conjugate pairs: if $p + qi$ is a root, so is $p - qi$.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Writing a Quadratic from Its Complex Roots</h3>
        <p>If the roots are $p + qi$ and $p - qi$, the quadratic is:</p>
        <div class="formula-box">$$(x - (p+qi))(x-(p-qi)) = (x-p)^2 + q^2$$</div>
        <p>This expands to $x^2 - 2px + (p^2 + q^2)$.</p>
      </div>
      <div class="concept-card">
        <h3>Fundamental Theorem Connection</h3>
        <p>A degree-$n$ polynomial has exactly $n$ roots (counting multiplicity) over the complex numbers. A cubic with one real root must have two complex conjugate roots; a quartic may have 0, 2, or 4 complex roots.</p>
        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Complex roots of polynomials with <em>real</em> coefficients always appear in conjugate pairs.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Solve $x^2 - 4x + 13 = 0$.',
        steps: [
          '$\\Delta = 16 - 52 = -36 < 0$.',
          '$x = \\dfrac{4 \\pm \\sqrt{-36}}{2} = \\dfrac{4 \\pm 6i}{2}$',
          '$x = 2 \\pm 3i$'
        ],
        answer: '$x = 2 + 3i$ or $x = 2 - 3i$'
      },
      {
        problem: 'Write a quadratic with integer coefficients whose roots are $1 + 2i$ and $1 - 2i$.',
        steps: [
          'Sum of roots: $(1+2i)+(1-2i) = 2$.',
          'Product of roots: $(1)^2 + (2)^2 = 5$.',
          'Quadratic: $x^2 - 2x + 5 = 0$.'
        ],
        answer: '$x^2 - 2x + 5 = 0$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the discriminant of $x^2 + 2x + 5 = 0$?', choices: ['$24$', '$-16$', '$16$', '$-24$'], correct: 1, explanation: '$\\Delta = 4 - 20 = -16$.' },
      { type: 'mc', question: 'Solve $x^2 + 9 = 0$.', choices: ['$x = \\pm 3$', '$x = \\pm 3i$', '$x = 3i$', 'No solution'], correct: 1, explanation: '$x^2 = -9 \\Rightarrow x = \\pm 3i$.' },
      { type: 'fill', question: 'If $3 - i$ is a root of a quadratic with real coefficients, what is the other root? (Enter e.g., 3+i)', answer: '3+i', altAnswers: ['3 + i', '3 +i'], explanation: 'Complex roots come in conjugate pairs.' },
      { type: 'mc', question: 'Solve $x^2 - 6x + 10 = 0$.', choices: ['$3 \\pm i$', '$3 \\pm 2i$', '$-3 \\pm i$', '$6 \\pm i$'], correct: 0, explanation: '$\\Delta = 36 - 40 = -4$; $x = \\frac{6 \\pm 2i}{2} = 3 \\pm i$.' },
      { type: 'fill', question: 'What is the product of the roots of $x^2 - 4x + 29 = 0$?', answer: '29', altAnswers: [], explanation: 'By Vieta\'s formulas, product of roots $= c/a = 29$.' }
    ]
  }
];
