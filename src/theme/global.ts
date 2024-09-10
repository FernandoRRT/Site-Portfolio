import { createTheme } from "@mui/material";

export interface CustomTheme {
  // Custom theme vars goes here
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1b1d2d",
    },
    secondary: {
      main: "#bbbbbb",
    },
    text: {
      primary: "#0d1014",
      secondary: "#23262b",
    },
    background: {
      default: "#293039",
      paper: "#34a468",
    },
    card: {
      main: "#fffef4",
      contrastText: "#293039",
      dark: "#590a4e",
      light: "#fffef4",
      
    }
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
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    card: Palette['primary'];
  }
  interface PaletteOptions {
    card: PaletteOptions['primary'];
  }
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    tablet: true;
    md: true;
    lg: true;
    xl: true;
  }
}
