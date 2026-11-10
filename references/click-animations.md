# On-Click Animations & Tactile Micro-Feedback

Clicks and taps are primary touchpoints in digital interfaces. When a user clicks, instant tactile and visual feedback confirms receipt of the action, eliminating uncertainty and adding physical weight to digital controls.

---

## 1. Tactile Spring Physics & Press States

Avoid rigid `active:scale-95` transitions without easing. Use organic spring physics or expo-out cubic beziers.

### CSS Click Compression Recipe
```css
.tactile-button {
  transform: scale(1);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.15s ease,
              box-shadow 0.15s ease;
  will-change: transform;
}

.tactile-button:hover {
  transform: translateY(-2px);
}

.tactile-button:active {
  transform: scale(0.96) translateY(0px);
  transition: transform 0.08s cubic-bezier(0.34, 1.56, 0.64, 1); /* Quick spring down */
}
```

---

## 2. Ripple & Ink Splash Effects

The Material Design ripple effect adapted for high-craft interfaces generates an expanding translucent wave originating precisely at the user's click coordinate `(clientX, clientY)`.

### Vanilla JavaScript Ripple Implementation
```javascript
document.querySelectorAll('.ripple-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    
    // Remove existing ripples
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }
    
    button.appendChild(circle);
    
    setTimeout(() => circle.remove(), 600);
  });
});
```

### Corresponding CSS
```css
.ripple-btn {
  position: relative;
  overflow: hidden;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-effect 600ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
}

@keyframes ripple-effect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

---

## 3. Button State Morphing (Async Actions)

For form submissions, purchases, or data saves, transform the button through 3 stages on click:
1. **Idle**: Default label ("Complete Order").
2. **Loading**: Spinner icon + disabled pointer events ("Processing...").
3. **Success / Error**: Checkmark icon + green success flash ("Success!").

### CSS State Morphing Example
```css
.action-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.action-btn.loading {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: transparent;
  pointer-events: none;
}

.action-btn.loading .spinner {
  opacity: 1;
}

.spinner {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  opacity: 0;
  transition: opacity 0.2s ease;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## 4. Multi-Sensory Micro-Feedback

- **Haptic Feedback**: On supported mobile browsers, trigger light haptic vibration on critical clicks:
  ```javascript
  if (navigator.vibrate) {
    navigator.vibrate(10); // 10ms gentle tap haptic
  }
  ```
- **Audio Cues**: Optional subtle mechanical clicks or soft acoustic pops for high-end creative web applications (must include a global sound toggle).
- **Error Shake Animation**: When a click fails validation or authentication, trigger a horizontal spring shake:
  ```css
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-6px); }
    40%, 80% { transform: translateX(6px); }
  }
  .shake-error {
    animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  ```
