# Design Planning Workflow

> **Core Principle**: Deliberate planning precedes execution. Never write code or style interfaces blindly; establish a cohesive visual and architectural plan first.

---

## 1. Step-by-Step Design Planning Workflow

When tasked with designing or styling any interface, execute these 7 planning steps before writing code:

### Step 1: Understand the Product
- **Purpose**: Define the core mission of the website or application.
- **Audience & Goals**: Identify the user demographic, business conversion goals, and primary user tasks.
- **Primary Actions**: Pinpoint the 1–2 critical actions users must take (e.g., checkout, data export, sign-up).
- **Tech Stack**: Analyze existing technologies, framework constraints, and styling systems (Tailwind, CSS modules, vanilla CSS).

### Step 2: Analyze the Existing Codebase
- **Component Audit**: Inspect existing components, design tokens, and layout primitives.
- **Dependency Discipline**: Check available packages. Do not introduce new heavy libraries (e.g., Three.js, Framer Motion) unless strictly justified by project requirements.
- **Architecture Preservation**: Respect established project conventions and file structures.

### Step 3: Establish Visual Direction
- **Personality Selection**: Choose a cohesive visual direction (e.g., Editorial, Minimal, Technical, Premium SaaS).
- **Typography & Color**: Select font pairings, modular scale, and a disciplined color token set (60-30-10 rule).
- **Restraint Check**: Determine whether creative techniques (3D, textures, layering) are truly warranted or if clean minimalism is more appropriate.

### Step 4: Plan the Composition
- **Structural Rhythm**: Map out section sequences, deliberately varying layouts (e.g., alternate between full-bleed imagery, asymmetrical splits, and structured data grids).
- **Whitespace & Depth**: Plan z-index staging, multi-layered soft shadows, and generous negative space.
- **Responsiveness**: Outline how complex compositions will stack or refactor across mobile viewports.

### Step 5: Define Interaction & Motion
- **Feedback Loops**: Plan hover, focus (`:focus-visible`), active, and loading states for all interactive elements.
- **Purposeful Motion**: Limit animation strictly to feedback, continuity, or progressive reveals. Ensure `prefers-reduced-motion` support.

### Step 6: Accessibility & Performance
- **WCAG Compliance**: Verify color contrast ratios (4.5:1 text, 3:1 large text) and semantic HTML structure (`<button>`, `<dialog>`).
- **Performance Budget**: Plan asset optimization, CSS-only transitions where possible, and mobile GPU considerations.

### Step 7: Create an Implementation Plan
- **Sequence**: Outline the step-by-step build order (tokens -> layouts -> components -> polish).
- **Quality Gates**: Establish visual self-review criteria before final delivery.

---

## 2. Design-Planning Checklist

Before writing code, verify your plan against this checklist:
- [ ] Product goals and primary user actions clearly defined?
- [ ] Visual personality selected and aligned with brand ethos?
- [ ] Typography and color tokens established without generic AI defaults?
- [ ] Section rhythm varied to avoid repetitive card walls?
- [ ] Interactive states (hover, focus, active, loading) planned?
- [ ] Accessibility (WCAG contrast, touch targets, keyboard navigation) accounted for?
- [ ] Unnecessary dependencies and heavy libraries eliminated?

---

## 3. Good vs. Bad Planning Decisions

- **❌ Bad Planning**: 
  - *"Let's just use Tailwind default classes, slap a blue-to-purple gradient on the hero, and throw in 3 identical card grids because it's fast."*
- **✔️ Good Planning**: 
  - *"This fintech tool requires extreme visual clarity. We will use a minimal technical aesthetic with deep charcoal surfaces, monospace data readouts, crisp hairline borders, and strict 8px grid spacing, ensuring zero decorative fluff."*

---

## 4. Complexity & Simplicity Calibration

- **Utility & Data Dashboards**: Prioritize high data density, speed, scannability, and minimalism. Keep animations fast (`150ms`) and avoid 3D or heavy textures.
- **Marketing & Brand Flagships**: Leverage editorial typography, layered dimensional compositions, subtle procedural grain, and purposeful scroll animations to create emotional resonance.
- **Adapting Depth**: Scale your planning depth to project complexity—a small settings modal requires a 2-minute token check; a full marketing flagship requires a complete composition and motion plan.
