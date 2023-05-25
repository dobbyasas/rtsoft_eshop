import { useState } from 'react';

import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import PaymentDeliveryForm from '../../components/PaymentDeliveryForm/PaymentDeliveryForm';
import DeliveryOptions from '../../components/DeliveryOptions/DeliveryOptions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.scss';

function Order() {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true); // New state

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
            {isFormVisible ? (
                <PaymentDeliveryForm setIsFormVisible={setIsFormVisible} />
            ) : (
                <DeliveryOptions />
            )}
        </>
    );
}
export default Order;
