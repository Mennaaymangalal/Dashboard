import { extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#1976d2' },
        background: {
          default: '#fff',
          paper: '#f5f5f5',
        },
      },
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        background: {
          default: '#121212',
          paper: '#1d1d1d',
        },
      },
    },
  },
});

export default theme;

