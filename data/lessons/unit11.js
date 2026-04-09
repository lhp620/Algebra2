// data/lessons/unit11.js — Unit 11: Conic Sections & Probability

export const lessons = [
  {
    id: '11.1',
    learn: `
      <div class="concept-card">
        <h3>Circles</h3>
        <p>A <strong>circle</strong> is the set of all points equidistant from a center $(h, k)$ with radius $r$.</p>
        <div class="formula-box">$$(x - h)^2 + (y - k)^2 = r^2$$</div>
        <p>To graph: locate the center $(h, k)$, then move $r$ units in each direction.</p>
      </div>
      <div class="concept-card">
        <h3>General Form → Standard Form</h3>
        <p>Complete the square in both $x$ and $y$ to convert $x^2 + y^2 + Dx + Ey + F = 0$ to standard form.</p>
        <div class="tip-box">Remember: $(x + a)^2 = x^2 + 2ax + a^2$ — add $(a)^2$ to both sides when completing the square.</div>
      </div>`,
    examples: [
      {
        problem: 'Write the equation of a circle with center $(-2, 3)$ and radius $5$.',
        steps: [
          '$(x - (-2))^2 + (y - 3)^2 = 5^2$',
          '$(x + 2)^2 + (y - 3)^2 = 25$'
        ],
        answer: '$(x+2)^2 + (y-3)^2 = 25$'
      },
      {
        problem: 'Find the center and radius of $x^2 + y^2 - 6x + 4y - 3 = 0$.',
        steps: [
          'Group: $(x^2 - 6x) + (y^2 + 4y) = 3$.',
          'Complete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 3 + 9 + 4$.',
          '$(x-3)^2 + (y+2)^2 = 16$.',
          'Center $(3, -2)$, radius $4$.'
        ],
        answer: 'Center $(3,-2)$, $r = 4$'
      }
    ],
    practice: [
      { type: 'mc', question: 'What is the center of $(x-1)^2 + (y+4)^2 = 9$?', choices: ['$(1, 4)$', '$(-1, 4)$', '$(1, -4)$', '$(-1, -4)$'], correct: 2, explanation: 'Center is $(h, k) = (1, -4)$.' },
      { type: 'fill', question: 'What is the radius of $(x+3)^2 + (y-2)^2 = 49$?', answer: '7', altAnswers: [], explanation: '$r^2 = 49 \\Rightarrow r = 7$.' },
      { type: 'mc', question: 'Which equation represents a circle centered at the origin with radius 6?', choices: ['$x^2 - y^2 = 36$', '$x^2 + y^2 = 36$', '$x^2 + y^2 = 6$', '$(x-6)^2 + y^2 = 0$'], correct: 1, explanation: 'Center $(0,0)$, $r=6$: $x^2+y^2=36$.' },
      { type: 'fill', question: 'Find the radius of $x^2 + y^2 = 100$.', answer: '10', altAnswers: [], explanation: '$r^2 = 100 \\Rightarrow r = 10$.' },
      { type: 'mc', question: 'After completing the square, $x^2 + y^2 - 4x - 2y - 4 = 0$ becomes:', choices: ['$(x-2)^2+(y-1)^2=9$', '$(x+2)^2+(y+1)^2=9$', '$(x-2)^2+(y-1)^2=4$', '$(x-4)^2+(y-2)^2=9$'], correct: 0, explanation: 'Add 4 and 1 to both sides: $= 4+4+1 = 9$.' }
    ]
  },
  {
    id: '11.2',
    learn: `
      <div class="concept-card">
        <h3>Ellipses</h3>
        <p>An <strong>ellipse</strong> is the set of points where the sum of distances to two foci is constant.</p>
        <div class="formula-box">$$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$$</div>
        <ul>
          <li>Center: $(h, k)$</li>
          <li>If $a^2 > b^2$: major axis is horizontal (length $2a$), minor axis vertical (length $2b$)</li>
          <li>If $b^2 > a^2$: major axis is vertical</li>
          <li>$c^2 = |a^2 - b^2|$, where $c$ = distance from center to each focus</li>
        </ul>
        <div class="tip-box">A circle is a special ellipse where $a = b = r$.</div>
      </div>`,
    examples: [
      {
        problem: 'Find the vertices and foci of $\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$.',
        steps: [
          '$a^2 = 25 \\Rightarrow a = 5$; $b^2 = 9 \\Rightarrow b = 3$. Center $(0,0)$.',
          '$a > b$ → horizontal major axis; vertices at $(\\pm 5, 0)$.',
          '$c^2 = 25 - 9 = 16 \\Rightarrow c = 4$; foci at $(\\pm 4, 0)$.'
        ],
        answer: 'Vertices $(\\pm 5, 0)$; Foci $(\\pm 4, 0)$'
      },
      {
        problem: 'Write the equation of an ellipse with center $(1, -2)$, $a = 6$ (horizontal), $b = 3$.',
        steps: [
          '$\\dfrac{(x-1)^2}{36} + \\dfrac{(y+2)^2}{9} = 1$.'
        ],
        answer: '$\\dfrac{(x-1)^2}{36} + \\dfrac{(y+2)^2}{9} = 1$'
      }
    ],
    practice: [
      { type: 'mc', question: 'For $\\dfrac{x^2}{16} + \\dfrac{y^2}{4} = 1$, the major axis is:', choices: ['Vertical', 'Horizontal', 'Diagonal', 'Circular'], correct: 1, explanation: '$a^2=16 > b^2=4$, so major axis is horizontal.' },
      { type: 'fill', question: 'Find $c$ for $\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$.', answer: '3', altAnswers: [], explanation: '$c^2 = 25-16 = 9 \\Rightarrow c = 3$.' },
      { type: 'mc', question: 'What is the length of the major axis of $\\dfrac{x^2}{36} + \\dfrac{y^2}{20} = 1$?', choices: ['$6$', '$12$', '$\\sqrt{20}$', '$20$'], correct: 1, explanation: '$a^2=36 \\Rightarrow a=6$; major axis length $= 2a = 12$.' },
      { type: 'mc', question: 'An ellipse with $a^2$ under $y^2$ opens:', choices: ['Horizontally', 'Vertically', 'Upward only', 'As a circle'], correct: 1, explanation: 'Larger denominator under $y^2$ → vertical major axis.' },
      { type: 'fill', question: 'Center of $\\dfrac{(x-3)^2}{9} + \\dfrac{(y+1)^2}{4} = 1$? Enter as (h,k).', answer: '(3,-1)', altAnswers: ['3,-1'], explanation: 'Center $(h,k) = (3,-1)$.' }
    ]
  },
  {
    id: '11.3',
    learn: `
      <div class="concept-card">
        <h3>Hyperbolas</h3>
        <p>A <strong>hyperbola</strong> is the set of points where the <em>difference</em> of distances to two foci is constant.</p>
        <div class="formula-box">
          $$\\text{Opens left/right: } \\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$$
          $$\\text{Opens up/down: } \\frac{(y-k)^2}{a^2} - \\frac{(x-h)^2}{b^2} = 1$$
        </div>
        <ul>
          <li>$c^2 = a^2 + b^2$ (note: <em>sum</em>, unlike ellipses)</li>
          <li>Asymptotes: $y - k = \\pm \\dfrac{b}{a}(x - h)$ (for horizontal hyperbola)</li>
        </ul>
        <div class="warning-box">In a hyperbola, $c^2 = a^2 + b^2$. In an ellipse, $c^2 = a^2 - b^2$. Don't mix them up!</div>
      </div>`,
    examples: [
      {
        problem: 'Find vertices, foci, and asymptotes of $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$.',
        steps: [
          '$a^2=9, b^2=16$; opens left/right. Center $(0,0)$.',
          'Vertices: $(\\pm 3, 0)$.',
          '$c^2 = 9+16 = 25 \\Rightarrow c = 5$; Foci: $(\\pm 5, 0)$.',
          'Asymptotes: $y = \\pm \\dfrac{4}{3}x$.'
        ],
        answer: 'Vertices $(\\pm3,0)$; Foci $(\\pm5,0)$; Asymptotes $y=\\pm\\frac{4}{3}x$'
      },
      {
        problem: 'Write the equation of a hyperbola opening up/down with $a=2$, $b=3$, centered at origin.',
        steps: [
          '$\\dfrac{y^2}{4} - \\dfrac{x^2}{9} = 1$.'
        ],
        answer: '$\\dfrac{y^2}{4} - \\dfrac{x^2}{9} = 1$'
      }
    ],
    practice: [
      { type: 'mc', question: 'For $\\dfrac{y^2}{4} - \\dfrac{x^2}{9} = 1$, the hyperbola opens:', choices: ['Left/right', 'Up/down', 'Diagonally', 'In all directions'], correct: 1, explanation: '$y^2$ term is positive → opens up/down.' },
      { type: 'fill', question: 'Find $c$ for $\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$.', answer: '5', altAnswers: [], explanation: '$c^2 = 16+9 = 25 \\Rightarrow c = 5$.' },
      { type: 'mc', question: 'The asymptotes of $\\dfrac{x^2}{4} - \\dfrac{y^2}{9} = 1$ are:', choices: ['$y = \\pm \\frac{2}{3}x$', '$y = \\pm \\frac{3}{2}x$', '$y = \\pm 2x$', '$y = \\pm 3x$'], correct: 1, explanation: '$b/a = 3/2$; asymptotes $y = \\pm\\frac{3}{2}x$.' },
      { type: 'mc', question: 'The vertices of $\\dfrac{x^2}{25} - \\dfrac{y^2}{11} = 1$ are at:', choices: ['$(\\pm 5, 0)$', '$(0, \\pm 5)$', '$(\\pm 11, 0)$', '$(\\pm 6, 0)$'], correct: 0, explanation: 'Opens left/right; vertices at $(\\pm a, 0) = (\\pm 5, 0)$.' },
      { type: 'mc', question: 'Key difference between ellipse and hyperbola formulas for $c$:', choices: ['Both use $c^2 = a^2 + b^2$', 'Ellipse: $c^2 = a^2 - b^2$; Hyperbola: $c^2 = a^2 + b^2$', 'Ellipse: $c^2 = a^2 + b^2$; Hyperbola: $c^2 = a^2 - b^2$', 'Both use $c^2 = a^2 - b^2$'], correct: 1, explanation: 'Ellipse subtracts; hyperbola adds.' }
    ]
  },
  {
    id: '11.4',
    learn: `
      <div class="concept-card">
        <h3>Parabolas (Conic Form)</h3>
        <p>A conic <strong>parabola</strong> is defined as the set of points equidistant from a <strong>focus</strong> $F$ and a <strong>directrix</strong> line $d$.</p>
        <div class="formula-box">
          $$\\text{Opens up/down:} \\quad (x-h)^2 = 4p(y-k)$$
          $$\\text{Opens left/right:} \\quad (y-k)^2 = 4p(x-h)$$
        </div>
        <ul>
          <li>Vertex: $(h, k)$</li>
          <li>Focus: distance $|p|$ from vertex along the axis</li>
          <li>Directrix: distance $|p|$ on the opposite side</li>
          <li>$p > 0$: opens up/right; $p < 0$: opens down/left</li>
        </ul>
        <div class="tip-box">The <strong>latus rectum</strong> (chord through focus perpendicular to axis) has length $|4p|$.</div>
      </div>`,
    examples: [
      {
        problem: 'Find the focus and directrix of $(x-2)^2 = 8(y+1)$.',
        steps: [
          'Vertex: $(2, -1)$; $4p = 8 \\Rightarrow p = 2$.',
          'Opens upward (positive $p$).',
          'Focus: $(2, -1+2) = (2, 1)$.',
          'Directrix: $y = -1 - 2 = -3$.'
        ],
        answer: 'Focus $(2, 1)$; Directrix $y = -3$'
      },
      {
        problem: 'Write the equation of a parabola opening rightward with vertex at $(1, 0)$ and focus at $(3, 0)$.',
        steps: [
          '$p = 3 - 1 = 2$; opens right → $(y-0)^2 = 4(2)(x-1)$.',
          '$y^2 = 8(x-1)$.'
        ],
        answer: '$y^2 = 8(x-1)$'
      }
    ],
    practice: [
      { type: 'mc', question: 'For $x^2 = 12y$, find $p$.', choices: ['$12$', '$3$', '$4$', '$6$'], correct: 1, explanation: '$4p = 12 \\Rightarrow p = 3$.' },
      { type: 'mc', question: 'The parabola $y^2 = -8x$ opens:', choices: ['Up', 'Down', 'Right', 'Left'], correct: 3, explanation: '$(y-k)^2 = 4p(x-h)$ with $4p = -8 < 0$ → opens left.' },
      { type: 'fill', question: 'For $x^2 = 4y$, what is the directrix? Enter: y=-1.', answer: 'y=-1', altAnswers: ['y = -1'], explanation: '$4p=4 \\Rightarrow p=1$; directrix: $y = -p = -1$.' },
      { type: 'mc', question: 'Which equation has its focus at $(0, 3)$?', choices: ['$x^2 = 6y$', '$x^2 = 12y$', '$x^2 = 3y$', '$y^2 = 12x$'], correct: 1, explanation: '$4p=12 \\Rightarrow p=3$; focus at $(0,3)$.' },
      { type: 'mc', question: 'The vertex of $(y+2)^2 = 4(x-3)$ is at:', choices: ['$(3, -2)$', '$(-2, 3)$', '$(3, 2)$', '$(-3, 2)$'], correct: 0, explanation: 'Vertex = $(h, k) = (3, -2)$.' }
    ]
  },
  {
    id: '11.5',
    learn: `
      <div class="concept-card">
        <h3>Fundamental Counting Principle</h3>
        <p>If event $A$ can occur in $m$ ways and event $B$ in $n$ ways, then both together can occur in $m \\times n$ ways.</p>
        <div class="formula-box">$$\\text{Total outcomes} = n_1 \\times n_2 \\times \\cdots \\times n_k$$</div>
      </div>
      <div class="concept-card">
        <h3>Permutations</h3>
        <p>A <strong>permutation</strong> is an ordered arrangement of items.</p>
        <div class="formula-box">$$P(n, r) = \\frac{n!}{(n-r)!}$$</div>
        <p>"Arrange $r$ items from $n$ distinct items in order."</p>
      </div>
      <div class="concept-card">
        <h3>Combinations</h3>
        <p>A <strong>combination</strong> is a selection of items where order does <em>not</em> matter.</p>
        <div class="formula-box">$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$</div>
        <div class="tip-box">Use <strong>P</strong>ermutation when order matters (<strong>P</strong>assword, <strong>P</strong>odium finish). Use <strong>C</strong>ombination when order doesn't (<strong>C</strong>ommittee, <strong>C</strong>hoosing toppings).</div>
      </div>`,
    examples: [
      {
        problem: 'How many ways can 8 runners finish 1st, 2nd, and 3rd?',
        steps: [
          'Order matters → permutation.',
          '$P(8, 3) = \\dfrac{8!}{(8-3)!} = \\dfrac{8!}{5!} = 8 \\times 7 \\times 6 = 336$.'
        ],
        answer: '$336$ ways'
      },
      {
        problem: 'A committee of 3 is chosen from 10 people. How many ways?',
        steps: [
          'Order doesn\'t matter → combination.',
          '$C(10, 3) = \\dfrac{10!}{3! \\cdot 7!} = \\dfrac{10 \\times 9 \\times 8}{6} = 120$.'
        ],
        answer: '$120$ ways'
      }
    ],
    practice: [
      { type: 'mc', question: 'Evaluate $P(5, 2)$.', choices: ['$10$', '$20$', '$25$', '$120$'], correct: 1, explanation: '$P(5,2) = 5 \\times 4 = 20$.' },
      { type: 'fill', question: 'Evaluate $C(6, 2)$.', answer: '15', altAnswers: [], explanation: '$C(6,2) = \\frac{6!}{2!4!} = \\frac{30}{2} = 15$.' },
      { type: 'mc', question: 'How many 4-letter arrangements of the word MATH are there?', choices: ['$4$', '$16$', '$24$', '$256$'], correct: 2, explanation: '$P(4,4) = 4! = 24$.' },
      { type: 'mc', question: 'Choosing 2 books from 7 to read (order doesn\'t matter): how many ways?', choices: ['$42$', '$21$', '$14$', '$7$'], correct: 1, explanation: '$C(7,2) = 21$.' },
      { type: 'fill', question: 'Evaluate $C(10, 10)$.', answer: '1', altAnswers: [], explanation: '$C(n,n) = 1$ — only one way to choose all items.' }
    ]
  },
  {
    id: '11.6',
    learn: `
      <div class="concept-card">
        <h3>Probability Basics</h3>
        <div class="formula-box">$$P(E) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$</div>
        <p>$0 \\le P(E) \\le 1$; $P(\\text{impossible}) = 0$; $P(\\text{certain}) = 1$.</p>
        <p>$P(E^c) = 1 - P(E)$ (complement rule).</p>
      </div>
      <div class="concept-card">
        <h3>Addition Rule</h3>
        <div class="formula-box">$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</div>
        <p>If $A$ and $B$ are <strong>mutually exclusive</strong> (cannot both occur): $P(A \\cup B) = P(A) + P(B)$.</p>
      </div>
      <div class="concept-card">
        <h3>Multiplication Rule & Independence</h3>
        <div class="formula-box">$$P(A \\cap B) = P(A) \\cdot P(B|A)$$</div>
        <p>If $A$ and $B$ are <strong>independent</strong>: $P(B|A) = P(B)$, so $P(A \\cap B) = P(A) \\cdot P(B)$.</p>
        <div class="tip-box"><strong>Conditional probability</strong>: $P(B|A) = \\dfrac{P(A \\cap B)}{P(A)}$ — probability of $B$ given that $A$ has occurred.</div>
      </div>`,
    examples: [
      {
        problem: 'A bag has 3 red, 4 blue, and 5 green balls. Find $P(\\text{red or blue})$.',
        steps: [
          'Total: $3+4+5 = 12$ balls.',
          '$P(\\text{red}) = 3/12$; $P(\\text{blue}) = 4/12$.',
          'Mutually exclusive: $P(\\text{red or blue}) = 7/12$.'
        ],
        answer: '$7/12$'
      },
      {
        problem: 'Two dice are rolled. Find $P(\\text{both show 4})$.',
        steps: [
          '$P(\\text{die 1 shows 4}) = 1/6$.',
          '$P(\\text{die 2 shows 4}) = 1/6$.',
          'Independent: $P(\\text{both 4}) = 1/6 \\times 1/6 = 1/36$.'
        ],
        answer: '$1/36$'
      }
    ],
    practice: [
      { type: 'mc', question: 'A coin is flipped. $P(\\text{heads}) = ?$', choices: ['$0$', '$1$', '$1/2$', '$2$'], correct: 2, explanation: '1 favorable outcome out of 2 total.' },
      { type: 'mc', question: '$P(\\text{rolling a 3 or 5 on a die}) = ?$', choices: ['$1/3$', '$1/6$', '$1/2$', '$2$'], correct: 0, explanation: '2 outcomes out of 6: $2/6 = 1/3$.' },
      { type: 'fill', question: 'If $P(E) = 0.3$, what is $P(E^c)$?', answer: '0.7', altAnswers: ['7/10'], explanation: '$P(E^c) = 1 - 0.3 = 0.7$.' },
      { type: 'mc', question: 'Two independent events: $P(A) = 0.4$, $P(B) = 0.5$. Find $P(A \\cap B)$.', choices: ['$0.9$', '$0.2$', '$0.1$', '$0.45$'], correct: 1, explanation: 'Independent: $P(A \\cap B) = 0.4 \\times 0.5 = 0.2$.' },
      { type: 'mc', question: 'If $P(A) = 0.6$, $P(B) = 0.5$, $P(A \\cap B) = 0.3$, find $P(A \\cup B)$.', choices: ['$0.8$', '$1.1$', '$0.3$', '$0.5$'], correct: 0, explanation: '$P(A \\cup B) = 0.6 + 0.5 - 0.3 = 0.8$.' }
    ]
  },
  {
    id: '11.7',
    learn: `
      <div class="concept-card">
        <h3>The Normal Distribution</h3>
        <p>The <strong>normal distribution</strong> (bell curve) is a symmetric, continuous distribution defined by its <strong>mean</strong> $\\mu$ and <strong>standard deviation</strong> $\\sigma$.</p>
        <ul>
          <li>Symmetric about the mean $\\mu$</li>
          <li>$\\approx 68\\%$ of data falls within $1\\sigma$ of the mean</li>
          <li>$\\approx 95\\%$ of data falls within $2\\sigma$ of the mean</li>
          <li>$\\approx 99.7\\%$ of data falls within $3\\sigma$ of the mean</li>
        </ul>
        <div class="tip-box"><strong>Empirical Rule (68-95-99.7 Rule)</strong>: memorize these three percentages for problems about normal distributions.</div>
      </div>
      <div class="concept-card">
        <h3>Z-Scores</h3>
        <p>A <strong>z-score</strong> measures how many standard deviations a value $x$ is from the mean:</p>
        <div class="formula-box">$$z = \\frac{x - \\mu}{\\sigma}$$</div>
        <ul>
          <li>$z = 0$: value equals the mean</li>
          <li>$z > 0$: value is above the mean</li>
          <li>$z < 0$: value is below the mean</li>
        </ul>
        <p>Z-scores allow comparison across different normal distributions. The <strong>standard normal distribution</strong> has $\\mu = 0$, $\\sigma = 1$.</p>
      </div>`,
    examples: [
      {
        problem: 'Test scores are normally distributed with $\\mu = 75$ and $\\sigma = 10$. What percent of students score between 65 and 85?',
        steps: [
          '$65 = 75 - 10 = \\mu - \\sigma$ and $85 = 75 + 10 = \\mu + \\sigma$.',
          'By the Empirical Rule, about $68\\%$ of data falls within $1\\sigma$ of the mean.',
          'Approximately $68\\%$ of students score between 65 and 85.'
        ],
        answer: 'Approximately $68\\%$'
      },
      {
        problem: 'A student scores 90 on a test with $\\mu = 75$ and $\\sigma = 10$. Find and interpret the z-score.',
        steps: [
          '$z = \\dfrac{90 - 75}{10} = \\dfrac{15}{10} = 1.5$.',
          'The score is $1.5$ standard deviations above the mean.',
          'From a z-table, $z = 1.5$ corresponds to approximately the $93.3$rd percentile.'
        ],
        answer: '$z = 1.5$; score is at approximately the 93rd percentile'
      },
      {
        problem: 'Heights of adults are normally distributed with $\\mu = 68$ in and $\\sigma = 3$ in. What percent are between 62 and 74 inches?',
        steps: [
          '$62 = 68 - 2(3) = \\mu - 2\\sigma$ and $74 = 68 + 2(3) = \\mu + 2\\sigma$.',
          'By the Empirical Rule, about $95\\%$ of data falls within $2\\sigma$ of the mean.'
        ],
        answer: 'Approximately $95\\%$'
      }
    ],
    practice: [
      { type: 'mc', question: 'In a normal distribution, approximately what percent of data falls within 1 standard deviation of the mean?', choices: ['$50\\%$', '$68\\%$', '$95\\%$', '$99.7\\%$'], correct: 1, explanation: 'The Empirical Rule: 68% within 1$\\sigma$.' },
      { type: 'fill', question: 'Find the z-score for $x = 80$ when $\\mu = 70$ and $\\sigma = 5$.', answer: '2', altAnswers: [], explanation: '$z = (80-70)/5 = 10/5 = 2$.' },
      { type: 'mc', question: 'A z-score of $-1.5$ means the value is:', choices: ['1.5 standard deviations above the mean', '1.5 standard deviations below the mean', 'In the 1.5th percentile', 'Impossible'], correct: 1, explanation: 'Negative z-score → below the mean.' },
      { type: 'mc', question: 'Exam scores: $\\mu = 80$, $\\sigma = 6$. About what percent score between 68 and 92?', choices: ['$68\\%$', '$95\\%$', '$99.7\\%$', '$50\\%$'], correct: 1, explanation: '$68 = 80-2(6)$ and $92 = 80+2(6)$: within $2\\sigma$ → about 95%.' },
      { type: 'fill', question: 'If $\\mu = 50$ and $\\sigma = 8$, what value has a z-score of $-1$?', answer: '42', altAnswers: [], explanation: '$x = \\mu + z\\sigma = 50 + (-1)(8) = 42$.' }
    ]
  }
];
