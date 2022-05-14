import React from 'react';
import MobileMenuItem from './MobileMenuItem';
import './styles.css';

const MobileMenu = ({ items = [], activeItem, action }) => {
    return (
        <div className="MobileMenuContainer">
            {
              items.map(item => <MobileMenuItem activeItem={activeItem} key={item.code} id={item.code} action={action} title={item.name} />)
          }
        </div>
    )
}

export default MobileMenu;