# Color Theory & Palette Reference

> **Core Principle**: Color should establish identity, hierarchy, and emotion—not simply decorate the interface. Avoid forcing trendy palettes or gradients into every design.

---

## 1. Color Psychology & Brand Personality

Color is the most immediate emotional trigger in a user's experience. Reject generic SaaS templates in favor of intentional, bespoke color stories.

- **Monochromatic & Editorial**: Stark blacks, deep charcoals, off-whites, and a single precise accent color. Communicates luxury, architectural precision, and editorial authority.
- **Warm & Organic**: Terracotta, sage, warm stone, and cream tones. Communicates sustainability, hospitality, and human-crafted warmth.
- **Technical & Precision**: Deep slate, clinical white, electric cyan, or subtle mint accents. Communicates developer tools, fintech, and data rigor.
- **Expressive & Bold**: High-saturation primary contrasts (e.g., acid yellow against deep violet or rich olive against cream). Communicates creative portfolios, art direction, and cultural brands.

---

## 2. Palette Architecture & Design Tokens

Build structured palettes using CSS custom properties (design tokens) rather than hardcoded hex values.

```css
:root {
  /* Neutrals */
  --color-bg-primary: #0a0a0b;
  --color-bg-surface: #121215;
  --color-text-primary: #ededef;
  --color-text-muted: #98989f;
  --color-border: rgba(255, 255, 255, 0.1);

  /* Brand / Accent */
  --color-accent: #f59e0b; /* Amber */
  --color-accent-subtle: rgba(245, 158, 11, 0.1);

  /* Semantic */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

---

## 3. Hierarchy, Contrast & Accessibility

- **The 60-30-10 Rule**: 
  - 60% Dominant color (backgrounds, primary surfaces).
  - 30% Secondary color (cards, structural containers, secondary text).
  - 10% Accent color (primary call-to-action, key focal points).
- **WCAG Compliance**: Ensure all text against background colors meets minimum contrast ratios (WCAG AA: 4.5:1 for normal text, 3:1 for large text; WCAG AAA preferred for editorial clarity).

---

## 4. Light & Dark Themes

Designing for both modes requires calibrated tokens, not mere color inversion:
- **Dark Mode**: Avoid pure black (`#000000`) for large surfaces; use deep off-black charcoals (`#0a0a0b`) to reduce eye strain and allow subtle shadows and borders to remain visible.
- **Light Mode**: Avoid stark pure white (`#ffffff`) for cards layered over white backgrounds; use subtle tinted surfaces (`#f9f9fb`) paired with crisp border definitions.

---

## 5. Gradients: Purposeful vs. Generic

- **Generic (To Avoid)**: The default AI royal-blue-to-vivid-purple gradient (`#3b82f6` to `#8b5cf6`) slapped onto buttons and header text.
- **Intentional (To Embrace)**: Subtle, multi-stop ambient lighting gradients (`radial-gradient` or very low-opacity linear flows) used exclusively to create depth behind a hero canvas or to simulate organic light diffusion.

---

## 6. Semantic Colors

Use semantic colors strictly for their designated feedback functions:
- **Green (`#10b981`)**: Success states, completed actions, positive growth.
- **Amber/Yellow (`#f59e0b`)**: Warnings, pending states, cautionary metrics.
- **Red (`#ef4444`)**: Critical errors, destructive actions, alerts.
- **Blue (`#3b82f6`)**: Informational notices, active states, links.
*Never use semantic colors as decorative branding accents.*

---

## 7. Good vs. Bad Color Palettes & Common Mistakes

- **❌ Bad**: 
  - A dashboard featuring 8 different vibrant saturated colors for no logical reason.
  - Low-contrast light gray text (`#d1d5db`) on a white background (fails accessibility).
  - The mandatory AI purple-blue gradient on every hero header and card border.
- **✔️ Good**:
  - A restrained monochrome interface with an exquisite amber accent, dark charcoal surfaces, and razor-sharp typographic contrast.

### Common Mistakes to Avoid
1. **Excessive Colors**: Introducing new hues for every single card or category without a systemic design token structure.
2. **Poor Contrast**: Sacrificing legibility for "aesthetic minimalism" by using faint low-contrast text.
3. **Inconsistent Semantic Usage**: Using red for a normal badge tag and green for a destructive delete button.
