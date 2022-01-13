import React from 'react';
import { Question } from '../model/Question';

const ValidationAnswer: React.FC<{ question: Question }> = (props) => {
  const { question } = props;

  const emptyAnswer = !question.answer;

  const answerClasses = emptyAnswer
    ? 'validation__answer invalid'
    : 'validation__answer valid';

  return (
    <div>
      <p className="validation__index">Question {question.index + 1}: </p>
      <p className={answerClasses}>
        {emptyAnswer ? 'Unanswered' : 'Answered'}{' '}
      </p>
    </div>
  );
};

export default ValidationAnswer;
