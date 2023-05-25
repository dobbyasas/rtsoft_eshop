import { useState } from 'react';

import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import CartContent from '../../components/CartContent/CartContent';

import './Cart.scss';

function Cart() {
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
            <CartContent
                isSidebarShown={isSidebarShown}
                setIsSidebarShown={setIsSidebarShown}
            />
        </>
    );
}

export default Cart;
