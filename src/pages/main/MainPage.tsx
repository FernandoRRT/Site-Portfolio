import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';
import Profile from '../profile/Profile';
import { GridAside, GridFooter, GridHeader, GridMain, GridStructure } from './structure';


const MainPage = () => {
    return (
        <GridStructure>
            <GridHeader>
                <Header />
            </GridHeader>
            <GridAside>
                <SideBar />
            </GridAside>
            <GridMain>
                <Profile />
            </GridMain>
            <GridFooter>
                <Footer />
            </GridFooter>
        </GridStructure>
    );
}

export default MainPage;
