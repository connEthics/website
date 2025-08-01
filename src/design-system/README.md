# ConnEthics Design System

A comprehensive design system built for the ConnEthics website using React, TypeScript, and Tailwind CSS.

## Overview

This design system provides a consistent and scalable foundation for building user interfaces across the ConnEthics platform. It includes design tokens, component library, layout utilities, and guidelines for maintaining visual consistency.

## Design Tokens

### Colors
- **Primary**: ConnEthics blue palette (50-950 scale)
- **Neutral**: Comprehensive gray scale for text and backgrounds
- **Semantic**: Success, warning, error, and info colors
- **Surface**: Background colors for cards and containers
- **Border**: Light to strong border variations

### Typography
- **Font Family**: Inter (sans-serif), JetBrains Mono (monospace)
- **Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
- **Weights**: normal, medium, semibold, bold, extrabold
- **Line Heights**: none, tight, snug, normal, relaxed, loose

### Spacing
8px grid system with comprehensive scale from 0.5 (2px) to 96 (384px)

## Component Library

### UI Components

#### Typography
- **Heading**: Semantic headings with size and weight variants
- **Text**: Body text with size and variant options
- **Link**: Interactive links with underline variants
- **Code**: Inline and block code formatting

#### Button
- **Variants**: primary, secondary, outline, ghost, danger
- **Sizes**: sm, md, lg, xl
- **States**: loading, disabled, full-width
- **Icons**: left and right icon support

#### Card
- **Variants**: default, elevated, outlined
- **Components**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Padding**: none, sm, md, lg, xl

### Layout Components

#### Container
- **Sizes**: sm, md, lg, xl, 2xl, full
- **Centering**: automatic centering option
- **Responsive**: automatic padding adjustments

#### Grid
- **Columns**: 1-12 column layouts
- **Gaps**: none, xs, sm, md, lg, xl
- **Responsive**: breakpoint-specific column counts

#### Stack
- **Direction**: vertical, horizontal
- **Alignment**: start, center, end, stretch
- **Justification**: start, center, end, between, around, evenly
- **Gaps**: none, xs, sm, md, lg, xl

#### Section
- **Elements**: section, div, article, aside
- **Padding**: none, sm, md, lg, xl

#### Divider
- **Orientation**: horizontal, vertical
- **Variants**: solid, dashed, dotted
- **Sizes**: sm, md, lg

### Form Components

#### Input
- **Variants**: default, filled, flushed
- **Sizes**: sm, md, lg
- **States**: error, disabled
- **Icons**: left and right icon support
- **Helpers**: label, helper text, error messages

#### Textarea
- **Variants**: default, filled
- **Resize**: none, vertical, horizontal, both
- **All input features**: sizing, states, helpers

#### Select
- **Variants**: default, filled
- **Custom styling**: arrow icon, placeholder support
- **All input features**: sizing, states, helpers

#### Checkbox & Radio
- **States**: checked, unchecked, disabled, error
- **Helpers**: label, helper text support
- **Accessibility**: proper ARIA attributes

### Feedback Components

#### Alert
- **Variants**: info, success, warning, error
- **Features**: title, icon, closable
- **Icons**: default icons or custom

#### Badge
- **Variants**: default, primary, secondary, success, warning, error
- **Sizes**: sm, md, lg

#### Spinner
- **Sizes**: sm, md, lg, xl
- **Variants**: primary, neutral

#### Progress
- **Variants**: primary, success, warning, error
- **Sizes**: sm, md, lg
- **Features**: label, percentage display

### Navigation Components

#### Breadcrumbs
- **Features**: custom separators, current page indication
- **Accessibility**: proper ARIA navigation

#### Pagination
- **Features**: first/last buttons, prev/next, visible page control
- **Customization**: button styling, disabled states

#### Tabs
- **Variants**: default, pills
- **Features**: content panels, disabled tabs
- **Accessibility**: proper tab navigation

#### Steps
- **Orientations**: horizontal, vertical
- **States**: pending, current, completed
- **Features**: descriptions, visual indicators

## Usage Guidelines

### Consistent Spacing
Use the 8px grid system for all spacing decisions. Prefer design tokens over arbitrary values.

### Color Usage
- Use semantic colors for status indicators
- Maintain sufficient contrast ratios (4.5:1 minimum)
- Test in both light and dark modes

### Typography Hierarchy
- Use Heading components for semantic structure
- Maintain consistent line heights and spacing
- Consider text balance for headlines

### Component Composition
- Compose complex interfaces from simple components
- Use layout components for consistent spacing
- Leverage the design system rather than custom CSS

### Accessibility
- All components include proper ARIA attributes
- Focus management is handled automatically
- Color is never the only indicator of state
- Components work with screen readers

### Dark Mode
- All components support dark mode automatically
- Use semantic color tokens for theme-aware styling
- Test all interfaces in both light and dark themes

## File Structure

```
src/design-system/
├── tokens.ts                 # Design tokens and theme configuration
├── components/
│   ├── index.ts             # Main component exports
│   ├── ui/                  # Core UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Typography.tsx
│   ├── layout/              # Layout components
│   │   └── Layout.tsx
│   ├── forms/               # Form components
│   │   └── Forms.tsx
│   ├── feedback/            # Feedback components
│   │   └── Feedback.tsx
│   └── navigation/          # Navigation components
│       └── Navigation.tsx
└── styles/
    └── components.css       # Additional component styles
```

## Best Practices

1. **Import from index**: Always import components from the main index file
2. **Use TypeScript**: Leverage type safety for better developer experience
3. **Compose components**: Build complex UIs by composing simple components
4. **Follow naming**: Use descriptive and consistent naming conventions
5. **Test responsiveness**: Ensure components work across all screen sizes
6. **Validate accessibility**: Test with screen readers and keyboard navigation

## Contributing

When adding new components:
1. Follow existing patterns and conventions
2. Include proper TypeScript types
3. Add dark mode support
4. Implement accessibility features
5. Update this documentation
6. Test across different screen sizes and themes