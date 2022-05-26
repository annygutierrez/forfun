import React from 'react';

const IntroVideo = ({ vidRef, Play, action }) => {
    return (
        <video onEnded={action} className='IntroVideo' ref={vidRef} >
            <source src={require('../../../assets/ferris.mp4')} type="video/mp4"/>
            Your browser does not support the video functionality.
        </video>
    )
}

export default IntroVideo;