import React from 'react';
import LinkIcon from '../../../assets/link.svg';

const CertTitle = ({ title, certLink }) => {

    if (certLink) return (
        <a href={certLink} target='_blank' style={{ display: 'flex' }}>
            <span style={{ fontFamily: 'Anton', fontSize: '25px', color: 'black' }}>{title}</span>
            <img style={{ display: 'flex', width: '26px', height: 'auto', marginLeft: '0.4em' }} src={LinkIcon} alt='link' />
        </a>
    )

    return <span style={{ fontFamily: 'Cuprum', fontSize: '25px', fontWeight: 900 }}>{title}</span>
}

export default CertTitle;