import React from 'react';
import { useDispatch } from 'react-redux';
import NavButton from './NavButton';
import { Answer } from '../../model/Answer';
import { incrementPosition, decrementPosition } from '../../features/positionSlice';

const Navigation: React.FC<{ currentIndex: number; answers: Answer[] }> = (
  props
) => {
  const { currentIndex, answers } = props;
  const dispatch = useDispatch();

  const startPosition = currentIndex === 0;
  const endPosition = currentIndex === answers.length - 1;

  const incrementHandler = () => {
    if (endPosition) {
      return;
    }
    dispatch(incrementPosition());
  };

  const decrementHandler = () => {
    if (startPosition) {
      return;
    }
    dispatch(decrementPosition());
  };

  return (
    <nav className="nav">
      <button
        className="nav__button"
        disabled={startPosition}
        onClick={decrementHandler}
      >
        &larr;
      </button>
      {answers.map((answer) => {
        return (
          <NavButton
            index={answer.index}
            currentIndex={currentIndex}
            key={answer.index}
          />
        );
      })}
      <button
        className="nav__button"
        disabled={endPosition}
        onClick={incrementHandler}
      >
        &rarr;
      </button>
    </nav>
  );
};

export default Navigation;
