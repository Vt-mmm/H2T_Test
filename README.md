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

## Submission Links
- GitHub: `https://github.com/Vt-mmm/H2T_Test`
- Demo: deployed on Vercel

## Layout & Content Explanation
- The Top 5 page is implemented as a landing/toplist format, not a long blog article.
- Visual hierarchy is built with:
1. Hero headline + subtitle
2. VPN ranking cards with clear score and CTA
3. Quick comparison table
4. Methodology and buying notes
- Each VPN card keeps content short and scannable:
1. Rank + provider name
2. Score
3. 2-3 key highlights
4. Primary CTA (`View Details`) and secondary CTA (`View Offer`)
- The review page focuses on conversion + clarity:
1. Overview and score
2. Advantages vs limitations
3. Basic information table
4. CTA to external provider site
5. FAQ and final verdict
- The layout is responsive for desktop and mobile with adaptive grid/card behavior and section spacing.

## References
- Material UI documentation: `https://mui.com/`
- React Router documentation: `https://reactrouter.com/`
- Public VPN information pages were used only as general reference for mock content.

## Notes
- No affiliate links or real discount logic are implemented.
- Backend integration is intentionally out of scope for this test.
