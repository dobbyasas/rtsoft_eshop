import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, ListGroup, ButtonGroup } from 'react-bootstrap';

import './Summary.scss';

const Summary = ({ confirmOrder }) => {
    const [order, setOrder] = useState([]);
    const [paymentDelivery, setPaymentDelivery] = useState({});
    const [deliveryInfo, setDeliveryInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const localOrder = localStorage.getItem('Order');
        const localPaymentDelivery = localStorage.getItem('orderInfo');
        const localDeliveryInfo = localStorage.getItem('deliveryInfo');

        if (localOrder) {
            setOrder(JSON.parse(localOrder));
        }

        if (localPaymentDelivery) {
            setPaymentDelivery(JSON.parse(localPaymentDelivery));
        }

        if (localDeliveryInfo) {
            setDeliveryInfo(JSON.parse(localDeliveryInfo));
        }
    }, []);

    const getTotalPrice = () => {
        return order.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="container" style={{ width: '50%' }}>
            <h2 className="my-3">Shrnutí objednávky</h2>
            {order.map((item, index) => (
                <Card key={index} className="mb-3">
                    <Card.Img
                        variant="top"
                        src={item.imagePath}
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto',
                        }}
                    />
                    <Card.Body>
                        <Card.Title>
                            {item.name} - Počet: {item.quantity}
                        </Card.Title>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Cena za kus: ${item.price}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}

            <h3 className="my-3">Celková cena: ${getTotalPrice()}</h3>

            <h3 className="my-3">Zvolená metoda placení:</h3>
            <p>{paymentDelivery.paymentMethod}</p>

            <h3 className="my-3">Zvolená metoda dopravy:</h3>
            <p>{paymentDelivery.deliveryMethod}</p>

            <h3 className="my-3">Idk:</h3>
            <p>Name: {deliveryInfo.name}</p>
            <p>Email: {deliveryInfo.email}</p>

            <ButtonGroup className="mt-3">
                <Button onClick={goToHome} className="btn btn-custom">
                    Zpět do obchodu
                </Button>
                <Button
                    onClick={() => {
                        confirmOrder();
                    }}
                    className="btn btn-custom"
                >
                    Potvrdit a objednat
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Summary;
