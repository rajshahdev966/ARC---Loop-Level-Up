# ⚡ ArcWeb // DSA Glow-Up Log & Developer Operating System

> **Turn the leetcode grind from a sterile algorithmic conveyor belt into an expressive, narrative-driven engineering saga.**  
> Built for the next generation of engineers who treat problem solving not as rote memorization, but as an aesthetic, iterative craft.

---

## 🚀 Executive Product Overview

### The Problem ArcWeb Solves
The modern technical interview preparation landscape is fundamentally broken:
1. **The Rote Memorization Trap:** Traditional platforms (LeetCode, HackerRank, NeetCode) treat algorithmic mastery as a binary status (`Accepted` or `Failed`), discarding the messy, creative iteration that real software engineering demands.
2. **Bland, Uninspiring Tooling:** Engineers default to Notion, Excel, or blank Markdown files—sterile productivity tools designed for corporate memos, offering zero visceral feedback, no identity, and high friction for code capture.
3. **The Emotional Disconnect:** The process of moving from a brute-force $O(N^2)$ solution to an optimal $O(N)$ hash-map or two-pointer approach is an emotional journey—from frustration ("Villain Era") to experimentation ("Mid-Arc") to mastery ("Final Form"). Existing tools strip away this narrative, fueling burnout and grind fatigue.

### The ArcWeb Solution
**ArcWeb** is an opinionated, neo-brutalist developer companion and algorithm laboratory. It blends the tactile, expressive energy of a physical cyber-scrapbook with the high-octane engineering rigor of a modern cloud IDE. Instead of merely logging problems, developers document their *evolutionary arc* across distinct approaches, test hypotheses with in-browser code execution, pin ephemeral insights to an interactive 3D sticky wall, and anticipate dynamic engineering retrospective dossiers.

---

## 🎨 Unique Gen-Z Cyber-Scrapbook / Neo-Brutalist UI Identity

ArcWeb rejects corporate minimalism and generic template designs, pioneering a distinct visual identity tailored to Gen Z developers:

- **Tactile Neo-Brutalist Design System:** Heavy 2px–3px solid `#111116` borders, deliberate high-contrast surfaces, and solid offset drop shadows (`shadow-[4px_4px_0px_#111116]`, `shadow-[6px_6px_0px_#111116]`). Interactive elements feature tactile physical spring feedback (`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`).
- **Cyber-Scrapbook Metaphor:** Digital paper textures, rotated pinned badges (`-rotate-1`, `rotate-2`), washi tape stickers with authentic diagonal hazard stripes, metallic paper clips, and color-coded pushpins.
- **Narrative-Driven DSA Eras:** Problem solving is structured through culturally resonant terminology:
  - 💀 **Villain Era:** The raw, brute-force struggle. Time limit exceeded, messy logic, unfiltered thinking.
  - ⚡ **Mid-Arc:** The breakthrough. Pattern recognition, pruning edge cases, refactoring.
  - ✅ **Final Form:** Optimal Big-$O$ time & space complexity, clean idioms, interview-ready presentation.
- **Precision Triple-Typography Hierarchy:**
  - **Headlines & Display:** `Syne` (Bold / Extrabold 800) for punchy, industrial brand statements.
  - **Body & Controls:** `Space Grotesk` for ergonomic legibility with brutalist geometry.
  - **Code & Metadata:** `JetBrains Mono` for code snippets, complexity tags, and command logs.

---

## 📁 System Architecture & File Structure

ArcWeb is architected using a scalable **Feature-Sliced Design (FSD)** pattern, strictly separating domain features, shared design tokens, routing guards, and global store management.

```
Arc/
├── index.html                           # Entry HTML with zero-flash theme bootstrap & Google Fonts
├── vite.config.js                       # Vite 7 build configuration with React & Tailwind plugins
├── package.json                         # Modern React 19, Tailwind v4, Monaco Editor, Redux Toolkit
├── public/
│   ├── arc_logo.png                     # Light mode brand identity mark
│   └── arc_dark_logo.png                # High-contrast dark mode brand identity mark
└── src/
    ├── main.jsx                         # Application entrypoint & DOM mounting
    ├── App.jsx                          # Root wrapper with React Router & Toastify notifications
    ├── index.css                        # CSS Design Tokens, @theme variables, custom utilities
    │
    ├── app/                             # Global Application State
    │   └── store/
    │       └── store.jsx                # Redux Toolkit root store configuration
    │
    ├── config/                          # Feature Context Providers (Separation of Concerns)
    │   ├── VisionBoardContext.jsx       # Context for algorithm problem cards, active tags, & CRUD
    │   └── StickyNoteContext.jsx        # Context for sticky board state, color management, & notes
    │
    ├── routes/                          # Routing Layer
    │   ├── AppRoutes.jsx                # Browser router configuration with nested layouts
    │   └── protected/
    │       ├── AuthProtected.jsx        # Route guard: redirects authenticated users to /main
    │       └── VisionProtected.jsx      # Route guard: ensures dev profile exists before board access
    │
    ├── shared/                          # Shared Design System & Reusable Components
    │   ├── constants/
    │   │   ├── availableTags.js         # Curated DSA category taxonomies (Graphs, DP, Trees, etc.)
    │   │   ├── dsaLanguages.js          # Supported programming languages for Monaco Editor
    │   │   ├── noteColors.js            # Pastel sticky paper palette tokens
    │   │   ├── statusFilters.js         # Vision Board status filter keys & label definitions
    │   │   └── tapeColors.js            # Washi tape color presets (Yellow, Pink, Green, Sky, Orange)
    │   ├── hooks/
    │   │   └── useNavbar.jsx            # Centralized theme toggling, favicon swapping, & navigation
    │   └── ui/components/
    │       ├── Navbar.jsx               # Universal top navigation with brand logo, navlinks, theme toggle
    │       ├── Footer.jsx               # Cyberpunk brutalist footer with live dev meta
    │       └── TricolourDisplayButtons.jsx # Retro OS window controls (Mac/Terminal window dots)
    │
    └── features/                        # Core Product Domain Modules
        ├── auth/                        # Developer Onboarding & Persona Setup
        │   ├── hooks/useLogin.jsx       # Form handlers & handle generation logic
        │   ├── state/authSlice.jsx      # Redux slice for developer handle, archetype, & auth status
        │   └── ui/pages/LoginPage.jsx   # Gamified onboarding portal with dev archetype selection
        │
        ├── vission_board/               # Core Algorithm Problem Kanban & Log
        │   ├── ui/components/
        │   │   ├── FilterBoard.jsx      # Multi-criteria filter pill bar (Status + DSA Tag filters)
        │   │   └── ProblemCard.jsx      # Pinned card displaying problem stats, complexity, washi tape
        │   └── ui/pages/VisionBoard.jsx # Main dashboard grid with real-time counters & search
        │
        ├── arc_modal/                   # In-Depth Problem Solving & Code Laboratory
        │   ├── hooks/useArcModal.jsx    # React Hook Form + useFieldArray multi-approach engine
        │   ├── ui/components/
        │   │   ├── ModalHeader.jsx      # Window title bar with tricolour controls & category badges
        │   │   ├── ModalFooter.jsx      # Action dock: approach addition, discard, & save handlers
        │   │   └── TopPinBadge.jsx      # Authentic rotated pushpin UI anchor
        │   └── ui/pages/ArcModal.jsx    # Full modal with Monaco code editor, tape customization, & notes
        │
        ├── sticky_wall/                 # Ephemeral 3D Pattern Sticky Wall
        │   ├── hooks/
        │   │   ├── useStickyNote.jsx    # Sticky note state, 3D flip card toggle, & delete actions
        │   │   └── useNoteModal.jsx     # Note composition modal controller
        │   ├── ui/components/
        │   │   ├── ActionButtons.jsx    # Quick note action buttons & trigger points
        │   │   ├── NoteModal.jsx        # Rich note creation modal with color & tape customizers
        │   │   ├── StickyNote.jsx       # 3D flippable note card with front (code/summary) & back (learnings)
        │   │   └── StickyWallHeader.jsx # Wall metadata, note counter, & quick add actions
        │   └── ui/pages/StickyWall.jsx  # Interactive bulletin board layout for pattern cheat-sheets
        │
        ├── your_wrapped/                # Spotify-Wrapped Style Annual Algorithm Dossier
        │   └── ui/pages/YourWrapped.jsx # High-impact teaser with 20-day persistent countdown & alerts
        │
        └── glow_up/                     # Evolution Comparison & Progress Visualizer
            └── ui/pages/GlowUpCarousel.jsx # Before/After code transformation carousel showcase
```

---

## 🔍 Section-by-Section Engineering Breakdown & Developer Craft

Every module in ArcWeb was built to demonstrate senior-level frontend engineering, showcasing advanced state management, ergonomic UX, and performance optimization:

### 1. Developer Persona Onboarding (`features/auth`)
- **Concept:** Traditional logins feel like barriers; ArcWeb turns onboarding into an identity-forging ceremony. Users claim an `@dev_handle` and select their coding archetype (`Speed Demon`, `Bug Magnet`, `LeetCode Monk`, `10x Engineer`).
- **Engineering Highlights:**
  - **Redux Toolkit Integration:** State persists seamlessly in `authSlice.jsx`, hydrating UI credentials across session lifecycles.
  - **Routing Guardrail Architecture:** `AuthProtected` and `VisionProtected` higher-order route components prevent unauthorized dashboard access and redirect authenticated hackers away from the login splash screen.

### 2. The Vision Board (`features/vission_board`)
- **Concept:** A mission-control dashboard replacing boring tabular spreadsheets with an expressive pinboard.
- **Engineering Highlights:**
  - **Multi-Vector Filtering Engine:** `FilterBoard.jsx` provides instant, reactive cross-filtering across dual dimensions (Progression Statuses: *Villain Era*, *Mid-Arc*, *Final Form* + Topic Tags: *DP*, *Graphs*, *Backtracking*, etc.).
  - **Custom Washi Tape Rendering:** Every problem card dynamically supports customized tape overlays with diagonal hazard stripes and customizable adhesive hues.

### 3. The Arc Modal & Approach Studio (`features/arc_modal`)
- **Concept:** The crown jewel of ArcWeb. It enables documenting the complete problem-solving lifecycle across multiple attempts instead of overwriting previous code.
- **Engineering Highlights:**
  - **Dynamic Field Arrays:** Powered by `react-hook-form`'s `useFieldArray`, allowing developers to append, rename, and toggle between arbitrarily many solution iterations (*Approach 01: Brute Force*, *Approach 02: Memoized DFS*, *Approach 03: Tabulation*) without re-renders leaking into parent components.
  - **Monaco Code Editor (`@monaco-editor/react`):** Embedded full-scale VS Code editing experience with multi-language syntax highlighting (Python, C++, Java, JavaScript, Go, Rust), auto-indentation, and dark/light synchronization.
  - **Tape & Theme Customizer:** Integrates granular color pickers and customizable tape headers directly into form schema validation.

### 4. The 3D Interactive Sticky Wall (`features/sticky_wall`)
- **Concept:** Quick, visceral capture of high-frequency DSA patterns, "aha!" moments, and interview reminders.
- **Engineering Highlights:**
  - **Hardware-Accelerated 3D Flip Cards:** Built using CSS `transform-style: preserve-3d` and `rotateY(180deg)` transitions. Clicking the card flips it smoothly between the **Front Sheet** (Code Snippet & Pattern Label) and the **Back Sheet** (Key Takeaways, Time Complexities, Gotchas).
  - **Accessible Contrast Engineering:** Sticky note surfaces utilize customized dark-mode contrast locks (`text-[#111116]`), preserving the authentic yellow, coral, and mint paper aesthetic regardless of global ambient theme.

### 5. Your Wrapped Retrospective (`features/your_wrapped`)
- **Concept:** Inspired by Spotify Wrapped, translating a developer's algorithmic struggles and triumphs into a shareable cultural artifact.
- **Engineering Highlights:**
  - **Persistent LocalStorage Countdown Engine:** Implements a 20-day launch countdown anchored to an immutable timestamp in browser storage (`arc_wrapped_drop_target_20d`), ensuring timer continuity across refreshes without drift.
  - **Brutalist Poster Layout:** 3D extruded hot-pink display typography (`drop-shadow-[3px_3px_0px_#111116]`), encrypted dossier mockups, and email notification webhooks.

### 6. Zero-Flash Theme Engine (`shared/hooks/useNavbar.jsx` & `index.html`)
- **Engineering Highlights:**
  - **Synchronous `<head>` Injection:** Eliminates the notorious "white flash" on page reload by resolving the `arc_theme` key in `localStorage` before the first DOM paint.
  - **Dynamic Favicon Sync:** Real-time synchronization between light (`/arc_logo.png`) and dark (`/arc_dark_logo.png`) favicons via the `useNavbar` controller.

---

## 🛠️ Tech Stack & Key Dependencies

| Layer | Technology | Rationale |
|---|---|---|
| **Core Framework** | React 19 + Vite 7 | Lightning-fast HMR, concurrent mode support, optimized ESM bundles. |
| **State Management** | Redux Toolkit + Context API | Hybrid strategy: Redux for global auth/session state; Context API for isolated feature boards. |
| **Styling Engine** | Tailwind CSS v4 | CSS Custom Property `@theme` integration, modern native color-mix variables. |
| **Form Management** | React Hook Form | High-performance, uncontroller-optimized multi-approach array state. |
| **Code Studio** | `@monaco-editor/react` | Industry-standard IDE experience in browser with multi-language AST highlighting. |
| **Icons & Assets** | `@remixicon/react` | Clean, crisp neo-grotesque vector iconography. |
| **Identity & Fonts** | Google Fonts | `Syne` (Brutalist display), `Space Grotesk` (Interface), `JetBrains Mono` (Code). |

---

## 🔮 Future Scalability & Product Roadmap

ArcWeb is architected from the ground up to evolve from an individual developer utility into an ecosystem-scale developer platform:

### 1. Personalized DSA Social Media & Feed
- **Algorithmic Feed:** An interactive feed where developers publish their solution evolutionary arcs ("From $O(N^3)$ to $O(N \log N)$ in 30 minutes").
- **Forkable Approaches:** Allow users to fork another developer's note, attach their own benchmark, or annotate edge cases directly in Monaco Editor.
- **Micro-Discussions:** Code-block level inline annotations and comment threads.

### 2. Global & Cohort Ranking System
- **Arc Score:** A multidimensional rating metric factoring in consistency, approach optimization depth (penalizing brute-force only, rewarding multi-approach documentation), and peer upvotes.
- **Guild / University Leaderboards:** Cohort-based leaderboards encouraging collaborative interview preparation.

### 3. Direct LeetCode & GitHub OAuth Sync
- **Automated Ingestion:** Direct sync with LeetCode GraphQL APIs to ingest solved problems, run times, and memory percentiles automatically into the Vision Board.
- **GitHub Backup Action:** Automatic bi-directional export of Arc logs into a personal GitHub repository as polished Markdown files.

### 4. "Arc Live": Interactive Developer Lounges (LinkedIn Live / Twitch for DSA)
- **Live Algorithm Breakdowns:** Dedicated real-time collaborative rooms where senior data scientists, competitive programmers, and engineers stream live system design or hard DSA deep-dives.
- **Dual-Pane Collaborative Studio:** Viewers follow the presenter's live code in Monaco Editor while maintaining their own local sticky notes and personal takeaway cards.

### 5. Automated "Wrapped Up" Engine
- **End-of-Month & Annual Dossiers:** Moving from the current teaser to a fully automated canvas generator rendering shareable story cards:
  - *Total Villain Eras Conquered*
  - *Hardest Problem Broken Down*
  - *Most Used Language & Favorite Data Structure*
  - *Peak Grinding Hours & Consistency Heatmaps*

---

## 💻 Local Development Setup

### Prerequisites
- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### Installation & Launch
```bash
# 1. Clone the repository
git clone https://github.com/your-username/arc-dsa-glowup.git

# 2. Navigate to the project directory
cd arc-dsa-glowup/Arc

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev

# 5. Open in browser
# Default: http://localhost:5173 or http://localhost:5174
```

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 👨‍💻 Developer & Craft Reflection

ArcWeb demonstrates an uncompromising pursuit of product-grade frontend engineering:
- **Design Systems Over Templates:** Every border, token, and drop shadow was hand-crafted to create a unified design system.
- **Complex Form State Mastery:** Managing dynamic nested field arrays with embedded code editors demonstrates senior-level state handling.
- **User-Centric Architecture:** Transforming a tedious chore (interview prep) into an expressive, empowering developer ritual.
