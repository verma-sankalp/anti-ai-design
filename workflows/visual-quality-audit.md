# Visual Quality Audit Workflow

> **Core Principle**: Do not consider an interface finished just because it renders correctly. Its visual quality, usability, responsiveness, and functionality must also be reviewed.

---

## 1. 9-Category Visual Quality Audit

After implementing or modifying an interface, evaluate it across these 9 categories:

### 1. Visual Identity
- Does the interface have a clear, consistent visual personality?
- Does it feel intentionally crafted rather than template-generated?
- Are colors, typography, and visual motifs cohesive?

### 2. Composition & Hierarchy
- Is the primary focal point and information hierarchy instantly clear?
- Are spacing multiples, proportions, and section rhythms varied and balanced?
- Does the layout avoid predictable card grids and template structures?

### 3. Typography
- Are font pairings appropriate for the brand and content?
- Is typographic scale clear across heading levels?
- Are line lengths (45–75 chars), line-heights, and tracking polished?

### 4. Depth & Visual Richness
- Are shadows, procedural grain, layering, and 3D used purposefully?
- Do they enhance atmosphere without causing visual clutter?

### 5. Motion & Interaction
- Are animations smooth (60fps) and purposeful?
- Are all five interaction states (default, hover, active, focus, disabled) implemented?
- Do buttons and controls provide immediate, tactile feedback?

### 6. Responsive Quality
- Test across mobile, tablet, and desktop viewports.
- Check for horizontal overflow, broken composition, awkward text wrapping, or hidden content.

### 7. Accessibility & Usability
- Check contrast ratios (WCAG AA/AAA), visible focus rings (`:focus-visible`), keyboard navigation order, and `prefers-reduced-motion` support.
- Ensure creative flourishes never impede readability or touch targets (`44px+`).

### 8. Technical Quality
- Verify zero console errors, loaded assets, optimized performance, and intact functional behavior.

### 9. Generic AI Design Detection
- Scan for generic gradients, repetitive rounded cards, excessive rounding (`rounded-2xl` on everything), template layouts, and gratuitous glow effects. Replace with intentional design decisions.

---

## 2. Severity Classification System
- **Critical**: Broken functionality, severe accessibility barriers (unreadable contrast, keyboard trap), or layout-breaking overflow.
- **High**: Missing interactive states (no focus ring, dead button), poor responsive reflow, or blatant generic AI tropes (default purple gradients).
- **Medium**: Suboptimal typographic tracking, inconsistent spacing multiples, or minor alignment flaws.
- **Low**: Polish details, minor color tweaks, or subtle hover state refinements.

---

## 3. Prioritization & Correction Process
1. **Identify & Inspect**: Review the rendered interface via screenshots or preview tools.
2. **Classify**: Assign a severity level to each finding.
3. **Correct Immediately**: Do not just report findings; make the actual code corrections in the codebase.
4. **Re-Verify**: Confirm that fixes resolve the issue without introducing regressions.

---

## 4. Examples of Audits

- **❌ Failed Audit**: 
  - *Findings*: Low contrast gray text (Critical), missing focus outlines (High), generic AI blue-purple gradient hero (High), horizontal scroll bug on mobile (Critical).
- **✔️ Successful Audit**: 
  - *Findings*: Pristine WCAG AAA contrast, distinct visible focus rings, responsive auto-fit grid reflow, editorial typography, and zero template tropes.

---

## 5. Audit Checklist
- [ ] Visual identity cohesive and non-generic?
- [ ] Typography scale and tracking polished?
- [ ] Interactive states (hover, focus, active, loading) verified?
- [ ] Responsive layout tested across mobile and desktop without overflow?
- [ ] Accessibility (WCAG contrast, keyboard focus) confirmed?
- [ ] Actual code corrections executed for all identified flaws?
