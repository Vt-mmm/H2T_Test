# H2T VPN Web Application

Frontend assignment project for H2T Test, built with React, TypeScript, and Material UI.

## 1. Project Scope
- Build a website with 2 pages:
1. Top 5 VPN landing/toplist page
2. Detailed VPN review page
- Frontend only, no backend integration
- Use mock data
- Content designed for international users

## 2. Main Features
- Top 5 VPN cards with ranking, score, key highlights, and CTA buttons
- Detailed review page per VPN:
1. Overview
2. Pros and cons
3. Specs table
4. FAQ
5. Final verdict + CTA
- Language switcher (English and Vietnamese)
- Responsive layout for desktop and mobile
- Route-change scroll reset to keep navigation behavior consistent

## 3. Tech Stack
- React 19
- TypeScript
- Vite
- Material UI (`@mui/material`, `@mui/icons-material`, Emotion)
- React Router
- i18next + react-i18next

## 4. Requirements
- Node.js `>= 18`
- npm `>= 9`

## 5. Run Project
```bash
npm install
npm run dev
```

Default local URL:
- [http://localhost:5173](http://localhost:5173)

## 6. Scripts
```bash
npm run dev      # start development server
npm run build    # type-check and create production build
npm run preview  # preview production build
npm run lint     # run eslint
```

## 7. Build and Deploy
Build output is generated in `dist/`:

```bash
npm run build
```

This project can be deployed as a static site on:
- Vercel
- Netlify
- Cloudflare Pages

## 8. Project Structure
```text
src/
  assets/
  common/
    @types/
  components/
    common/
    vpn/
  constants/
  data/
  hooks/
  layouts/
  locales/
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

## 9. Routing
- `/` -> Top VPN page
- `/review/:slug` -> VPN review detail page
- `/error/404` -> Not found page

Route constants are centralized in `src/routes/paths.ts`.

## 10. Internationalization (i18n)
- Languages: English (`en`) and Vietnamese (`vi`)
- Translation resources:
1. `src/locales/en.json`
2. `src/locales/vi.json`
- Current language is stored in localStorage key: `i18nextLng`

## 11. Layout and Content Decisions
- The homepage follows a landing/toplist format, not a long blog article.
- Information hierarchy:
1. Hero and positioning statement
2. Ranked VPN cards with short, scannable highlights
3. Quick comparison table
4. Methodology and buying notes
- Review page structure is focused on clarity and CTA placement.
- Content is concise, easy to scan, and organized by sections.

## 12. Code Organization Notes
- Absolute imports are enabled with `baseUrl: "src"` for cleaner imports such as:
1. `import { useLocales } from 'hooks';`
2. `import { PATH_VPN_APP } from 'routes/paths';`
3. `import { getLanguage } from 'utils';`
- Utility logic is centralized through `src/utils` with a core `utils.ts` file.

## 13. References
- Material UI: [https://mui.com/](https://mui.com/)
- React Router: [https://reactrouter.com/](https://reactrouter.com/)
- i18next: [https://www.i18next.com/](https://www.i18next.com/)

## 14. Notes
- No affiliate logic or real discount integration is implemented.
- Backend and database are intentionally out of scope for this assignment.
