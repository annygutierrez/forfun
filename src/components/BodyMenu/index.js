import React from 'react';
import BodyMenuItem from './BodyMenuItem';
import './styles.css';

const BodyMenu = ({ items, action, activeItem }) => {
    return (
        <div className="BodyMenuContainer">
          {
              items.map(item => <BodyMenuItem activeItem={activeItem} key={item.code} id={item.code} action={action} title={item.name} />)
          }
        </div>
    )
}

export default BodyMenu;