import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todoListSlice';

import styles from './Input.module.scss';

const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const addTodoItem = () => {
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  const addTodoOnEnter = e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') addTodoItem();
  };

  return (
    <div className={'todo-input-wrapper ' + styles.todoInputWrapper}>
      <span onClick={addTodoItem} className="todo-circle">
        <img src="./icons/icon-check.svg" alt="check" />
      </span>
      <input
        onKeyDown={addTodoOnEnter}
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
