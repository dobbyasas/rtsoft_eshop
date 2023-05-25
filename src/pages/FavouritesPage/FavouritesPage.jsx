import { useState } from 'react';

import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import Favourites from '../../components/Favourites/Favourites';

function FavouritesPage() {
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
            <Favourites />
        </>
    );
}

export default FavouritesPage;
