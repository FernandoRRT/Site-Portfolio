import { FormattedMessage } from "react-intl";
import { Container } from "./styles";

const Footer = () => {
    return (
        <Container>
            <FormattedMessage
                id="header.welcome"
                defaultMessage="Welcome"
            />
        </Container>
    );
};
export default Footer;