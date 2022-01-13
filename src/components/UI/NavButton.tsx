import React from 'react';
import { useDispatch } from 'react-redux';
import { changePosition } from '../../features/positionSlice';

const NavButton: React.FC<{ index: number; currentIndex: number }> = (
  props
) => {
  const { index, currentIndex } = props;
  const dispatch = useDispatch();

  const changeCurrentIndexHandler = () => {
    dispatch(changePosition(index));
  };

  const buttonClasses = index === currentIndex ? 'btn--nav active' : 'btn--nav';

  return (
    <button
      className={buttonClasses}
      onClick={changeCurrentIndexHandler}
    ></button>
  );
};

export default NavButton;
