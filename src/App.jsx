import './App.scss';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';
import Thanks from './pages/Thanks/Thanks';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';

import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Thanks" element={<Thanks />} />
            <Route path="/Item/:id" element={<ItemDetail />} />
            <Route path="/Favourites" element={<FavouritesPage />} />
        </Routes>
    );
};

export default App;
