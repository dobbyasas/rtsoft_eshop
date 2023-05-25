import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { produkty } from '../../components/Item/ItemData';

import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';

import './ItemDetail.scss';

const ItemDetail = () => {
    const { id } = useParams();
    const item = produkty.find((product) => product.id === parseInt(id, 10));
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

            <div className="product-page container">
                {item ? (
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                className="product-image"
                                src={item.imagePath}
                                alt={item.name}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="product-name">{item.name}</h2>
                            <p className="product-description">
                                {item.description}
                            </p>
                            <p className="product-price">${item.price}</p>
                            <button className="btn btn-success add-to-cart-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger" role="alert">
                        Zboží nenalezeno
                    </div>
                )}
            </div>
        </>
    );
};

export default ItemDetail;
