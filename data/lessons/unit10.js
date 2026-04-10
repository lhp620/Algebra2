// data/lessons/unit10.js — Unit 10: Trigonometry

export const lessons = [
  {
    id: '10.1',
    learn: `
      <div class="concept-card">
        <h3>Angles and Radian Measure</h3>
        <p>Angles can be measured in <strong>degrees</strong> or <strong>radians</strong>. A full circle is $360°$ or $2\\pi$ radians.</p>
        <div class="formula-box">$$\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180} \\qquad \\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}$$</div>
        <p>Common conversions:</p>
        <ul>
          <li>$30° = \\pi/6$ rad</li>
          <li>$45° = \\pi/4$ rad</li>
          <li>$60° = \\pi/3$ rad</li>
          <li>$90° = \\pi/2$ rad</li>
          <li>$180° = \\pi$ rad</li>
        </ul>
      </div>
      <div class="concept-card">
        <h3>Arc Length and Sector Area</h3>
        <div class="formula-box">$$s = r\\theta \\qquad A = \\frac{1}{2}r^2\\theta$$</div>
        <p>where $r$ = radius, $\\theta$ = central angle in radians, $s$ = arc length, $A$ = sector area.</p>
      </div>`,
    examples: [
      {
        problem: 'Convert $150°$ to radians.',
        steps: [
          '$150 \\times \\dfrac{\\pi}{180} = \\dfrac{150\\pi}{180} = \\dfrac{5\\pi}{6}$ radians.'
        ],
        answer: '$\\dfrac{5\\pi}{6}$ rad'
      },
      {
        problem: 'Convert $\\dfrac{3\\pi}{4}$ radians to degrees.',
        steps: [
          '$\\dfrac{3\\pi}{4} \\times \\dfrac{180}{\\pi} = \\dfrac{3 \\times 180}{4} = 135°$.'
        ],
        answer: '$135°$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Convert $60°$ to radians.', choices: ['$\\pi/6$', '$\\pi/4$', '$\\pi/3$', '$\\pi/2$'], correct: 2, explanation: '$60 \\times \\pi/180 = \\pi/3$.' },
      { type: 'fill', question: 'Convert $270°$ to radians. Enter as a fraction of pi (e.g., 3pi/2).', answer: '3pi/2', altAnswers: ['3π/2', '(3/2)pi'], explanation: '$270 \\times \\pi/180 = 3\\pi/2$.' },
      { type: 'mc', question: 'Convert $\\pi/4$ radians to degrees.', choices: ['$30°$', '$45°$', '$60°$', '$90°$'], correct: 1, explanation: '$\\frac{\\pi}{4} \\times \\frac{180}{\\pi} = 45°$.' },
      { type: 'fill', question: 'Find arc length when $r = 5$ and $\\theta = \\pi/2$ radians.', answer: '5pi/2', altAnswers: ['(5/2)pi', '5π/2'], explanation: '$s = r\\theta = 5 \\cdot \\pi/2 = 5\\pi/2$.' },
      { type: 'mc', question: 'How many radians are in a full circle?', choices: ['$\\pi$', '$2\\pi$', '$360$', '$180$'], correct: 1, explanation: 'Full circle = $2\\pi$ radians.' }
    ]
  },
  {
    id: '10.2',
    learn: `
      <div class="concept-card">
        <h3>The Unit Circle</h3>
        <p>The <strong>unit circle</strong> has radius 1 centered at the origin. A point $P(x, y)$ on the unit circle at angle $\\theta$ defines:</p>
        <div class="formula-box">$$\\cos\\theta = x, \\quad \\sin\\theta = y, \\quad \\tan\\theta = \\frac{y}{x}$$</div>
        <p>Since the radius is 1: $\\cos\\theta$ = x-coordinate, $\\sin\\theta$ = y-coordinate.</p>
      </div>
      <div class="concept-card">
        <h3>Quadrant Signs (ASTC)</h3>
        <p>Remember "All Students Take Calculus" for which trig functions are positive:</p>
        <ul>
          <li>QI: <strong>All</strong> positive</li>
          <li>QII: <strong>S</strong>ine positive</li>
          <li>QIII: <strong>T</strong>angent positive</li>
          <li>QIV: <strong>C</strong>osine positive</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Key unit circle values to memorize: at $0, \\pi/6, \\pi/4, \\pi/3, \\pi/2$ — and their reflections into other quadrants.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Find $\\sin(\\pi/3)$, $\\cos(\\pi/3)$, and $\\tan(\\pi/3)$.',
        steps: [
          'At $\\pi/3 = 60°$, the point on the unit circle is $(1/2,\\; \\sqrt{3}/2)$.',
          '$\\cos(\\pi/3) = 1/2$, $\\sin(\\pi/3) = \\sqrt{3}/2$.',
          '$\\tan(\\pi/3) = \\dfrac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$.'
        ],
        answer: '$\\sin = \\sqrt{3}/2,\\; \\cos = 1/2,\\; \\tan = \\sqrt{3}$'
      },
      {
        problem: 'Find $\\sin(5\\pi/6)$.',
        steps: [
          '$5\\pi/6$ is in QII (reference angle $\\pi/6$).',
          'Sine is positive in QII.',
          '$\\sin(5\\pi/6) = \\sin(\\pi/6) = 1/2$.'
        ],
        answer: '$1/2$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is $\\cos(0)$?', choices: ['$0$', '$1$', '$-1$', '$\\sqrt{2}/2$'], correct: 1, explanation: 'At angle 0, the point is $(1,0)$; $\\cos(0) = 1$.' },
      { type: 'mc', question: 'What is $\\sin(\\pi/2)$?', choices: ['$0$', '$1/2$', '$1$', '$\\sqrt{2}/2$'], correct: 2, explanation: 'At $\\pi/2$, point is $(0,1)$; $\\sin(\\pi/2) = 1$.' },
      { type: 'fill', question: 'What is $\\tan(\\pi/4)$? Enter as a number.', answer: '1', altAnswers: [], explanation: 'At $\\pi/4$, point is $(\\sqrt{2}/2, \\sqrt{2}/2)$; $\\tan = 1$.' },
      { type: 'mc', question: 'In which quadrant is $\\sin < 0$ and $\\cos > 0$?', choices: ['QI', 'QII', 'QIII', 'QIV'], correct: 3, explanation: 'QIV: x positive, y negative → cos positive, sin negative.' },
      { type: 'mc', question: 'What is $\\cos(\\pi)$?', choices: ['$1$', '$0$', '$-1$', '$\\pi$'], correct: 2, explanation: 'At $\\pi$, the point is $(-1, 0)$; $\\cos(\\pi) = -1$.' }
    ]
  },
  {
    id: '10.3',
    learn: `
      <div class="concept-card">
        <h3>Right Triangle Trig Functions</h3>
        <p>For a right triangle with acute angle $\\theta$, <strong>opposite</strong>, <strong>adjacent</strong>, and <strong>hypotenuse</strong> sides:</p>
        <div class="formula-box">
          $$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$$
        </div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p><strong>SOH-CAH-TOA</strong>: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.</p>
        </div>
        <p>The reciprocal functions:</p>
        <div class="formula-box">
          $$\\csc\\theta = \\frac{1}{\\sin\\theta} \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta}$$
        </div>
      </div>
      <div class="concept-card">
        <h3>Special Right Triangles</h3>
        <p>Two triangles give exact trig values without a calculator:</p>
        <ul>
          <li><strong>30-60-90</strong>: sides $1 : \\sqrt{3} : 2$ → $\\sin 30° = 1/2$, $\\cos 30° = \\sqrt{3}/2$, $\\tan 30° = 1/\\sqrt{3}$</li>
          <li><strong>45-45-90</strong>: sides $1 : 1 : \\sqrt{2}$ → $\\sin 45° = \\cos 45° = \\sqrt{2}/2$, $\\tan 45° = 1$</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>These exact values appear constantly in trig — memorize them!</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'In a right triangle, the opposite side = 3 and hypotenuse = 5. Find $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.',
        steps: [
          'Adjacent = $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$.',
          '$\\sin\\theta = 3/5$, $\\cos\\theta = 4/5$, $\\tan\\theta = 3/4$.'
        ],
        answer: '$\\sin\\theta = 3/5,\\; \\cos\\theta = 4/5,\\; \\tan\\theta = 3/4$'
      },
      {
        problem: 'A ladder 10 ft long leans against a wall at a $60°$ angle. How high does it reach?',
        steps: [
          '$\\sin 60° = \\text{opposite}/\\text{hypotenuse} = h/10$.',
          '$h = 10\\sin 60° = 10 \\cdot \\dfrac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66$ ft.'
        ],
        answer: '$5\\sqrt{3} \\approx 8.66$ ft'
      }
    ],
    practice: [
      { type: 'mc', question: 'In SOH-CAH-TOA, what does TOA stand for?', choices: ['Tangent = Opposite/Adjacent', 'Tangent = Opposite/Angle', 'Tangent = Adjacent/Opposite', 'Total Over Angle'], correct: 0, explanation: 'TOA: Tangent = Opposite ÷ Adjacent.' },
      { type: 'fill', question: 'In a right triangle, opposite = 5, hypotenuse = 13. Find $\\cos\\theta$. Enter as a fraction.', answer: '12/13', altAnswers: [], explanation: 'Adjacent = $\\sqrt{169-25} = 12$; $\\cos\\theta = 12/13$.' },
      { type: 'mc', question: 'What is $\\tan(45°)$?', choices: ['$\\sqrt{2}/2$', '$\\sqrt{3}$', '$1$', '$1/\\sqrt{3}$'], correct: 2, explanation: '45-45-90 triangle: opp = adj → $\\tan 45° = 1$.' },
      { type: 'mc', question: 'What is $\\sin(30°)$?', choices: ['$\\sqrt{3}/2$', '$1/2$', '$\\sqrt{2}/2$', '$1$'], correct: 1, explanation: '30-60-90 triangle: $\\sin 30° = 1/2$.' },
      { type: 'fill', question: 'If $\\cos\\theta = 5/13$, find $\\sin\\theta$ (assume $\\theta$ is acute). Enter as a fraction.', answer: '12/13', altAnswers: [], explanation: '$\\sin^2\\theta = 1 - (5/13)^2 = 1 - 25/169 = 144/169 \\Rightarrow \\sin\\theta = 12/13$.' }
    ]
  },
  {
    id: '10.4',
    learn: `
      <div class="concept-card">
        <h3>Graphs of Sine and Cosine</h3>
        <p>The general sinusoidal function:</p>
        <div class="formula-box">$$y = A\\sin(Bx - C) + D \\qquad y = A\\cos(Bx - C) + D$$</div>
        <ul>
          <li><strong>Amplitude</strong> $= |A|$ (half the height from min to max)</li>
          <li><strong>Period</strong> $= \\dfrac{2\\pi}{|B|}$</li>
          <li><strong>Phase shift</strong> $= \\dfrac{C}{B}$ (left if negative, right if positive)</li>
          <li><strong>Vertical shift</strong> $= D$ (midline at $y = D$)</li>
        </ul>
      </div>
      <div class="concept-card">
        <h3>Key Differences: Sine vs. Cosine</h3>
        <ul>
          <li>$\\sin(0) = 0$ — sine starts at 0, rises to max</li>
          <li>$\\cos(0) = 1$ — cosine starts at its maximum</li>
          <li>$\\cos x = \\sin(x + \\pi/2)$ — cosine is sine shifted left by $\\pi/2$</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>To sketch: plot the midline ($y = D$), mark amplitude above and below, then place key points at quarter-period intervals.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'State the amplitude, period, phase shift, and vertical shift of $y = 3\\sin(2x - \\pi) + 1$.',
        steps: [
          'Amplitude: $|A| = 3$.',
          'Period: $2\\pi/B = 2\\pi/2 = \\pi$.',
          'Phase shift: $C/B = \\pi/2$ (to the right).',
          'Vertical shift: $D = 1$ (midline $y = 1$).'
        ],
        answer: 'Amplitude 3, Period $\\pi$, Phase shift $\\pi/2$ right, Midline $y = 1$'
      },
      {
        problem: 'Write an equation for a cosine function with amplitude 4, period $6\\pi$, and no shift.',
        steps: [
          'Amplitude $|A| = 4$.',
          'Period $= 2\\pi/B = 6\\pi \\Rightarrow B = 1/3$.',
          '$y = 4\\cos\\!\\left(\\dfrac{x}{3}\\right)$.'
        ],
        answer: '$y = 4\\cos(x/3)$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the amplitude of $y = -4\\cos(x)$?', choices: ['$-4$', '$4$', '$1$', '$2\\pi$'], correct: 1, explanation: 'Amplitude $= |{-4}| = 4$.' },
      { type: 'mc', question: 'What is the period of $y = \\sin(3x)$?', choices: ['$3$', '$\\pi/3$', '$2\\pi/3$', '$6\\pi$'], correct: 2, explanation: 'Period $= 2\\pi/3$.' },
      { type: 'fill', question: 'For $y = \\sin(x) + 5$, what is the midline (enter just the number)?', answer: '5', altAnswers: ['y=5'], explanation: 'Vertical shift $D = 5$ → midline at $y = 5$.' },
      { type: 'mc', question: 'What is the period of $y = \\cos(\\pi x)$?', choices: ['$\\pi$', '$2$', '$2\\pi$', '$1$'], correct: 1, explanation: 'Period $= 2\\pi/\\pi = 2$.' },
      { type: 'mc', question: 'Which function has amplitude 2 and period $4\\pi$?', choices: ['$y = 2\\sin(x/2)$', '$y = 2\\sin(2x)$', '$y = \\sin(4\\pi x)$', '$y = 4\\sin(2x)$'], correct: 0, explanation: 'Amp = 2; period = $2\\pi/(1/2) = 4\\pi$.' }
    ]
  },
  {
    id: '10.5',
    learn: `
      <div class="concept-card">
        <h3>Graph of Tangent</h3>
        <p>$y = \\tan x = \\sin x / \\cos x$ has <strong>vertical asymptotes</strong> wherever $\\cos x = 0$.</p>
        <div class="formula-box">$$y = \\tan x \\text{ has period } \\pi, \\text{ VAs at } x = \\frac{\\pi}{2} + n\\pi,\\; n \\in \\mathbb{Z}$$</div>
        <ul>
          <li>Passes through the origin: $\\tan(0) = 0$</li>
          <li>Rises from $-\\infty$ to $+\\infty$ between each pair of asymptotes</li>
          <li>No amplitude (unbounded)</li>
        </ul>
        <p>For $y = A\\tan(Bx - C) + D$: period $= \\pi/|B|$, phase shift $= C/B$.</p>
      </div>
      <div class="concept-card">
        <h3>Cotangent, Secant, and Cosecant</h3>
        <p>The three reciprocal functions:</p>
        <ul>
          <li>$y = \\cot x = \\cos x / \\sin x$: period $\\pi$, VAs where $\\sin x = 0$ (at $x = n\\pi$)</li>
          <li>$y = \\sec x = 1/\\cos x$: period $2\\pi$, VAs where $\\cos x = 0$; graph hugs $y = \\cos x$</li>
          <li>$y = \\csc x = 1/\\sin x$: period $2\\pi$, VAs where $\\sin x = 0$; graph hugs $y = \\sin x$</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>To graph $\\sec x$ or $\\csc x$: first sketch the reciprocal ($\\cos x$ or $\\sin x$), draw asymptotes at its zeros, then draw U-shapes opening away from the midline.</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'State the period and vertical asymptotes of $y = \\tan(2x)$.',
        steps: [
          'Period $= \\pi/|B| = \\pi/2$.',
          'VAs where $\\cos(2x) = 0$, i.e., $2x = \\pi/2 + n\\pi$.',
          '$x = \\pi/4 + n\\pi/2$ for all integers $n$.'
        ],
        answer: 'Period $\\pi/2$; VAs at $x = \\pi/4 + n\\pi/2$'
      },
      {
        problem: 'Describe the graph of $y = \\sec x$ using the graph of $y = \\cos x$.',
        steps: [
          'Draw $y = \\cos x$. Mark zeros at $x = \\pi/2, 3\\pi/2, \\ldots$',
          'Draw vertical asymptotes at each zero.',
          'At each maximum of $\\cos$ (value 1): $\\sec x$ has a minimum of 1. At each minimum (value -1): $\\sec x$ has a maximum of -1.',
          'Between asymptotes, draw U-shaped arches opening away from the x-axis.'
        ],
        answer: '$y = \\sec x$ has U-shaped arches with VAs at $x = \\pi/2 + n\\pi$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the period of $y = \\tan x$?', choices: ['$2\\pi$', '$\\pi$', '$\\pi/2$', '$4\\pi$'], correct: 1, explanation: 'Tangent has period $\\pi$.' },
      { type: 'mc', question: 'Where does $y = \\tan x$ have vertical asymptotes?', choices: ['$x = n\\pi$', '$x = \\pi/2 + n\\pi$', '$x = 2n\\pi$', '$x = \\pi/4 + n\\pi$'], correct: 1, explanation: 'VAs where $\\cos x = 0$: $x = \\pi/2 + n\\pi$.' },
      { type: 'mc', question: 'What is the period of $y = \\tan(3x)$?', choices: ['$3\\pi$', '$\\pi/3$', '$\\pi$', '$6\\pi$'], correct: 1, explanation: 'Period $= \\pi/|B| = \\pi/3$.' },
      { type: 'mc', question: 'Which function is the reciprocal of $\\sin x$?', choices: ['$\\sec x$', '$\\cot x$', '$\\csc x$', '$\\tan x$'], correct: 2, explanation: '$\\csc x = 1/\\sin x$.' },
      { type: 'fill', question: 'For $y = \\cot x$, the vertical asymptotes occur at $x = ?$ (in terms of n). Enter: npi.', answer: 'npi', altAnswers: ['nπ', 'n*pi'], explanation: '$\\cot x = \\cos x/\\sin x$; VAs where $\\sin x = 0$, i.e., $x = n\\pi$.' }
    ]
  },
  {
    id: '10.6',
    learn: `
      <div class="concept-card">
        <h3>Trigonometric Identities</h3>
        <p>Identities are equations true for all valid values of $\\theta$. They are used to simplify expressions and solve equations.</p>
        <div class="formula-box">
          $$\\sin^2\\theta + \\cos^2\\theta = 1 \\quad \\text{(Pythagorean)}$$
          $$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$
          $$\\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\csc\\theta = \\frac{1}{\\sin\\theta}$$
        </div>
      </div>
      <div class="concept-card">
        <h3>Derived Pythagorean Identities</h3>
        <p>Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$:</p>
        <div class="formula-box">$$\\tan^2\\theta + 1 = \\sec^2\\theta$$</div>
        <p>Dividing by $\\sin^2\\theta$:</p>
        <div class="formula-box">$$1 + \\cot^2\\theta = \\csc^2\\theta$$</div>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>When simplifying, look for opportunities to substitute using these identities — especially when you see $1 - \\sin^2\\theta$ (= $\\cos^2\\theta$) or $1 - \\cos^2\\theta$ (= $\\sin^2\\theta$).</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Simplify $\\dfrac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta$.',
        steps: [
          '$= \\dfrac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta$',
          'Cancel $\\cos\\theta$: $= \\sin\\theta$.'
        ],
        answer: '$\\sin\\theta$'
      },
      {
        problem: 'Simplify $(1 - \\sin^2\\theta)\\sec^2\\theta$.',
        steps: [
          '$1 - \\sin^2\\theta = \\cos^2\\theta$.',
          '$\\cos^2\\theta \\cdot \\dfrac{1}{\\cos^2\\theta} = 1$.'
        ],
        answer: '$1$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Which is the Pythagorean identity?', choices: ['$\\sin\\theta = \\cos\\theta$', '$\\sin^2\\theta + \\cos^2\\theta = 1$', '$\\tan\\theta = \\sin\\theta \\cdot \\cos\\theta$', '$\\sec^2\\theta = 1$'], correct: 1, explanation: 'The fundamental Pythagorean identity.' },
      { type: 'mc', question: 'Simplify $1 - \\cos^2\\theta$.', choices: ['$\\sin^2\\theta$', '$\\tan^2\\theta$', '$\\cos^2\\theta$', '$-\\sin^2\\theta$'], correct: 0, explanation: 'From $\\sin^2\\theta + \\cos^2\\theta = 1$: $1 - \\cos^2\\theta = \\sin^2\\theta$.' },
      { type: 'fill', question: 'If $\\sin\\theta = 3/5$, find $\\cos^2\\theta$ using the Pythagorean identity. Enter as a fraction.', answer: '16/25', altAnswers: ['0.64'], explanation: '$\\cos^2\\theta = 1 - (3/5)^2 = 1 - 9/25 = 16/25$.' },
      { type: 'mc', question: 'What does $\\sec\\theta$ equal?', choices: ['$1/\\sin\\theta$', '$\\cos\\theta$', '$1/\\cos\\theta$', '$\\sin\\theta/\\cos\\theta$'], correct: 2, explanation: '$\\sec\\theta = 1/\\cos\\theta$ by definition.' },
      { type: 'mc', question: 'Simplify $\\tan^2\\theta + 1$.', choices: ['$\\sec^2\\theta$', '$\\csc^2\\theta$', '$\\cos^2\\theta$', '$1$'], correct: 0, explanation: '$\\tan^2\\theta + 1 = \\sec^2\\theta$.' }
    ]
  },
  {
    id: '10.7',
    learn: `
      <div class="concept-card">
        <h3>Solving Trigonometric Equations</h3>
        <p>Solving trig equations typically involves:</p>
        <ol>
          <li>Isolate the trig function.</li>
          <li>Use inverse trig to find a reference angle.</li>
          <li>Determine all solutions in the required interval.</li>
          <li>Use periodicity to write the general solution.</li>
        </ol>
        <div class="formula-box">$$\\sin\\theta = k \\implies \\theta = \\arcsin(k) + 2\\pi n \\text{ or } \\pi - \\arcsin(k) + 2\\pi n$$</div>
      </div>
      <div class="concept-card">
        <h3>General Solutions</h3>
        <p>Since trig functions are periodic, most equations have infinitely many solutions:</p>
        <ul>
          <li>$\\sin$ and $\\cos$: period $2\\pi$ → add $2\\pi n$</li>
          <li>$\\tan$: period $\\pi$ → add $\\pi n$</li>
        </ul>
        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>When asked for solutions on $[0, 2\\pi)$, list only the angles in that interval. For the general solution, append $+ 2\\pi n$ (or $+ \\pi n$ for tangent).</p>
        </div>
      </div>`,
    examples: [
      {
        problem: 'Solve $\\sin\\theta = \\dfrac{1}{2}$ on $[0, 2\\pi)$.',
        steps: [
          'Reference angle: $\\arcsin(1/2) = \\pi/6$.',
          'Sine is positive in QI and QII.',
          '$\\theta = \\pi/6$ and $\\theta = \\pi - \\pi/6 = 5\\pi/6$.'
        ],
        answer: '$\\theta = \\pi/6,\\; 5\\pi/6$'
      },
      {
        problem: 'Solve $2\\cos\\theta - 1 = 0$ on $[0, 2\\pi)$.',
        steps: [
          '$\\cos\\theta = 1/2$.',
          'Reference angle: $\\pi/3$.',
          'Cosine is positive in QI and QIV.',
          '$\\theta = \\pi/3$ and $\\theta = 2\\pi - \\pi/3 = 5\\pi/3$.'
        ],
        answer: '$\\theta = \\pi/3,\\; 5\\pi/3$'
      }
    ],
    practice: [
      { type: 'mc', question: 'Solve $\\cos\\theta = 0$ on $[0, 2\\pi)$.', choices: ['$\\pi/2$', '$\\pi$ only', '$\\pi/2$ and $3\\pi/2$', '$0$ and $\\pi$'], correct: 2, explanation: 'Cosine is 0 at $\\pi/2$ and $3\\pi/2$.' },
      { type: 'mc', question: 'Solve $\\sin\\theta = -1$ on $[0, 2\\pi)$.', choices: ['$\\pi/2$', '$\\pi$', '$3\\pi/2$', '$2\\pi$'], correct: 2, explanation: '$\\sin = -1$ at the bottom of the unit circle: $3\\pi/2$.' },
      { type: 'fill', question: 'Solve $\\tan\\theta = 1$ on $[0, \\pi)$. Enter the radian answer (e.g., pi/4).', answer: 'pi/4', altAnswers: ['π/4'], explanation: '$\\tan(\\pi/4) = 1$; only solution in $[0,\\pi)$.' },
      { type: 'mc', question: 'How many solutions does $\\sin\\theta = 0.5$ have on $[0, 2\\pi)$?', choices: ['0', '1', '2', '4'], correct: 2, explanation: 'One in QI ($\\pi/6$), one in QII ($5\\pi/6$).' },
      { type: 'mc', question: 'Solve $2\\sin\\theta + \\sqrt{2} = 0$ for $\\theta$ in $[0,2\\pi)$.', choices: ['$\\pi/4$ and $3\\pi/4$', '$5\\pi/4$ and $7\\pi/4$', '$\\pi/4$ and $5\\pi/4$', '$3\\pi/4$ and $5\\pi/4$'], correct: 1, explanation: '$\\sin\\theta = -\\sqrt{2}/2$; negative sine in QIII and QIV: $5\\pi/4$ and $7\\pi/4$.' }
    ]
  }
];
