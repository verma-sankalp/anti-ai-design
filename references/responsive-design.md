# Responsive Design Reference

> **Core Principle**: Responsive design should adapt the experience intelligently, not merely resize the layout. Preserve the design's personality while maintaining usability on every screen.

---

## 1. Adaptive Philosophy: Beyond Shrinking

A responsive interface is not a desktop layout compressed to 375px width. Intelligent responsiveness restructures composition, simplifies navigation, and prioritizes core actions while retaining the brand's visual identity.

---

## 2. Layouts, Grid & Content-Driven Breakpoints

### CSS Grid & Flexbox Fluidity
- **Auto-Fit Grids**: Build resilient grid structures using `grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr))` to let cards wrap naturally without requiring explicit media query breakpoints for every screen size.
- **Content-Driven Breakpoints**: Set breakpoints where the *content* breaks or requires reflow (e.g., when a headline starts wrapping awkwardly or a card grid gets too cramped), rather than targeting specific device widths (like iPhone 14 or iPad Pro).

```css
/* Example of resilient auto-fit grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

---

## 3. Responsive Typography, Spacing & Sizing

- **Fluid Type (`clamp`)**: Use CSS `clamp()` (as detailed in `references/typography-design.md`) so hero text scales smoothly from mobile to ultra-wide desktop without jarring media query steps.
- **Proportional Spacing**: Scale padding and margins responsively using CSS variables or Tailwind's responsive prefixes (`p-4 md:p-8 lg:p-12`) to prevent massive gaps on mobile or cramped layouts on desktop.

---

## 4. Handling Complex Compositions & Overlapping on Mobile

Complex desktop compositions (e.g., layered 3D objects, floating cards, asymmetrical offset grids) often break on small screens.
- **Stacking Overlays**: Convert complex side-by-side overlapping elements into clean, vertically stacked sequential flows on mobile.
- **Preserving Z-Index Staging**: Ensure floating modals, bottom sheets, and sticky action bars maintain proper touch accessibility and clear z-index hierarchy on mobile viewports.

---

## 5. Navigation & Touch-Friendly Controls

- **Mobile Navigation**: Replace horizontal desktop nav bars with clean off-canvas slide-over menus or bottom navigation sheets.
- **Touch Targets**: Enforce a minimum touch target size of `44x44px` for all buttons, links, and form controls on mobile devices.
- **Hover Dependency**: Never hide essential information behind hover states (`:hover`), as touch devices cannot hover. Always provide direct tap or visible permanent alternatives.

---

## 6. Adapting 3D Objects, Animations & Heavy Effects

- **Graceful Degradation**: On mobile viewports or low-power devices, replace heavy Three.js 3D canvases or complex WebGL shaders with optimized static WebP imagery or simplified CSS transitions to preserve battery life and prevent frame drops.
- **Motion Reduction**: Respect `prefers-reduced-motion` and disable CPU-intensive parallax or scroll animations on mobile devices.

---

## 7. Good vs. Bad Responsive Design & Common Mistakes

- **❌ Bad**: 
  - A desktop website scaled down via viewport meta tags so users have to pinch-to-zoom on their phones.
  - Horizontal overflow (`overflow-x: hidden` slapped on body as a band-aid for broken layout widths).
  - Hiding crucial purchase or pricing information entirely on mobile screens.
- **✔️ Good**:
  - A layout that reorganizes its hero section from an asymmetrical 2-column spread to a vertical, high-impact stacked format with optimized font sizing and an accessible thumb-friendly CTA.

### Common Mistakes to Avoid
1. **Horizontal Scroll Bugs**: Allowing wide tables, absolute-positioned elements, or inflexible images to overflow the viewport width.
2. **Desktop Shrinkage**: Simply applying `transform: scale(0.5)` or shrinking font sizes to 10px on mobile instead of redesigning the flow.
3. **Overuse of `display: none`**: Hiding vital user content on mobile instead of restructuring how it is presented.
