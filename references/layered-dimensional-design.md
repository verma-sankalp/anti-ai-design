# Layered & Dimensional Design Reference

This guide teaches AI coding agents how to build interfaces with physical depth, richness, and intentional spatial layering, moving away from flat, sterile, template-driven layouts.

---

## 1. Tri-Level Spatial Composition

A rich digital interface mimics physical space by organizing content across distinct z-axis planes:
- **Background Layer**: Atmospheric canvas, ambient gradients, subtle grain, or low-contrast structural grids that establish the environmental tone.
- **Middle-Ground Layer**: The primary working environment—core content cards, data grids, primary imagery, and interactive containers.
- **Foreground Layer**: Actionable overlays, floating navigation bars, tooltips, modals, and sticky action buttons that sit physically above the workspace.

---

## 2. Overlapping Elements & Controlled Asymmetry

Flat layouts rely on rigid boxes stacked in strict rows. Dimensional design uses controlled overlapping to create visual interest and spatial tension.

- **Intersection**: Allow imagery or decorative cards to bleed over section dividers or boundary lines.
- **Asymmetrical Stacking**: Offset cards or image containers (`translateY(-2rem)`, `ml-12`) so they break out of standard rigid column grids.
- **Visual Anchors**: Use overlapping typographic statements across image containers to create an editorial, magazine-like composition.

---

## 3. Z-Index, Positioning & Spatial Hierarchy

Managing the z-axis requires a disciplined token system to avoid chaotic stacking contexts.

### Recommended Z-Index Token Scale
- `z-0`: Background atmospheric layers.
- `z-10`: Standard content and cards.
- `z-20`: Sticky headers and structural dividers.
- `z-30`: Dropdowns, popovers, and floating tooltips.
- `z-40`: Modals, slide-over panels, and dialogs.
- `z-50`: Critical toast notifications and system alerts.

---

## 4. Shadows, Lighting, Blur & Transparency (Depth Cues)

Depth is communicated through light diffusion, occlusion shadows, and optical refraction.

- **Multi-Layered Ambient Shadows**: Avoid harsh, single-layer black drop shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`). Instead, simulate real-world light diffusion with layered soft shadows:
  ```css
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 16px -4px rgba(0, 0, 0, 0.08),
    0 24px 32px -8px rgba(0, 0, 0, 0.06);
  ```
- **Translucency & Backdrop Blur**: Use `backdrop-filter: blur(16px)` combined with subtle semi-transparent backgrounds (`background: rgba(255, 255, 255, 0.7)`) and crisp 1px borders (`border: 1px solid rgba(255, 255, 255, 0.2)`) to achieve refined glassmorphism.

---

## 5. Floating Elements & Dimensional Sections

- **Dimensional Cards**: Give cards tactile weight by combining subtle top-highlight borders (`border-t border-white/20`) with deep ambient shadows.
- **Layered Sections**: Use angled clip-paths or overlapping SVG wave/geometric dividers to transition between page sections rather than flat 1px borders.

---

## 6. Combining 2D UI with 3D Objects

When integrating 3D elements (`references/3d-spatial-design.md`) into a layered 2D interface:
- Position 2D UI cards in the foreground with higher z-index and drop shadows that cast visually onto the 3D canvas behind them.
- Maintain clear focal separation so 3D objects never obscure essential 2D text or interactive form controls.

---

## 7. Readability, Usability & Responsive Handling

Dimensional layering must never compromise readability or functionality.
- **Contrast Guarantee**: Ensure text placed over translucent or textured backgrounds maintains strict WCAG AA/AAA contrast ratios. Use solid background scrims (`background: rgba(0,0,0,0.5)`) behind text if necessary.
- **Responsive Degradation**: On mobile viewports where vertical space is constrained and touch targets dominate, collapse complex overlapping layers into clean, linear vertical flows to prevent horizontal scrolling or tap occlusion.

---

## 8. Good vs. Bad Examples & Common Mistakes

- **❌ Bad (Chaos & Clutter)**: Random floating cards scattered across the screen with arbitrary high-blur backgrounds, excessive neon drop shadows, and overlapping text that is unreadable against complex image backdrops.
- **✔️ Good (Controlled Depth)**: A sleek SaaS analytics dashboard where the sidebar rests cleanly on the background, the main data cards feature soft multi-layered elevation, and the active modal floats over a frosted backdrop blur with crisp focus states.

### Common Mistakes to Avoid
1. **Z-Index Wars**: Arbitrarily assigning `z-index: 9999` to elements because of stacking context bugs.
2. **Excessive Blur**: Applying heavy backdrop blur everywhere, causing rendering lag and visual muddying.
3. **Floating Without Purpose**: Littering the screen with unanchored decorative shapes or cards that serve no informational or interactive purpose.
