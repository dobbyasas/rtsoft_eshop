import { useState } from 'react';

import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import Shop from '../../components/Shop/Shop';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.scss';

function Home() {
    const [isSidebarShown, setIsSidebarShown] = useState(false);

    return (
        <>
            <Header
                isSidebarShown={isSidebarShown}
                setIsSidebarShown={setIsSidebarShown}
            />
            <SideBar
                isSidebarShown={isSidebarShown}
                setIsSidebarShown={setIsSidebarShown}
            />
            <Shop isSidebarShown={isSidebarShown} />
        </>
    );
}

export default Home;
