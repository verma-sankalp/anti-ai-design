# Advanced Layering, Glassmorphism & Depth Reference

This guide covers techniques for creating tangible physical depth, multi-pass glassmorphism, and cinematic lighting in standard CSS and Tailwind.

---

## 1. The Z-Axis Staging System

Think of the viewport as a diorama with 5 distinct z-index planes:

1. **Plane 0 (`z-0`)**: Canvas Background, subtle mesh gradients, procedural noise grain, and ambient particles.
2. **Plane 1 (`z-10`)**: Ambient background glow cards, large decorative geometric shapes, and grid lines.
3. **Plane 2 (`z-20`)**: Primary content layers, hero typography, and interactive UI cards.
4. **Plane 3 (`z-30`)**: Floating UI badges, miniature preview windows, and tooltip overlays.
5. **Plane 4 (`z-40` to `z-50`)**: Sticky navigation bars, command menus, modals, and toast notifications.

---

## 2. Multi-Pass Glassmorphism

Basic glassmorphism (`backdrop-filter: blur(10px)`) often looks muddy or flat. High-craft glass requires multi-layer borders and specular highlights.

### The Elite Glass Recipe (CSS)
```css
.elite-glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: 1px solid rgba(255, 255, 255, 0.25); /* Specular top highlight */
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(0, 0, 0, 0.1) inset;
}
```

---

## 3. Cinematic Lighting & Ambient Occlusion Shadows

Real objects cast multiple layers of shadow: a sharp contact shadow where they touch the surface, and a soft, diffuse ambient occlusion shadow radiating outward.

### Multi-Layer Shadow Recipe (Tailwind / CSS)
```css
.cinematic-shadow {
  box-shadow:
    0 0.5px 1px rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.1);
}
```

---

## 4. Procedural Grain & Noise Textures

Adding subtle noise overlays eliminates sterile digital sterility and adds tactile warmth.

### CSS SVG Noise Background
```css
.noise-overlay {
  position: relative;
}
.noise-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 10;
}
```
