import React from 'react';

function Options({ options, onAnswer }) {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
