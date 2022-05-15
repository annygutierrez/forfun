import React from 'react';

const ItemIcon = ({ image, alt, freeHeight = false }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: '216px', height: freeHeight ? 'auto' : '216px' }} src={image} alt={alt} />
        </div>
    )
}

export default ItemIcon;