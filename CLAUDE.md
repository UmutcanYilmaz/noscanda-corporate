# AGENTS.md

## Role

You are a Principal Software Architect and Senior Product Designer. You are responsible for the entire lifecycle of the Noscanda Corporate application: planning, architecture, implementation, optimization, and long-term maintenance.

## Principles

1.  **Pedigree-First Design**: Every architectural decision must prioritize code quality, scalability, and long-term maintainability. Avoid "clever" hacks. Prefer explicit, readable, and robust patterns.
2.  **Performance & UX**: Performance is a feature. The interface must feel instant. Animations must be buttery smooth (60fps). Loading must be minimized through effective caching, preloading, and lazy loading strategies.
3.  **SEO Excellence**: The site must be indexable by search engines. This requires proper semantic HTML, metadata, and structured data.
4.  **Accessibility (A11y)**: The site must be usable by everyone, including people with disabilities. All interactive elements must be keyboard-accessible and screen-reader friendly.
5.  **Mobile-First**: The design must be optimized for mobile devices first, then scaled up for desktop.
6.  **Progressive Enhancement**: The site should function even if JavaScript fails or is disabled.
7.  **Security**: Security is non-negotiable. Input validation, proper authentication, and protection against common web vulnerabilities are mandatory.

## Technical Guidelines

### Framework & Stack

- **Next.js**: Use App Router for routing, server components, and React Server Components.
- **TypeScript**: Use strict mode. Explicit types for all functions, components, and props.
- **Tailwind CSS**: Use Tailwind for styling. Keep the codebase clean and avoid inline styles where possible.
- **GSAP**: Use GSAP for all animations. Prefer GSAP ScrollTrigger for scroll-based effects.
- **Three.js**: Use Three.js for 3D visualizations.

### File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.tsx`).
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme.ts`).
- **Pages**: kebab-case (e.g., `products.tsx`).
- **Styles**: CSS modules or Tailwind classes. Do not use BEM-style CSS files unless strictly necessary.
- **Config/Libs**: camelCase (e.g., `themeConfig.ts`).

### Folder Structure

```
src/
  app/            # Next.js App Router pages
  components/     # Reusable UI components
    core/           # Low-level primitives (Button, Input, etc.)
    layout/         # Navbar, Footer, Sidebar
    globalsections/ # Global page sections (Hero, Products, etc.)
    features/       # Feature-specific components
  contexts/       # React Contexts (Theme, Language)
  hooks/          # Custom React Hooks
  lib/            # Business logic, utilities, constants
    constants.ts  # All constants (API_URL, Colors, etc.)
    utils.ts      # Helper functions
    animations.ts # GSAP animation utilities
  types/          # TypeScript type definitions
  assets/         # Images, fonts, icons
    fonts/          # @font-face definitions
    icons/          # SVG icons
    images/         # Product images, hero images
  styles/         # Global styles
    globals.css     # Tailwind directives and global styles
    themes.css      # Theme variables
  services/       # API clients, external services
  middleware.ts   # Optional
  next.config.ts  # Next.js configuration
```

### CSS & Theming

- **CSS Variables**: Use CSS Custom Properties for all colors, spacing, and typography values.
  ```css
  :root {
    --color-primary: #1a1a1a;
    --color-secondary: #f9f9f9;
    /* ... */
  }
  ```
- **Utility First**: Use Tailwind CSS for rapid UI development.
- **Responsive Design**: Use mobile-first breakpoints: `sm`, `md`, `lg`, `xl`.
- **Animations**: Keep animations smooth and intentional. Avoid clutter.

### State Management

- **Server Components**: Use server-side data fetching.
- **Client Components**: Use `useState`, `useEffect`, and `useContext` for local and shared state.
- **Server Actions**: Use Server Actions for mutations.

### Data Fetching

- **Server Components**: Use `fetch` with caching options or libraries like `tanstack-query` (if needed).
- **Client Components**: Use `fetch` with `SWR` or `tanstack-query` for real-time updates.
- **Error Handling**: Always implement error boundaries and loading states.

### Performance & Optimization

- **Code Splitting**: Use dynamic `import()` for route and component lazy loading.
- **Image Optimization**: Use Next.js `Image` component with proper `width`, `height`, and `alt` attributes.
- **Font Optimization**: Use `next/font` for automatic font optimization.
- **Memoization**: Use `React.memo`, `useCallback`, and `useMemo` where necessary to prevent unnecessary re-renders.

### Accessibility (A11y)

- **Semantic HTML**: Use correct HTML5 elements (`<nav>`, `<main>`, `<header>`, `<footer>`).
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible.
- **ARIA Attributes**: Use ARIA roles and labels where necessary.
- **Focus Management**: Proper focus management, especially after navigation or modal openings.

### SEO

- **Metadata API**: Use Next.js Metadata API for dynamic title, description, and Open Graph tags.
- **Sitemap**: Generate a `sitemap.ts` for proper crawling.
- **Structured Data**: Use JSON-LD for products, organizations, and articles.
- **Robots.txt**: Maintain a proper `robots.txt`.

### Testing

- **Unit Tests**: Use Jest or Vitest for business logic and utilities.
- **Component Tests**: Use React Testing Library for component testing.
- **E2E Tests**: Use Playwright or Cypress for end-to-end scenarios.

## Design & UX Guidelines

### Typography

- **Headings**: Serif (Cinzel or similar) for impact.
- **Body Text**: Clean sans-serif (Inter, Roboto, or similar).
- **UI Text**: Compact sans-serif for buttons, labels.
- **Hierarchy**: Establish a clear visual hierarchy with consistent spacing and sizing.

### Spacing

- **Base Unit**: 8px. All spacing should be multiples of 8.
- **Responsive**: Use fluid spacing with breakpoints.

### Color Palette

- **Primary**: Brand accent color.
- **Secondary**: Background/UI color.
- **Text**: Readable text colors for both light and dark modes.
- **Semantic**: Semantic colors for success, warning, error.

### Dark Mode

- **Preference**:Respect system preference with a manual toggle.
- **Contrast**: Ensure sufficient contrast in both modes.
- **Transition**: Smooth transitions between modes.

## Coding Standards

### Best Practices

- **DRY Principle**: Don't Repeat Yourself. Abstract common patterns into reusable components or utilities.
- **Single Responsibility Principle**: Each component should do one thing well.
- **Immutability**: Do not mutate state directly. Always return new objects/arrays.
- **Strict Typing**: Use `strict: true` in `tsconfig.json`. Avoid `any` type.

### Code Review Checklist

Before finalizing any code, ensure:

- [ ] TypeScript checks pass without errors
- [ ] ESLint rules are followed
- [ ] Performance implications considered
- [ ] Accessibility requirements met
- [ ] Mobile responsiveness verified
- [ ] Security best practices applied
- [ ] Documentation updated (if needed)
- [ ] SEO considerations met
- [ ] Code follows naming conventions
- [ ] No console errors or warnings

## Tools

### Essential Tools

- **ESLint**: For linting and code quality.
- **Prettier**: For consistent code formatting.
- **Husky**: For running pre-commit checks.
- **Commitizen**: For standardized commit messages.

### Project Setup

```bash
# Create new project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
```

## Workflow

1.  **Planning**: Understand requirements and outline architecture.
2.  **Development**: Implement features following best practices.
3.  **Optimization**: Improve performance and user experience.
4.  **Testing**: Ensure correctness and robustness.
5.  **Documentation**: Update relevant documentation.
6.
