# Design Resources & Asset Guide

> **Core Principle**: External resources and libraries are optional. They must be selected strictly according to project requirements. Always prefer reusing existing project dependencies and styling systems over introducing unvetted external packages.

---

## 1. Typography Resources

### Google Fonts
- **Website**: [fonts.google.com](https://fonts.google.com)
- **Useful For**: Accessing a vast library of open-source, high-quality variable and static web fonts.
- **When to Use**: When projects require distinct editorial serifs (`Playfair Display`, `Instrument Serif`, `Lora`) or neutral sans-serifs (`Inter`, `Plus Jakarta Sans`, `Geist`).
- **Considerations**: Self-host fonts (Woff2) whenever possible to prevent third-party request overhead; use `font-display: swap`.

### Fontshare
- **Website**: [fontshare.com](https://www.fontshare.com)
- **Useful For**: Professional, high-end display and editorial typefaces free for commercial use.
- **When to Use**: When creating editorial or brand-forward landing pages that need distinctive headline typography.
- **Considerations**: Check licensing terms (mostly free commercial use by Indian Type Foundry) and ensure proper font subsetting.

---

## 2. Image Resources

### Unsplash & Pexels
- **Websites**: [unsplash.com](https://unsplash.com), [pexels.com](https://www.pexels.com)
- **Useful For**: High-resolution, professional photography.
- **When to Use**: When selecting authentic hero imagery, editorial backgrounds, or user avatars.
- **Considerations**: Avoid generic corporate stock photos (e.g., staged handshakes). Select authentic, art-directed imagery that matches the brand's chromatic and emotional tone. Optimize images to WebP/AVIF formats.

---

## 3. Icon Libraries

### Lucide Icons
- **Website**: [lucide.dev](https://lucide.dev)
- **Useful For**: Clean, consistent, highly customizable SVG icon set (successor to Feather Icons).
- **When to Use**: For standard UI icons (navigation, search, actions) in modern web applications.
- **Considerations**: Maintain consistent stroke width (`1.5` or `2`) and sizing (`16px` to `24px`) across components.

### Phosphor Icons
- **Website**: [phosphoricons.com](https://phosphoricons.com)
- **Useful For**: Flexible icon family with multiple weights (thin, light, regular, bold, duotone).
- **When to Use**: When projects require varied weight options for visual hierarchy (e.g., active vs. inactive navigation states).
- **Considerations**: Stick to a single weight throughout the application to maintain visual cohesion.

---

## 4. 3D & Spatial Resources

### Three.js & React Three Fiber (R3F)
- **Websites**: [threejs.org](https://threejs.org), [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
- **Useful For**: WebGL-based 3D rendering and React component integration.
- **When to Use**: When the project brief explicitly requires immersive product showcases, interactive 3D models, or scrollytelling.
- **Considerations**: Heavy dependency; do not add to standard SaaS apps, data dashboards, or text-heavy sites. Ensure Draco compression for 3D models and implement mobile fallbacks.

---

## 5. Textures & Materials

### SVG / CSS Procedural Noise
- **Resource**: Inline SVG filters (`feTurbulence`) and CSS radial gradients.
- **Useful For**: Adding subtle film grain, organic texture, and background atmosphere.
- **When to Use**: To eliminate sterile digital flatness on dark mode interfaces or editorial hero sections.
- **Considerations**: Keep opacity extremely low (`0.02 – 0.04`) so textures never compete with content readability.

---

## 6. Animation Resources

### Motion (Framer Motion)
- **Website**: [motion.dev](https://motion.dev) (formerly Framer Motion)
- **Useful For**: Production-ready React animation library for layout transitions, exit animations (`AnimatePresence`), and gesture physics.
- **When to Use**: For complex component transitions, page layout morphs, and interactive React micro-interactions.
- **Considerations**: Use native CSS transitions for simple hover states; reserve Motion for complex orchestrated React component lifecycles.

### GSAP (GreenSock Animation Platform)
- **Website**: [greensock.com/gsap](https://greensock.com/gsap)
- **Useful For**: High-performance timeline choreography and scroll-driven storytelling (`ScrollTrigger`).
- **When to Use**: For complex multi-step timeline sequences and heavy scrollytelling marketing sites.
- **Considerations**: Ensure proper cleanup on component unmount to prevent memory leaks.

---

## 7. Implementation & Testing Tools

### Browser DevTools & Responsive Mode
- **Tool**: Built-in browser device emulators and network throttling.
- **Useful For**: Testing fluid typography (`clamp()`), layout reflow, touch targets, and performance bottlenecks.
- **When to Use**: During Stage 8 (Technical Quality) and Stage 9 (Completion) of the implementation workflow.
