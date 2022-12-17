import styles from './List.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from '../ListItem';

const List = () => {
  const todoItems = useSelector(state => state.todoList.value);

  return (
    <div className={'todo-list ' + styles.todoList}>
      <ul className={styles.listUl}>
        {todoItems.map((item, index) => (
          <ListItem key={index} id={index} {...item} />
        ))}
      </ul>
      <div className={'todo-list-controls ' + styles.todoListControls}>
        <span className={'todo-list-info ' + styles.todoListInfo}>
          5 items left
        </span>
        <div className={'todo-list-btns ' + styles.todoListBtns}>
          <button className="todo-list-control active">All</button>
          <button className="todo-list-control">Active</button>
          <button className="todo-list-control">Completed</button>
        </div>
        <button className="todo-list-clear">Clear Completed</button>
      </div>
    </div>
  );
};

export default List;
