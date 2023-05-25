import { useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import Summary from '../../components/Summary/Summary';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage';

function Thanks() {
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const confirmOrder = () => {
        setOrderConfirmed(true);
    };

    return (
        <>
            <Header />
            <SideBar />
            {orderConfirmed ? (
                <ThankYouMessage />
            ) : (
                <Summary confirmOrder={confirmOrder} />
            )}
        </>
    );
}

export default Thanks;
