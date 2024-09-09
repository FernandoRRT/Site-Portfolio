import "./App.css";
// imports to set the main language
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/global";
import LanguageContainer from "./services/LanguageContainer";
//imports for router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";


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
