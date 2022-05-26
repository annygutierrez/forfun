import React, { useState } from 'react';
import ArrowRight from '../../../assets/arrow-right.svg';
import Footer from '../../../components/Footer';
import IntroVideo from '../IntroVideo';
import Questionary from '../Questionary';
import './styles.css';

const questionList = [
    {
        question: 'The day of my birthday',
        answer: '15',
        type: 'number',
        width: '8em'
    },
    {
        question: 'My favorite comic',
        answer: 'the umbrella academy',
        type: 'text'
    }
];

const SecondStageView = ({ action, vidRef, Play }) => {
    

    return (
        <div style={{ position: 'absolute', display: 'flex', width: '100vw', height: '100vh', zIndex: 1000000, backgroundColor: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                <div></div>
            </div>
            {/* <IntroVideo vidRef={vidRef} Play={Play} action={action} /> */}
            <Questionary vidRef={vidRef} action={action} Play={Play} />
            <div style={{ display: 'flex', flex: 1 }}></div>
            <Footer />
        </div>
    )
}

export default SecondStageView;