import 'styled-components';
import { Theme } from '@mui/material/styles';

interface CustomTheme {
    //add here any custom theme variables
}
declare module '@mui/material/styles' {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}