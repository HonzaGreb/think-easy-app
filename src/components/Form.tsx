import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { writeAnswer } from '../features/questionsSlice';
import { incrementPosition, showValidation } from '../features/positionSlice';
import { Question } from '../model/Question';

const Form: React.FC<{
  question: Question;
  total: number;
}> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { question, index, answer } = props.question;
  const { total } = props;

  const dispatch = useDispatch();

  const lastPosition = index === total;
  console.log(index, total, question)

  // ↓ Imperativní navigace a zápis odpovědí

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // ↓ Využije předešlou odpověď, není-li vložena nová
    const answerObject = { index, question, answer: inputValue || answer };

    dispatch(writeAnswer(answerObject));
    setInputValue('');
    console.log('writing ', answerObject, '...');

    if (lastPosition) {
      dispatch(showValidation());
    } else {
      dispatch(incrementPosition());
    }
  };

  // ↓ Two way binding inputu

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  // ↓ Předešlá odpověď použita jako placeholder

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <label className="form__label" htmlFor={`id_${index}`}>
        {question}
      </label>
      <input
        className="form__input"
        type="text"
        id={`id_${index}`}
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder={answer}
      />
      <button className="btn--primary" type="submit">
        {lastPosition ? 'Check' : 'Next'}
      </button>
    </form>
  );
};

export default Form;
