import { Fragment, useState, memo } from 'react';
import MenuList from './MenuList';

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
      <MenuList />
    </Fragment>
  );
};

export default memo(Menu);
