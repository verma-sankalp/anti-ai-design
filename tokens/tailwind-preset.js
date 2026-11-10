/**
 * Anti-AI-Design Tailwind CSS Preset
 * Replace default generic Tailwind tokens with calibrated obsidian surfaces,
 * editorial typography scales, and restrained monochromatic palettes.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: {
          DEFAULT: '#121212',
          subtle: '#18181b',
          elevated: '#202023',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          DEFAULT: 'rgba(255, 255, 255, 0.15)',
          strong: 'rgba(255, 255, 255, 0.3)',
        },
        accent: {
          DEFAULT: '#f4f4f5', // High-contrast crisp white / silver
          muted: '#a1a1aa',
          subtle: '#52525b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-up': 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
};
