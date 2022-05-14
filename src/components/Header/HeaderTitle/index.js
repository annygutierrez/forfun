import React from 'react';
import Menu from '../../../assets/menu.svg';
import './styles.css';

const HeaderTitle = ({ onPressMenu }) => {
    return (
        <div className="HeaderTitleContainer">
            <div className="HeaderTitleBlank"></div>
             <p className="HeaderTitle">
            forfun
            </p>
            <div onClick={onPressMenu} className="MenuButton">
                <img className="MenuButtonIcon" src={Menu} alt="menu" />
            </div>
        </div>
    )
}

export default HeaderTitle;