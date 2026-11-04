# Implementation Workflow

> **Core Principle**: Build the interface deliberately, preserve functionality, and maintain code quality while achieving a distinctive visual result.

---

## 1. 9-Stage Implementation Sequence

When translating a design plan into working code, execute these 9 sequential stages:

### Stage 1: Codebase Inspection
- Audit existing framework structures, styling patterns (Tailwind, CSS modules, inline styles), and available components.
- Understand existing data models and logic. Never rewrite existing code or introduce new dependencies without absolute necessity.

### Stage 2: Design Foundation
- Set up CSS custom properties or design tokens for colors, typography, modular scale, spacing multiples (4px/8px grid), ambient shadows, and borders before building components.

### Stage 3: Layout Implementation
- Build the core macro-layout structure (hero, sections, containers) using CSS Grid and Flexbox. Establish spatial hierarchy, whitespace, and responsive grid flow before styling inner details.

### Stage 4: Component Development
- Build modular, maintainable components. Avoid over-engineering or premature abstraction; keep components clean and readable.

### Stage 5: Visual Implementation
- Apply editorial typography, layered backgrounds, procedural grain, multi-layered soft shadows, and dimensional depth. Integrate 3D or animation only if specified in the plan.

### Stage 6: Interaction Implementation
- Wire up interactive controls (buttons, links, forms, menus). Implement all five essential states (default, hover, active, focus, disabled) and loading/error states. Never leave interactive elements dead.

### Stage 7: Responsive Implementation
- Test and refine layout behavior across viewports (mobile, tablet, desktop). Ensure auto-fit grids reflow cleanly and touch targets meet minimum `44px` size.

### Stage 8: Technical Quality & Accessibility
- Verify WCAG contrast ratios, semantic HTML (`<button>`, `<dialog>`), keyboard navigation (`:focus-visible`), and `prefers-reduced-motion` support. Optimize asset delivery.

### Stage 9: Implementation Completion
- Execute final user flow tests, resolve visual bugs, and verify that the output matches the intended design direction.

---

## 2. Practical Coding Principles
- **Semantic First**: Use native HTML elements for their intended purpose.
- **Token Discipline**: Reference design tokens rather than scattering arbitrary hex codes or pixel values throughout components.
- **Layered Restraint**: Apply visual effects with surgical precision. If an element looks cluttered, remove 30% of its styling rules.

---

## 3. Common Implementation Mistakes
1. **Hardcoding Magic Values**: Spreading random inline styles and arbitrary pixel values (`top: 37px`) instead of using grid and spacing tokens.
2. **Missing States**: Building buttons that lack hover, focus, or loading feedback states.
3. **Z-Index Wars**: Arbitrarily setting `z-index: 9999` everywhere to fix stacking context issues.

---

## 4. Good vs. Bad Implementation Examples
- **❌ Bad Implementation**: 
  - A component built with nested `<div>` elements, inline styles, missing focus states, unoptimized images, and a random `!important` patch to fix a layout bug.
- **✔️ Good Implementation**: 
  - A clean semantic `<button>` leveraging CSS variables for design tokens, featuring smooth active-state compression, a distinct visible focus ring, and full keyboard/screen reader support.

---

## 5. Implementation Completion Checklist
- [ ] Codebase conventions and architecture respected?
- [ ] Design tokens established and consistently applied?
- [ ] Layout built with robust CSS Grid/Flexbox without horizontal overflow?
- [ ] All interactive elements (hover, focus, active, loading, disabled) implemented?
- [ ] Accessibility (WCAG contrast, touch targets, focus rings) verified?
- [ ] Responsive behavior tested across mobile and desktop viewports?
