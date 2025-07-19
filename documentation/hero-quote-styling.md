# Hero Quote Styling

## Overview

The hero section includes decorative quote SVG icons that frame the main message text. This document outlines the styling approach and positioning for these visual elements.

## Implementation

### HTML Structure

The quotes are implemented as inline SVG elements within the hero message paragraph:

```html
<p class="hero__message">
  <svg><!-- Opening quote SVG --></svg>
  <span class="hero__message-text">{{ text }}</span>
  <strong class="hero__message-focus-text">{{ focusText }}</strong>
  <svg><!-- Closing quote SVG --></svg>
</p>
```

### CSS Styling

#### Quote Positioning and Spacing

```css
.hero__message svg {
  display: inline;
  vertical-align: top;
  margin: 0 12px;
}
```

**Key Properties:**

- `display: inline` - Keeps quotes inline with text flow
- `vertical-align: top` - Positions quotes at the top of the text line instead of baseline alignment
- `margin: 0 12px` - Adds 12px horizontal spacing on both sides of each quote for better visual separation

#### Message Text Styling

```css
.hero__message {
  color: var(--Gray-Lighter, #d9dfe8);
  font-family: var(--font-family-sans, Inter);
  font-size: var(--font-size-7xl, 72px);
  font-style: normal;
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--font-size-7xl, 72px);
  letter-spacing: var(--font-letter-spacing-normal, 0px);
}
```

#### Focus Text Styling

The emphasized text within the quotes uses a gradient background:

```css
.hero__message strong {
  background: var(--Gradient-Primary, linear-gradient(90deg, #a478e8 0%, #516cf7 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Design Decisions

### Spacing

- **12px margin**: Provides adequate breathing room between quotes and text without creating excessive gaps
- **Top alignment**: Ensures quotes appear at the top of the large text, creating a more balanced visual hierarchy

### Visual Hierarchy

- Quotes serve as decorative framing elements
- Focus text uses gradient treatment to draw attention
- Regular text maintains standard gray color for readability

## Files Modified

- `src/app/pages/main/components/hero/hero.css` - Quote positioning and spacing styles
- `src/app/pages/main/components/hero/hero.html` - SVG quote implementation

## Future Considerations

- Quote spacing can be adjusted by modifying the `margin` value in `.hero__message svg`
- Vertical alignment can be changed from `top` to `middle` or `baseline` if different positioning is needed
- SVG quotes could be replaced with CSS pseudo-elements for maintainability if design allows
