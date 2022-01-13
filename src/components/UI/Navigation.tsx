import React from 'react';
import NavButton from './NavButton';
import { Answer } from '../../model/Answer';

const Navigation: React.FC<{ currentIndex: number; answers: Answer[] }> = (
  props
) => {
  const { currentIndex, answers } = props;

  return (
    <nav className="nav">
      {answers.map((answer) => {
        return (
          <NavButton
            index={answer.index}
            currentIndex={currentIndex}
            key={answer.index}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
