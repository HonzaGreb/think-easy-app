import React from 'react';
import { Question } from '../model/Question';

const ValidationAnswer: React.FC<{ question: Question; index: number }> = (
  props
) => {
  const { question, index } = props;

  const emptyAnswer = !question.answer;

  const answerClasses = emptyAnswer
    ? 'validation__answer invalid'
    : 'validation__answer valid';

  // {index + 1} jakožto náprava zero-based indexování

  return (
    <div>
      <p className="validation__index">Question {index + 1}: </p>
      <p className={answerClasses}>
        {emptyAnswer ? 'Unanswered' : 'Answered'}{' '}
      </p>
    </div>
  );
};

export default ValidationAnswer;
