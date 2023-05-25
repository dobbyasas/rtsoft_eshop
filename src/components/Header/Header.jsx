import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Header.scss';

const Header = ({ isSidebarShown, setIsSidebarShown }) => (
    <header className="Header">
        <IconButton onClick={() => setIsSidebarShown(!isSidebarShown)}>
            {isSidebarShown ? <ArrowBackIcon /> : <MenuIcon />}
        </IconButton>
        <Link to="/">
            <img src="/img/rtsoft.png" alt="Logo" className="logo" />
        </Link>
        <div className="search-container">
            <SearchIcon style={{ color: 'inherit' }} />
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
        </div>
        <div className="icon-container">
            <Link to="/Login">
                <AccountCircleIcon
                    className="account-icon"
                    style={{ color: 'inherit' }}
                    onClick={() => console.log('Account icon clicked')}
                />
                Přihlásit se
            </Link>
            <Link to="/Cart">
                <ShoppingCartIcon
                    className="cart-icon"
                    style={{ color: 'inherit' }}
                    onClick={() => console.log('Cart icon clicked')}
                />
                Košík
            </Link>
            <Link to="/Favourites">
                <FavoriteIcon />
                Obíbené
            </Link>
        </div>
    </header>
);

export default Header;
