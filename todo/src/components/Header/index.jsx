import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/slices/themeSlice';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  const themeIcon = theme === 'dark' ? 'sun' : 'moon';

  return (
    <header className={styles.todoHead}>
      <h1 className={'todo-header ' + styles.todoHeader}>Todo</h1>
      <button onClick={() => dispatch(switchTheme())}>
        <img src={`./icons/icon-${themeIcon}.svg`} alt="icon" />
      </button>
    </header>
  );
};

export default Header;
