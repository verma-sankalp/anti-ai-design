# Advanced 3D Shaders & WebGL Reference

This guide covers advanced WebGL and Three.js / React Three Fiber techniques for building high-end, immersive 3D web experiences without sacrificing performance.

---

## 1. Custom GLSL Shaders

Shaders allow you to bypass standard lighting models and create custom visual effects such as organic fluid distortions, holographic wireframes, and noise-driven particle fields.

### Vertex vs. Fragment Shaders
- **Vertex Shader**: Manipulates geometry coordinates in 3D space (e.g., wave displacement, bending, vertex explosion).
- **Fragment Shader**: Calculates pixel color, lighting, reflections, and post-processing effects.

### Example: Organic Wave Vertex Shader (GLSL)
```glsl
uniform float uTime;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Create gentle wave displacement
  pos.z += sin(pos.x * 2.0 + uTime) * 0.15;
  pos.y += cos(pos.y * 2.0 + uTime) * 0.15;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
```

---

## 2. Post-Processing & Cinematic Pipelines

Post-processing elevates raw 3D renders into cinematic masterpieces. Use `postprocessing` or `@react-three/postprocessing`.

### Essential Post-Processing Passes
1. **Bloom / Emissive Glow**: Soft bloom on bright highlights and light sources (`intensity: 1.2`, `luminanceThreshold: 0.8`).
2. **Chromatic Aberration**: Subtle RGB color channel splitting at screen edges to emulate physical camera lenses.
3. **Depth of Field (DoF)**: Blurring background and foreground elements relative to the camera focal point to focus attention on the hero asset.
4. **Subtle Film Grain**: Procedural noise overlay (`opacity: 0.03`) to eliminate digital color banding.

---

## 3. Refractive Glass & Material Physics

Achieving realistic glass, crystals, and liquid surfaces requires advanced physical materials.

- **MeshPhysicalMaterial (Three.js)**:
  - `transmission`: `0.95` (allows light to pass through like glass).
  - `roughness`: `0.05` (smooth, polished surface).
  - `ior`: `1.5` (Index of Refraction for glass).
  - `thickness`: `1.2` (simulates volume refraction).
  - `envMapIntensity`: `2.0` (strong reflection of environment map).

---

## 4. Performance Optimization for Shaders & WebGL

- **PixelRatio Cap**: Always clamp pixel ratio to max `2` (`renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`) to prevent extreme GPU strain on Retina / 4K displays.
- **Frustum Culling**: Ensure objects outside the camera view are not rendered.
- **InstancedMesh**: When rendering hundreds of identical objects (e.g., particles, grid dots), use `InstancedMesh` instead of individual meshes to maintain a single draw call.
- **Dispose Resources**: Clean up geometries, materials, textures, and render targets when unmounting components to prevent memory leaks.
