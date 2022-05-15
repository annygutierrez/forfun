import React from 'react';
import './styles.css';

const MobileMenuItem = ({ activeItem, id, action, title }) => {
    return (
        <div onClick={() => action(id)} style={{ backgroundColor: 'white', width: '100vw', display: 'flex', flex: 1, padding: '0.6em 3em'}}>
             <p className='MobileMenuItemText' style={{ margin: '0px', fontFamily: 'Antonio', color:  activeItem === id ? '#07AC7B' : 'black' }}>{title}</p>
        </div>
    )
}

export default MobileMenuItem;