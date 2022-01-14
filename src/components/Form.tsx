import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { writeAnswer } from '../features/questionsSlice';
import { incrementPosition, showValidation } from '../features/positionSlice';
import { Question } from '../model/Question';

const Form: React.FC<{
  question: Question;
  index: number;
  total: number;
}> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { question, answer } = props.question;
  const { total, index } = props;

  const dispatch = useDispatch();

  const lastPosition = index === total;

  // ↓ Imperativní navigace a zápis odpovědí

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // ↓ Využije předešlou odpověď, není-li vložena nová
    const answerObject = { index, answer: inputValue || answer };
    console.log(answerObject)

    if (inputValue) {
      dispatch(writeAnswer(answerObject));
      setInputValue('');
    }

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
      <label className="heading--2 u-mb-l" htmlFor={`id_${index}`}>
        {question}
      </label>
      <input
        className="form__input u-mb-m"
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
