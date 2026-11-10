# Anti-AI-Design Modals & Overlays

Cinematic, scale-up entrance modals and toast notifications with backdrop blur and robust keyboard escape handling across **React / Tailwind** and **Vue (SFC)**.

---

## 1. Cinematic Modal Dialog

### React / Tailwind
```tsx
import React, { useEffect } from 'react';

export function CinematicModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity animate-fade-in"
      />
      
      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-2xl animate-scale-up text-white">
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <h2 className="text-xl font-medium tracking-tight">{title}</h2>
          <button 
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
}
```

### Vue (SFC)
```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  title: String
})
const emit = defineEmits(['close'])

const handleKeyDown = (e) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div @click="$emit('close')" class="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm" />
    <div class="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-2xl text-white">
      <div class="flex items-center justify-between pb-6 border-b border-white/10">
        <h2 class="text-xl font-medium tracking-tight">{{ title }}</h2>
        <button @click="$emit('close')" class="rounded-lg p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white">✕</button>
      </div>
      <div class="py-6">
        <slot />
      </div>
    </div>
  </div>
</template>
```
