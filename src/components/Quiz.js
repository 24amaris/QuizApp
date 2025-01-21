import React, { useState } from 'react';
import '../styles.css';
import "@fontsource/bungee-spice"; // Importă fontul
import { useEffect } from 'react';

const Quiz = () => {
  // Întrebări pentru quiz
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/quiz')
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(data => {
      setQuestions(data);
      })
      .catch(error => console.error('Error fetching questions:', error));
    }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0); // Întrebarea curentă
  const [score, setScore] = useState(0); // Scorul utilizatorului
  const [showResults, setShowResults] = useState(false); // Afișarea rezultatelor

  // Funcție pentru gestionarea opțiunilor selectate
  const handleOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1); // Incrementarea scorului dacă răspunsul este corect
    }

    // Trecerea la următoarea întrebare sau afișarea rezultatelor
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  // Funcție pentru resetarea quiz-ului
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        // Afișează rezultatele
        <div className="results">
          <h2 className="results-title bungee-spice">Quiz Completed!</h2>
          <p className="results-score bungee-spice">
            You scored {score} out of {questions.length}.
          </p>
          <button className="restart-button" onClick={resetQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        // Afișează întrebările și opțiunile
        <div>
          <h2 className="question-number bungee-spice">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p className="question-text bungee-spice">
            {questions[currentQuestion]?.question}
          </p>
          <div className="options">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
