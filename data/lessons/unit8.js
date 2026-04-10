// data/lessons/unit8.js — Unit 8: Rational Functions

export const lessons = [
  {
    id: '8.1',
    learn: `
      <div class="concept-card">
        <h3>Rational Expressions</h3>
        <p>A <strong>rational expression</strong> is a fraction whose numerator and denominator are polynomials: $\\dfrac{p(x)}{q(x)}$.</p>
        <p>The <strong>domain</strong> excludes all values where $q(x) = 0$.</p>
      </div>
      <div class="concept-card">
        <h3>Simplifying Rational Expressions</h3>
        <ol>
          <li>Factor both numerator and denominator completely.</li>
          <li>Cancel common factors (not terms!).</li>
          <li>State any excluded values.</li>
        </ol>
        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Canceled factors create <strong>holes</strong> (removable discontinuities) in the graph — the expression is undefined at those x-values even after simplifying.</p>
        </div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Always factor before canceling. $\\dfrac{x+2}{x^2-4} = \\dfrac{x+2}{(x-2)(x+2)} = \\dfrac{1}{x-2}$ with a hole at $x = -2$.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Simplify $\\dfrac{x^2 - 9}{x + 3}$.',
        steps: [
          'Factor numerator: $x^2 - 9 = (x-3)(x+3)$.',
          'Cancel $(x+3)$: $= \\dfrac{(x-3)(x+3)}{x+3} = x - 3$.',
          'Excluded value: $x \\ne -3$ (hole at $x = -3$).'
        ],
        answer: '$x - 3$, $x \\ne -3$'
      },
      {
        problem: 'Simplify $\\dfrac{2x^2 + 6x}{4x}$.',
        steps: [
          'Factor numerator: $2x(x + 3)$.',
          'Cancel $2x$: $= \\dfrac{2x(x+3)}{4x} = \\dfrac{x+3}{2}$.',
          'Excluded value: $x \\ne 0$.'
        ],
        answer: '$\\dfrac{x+3}{2}$, $x \\ne 0$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Simplify $\\dfrac{x^2 - 1}{x - 1}$.', choices: ['$x - 1$', '$x + 1$', '$x^2 + 1$', '$1$'], correct: 1, explanation: '$\\frac{(x-1)(x+1)}{x-1} = x+1$, $x \\ne 1$.' },
      { type: 'mc', question: 'What values must be excluded from $\\dfrac{x}{x^2 - 4}$?', choices: ['$x = 0$', '$x = 4$', '$x = \\pm 2$', '$x = -4$'], correct: 2, explanation: '$x^2 - 4 = (x-2)(x+2) = 0$ when $x = \\pm 2$.' },
      { type: 'fill', question: 'Simplify $\\dfrac{3x}{9x^2}$. Enter simplified form.', answer: '1/(3x)', altAnswers: ['1/3x'], explanation: '$\\frac{3x}{9x^2} = \\frac{1}{3x}$.' },
      { type: 'mc', question: 'Simplify $\\dfrac{x^2 + 5x + 6}{x + 2}$.', choices: ['$x + 3$', '$x + 2$', '$x^2 + 3$', '$x - 3$'], correct: 0, explanation: '$x^2+5x+6 = (x+2)(x+3)$; cancel $(x+2)$: $x+3$.' },
      { type: 'mc', question: 'A canceled factor in a rational expression creates:', choices: ['A vertical asymptote', 'A horizontal asymptote', 'A hole', 'A y-intercept'], correct: 2, explanation: 'Canceled zeros produce holes (removable discontinuities), not asymptotes.' }
    ]
  },
  {
    id: '8.2',
    learn: `
      <div class="concept-card">
        <h3>Multiplying Rational Expressions</h3>
        <p>Multiply numerators and multiply denominators, then simplify.</p>
        <div class="formula-box">$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Factor everything <em>before</em> multiplying — cross-cancel common factors to keep numbers small.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Dividing Rational Expressions</h3>
        <p>Flip the second fraction (take its reciprocal), then multiply.</p>
        <div class="formula-box">$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}$$</div>
      </div>`,
    examples: [
      {
        problem: 'Multiply $\\dfrac{x^2-4}{x+3} \\cdot \\dfrac{x+3}{x-2}$.',
        steps: [
          'Factor: $\\dfrac{(x-2)(x+2)}{x+3} \\cdot \\dfrac{x+3}{x-2}$.',
          'Cancel $(x+2)$ and $(x-2)$.',
          'Result: $x + 2$.'
        ],
        answer: '$x + 2$'
      },
      {
        problem: 'Divide $\\dfrac{x^2-1}{x} \\div \\dfrac{x+1}{x^2}$.',
        steps: [
          'Flip and multiply: $\\dfrac{x^2-1}{x} \\cdot \\dfrac{x^2}{x+1}$.',
          'Factor: $\\dfrac{(x-1)(x+1)}{x} \\cdot \\dfrac{x^2}{x+1}$.',
          'Cancel $(x+1)$ and one $x$: $= x(x-1) = x^2 - x$.'
        ],
        answer: '$x^2 - x$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Simplify $\\dfrac{x^2-1}{x+1}$.', choices: ['$x-1$', '$x+1$', '$x^2-1$', '$1$'], correct: 0, explanation: '$\\frac{(x-1)(x+1)}{x+1} = x-1$.' },
      { type: 'mc', question: 'What is $\\dfrac{a}{b} \\div \\dfrac{c}{d}$?', choices: ['$\\frac{ac}{bd}$', '$\\frac{ad}{bc}$', '$\\frac{bc}{ad}$', '$\\frac{ab}{cd}$'], correct: 1, explanation: 'Flip and multiply: $\\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}$.' },
      { type: 'fill', question: 'Multiply $\\dfrac{2}{x} \\cdot \\dfrac{x^2}{4}$. Enter simplified result.', answer: 'x/2', altAnswers: ['x / 2'], explanation: '$\\frac{2x^2}{4x} = \\frac{x}{2}$.' },
      { type: 'mc', question: 'Divide $\\dfrac{6x}{5} \\div \\dfrac{3x^2}{10}$.', choices: ['$\\frac{4}{x}$', '$\\frac{x}{4}$', '$\\frac{18x^3}{50}$', '$4x$'], correct: 0, explanation: '$\\frac{6x}{5} \\cdot \\frac{10}{3x^2} = \\frac{60x}{15x^2} = \\frac{4}{x}$.' },
      { type: 'mc', question: 'Multiply $\\dfrac{x}{x+2} \\cdot \\dfrac{x+2}{x-1}$.', choices: ['$\\frac{x}{x-1}$', '$\\frac{x-1}{x}$', '$x(x-1)$', '$\\frac{x^2+2x}{x+1}$'], correct: 0, explanation: 'Cancel $(x+2)$: $\\frac{x}{x-1}$.' }
    ]
  },
  {
    id: '8.3',
    learn: `
      <div class="concept-card">
        <h3>Adding and Subtracting Rational Expressions</h3>
        <p>To add or subtract fractions, you need a <strong>common denominator</strong>. Find the <strong>LCD</strong> (Least Common Denominator) by finding the LCM of all denominators.</p>
        <ol>
          <li>Factor all denominators.</li>
          <li>LCD = product of each distinct factor at its highest power.</li>
          <li>Rewrite each fraction with the LCD.</li>
          <li>Combine numerators; keep the LCD.</li>
          <li>Simplify the result.</li>
        </ol>
        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>When subtracting, distribute the negative sign to <em>every</em> term in the second numerator.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Add $\\dfrac{2}{x} + \\dfrac{3}{x+1}$.',
        steps: [
          'LCD $= x(x+1)$.',
          '$= \\dfrac{2(x+1)}{x(x+1)} + \\dfrac{3x}{x(x+1)}$',
          '$= \\dfrac{2x+2+3x}{x(x+1)} = \\dfrac{5x+2}{x(x+1)}$.'
        ],
        answer: '$\\dfrac{5x+2}{x(x+1)}$'
      },
      {
        problem: 'Subtract $\\dfrac{3}{x-2} - \\dfrac{1}{x+2}$.',
        steps: [
          'LCD $= (x-2)(x+2)$.',
          '$= \\dfrac{3(x+2) - 1(x-2)}{(x-2)(x+2)}$',
          '$= \\dfrac{3x+6-x+2}{(x-2)(x+2)} = \\dfrac{2x+8}{(x-2)(x+2)}$.',
          'Factor: $= \\dfrac{2(x+4)}{(x-2)(x+2)}$.'
        ],
        answer: '$\\dfrac{2(x+4)}{(x-2)(x+2)}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Add $\\dfrac{1}{x} + \\dfrac{2}{x}$.', choices: ['$\\frac{3}{x^2}$', '$\\frac{3}{x}$', '$\\frac{3}{2x}$', '$\\frac{1}{x}$'], correct: 1, explanation: 'Same denominator: $\\frac{1+2}{x} = \\frac{3}{x}$.' },
      { type: 'mc', question: 'What is the LCD of $\\dfrac{1}{x+2}$ and $\\dfrac{1}{x-3}$?', choices: ['$(x+2)$', '$(x-3)$', '$(x+2)(x-3)$', '$x^2 - 1$'], correct: 2, explanation: 'LCD = product of distinct denominators.' },
      { type: 'fill', question: 'Add $\\dfrac{1}{3} + \\dfrac{1}{x}$. Enter combined numerator.', answer: 'x+3', altAnswers: ['3+x'], explanation: 'LCD $= 3x$; $\\frac{x}{3x} + \\frac{3}{3x} = \\frac{x+3}{3x}$.' },
      { type: 'mc', question: 'Subtract $\\dfrac{x}{x+1} - \\dfrac{1}{x+1}$.', choices: ['$\\frac{x-1}{x+1}$', '$\\frac{x+1}{x+1}$', '$\\frac{1}{x+1}$', '$0$'], correct: 0, explanation: 'Same denominator: $\\frac{x-1}{x+1}$.' },
      { type: 'mc', question: 'Simplify $\\dfrac{2}{x} + \\dfrac{x}{2}$.', choices: ['$\\frac{x^2+4}{2x}$', '$\\frac{2x}{x}$', '$\\frac{x+2}{x}$', '$\\frac{4+x^2}{x}$'], correct: 0, explanation: 'LCD $= 2x$: $\\frac{4+x^2}{2x}$.' }
    ]
  },
  {
    id: '8.4',
    learn: `
      <div class="concept-card">
        <h3>Solving Rational Equations</h3>
        <p>Multiply both sides by the LCD to <strong>clear all denominators</strong>, then solve the resulting polynomial equation.</p>
        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p><strong>Always check for extraneous solutions!</strong> Any solution that makes a denominator zero in the original equation must be rejected.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Cross-Multiplication (Special Case)</h3>
        <p>When both sides are single fractions: $\\dfrac{a}{b} = \\dfrac{c}{d} \\implies ad = bc$.</p>
      </div>`,
    examples: [
      {
        problem: 'Solve $\\dfrac{2}{x} + 1 = \\dfrac{3}{x}$.',
        steps: [
          'Multiply by LCD $= x$: $2 + x = 3$.',
          '$x = 1$.',
          'Check: $2/1 + 1 = 3/1$ ✓.'
        ],
        answer: '$x = 1$'
      },
      {
        problem: 'Solve $\\dfrac{1}{x-2} + \\dfrac{1}{x+2} = \\dfrac{4}{x^2-4}$.',
        steps: [
          'Note $x^2-4 = (x-2)(x+2)$; LCD $= (x-2)(x+2)$.',
          'Multiply through: $(x+2) + (x-2) = 4$.',
          '$2x = 4 \\Rightarrow x = 2$.',
          'Check: $x = 2$ makes denominators zero — <strong>extraneous</strong>! No solution.'
        ],
        answer: 'No solution'
      }
    ],
    practice: [
      { type: 'mc', question: 'Solve $\\dfrac{3}{x} = 6$.', choices: ['$x = 2$', '$x = 1/2$', '$x = 18$', '$x = 3$'], correct: 1, explanation: '$3 = 6x \\Rightarrow x = 1/2$.' },
      { type: 'fill', question: 'Solve $\\dfrac{1}{x-1} = 2$. Enter x.', answer: '3/2', altAnswers: ['1.5'], explanation: '$1 = 2(x-1) \\Rightarrow 2x = 3 \\Rightarrow x = 3/2$.' },
      { type: 'mc', question: 'Solve $\\dfrac{x}{x+1} = \\dfrac{3}{x+1}$.', choices: ['$x = 3$', '$x = -1$', '$x = 0$', 'No solution'], correct: 0, explanation: 'Multiply by $(x+1)$: $x = 3$. Check: $x = -1$ excluded; $x = 3$ works.' },
      { type: 'mc', question: 'What do you do first when solving a rational equation?', choices: ['Move all terms to one side', 'Multiply both sides by the LCD', 'Take the log of both sides', 'Factor the numerator'], correct: 1, explanation: 'Multiplying by the LCD clears all denominators.' },
      { type: 'fill', question: 'Solve $\\dfrac{4}{x} - \\dfrac{1}{2} = \\dfrac{3}{2x}$. Enter x.', answer: '5', altAnswers: [], explanation: 'Multiply by $2x$: $8 - x = 3 \\Rightarrow x = 5$. Check: $4/5 - 1/2 = 8/10-5/10=3/10=3/(10)$ ✓.' }
    ]
  },
  {
    id: '8.5',
    learn: `
      <div class="concept-card">
        <h3>Graphing Rational Functions — Key Features</h3>
        <p>For $f(x) = \\dfrac{p(x)}{q(x)}$ (fully simplified):</p>
        <ul>
          <li><strong>Vertical Asymptotes (VA)</strong>: where $q(x) = 0$ (after canceling)</li>
          <li><strong>Holes</strong>: canceled factors — undefined points on the graph</li>
          <li><strong>Horizontal Asymptote (HA)</strong>: determined by degree comparison</li>
          <li><strong>x-intercepts</strong>: zeros of the numerator (after canceling)</li>
          <li><strong>y-intercept</strong>: $f(0)$</li>
        </ul>
        <div class="formula-box">
          $$\\deg p < \\deg q: \\; y = 0 \\qquad \\deg p = \\deg q: \\; y = \\frac{a_n}{b_n} \\qquad \\deg p > \\deg q: \\text{ oblique}$$
        </div>
      </div>
      <div class="concept-card">
        <h3>Behavior Near Asymptotes</h3>
        <p>Test a value on each side of every VA to determine whether the graph goes toward $+\\infty$ or $-\\infty$.</p>
      </div>`,
    examples: [
      {
        problem: 'Sketch key features of $f(x) = \\dfrac{x-1}{x+2}$.',
        steps: [
          'No common factors → no holes.',
          'VA: $x = -2$.',
          'HA: equal degrees → $y = 1/1 = 1$.',
          'x-intercept: $x = 1$.',
          'y-intercept: $f(0) = -1/2$.'
        ],
        answer: 'VA: $x=-2$; HA: $y=1$; x-int: $(1,0)$; y-int: $(0,-\\frac{1}{2})$'
      },
      {
        problem: 'Find the HA and VA of $f(x) = \\dfrac{5}{x^2+1}$.',
        steps: [
          'Denominator $x^2+1 > 0$ always → no VA.',
          '$\\deg p = 0 < \\deg q = 2$ → HA: $y = 0$.'
        ],
        answer: 'No VA; HA: $y = 0$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Find the VA of $f(x) = \\dfrac{2}{x-5}$.', choices: ['$y = 2$', '$x = -5$', '$x = 5$', '$y = 0$'], correct: 2, explanation: 'Set denominator = 0: $x = 5$.' },
      { type: 'mc', question: 'Find the HA of $f(x) = \\dfrac{3x^2}{x^2-1}$.', choices: ['$y = 0$', '$y = 3$', '$y = -1$', 'No HA'], correct: 1, explanation: 'Equal degrees; HA = ratio of leading coefficients = $3/1 = 3$.' },
      { type: 'fill', question: 'Find the y-intercept of $f(x) = \\dfrac{x+2}{x-1}$.', answer: '-2', altAnswers: [], explanation: '$f(0) = 2/(-1) = -2$.' },
      { type: 'mc', question: 'What is the x-intercept of $f(x) = \\dfrac{x-4}{x+1}$?', choices: ['$x = -1$', '$x = 4$', '$x = -4$', '$x = 1$'], correct: 1, explanation: 'Set numerator = 0: $x - 4 = 0 \\Rightarrow x = 4$.' },
      { type: 'mc', question: 'Which function has a hole at $x = 3$?', choices: ['$\\frac{1}{x-3}$', '$\\frac{x+3}{x-3}$', '$\\frac{x^2-9}{x-3}$', '$\\frac{3}{x}$'], correct: 2, explanation: '$x^2-9 = (x-3)(x+3)$; canceling $(x-3)$ creates a hole at $x=3$.' }
    ]
  }
];
