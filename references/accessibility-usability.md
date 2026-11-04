# Accessibility & Usability Reference

> **Core Principle**: A beautiful interface is incomplete if people cannot use it comfortably. Preserve the design's creativity while ensuring it remains accessible, functional, and understandable.

---

## 1. Core WCAG Principles (POUR)
- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive (contrast, alt text, readable typography).
- **Operable**: Navigation and interactive elements must be operable by keyboard, mouse, and touch.
- **Understandable**: Information and operation of the UI must be clear and predictable.
- **Robust**: Content must be robust enough to be interpreted reliably by assistive technologies (screen readers).

---

## 2. Color Contrast & Typography
- **Contrast Ratios**: Ensure normal body text meets at least **4.5:1** against its background (WCAG AA) and **7:1** (WCAG AAA). Large text (18pt+ or 14pt bold) requires at least **3:1**.
- **Never Rely Solely on Color**: Use icons, underlines, or text labels alongside color changes to denote state (e.g., error states, active links, or required form fields).
- **Minimum Font Size**: Avoid body font sizes below `16px` (`1rem`) to prevent strain for users with low vision.

---

## 3. Keyboard Navigation & Focus States
- **Visible Focus Rings**: Never remove outline styles (`outline: none` without replacement) on interactive elements. Provide a distinct, high-contrast focus ring:
  ```css
  button:focus-visible, a:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  ```
- **Logical Tab Order**: Ensure DOM tab order matches visual reading flow. Never use positive `tabindex` values.

---

## 4. Semantic HTML & ARIA
- **Use Native Elements**: Always prefer native semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<dialog>`, `<article>`) over generic `<div>` wrappers.
- **ARIA Attributes**: Use ARIA attributes (`aria-expanded`, `aria-controls`, `aria-live`) strictly when building custom interactive widgets that native elements cannot fulfill.

---

## 5. Touch Targets & Responsive Usability
- **Touch Targets**: Enforce a minimum interactive tap target size of **`44x44px`** (or `48x48px` recommended) on mobile devices to prevent mis-taps.
- **Text Scaling**: Ensure layouts do not break or clip when users scale browser text up to 200%.

---

## 6. Motion, 3D & Complex Layout Accessibility
- **Reduced Motion**: Respect user vestibular preferences by disabling heavy animations or auto-playing 3D scenes:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- **Screen Reader Exclusions**: Hide purely decorative 3D canvases, background graphics, or ambient shapes from assistive technology using `aria-hidden="true"`.

---

## 7. Good vs. Bad Accessibility & Common Mistakes

- **❌ Bad**: 
  - Faint light gray placeholder text (`#d1d5db` on white background) with a contrast ratio under 2:1.
  - Using a `<div>` with an `onClick` handler instead of a semantic `<button>`, making it unreachable via keyboard.
  - Removing focus outlines entirely for the sake of "clean aesthetics."
- **✔️ Good**:
  - High-contrast text meeting WCAG AAA standards, clear focus rings, semantic HTML structure, and full screen reader support.

### Common Mistakes to Avoid
1. **Low Contrast Minimalism**: Sacrificing legibility for faint, low-contrast aesthetic minimalism.
2. **Inaccessible Custom Widgets**: Building complex dropdowns or modals without keyboard support (`Esc` to close, arrow key navigation).
3. **Missing Alt Text**: Leaving images without descriptive `alt` attributes.
