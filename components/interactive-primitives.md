# Anti-AI-Design Production Component Primitives

Ready-to-use, high-craft component implementations across **React / Tailwind**, **Vue (SFC)**, and **Vanilla HTML / CSS / JS**. These primitives replace generic AI templates with tactile, physics-based, and art-directed UI elements.

---

## 1. Spotlight Card (Mouse-Following Radial Gradient)

### React / Tailwind
```tsx
import React, { useRef, useState } from 'react';

export function SpotlightCard({ children, className = '' }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-8 transition-colors ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

### Vue (SFC)
```vue
<script setup>
import { ref } from 'vue'

const cardRef = ref(null)
const x = ref(0)
const y = ref(0)
const opacity = ref(0)

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  x.value = e.clientX - rect.left
  y.value = e.clientY - rect.top
}
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="opacity = 1"
    @mouseleave="opacity = 0"
    class="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-8 transition-colors"
  >
    <div
      class="pointer-events-none absolute -inset-px transition-opacity duration-300"
      :style="{
        opacity,
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 40%)`
      }"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
```

### Vanilla CSS / JS
```html
<div class="spotlight-card">
  <h3>Card Title</h3>
  <p>Editorial body copy with high contrast.</p>
</div>

<style>
.spotlight-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #111;
  padding: 2rem;
  color: #fff;
}
.spotlight-card::before {
  content: '';
  position: absolute;
  top: var(--y, 0);
  left: var(--x, 0);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.spotlight-card:hover::before {
  opacity: 1;
}
</style>

<script>
document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});
</script>
```

---

## 2. Magnetic Button (Tactile Spring Physics)

### React / Tailwind
```tsx
import React, { useRef, useState } from 'react';

export function MagneticButton({ children, className = '' }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`transition-transform duration-200 ease-out will-change-transform rounded-full bg-white px-6 py-3 text-neutral-950 font-medium hover:bg-neutral-200 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
```

### Vue (SFC)
```vue
<script setup>
import { ref } from 'vue'

const btnRef = ref(null)
const x = ref(0)
const y = ref(0)

const handleMouseMove = (e) => {
  if (!btnRef.value) return
  const rect = btnRef.value.getBoundingClientRect()
  x.value = (e.clientX - (rect.left + rect.width / 2)) * 0.35
  y.value = (e.clientY - (rect.top + rect.height / 2)) * 0.35
}

const handleMouseLeave = () => {
  x.value = 0
  y.value = 0
}
</script>

<template>
  <button
    ref="btnRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="{ transform: `translate(${x}px, ${y}px)` }"
    class="transition-transform duration-200 ease-out will-change-transform rounded-full bg-white px-6 py-3 text-neutral-950 font-medium hover:bg-neutral-200 active:scale-95"
  >
    <slot />
  </button>
</template>
```

---

## 3. Procedural SVG Noise Grain Overlay

Add tactile depth to solid dark backgrounds without heavy images.

### CSS
```css
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  opacity: 0.035;
  pointer-events: none;
  z-index: 9999;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```
