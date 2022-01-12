import React from 'react';
import { useDispatch } from 'react-redux';
import { changePosition } from '../../features/positionSlice';

const NavButton: React.FC<{ index: number; currentIndex: number }> = (
  props
) => {
  const { index, currentIndex } = props;
  const dispatch = useDispatch();

  const changeCurrentIndexHandler = () => {
    console.log('clicked', index);
    dispatch(changePosition(index));
  };

  const buttonClasses =
    index === currentIndex ? 'nav__button active' : 'nav__button';

  return (
    <button className={buttonClasses} onClick={changeCurrentIndexHandler}>
      {index}
    </button>
  );
};

export default NavButton;
