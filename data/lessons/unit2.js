// data/lessons/unit2.js — Unit 2: Linear Functions & Systems

export const lessons = [
  // ── 2.1 ──────────────────────────────────────────────────────────────────
  {
    id: '2.1',
    learn: `
      <div class="concept-card">
        <h2>📖 Slope & Equations of Lines</h2>
        <p>Every non-vertical line has a <strong>slope</strong> — a number that measures its steepness and direction. Positive slope rises left to right; negative slope falls.</p>

        <div class="formula-box">
          <div class="formula-label">Slope Formula</div>
          $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$
        </div>

        <h3>Three Forms of a Line</h3>

        <div class="formula-box">
          <div class="formula-label">Slope-Intercept Form</div>
          $$y = mx + b$$
        </div>
        <p>$m$ = slope, $b$ = y-intercept. Best for graphing quickly.</p>

        <div class="formula-box">
          <div class="formula-label">Point-Slope Form</div>
          $$y - y_1 = m(x - x_1)$$
        </div>
        <p>Use when you know a point $(x_1, y_1)$ and the slope $m$.</p>

        <div class="formula-box">
          <div class="formula-label">Standard Form</div>
          $$Ax + By = C$$
        </div>
        <p>$A$, $B$, $C$ are integers; $A \\geq 0$. Useful for finding intercepts quickly.</p>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Horizontal lines have slope 0 ($y = k$). Vertical lines have undefined slope ($x = k$).</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Find the slope between $(2, 5)$ and $(6, 13)$, then write the equation.',
        steps: [
          'Slope: $m = \\dfrac{13 - 5}{6 - 2} = \\dfrac{8}{4} = 2$',
          'Use point-slope with $(2, 5)$: $y - 5 = 2(x - 2)$',
          'Distribute and simplify: $y - 5 = 2x - 4 \\implies y = 2x + 1$',
        ],
        answer: '$y = 2x + 1$',
      },
      {
        problem: 'Write the equation of the line with slope $-\\frac{3}{4}$ and y-intercept $2$.',
        steps: [
          'Use slope-intercept form directly: $y = mx + b$',
          'Substitute $m = -3/4$ and $b = 2$',
        ],
        answer: '$y = -\\dfrac{3}{4}x + 2$',
      },
    ],
    practice: [
      { type: 'mc', question: 'What is the slope of the line through $(1, 3)$ and $(4, 9)$?', choices: ['$m = 1$', '$m = 2$', '$m = 3$', '$m = 4$'], correct: 1, explanation: '$m = (9-3)/(4-1) = 6/3 = 2$.' },
      { type: 'fill', question: 'What is the y-intercept of the line $y = 3x - 7$?', answer: '-7', altAnswers: ['b=-7', '-7'], explanation: 'In $y = mx + b$, b is the y-intercept: $b = -7$.' },
      { type: 'mc', question: 'Which form is $y - 4 = 3(x - 1)$?', choices: ['Standard', 'Slope-intercept', 'Point-slope', 'Vertex'], correct: 2, explanation: '$y - y_1 = m(x - x_1)$ is point-slope form.' },
      { type: 'mc', question: 'Find the equation of the line through $(0, -3)$ with slope $5$:', choices: ['$y = 5x - 3$', '$y = -3x + 5$', '$y = 5x + 3$', '$y = -5x - 3$'], correct: 0, explanation: 'y-intercept is $-3$, slope is $5$: $y = 5x - 3$.' },
      { type: 'fill', question: 'The slope of a horizontal line is ___. Enter a number.', answer: '0', explanation: 'Horizontal lines have equation $y = k$, so slope $m = 0$.' },
    ],
  },

  // ── 2.2 ──────────────────────────────────────────────────────────────────
  {
    id: '2.2',
    learn: `
      <div class="concept-card">
        <h2>📖 Parallel & Perpendicular Lines</h2>
        <p>Two lines in the same plane are either parallel, perpendicular, or neither — determined entirely by their slopes.</p>

        <div class="formula-box">
          <div class="formula-label">Parallel Lines — Equal Slopes</div>
          $$\\ell_1 \\parallel \\ell_2 \\iff m_1 = m_2 \\text{ (and different y-intercepts)}$$
        </div>

        <div class="formula-box">
          <div class="formula-label">Perpendicular Lines — Negative Reciprocal Slopes</div>
          $$\\ell_1 \\perp \\ell_2 \\iff m_2 = -\\frac{1}{m_1} \\iff m_1 \\cdot m_2 = -1$$
        </div>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>To find the perpendicular slope: <em>flip</em> the fraction and <em>change</em> the sign. Example: slope $\\frac{2}{3}$ → perpendicular slope $-\\frac{3}{2}$.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Line $\\ell_1$: $y = 3x + 1$. Write the equation of a parallel line through $(2, 7)$.',
        steps: [
          'Parallel lines have equal slopes. Slope of $\\ell_1$ is $m = 3$.',
          'Use point-slope: $y - 7 = 3(x - 2)$',
          'Simplify: $y = 3x + 1$ — wait, that is the same line. Try $(2, 4)$: $y - 4 = 3(x-2) \\implies y = 3x - 2$.',
        ],
        answer: '$y = 3x - 2$ (any line with slope 3 and different y-intercept)',
      },
      {
        problem: 'Write the equation of a line perpendicular to $y = \\frac{2}{5}x - 3$ through $(4, 1)$.',
        steps: [
          'Slope of given line: $m_1 = 2/5$',
          'Perpendicular slope: $m_2 = -\\dfrac{5}{2}$',
          'Point-slope: $y - 1 = -\\dfrac{5}{2}(x - 4)$',
          'Distribute: $y - 1 = -\\dfrac{5}{2}x + 10 \\implies y = -\\dfrac{5}{2}x + 11$',
        ],
        answer: '$y = -\\dfrac{5}{2}x + 11$',
      },
    ],
    practice: [
      { type: 'mc', question: 'Which slope is parallel to $y = 4x - 7$?', choices: ['$-4$', '$\\frac{1}{4}$', '$-\\frac{1}{4}$', '$4$'], correct: 3, explanation: 'Parallel lines have the same slope: $m = 4$.' },
      { type: 'mc', question: 'Which slope is perpendicular to $y = 2x + 1$?', choices: ['$2$', '$-2$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$'], correct: 3, explanation: 'Perpendicular slope: $-1/2$ (negative reciprocal of 2).' },
      { type: 'mc', question: 'Are the lines $y = 3x + 5$ and $y = 3x - 2$ parallel, perpendicular, or neither?', choices: ['Parallel', 'Perpendicular', 'Neither', 'The same line'], correct: 0, explanation: 'Both have slope 3 but different y-intercepts → parallel.' },
      { type: 'fill', question: 'The slope perpendicular to $m = \\frac{3}{4}$ is $-\\frac{a}{b}$ where $a/b$ is the fraction. Enter the numerator $a$.', answer: '4', explanation: 'Negative reciprocal of $3/4$ is $-4/3$. Numerator is 4.' },
      { type: 'mc', question: 'Two lines have slopes $m_1 = -3$ and $m_2 = \\frac{1}{3}$. What is their relationship?', choices: ['Parallel', 'Perpendicular', 'Neither', 'Identical'], correct: 1, explanation: '$m_1 \\cdot m_2 = -3 \\cdot \\frac{1}{3} = -1$ → perpendicular.' },
    ],
  },

  // ── 2.3 ──────────────────────────────────────────────────────────────────
  {
    id: '2.3',
    learn: `
      <div class="concept-card">
        <h2>📖 Systems of Linear Equations (2 Variables)</h2>
        <p>A <strong>system of equations</strong> is a set of equations that must be satisfied simultaneously. The solution is the point(s) where the graphs intersect.</p>

        <h3>Three Methods</h3>

        <h3>1. Substitution</h3>
        <p>Solve one equation for one variable, then substitute into the other.</p>

        <h3>2. Elimination (Linear Combination)</h3>
        <p>Add or subtract equations to eliminate one variable. Multiply first if needed.</p>

        <h3>3. Graphing</h3>
        <p>Graph both lines; the intersection point is the solution.</p>

        <h3>Types of Solutions</h3>
        <ul>
          <li><strong>One solution</strong> — lines intersect at one point (consistent, independent)</li>
          <li><strong>No solution</strong> — parallel lines; same slope, different intercepts (inconsistent)</li>
          <li><strong>Infinite solutions</strong> — same line (consistent, dependent)</li>
        </ul>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Use substitution when one equation is already solved for a variable. Use elimination when coefficients can be easily made equal.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve by substitution: $\\begin{cases} y = 2x - 1 \\\\ 3x + y = 9 \\end{cases}$',
        steps: [
          'Substitute $y = 2x - 1$ into the second equation: $3x + (2x - 1) = 9$',
          'Simplify: $5x - 1 = 9 \\implies 5x = 10 \\implies x = 2$',
          'Back-substitute: $y = 2(2) - 1 = 3$',
          'Check in both equations: $3(2)+3 = 9$ ✓ and $y=2(2)-1=3$ ✓',
        ],
        answer: '$(2, 3)$',
      },
      {
        problem: 'Solve by elimination: $\\begin{cases} 2x + 3y = 7 \\\\ 4x - 3y = 5 \\end{cases}$',
        steps: [
          'The $y$-coefficients are already opposites. Add the equations:',
          '$(2x+3y) + (4x-3y) = 7 + 5 \\implies 6x = 12 \\implies x = 2$',
          'Substitute $x = 2$ into the first equation: $4 + 3y = 7 \\implies 3y = 3 \\implies y = 1$',
        ],
        answer: '$(2, 1)$',
      },
    ],
    practice: [
      { type: 'mc', question: 'Solve: $\\begin{cases} y = x + 2 \\\\ 2x + y = 11 \\end{cases}$', choices: ['$(3, 5)$', '$(4, 3)$', '$(5, 1)$', '$(2, 7)$'], correct: 0, explanation: 'Substitute: $2x + (x+2) = 11 \\to 3x = 9 \\to x = 3$, $y = 5$.' },
      { type: 'mc', question: 'If two lines are parallel, the system has:', choices: ['One solution', 'No solution', 'Infinite solutions', 'Two solutions'], correct: 1, explanation: 'Parallel lines never intersect, so no solution.' },
      { type: 'fill', question: 'Solve by elimination: $\\begin{cases} x + y = 8 \\\\ x - y = 2 \\end{cases}$. What is $x$?', answer: '5', explanation: 'Add equations: $2x = 10 \\to x = 5$.' },
      { type: 'mc', question: 'Solve: $\\begin{cases} 3x + 2y = 12 \\\\ x = 2 \\end{cases}$', choices: ['$(2, 3)$', '$(2, 4)$', '$(3, 2)$', '$(4, 0)$'], correct: 0, explanation: 'Substitute $x=2$: $6 + 2y = 12 \\to 2y = 6 \\to y = 3$. Solution: $(2,3)$.' },
      { type: 'mc', question: 'Which system has infinitely many solutions?', choices: ['$y = 2x+1$ and $y = 2x+3$', '$y = x$ and $y = -x$', '$2y = 4x+6$ and $y = 2x+3$', '$y = x+1$ and $y = 2x+1$'], correct: 2, explanation: '$2y=4x+6 \\to y=2x+3$. Both equations are identical → infinite solutions.' },
    ],
  },

  // ── 2.4 ──────────────────────────────────────────────────────────────────
  {
    id: '2.4',
    learn: `
      <div class="concept-card">
        <h2>📖 Systems of Equations (3 Variables)</h2>
        <p>A system with three variables has the form $\\begin{cases} ax + by + cz = d \\\\ ex + fy + gz = h \\\\ ix + jy + kz = l \\end{cases}$. The solution (if unique) is an ordered triple $(x, y, z)$.</p>

        <h3>Elimination Strategy</h3>
        <ol>
          <li>Choose one variable to eliminate first (pick the easiest)</li>
          <li>Use two pairs of equations to eliminate that variable → get 2 equations in 2 unknowns</li>
          <li>Solve the 2×2 system</li>
          <li>Back-substitute to find the third variable</li>
          <li>Check in all three original equations</li>
        </ol>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Label your equations (1), (2), (3). Keep track of which pairs you use. Write every step clearly — it's easy to lose track!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve: $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$',
        steps: [
          'Eliminate $z$: Add equations (1) and (3): $(x+y+z)+(x+2y-z)=6+2 \\implies 2x+3y=8$ … call this (4)',
          'Eliminate $z$: Subtract (1) from (2): $(2x-y+z)-(x+y+z)=3-6 \\implies x-2y=-3$ … call this (5)',
          'Solve (4) & (5): From (5): $x = 2y - 3$. Substitute into (4): $2(2y-3)+3y=8 \\implies 7y=14 \\implies y=2$',
          'Back-sub: $x = 2(2)-3 = 1$. Then from (1): $1+2+z=6 \\implies z=3$',
        ],
        answer: '$(1, 2, 3)$',
      },
    ],
    practice: [
      { type: 'mc', question: 'In a 3-variable system, you first reduce it to a system of how many equations?', choices: ['1 equation, 1 variable', '2 equations, 2 variables', '3 equations, 2 variables', '1 equation, 2 variables'], correct: 1, explanation: 'Eliminate one variable to get a 2×2 system, then solve.' },
      { type: 'mc', question: 'Check: is $(1, 2, 3)$ a solution of $x + y + z = 6$?', choices: ['Yes', 'No'], correct: 0, explanation: '$1+2+3=6$ ✓.' },
      { type: 'fill', question: 'For the system $\\begin{cases} x=1 \\\\ y=2 \\\\ x+y+z=10 \\end{cases}$, what is $z$?', answer: '7', explanation: '$1+2+z=10 \\to z=7$.' },
      { type: 'mc', question: 'When eliminating a variable, what must be true about the coefficients you combine?', choices: ['They must be equal', 'They must be opposites (sum to zero)', 'They must be positive', 'They must be 1'], correct: 1, explanation: 'You need the coefficient of the variable to become 0, so the coefficients must sum to zero (be opposites).' },
      { type: 'mc', question: 'A 3×3 system has 1 unique solution. Geometrically, the three planes:', choices: ['Are all parallel', 'Intersect at exactly one point', 'Are all the same plane', 'Form a triangle'], correct: 1, explanation: 'A unique solution means all three planes intersect at exactly one point.' },
    ],
  },

  // ── 2.5 ──────────────────────────────────────────────────────────────────
  {
    id: '2.5',
    learn: `
      <div class="concept-card">
        <h2>📖 Systems of Linear Inequalities</h2>
        <p>The solution to a system of linear inequalities is the set of all points that satisfy <strong>every</strong> inequality simultaneously. Graphically, it is the overlapping (intersection) region of all shaded half-planes.</p>

        <h3>How to Graph</h3>
        <ol>
          <li>Graph each boundary line (dashed for $<$ or $>$, solid for $\\leq$ or $\\geq$)</li>
          <li>Shade the correct half-plane for each inequality (test a point like $(0, 0)$)</li>
          <li>The <strong>solution region</strong> is where all shadings overlap</li>
          <li>Corner points (vertices) of the region are found by solving pairs of boundary line equations</li>
        </ol>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Test the point $(0,0)$: if it satisfies the inequality, shade toward it; if not, shade away from it.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Describe the solution region for: $\\begin{cases} y \\geq x - 1 \\\\ y < -2x + 4 \\end{cases}$',
        steps: [
          'Line 1: $y = x - 1$ (solid). Test $(0,0)$: $0 \\geq -1$ ✓ → shade above this line.',
          'Line 2: $y = -2x + 4$ (dashed). Test $(0,0)$: $0 < 4$ ✓ → shade below this line.',
          'Intersection of the two regions is the solution — above $y=x-1$ AND below $y=-2x+4$.',
          'Corner point: solve $y = x-1$ and $y = -2x+4$: $x-1 = -2x+4 \\implies 3x=5 \\implies x=5/3, y=2/3$.',
        ],
        answer: 'The triangular-ish region above $y = x-1$ and below $y = -2x+4$, meeting at $(\\frac{5}{3}, \\frac{2}{3})$.',
      },
    ],
    practice: [
      { type: 'mc', question: 'For the inequality $y > 3x - 2$, the boundary line is:', choices: ['Solid', 'Dashed', 'Dotted', 'Thick'], correct: 1, explanation: 'Strict inequality ($>$) means the boundary line is NOT included → dashed.' },
      { type: 'mc', question: 'Does $(0, 0)$ satisfy $y \\leq 2x + 1$?', choices: ['Yes', 'No'], correct: 0, explanation: '$0 \\leq 2(0)+1 = 1$ ✓.' },
      { type: 'mc', question: 'The solution of a system of inequalities is:', choices: ['The set of points on one boundary line', 'The intersection of all shaded half-planes', 'The union of all shaded half-planes', 'Always empty'], correct: 1, explanation: 'Each inequality defines a half-plane; the solution is where all overlap (intersection).' },
      { type: 'fill', question: 'For $y < x + 3$, is $(0, 0)$ in the solution region? Enter yes or no.', answer: 'yes', altAnswers: ['Yes', 'YES'], explanation: '$0 < 0 + 3 = 3$ is true, so $(0,0)$ is in the solution region.' },
      { type: 'mc', question: 'A system of 2 inequalities can have:', choices: ['Only one solution point', 'No region, one line, or an unbounded/bounded region', 'Always a bounded (finite) region', 'Always exactly 4 corner points'], correct: 1, explanation: 'Depending on the inequalities, the solution can be empty, all of the plane, a half-plane, or a bounded/unbounded polygonal region.' },
    ],
  },

  // ── 2.6 ──────────────────────────────────────────────────────────────────
  {
    id: '2.6',
    learn: `
      <div class="concept-card">
        <h2>📖 Linear Programming</h2>
        <p><strong>Linear programming</strong> is a method for finding the maximum or minimum value of an objective function, subject to a set of linear constraints.</p>

        <h3>Key Terms</h3>
        <ul>
          <li><strong>Objective function</strong> — what you want to maximize or minimize (e.g., profit, cost)</li>
          <li><strong>Constraints</strong> — the system of linear inequalities that limit the variables</li>
          <li><strong>Feasible region</strong> — the overlapping solution region of all constraints</li>
          <li><strong>Vertices (corner points)</strong> — the corners of the feasible region</li>
        </ul>

        <div class="formula-box">
          <div class="formula-label">Corner Point Theorem</div>
          $$\\text{The maximum or minimum of the objective function occurs at a vertex of the feasible region.}$$
        </div>

        <h3>Steps</h3>
        <ol>
          <li>Define variables and the objective function</li>
          <li>Write the constraints as inequalities</li>
          <li>Graph the feasible region</li>
          <li>Find all vertices (solve boundary line pairs)</li>
          <li>Evaluate the objective function at each vertex</li>
          <li>Choose the vertex giving max or min</li>
        </ol>
      </div>
    `,
    examples: [
      {
        problem: 'Maximize $P = 3x + 5y$ subject to $x \\geq 0$, $y \\geq 0$, $x + y \\leq 4$, $x + 2y \\leq 6$.',
        steps: [
          'Graph the constraints: the feasible region has vertices at $(0,0)$, $(4,0)$, $(2,2)$, $(0,3)$.',
          'Check vertex $(0,0)$: $P = 0$',
          'Check vertex $(4,0)$: $P = 3(4)+5(0) = 12$',
          'Check vertex $(2,2)$: $P = 3(2)+5(2) = 6+10 = 16$',
          'Check vertex $(0,3)$: $P = 3(0)+5(3) = 15$',
          'Maximum is $P = 16$ at $(2, 2)$.',
        ],
        answer: 'Maximum $P = 16$ at $(2, 2)$.',
      },
    ],
    practice: [
      { type: 'mc', question: 'The maximum or minimum of an objective function occurs at:', choices: ['Any point in the feasible region', 'A vertex (corner point) of the feasible region', 'The center of the feasible region', 'The origin'], correct: 1, explanation: 'Corner Point Theorem: the optimal value always occurs at a vertex.' },
      { type: 'fill', question: 'Evaluate $P = 2x + 3y$ at the vertex $(4, 5)$. What is $P$?', answer: '23', explanation: '$P = 2(4)+3(5) = 8+15 = 23$.' },
      { type: 'mc', question: 'The set of all points satisfying the constraints is called the:', choices: ['Objective region', 'Feasible region', 'Optimal region', 'Constraint space'], correct: 1, explanation: 'The feasible region is the intersection of all constraint half-planes.' },
      { type: 'mc', question: 'Feasible region vertices: $(0,0)$, $(6,0)$, $(0,4)$. Maximize $P = x + 2y$. What is the max?', choices: ['$0$', '$6$', '$8$', '$14$'], correct: 2, explanation: '$P(0,0)=0$, $P(6,0)=6$, $P(0,4)=8$. Maximum is 8 at $(0,4)$.' },
      { type: 'mc', question: 'Which region represents the feasible region of $x \\geq 0$, $y \\geq 0$?', choices: ['All of the plane', 'Quadrant I only', 'Left half-plane', 'Below the x-axis'], correct: 1, explanation: '$x \\geq 0$ means right of y-axis; $y \\geq 0$ means above x-axis → Quadrant I.' },
    ],
  },
];
