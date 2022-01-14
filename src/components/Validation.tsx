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
  const { questions } = props;
  const dispatch = useDispatch();

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
    checkValidity(questions);
  }, [questions]);

  const continueBtnHandler = () => {
    dispatch(showResults());
  };

  const retryBtnHandler = () => {
    dispatch(showQuestions());
    dispatch(changePosition(0));
  };

  // ↓ Buttons

  const btnContinue = (
    <button className="btn--primary" onClick={continueBtnHandler}>
      Continue
    </button>
  );

  const btnRetry = (
    <button className="btn--secondary" onClick={retryBtnHandler}>
      Retry
    </button>
  );

  return (
    <div className="validation">
      <div className="validation__text">
        <h3 className="heading--2 u-mb-m">Do you want to continue?</h3>
        <div className="validation__answers">
          {questions.map((q, i) => {
            return <ValidationAnswer question={q} index={i} key={i} />;
          })}
        </div>
      </div>
      {answersValid && btnContinue}
      {!answersValid && btnRetry}
    </div>
  );
};

export default Validation;
