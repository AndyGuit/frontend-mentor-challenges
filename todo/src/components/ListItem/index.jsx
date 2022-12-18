import React from 'react';
import { useDispatch } from 'react-redux';
import { setCompleted, deleteTodo } from '../../redux/slices/todoListSlice';

import styles from './ListItem.module.scss';

const ListItem = ({ text, isCompleted, id }) => {
  const dispatch = useDispatch();
  const completed = isCompleted ? 'completed' : '';

  const completeTodo = id => {
    dispatch(setCompleted(id));
  };

  return (
    <li className={`todo-list-item ${completed} ${styles.listItem}`}>
      <span onClick={() => completeTodo(id)} className="todo-circle">
        <img src="./icons/icon-check.svg" alt="check" />
      </span>
      {text}
      <span
        onClick={() => dispatch(deleteTodo(id))}
        className="todo-item-remove">
        <img src="./icons/icon-cross.svg" alt="Remove" />
      </span>
    </li>
  );
};

export default ListItem;
