import React from 'react';
import Options from './Options';

function Question({ question, onAnswer }) {
  return (
    <div>
      <h2>{question.questionText}</h2>
      <Options options={question.options} onAnswer={onAnswer} />
    </div>
  );
}

export default Question;
