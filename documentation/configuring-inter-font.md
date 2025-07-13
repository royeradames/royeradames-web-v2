# Configuring Inter Font Family

This document explains how the Inter font family was configured in the project to provide consistent typography across all components.

## Overview

The project was updated to use Inter as the primary font family instead of Roboto, while maintaining Roboto for Material UI components that specifically require it.

## Changes Made

### 1. Font Loading (src/index.html)

Added Inter font import from Google Fonts:

```html
<!-- Inter Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<!-- Roboto Font (for Material UI components) -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
```

**Font Weights Included:**

- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-bold)
- 700 (Bold)

### 2. Global Font Family (src/styles.css)

Updated the global font family to use Inter:

```css
/* Global styles */
html,
body {
  height: 100%;
  font-family: Inter, "Helvetica Neue", sans-serif;
}
```

### 3. CSS Custom Property (src/styles.css)

Added a CSS variable for consistent font usage across components:

```css
/* CSS Custom Properties for consistent theming */
:root {
  /* ... other variables ... */

  /* Typography */
  --font-family-sans: Inter, "Helvetica Neue", sans-serif;
}
```

## Usage in Components

### Using the CSS Variable

Components can now use the standardized font family through the CSS variable:

```css
.component-title {
  font-family: var(--font-family-sans, Inter);
}
```

The fallback `Inter` ensures the font works even if the CSS variable is not available.

### Direct Usage

You can also use Inter directly in CSS:

```css
.component-text {
  font-family: Inter, "Helvetica Neue", sans-serif;
}
```

## Font Fallback Strategy

The font stack provides graceful fallbacks:

1. **Inter** - Primary font (loaded from Google Fonts)
2. **Helvetica Neue** - System font fallback for Apple devices
3. **sans-serif** - Generic sans-serif fallback

## Best Practices

### 1. Use CSS Variables

Always prefer using the CSS variable for consistency:

```css
/* ✅ Good */
font-family: var(--font-family-sans, Inter);

/* ❌ Avoid */
font-family: Inter;
```

### 2. Font Weight Usage

Use semantic font weights that align with your design system:

```css
/* Light text */
font-weight: 300;

/* Regular text */
font-weight: 400;

/* Medium emphasis */
font-weight: 500;

/* Strong emphasis */
font-weight: 600;

/* Bold headings */
font-weight: 700;
```

### 3. Performance Considerations

- The font is loaded with `display=swap` for better performance
- Only necessary font weights are loaded to minimize bundle size
- Font loading is non-blocking to prevent layout shift

## Material UI Integration

Roboto is maintained for Material UI components that expect it. This ensures:

- Material UI components render correctly
- Custom components use Inter for brand consistency
- No conflicts between design systems

## Troubleshooting

### Font Not Loading

If Inter doesn't appear:

1. Check network connectivity (font loads from Google Fonts)
2. Verify the font link is in the `<head>` section
3. Check browser developer tools for font loading errors

### Inconsistent Typography

If some components don't use Inter:

1. Ensure CSS variable is properly defined in `:root`
2. Check component CSS uses `var(--font-family-sans, Inter)`
3. Verify no conflicting font-family declarations

## Browser Support

Inter font works in all modern browsers:

- Chrome 4+
- Firefox 3.5+
- Safari 3.1+
- Edge 12+
- Internet Explorer 9+

## Related Files

- `src/index.html` - Font loading configuration
- `src/styles.css` - Global styles and CSS variables
- `src/app/pages/main/components/resume/components/skilled-with/skilled-with.css` - Example component using Inter

## Resources

- [Inter Font on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Inter Font Official Website](https://rsms.me/inter/)
- [CSS Font Loading Best Practices](https://web.dev/font-loading-best-practices/)
