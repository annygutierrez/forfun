import React from 'react';
import './styles.css';

const SubMenuItem = ({ title, action, id, activeItem }) => {
    return (
            <span className='SubMenuItem' onClick={() => action(id)} style={{ color: activeItem === id ? '#7280FA' : '#686666' }}>{title}</span>
    )
}

export default SubMenuItem;