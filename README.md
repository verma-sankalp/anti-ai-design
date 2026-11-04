# Anti-AI-Design

> **Transform generic AI-generated interfaces into distinctive, intentional, human-crafted digital experiences.**

[![Skill Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Design System](https://img.shields.io/badge/design-intentional-purple.svg)]()

---

## Introduction

**Anti-AI-Design** is a specialized AI coding skill designed to elevate the visual and interactive quality of interfaces produced by AI coding agents. 

### Why Generic AI Interfaces Look Repetitive
When left to default tendencies, AI coding assistants frequently generate sterile, template-driven interfaces: endless 3D card grids with soft drop shadows, royal blue-to-purple radial gradients, generic sans-serif typography (`Inter`), indiscriminate rounded corners (`rounded-2xl` on everything), and decorative glowing blobs. These patterns lack brand identity, storytelling, and emotional resonance.

### How This Skill Helps
Anti-AI-Design equips AI coding agents with professional art direction, design principles, structured workflows, and reference libraries. It shifts the AI's mindset from *"generating functional scaffolding"* to *"crafting intentional, memorable digital experiences."*

### Who Should Use It
- **Developers & Founders** who want their AI-generated web apps and landing pages to look like they were built by a top-tier design studio.
- **AI Coding Agents & Assistants** seeking deep architectural guidelines for typography, color theory, 3D staging, motion choreography, and accessibility.

---

## Features

- **Distinctive Visual Directions**: 5 curated art directions across landing pages, SaaS platforms, dashboards, mobile apps, portfolios, and immersive 3D websites.
- **Advanced Typography & Scale**: Editorial serif pairings, fluid `clamp()` sizing, tracking control, and scannable measures.
- **Purposeful 3D & Spatial Design**: CSS 3D transforms, Three.js / React Three Fiber staging, lighting, materials, and WebGL performance fallbacks.
- **Layering & Dimensionality**: Tri-level z-index staging, soft multi-layered ambient shadows, and refined glassmorphism.
- **Motion Choreography**: Physics-based micro-interactions, staggered entrance reveals, and `prefers-reduced-motion` accessibility.
- **Color Theory & Textures**: Bespoke color psychology, 60-30-10 palette tokens, and procedural CSS/SVG grain overlays.
- **Accessibility & Usability**: WCAG AA/AAA contrast compliance, visible `:focus-visible` rings, semantic HTML, and `44px+` touch targets.
- **Rigorous Workflows**: 7-step design planning, 9-stage implementation, and a thorough 9-category visual quality audit workflow.

---

## Before vs. After

| Dimension | Generic AI Pattern (Avoid) | Intentional Craft (Embrace) |
| :--- | :--- | :--- |
| **Hero Section** | Centered text, pill badge ("✨ Introducing"), royal blue-to-purple gradient background, 2 default CTA buttons. | Asymmetrical editorial layout, oversized serif display headline (`5.5rem`), stark monochrome contrast, structured whitespace. |
| **Feature Grids** | 3 identical rounded cards (`rounded-xl`), drop shadow, icon in a tinted square box, bold title, short description. | Structured editorial list with numbered markers (`01`, `02`, `03`), clean divider rules, and high-contrast typographic hierarchy. |
| **Color Palette** | Default Tailwind slate surfaces mixed with heavy royal blue and vibrant purple gradient accents. | Calibrated design tokens (60-30-10 rule), deep charcoal obsidian surfaces, and a single restrained, high-impact brand accent. |
| **Interactions** | Dead buttons, missing active/focus states, violent bouncy hover animations, unoptimized layout shifts. | Five essential states (default, hover, active, focus, disabled), smooth tactile feedback (`150ms ease`), and skeleton loaders. |

---

## Supported Design Categories

1. **Landing Pages**: Editorial, Minimal, Immersive 3D, Experimental, and Premium SaaS flagships.
2. **SaaS Websites**: Modern Minimal, Enterprise Secure, Editorial, Bold Startup, and Developer-First API portals.
3. **Dashboards**: Minimal analytical terminals, editorial data reports, polished SaaS workspaces, dark technical dev consoles, and creative analytics.
4. **Mobile Applications**: Minimal utilities, refined fintech banking, editorial reading apps, bold streaming tools, and spatial AR interfaces.
5. **Portfolios**: Minimal professional, editorial designer, experimental creative, technical developer, and 3D immersive showcases.
6. **Immersive 3D Websites**: Product showcases, scroll-driven storytelling, futuristic cybernetic portals, architectural spatial displays, and minimal editorial 3D.

---

## Installation

Add this skill to your environment using the [Skills CLI](https://github.com/anthropics/skills):

```bash
npx skills add YOUR_GITHUB_USERNAME/anti-ai-design --skill anti-ai-design -g
```

> **Note**: Replace `YOUR_GITHUB_USERNAME` and repository name with your actual GitHub username and repository location.

### Compatibility
Compatible with AI coding assistants and CLI tools supporting skill injection (e.g., Claude Code).

---

## Usage Examples

Give your AI coding agent prompts such as:
- *"Create a distinctive, art-directed SaaS landing page for our developer API using the Minimal Modern SaaS direction."*
- *"Redesign my dashboard to avoid generic AI card grids; use a Minimal Analytical layout with clean hairline borders and tabular numbers."*
- *"Build an immersive 3D portfolio hero section featuring a tactile product showcase with smooth camera damping."*
- *"Run a visual quality audit on our application and fix any low contrast text, missing focus states, or generic AI gradients."*

---

## Project Structure

```text
Anti-ai-Design/
├── SKILL.md                          # Main AI agent instruction file
├── references/                       # Deep-dive design guides
│   ├── anti-ai-design-rules.md
│   ├── visual-design.md
│   ├── typography-design.md
│   ├── layered-dimensional-design.md
│   ├── 3d-spatial-design.md
│   ├── motion-animation.md
│   ├── interaction-design.md
│   ├── responsive-design.md
│   ├── color-theory.md
│   ├── textures-materials.md
│   ├── premium-ui-design.md
│   └── accessibility-usability.md
├── examples/                         # Visual direction examples
│   ├── landing-page.md
│   ├── dashboard.md
│   ├── mobile-app.md
│   ├── portfolio.md
│   ├── saas-website.md
│   └── immersive-3d-website.md
├── workflows/                        # Actionable agent workflows
│   ├── design-planning.md
│   ├── implementation-workflow.md
│   └── visual-quality-audit.md
└── assets/                           # Design resource index
    └── design-resources.md
```

---

## How It Works

- **`SKILL.md`**: The central instruction file loaded when the skill activates. It defines the AI's role, workflow, anti-patterns, and quality standards.
- **`references/`**: Specialized reference documents consulted by the agent for deep dives into typography, 3D, motion, color, and accessibility.
- **examples/**: Curated visual direction blueprints that prevent template generation across various product types.
- **`workflows/`**: Step-by-step operational workflows guiding the agent from initial design planning to code implementation and visual auditing.
- **`assets/`**: Pointers to reliable external design resources (Google Fonts, Lucide, Three.js, etc.).

---

## Design Philosophy

- **Intentional over generic**: Every layout choice must serve a distinct brand and user purpose.
- **Purposeful creativity over random complexity**: Use 3D, animation, and asymmetry only when they elevate the experience.
- **Functionality over decoration**: Never sacrifice data density, user efficiency, or performance for visual flair.
- **Visual identity over templates**: Reject clone landing pages and repetitive card grids.
- **Accessibility over visual vanity**: WCAG compliance, keyboard navigation, and touch targets are non-negotiable.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
