import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Answer } from '../model/Answer';
import {
  showResults,
  showQuestions,
  changePosition,
} from '../features/positionSlice';
import ValidationAnswer from './ValidationAnswer';

const Validation: React.FC<{ answers: Answer[] }> = (props) => {
  const [answersValid, setAnswersValid] = useState<boolean>(false);

  const checkValidity = (a: Answer[]) => {
    let validity = true;

    a.forEach((item) => {
      if (!item.answer) {
        validity = false;
      }
    });

    setAnswersValid(validity);
  };

  useEffect(() => {
    checkValidity(props.answers);
  }, [props.answers]);

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
      <div className="validation__text">
        <h3 className="validation__heading">Do you want to continue?</h3>
        <div className="validation__answers">
          {props.answers.map((answer) => {
            return <ValidationAnswer answer={answer} key={answer.index} />;
          })}
        </div>
      </div>
      {answersValid && (
        <button className="btn--primary" onClick={continueBtnHandler}>
          Continue
        </button>
      )}
      {!answersValid && (
        <button className="btn--secondary" onClick={retryBtnHandler}>
          Retry
        </button>
      )}
    </div>
  );
};

export default Validation;
