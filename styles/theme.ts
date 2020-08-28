import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#8257E5',
    },
    gray: {
      ...theme.colors.gray,
      300: '#E1E1E6',
      600: '#29292E',
      700: '#202025',
      800: '#121214',
    }
  }
};

export default customTheme;