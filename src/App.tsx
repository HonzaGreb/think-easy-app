import Card from './components/UI/Card';
import Validation from './components/Validation';
import Result from './components/Result';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Questions from './components/Questions';

function App() {
  const state = useSelector((state: RootState) => state);

  const { position, questions } = state;
  const { questionsShown, validationShown, resultShown } = position;

  return (
    <Card>
      {validationShown && <Validation questions={questions} />}
      {questionsShown && <Questions state={state} />}
      {resultShown && <Result questions={questions} />}
    </Card>
  );
}

export default App;
