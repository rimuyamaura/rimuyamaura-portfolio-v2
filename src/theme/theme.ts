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
    // light green
    100: '#d0fcf4',
    200: '#a0f9e9',
    300: '#71f5de',
    400: '#41f2d3',
    500: '#12efc8',
    600: '#0ebfa0',
    700: '#0b8f78',
    800: '#076050',
    900: '#043028',
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

export const lightThemeSettings = {
  palette: {
    mode: 'light' as const,
    primary: {
      ...tokens.primary,
      main: tokens.primary[700],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
      main: tokens.tertiary[400],
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.white,
      alt: tokens.background.black,
    },
  },
};

export const darkThemeSettings = {
  palette: {
    mode: 'dark' as const,
    primary: {
      ...tokens.primary,
      main: tokens.primary[700],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
      main: tokens.tertiary[400],
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.black,
      alt: tokens.background.white,
    },
  },
};
