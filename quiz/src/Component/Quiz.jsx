import React, { useState } from 'react';

const Quiz = () => {
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
      <h1>Question </h1>
      <p>{quizData[0].question}</p>
      <div className='options-container'>
        {quizData[0].options.map((option, index) => (
          <div
            key={index}
          >
            {option}
          </div>
        ))}
      </div>
      <div className='button_container'>
        <button >
          Prev
        </button>
        <button >
          Next
        </button>
        <button >Quit</button>
      </div>
    </div>
  );
};

export default Quiz;
