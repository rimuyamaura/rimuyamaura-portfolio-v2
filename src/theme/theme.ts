import { PaletteMode } from '@mui/material';

export const tokens = {
  grey: {
    100: '#f0f0f3',
    200: '#e1e2e7',
    300: '#d1d3da',
    400: '#c2c5ce',
    500: '#b3b6c2',
    600: '#8f929b',
    700: '#6b6d74',
    800: '#48494e',
    900: '#242427',
  },
  primary: {
    // black
    100: '#f5f5f5',
    200: '#ebebeb',
    300: '#dedede',
    400: '#d1d1d1',
    500: '#c4c4c4',
    600: '#a8a8a8',
    700: '#8c8c8c',
    800: '#707070',
    900: '#555555',
  },
  secondary: {
    // yellow green
    100: '#eaffc3',
    200: '#daff99',
    300: '#cbff6c',
    400: '#befc42',
    500: '#b7ff00',
    600: '#adeb00',
    700: '#9fd400',
    800: '#92bb00',
    900: '#7e9300',
  },
  tertiary: {
    // purple pink
    100: '#fbafe2',
    200: '#fb75ce',
    300: '#ff00b7',
    400: '#ff00a1',
    500: '#ff0085',
    600: '#f00082',
    700: '#d8007d',
    800: '#bf0079',
    900: '#920074',
  },
  background: {
    white: '#ffffff',
    black: '#000000',
    dark: '#1f2026',
    darkAlt: '#545454',
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            ...tokens.primary,
            main: tokens.primary[800],
            light: tokens.primary[600],
          },
          secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
          },
          tertiary: {
            ...tokens.tertiary,
          },
          grey: {
            ...tokens.grey,
            main: tokens.grey[500],
          },
          background: {
            default: tokens.background.white,
            alt: tokens.background.black,
          },
        }
      : {
          primary: {
            ...tokens.primary,
            main: tokens.primary[600],
            light: tokens.primary[900],
          },
          secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
          },
          tertiary: {
            ...tokens.tertiary,
          },
          grey: {
            ...tokens.grey,
            main: tokens.grey[500],
          },
          background: {
            default: tokens.background.black,
            alt: tokens.background.white,
          },
        }),
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily:
        '"Libre Barcode 39 Text", "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
});
