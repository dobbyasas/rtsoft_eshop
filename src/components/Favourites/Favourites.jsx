import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { produkty } from '../Item/ItemData';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const loadFavourites = () => {
            const favs = Object.keys(localStorage)
                .filter(
                    (key) =>
                        !isNaN(key) &&
                        JSON.parse(localStorage.getItem(key)) === true
                )
                .map((key) => parseInt(key, 10));

            setFavourites(
                favs.map((id) => produkty.find((item) => item.id === id))
            );
        };

        loadFavourites();
    }, []);

    return (
        <div className="favourites">
            <br />
            <h2> VAŠE OBLÍBENÉ </h2>
            {favourites.length > 0 ? (
                favourites.map((item) => <Item {...item} key={item.id} />)
            ) : (
                <p>Žádné oblíbené</p>
            )}
        </div>
    );
};

export default Favourites;
