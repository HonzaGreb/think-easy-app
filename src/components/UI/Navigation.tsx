import React from 'react';
import NavButton from './NavButton';
import { Question } from '../../model/Question';

const Navigation: React.FC<{ currentIndex: number; questions: Question[] }> = (
  props
) => {
  const { currentIndex, questions } = props;

  return (
    <nav className="nav">
      {questions.map((q) => {
        return (
          <NavButton
            index={q.index}
            currentIndex={currentIndex}
            key={q.index}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
