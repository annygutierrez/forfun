import React, { useState } from 'react';
import ArrowRight from '../../../assets/arrow-right.svg';
import Footer from '../../../components/Footer';
import IntroVideo from '../IntroVideo';
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

const Questionary = ({ action, vidRef, Play }) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const questionAction = () => {
        if (!inputValue) return setError('Incorrect answer');
        const parsedValue = inputValue.trim().toLowerCase().replace(/ +(?= )/g,'');
        if (parsedValue === questionList[questionNumber].answer) {
            if (questionNumber === (questionList.length - 1)) {
                Play();
                return setShowVideo(true);
            }
            setQuestionNumber(questionNumber + 1);
            setInputValue('');
            return setError('');
        }
        return setError('Incorrect answer');
    }

    return (
        <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            {!showVideo && <div style={{ position: 'absolute', backgroundColor: 'black', width: '100%', display: 'flex', flex: 1, height: '80%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', zIndex: '1000000' }}>
                <p style={{ color: 'white', fontFamily: 'Antonio', fontWeight: '400', fontSize: '30px' }}>{questionList[questionNumber].question}</p>
                <input className='InputQuestionary' value={inputValue} onChange={(e) => {
                    setError('');
                    setInputValue(e.target.value);
                }} style={{ maxWidth: questionList[questionNumber].width }} type={questionList[questionNumber].type} />
                {Boolean(error) && <p style={{ color: '#FF496A', fontFamily: 'Roboto', fontSize: '12px', marginTop: '1em' }}>{error}</p>}
                <div onClick={questionAction} style={{ marginTop: '7em', padding: '1em', cursor: 'pointer' }}>
                    <img src={ArrowRight} alt={'arrow-right'} />
                </div>
            </div>}
            <IntroVideo vidRef={vidRef} Play={Play} action={action} />
        </div>
    )
}

export default Questionary;

{/* <div style={{ display: 'flex', flex: 1 }}>
                <div></div>
                <CloseVideo action={action} showCancel={showCancel} />
            </div>
            <RickrollVideo showCancel={showCancel} vidRef={vidRef} />
            <div style={{ display: 'flex', flex: 1 }}></div>
            <Footer /> */}