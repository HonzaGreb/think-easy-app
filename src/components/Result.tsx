import { useDispatch } from 'react-redux';
import { resetAnswers } from '../features/questionsSlice';
import { showQuestions, changePosition } from '../features/positionSlice';
import { Question } from '../model/Question';

const Result: React.FC<{ questions: Question[] }> = (props) => {
  const dispatch = useDispatch();

  // ↓ Extrakce odpovědí a konverze na string

  const extractAndStringify = (a: Question[]) => {
    const extractedArray = a.map((item) => item.answer);
    const string = extractedArray.join(' ');
    return string;
  };

  const extractedResult = extractAndStringify(props.questions);

  const resetHandler = () => {
    dispatch(resetAnswers());
    dispatch(showQuestions());
    dispatch(changePosition(0));
  };

  return (
    <div className='result'>
      <h2 className='result__heading'>Result:</h2>
      <p className='result__text'>{extractedResult}</p>
      <button className="btn--primary" onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Result;
