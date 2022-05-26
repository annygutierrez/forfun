import React from 'react';

const ItemIcon = ({ image, alt, freeHeight = false, rankingNum }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {Boolean(typeof rankingNum === 'number' ? rankingNum + 1 : 0) && <p style={{ fontSize: '80px', fontFamily: 'Roboto', color: '#b4b4b4', fontWeight: '500', position: 'absolute', display: 'flex', marginTop: '1.5em', marginLeft: '1.7em' }}>{rankingNum + 1}</p>}
            <img style={{ width: '216px', height: freeHeight ? 'auto' : '216px' }} src={image} alt={alt} />
        </div>
    )
}

export default ItemIcon;