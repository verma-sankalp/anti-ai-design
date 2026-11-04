# Typography Design Reference

> **Core Principle**: Typography is a core part of visual identity, not merely a way to display text. Avoid forcing unconventional typography when it harms readability or usability.

---

## 1. Font Selection & Brand Personality

Generic AI interfaces default to standard system sans-serif fonts (`Inter`, `Roboto`, `Arial`) applied uniformly across every project. Distinctive design selects typefaces that convey specific emotion, heritage, or modern precision.

### Typeface Categories & Personalities
- **Serif (Editorial, Authoritative, Crafted)**: Ideal for literary, luxury, long-form journalism, or heritage brands. Evokes trust and sophistication.
- **Neo-Grotesque & Geometric Sans (Clean, Modern, Functional)**: Ideal for technical apps, developer tools, and clean dashboards. Must be paired with strong editorial hierarchy to avoid looking generic.
- **Display & Humanist (Expressive, Bold, Unique)**: Ideal for hero statements, portfolio covers, and artistic landing pages.
- **Monospace (Precise, Technical, Code-centric)**: Excellent for data readouts, technical captions, badges, and high-end editorial contrast.
- **Variable Fonts**: Leverage single font files with fluid axes (`wght`, `opsz`, `ital`) for high-performance responsive typography.

---

## 2. Typography Hierarchy & Scale

Establish a rigorous, mathematically sound typographic scale rather than arbitrary font sizes.

- **Extreme Contrast**: Pair massive display headers (e.g., `3.5rem` to `6rem`) with crisp, highly readable body copy (`1rem`).
- **Harmonic Ratios**: Use modular scales (e.g., Major Third `1.250` or Perfect Fourth `1.333`) to maintain proportional harmony across heading levels.

---

## 3. Font Pairing & Contrast

Never mix more than **two** font families per interface (excluding monospace for code/data).
- **Classic Pairing**: A high-contrast editorial serif for headlines (`Playfair Display`, `Instrument Serif`, `Lora`) paired with a neutral, highly legible sans-serif for body text (`Inter`, `Geist`, `Plus Jakarta Sans`).
- **Monochrome Contrast**: Pair a heavy geometric sans display header with a refined grotesk body font, differentiating them through weight (900 vs 400) and tracking.

---

## 4. Craft & Spacing (Metrics that Matter)

Good typography lives in the details:
- **Tracking (Letter-Spacing)**: 
  - Tighten letter-spacing (`tracking-tight` or `-0.03em`) on large display headers to create a dense, premium lockup.
  - Widen letter-spacing slightly (`tracking-wide` or `0.05em`) on small uppercase metadata or captions to enhance legibility.
- **Line-Height (Leading)**:
  - Headings: Tight leading (`1.1` to `1.2`) so multi-line titles feel cohesive.
  - Body Copy: Generous leading (`1.5` to `1.7`) to allow the eye to easily travel across lines.
- **Line-Length (Measure)**: Restrict body paragraphs to 45–75 characters per line (`max-w-prose` or `max-w-2xl`) to prevent reader fatigue.

---

## 5. Creative Headings & Editorial Layouts

- **Oversized Typography**: Let hero headers break out of standard containers or span across multi-column image grids.
- **Mixed Formatting**: Combine italicized serif accents within bold sans-serif display titles (e.g., *Crafting* **Digital Excellence**).
- **Typography as Art**: Use giant background typography (opacity 5–10%) or striking typographic lockups as primary visual anchors in hero sections.

---

## 6. Responsive Typography Using `clamp()`

Eliminate jerky media query font jumps by using fluid CSS `clamp()` for responsive fluid scaling:

```css
:root {
  /* Scales smoothly from 2.5rem on mobile to 5rem on 1440px screens */
  --font-size-hero: clamp(2.5rem, 5vw + 1rem, 5rem);
  --font-size-body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
}

h1 {
  font-size: var(--font-size-hero);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

p {
  font-size: var(--font-size-body);
  line-height: 1.6;
}
```

---

## 7. Performance & Accessibility

- **Font Loading**: Self-host web fonts (Woff2), use `font-display: swap` to prevent invisible text during load, and preload critical display fonts.
- **Accessibility**: Never drop body font size below `16px` (`1rem`) for primary readable text. Ensure color contrast meets or exceeds WCAG AA standards against the background.

---

## 8. Good vs. Bad Examples & Common Mistakes

- **❌ Bad (Generic & Unreadable)**: A landing page using default system sans-serif for everything, uniform 16px body and 24px headings, 1.0 line-spacing on paragraphs, and unconstrained 1200px-wide text blocks.
- **✔️ Good (Crafted & Intentional)**: A sophisticated editorial site featuring an exquisite serif header with tight tracking, generous body line-height, fluid scaling via `clamp()`, and clear hierarchical contrast.

### Common Mistakes to Avoid
1. **Too Many Font Families**: Mixing 3 or 4 different typefaces in a single application.
2. **Ignored Line-Height**: Leaving default line heights on large headings, causing descenders to clip.
3. **Unscannable Walls of Text**: Writing long, unformatted paragraphs without subheadings or pull quotes.
4. **Forced Readability Failure**: Using ultra-light font weights (`font-light`) in small sizes on low-contrast backgrounds.
