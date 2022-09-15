import { FormattedMessage } from 'react-intl';
import { MUISwitchDiv } from '../MUISwitchDiv';
import { HeaderContainer } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            
            <MUISwitchDiv />
            <FormattedMessage
                id="header.welcome"
                defaultMessage="Welcome"
            />
        </HeaderContainer>
    );
}

export default Header;

