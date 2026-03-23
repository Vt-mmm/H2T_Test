import { createTheme } from '@mui/material/styles';

export const vaultColors = {
  surface: '#f6fafe',
  surfaceLow: '#f0f4f8',
  surfaceHigh: '#e4e9ed',
  surfaceLowest: '#ffffff',
  primary: '#001944',
  onPrimaryContainer: '#6b95f3',
  onSurface: '#171c1f',
  onSurfaceVariant: '#454652',
  accent: '#fb6b00',
};

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: vaultColors.primary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#49607c',
    },
    background: {
      default: vaultColors.surface,
      paper: vaultColors.surfaceLowest,
    },
    text: {
      primary: vaultColors.onSurface,
      secondary: vaultColors.onSurfaceVariant,
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    h1: {
      fontFamily: 'Manrope, Inter, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: 'Manrope, Inter, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: 'Manrope, Inter, sans-serif',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: 'Manrope, Inter, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: vaultColors.surface,
          color: vaultColors.onSurface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});
