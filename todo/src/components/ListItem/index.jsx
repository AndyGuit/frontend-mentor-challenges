import React from 'react';
import { useDispatch } from 'react-redux';
import { setCompleted } from '../../redux/slices/todoListSlice';

import styles from './ListItem.module.scss';

const ListItem = ({ text, isCompleted, id }) => {
  const dispatch = useDispatch();
  const completed = isCompleted ? 'completed' : '';

  return (
    <li id={id} className={`todo-list-item ${completed} ${styles.listItem}`}>
      <span onClick={() => dispatch(setCompleted(id))} className="todo-circle">
        <img src="./icons/icon-check.svg" alt="check" />
      </span>
      {text}
      <span className="todo-item-remove">
        <img src="./icons/icon-cross.svg" alt="Remove" />
      </span>
    </li>
  );
};

export default ListItem;
