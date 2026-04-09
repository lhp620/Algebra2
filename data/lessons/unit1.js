// data/lessons/unit1.js — Unit 1: Equations & Inequalities

export const lessons = [
  // ── 1.1 ──────────────────────────────────────────────────────────────────
  {
    id: '1.1',
    learn: `
      <div class="concept-card">
        <h2>📖 Solving Linear Equations</h2>
        <p>A <strong>linear equation</strong> has exactly one variable raised to the first power. The goal is to isolate the variable by applying <em>inverse operations</em> — doing the same thing to both sides of the equation.</p>

        <h3>The Golden Rule</h3>
        <p>Whatever you do to one side of the equation, you <strong>must</strong> do to the other side. This keeps the equation balanced.</p>

        <div class="formula-box">
          <div class="formula-label">General Strategy</div>
          $$ax + b = c \\implies x = \\dfrac{c - b}{a}$$
        </div>

        <h3>Step-by-Step Process</h3>
        <ol>
          <li><strong>Distribute</strong> — expand any parentheses</li>
          <li><strong>Combine like terms</strong> on each side</li>
          <li><strong>Move variable terms</strong> to one side</li>
          <li><strong>Move constants</strong> to the other side</li>
          <li><strong>Divide</strong> (or multiply) to isolate the variable</li>
          <li><strong>Check</strong> your answer by substituting back</li>
        </ol>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Always check: substitute your answer back into the original equation. If both sides are equal, you're correct!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve: $3x + 7 = 22$',
        steps: [
          'Subtract 7 from both sides: $3x + 7 - 7 = 22 - 7 \\implies 3x = 15$',
          'Divide both sides by 3: $\\dfrac{3x}{3} = \\dfrac{15}{3} \\implies x = 5$',
          'Check: $3(5) + 7 = 15 + 7 = 22$ ✓',
        ],
        answer: '$x = 5$',
      },
      {
        problem: 'Solve: $2(x - 3) + 4 = 3x - 5$',
        steps: [
          'Distribute: $2x - 6 + 4 = 3x - 5$',
          'Combine like terms on left: $2x - 2 = 3x - 5$',
          'Subtract $2x$ from both sides: $-2 = x - 5$',
          'Add 5 to both sides: $x = 3$',
          'Check: $2(3-3)+4 = 0+4 = 4$ and $3(3)-5 = 9-5 = 4$ ✓',
        ],
        answer: '$x = 3$',
      },
      {
        problem: 'Solve: $\\dfrac{x}{3} - 2 = \\dfrac{x}{6} + 1$',
        steps: [
          'Multiply every term by 6 (LCD): $6 \\cdot \\dfrac{x}{3} - 6 \\cdot 2 = 6 \\cdot \\dfrac{x}{6} + 6 \\cdot 1$',
          'Simplify: $2x - 12 = x + 6$',
          'Subtract $x$ from both sides: $x - 12 = 6$',
          'Add 12: $x = 18$',
        ],
        answer: '$x = 18$',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'Solve: $2x + 6 = 14$',
        choices: ['$x = 2$', '$x = 4$', '$x = 6$', '$x = 10$'],
        correct: 1,
        explanation: 'Subtract 6: $2x = 8$, then divide by 2: $x = 4$.',
      },
      {
        type: 'fill',
        question: 'Solve: $5x - 3 = 17$. What is $x$?',
        answer: '4',
        altAnswers: ['x=4', 'x = 4'],
        explanation: 'Add 3 to both sides: $5x = 20$, then divide by 5: $x = 4$.',
      },
      {
        type: 'mc',
        question: 'Solve: $3(x + 2) = 18$',
        choices: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 8$'],
        correct: 0,
        explanation: 'Distribute: $3x + 6 = 18$, subtract 6: $3x = 12$, divide by 3: $x = 4$.',
      },
      {
        type: 'fill',
        question: 'Solve: $\\dfrac{x}{4} + 3 = 7$. What is $x$?',
        answer: '16',
        altAnswers: ['x=16', 'x = 16'],
        explanation: 'Subtract 3: $x/4 = 4$, multiply by 4: $x = 16$.',
      },
      {
        type: 'mc',
        question: 'Which value of $x$ satisfies $7x - 5 = 2x + 20$?',
        choices: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 7$'],
        correct: 2,
        explanation: 'Subtract $2x$: $5x - 5 = 20$, add 5: $5x = 25$, divide: $x = 5$.',
      },
    ],
  },

  // ── 1.2 ──────────────────────────────────────────────────────────────────
  {
    id: '1.2',
    learn: `
      <div class="concept-card">
        <h2>📖 Solving Linear Inequalities</h2>
        <p>Solving a linear inequality is almost identical to solving a linear equation — with one critical rule: <strong>when you multiply or divide by a negative number, flip the inequality sign</strong>.</p>

        <h3>Inequality Symbols</h3>
        <ul>
          <li>$x > a$ — x is greater than a (open circle on graph)</li>
          <li>$x \\geq a$ — x is greater than or equal to a (closed circle)</li>
          <li>$x < a$ — x is less than a (open circle)</li>
          <li>$x \\leq a$ — x is less than or equal to a (closed circle)</li>
        </ul>

        <div class="formula-box">
          <div class="formula-label">Key Rule — Flip the Sign</div>
          $$-2x > 6 \\implies x < -3$$
        </div>

        <h3>Compound Inequalities</h3>
        <p>Two inequalities joined by "and" or "or":</p>
        <ul>
          <li><strong>And (Intersection):</strong> $a < x < b$ — x is between a and b</li>
          <li><strong>Or (Union):</strong> $x < a$ or $x > b$ — x is outside the interval</li>
        </ul>

        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Don't forget to flip the sign when multiplying or dividing by a negative! This is the #1 mistake students make.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve and graph: $3x - 2 > 7$',
        steps: [
          'Add 2 to both sides: $3x > 9$',
          'Divide by 3 (positive, no flip): $x > 3$',
          'Graph: open circle at 3, shade to the right → $(3, \\infty)$',
        ],
        answer: '$x > 3$, or $(3, \\infty)$',
      },
      {
        problem: 'Solve: $-4x + 1 \\leq 13$',
        steps: [
          'Subtract 1: $-4x \\leq 12$',
          'Divide by $-4$ — FLIP the sign: $x \\geq -3$',
          'Graph: closed circle at $-3$, shade right → $[-3, \\infty)$',
        ],
        answer: '$x \\geq -3$, or $[-3, \\infty)$',
      },
      {
        problem: 'Solve the compound inequality: $-1 < 2x + 3 \\leq 11$',
        steps: [
          'Subtract 3 from all parts: $-4 < 2x \\leq 8$',
          'Divide all parts by 2: $-2 < x \\leq 4$',
          'Graph: open circle at $-2$, closed circle at 4, shade between → $(-2, 4]$',
        ],
        answer: '$-2 < x \\leq 4$, or $(-2, 4]$',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'Solve: $2x - 5 > 3$',
        choices: ['$x > 1$', '$x > 4$', '$x > -1$', '$x > -4$'],
        correct: 1,
        explanation: 'Add 5: $2x > 8$, divide by 2: $x > 4$.',
      },
      {
        type: 'mc',
        question: 'Solve: $-3x \\leq 12$',
        choices: ['$x \\leq -4$', '$x \\geq -4$', '$x \\leq 4$', '$x \\geq 4$'],
        correct: 1,
        explanation: 'Divide by $-3$ and flip: $x \\geq -4$.',
      },
      {
        type: 'fill',
        question: 'Solve $5 - x > 2$. What values of $x$ satisfy this? Enter the boundary value (the number $x$ must be less than).',
        answer: '3',
        explanation: 'Subtract 5: $-x > -3$, divide by $-1$ (flip): $x < 3$. Boundary is 3.',
      },
      {
        type: 'mc',
        question: 'Solve the compound inequality: $-3 \\leq 2x + 1 < 9$',
        choices: ['$-2 \\leq x < 4$', '$-2 < x \\leq 4$', '$-1 \\leq x < 5$', '$-4 \\leq x < 2$'],
        correct: 0,
        explanation: 'Subtract 1: $-4 \\leq 2x < 8$. Divide by 2: $-2 \\leq x < 4$.',
      },
      {
        type: 'mc',
        question: 'Which inequality has the solution $x < -5$?',
        choices: ['$2x > -10$', '$-2x < 10$', '$-2x > 10$', '$2x < -10$'],
        correct: 2,
        explanation: 'Divide $-2x > 10$ by $-2$ (flip): $x < -5$ ✓.',
      },
    ],
  },

  // ── 1.3 ──────────────────────────────────────────────────────────────────
  {
    id: '1.3',
    learn: `
      <div class="concept-card">
        <h2>📖 Absolute Value Equations</h2>
        <p>The <strong>absolute value</strong> $|x|$ represents the distance of $x$ from zero on the number line. It is always non-negative.</p>

        <div class="formula-box">
          <div class="formula-label">Definition</div>
          $$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$
        </div>

        <h3>Solving $|ax + b| = c$</h3>
        <p>An absolute value equation splits into <strong>two cases</strong>: the expression inside equals $c$ OR equals $-c$.</p>

        <div class="formula-box">
          <div class="formula-label">Two-Case Rule</div>
          $$|ax + b| = c \\implies ax + b = c \\quad \\text{or} \\quad ax + b = -c$$
        </div>

        <h3>Important: Check for No Solution</h3>
        <p>If $c < 0$, there is <strong>no solution</strong> — absolute value can never equal a negative number.</p>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Always isolate the absolute value expression before splitting into two cases.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve: $|2x - 3| = 7$',
        steps: [
          'Case 1: $2x - 3 = 7 \\implies 2x = 10 \\implies x = 5$',
          'Case 2: $2x - 3 = -7 \\implies 2x = -4 \\implies x = -2$',
          'Check Case 1: $|2(5)-3| = |7| = 7$ ✓',
          'Check Case 2: $|2(-2)-3| = |-7| = 7$ ✓',
        ],
        answer: '$x = 5$ or $x = -2$',
      },
      {
        problem: 'Solve: $3|x + 1| - 6 = 9$',
        steps: [
          'Isolate the absolute value: $3|x+1| = 15 \\implies |x+1| = 5$',
          'Case 1: $x + 1 = 5 \\implies x = 4$',
          'Case 2: $x + 1 = -5 \\implies x = -6$',
        ],
        answer: '$x = 4$ or $x = -6$',
      },
      {
        problem: 'Solve: $|x - 4| = -3$',
        steps: [
          'The right side is negative.',
          'Absolute value is always $\\geq 0$, so it can never equal $-3$.',
        ],
        answer: 'No solution $\\varnothing$',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'Solve: $|x + 3| = 8$',
        choices: ['$x = 5$ or $x = -11$', '$x = 5$ or $x = 11$', '$x = -5$ or $x = 11$', '$x = -5$ or $x = -11$'],
        correct: 0,
        explanation: '$x+3=8 \\to x=5$ or $x+3=-8 \\to x=-11$.',
      },
      {
        type: 'fill',
        question: 'Solve $|2x - 1| = 9$. One solution is $x = 5$. What is the other solution?',
        answer: '-4',
        altAnswers: ['x=-4', 'x = -4'],
        explanation: '$2x-1 = -9 \\to 2x = -8 \\to x = -4$.',
      },
      {
        type: 'mc',
        question: 'How many solutions does $|x - 2| = -5$ have?',
        choices: ['None', 'One', 'Two', 'Infinitely many'],
        correct: 0,
        explanation: 'Absolute value cannot equal a negative number. No solution.',
      },
      {
        type: 'mc',
        question: 'Solve: $2|x| - 4 = 10$',
        choices: ['$x = 7$', '$x = 7$ or $x = -7$', '$x = 3$ or $x = -3$', '$x = -7$'],
        correct: 1,
        explanation: '$2|x| = 14 \\to |x| = 7 \\to x = 7$ or $x = -7$.',
      },
      {
        type: 'fill',
        question: 'Solve $|3x + 6| = 15$. What is the positive solution for $x$?',
        answer: '3',
        altAnswers: ['x=3', 'x = 3'],
        explanation: '$3x+6=15 \\to 3x=9 \\to x=3$. (The other solution is $x=-7$.)',
      },
    ],
  },

  // ── 1.4 ──────────────────────────────────────────────────────────────────
  {
    id: '1.4',
    learn: `
      <div class="concept-card">
        <h2>📖 Absolute Value Inequalities</h2>
        <p>Absolute value inequalities come in two flavors. The direction of the inequality determines whether the solution is an <em>and</em> (intersection) or an <em>or</em> (union).</p>

        <h3>"Less Than" → AND (between)</h3>
        <div class="formula-box">
          <div class="formula-label">|expression| &lt; c → BETWEEN</div>
          $$|ax + b| < c \\implies -c < ax + b < c$$
        </div>

        <h3>"Greater Than" → OR (outside)</h3>
        <div class="formula-box">
          <div class="formula-label">|expression| &gt; c → OUTSIDE</div>
          $$|ax + b| > c \\implies ax + b < -c \\quad \\text{or} \\quad ax + b > c$$
        </div>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Memory trick: <strong>&lt; is like a "less-than sandwich"</strong> (between). <strong>&gt; is like an "or"</strong> (the graph opens outward).</p>
        </div>

        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>These rules work for $c > 0$ only. If $c \\leq 0$: $|ax+b| < c$ has no solution; $|ax+b| > c$ is all real numbers (when $c < 0$).</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve: $|x - 2| < 5$',
        steps: [
          '"Less than" → AND (between): $-5 < x - 2 < 5$',
          'Add 2 to all parts: $-3 < x < 7$',
          'Graph: open circles at $-3$ and 7, shaded between → $(-3, 7)$',
        ],
        answer: '$-3 < x < 7$, or $(-3, 7)$',
      },
      {
        problem: 'Solve: $|3x + 1| \\geq 7$',
        steps: [
          '"Greater than or equal" → OR (outside): $3x + 1 \\leq -7$ or $3x + 1 \\geq 7$',
          'Case 1: $3x \\leq -8 \\implies x \\leq -\\dfrac{8}{3}$',
          'Case 2: $3x \\geq 6 \\implies x \\geq 2$',
          'Graph: closed circles at $-8/3$ and 2, shaded outward → $(-\\infty, -8/3] \\cup [2, \\infty)$',
        ],
        answer: '$x \\leq -\\dfrac{8}{3}$ or $x \\geq 2$',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'Solve: $|x + 1| < 4$',
        choices: ['$x < 3$', '$-5 < x < 3$', '$x > -5$ or $x < 3$', '$x < -5$ or $x > 3$'],
        correct: 1,
        explanation: '"Less than" → between: $-4 < x+1 < 4 \\to -5 < x < 3$.',
      },
      {
        type: 'mc',
        question: 'Solve: $|2x - 4| > 6$',
        choices: ['$-1 < x < 5$', '$x < -1$ or $x > 5$', '$x < 1$ or $x > 5$', '$1 < x < 5$'],
        correct: 1,
        explanation: '"Greater than" → or: $2x-4<-6$ or $2x-4>6$. Case 1: $x<-1$. Case 2: $x>5$.',
      },
      {
        type: 'mc',
        question: 'What type of solution does $|x| > 3$ produce?',
        choices: ['A single interval between -3 and 3', 'Two separate rays (union)', 'No solution', 'All real numbers'],
        correct: 1,
        explanation: '$x < -3$ or $x > 3$ — two separate rays, a union of intervals.',
      },
      {
        type: 'fill',
        question: 'Solve $|x - 5| \\leq 3$. What is the left endpoint of the solution interval?',
        answer: '2',
        explanation: '$-3 \\leq x - 5 \\leq 3 \\to 2 \\leq x \\leq 8$. Left endpoint is 2.',
      },
      {
        type: 'mc',
        question: 'Which inequality has the solution $(-\\infty, -1) \\cup (3, \\infty)$?',
        choices: ['$|x - 1| < 2$', '$|x - 1| > 2$', '$|x + 1| > 2$', '$|x - 1| \\leq 2$'],
        correct: 1,
        explanation: '$|x-1|>2 \\to x-1<-2$ or $x-1>2 \\to x<-1$ or $x>3$. Matches $(-\\infty,-1)\\cup(3,\\infty)$.',
      },
    ],
  },
];
