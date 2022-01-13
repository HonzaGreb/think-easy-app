import Form from './Form';
import Navigation from './UI/Navigation';
import { RootState } from '../app/store';

const Questions: React.FC<{ state: RootState }> = (props) => {
  const { position, questions } = props.state;
  const { currentIndex } = position;
  const total = questions.length - 1;

  return (
    <div className="questions">
      <Form question={questions[currentIndex]} total={total} />
      <Navigation currentIndex={currentIndex} questions={questions} />
    </div>
  );
};

export default Questions;
