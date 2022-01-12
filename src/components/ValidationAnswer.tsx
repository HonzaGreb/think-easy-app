import React, { Fragment } from 'react';
import { Answer } from '../model/Answer';

const ValidationAnswer: React.FC<{ answer: Answer }> = (props) => {
  const { answer } = props;

  const emptyAnswer = !answer.answer;

  const answerClasses = emptyAnswer
    ? 'validation__answer invalid'
    : 'validation__answer valid';

  return (
    <Fragment>
      <span className="validation__number">Answer {answer.index}: </span>
      <p className={answerClasses}>
        {emptyAnswer ? 'Invalid answer' : 'Valid answer'}{' '}
      </p>
    </Fragment>
  );
};

export default ValidationAnswer;
