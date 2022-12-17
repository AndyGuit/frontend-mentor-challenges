import React from 'react';

import styles from './Input.module.scss';

const Input = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className={'todo-input-wrapper ' + styles.todoInputWrapper}>
      <span className="todo-circle">
        <img src="./icons/icon-check.svg" alt="check" />
      </span>
      <input
        className={'todo-input ' + styles.todoInput}
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default Input;
