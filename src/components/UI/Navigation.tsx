import React from 'react';
import NavButton from './NavButton';
import { Question } from '../../model/Question';

const Navigation: React.FC<{ currentIndex: number; questions: Question[] }> = (
  props
) => {
  const { currentIndex, questions } = props;

  return (
    <nav className="nav">
      {questions.map((q, i) => {
        return (
          <NavButton
            index={i}
            currentIndex={currentIndex}
            key={i}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
