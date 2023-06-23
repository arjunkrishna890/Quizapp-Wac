import React, { useState } from 'react';
import './Card.scss';
import { QuestionState } from '../Context/Context';
import useCardHandler from '../customHooks/useCardHandler';

function CatCard() {
  const { QuestionArray,state } = QuestionState();
  const [states, handleCheck, next] = useCardHandler(state);
  const currentItem = QuestionArray[states.index];

  return (
    <div className="projectCard">
      {states.index <= QuestionArray.length - 1 ? (
        <div>
          <div>
            <p>
              {states.index + 1}.{currentItem.question} ?
            </p>
          </div>
          <ul>
            {currentItem.options.map((option, key) => (
              <div key={key}>
                <button
                  onClick={() =>handleCheck(option,currentItem.answer,currentItem.points,key)}
                  className={states.selectedOption === key ? states.color : ''}
                  disabled={states.disable}>
                  {option}
                </button>
              </div>
            ))}
          </ul>
          <span>
            <button className="Next" onClick={() => next(currentItem.points)}>
              Next
            </button>
          </span>
          <p style={{ fontSize: '1rem' }}>Current Score:({states.score}/{states.total})</p>
          <b>
            <p style={{ color: 'blue' }}>Question Point:{currentItem.points}</p>
          </b>
        </div>
      ) : (
        <>
          <div style={{}}>
            <h1 style={{ fontSize: '2.3rem' }}>
              {states.score > states.total / 2 ? 'Congratulations!' : 'Sorry, better luck next time'}
            </h1>
            <p style={{ fontSize: '1.3rem' }}>
              You have scored {states.score} out of {states.total}!
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CatCard;
