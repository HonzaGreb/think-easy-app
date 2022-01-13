import { Fragment, useState } from 'react';

const Menu = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);

  const menuToggleHandler = () => {
    setMenuShown((prevState) => !prevState);
  };

  const menuStyles = menuShown ? 'menu shown' : 'menu';

  return (
    <Fragment>
      <button className={menuStyles} onClick={menuToggleHandler}>
        <span className="menu__bar"></span>
      </button>
      <div className="menu__bg"></div>
      <ol className="menu__list">
        <li className="menu__item">
          This software will allow you to build a sentence.
        </li>
        <li className="menu__item">Try to answer the questions.</li>
        <li className="menu__item">
          If you fail, you will be prompted to try again during the validation
          phase.
        </li>
        <li className="menu__item">
          You may continue once all of the questions have been filled out.
        </li>
        <li className="menu__item">
          Gaze upon the sentence you have just created and rejoice.
        </li>
        <div className="menu__copy">
          &copy; Made by{' '}
          <a
            href="https://github.com/HonzaGreb"
            target="_blank"
            rel="noopener noreferrer"
            className="menu__link"
          >
            Honza Grebennikov
          </a>{' '}
          as an entry project for{' '}
          <a
            href="https://thinkeasy.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="menu__link"
          >
            ThinkEasy s.r.o.
          </a>
        </div>
      </ol>
    </Fragment>
  );
};

export default Menu;
