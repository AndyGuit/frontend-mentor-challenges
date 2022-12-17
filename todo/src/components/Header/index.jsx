import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.todoHead}>
      <h1 className={'todo-header ' + styles.todoHeader}>Todo</h1>
      <button>
        <img src="./icons/icon-sun.svg" alt="icon" />
      </button>
    </header>
  );
};

export default Header;
