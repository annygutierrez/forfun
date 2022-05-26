import React, { useRef, useEffect, useState } from 'react';
import Questionary from './Questionary';
import RickrollView from './RickrollView';
import SecondStageView from './SecondStageView';
import './styles.css';

const Rickroll = ({ action }) => {
    const [showCancel, setShowCancel] = useState(false);
    const [showMainView, setShowMainView] = useState(true);
    const vidRef = useRef();
    const vidRefIntro = useRef();

    // useEffect(() => {
    //     const onScroll = () => Play();
    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);

    const Play = () => {
        vidRef.current.play();
        setShowCancel(true);
    }

    const PlayIntro = () => {
        vidRefIntro.current.play();
    }

    const goToQuestinary = () => {
        setShowMainView(false);
    }

    return <>
        {showMainView && <RickrollView showCancel={showCancel} vidRef={vidRef} action={goToQuestinary} Play={Play} />}
        {!showMainView && <SecondStageView vidRef={vidRefIntro} action={action} Play={PlayIntro} />}
    </>;
}

export default Rickroll;