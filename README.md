# Swim Guide App

Swim Guide is a simple static educational swimming app built with Angular.

It helps beginners learn about swimming basics, swimming styles, training plans, glossary terms, health benefits, water safety, and famous swimmers.

## Features

- Home page with navigation cards
- Separate pages for 7 swimming topics
- Static data only
- No backend, login, admin panel, or payments
- Responsive card-based UI
- Aqua / blue visual style
- Language switcher for English, Ukrainian, Spanish, and French
- Angular prerender-friendly routing

## Pages

- `/` - Home
- `/swim-basics` - Swim Basics
- `/swimming-styles` - Swimming Styles
- `/training-plans` - Training Plans
- `/glossary` - Glossary
- `/health-benefits` - Health Benefits
- `/swim-safety` - Swim Safety
- `/famous-swimmers` - Famous Swimmers

## Tech Stack

- Angular 21
- TypeScript
- Angular SSR / prerender
- Tailwind CSS
- SCSS
- Static data files

## Project Structure

```txt
src/
  app/
    layouts/
    pages/
      home/
      topic/
    pipes/
  data/
    swim-basics.ts
    swimming-styles.ts
    training-plans.ts
    glossary.ts
    health-benefits.ts
    swim-safety.ts
    famous-swimmers.ts
  i18n/
    en.json
    ua.json
    es.json
    fr.json
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```txt
http://localhost:4200
```

## Build

Create a production build:

```bash
npm run build
```

The static prerendered output is generated in:

```txt
dist/app/browser
```

## Notes

The app is intentionally static and content-first. Future ideas can include a pool finder, glossary search, favorite topics, a workout timer, or a training journal.
