import './App.css'
import { MUISwitchDiv } from './components/MUISwitchDiv';
import LanguageContainer from "./services/LanguageContainer";
// imports to set the main language
import { FormattedMessage } from "react-intl";
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/global';
import { styled } from '@mui/material/styles';

import Button from "@mui/material/Button";
import MainPage from './pages/main/MainPage';
const StyledButton = styled(Button)`
  background-color: ${props => props.theme.palette.primary.light};
  color: ${props => props.theme.palette.text.primary};
  width: 400px;
  &:hover {
    background-color: dodgerblue;
  }
`


function App() {
  return (
    <LanguageContainer>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </LanguageContainer>
  )
}

export default App
