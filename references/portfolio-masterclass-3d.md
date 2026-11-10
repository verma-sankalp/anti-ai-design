# Portfolio Masterclass: Layered 3D, Next.js, Three.js & GSAP

> **Objective**: Build breathtaking, award-winning developer and designer portfolios that combine high-performance Next.js architectures with immersive Three.js spatial scenes and cinematic GSAP scroll choreography.

---

## 1. Architectural Blueprint (Next.js App Router)

### Recommended Tech Stack
- **Framework**: Next.js 14+ (App Router, Server Components for SEO/content, Client Components for interactive 3D/Canvas).
- **3D Engine**: Three.js via `@react-three/fiber` (R3F) and `@react-three/drei`.
- **Animation & Scroll**: GSAP (`gsap`, `ScrollTrigger`) for timeline-based UI transitions and camera scrubbing.
- **Styling**: Tailwind CSS calibrated with strict obsidian dark tokens (`#0a0a0a`, `#121212`) and high-contrast typographic hierarchy.

### Folder Structure
```text
src/
├── app/
│   ├── layout.tsx             # Root layout, noise overlay, smooth scroll provider
│   ├── page.tsx               # Landing / Portfolio home
│   └── project/[slug]/page.tsx # Case study deep dive
├── components/
│   ├── canvas/
│   │   ├── Scene.tsx          # R3F Canvas container with performance dpr
│   │   ├── HeroModel.tsx      # 3D interactive product/avatar model
│   │   └── ParticleField.tsx  # Procedural particle atmosphere
│   ├── ui/
│   │   ├── Navbar.tsx         # Glassmorphism header with active pill
│   │   ├── ProjectCard.tsx    # Spotlight card with magnetic tilt
│   │   └── Cursor.tsx         # Custom inertia dot/ring cursor
│   └── gsap/                  # ScrollTrigger choreography hooks
└── styles/
    └── globals.css            # Custom utility classes & noise texture
```

---

## 2. Three.js & R3F Scene Staging

Avoid heavy default models or unoptimized lighting. Use clean procedural geometries or optimized GLTF assets with custom shaders.

### Canvas Wrapper with Performance Optimization (`Scene.tsx`)
```tsx
'object' | 'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';

export function PortfolioScene({ children }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // High DPI optimization
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="pointer-events-none absolute inset-0 z-0"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      {children}
      <Environment preset="city" />
      <EffectComposer>
        <Bloom luminanceThreshold={0.8} intensity={0.4} />
        <Noise opacity={0.02} />
      </EffectComposer>
    </Canvas>
  );
}
```

---

## 3. GSAP ScrollTrigger & Scrollytelling Choreography

### Synchronizing 3D Camera with DOM Scroll
```tsx
'client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollScrubber({ cameraRef }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cameraRef.current.position, {
        z: 2,
        y: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Smooth damping lag
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [cameraRef]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen flex items-center justify-between px-12">
        <h1 className="text-6xl font-serif text-white">Crafting Digital Realities.</h1>
      </div>
    </div>
  );
}
```

---

## 4. Anti-AI Checklist for Portfolios

1. **No Generic Bento Grids**: Avoid identical square cards with standard purple glowing gradients. Use asymmetric editorial typography grids.
2. **Intentional Camera Damping**: Never let 3D camera rotation induce motion sickness. Keep damping coefficients smooth (`lerp`).
3. **Typography as Art**: Pair heavy serif display headings (`Playfair Display` or `Instrument Serif`) with clean monospace metadata (`JetBrains Mono`).
4. **Hardware Acceleration**: Always isolate canvas elements behind pointer-events pass-through (`pointer-events-none`) so users can interact with underlying text and buttons smoothly.
