import React from 'react';
import { useDispatch } from 'react-redux';
import { Answer } from '../model/Answer';
import {
  showResults,
  showQuestions,
  changePosition,
} from '../features/positionSlice';
import ValidationAnswer from './ValidationAnswer';

const Validation: React.FC<{ answers: Answer[] }> = (props) => {
  const dispatch = useDispatch();

  const continueBtnHandler = () => {
    dispatch(showResults());
  };

  const retryBtnHandler = () => {
    dispatch(showQuestions());
    dispatch(changePosition(0));
  };

  return (
    <div className="validation">
      <p className="validation__text">Are you sure you want to continue?</p>
      {props.answers.map((answer) => {
        return <ValidationAnswer answer={answer} key={answer.index} />;
      })}
      <button className="validation__button_1" onClick={continueBtnHandler}>
        Continue
      </button>
      <button className="validation__button_2" onClick={retryBtnHandler}>
        Retry
      </button>
    </div>
  );
};

export default Validation;
