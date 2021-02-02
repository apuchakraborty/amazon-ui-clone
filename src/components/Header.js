import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
            <img 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             className="header__logo" alt=""/>

            </div>

            <div className="header__search">
<input type="text" className="header__searchInput" />
<SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            <div className="header__options">
            <span className="header__optionLineone">
Hello Guest
</span>
<span className="header__optionLinetwo">
Sign In
</span>
            </div>

            <div className="header__options">
            <span className="header__optionLineone">
hello
</span>
<span className="header__optionLinetwo">
hello
</span>
            </div>

            <div className="header__options">
            <span className="header__optionLineone">
hello
</span>
<span className="header__optionLinetwo">
hello
</span>
            </div>

        <div className="header__optionBasket">
<ShoppingBasketIcon />
<span className="header__optionLinetwo header__basketCount">0</span>
        </div>
            </div>
            
        </div>
    )
}

export default Header
