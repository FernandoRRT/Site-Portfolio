import { FormattedMessage } from 'react-intl';
import { HeaderContainer } from './styles';

const SideBar = () => {
    return (
        <HeaderContainer>
            <FormattedMessage
                id="header.welcome"
                defaultMessage="Welcome"
            /> <p> Teste</p>
        </HeaderContainer>
    );
}

export default SideBar;

