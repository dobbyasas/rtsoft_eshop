import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CartContent.scss';

import { Trash } from 'react-bootstrap-icons';
import { ArrowForward } from '@material-ui/icons';

const CartContent = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        if (localCart && localCart.length > 0) {
            const parsedCart = JSON.parse(localCart);
            console.log('Loaded cart from localStorage:', parsedCart);
            setCart(parsedCart);
        }
    }, []);

    const increaseQuantity = (id) => {
        console.log('Increasing quantity for item with id:', id);
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        console.log('Increased quantity:', updatedCart);
        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        console.log('Decreasing quantity for item with id:', id);
        const updatedCart = cart
            .map((item) => {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
            .filter((item) => item.quantity > 0);

        console.log('Decreased quantity:', updatedCart);
        setCart(updatedCart);
    };

    const cutDescription = (description) => {
        return description.length > 100
            ? description.substring(0, 100) + '...'
            : description;
    };

    console.log('here is your cart sir: ', cart);

    const removeItem = (id) => {
        console.log('Removing item with id:', id);
        const updatedCart = cart.filter((item) => item.id !== id);

        console.log('Removed item:', updatedCart);
        setCart(updatedCart);
    };

    const proceedToOrder = () => {
        localStorage.setItem('Order', JSON.stringify(cart));
        navigate('/Order');
    };

    return (
        <div className="container mt-5">
            {cart.length === 0 ? (
                <p>Košík je prázdný</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2 cart-img-container">
                                <img
                                    src={item.imagePath}
                                    alt={item.name}
                                    className="img-fluid cart-item-image"
                                />
                            </div>

                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {cutDescription(item.description)}
                                    </p>
                                    <p className="card-text">${item.price}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="btn btn-danger me-2"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="btn btn-success ms-2"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="btn btn-danger"
                                        >
                                            <Trash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}

            {cart.length > 0 && (
                <button onClick={proceedToOrder} className="btn btn-custom">
                    Pokračovat
                    <ArrowForward />
                </button>
            )}
        </div>
    );
};

export default CartContent;
