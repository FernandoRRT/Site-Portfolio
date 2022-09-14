import './App.css'
import { MUISwitchDiv } from './components/MUISwitchDiv';
import LanguageContainer from "./services/LanguageContainer";
// imports to set the main language
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <LanguageContainer>
      <MUISwitchDiv />
      <FormattedMessage
        id="header.welcome"
        defaultMessage="Welcome"
      />
    </LanguageContainer>
  )
}

export default App
