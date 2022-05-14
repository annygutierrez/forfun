import React, { useState, useEffect } from 'react';
import BodyMenu from '../../components/BodyMenu';
import Warning from '../../components/Warning';
import HomePage from '../HomePage';
import Movies from '../Movies';
import Music from '../Music';
// import About from '../../pages/About';
// import Portfolio from '../../pages/Portfolio';
// import PersonalWork from '../../pages/PersonalWork';
// import Certifications from '../../pages/Certifications';

const Body = ({ menuItems, activePage, onNavigate }) => {

    return (
        <div>
            <BodyMenu activeItem={activePage} action={onNavigate} items={menuItems} />
            <Warning />
            {Boolean(activePage === 0) && <HomePage />}
            {Boolean(activePage === 1) && <Music />}
            {Boolean(activePage === 2) && <Movies />}
            {/* {Boolean(activePage === 2) && <PersonalWork />}
            {Boolean(activePage === 3) && <Certifications />} */}
        </div>
    )

}

export default Body;