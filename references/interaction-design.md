# Interaction Design Reference

> **Core Principle**: Every interactive element must communicate its purpose, respond correctly, and provide clear feedback. Do not add interactions merely for decoration. Preserve functionality and accessibility.

---

## 1. Affordance & State Management

An interface is a conversation between user and system. Every interactive element must clearly signal *what it is*, *what it does*, and *what state it is currently in*.

### The Five Essential States
1. **Default**: Clear visual affordance (cursor pointer, underline, border, or button geometry) indicating that the element is interactive.
2. **Hover**: Subtle lift, color shift, or background highlight confirming mouse proximity (`transition: all 150ms ease`).
3. **Active / Pressed**: Immediate tactile feedback (e.g., scale down to `0.98` or inset shadow) confirming the click/tap action.
4. **Focus (Accessibility)**: High-contrast, distinctive outline (`ring-2 ring-offset-2 ring-primary`) for keyboard navigation. **Never remove focus rings without providing a custom accessible alternative.**
5. **Disabled**: Reduced opacity (`opacity-50`), `cursor-not-allowed`, and stripped event handlers so users understand why the action cannot be performed.

---

## 2. Micro-Interactions & Action Feedback

- **Buttons & Links**: Provide immediate visual feedback on click. For async actions (form submissions, API calls), morph the button state to a loading spinner with disabled pointer events.
- **Cards & Containers**: On hover, lift slightly (`translate-y-[-2px]`) or expand shadow depth to invite clicks.
- **Copy-to-Clipboard & Actions**: When a user copies an item, trigger an immediate inline state change ("Copied!") accompanied by a subtle checkmark icon.

---

## 3. Forms, Validation & Error States

Forms are high-friction touchpoints; micro-interactions can make or break completion rates.
- **Real-Time Validation**: Validate on blur (after user leaves the field) rather than on initial keystroke to avoid premature error shaming.
- **Clear Error Messaging**: Pair red border highlights with explicit, human-friendly error copy placed directly beneath the input (e.g., "Enter a valid email address like name@domain.com" instead of "Invalid field").
- **Success States**: Display subtle green validation checkmarks when fields successfully pass validation.

---

## 4. Loading States & Progress Indicators

- **Skeleton Screens**: Use animated pulse skeleton loaders matching the exact shape of incoming content rather than generic full-screen spinners, preventing layout shifts (CLS).
- **Progress Indicators**: For multi-step wizards or file uploads, display determinate progress bars with percentage counts so users understand expected wait times.

---

## 5. Overlays: Menus, Modals & Tooltips

- **Modals**: Trap keyboard focus within the modal (`Tab` navigation loops inside), allow dismissal via `Esc` key, and provide a clear, high-contrast close button (`X`).
- **Tooltips**: Trigger on hover and keyboard focus with a slight delay (`200ms`) so they don't clutter the screen during rapid mouse movement.
- **Expandable Sections (Accordions)**: Use smooth height or grid transitions (`grid-template-rows`) accompanied by a rotating chevron icon to indicate open/closed state.

---

## 6. Accessibility & Keyboard Navigation

- **Focus Order**: Ensure the DOM tab order matches visual reading flow (top-to-bottom, left-to-right).
- **Screen Reader Support**: Use proper ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-hidden`) for dynamic interactive components.

---

## 7. Touch Interactions (Mobile)

- **Hit Targets**: Ensure all interactive elements have a minimum touch target size of `44x44px` (or `48x48px` recommended).
- **Touch Feedback**: Avoid relying solely on hover states for mobile devices; ensure active/pressed touch states provide instant visual feedback.

---

## 8. Good vs. Bad Interaction Examples & Common Mistakes

- **❌ Bad**: 
  - A button that does nothing when clicked for 3 seconds with zero loading feedback (looks dead).
  - A dropdown menu that disappears the moment the mouse cursor moves 1 pixel off-target.
  - Hover effects that violently shake, rotate, or flash bright neon colors.
- **✔️ Good**:
  - A button that smoothly transitions to a loading state on click, successfully submits, and triggers a subtle toast confirmation.
  - A modal that traps focus, dims the background cleanly, and dismisses smoothly on `Esc`.

### Common Mistakes to Avoid
1. **Dead Buttons**: Failing to provide active/hover/loading states on custom clickable elements (e.g., `div` wrapped with an onClick instead of a semantic `<button>`).
2. **Missing Feedback**: Initiating background data mutations without notifying the user.
3. **Overly Complex Hovers**: Adding distracting 3D tilts or bouncy physics to standard navigational links.
