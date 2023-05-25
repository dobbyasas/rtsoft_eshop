import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { produkty } from '../Item/ItemData';
import './Shop.scss';

const Shop = ({ isSidebarShown }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        if (localCart) {
            setCart(JSON.parse(localCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart saved to localStorage:', cart);
    }, [cart]);

    const addToCart = (id, name, description, imagePath, price) => {
        const targetItem = cart.find((item) => item.id === id);
        let newCart = [];

        if (targetItem) {
            newCart = cart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            );
        } else {
            newCart = [
                ...cart,
                { id, name, description, imagePath, price, quantity: 1 },
            ];
        }

        console.log('Adding item to cart:', newCart);
        setCart(newCart);
    };

    return (
        <div className={`Shop ${isSidebarShown ? 'blur' : ''}`}>
            <div className="container">
                <div className="row">
                    {produkty.map((product) => (
                        <div
                            className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                            key={product.id}
                        >
                            <Item addToCart={addToCart} {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
