import React from 'react';

const RickrollVideo = ({ showCancel, vidRef }) => {
    return (
        <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            {!showCancel && <p style={{ fontFamily: 'Anton', fontSize: '18', color: 'black', position: 'absolute', backgroundColor: '#FDC73C', padding: '1em 3em', borderRadius: '8px', cursor: 'pointer' }}>Enter here</p>}
            <video className='RickVideo' ref={vidRef} loop>
                <source src={require('../../../assets/rick.mp4')} type="video/mp4"/>
                Your browser does not support the video functionality.
            </video>
        </div>
    )
}

export default RickrollVideo;