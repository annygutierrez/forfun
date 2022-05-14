import React from 'react';
import MenuTab from './MenuTab';
import './styles.css';

const SubMenu = ({ items, action, activeItem }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '2.5em', alignItems: 'center' }}>
            <div className="SubMenuLines"></div>
            <MenuTab action={action} items={items} activeItem={activeItem} />
            <div className="SubMenuLines"></div>
        </div>
    )
}

export default SubMenu;