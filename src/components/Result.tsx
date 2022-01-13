import { useDispatch } from 'react-redux';
import { resetAnswers } from '../features/answersSlice';
import { showQuestions, changePosition } from '../features/positionSlice';
import { Answer } from '../model/Answer';

const Result: React.FC<{ answers: Answer[] }> = (props) => {
  const dispatch = useDispatch();

  // ↓ Extrakce odpovědí a konverze na string

  const extractAndStringify = (a: Answer[]) => {
    const extractedArray = a.map((item) => item.answer);
    const string = extractedArray.join(' ');
    return string;
  };

  const extractedResult = extractAndStringify(props.answers);

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
