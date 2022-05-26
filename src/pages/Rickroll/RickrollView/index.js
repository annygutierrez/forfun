import React from 'react';
import Footer from '../../../components/Footer';
import CloseVideo from '../CloseVideo';
import RickrollVideo from '../RickrollVideo';

const RickrollView = ({ showCancel, vidRef, action, Play }) => {
    return (
        <div onClick={Play} style={{ position: 'absolute', display: 'flex', width: '100vw', height: '100vh', zIndex: 1000000, backgroundColor: showCancel ? '#4E4BE7' : 'black', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                <div></div>
                <CloseVideo action={action} showCancel={showCancel} />
            </div>
            <RickrollVideo showCancel={showCancel} vidRef={vidRef} />
            <div style={{ display: 'flex', flex: 1 }}></div>
            <Footer />
        </div>
    )
}

export default RickrollView;