import "./App.css";
// imports to set the main language
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/global";
import LanguageContainer from "./services/LanguageContainer";
//imports for router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.light};
  color: ${(props) => props.theme.palette.text.primary};
  width: 400px;
  &:hover {
    background-color: dodgerblue;
  }
`;

function App() {
  return (
    <LanguageContainer>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
        </ThemeProvider>
    </LanguageContainer>
  );
}

export default App;
