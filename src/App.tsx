import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useLocales } from './hooks';
import { AppRouter } from './routes';
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
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
