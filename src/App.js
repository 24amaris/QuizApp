import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './styles.css';
import "@fontsource/bungee-spice"; // Importă fontul Bungee Spice

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStart = () => {
    setStartQuiz(true);
  };

  return (
    <div className="app">
      {!startQuiz ? (
        <div className="start-page">
          <h1 className="quiz-title bungee-spice">QUIZ</h1>
          <p className="quiz-description bungee-spice">
            Test your knowledge with our fun quiz!
          </p>
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default App;
