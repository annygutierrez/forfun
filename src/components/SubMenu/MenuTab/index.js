import React from 'react';
import SubMenuItem from '../SubMenuItem';
import './styles.css';

const MenuTab = ({ items = [], activeItem, action }) => {
    return (
        <div className="MenuTabContainer">
            {
              items.map(item => <SubMenuItem action={action} activeItem={activeItem} key={item.code} id={item.code} action={action} title={item.name} />)
            }
        </div>
    )
}

export default MenuTab;