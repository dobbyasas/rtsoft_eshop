import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Item.scss';

const Item = ({ id, name, description, imagePath, price, addToCart }) => {
    const navigate = useNavigate();
    const [favorite, setFavorite] = useState(
        JSON.parse(localStorage.getItem(id)) || false
    );

    const goToItemPage = () => {
        navigate(`/Item/${id}`);
    };

    const toggleFavorite = () => {
        setFavorite(!favorite);
    };

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(favorite));
    }, [favorite]);

    return (
        <div className="card mb-4">
            <div className="card-img-container">
                <img
                    src={imagePath}
                    className="card-img-top item-image"
                    alt={name}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title" onClick={goToItemPage}>
                    {name}
                </h5>
                <p className="card-text">{description}</p>
                <h6 className="card-price">{price}</h6>
                <button
                    onClick={() =>
                        addToCart(id, name, description, imagePath, price)
                    }
                    className="btn btn-custom"
                >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button
                    onClick={toggleFavorite}
                    className="btn favorite-button"
                >
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
            </div>
        </div>
    );
};

export default Item;
