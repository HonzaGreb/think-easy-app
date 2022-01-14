const MenuList = () => {
  // ↓ Vysvětlivky renderovány dynamicky

  const directions = [
    'This software will allow you to build a sentence.',
    'Try to answer the questions.',
    'If you fail, you will be prompted to try again during the validation phase.',
    'You may continue once all of the questions have been filled out.',
    'Gaze upon the sentence you have just created and rejoice.',
  ];

  return (
    <ul className="menu__list">
      {directions.map((d, i) => {
        return (
          <li className="menu__item" key={i}>
            {d}
          </li>
        );
      })}

      <div className="menu__copy">
        &copy; Made by{' '}
        <a
          href="https://honzagreb.github.io/PortfolioWebsite/"
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
    </ul>
  );
};

export default MenuList;
