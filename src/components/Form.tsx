import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { writeAnswer } from '../features/answersSlice';
import { incrementPosition, showValidation } from '../features/positionSlice';
import { Answer } from '../model/Answer';

const Form: React.FC<{
  answer: Answer;
  total: number;
}> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { question, index, answer } = props.answer;
  const { total } = props;

  const dispatch = useDispatch();

  const lastPosition = index === total;

  // ↓ Imperativní navigace a zápis odpovědí

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // ↓ Využije předešlou odpověď, není-li vložena nová
    const answerObject = { index, question, answer: inputValue || answer };

    dispatch(writeAnswer(answerObject));
    setInputValue('');
    console.log('writing ', answerObject, '...');

    if (!lastPosition) {
      dispatch(incrementPosition());
    } else {
      dispatch(showValidation());
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
      <button className="form__button" type="submit">
        {lastPosition ? 'Done' : 'Next'}
      </button>
    </form>
  );
};

export default Form;
