import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Question } from '../model/Question';
import {
  showResults,
  showQuestions,
  changePosition,
} from '../features/positionSlice';
import ValidationAnswer from './ValidationAnswer';

const Validation: React.FC<{ questions: Question[] }> = (props) => {
  const [answersValid, setAnswersValid] = useState<boolean>(false);

  const checkValidity = (a: Question[]) => {
    let validity = true;

    a.forEach((item) => {
      if (!item.answer) {
        validity = false;
      }
    });

    setAnswersValid(validity);
  };

  useEffect(() => {
    checkValidity(props.questions);
  }, [props.questions]);

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
          {props.questions.map((question) => {
            return <ValidationAnswer question={question} key={question.index} />;
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
