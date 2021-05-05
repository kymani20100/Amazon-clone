import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from '../StateProvider';

const Header = () => {
  const [{basket}] = useStateValue();
  return (
    <nav className="header">
      <Link to="/"><img className="header__logo" src="/images/amazon.png" alt="amazon logo" /></Link>
      
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon id="header_icon_id" ClassName="header__searchIcon" />
      </div>

      <div className="headerNav">
          <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header__opnLineOne">Hi</span>
                <span className="header__opnLineTwo">Sign In</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__opnLineOne">Returns &</span>
                <span className="header__opnLineTwo">Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__opnLineOne">Your</span>
                <span className="header__opnLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__opnLineTwo header__basket__count">{basket?.length}</span>
            </div>
          </Link>
      </div>
      
    </nav>
  )
}

export default Header
