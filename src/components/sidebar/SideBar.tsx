import { FormattedMessage } from 'react-intl';
import { HeaderContainer } from './styles';

const SideBar = () => {
    return (
        <HeaderContainer>
            <FormattedMessage
                id="header.welcome"
                defaultMessage="Welcome"
            />
        </HeaderContainer>
    );
}

export default SideBar;

