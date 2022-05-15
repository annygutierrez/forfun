import React, { useRef } from 'react';
import Cancel from '../../assets/cancel.svg';
import './styles.css';

const Rickroll = ({ action }) => {
    const vidRef=useRef();

    const Play = () => {
        vidRef.current.play();
    }

    return (
        <div onClick={Play} style={{ position: 'absolute', display: 'flex', width: '100vw', height: '100vh', zIndex: 1000000, backgroundColor: '#4E4BE7', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                <div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100vw' }}>
                    <div onClick={action} style={{ width: '4em', padding: '1em', cursor: 'pointer' }}>
                      <img style={{ width:'2em', height: '2em' }} src={Cancel} alt="cancel" />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flex: 3, justifyContent: 'center' }}>
                <video className='RickVideo' ref={vidRef} loop>
                    <source src={require('../../assets/rick.mp4')} type="video/mp4"/>
                    Your browser does not support the video functionality.
                </video>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>

            </div>
        </div>
    )
}

export default Rickroll;