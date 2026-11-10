# Anti-AI-Design Form Elements & Inputs

High-craft, accessible form controls with floating labels, sharp focus states, and tabular number support across **React / Tailwind**, **Vue (SFC)**, and **Vanilla CSS / HTML**.

---

## 1. Floating Label Input Field

### React / Tailwind
```tsx
import React, { useState } from 'react';

export function FloatingInput({ label, type = 'text', value, onChange, error }) {
  const [isFocused, setIsFocused] = useState(false);
  const hasContent = value && value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=""
        className={`peer w-full rounded-lg border bg-neutral-900 px-4 pt-5 pb-2 text-white placeholder-transparent transition-all outline-none ${
          error 
            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
            : 'border-white/15 focus:border-white focus:ring-1 focus:ring-white'
        }`}
      />
      <label
        className={`absolute left-4 transition-all pointer-events-none text-neutral-400 ${
          isFocused || hasContent
            ? 'top-1.5 text-xs text-white'
            : 'top-3.5 text-sm text-neutral-400'
        }`}
      >
        {label}
      </label>
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </div>
  );
}
```

### Vue (SFC)
```vue
<script setup>
defineProps({
  modelValue: String,
  label: String,
  type: { type: String, default: 'text' },
  error: String
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative w-full">
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder=""
      class="peer w-full rounded-lg border border-white/15 bg-neutral-900 px-4 pt-5 pb-2 text-white placeholder-transparent transition-all outline-none focus:border-white focus:ring-1 focus:ring-white"
    />
    <label
      class="absolute left-4 top-3.5 text-sm text-neutral-400 transition-all pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
    >
      {{ label }}
    </label>
    <span v-if="error" class="mt-1 block text-xs text-red-400">{{ error }}</span>
  </div>
</template>
```

---

## 2. High-Craft Toggle Switch

### React / Tailwind
```tsx
import React from 'react';

export function ToggleSwitch({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <div 
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
          checked ? 'bg-white' : 'bg-neutral-800 border border-white/20'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-neutral-950 transition-transform duration-200 ease-in-out ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
      {label && <span className="text-sm text-neutral-300 font-medium">{label}</span>}
    </label>
  );
}
```
