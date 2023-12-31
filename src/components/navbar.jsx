import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart, List, X} from 'phosphor-react';
import {ShopContext} from '../context/shop-context';
import './navbar.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const { getTotalProductCart } = useContext(ShopContext);
    const totalProductCart = getTotalProductCart();


  return (
    <div className='navbar'>

        <div className='logo'>
            <Link to="/"> Shop </Link>
        </div>

        <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen 
        ? <X color='#fff' size={32}  />
        : <List color='#fff' size={32}  />
        }

      </button>
        
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/cart"> <ShoppingCart size={32} /> ({totalProductCart})</Link></li>
            {/* <li><Link to="/">Search</Link></li>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/">Search</Link></li> */}
        </ul>

    </div>
  )
}

export default Navbar