import { FormattedMessage } from "react-intl";
import { Container } from "./styles";

const Profile = () => {
    return (
        <Container>
            <FormattedMessage
                id="Profile.welcome"
                defaultMessage="Profile"
            />
        </Container>
    );
};
export default Profile;