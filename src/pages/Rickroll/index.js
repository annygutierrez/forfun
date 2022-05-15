import React, { useRef, useEffect, useState } from 'react';
import Cancel from '../../assets/cancel.svg';
import Footer from '../../components/Footer';
import './styles.css';

const Rickroll = ({ action }) => {
    const [showCancel, setShowCancel] = useState(false);
    const vidRef=useRef();

    useEffect(() => {
        const onScroll = () => Play();
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const Play = () => {
        vidRef.current.play();
        setShowCancel(true);
    }

    return <>
        <div onClick={Play} style={{ position: 'absolute', display: 'flex', width: '100vw', height: '100vh', zIndex: 1000000, backgroundColor: showCancel ? '#4E4BE7' : 'black', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                <div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100vw' }}>
                    {showCancel && <div onClick={action} style={{ width: '4em', padding: '1em', cursor: 'pointer' }}>
                      <img style={{ width:'2em', height: '2em' }} src={Cancel} alt="cancel" />
                    </div>}
                </div>
            </div>
            <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                {!showCancel && <p style={{ fontFamily: 'Anton', fontSize: '18', color: 'black', position: 'absolute', backgroundColor: '#FDC73C', padding: '1em 3em', borderRadius: '8px', cursor: 'pointer' }}>Enter here</p>}
                <video className='RickVideo' ref={vidRef} loop>
                    <source src={require('../../assets/rick.mp4')} type="video/mp4"/>
                    Your browser does not support the video functionality.
                </video>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>

            </div>
        <Footer />
        </div>
    </>;
}

export default Rickroll;