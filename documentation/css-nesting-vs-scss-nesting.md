# CSS Nesting vs SCSS Nesting

## Overview

This document explains the key differences between CSS nesting and SCSS nesting, particularly important when working with BEM naming conventions.

## Key Differences

### SCSS Nesting (String Concatenation)

SCSS supports string concatenation with the `&` selector:

```scss
.skilled-with {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    color: var(--Gray-Lightest, #e2e6ee);
    font-size: var(--font-size-3xl, 30px);
    // ... other styles
  }
}
```

**Result:** `.skilled-with__title` (the `&` concatenates with `__title`)

### CSS Nesting (No String Concatenation)

CSS nesting treats `&` as a semantic parent selector, not a string:

```css
.skilled-with {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    /* This doesn't work! */
    /* & doesn't concatenate strings in CSS nesting */
  }
}
```

**Result:** Invalid selector - doesn't work as expected

## Correct CSS Nesting Approaches

### Option 1: Full Selector Names (Recommended for BEM)

```css
.skilled-with {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skilled-with__title {
  color: var(--Gray-Lightest, #e2e6ee);
  font-size: var(--font-size-3xl, 30px);
  /* ... other styles */
}
```

### Option 2: Descendant Selectors with Nesting

```css
.skilled-with {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .skilled-with__title {
    color: var(--Gray-Lightest, #e2e6ee);
    font-size: var(--font-size-3xl, 30px);
    /* ... other styles */
  }
}
```

### Option 3: Organizational Grouping with `&`

```css
.skilled-with {
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Child elements */
  & .skilled-with__list {
    /* list styles */
  }

  & .skilled-with__item {
    /* item styles */
  }
}
```

## Browser Support

**CSS Nesting** is supported in:

- Chrome 112+
- Firefox 117+
- Safari 16.5+

**SCSS** requires compilation and works in all browsers after preprocessing.

## When to Use Each

### Use CSS Nesting When:

- You have modern browser support requirements
- You want to avoid build tools/preprocessing
- You're working with simple nested structures

### Use SCSS When:

- You need BEM-style string concatenation (`&__element`)
- You're working with older browsers
- You want more advanced features (mixins, variables, functions)

## Migration Notes

If migrating from SCSS to CSS nesting:

1. **BEM selectors**: Change `&__element` to separate selectors or full nested selectors
2. **String concatenation**: Not supported in CSS nesting
3. **Pseudo-selectors**: Work the same way (`&:hover`, `&:focus`)

## Example: Before and After

### SCSS (Before)

```scss
.component {
  &__title {
    /* styles */
  }
  &__content {
    /* styles */
  }
  &--modifier {
    /* styles */
  }
}
```

### CSS Nesting (After)

```css
.component {
  /* Base styles */
}

.component__title {
  /* styles */
}

.component__content {
  /* styles */
}

.component--modifier {
  /* styles */
}
```

## References

- [CSS Nesting Module Specification](https://drafts.csswg.org/css-nesting/)
- [Can I Use - CSS Nesting](https://caniuse.com/?search=css%20nesting)
- [SCSS Documentation](https://sass-lang.com/documentation/style-rules/parent-selector)
