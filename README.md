# Algebra 2 Interactive Learning Website

An interactive Algebra 2 learning platform built as a fully static SPA for GitHub Pages. Students progress through 11 units of structured lessons, worked examples, auto-graded quizzes, an interactive function grapher, and a searchable formula reference — with progress tracked entirely in the browser.

## Features

- **11 Units / 63 Lessons** covering the full Algebra 2 curriculum
- **Structured lessons** — Learn, Examples, and Practice sections per lesson
- **Interactive quizzes** — multiple-choice and fill-in-the-blank with instant feedback and step-by-step explanations
- **Progress tracking** — lesson status and scores saved to `localStorage`, with a daily streak counter
- **Mastery system** — ≥80% quiz score marks a lesson as "mastered"; progress ring shows overall completion
- **KaTeX math rendering** — fast, accurate LaTeX equation display throughout
- **Interactive function grapher** — canvas-based plotter supporting pan, zoom, multiple functions, and quick presets
- **Formula reference** — 30+ searchable formulas with LaTeX rendering
- **Hash-based routing** — every lesson has a shareable URL (e.g., `#lesson/3.2`)
- **Responsive design** — works on desktop, tablet, and mobile

## Curriculum

| Unit | Topic | Lessons |
|------|-------|---------|
| 1 | Equations & Inequalities | 4 |
| 2 | Linear Functions & Systems | 6 |
| 3 | Quadratic Functions | 7 |
| 4 | Polynomial Functions | 7 |
| 5 | Complex Numbers | 4 |
| 6 | Radical & Rational Exponents | 4 |
| 7 | Exponential & Logarithmic Functions | 7 |
| 8 | Rational Functions | 5 |
| 9 | Sequences & Series | 5 |
| 10 | Trigonometry | 7 |
| 11 | Conic Sections & Probability | 7 |

## Getting Started

### Single HTML File (Recommended)

A pre-built, self-contained `dist-web/index.html` is included in the repo. Just open it in any browser — no server, no install, works on Windows, macOS, and Linux.

Math fonts load from jsDelivr CDN when online. Everything else (all JS, CSS, lesson content) is embedded in the file.

### Rebuilding After Changes

If you edit any source file and want to update `dist-web/index.html`:

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+)

```bash
# Install dependencies (only needed once)
npm install

# Rebuild the single HTML file
npm run build:web
```

This regenerates `dist-web/index.html` — a fully self-contained bundle with all JavaScript, CSS, KaTeX, and all 11 units of lesson content inlined. Open it directly in any browser; no server required.

**What `build-web.mjs` does:**
- Strips ES module `import`/`export` syntax and concatenates all source files
- Resolves dynamic `import()` calls by pre-loading all lesson units into a registry
- Inlines KaTeX JS and patches its CSS to load fonts from the CDN
- Wraps everything in a single `(async () => { ... })()` IIFE

### Run Locally (Development)

The source site uses ES modules, so you need a local HTTP server when developing (`index.html` won't work when opened directly from disk):

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080`.

### Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch, root folder.
4. GitHub Pages will serve `index.html` automatically.

The `.nojekyll` file is already included to disable Jekyll processing.

## Project Structure

```
├── index.html                  # SPA entry point
├── app.js                      # Router, UI logic, progress management
├── index.css                   # Design system — all styles
├── og-image.svg                # Open Graph image for social sharing
├── 404.html                    # GitHub Pages SPA fallback
│
├── components/
│   ├── header.js               # Navigation bar with progress ring
│   ├── quiz.js                 # Quiz engine (grading, feedback, scoring)
│   ├── math-renderer.js        # KaTeX async loading & rendering wrapper
│   └── grapher.js              # Canvas-based interactive function plotter
│
└── data/
    ├── curriculum.js           # All 11 units with lesson metadata (source of truth)
    ├── formulas.js             # Formula reference database (30+ formulas)
    └── lessons/
        ├── unit1.js            # Lesson content — Unit 1
        ├── unit2.js            # Lesson content — Unit 2
        └── ...                 # unit3.js through unit11.js
```

### Lesson Data Format

Each lesson file exports a `lessons` array. Every lesson object follows this schema:

```javascript
{
  id: "3.2",
  learn: "<div>...</div>",          // HTML with embedded LaTeX
  examples: [
    { problem: "...", steps: ["..."], answer: "..." }
  ],
  practice: [
    {
      type: "multiple-choice",       // or "fill-in"
      question: "...",
      choices: ["A", "B", "C", "D"],
      answer: "B",
      explanation: "..."
    }
  ]
}
```

Adding a new lesson only requires editing the lesson file and `curriculum.js` — no code changes needed.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Vanilla JavaScript (ES modules) — no build step |
| Math rendering | [KaTeX](https://katex.org/) v0.16.9 (CDN) |
| Graphing | HTML5 Canvas API (custom implementation) |
| Styling | CSS3 with custom properties |
| Fonts | Google Fonts (Inter, Space Grotesk) |
| Progress storage | `localStorage` |
| Routing | Hash-based SPA routing |
| Hosting | GitHub Pages |

## License

MIT
