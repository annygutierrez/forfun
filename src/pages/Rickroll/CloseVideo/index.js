import React from 'react';
import Cancel from '../../../assets/cancel.svg';

const CloseVideo = ({ showCancel, action }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100vw' }}>
            {showCancel && <div onClick={action} style={{ width: '4em', padding: '1em', cursor: 'pointer' }}>
                <img style={{ width:'2em', height: '2em' }} src={Cancel} alt="cancel" />
            </div>}
        </div>
    )
}

export default CloseVideo;