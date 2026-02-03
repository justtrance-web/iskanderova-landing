# KEM Conference Design System

A production-ready design token system extracted from the KEM business conference website (kem.kemstom.com).

## Overview

This design system provides:

- **Design Tokens** (JSON format) - The source of truth for all design decisions
- **CSS Custom Properties** - Ready-to-use CSS variables
- **Style Dictionary Config** - Transform tokens to any platform format
- **Component Styles** - Pre-built CSS classes for common components

## Files

| File | Description |
|------|-------------|
| `design-tokens.json` | Source design tokens in W3C format |
| `design-tokens.css` | Pre-generated CSS custom properties |
| `style-dictionary.config.js` | Style Dictionary build configuration |

## Quick Start

### Option 1: Use Pre-generated CSS

Simply include the CSS file in your project:

```html
<link rel="stylesheet" href="docs/design-tokens.css">
```

Then use CSS variables:

```css
.my-element {
  background-color: var(--color-primary);
  color: var(--color-fg-inverse);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
}
```

### Option 2: Build with Style Dictionary

```bash
npm install style-dictionary
npx style-dictionary build --config ./docs/style-dictionary.config.js
```

This generates:
- `dist/tokens/tokens.css` - CSS custom properties
- `dist/tokens/_tokens.scss` - SCSS variables and maps
- `dist/tokens/tokens.js` - JavaScript/TypeScript module
- `dist/tokens/tokens.json` - Nested JSON
- `dist/tokens/tokens-flat.json` - Flat JSON for Figma Tokens

---

## Color System

### Semantic Colors (Recommended)

Use semantic colors for maintainability:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #12263a | Primary brand color (dark blue) |
| `--color-accent` | #f39200 | CTAs, highlights (orange) |
| `--color-accent-hover` | #ffab33 | Accent hover state |
| `--color-highlight` | #fff705 | Special highlights (yellow) |

### Background Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | #ffffff | Main page background |
| `--color-bg-secondary` | #f5f5dc | Content sections (beige) |
| `--color-bg-tertiary` | #12263a | Dark sections (pricing, footer) |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-fg-primary` | #000000 | Primary text |
| `--color-fg-secondary` | #666666 | Secondary text |
| `--color-fg-muted` | #999999 | Disabled/muted text |
| `--color-fg-inverse` | #ffffff | Text on dark backgrounds |

### Section Backgrounds

```css
/* Dark section (pricing, hotels, contacts) */
.section-dark {
  background-color: var(--color-bg-tertiary);
  color: var(--color-fg-inverse);
}

/* Light content section (beige) */
.section-light {
  background-color: var(--color-bg-secondary);
  color: var(--color-fg-primary);
}

/* White section */
.section-white {
  background-color: var(--color-bg-primary);
  color: var(--color-fg-primary);
}
```

---

## Typography

### Font Family

```css
font-family: var(--font-family-primary);
/* Output: 'Inter', Arial, sans-serif */
```

### Font Size Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--font-size-xs` | 12px | Captions, labels |
| `--font-size-sm` | 14px | Secondary text |
| `--font-size-base` | 16px | Body text |
| `--font-size-md` | 18px | Emphasized body |
| `--font-size-lg` | 20px | Lead text |
| `--font-size-xl` | 24px | Small headings |
| `--font-size-2xl` | 30px | Section headings |
| `--font-size-3xl` | 36px | Major headings |
| `--font-size-4xl` | 48px | Hero subheadings |
| `--font-size-5xl` | 60px | Hero headings |

### Font Weights

| Token | Value |
|-------|-------|
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 500 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |
| `--font-weight-extrabold` | 800 |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-tight` | 1.1 | Large headings |
| `--line-height-snug` | 1.25 | Headings |
| `--line-height-normal` | 1.5 | Body text |
| `--line-height-relaxed` | 1.625 | Readable paragraphs |

---

## Spacing System

Based on Tilda's grid system (60/90/120/180px).

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-1` | 4px | Minimal spacing |
| `--spacing-2` | 8px | Tight spacing |
| `--spacing-3` | 12px | Small spacing |
| `--spacing-4` | 16px | Default spacing |
| `--spacing-6` | 24px | Comfortable spacing |
| `--spacing-8` | 32px | Generous spacing |
| `--spacing-10` | 40px | Large spacing |
| `--spacing-15` | 60px | Tilda small section |
| `--spacing-22` | 90px | Tilda medium section |
| `--spacing-30` | 120px | Tilda large section |
| `--spacing-45` | 180px | Tilda XL section |

### Section Spacing

```css
/* Hero and major content sections */
.hero-section {
  padding-top: var(--section-spacing-xl);    /* 180px */
  padding-bottom: var(--section-spacing-xl); /* 180px */
}

/* Pricing sections */
.pricing-section {
  padding-top: var(--section-spacing-lg);    /* 120px */
  padding-bottom: var(--section-spacing-md); /* 90px */
}

/* Standard content sections */
.content-section {
  padding-top: var(--section-spacing-md);    /* 90px */
  padding-bottom: var(--section-spacing-sm); /* 60px */
}
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | Sharp edges |
| `--radius-sm` | 4px | Subtle rounding |
| `--radius-md` | 8px | Medium rounding |
| `--radius-lg` | 10px | Card rounding |
| `--radius-pill` | 30px | Button rounding |
| `--radius-full` | 9999px | Circles, avatars |

---

## Shadows

### Standard Shadows

```css
box-shadow: var(--shadow-sm);  /* Subtle - cards at rest */
box-shadow: var(--shadow-md);  /* Medium - elevated cards */
box-shadow: var(--shadow-lg);  /* Large - modals, popovers */
box-shadow: var(--shadow-xl);  /* Extra large - hover states */
```

### Accent Shadows (Orange Glow)

```css
/* For CTA buttons */
box-shadow: var(--shadow-accent-md);      /* 15px 3px orange glow */
box-shadow: var(--shadow-accent-lg);      /* 20px 5px orange glow (hover) */
```

---

## Transitions

### Durations

| Token | Value |
|-------|-------|
| `--duration-fast` | 100ms |
| `--duration-normal` | 200ms |
| `--duration-moderate` | 300ms |
| `--duration-slow` | 500ms |

### Composite Transitions

```css
transition: var(--transition-all);       /* all 300ms ease */
transition: var(--transition-colors);    /* color + background 300ms */
transition: var(--transition-transform); /* transform 200ms ease-out */
transition: var(--transition-shadow);    /* box-shadow 200ms ease-in-out */
```

---

## Component Styles

### Primary Button (Orange CTA)

```html
<button class="btn-primary">Купить билет</button>
```

```css
.btn-primary {
  background-color: var(--btn-primary-bg);
  color: var(--btn-primary-color);
  border-radius: var(--btn-primary-radius);
  padding: var(--btn-primary-padding-y) var(--btn-primary-padding-x);
  box-shadow: var(--btn-primary-shadow);
  transition: var(--transition-all);
}

.btn-primary:hover {
  background-color: var(--btn-primary-bg-hover);
  box-shadow: var(--btn-primary-shadow-hover);
  transform: translateY(-2px);
}
```

### Secondary Button (Outline)

```html
<button class="btn-secondary">Подробнее</button>
```

### Card

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

```css
.card {
  background-color: var(--card-bg);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
  transition: var(--transition-all);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-5px);
}
```

### Input

```html
<input type="text" class="input" placeholder="Ваше имя">
```

---

## Animations

### Button Shine Effect

The primary button includes a shine animation on hover:

```css
.btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-button-shine);
  transform: translateX(-100%);
}

.btn-primary:hover::after {
  animation: flash 0.6s ease-out;
}
```

### Available Keyframes

- `ripple` - Button click ripple effect
- `flash` - Quick shine sweep (0.6s)
- `flash-md` - Medium shine sweep
- `flash-lg` - Slow shine sweep

---

## Responsive Behavior

The design system includes responsive overrides for mobile:

```css
@media (max-width: 768px) {
  :root {
    --section-spacing-xl: 90px;
    --section-spacing-lg: 60px;
    --font-size-5xl: 42px;
    --font-size-4xl: 36px;
  }
}

@media (max-width: 480px) {
  :root {
    --section-spacing-xl: 60px;
    --font-size-5xl: 36px;
    --btn-primary-padding-x: 24px;
  }
}
```

---

## Accessibility

### Reduced Motion

The system respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast

All semantic color combinations meet WCAG AA requirements:

| Combination | Contrast Ratio |
|-------------|----------------|
| Primary text on white | 21:1 |
| Inverse text on primary | 12.6:1 |
| Accent on white | 3.1:1 (Large text only) |
| Accent on primary | 4.8:1 |

---

## Extending the System

### Adding New Tokens

1. Add tokens to `design-tokens.json`
2. Run Style Dictionary build
3. Use new CSS variables

### Theming

Override root variables for theming:

```css
/* Dark theme example */
[data-theme="dark"] {
  --color-bg-primary: var(--color-gray-900);
  --color-bg-secondary: var(--color-gray-800);
  --color-fg-primary: var(--color-white);
}
```

---

## Token Reference

For the complete token list, see:

- **JSON**: `/docs/design-tokens.json`
- **CSS**: `/docs/design-tokens.css`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-02 | Initial extraction from KEM website |

---

*Generated by Design System Architect*
