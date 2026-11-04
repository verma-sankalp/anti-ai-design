# Motion & Animation Reference

> **Core Principle**: Every animation must have a purpose. Motion should improve feedback, storytelling, or usability—not exist merely for decoration. Do not force animation into every interface. Use it only when it supports the design direction.

---

## 1. Purposeful Animation & Visual Feedback

Motion in digital interfaces is the digital equivalent of physical tactility. It bridges the gap between static states and user actions.

### Categories of Purposeful Motion
- **Feedback**: Confirming an action (e.g., a button subtly compressing on press, a checkmark drawing itself upon successful form submission).
- **Continuity & Orientation**: Showing spatial relationships (e.g., opening a modal scales it up smoothly from its triggering element so the user knows where it came from).
- **Storytelling & Guidance**: Revealing content progressively as the user scrolls or interacts, directing optical gravity to primary calls-to-action.

---

## 2. Structural Choreography & Effects

### Page Transitions & Entrance Reveals
- **Staggered Animations**: When revealing a list or grid of cards, stagger their entrance opacity and Y-translation (`delay: index * 0.05s`) to create a cascading, premium reveal rather than an abrupt pop-in.
- **Scroll-Based Effects (Scrollytelling)**: Use intersection observers or scroll-driven timelines to fade and slide elements into view *just* as they enter the viewport. Never hijack native scroll speed or lock scrollbars.

---

## 3. Micro-Interactions

Micro-interactions are the subtle, tactile feedback loops that elevate software from mechanical to human-crafted.

- **Buttons**: Subtle scale down (`scale: 0.98`) on active press, smooth background color transitions on hover, and loading spinner morphs.
- **Cards**: Gentle lift (`translateY(-4px)` with softened shadow expansion) on hover to signal interactivity.
- **Navigation**: Smooth indicator pills sliding between active nav items.
- **Form Fields**: Floating labels that smoothly animate upward when input gains focus.

---

## 4. Tool Selection: CSS vs. Motion vs. GSAP

Choosing the right animation engine prevents bloated bundles and janky frame rates.

| Tool | Best Used For | When to Avoid |
| :--- | :--- | :--- |
| **CSS Transitions / Keyframes** | Simple hover states, opacity fades, basic button transformations, infinite loaders. | Complex multi-step staggered sequences, gesture-driven physics, dynamic scroll scrubbing. |
| **Motion (Framer Motion)** | React component transitions, layout animations (`layoutId`), gesture tracking, exit animations (`AnimatePresence`). | Non-React vanilla JS environments, ultra-heavy 60fps timeline scrubbing across hundreds of DOM nodes. |
| **GSAP (GreenSock)** | Complex multi-timeline choreography, SVG path morphing, heavy scroll-driven storytelling (`ScrollTrigger`). | Simple button hover states where CSS is lighter and cleaner. |

---

## 5. Timing, Duration, Easing & Choreography

Bad timing destroys the illusion of physics. Interfaces should feel snappy yet natural.

### Duration Guidelines
- **Micro-interactions (Hover/Active)**: `150ms – 250ms` (Must feel instantaneous).
- **UI Transitions (Modals, Dropdowns)**: `250ms – 350ms` (Fast enough not to block workflow, slow enough to track).
- **Page Reveals / Hero Entries**: `400ms – 600ms` (Graceful and cinematic).

### Easing Curves
- **Natural Ease-Out (`cubic-bezier(0.16, 1, 0.3, 1)`)**: Starts fast and decelerates smoothly. Ideal for elements entering the screen or responding to user input.
- **Snappy Ease-In-Out**: Good for transitions between two established states.
- **Avoid Linear Motion**: Linear easing feels robotic, mechanical, and cheap unless applied to infinite looping loaders or tickers.

---

## 6. Performance-Friendly Techniques

To maintain a buttery-smooth 60fps / 120fps experience:
- **Animate Only Composite Properties**: Strictly animate `transform` (`translate`, `scale`, `rotate`) and `opacity`. Never animate layout properties like `width`, `height`, `top`, `left`, or `margin`, which trigger expensive layout reflows.
- **GPU Acceleration**: Use `will-change: transform` or `transform: translateZ(0)` sparingly on heavy animated elements to promote them to their own compositor layer.
- **Clean Up Timers**: Always cancel requestAnimationFrame loops and unmount event listeners.

---

## 7. Accessibility & `prefers-reduced-motion`

Motion can cause vestibular disorders, dizziness, or migraines for sensitive users.

### Implementation Rule
Always wrap animations in a media query check or hook:
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
In Framer Motion or JS, respect `window.matchMedia('(prefers-reduced-motion: reduce)').matches` by disabling non-essential motion.

---

## 8. Good vs. Bad Animation Examples

- **❌ Bad (Excessive & Distracting)**: A landing page where every single word bounces, rotates on hover, and floats continuously up and down like a screensaver.
- **✔️ Good (Purposeful & Restrained)**: A clean SaaS dashboard where secondary metrics fade in gracefully on load, navigation tabs slide with a crisp physics spring, and action buttons provide immediate tactile feedback on click.

---

## 9. Common Mistakes to Avoid
1. **Animating Everything**: Adding motion to static labels, static icons, and borders just because code makes it easy.
2. **Unnecessary Bouncing**: Using exaggerated spring physics (`bounce: 0.8`) on serious enterprise applications.
3. **Scroll Hijacking**: Forcing users into custom vertical-to-horizontal scroll containers that break browser navigation and wheel momentum.
4. **Sluggish Interactions**: Setting durations to `800ms`+ on micro-interactions, making the UI feel laggy and unresponsive.
