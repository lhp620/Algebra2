// data/lessons/unit9.js — Unit 9: Sequences & Series

export const lessons = [
  {
    id: '9.1',
    learn: `
      <div class="concept-card">
        <h3>Sequences</h3>
        <p>A <strong>sequence</strong> is an ordered list of numbers. Each number is called a <strong>term</strong>. We write the $n$th term as $a_n$.</p>
        <ul>
          <li><strong>Explicit formula</strong>: gives $a_n$ directly in terms of $n$.</li>
          <li><strong>Recursive formula</strong>: defines $a_n$ in terms of previous terms.</li>
        </ul>
        <div class="tip-box">Example: $a_n = 2n + 1$ gives $3, 5, 7, 9, \\ldots$ (explicit). The Fibonacci sequence $a_n = a_{n-1} + a_{n-2}$ is recursive.</div>
      </div>
      <div class="concept-card">
        <h3>Arithmetic Sequences</h3>
        <p>An <strong>arithmetic sequence</strong> has a constant <strong>common difference</strong> $d = a_n - a_{n-1}$.</p>
        <div class="formula-box">$$a_n = a_1 + (n-1)d$$</div>
        <p>Examples: $3, 7, 11, 15, \\ldots$ ($d = 4$) and $10, 7, 4, 1, \\ldots$ ($d = -3$).</p>
      </div>`,
    examples: [
      {
        problem: 'Find the 20th term of $5, 9, 13, 17, \\ldots$',
        steps: [
          '$a_1 = 5$, $d = 4$.',
          '$a_{20} = 5 + (20-1)(4) = 5 + 76 = 81$.'
        ],
        answer: '$a_{20} = 81$'
      },
      {
        problem: 'Write an explicit formula for the arithmetic sequence $-2, 3, 8, 13, \\ldots$',
        steps: [
          '$a_1 = -2$, $d = 5$.',
          '$a_n = -2 + (n-1)(5) = 5n - 7$.'
        ],
        answer: '$a_n = 5n - 7$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the common difference in $12, 8, 4, 0, \\ldots$?', choices: ['$4$', '$-4$', '$8$', '$-8$'], correct: 1, explanation: '$8 - 12 = -4$.' },
      { type: 'fill', question: 'Find $a_{10}$ for the sequence $1, 4, 7, 10, \\ldots$', answer: '28', altAnswers: [], explanation: '$d=3$; $a_{10} = 1 + 9(3) = 28$.' },
      { type: 'mc', question: 'Which is an arithmetic sequence?', choices: ['$1, 2, 4, 8, \\ldots$', '$3, 6, 9, 12, \\ldots$', '$1, 1, 2, 3, 5, \\ldots$', '$1, 4, 9, 16, \\ldots$'], correct: 1, explanation: 'Constant difference of 3.' },
      { type: 'fill', question: 'If $a_1 = 7$ and $d = -3$, find $a_5$.', answer: '-5', altAnswers: [], explanation: '$a_5 = 7 + 4(-3) = 7 - 12 = -5$.' },
      { type: 'mc', question: 'If $a_3 = 10$ and $a_7 = 26$, what is the common difference?', choices: ['$4$', '$3$', '$6$', '$8$'], correct: 0, explanation: '$a_7 - a_3 = 4d = 16 \\Rightarrow d = 4$.' }
    ]
  },
  {
    id: '9.2',
    learn: `
      <div class="concept-card">
        <h3>Geometric Sequences</h3>
        <p>A <strong>geometric sequence</strong> has a constant <strong>common ratio</strong> $r = \\dfrac{a_n}{a_{n-1}}$.</p>
        <div class="formula-box">$$a_n = a_1 \\cdot r^{n-1}$$</div>
        <ul>
          <li>$r > 1$: terms grow larger</li>
          <li>$0 < r < 1$: terms decay toward 0</li>
          <li>$r < 0$: terms alternate in sign</li>
        </ul>
      </div>
      <div class="concept-card">
        <h3>Identifying Geometric vs. Arithmetic</h3>
        <p>Check <strong>differences</strong> (arithmetic) or <strong>ratios</strong> (geometric):</p>
        <ul>
          <li>$2, 5, 8, 11, \\ldots$ → differences constant (arithmetic, $d=3$)</li>
          <li>$3, 6, 12, 24, \\ldots$ → ratios constant (geometric, $r=2$)</li>
        </ul>
      </div>`,
    examples: [
      {
        problem: 'Find the 6th term of $2, 6, 18, 54, \\ldots$',
        steps: [
          '$a_1 = 2$, $r = 3$.',
          '$a_6 = 2 \\cdot 3^{6-1} = 2 \\cdot 243 = 486$.'
        ],
        answer: '$486$'
      },
      {
        problem: 'Find the common ratio and $a_5$ for $80, 40, 20, 10, \\ldots$',
        steps: [
          '$r = 40/80 = 1/2$.',
          '$a_5 = 80 \\cdot (1/2)^4 = 80/16 = 5$.'
        ],
        answer: '$r = 1/2$; $a_5 = 5$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the common ratio of $5, 15, 45, 135, \\ldots$?', choices: ['$3$', '$10$', '$1/3$', '$5$'], correct: 0, explanation: '$15/5 = 3$.' },
      { type: 'fill', question: 'Find $a_4$ for $2, -4, 8, \\ldots$', answer: '-16', altAnswers: [], explanation: '$r = -2$; $a_4 = 2(-2)^3 = 2(-8) = -16$.' },
      { type: 'mc', question: 'Which sequence is geometric?', choices: ['$1, 3, 6, 10, \\ldots$', '$4, 8, 16, 32, \\ldots$', '$2, 4, 6, 8, \\ldots$', '$1, 4, 9, 16, \\ldots$'], correct: 1, explanation: 'Constant ratio of 2.' },
      { type: 'fill', question: 'Find $a_1$ if $a_3 = 36$ and $r = 3$.', answer: '4', altAnswers: [], explanation: '$36 = a_1 \\cdot 3^2 = 9a_1 \\Rightarrow a_1 = 4$.' },
      { type: 'mc', question: 'If $a_1 = 1000$ and $r = 0.5$, what is $a_4$?', choices: ['$500$', '$250$', '$125$', '$62.5$'], correct: 2, explanation: '$a_4 = 1000 \\cdot (0.5)^3 = 1000/8 = 125$.' }
    ]
  },
  {
    id: '9.3',
    learn: `
      <div class="concept-card">
        <h3>Arithmetic Series</h3>
        <p>An <strong>arithmetic series</strong> is the sum of terms in an arithmetic sequence. $S_n$ denotes the sum of the first $n$ terms.</p>
        <div class="formula-box">$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}[2a_1 + (n-1)d]$$</div>
        <div class="tip-box">The first formula is easiest when you know both the first and last terms. The second is useful when you only know $a_1$ and $d$.</div>
      </div>
      <div class="concept-card">
        <h3>Gauss's Trick</h3>
        <p>Adding the series forward and backward pairs each term to the same sum:</p>
        <div class="formula-box">$$1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$</div>
        <p>Legend holds that young Gauss found this by pairing $1+100$, $2+99$, $3+98$, $\\ldots$ — each pair sums to $101$, and there are $50$ pairs.</p>
      </div>`,
    examples: [
      {
        problem: 'Find the sum of the first 15 terms of $2, 6, 10, 14, \\ldots$',
        steps: [
          '$a_1 = 2$, $d = 4$.',
          '$a_{15} = 2 + 14(4) = 58$.',
          '$S_{15} = \\dfrac{15}{2}(2 + 58) = \\dfrac{15}{2}(60) = 450$.'
        ],
        answer: '$S_{15} = 450$'
      },
      {
        problem: 'Find $S_{20}$ for $a_1 = 3$, $d = 5$.',
        steps: [
          'Use $S_n = \\dfrac{n}{2}[2a_1 + (n-1)d]$.',
          '$S_{20} = \\dfrac{20}{2}[2(3) + 19(5)] = 10[6 + 95] = 10(101) = 1010$.'
        ],
        answer: '$S_{20} = 1010$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Find $S_5$ for $1, 3, 5, 7, 9$.', choices: ['$20$', '$25$', '$30$', '$15$'], correct: 1, explanation: '$S_5 = \\frac{5}{2}(1+9) = \\frac{5}{2}(10) = 25$.' },
      { type: 'fill', question: 'Sum the first 10 positive integers $1+2+\\cdots+10$.', answer: '55', altAnswers: [], explanation: '$S_{10} = \\frac{10}{2}(1+10) = 5 \\cdot 11 = 55$.' },
      { type: 'mc', question: 'Find $S_{10}$ for $a_1 = 5$, $d = 3$.', choices: ['$185$', '$170$', '$195$', '$200$'], correct: 0, explanation: '$S_{10} = \\frac{10}{2}[2(5)+9(3)] = 5[10+27] = 5(37) = 185$.' },
      { type: 'fill', question: 'Find $S_{20}$ for $a_1 = 4$, $d = 2$. Enter the number.', answer: '460', altAnswers: [], explanation: '$S_{20} = \\frac{20}{2}[2(4)+19(2)] = 10[8+38] = 10(46) = 460$.' },
      { type: 'mc', question: 'An arithmetic series has $a_1 = 5$, $a_n = 50$, $n = 10$. Find $S_{10}$.', choices: ['$225$', '$275$', '$300$', '$250$'], correct: 1, explanation: '$S_{10} = \\frac{10}{2}(5+50) = 5 \\cdot 55 = 275$.' }
    ]
  },
  {
    id: '9.4',
    learn: `
      <div class="concept-card">
        <h3>Geometric Series (Finite)</h3>
        <p>The sum of the first $n$ terms of a geometric sequence:</p>
        <div class="formula-box">$$S_n = \\frac{a_1(1 - r^n)}{1 - r}, \\quad r \\ne 1$$</div>
        <div class="tip-box">If $r = 1$, all terms are equal and $S_n = n \\cdot a_1$.</div>
      </div>
      <div class="concept-card">
        <h3>Infinite Geometric Series</h3>
        <p>If $|r| < 1$, the terms shrink toward 0 and the series <strong>converges</strong> to a finite sum:</p>
        <div class="formula-box">$$S = \\frac{a_1}{1 - r}, \\quad |r| < 1$$</div>
        <p>If $|r| \\ge 1$, the series <strong>diverges</strong> (the sum grows without bound).</p>
        <div class="warning-box">You can only use the infinite sum formula when $|r| < 1$!</div>
      </div>`,
    examples: [
      {
        problem: 'Find $S_5$ for $3, 6, 12, 24, 48$.',
        steps: [
          '$a_1 = 3$, $r = 2$, $n = 5$.',
          '$S_5 = \\dfrac{3(1 - 2^5)}{1 - 2} = \\dfrac{3(1-32)}{-1} = \\dfrac{3(-31)}{-1} = 93$.'
        ],
        answer: '$93$'
      },
      {
        problem: 'Find the sum of the infinite geometric series $12, 4, \\dfrac{4}{3}, \\ldots$',
        steps: [
          '$a_1 = 12$, $r = 1/3$.',
          '$|r| = 1/3 < 1$ → converges.',
          '$S = \\dfrac{12}{1 - 1/3} = \\dfrac{12}{2/3} = 18$.'
        ],
        answer: '$18$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Find $S_4$ for $1, 2, 4, 8$.', choices: ['$15$', '$16$', '$14$', '$8$'], correct: 0, explanation: '$S_4 = \\frac{1(1-2^4)}{1-2} = \\frac{-15}{-1} = 15$.' },
      { type: 'fill', question: 'Find the infinite sum of $8, 4, 2, 1, \\ldots$', answer: '16', altAnswers: [], explanation: '$r=1/2$; $S = \\frac{8}{1-1/2} = \\frac{8}{1/2} = 16$.' },
      { type: 'mc', question: 'Which infinite geometric series converges?', choices: ['$r = 1$', '$r = -2$', '$r = 3/4$', '$r = 5/4$'], correct: 2, explanation: '$|3/4| = 0.75 < 1$ → converges.' },
      { type: 'mc', question: 'Find the infinite sum: $10 + 5 + 2.5 + \\cdots$', choices: ['$15$', '$20$', '$25$', '$30$'], correct: 1, explanation: '$r=0.5$; $S = 10/(1-0.5) = 10/0.5 = 20$.' },
      { type: 'fill', question: 'Find $S_3$ for $100, -10, 1, \\ldots$', answer: '91', altAnswers: [], explanation: '$S_3 = 100 + (-10) + 1 = 91$.' }
    ]
  },
  {
    id: '9.5',
    learn: `
      <div class="concept-card">
        <h3>Sigma Notation</h3>
        <p><strong>Sigma notation</strong> (summation notation) uses the Greek letter $\\Sigma$ to compactly write a sum:</p>
        <div class="formula-box">$$\\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \\cdots + a_n$$</div>
        <ul>
          <li>$k$ is the <strong>index of summation</strong></li>
          <li>$m$ is the <strong>lower limit</strong> (starting value)</li>
          <li>$n$ is the <strong>upper limit</strong> (ending value)</li>
        </ul>
        <p>Example: $\\displaystyle\\sum_{k=1}^{5} (2k+1) = 3 + 5 + 7 + 9 + 11 = 35$</p>
      </div>
      <div class="concept-card">
        <h3>Properties of Sigma Notation</h3>
        <div class="formula-box">$$\\sum_{k=1}^{n} c = cn \\qquad \\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$$</div>
        <div class="formula-box">$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$</div>
        <p><strong>Linearity rules</strong>:</p>
        <ul>
          <li>$\\displaystyle\\sum_{k=1}^{n} c\\,a_k = c\\sum_{k=1}^{n} a_k$</li>
          <li>$\\displaystyle\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$</li>
        </ul>
        <div class="tip-box">Any arithmetic or geometric series can be written in sigma notation.</div>
      </div>`,
    examples: [
      {
        problem: 'Evaluate $\\displaystyle\\sum_{k=1}^{4} (3k - 1)$.',
        steps: [
          'Substitute $k = 1, 2, 3, 4$:',
          '$k=1$: $3(1)-1=2$; $\\;k=2$: $3(2)-1=5$; $\\;k=3$: $3(3)-1=8$; $\\;k=4$: $3(4)-1=11$.',
          '$2 + 5 + 8 + 11 = 26$.'
        ],
        answer: '$26$'
      },
      {
        problem: 'Write the sum $3 + 6 + 9 + 12 + 15$ in sigma notation.',
        steps: [
          'Each term is $3k$ for $k = 1, 2, 3, 4, 5$.',
          'So the sum is $\\displaystyle\\sum_{k=1}^{5} 3k$.',
          'Verify: $\\displaystyle\\sum_{k=1}^{5} 3k = 3 \\cdot \\frac{5 \\cdot 6}{2} = 3 \\cdot 15 = 45$. ✓'
        ],
        answer: '$\\displaystyle\\sum_{k=1}^{5} 3k$'
      },
      {
        problem: 'Use the sum formula to evaluate $\\displaystyle\\sum_{k=1}^{100} k$.',
        steps: [
          'Apply $\\displaystyle\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}$ with $n = 100$.',
          '$\\dfrac{100 \\cdot 101}{2} = \\dfrac{10100}{2} = 5050$.'
        ],
        answer: '$5050$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What does $\\displaystyle\\sum_{k=1}^{3} k^2$ equal?', choices: ['$6$', '$9$', '$14$', '$36$'], correct: 2, explanation: '$1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$.' },
      { type: 'fill', question: 'Evaluate $\\displaystyle\\sum_{k=1}^{4} (2k+1)$.', answer: '24', altAnswers: [], explanation: 'Terms: $3+5+7+9 = 24$.' },
      { type: 'mc', question: 'Which sigma expression represents $4 + 8 + 12 + 16$?', choices: ['$\\displaystyle\\sum_{k=1}^{4} k$', '$\\displaystyle\\sum_{k=1}^{4} 4k$', '$\\displaystyle\\sum_{k=0}^{3} 4k$', '$\\displaystyle\\sum_{k=1}^{4} (k+4)$'], correct: 1, explanation: '$4(1)+4(2)+4(3)+4(4) = 4+8+12+16$.' },
      { type: 'fill', question: 'Use the formula to find $\\displaystyle\\sum_{k=1}^{10} k$.', answer: '55', altAnswers: [], explanation: '$\\frac{10 \\cdot 11}{2} = 55$.' },
      { type: 'mc', question: 'Evaluate $\\displaystyle\\sum_{k=3}^{6} k$.', choices: ['$15$', '$18$', '$21$', '$10$'], correct: 1, explanation: '$3+4+5+6 = 18$.' }
    ]
  }
];
