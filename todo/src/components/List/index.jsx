import styles from './List.module.scss';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveFilter,
  filterTodo,
  clearCompleted,
} from '../../redux/slices/todoListSlice';

import { Droppable } from 'react-beautiful-dnd';

import ListItem from '../ListItem';

const List = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector(state => state.todoList.filteredTodos);
  const filters = useSelector(state => state.todoList.filters);
  const activeFilter = useSelector(state => state.todoList.activeFilter);
  const todosLeft = useSelector(state => state.todoList.todos).filter(
    todo => !todo.isCompleted
  ).length;

  const droppableId = 'todo-list-id';

  return (
    <div className={'todo-list ' + styles.todoList}>
      <Droppable droppableId={droppableId}>
        {provided => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.listUl}>
            {todoItems.map((item, index) => (
              <ListItem index={index} key={item.id} id={item.id} {...item} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className={'todo-list-controls ' + styles.todoListControls}>
        <span className={'todo-list-info ' + styles.todoListInfo}>
          {todosLeft} items left
        </span>
        <div className={'todo-list-btns ' + styles.todoListBtns}>
          {filters.map((filter, i) => (
            <button
              key={i}
              onClick={() => {
                dispatch(setActiveFilter(filter));
                dispatch(filterTodo());
              }}
              className={`todo-list-control ${
                activeFilter === filter ? 'active' : ''
              }`}>
              {filter}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            dispatch(clearCompleted());
            dispatch(filterTodo());
          }}
          className="todo-list-clear">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default List;
