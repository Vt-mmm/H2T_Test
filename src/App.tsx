import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LayoutGroup, MotionConfig } from 'framer-motion';
import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { useLocales } from './hooks';
import { AppRouter, ScrollToTop } from './routes';
import { appTheme } from './theme';

function App() {
  const { currentLang } = useLocales();

  const localizedTheme = useMemo(
    () => createTheme(appTheme, currentLang.systemValue),
    [currentLang.systemValue]
  );

  return (
    <ThemeProvider theme={localizedTheme}>
      <CssBaseline />
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <LayoutGroup id="vpn-pages">
            <ScrollToTop />
            <AppRouter />
          </LayoutGroup>
          <Analytics />
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
