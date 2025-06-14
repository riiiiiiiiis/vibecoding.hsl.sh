# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.3 landing page for "Вайб-кодинг с AI" (Vibe-coding with AI), a Russian-language course teaching web development using AI tools. The site uses React 19, Tailwind CSS v4, and is built with the App Router pattern.

## Common Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Note: No testing framework is currently configured.

## Architecture

### Technology Stack
- **Framework**: Next.js 15.3.3 with App Router
- **UI**: React 19.0.0
- **Styling**: Tailwind CSS v4 (using @tailwindcss/postcss)
- **Language**: JavaScript (not TypeScript)
- **Analytics**: Google Analytics GA4

### Key Architectural Decisions

1. **Tailwind CSS v4 Configuration**: Custom theme variables are defined in `app/globals.css` using CSS custom properties:
   ```css
   @theme {
     --color-apple-black: #1d1d1f;
     --color-apple-gray: #86868b;
     --color-apple-light-gray: #f5f5f7;
     --color-apple-blue: #0071e3;
     --font-family-apple: -apple-system, BlinkMacSystemFont, ...
   }
   ```

2. **Component Structure**: All components are in `/app/components/`. The `Program.jsx` and `FAQ.jsx` components are client components that use the shared `AccordionItem.jsx` for interactivity.

3. **SEO & Metadata**: Comprehensive metadata including structured data (JSON-LD) for course information is configured in `app/layout.js`.

### Project-Specific Context

- The site is a single-page application with smooth scroll navigation between sections
- All text content is in Russian
- The design follows Apple's design language (fonts, colors, spacing)
- Three pricing tiers: Вуайерист (2,990₽), Вайбкодер (11,991₽), Визионер (23,992₽)
- Course starts May 30th, runs for 3 weeks with 3 practical lectures

### Component Hierarchy

```
page.js
├── Navbar (fixed navigation)
├── main
│   ├── Hero (gradient background)
│   ├── About (course timing info)
│   ├── Program (3 modules with accordions)
│   ├── Pricing (3 tiers)
│   ├── Audience (target groups)
│   ├── FAQ (common questions)
│   └── CTA (Telegram bot signup)
└── Footer (links and navigation)
```