# 3D & Spatial Design Reference

This guide teaches AI coding agents how to incorporate 3D and spatial elements with purpose, restraint, and high artistic craft. 3D is a powerful amplifier of brand identity when used judiciously, but a severe detriment to performance and usability when applied gratuitously.

---

## 1. 3D Design Techniques

Spatial interfaces combine depth, perspective, and layering to move beyond flat screens.

### Core Techniques
- **CSS 3D Transforms**: Use `perspective`, `transform-style: preserve-3d`, and `rotateX/rotateY/translateZ` for lightweight card tilts, floating panels, and dimensional button states without heavy JS runtimes.
- **Perspective & Depth**: Set realistic camera focal lengths. A low perspective (`perspective: 500px`) creates dramatic warping, while natural perspective (`1000px–1200px`) maintains readability and calm structural depth.
- **Three.js & React Three Fiber (R3F)**: Employ WebGL for immersive product showcases, interactive particle fields, and rich shaders where standard DOM elements fall short.
- **Interactive 3D Objects**: Build inspectable product models (e.g., hardware, footwear, architectural forms) that allow user rotation and zoom.
- **Floating Dimensional Elements**: Anchor UI layers at varying `translateZ` depths to create tangible separation between background canvas, mid-ground content, and foreground overlays.
- **Spatial Compositions**: Treat the viewport as a diorama where 3D geometry and 2D typography coexist in harmonious spatial tension.

---

## 2. Lighting & Materials

Digital 3D realism relies entirely on the interplay of light, shadow, and material surface properties.

### Principles
- **Realistic Lighting**: Combine ambient light (soft overall fill), directional key light (casting primary shadows), and rim/point lights (highlighting object edges and creating separation).
- **Soft Shadows**: Avoid harsh black shadows (`rgba(0,0,0,0.8)`). Use soft, blurred, distance-attenuated shadows to ground objects convincingly in space.
- **Material Diversity**:
  - *Glass (Frosted/Refractive)*: Use transmission, roughness, and chromatic aberration (`meshPhysicalMaterial` in Three.js or `backdrop-filter` in CSS) for tactile glassmorphism.
  - *Metallic*: High specular highlights, environment map reflections (`envMap`), and moderate roughness.
  - *Matte/Clay*: Low specularity, soft Lambertian shading, tactile warmth.
- **Material Consistency**: Maintain a unified lighting direction and material language across all 3D elements in a scene.

---

## 3. 3D Interaction

Motion in 3D must feel physical, responsive, and tied to user intent.

### Techniques
- **Mouse-Controlled Rotation**: Implement smooth damping (slerp/lerp) on mouse move (`pointermove`) so objects tilt responsively toward the cursor without feeling jittery or hypersensitive.
- **Scroll-Based 3D Transformations (Scrollytelling)**: Drive camera orbits or object rotation via scroll progress, revealing product details naturally as the user reads down the page.
- **Subtle Parallax**: Shift background layers, mid-ground 3D assets, and foreground text at differing speeds during cursor movement to create depth without inducing motion sickness.
- **Controlled Camera Movement**: Use cinematic, easing-based camera transitions when shifting between product states or views. Never trap the user inside an unskippable or disorienting 3D loop.

---

## 4. 3D Composition

Integrating 3D objects with traditional 2D typography and UI requires rigorous spatial hierarchy.

### Principles
- **Single Focal Object**: In any given view, feature one primary 3D hero object. Secondary elements should remain 2D UI or atmospheric background geometry.
- **Tri-Level Staging**:
  - *Background*: Ambient particles, gradients, or distant low-poly geometry.
  - *Middle-Ground*: The primary 3D interactive asset or product model.
  - *Foreground*: Crisp 2D typography, floating interactive cards, and navigation controls.
- **Typographic Integration**: Position 3D objects so they frame or interact with text (e.g., text wrapping around a 3D sphere or floating behind a translucent glass pane).

---

## 5. Performance & Technical Restraint

3D graphics are computationally expensive. Optimizing for all devices is non-negotiable.

### Guidelines
- **Scene Complexity Budget**: Keep polygon counts low (optimize meshes), use texture compression (KTX2/WebP), and limit draw calls.
- **Device Adaptation**: Detect mobile devices or low-GPU hardware and gracefully degrade—disable heavy Three.js shaders or complex lighting in favor of static, high-res pre-rendered assets or clean CSS layouts.
- **WebGL Fallbacks**: Always provide a robust semantic HTML/CSS fallback (`<canvas>` initialization failure checks) so users without WebGL support experience a fully functional site.
- **Dependency Discipline**: Never pull in Three.js, React Three Fiber, or GSAP unless the project's brief explicitly requires an immersive 3D/scrollytelling experience.

---

## 6. Practical Decision-Making Matrix

Before adding 3D, evaluate your approach against this matrix:

| Technology | Best Used For | When to Avoid |
| :--- | :--- | :--- |
| **CSS 3D Transforms** | Card flips, subtle tilts, dimensional buttons, layered UI panels. | Complex geometry, lighting simulations, product models. |
| **Three.js / R3F** | Immersive product configurators, interactive art installations, spatial data worlds. | Text-heavy documentation, utility dashboards, basic landing pages. |
| **Conventional 2D** | Dashboards, SaaS apps, forms, blogs, e-commerce checkout flows. | When brand storytelling demands spatial immersion. |

### Common Mistakes to Avoid
- **❌ The Floating Sci-Fi Cliché**: Random wireframe globes, glowing neon rings, and floating polygonal cubes with no relation to the product.
- **❌ Performance Choke**: Unoptimized 50MB GLTF models causing frame rate drops on mobile devices.
- **❌ Usability Blocking**: 3D canvases that capture pointer events, preventing users from scrolling or highlighting text.
