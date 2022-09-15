
import { createTheme } from '@mui/material';

export interface CustomTheme {
// Custom theme vars goes here
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1b1d2d',
    },
    secondary: {
      main: '#bbbbbb',
    },
    text: {
      primary: '#0d1014',
      secondary: '#23262b',
    },
    background: {
      paper: '#FAFAFA',
    },
  }
});
