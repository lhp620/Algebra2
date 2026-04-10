// data/lessons/unit7.js — Unit 7: Exponential & Logarithmic Functions

export const lessons = [
  {
    id: '7.1',
    learn: `
      <div class="concept-card">
        <h3>Exponential Functions</h3>
        <p>An <strong>exponential function</strong> has the form $f(x) = a \\cdot b^x$ where:</p>
        <ul>
          <li>$a$ = initial value (y-intercept when $x=0$)</li>
          <li>$b$ = base (must be positive, $b \\ne 1$)</li>
          <li>$b > 1$: exponential <strong>growth</strong></li>
          <li>$0 < b < 1$: exponential <strong>decay</strong></li>
        </ul>
        <div class="formula-box">$$f(x) = a \\cdot b^x, \\quad b > 0,\\; b \\ne 1$$</div>
        <p>Key features: domain $(-\\infty, \\infty)$, range $(0, \\infty)$ (if $a > 0$), horizontal asymptote $y = 0$.</p>
      </div>
      <div class="concept-card">
        <h3>Transformations of Exponential Graphs</h3>
        <div class="formula-box">$$f(x) = a \\cdot b^{x-h} + k$$</div>
        <ul>
          <li>$h$: horizontal shift (right if $h>0$)</li>
          <li>$k$: vertical shift; moves the asymptote to $y = k$</li>
          <li>$|a| > 1$: vertical stretch; $|a| < 1$: vertical compression</li>
          <li>$a < 0$: reflection over x-axis</li>
        </ul>
      </div>`,
    examples: [
      {
        problem: 'State whether $f(x) = 3 \\cdot (0.5)^x$ represents growth or decay, and find $f(0)$ and $f(2)$.',
        steps: [
          'Base $b = 0.5 < 1$ → exponential decay.',
          '$f(0) = 3 \\cdot 1 = 3$.',
          '$f(2) = 3 \\cdot 0.25 = 0.75$.'
        ],
        answer: 'Decay; $f(0)=3$, $f(2)=0.75$'
      },
      {
        problem: 'Identify the asymptote of $g(x) = 2^x - 5$.',
        steps: [
          'The base function $2^x$ has asymptote $y = 0$.',
          'Shifting down 5 moves it to $y = -5$.'
        ],
        answer: '$y = -5$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Which function represents exponential growth?', choices: ['$f(x) = 5 \\cdot (0.8)^x$', '$f(x) = 2 \\cdot (1.3)^x$', '$f(x) = 3 \\cdot (0.2)^x$', '$f(x) = (0.9)^x$'], correct: 1, explanation: 'Base $1.3 > 1$ → growth.' },
      { type: 'fill', question: 'Evaluate $f(3)$ for $f(x) = 2^x$. Enter the number.', answer: '8', altAnswers: [], explanation: '$2^3 = 8$.' },
      { type: 'mc', question: 'What is the y-intercept of $f(x) = 4 \\cdot 3^x$?', choices: ['$3$', '$4$', '$12$', '$1$'], correct: 1, explanation: '$f(0) = 4 \\cdot 3^0 = 4 \\cdot 1 = 4$.' },
      { type: 'mc', question: 'What is the horizontal asymptote of $f(x) = 5^x + 3$?', choices: ['$y = 5$', '$y = 0$', '$y = 3$', '$y = -3$'], correct: 2, explanation: 'Vertical shift +3 moves asymptote to $y = 3$.' },
      { type: 'fill', question: 'Evaluate $f(0)$ for $f(x) = 7 \\cdot (1.5)^x$.', answer: '7', altAnswers: [], explanation: '$f(0) = 7 \\cdot 1 = 7$ (any base to the 0 power is 1).' }
    ]
  },
  {
    id: '7.2',
    learn: `
      <div class="concept-card">
        <h3>The Natural Base $e$</h3>
        <p>$e \\approx 2.71828$ is called Euler's number. It arises naturally in continuous growth situations.</p>
        <div class="formula-box">$$e = \\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n \\approx 2.71828$$</div>
        <p>The function $f(x) = e^x$ is the <strong>natural exponential function</strong>.</p>
      </div>
      <div class="concept-card">
        <h3>Continuous Growth/Decay Formula</h3>
        <div class="formula-box">$$A = Pe^{rt}$$</div>
        <ul>
          <li>$P$ = principal (initial amount)</li>
          <li>$r$ = continuous growth rate (positive) or decay rate (negative)</li>
          <li>$t$ = time</li>
          <li>$A$ = amount after time $t$</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Compare to periodic compound interest: $A = P\\left(1+\\frac{r}{n}\\right)^{nt}$. As $n \\to \\infty$, this approaches $Pe^{rt}$.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: '$1000 is invested at 5% continuous growth for 3 years. Find the final amount.',
        steps: [
          '$A = Pe^{rt} = 1000 \\cdot e^{0.05 \\cdot 3}$',
          '$= 1000 \\cdot e^{0.15}$',
          '$\\approx 1000 \\cdot 1.1618 \\approx \\$1161.83$'
        ],
        answer: '$\\approx \\$1161.83$'
      },
      {
        problem: 'A substance decays at $r = -0.03$ per year. What fraction remains after 10 years?',
        steps: [
          '$A/P = e^{-0.03 \\cdot 10} = e^{-0.3}$',
          '$\\approx 0.7408$, so about $74.1\\%$ remains.'
        ],
        answer: '$\\approx 74.1\\%$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is $e^0$?', choices: ['$0$', '$1$', '$e$', 'Undefined'], correct: 1, explanation: 'Any nonzero number to the 0 power equals 1.' },
      { type: 'mc', question: 'Which formula gives continuous compound interest?', choices: ['$A = P(1+r)^t$', '$A = Prt$', '$A = Pe^{rt}$', '$A = P/e^{rt}$'], correct: 2, explanation: 'Continuous compounding uses $A = Pe^{rt}$.' },
      { type: 'fill', question: 'Using $A = Pe^{rt}$, find $A$ if $P=500$, $r=0.02$, $t=0$. Enter the number.', answer: '500', altAnswers: [], explanation: '$A = 500 e^0 = 500 \\cdot 1 = 500$.' },
      { type: 'mc', question: 'If $r < 0$ in $A = Pe^{rt}$, the model represents:', choices: ['Growth', 'Decay', 'Constant', 'Oscillation'], correct: 1, explanation: 'Negative $r$ means the exponent decreases → decay.' },
      { type: 'fill', question: '$e^1$ rounded to 2 decimal places equals:', answer: '2.72', altAnswers: ['2.71', '2.718'], explanation: '$e \\approx 2.71828 \\approx 2.72$.' }
    ]
  },
  {
    id: '7.3',
    learn: `
      <div class="concept-card">
        <h3>Logarithms as Inverses</h3>
        <p>The <strong>logarithm base $b$</strong> is the inverse of the exponential base $b$:</p>
        <div class="formula-box">$$\\log_b x = y \\iff b^y = x$$</div>
        <p>Special bases: $\\log x = \\log_{10} x$ (common log), $\\ln x = \\log_e x$ (natural log).</p>
      </div>
      <div class="concept-card">
        <h3>Evaluating Logarithms</h3>
        <p>Ask: "What power do I raise $b$ to in order to get $x$?"</p>
        <ul>
          <li>$\\log_2 8 = 3$ because $2^3 = 8$</li>
          <li>$\\log_{10} 1000 = 3$ because $10^3 = 1000$</li>
          <li>$\\ln 1 = 0$ because $e^0 = 1$</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>$\\log_b b = 1$ and $\\log_b 1 = 0$ always.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Graph of $y = \\log_b x$</h3>
        <p>Domain: $(0, \\infty)$; Range: $(-\\infty, \\infty)$; x-intercept at $(1, 0)$; vertical asymptote at $x = 0$.</p>
        <p>It is the mirror image of $y = b^x$ reflected over the line $y = x$.</p>
      </div>`,
    examples: [
      {
        problem: 'Evaluate $\\log_3 81$.',
        steps: [
          'Ask: $3^? = 81$.',
          '$3^4 = 81$, so $\\log_3 81 = 4$.'
        ],
        answer: '$4$'
      },
      {
        problem: 'Write $\\log_5 125 = 3$ in exponential form.',
        steps: ['$\\log_b x = y \\iff b^y = x$.', '$5^3 = 125$.'],
        answer: '$5^3 = 125$'
      }
    ],
    practice: [
      { type: 'fill', question: 'Evaluate $\\log_2 32$.', answer: '5', altAnswers: [], explanation: '$2^5 = 32$.' },
      { type: 'mc', question: 'Evaluate $\\log_{10} 0.001$.', choices: ['$3$', '$-3$', '$0.001$', '$-0.001$'], correct: 1, explanation: '$10^{-3} = 0.001$, so $\\log 0.001 = -3$.' },
      { type: 'fill', question: 'Evaluate $\\log_7 1$.', answer: '0', altAnswers: [], explanation: '$7^0 = 1$, so $\\log_7 1 = 0$.' },
      { type: 'mc', question: 'Which is the domain of $f(x) = \\log_2 x$?', choices: ['All reals', '$x > 0$', '$x \\ge 0$', '$x \\ne 0$'], correct: 1, explanation: 'Logarithms are only defined for positive inputs.' },
      { type: 'mc', question: 'Evaluate $\\ln e^5$.', choices: ['$e^5$', '$5e$', '$5$', '$\\ln 5$'], correct: 2, explanation: '$\\ln e^x = x$, so $\\ln e^5 = 5$.' }
    ]
  },
  {
    id: '7.4',
    learn: `
      <div class="concept-card">
        <h3>Properties of Logarithms</h3>
        <div class="formula-box">
          $$\\log_b(mn) = \\log_b m + \\log_b n \\quad \\text{(Product Rule)}$$
          $$\\log_b\\!\\left(\\frac{m}{n}\\right) = \\log_b m - \\log_b n \\quad \\text{(Quotient Rule)}$$
          $$\\log_b(m^p) = p\\log_b m \\quad \\text{(Power Rule)}$$
        </div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>These properties come directly from exponent rules: $b^m \\cdot b^n = b^{m+n}$, etc.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Change of Base Formula</h3>
        <div class="formula-box">$$\\log_b x = \\frac{\\ln x}{\\ln b} = \\frac{\\log x}{\\log b}$$</div>
        <p>Use this to evaluate any logarithm on a calculator, which only has $\\log$ (base 10) and $\\ln$ (base $e$) keys.</p>
      </div>`,
    examples: [
      {
        problem: 'Expand $\\log_2(8x^3)$.',
        steps: [
          'Product rule: $\\log_2 8 + \\log_2 x^3$',
          '$= 3 + 3\\log_2 x$ (since $\\log_2 8 = 3$ and power rule).'
        ],
        answer: '$3 + 3\\log_2 x$'
      },
      {
        problem: 'Condense $3\\ln x + \\ln 2 - \\ln y$.',
        steps: [
          'Power rule: $\\ln x^3 + \\ln 2 - \\ln y$',
          'Product: $\\ln(2x^3) - \\ln y$',
          'Quotient: $\\ln\\!\\left(\\dfrac{2x^3}{y}\\right)$'
        ],
        answer: '$\\ln\\!\\left(\\dfrac{2x^3}{y}\\right)$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Which equals $\\log_b(\\frac{x}{y})$?', choices: ['$\\log_b x + \\log_b y$', '$\\log_b x - \\log_b y$', '$\\log_b x \\cdot \\log_b y$', '$\\frac{\\log_b x}{\\log_b y}$'], correct: 1, explanation: 'Quotient rule: $\\log_b(m/n) = \\log_b m - \\log_b n$.' },
      { type: 'fill', question: 'Expand $\\log(x^4)$. Enter using the Power Rule (e.g., 4log(x)).', answer: '4log(x)', altAnswers: ['4 log(x)', '4*log(x)'], explanation: 'Power rule: $4\\log x$.' },
      { type: 'mc', question: 'Use Change of Base to compute $\\log_3 20$ using natural log:', choices: ['$\\frac{\\ln 3}{\\ln 20}$', '$\\ln 3 - \\ln 20$', '$\\frac{\\ln 20}{\\ln 3}$', '$\\ln(20/3)$'], correct: 2, explanation: '$\\log_3 20 = \\frac{\\ln 20}{\\ln 3}$.' },
      { type: 'mc', question: 'Condense $\\log 5 + \\log x$.', choices: ['$\\log(5+x)$', '$\\log(5x)$', '$5\\log x$', '$\\log x - \\log 5$'], correct: 1, explanation: 'Product rule: $\\log 5 + \\log x = \\log(5x)$.' },
      { type: 'fill', question: 'Expand $\\ln\\sqrt{x}$. Enter as a fraction times ln(x) (e.g., (1/2)ln(x)).', answer: '(1/2)ln(x)', altAnswers: ['0.5ln(x)', '(1/2)*ln(x)'], explanation: '$\\ln x^{1/2} = \\frac{1}{2}\\ln x$.' }
    ]
  },
  {
    id: '7.5',
    learn: `
      <div class="concept-card">
        <h3>Solving Exponential Equations</h3>
        <p><strong>Strategy 1 — Same Base:</strong> If both sides can be written with the same base, set the exponents equal.</p>
        <div class="formula-box">$$b^f = b^g \\implies f = g$$</div>
        <p><strong>Strategy 2 — Take a Logarithm:</strong> When you can't match bases, take $\\log$ or $\\ln$ of both sides and use the Power Rule.</p>
        <div class="formula-box">$$b^x = c \\implies x = \\frac{\\log c}{\\log b} = \\frac{\\ln c}{\\ln b}$$</div>
      </div>
      <div class="concept-card">
        <h3>Solving Logarithmic Equations</h3>
        <p>Condense logarithms to a single log, then convert to exponential form.</p>
        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Always check that arguments of logarithms are positive in the original equation — extraneous solutions can appear!</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Solve $3^{x+1} = 27$.',
        steps: [
          'Write 27 as a power of 3: $27 = 3^3$.',
          '$3^{x+1} = 3^3 \\Rightarrow x+1 = 3$.',
          '$x = 2$.'
        ],
        answer: '$x = 2$'
      },
      {
        problem: 'Solve $5^x = 12$.',
        steps: [
          'Take $\\ln$ of both sides: $x \\ln 5 = \\ln 12$.',
          '$x = \\dfrac{\\ln 12}{\\ln 5} \\approx \\dfrac{2.485}{1.609} \\approx 1.544$.'
        ],
        answer: '$x \\approx 1.544$'
      },
      {
        problem: 'Solve $\\log_2(3x - 1) = 4$.',
        steps: [
          'Convert: $2^4 = 3x - 1$.',
          '$16 = 3x - 1 \\Rightarrow 3x = 17$.',
          '$x = \\dfrac{17}{3}$.'
        ],
        answer: '$x = \\dfrac{17}{3}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Solve $2^x = 32$.', choices: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 16$'], correct: 1, explanation: '$32 = 2^5 \\Rightarrow x = 5$.' },
      { type: 'fill', question: 'Solve $\\log_3 x = 4$. Enter x.', answer: '81', altAnswers: [], explanation: '$x = 3^4 = 81$.' },
      { type: 'mc', question: 'Solve $e^x = 7$ (give exact form).', choices: ['$x = \\log 7$', '$x = \\ln 7$', '$x = 7e$', '$x = e^7$'], correct: 1, explanation: '$\\ln$ both sides: $x = \\ln 7$.' },
      { type: 'mc', question: 'Solve $4^{2x} = 8$.', choices: ['$x = \\frac{3}{4}$', '$x = 2$', '$x = \\frac{1}{2}$', '$x = 3$'], correct: 0, explanation: '$2^{4x} = 2^3 \\Rightarrow 4x = 3 \\Rightarrow x = 3/4$.' },
      { type: 'fill', question: 'Solve $\\log(2x) = 2$. Enter x.', answer: '50', altAnswers: [], explanation: '$2x = 10^2 = 100 \\Rightarrow x = 50$.' }
    ]
  },
  {
    id: '7.6',
    learn: `
      <div class="concept-card">
        <h3>Solving Logarithmic Equations</h3>
        <p><strong>Strategy 1 — Single Log:</strong> Convert directly to exponential form.</p>
        <div class="formula-box">$$\\log_b(x) = c \\implies x = b^c$$</div>
        <p><strong>Strategy 2 — Multiple Logs:</strong> Use log properties to condense to one log on each side, then drop the logs.</p>
        <div class="formula-box">$$\\log_b(f(x)) = \\log_b(g(x)) \\implies f(x) = g(x)$$</div>
        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Always check solutions! Substituting back may reveal <strong>extraneous solutions</strong> where an argument of a log becomes negative or zero.</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Solving Equations with Both Types</h3>
        <p>Some equations mix exponentials and logarithms. Use the relationship $b^{\\log_b x} = x$ and $\\log_b(b^x) = x$ to simplify.</p>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>$e^{\\ln x} = x$ and $\\ln(e^x) = x$ — these inverse relationships are frequently useful.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Solve $\\log_3(2x + 1) = 3$.',
        steps: [
          'Convert to exponential: $2x + 1 = 3^3 = 27$.',
          '$2x = 26 \\Rightarrow x = 13$.',
          'Check: $\\log_3(27) = 3$ ✓.'
        ],
        answer: '$x = 13$'
      },
      {
        problem: 'Solve $\\ln(x) + \\ln(x - 3) = \\ln(10)$.',
        steps: [
          'Product rule: $\\ln(x(x-3)) = \\ln(10)$.',
          'Drop logs: $x^2 - 3x = 10$.',
          '$x^2 - 3x - 10 = 0 \\Rightarrow (x-5)(x+2) = 0$.',
          '$x = 5$ or $x = -2$; reject $x = -2$ (log of negative).',
          '$x = 5$.'
        ],
        answer: '$x = 5$'
      },
      {
        problem: 'Solve $\\log(x+2) - \\log(x-1) = 1$.',
        steps: [
          'Quotient rule: $\\log\\dfrac{x+2}{x-1} = 1$.',
          'Convert: $\\dfrac{x+2}{x-1} = 10$.',
          '$x + 2 = 10x - 10 \\Rightarrow 12 = 9x \\Rightarrow x = 4/3$.',
          'Check: both arguments positive ✓.'
        ],
        answer: '$x = \\dfrac{4}{3}$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Solve $\\log_2 x = 5$.', choices: ['$x = 10$', '$x = 25$', '$x = 32$', '$x = 64$'], correct: 2, explanation: '$x = 2^5 = 32$.' },
      { type: 'fill', question: 'Solve $\\ln x = 3$. Enter exact value (e.g., e^3).', answer: 'e^3', altAnswers: ['e³'], explanation: '$x = e^3$.' },
      { type: 'mc', question: 'Solve $\\log(x) + \\log(4) = 2$.', choices: ['$x = 25$', '$x = 4$', '$x = 100$', '$x = 10$'], correct: 0, explanation: '$\\log(4x) = 2 \\Rightarrow 4x = 100 \\Rightarrow x = 25$.' },
      { type: 'mc', question: 'Which solution to $\\log(x-1) + \\log(x+2) = 1$ is extraneous?', choices: ['$x = 3$', '$x = -4$', 'Both', 'Neither'], correct: 1, explanation: '$x = -4$ makes $\\log(-5)$ undefined; reject it.' },
      { type: 'fill', question: 'Solve $\\log_5(3x - 1) = 2$. Enter x.', answer: '26/3', altAnswers: ['8.67', '8.666'], explanation: '$3x - 1 = 25 \\Rightarrow 3x = 26 \\Rightarrow x = 26/3$.' }
    ]
  },
  {
    id: '7.7',
    learn: `
      <div class="concept-card">
        <h3>The Natural Logarithm $\\ln$</h3>
        <p>The <strong>natural logarithm</strong> $\\ln x = \\log_e x$ is the logarithm with base $e \\approx 2.71828$.</p>
        <div class="formula-box">$$\\ln x = y \\iff e^y = x$$</div>
        <p>All log properties hold for $\\ln$:</p>
        <div class="formula-box">$$\\ln(mn) = \\ln m + \\ln n \\qquad \\ln(m^p) = p\\ln m \\qquad \\ln e = 1 \\qquad \\ln 1 = 0$$</div>
      </div>
      <div class="concept-card">
        <h3>$\\ln$ and Continuous Growth</h3>
        <p>The continuous growth formula $A = Pe^{rt}$ can be solved for $t$ using $\\ln$:</p>
        <div class="formula-box">$$t = \\frac{\\ln(A/P)}{r}$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p><strong>Rule of 70:</strong> For continuous growth, doubling time $\\approx 70/r\\%$. (This comes from $\\ln 2 \\approx 0.693$.)</p>
        </div>
      </div>
      <div class="concept-card">
        <h3>Comparing $\\log$ and $\\ln$</h3>
        <ul>
          <li>$\\log x = \\log_{10} x$: common log, useful in pH, decibels, Richter scale</li>
          <li>$\\ln x = \\log_e x$: natural log, appears in calculus and continuous growth</li>
          <li>Change of base: $\\log_b x = \\dfrac{\\ln x}{\\ln b}$</li>
        </ul>
      </div>`,
    examples: [
      {
        problem: 'Solve $e^{2x} = 15$.',
        steps: [
          'Take $\\ln$ of both sides: $2x = \\ln 15$.',
          '$x = \\dfrac{\\ln 15}{2} \\approx \\dfrac{2.708}{2} \\approx 1.354$.'
        ],
        answer: '$x = \\dfrac{\\ln 15}{2} \\approx 1.354$'
      },
      {
        problem: '$500 is invested at 6% continuous growth. When will it double?',
        steps: [
          'Set $A = 1000$: $1000 = 500e^{0.06t}$.',
          '$e^{0.06t} = 2 \\Rightarrow 0.06t = \\ln 2$.',
          '$t = \\dfrac{\\ln 2}{0.06} \\approx \\dfrac{0.693}{0.06} \\approx 11.55$ years.'
        ],
        answer: '$\\approx 11.55$ years'
      }
    ],
    practice: [
      { type: 'mc', question: 'Evaluate $\\ln e^4$.', choices: ['$4e$', '$e^4$', '$4$', '$\\ln 4$'], correct: 2, explanation: '$\\ln e^x = x$, so $\\ln e^4 = 4$.' },
      { type: 'fill', question: 'Solve $e^x = 20$. Enter as ln(20).', answer: 'ln(20)', altAnswers: ['ln20'], explanation: 'Take $\\ln$: $x = \\ln 20$.' },
      { type: 'mc', question: 'Simplify $\\ln(e^3 \\cdot e^2)$.', choices: ['$5$', '$6$', '$e^5$', '$\\ln 5$'], correct: 0, explanation: '$\\ln(e^5) = 5$.' },
      { type: 'mc', question: 'Use $t = \\ln(A/P)/r$ to find how long $\\$100$ takes to grow to $\\$200$ at $r=0.05$.', choices: ['$\\approx 10$ yr', '$\\approx 13.86$ yr', '$\\approx 20$ yr', '$\\approx 7$ yr'], correct: 1, explanation: '$t = \\ln(2)/0.05 \\approx 0.693/0.05 \\approx 13.86$ yr.' },
      { type: 'fill', question: 'Evaluate $\\ln 1$.', answer: '0', altAnswers: [], explanation: '$e^0 = 1$, so $\\ln 1 = 0$.' }
    ]
  }
];
