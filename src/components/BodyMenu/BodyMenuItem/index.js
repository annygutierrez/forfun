import React from 'react';

const BodyMenuItem = ({ title, action, id, activeItem }) => {
    return (
            <span onClick={() => action(id)} style={{ fontFamily: 'Antonio', fontSize: '25px', color: activeItem === id ? '#D061D2' : 'black', margin: '0 1em', cursor: 'pointer' }}>{title}</span>
    )
}

export default BodyMenuItem;