import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
            <span style={{ color: 'white', fontSize: '12px', fontFamily: 'Antonio' }}>© 2022 Anny Gutierrez. All Rights Reserved.</span>
            {/* <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target='_blank' style={{ fontSize: '12px', fontFamily: 'Roboto', color: '#727AC2', margin: '0px' }}>Here my web for fun 😎.</a> */}
        </div>
    )
}

export default Footer;