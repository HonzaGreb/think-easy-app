import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Card from './components/UI/Card';
import Questions from './components/Questions';
import Validation from './components/Validation';
import Result from './components/Result';
import Menu from './components/UI/Menu';

function App() {
  const state = useSelector((state: RootState) => state);

  const { position, questions } = state;
  const { questionsShown, validationShown, resultShown } = position;

  return (
    <Fragment>
      <Card>
        {questionsShown && <Questions state={state} />}
        {validationShown && <Validation questions={questions} />}
        {resultShown && <Result questions={questions} />}
      </Card>
      <Menu />
    </Fragment>
  );
}

export default App;
