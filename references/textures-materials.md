# Textures & Materials Reference

> **Core Principle**: Textures should enhance the visual identity and atmosphere without competing with content. Do not force textures into clean, minimal, or functional interfaces where they are unnecessary.

---

## 1. Texture Types & Brand Personality

Textures move interfaces away from sterile digital flatness into tactile, human-crafted physical realms.
- **Grain & Film Noise**: Adds subtle organic warmth, breaking up flat digital color blocks and creating a refined editorial atmosphere.
- **Paper & Fabric**: Ideal for storytelling, publishing, artisanal brands, and portfolio sites, evoking tactile stationery or woven fabrics.
- **Metallic & Glass**: High-end gloss, anisotropic brushed metal, and refractive glass surfaces for luxury, hardware, or precision engineering brands.
- **Organic & Mineral**: Subtle stone, concrete, or topographical patterns for architectural, environmental, or craft-oriented products.

---

## 2. Implementation Methods: CSS vs. SVG vs. Images

### CSS-Based Noise & Gradients
Lightweight procedural CSS textures avoid heavy asset downloads:
```css
/* Procedural SVG grain overlay */
.grain-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

### SVG Patterns
Use scalable SVG pattern fills (`<pattern>`) for geometric, grid, or dot-matrix backgrounds.

### Optimized Image Assets
When using photographic or tactile textures (e.g., linen or brushed metal), use highly compressed WebP/AVIF formats at low opacity (`opacity: 0.1 – 0.2`) layered via CSS `background-blend-mode`.

---

## 3. Lighting, Highlights & Material Depth

Textures interact with light. To make a textured surface feel believable:
- **Specular Highlights**: Add subtle top-edge bright borders (`border-t border-white/20`) to simulate overhead lighting on tactile cards.
- **Blend Modes**: Use `mix-blend-mode: overlay` or `soft-light` when layering grain over background colors or imagery so the texture integrates naturally without muddying color values.

---

## 4. Performance & Accessibility Considerations

- **Asset Weight**: Never load massive uncompressed raster textures. Use procedural CSS/SVG noise or tiny tiled WebP patterns (under 20KB).
- **Readability Check**: Ensure background textures do not interfere with text contrast. Always place readable text over solid or semi-opaque surface cards (`background: rgba(18, 18, 21, 0.85); backdrop-filter: blur(12px)`) rather than directly over textured canvases.

---

## 5. Good vs. Bad Textures & Common Mistakes

- **❌ Bad**: 
  - Heavy, high-contrast wood grain or leather textures spanning the entire screen, making text completely unreadable.
  - Tiled pixelated JPEG patterns with visible seams.
- **✔️ Good**:
  - A sophisticated dark-mode SaaS landing page with an ultra-fine procedural SVG grain overlay (`opacity: 0.03`) that gives the background a rich, cinematic film quality.

### Common Mistakes to Avoid
1. **Excessive Opacity**: Turning texture opacity up to `0.5+`, turning content into visual mush.
2. **Forced Skeuomorphism**: Adding faux leather stitching or heavy brushed metal bevels to modern utility apps where clean minimalism is required.
3. **Ignored Performance**: Loading unoptimized 5MB PNG background images that slow down initial page rendering.
