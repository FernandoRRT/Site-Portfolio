import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';
import { GridAside, GridFooter, GridHeader, GridMain, GridStructure } from './structure';
import { Outlet } from 'react-router-dom'; 

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
                <Outlet />
            </GridMain>
            <GridFooter>
                <Footer />
            </GridFooter>
        </GridStructure>
    );
}

export default MainPage;
