import React, { useState } from 'react';

const ResultPage = () => {
    // Quiz data (question, options, and correct answer)
    const quizData = [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            answer: 'Paris',
        },

    ];




    return (
        <div>

            <div className='details-container'>
                <h3>You need more practice !</h3>
                <h3>Your Score is 20% </h3>
                <div className='tapes'>
                    <p>Total number of questions</p>
                    <p>2</p>
                </div>
                <div className='tapes'>
                    <p>Number of attempted questions</p>
                    <p>2</p>
                </div>
                <div className='tapes'>
                    <p>Number of correct answers</p>
                    <p>2</p>
                </div>
                <div className='tapes'>
                    <p>Number of wrong answers</p>
                    <p>2</p>
                </div>
            </div>
            <div className='button_container'>
                <button >
                    Play again
                </button>
                <button >
                    Back to home
                </button>
            </div>
        </div>
    );
};

export default ResultPage;
