import React, { Fragment } from 'react';
import { Answer } from '../model/Answer';

const ValidationAnswer: React.FC<{ answer: Answer }> = (props) => {
  const { answer } = props;

  const emptyAnswer = !answer.answer;

  const answerClasses = emptyAnswer
    ? 'validation__answer invalid'
    : 'validation__answer valid';

  return (
    <div>
      <p className="validation__index">Question {answer.index}: </p>
      <p className={answerClasses}>
        {emptyAnswer ? 'Unanswered' : 'Answered'}{' '}
      </p>
    </div>
  );
};

export default ValidationAnswer;
