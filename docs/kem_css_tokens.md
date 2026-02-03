# KEM Design Tokens - Extracted CSS

## Colors
```css
--primary: #12263a;        /* Dark blue - headers, footer, pricing */
--accent: #f39200;         /* Orange - CTAs, highlights */
--beige: #f5f5dc;          /* Beige - content backgrounds */
--white: #ffffff;
--black: #000000;
--dark-gray: #191a1d;
--gray: #242424;
```

## Gradients
```css
/* Hero/decorative gradients */
linear-gradient(0.125turn, rgba(18,38,58,1) ...)
linear-gradient(0.195turn, rgba(243,146,0,1) ...)
linear-gradient(0.195turn, rgba(245,245,220,1) ...)
linear-gradient(0.493turn, rgba(245,245,220,1) ...)

/* Shine effect on buttons */
linear-gradient(90deg, rgba(255,255,255,.1) ...)
```

## Shadows
```css
/* Card shadows */
box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);
box-shadow: 0px 0px 20px rgba(0,0,0,0.3);

/* Orange glow for CTAs */
box-shadow: 0px 0px 15px 3px rgba(243,146,0,0.2);

/* Inset for buttons */
box-shadow: inset 0px -1px 0px 0px #ffffff;
```

## Border Radius
```css
border-radius: 0px;           /* Sharp edges */
border-radius: 10px;          /* Cards */
border-radius: 30px;          /* Buttons */
border-radius: 100%;          /* Circles (avatars) */
border-radius: 3000px;        /* Pill shapes */
```

## Typography
```css
font-family: Inter, Arial, sans-serif;
/* Fallback: var(--t-text-font, Arial) */
```

## Spacing (Tilda grid)
```css
padding-top: 180px;     /* Large sections */
padding-bottom: 180px;  /* Section ends */
padding-top: 120px;     /* Pricing sections */
padding-bottom: 90px;   /* Medium spacing */
padding-bottom: 60px;   /* Small spacing */
```

## Transitions
```css
transition: all 0.3s ease;
transition: all ease-in-out 0.2s;
transition: opacity 0.5s;
transition: opacity ease-in-out 0.2s;
transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
transition: background-color 0.3s linear;

/* Tilda variables */
transition: background-color var(--t396-speedhover, 0s) ease-in-out;
transition: color var(--t396-speedhover, 0s) ease-in-out;
transition: box-shadow var(--t396-shadowshoverspeed, 0.2s) ease-in-out;
```

## Animations (Keyframes)
```css
/* Button hover ripple */
@keyframes ripple {
  20% {
    opacity: 0;
    transform: scale(2.5);
  }
}

/* Button shine flash */
@keyframes flash {
  20% { transform: translateX(100%); }
}
@keyframes flash-md {
  30% { transform: translateX(100%); }
}
@keyframes flash-lg {
  40% { transform: translateX(100%); }
}

/* Button hover state */
@keyframes t-button-hover-animation {
  to {
    background-image: none;
    background-color: transparent;
  }
}
```

## Button Styles
```css
/* Primary CTA (orange) */
.btn-primary {
  background-color: #f39200;
  color: #ffffff;
  border-radius: 30px;
  padding: 15px 40px;
  box-shadow: 0px 0px 15px 3px rgba(243,146,0,0.2);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0px 0px 20px 5px rgba(243,146,0,0.3);
}

/* Secondary (outline) */
.btn-secondary {
  background: transparent;
  border: 2px solid #f39200;
  color: #f39200;
  border-radius: 30px;
}
```

## Section Backgrounds
```css
/* Dark sections (pricing, hotels, contacts) */
.section-dark {
  background-color: #12263a;
  color: #ffffff;
}

/* Light content sections */
.section-light {
  background-color: #f5f5dc;
  color: #000000;
}

/* White sections */
.section-white {
  background-color: #ffffff;
  color: #000000;
}
```

## Hover Effects
```css
/* Card lift */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
}

/* Link underline */
a:hover {
  text-decoration: underline;
}

/* Button glow pulse */
.btn:hover::after {
  animation: flash 0.6s ease-out;
}
```
