# Placed WebApp

A feature-first, scalable web application built with [Next.js 13+](https://nextjs.org/), TypeScript, and Supabase. Designed for rapid development, robust authentication, and internationalization, following strict modular and atomic design principles.

---

## Architecture

The application follows a modular, feature-first architecture:

- **App Router**: File-based routing using Next.js App Router.
- **i18n**: Dynamic `[lang]` routes and JSON dictionaries for multilingual support.
- **Authentication**: Managed via Supabase and React Context.
- **State Management**: React Query for API data/state, Context API for global state.
- **Styling**: Tailwind CSS and [@shadcn/ui](https://ui.shadcn.com/) for atomic, accessible UI components.
- **API Integration**: All API calls use a centralized Axios instance.

---

## Features

- **Internationalization**: Dynamic language routing and translation dictionaries.
- **Authentication**: Supabase-powered, with session state via React Context.
- **Atomic UI**: All UI components are modular, reusable, and styled with Tailwind and shadcn/ui.
- **Feature-First Structure**: Domain-based organization for easy scaling.
- **Type Safety**: End-to-end TypeScript.
- **Semantic Search (Planned)**: Integration-ready for semantic job search using vector similarity and Supabase.

---

## Prerequisites

- Node.js 18+
- npm 9+
- Supabase project (for authentication and future vector search)
- Python 3.8+ (for backend/ML/ETL integration, if needed)

---

## Installation

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   python3 -m pip install --upgrade pip
   npm install
   ```
3. **Configure environment variables**
   - Copy `.env.example` to `.env.local` and fill in your configuration values.

---

## Usage

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting and Formatting

```bash
npm run lint
npm run format
```

---

## Data Flow

- User requests are routed via the App Router.
- Language is determined by the `[lang]` dynamic segment.
- Authentication state is managed by Supabase and React Context.
- API data is fetched and cached using React Query and Axios.
- UI components receive data and translations via props and context.

---

## Directory Structure

```
placedwebapp/
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   │   ├── demo/
│   │   │   ├── login/
│   │   │   ├── dictionaries/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── components/
│   │   └── ui/
│   ├── context/
│   ├── features/
│   │   ├── demo/
│   │   └── auth/
│   ├── hooks/
│   ├── lib/
│   ├── locales/
│   │   ├── en/
│   │   └── de/
│   ├── styles/
├── package.json
├── next.config.ts
├── middleware.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── next-env.d.ts
├── .gitignore
├── README.md
```

---

## Key Files and Directories

- `src/app/`: Next.js App Router, layouts, and language routes.
- `src/components/ui/`: Atomic UI primitives (Nav, Button, Card, etc.).
- `src/features/`: Domain-specific features (demo, auth).
- `src/context/`: React Context providers (Auth, React Query).
- `src/hooks/`: Custom hooks for business logic.
- `src/lib/`: API clients and utilities (Axios, Supabase).
- `src/locales/`: Translation dictionaries for i18n.
- `src/styles/`: Tailwind CSS configuration.

---

## Notes

- All user-facing strings are translatable via the i18n system.
- All API calls are made through the centralized Axios instance.
- Authentication is handled exclusively by Supabase.
- The project is ready for integration with backend ETL/ML pipelines and semantic search.
