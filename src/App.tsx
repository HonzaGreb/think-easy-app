import Card from './components/UI/Card';
import Validation from './components/Validation';
import Result from './components/Result';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Questions from './components/Questions';

function App() {
  const state = useSelector((state: RootState) => state);

  const { position, answers } = state;
  const { questionsShown, validationShown, resultShown } = position;

  return (
    <Card>
      {validationShown && <Validation answers={answers} />}
      {questionsShown && <Questions state={state} />}
      {resultShown && <Result answers={answers} />}
    </Card>
  );
}

export default App;
