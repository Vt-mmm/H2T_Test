# H2T Test - VPN Web Application

Frontend assignment project built with **React + TypeScript + Material UI**.

## Overview
- 2 main pages:
1. Top 5 VPN landing page
2. VPN detail review page
- Target audience: international users (English content)
- Data source: mock/static only (no backend)

## Tech Stack
- React 19
- TypeScript
- Vite
- Material UI (`@mui/material`, `@mui/icons-material`, Emotion)
- React Router

## Requirements
- Node.js `>= 18`
- npm `>= 9`

## Getting Started
```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Scripts
```bash
npm run dev      # start local development server
npm run build    # type-check + production build
npm run preview  # preview production build
npm run lint     # run eslint
```

## Project Structure
```text
src/
  assets/
  common/
    @types/
  components/
    common/
    vpn/
  data/
  layouts/
  pages/
  routes/
    config/
  sections/
    toplist/
    review/
  theme/
  types/
  utils/
```

## Routing
- `/` -> Top VPN page
- `/review/:slug` -> VPN detail page
- `/error/404` -> Not found page

Route constants are centralized in `src/routes/paths.ts`.

## Deployment
This is a static frontend application. You can deploy the `dist/` output to:
- Vercel
- Netlify
- Cloudflare Pages

Build first:
```bash
npm run build
```

## Notes
- No affiliate links or real discount logic are implemented.
- Backend integration is intentionally out of scope for this test.
