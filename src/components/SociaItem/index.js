import React from 'react';

const SocialItem = ({ icon, alt, link }) => {
    return (
        <a href={link} target='_blank' style={{ display: 'flex', margin: '0 1.8em', alignItems: 'center', cursor: 'pointer' }}>
           <img style={{ width: '25px', height: '25px' }} src={icon} alt={alt} />
        </a>
    )
}

export default SocialItem;