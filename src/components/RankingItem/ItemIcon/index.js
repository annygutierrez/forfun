import React from 'react';

const ItemIcon = ({ image, alt }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: '216px', height: 'auto' }} src={image} alt={alt} />
        </div>
    )
}

export default ItemIcon;