import React, { useState } from 'react';
import HeaderTitle from './HeaderTitle';
import MobileMenu from '../MobileMenu';
import Socials from '../Socials';
import './styles.css';

const Header = ({ menuItems, activePage, onNavigate }) => {
    const [ showMenu, setShowMenu ] = useState(false);

    const PressMenu = () => {
        setShowMenu(!showMenu);
    }

    const goToPage = (id) => {
        onNavigate(id);
        PressMenu();
    }

    return (
        <div className="HeaderContainer">
            <HeaderTitle onPressMenu={PressMenu} />
            {showMenu && <MobileMenu items={menuItems} activeItem={activePage} action={goToPage} />}
            <Socials />
        </div>
    )
}

export default Header;