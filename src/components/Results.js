import React from 'react';

function Results({ score, total }) {
  return (
    <div>
      <h2>Quiz Results</h2>
      <p>
        You scored {score} out of {total}.
      </p>
    </div>
  );
}

export default Results;
