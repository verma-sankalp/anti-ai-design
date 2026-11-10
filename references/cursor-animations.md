# Animated Cursor Designs & Pointer Choreography

Custom animated cursors elevate a website from a standard template into an immersive, bespoke digital experience. When implemented with performance and usability in mind, they reinforce brand personality and guide user focus.

---

## 1. Core Architecture: Dot + Lagging Ring

The industry-standard high-performance cursor consists of two elements:
1. **The Instant Dot**: A small precise dot (`6px × 6px`) that tracks mouse coordinates instantly (`left: 0; top: 0; transform: translate(x, y)`).
2. **The Lagging Ring**: A larger ring (`36px × 36px`) that follows with smooth spring inertia or lerp interpolation (`requestAnimationFrame`).

### Vanilla JavaScript Implementation
```javascript
class CustomCursor {
  constructor() {
    this.cursorDot = document.querySelector('.cursor-dot');
    this.cursorRing = document.querySelector('.cursor-ring');
    
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mouse = { x: this.pos.x, y: this.pos.y };
    this.speed = 0.15; // Lerp factor
    
    this.initListeners();
    this.render();
  }
  
  initListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      
      // Instant dot update
      this.cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    });
    
    // Hover expansions on interactive targets
    document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
      el.addEventListener('mouseenter', () => this.cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => this.cursorRing.classList.remove('hovered'));
    });
  }
  
  render() {
    // Smooth lerp for ring
    this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
    this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
    
    this.cursorRing.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0) translate(-50%, -50%)`;
    
    requestAnimationFrame(() => this.render());
  }
}

// Initialize on load (if pointer device)
if (window.matchMedia('(pointer: fine)').matches) {
  new CustomCursor();
}
```

---

## 2. CSS Styling & Mix-Blend-Mode Magic

Using `mix-blend-mode: difference` or `exclusion` ensures the cursor automatically inverts colors over light and dark backgrounds.

```css
/* Hide default cursor on desktop */
body {
  cursor: default;
}

@media (pointer: fine) {
  body a, body button, body input, body textarea {
    cursor: none !important;
  }
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: opacity 0.2s ease;
}

.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.3s ease;
}

/* Hover state expansion */
.cursor-ring.hovered {
  width: 72px;
  height: 72px;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: transparent;
}
```

---

## 3. Specialized Cursor Variants

- **View / Drag Badges**: When hovering over carousels or image galleries, expand the cursor ring into a capsule displaying `"DRAG"` or `"VIEW"` in bold uppercase tracking.
- **Magnetic Buttons**: Combine custom cursor tracking with magnetic button attraction (`references/micro-interactions-physics.md`).
- **Trail Effects**: Canvas-based particle trails or fading dot breadcrumbs for futuristic / cyberpunk landing pages.

---

## 4. Accessibility & Fallbacks

- **Touch Device Detection**: Always check `window.matchMedia('(pointer: fine)').matches` before initializing custom cursors. Touch screens do not have cursors; rendering DOM elements on touch move wastes battery and causes layout jitter.
- **Reduced Motion**: Respect `prefers-reduced-motion` by disabling laggy inertia interpolations.
- **Input Fields**: Ensure default text selection I-beam cursor remains intact inside inputs and textareas (`cursor: text`).
