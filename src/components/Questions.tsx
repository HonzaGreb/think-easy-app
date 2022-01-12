import Form from './Form';
import Navigation from './UI/Navigation';
import { RootState } from '../app/store';

const Questions: React.FC<{ state: RootState }> = (props) => {
  const { position, answers } = props.state;
  const { currentIndex } = position;
  const total = answers.length - 1;

  return (
    <div className="questions">
      <Form answer={answers[currentIndex]} total={total} />
      <Navigation currentIndex={currentIndex} answers={answers} />
    </div>
  );
};

export default Questions;
