
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      tablet: 768,
      md: 900,
      lg: 1280,
      xl: 1400,
    },
  }
});


declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    tablet: true;
    md: true;
    lg: true;
    xl: true;
  }
}







