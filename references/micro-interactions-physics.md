# Micro-Interactions & Motion Physics Reference

Motion in high-craft interfaces is never decorative or random; it is physics-driven, purposeful, and designed to provide immediate tactile feedback and guide spatial orientation.

---

## 1. Physics-Based Animation Principles

Real-world objects possess mass, inertia, tension, and friction. Digital motion should emulate this natural behavior.

### Spring Dynamics vs. Linear Timing
- **Avoid**: `transition: all 0.3s ease;` or linear animations that start and stop abruptly, feeling robotic and unpolished.
- **Embrace**: Spring physics defined by `tension` (stiffness) and `friction` (damping), or precise cubic bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)` — "ease-out-expo").

### Spring Parameter Formulas (Framer Motion / CSS)
- **Snappy / Responsive (Buttons, Toggles)**: `stiffness: 400, damping: 25`
- **Floating / Organic (Modals, Dropdowns)**: `stiffness: 300, damping: 30`
- **Heavy / Cinematic (Hero Panels, Large Containers)**: `stiffness: 180, damping: 26`

---

## 2. Essential Micro-Interaction Patterns

### A. Magnetic Buttons
Buttons that subtly pull toward the cursor when hovered within a threshold radius, creating a tactile, high-end feel.
```javascript
// Conceptual implementation of magnetic pull
const button = document.querySelector('.magnetic-btn');
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});
button.addEventListener('mouseleave', () => {
  button.style.transform = 'translate(0px, 0px)';
});
```

### B. The 5 Interactive States
Every interactive element must explicitly handle all 5 states:
1. **Default**: Clean, resting state.
2. **Hover**: Subtle lift (`translateY(-2px)`), enhanced shadow, or border brightening.
3. **Active (Pressed)**: Tactile compression (`scale(0.98)` or `translateY(0)`).
4. **Focus-Visible**: High-contrast outline ring for keyboard accessibility (`ring-2 ring-offset-2 ring-primary`).
5. **Disabled**: Reduced opacity (`opacity-40`), cursor not-allowed, pointer-events none.

### C. Fluid Mouse-Following Glows (Spotlight Cards)
Cards that reveal a subtle radial gradient spotlight following the cursor position.
```css
.spotlight-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.spotlight-card::before {
  content: '';
  position: absolute;
  top: var(--y, 0);
  left: var(--x, 0);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.spotlight-card:hover::before {
  opacity: 1;
}
```

---

## 3. Scroll-Linked Animation & Scrollytelling

Drive animations proportionally to scroll progress (`scrollYProgress` or `IntersectionObserver`).

- **Staggered Entrance Reveals**: Fade and slide elements up sequentially as they enter the viewport (`delay: index * 0.1s`).
- **Parallax Layers**: Background moves at `0.2x` scroll speed, mid-ground at `0.5x`, and foreground at `1.0x`.
- **Pinning & Scrubbing**: Pin section containers in place while scaling or transforming inner imagery.

---

## 4. Accessibility & Reduced Motion

Never compromise user comfort for motion. Always respect system preferences:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
