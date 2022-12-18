import styles from './List.module.scss';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter, filterTodo } from '../../redux/slices/todoListSlice';

import ListItem from '../ListItem';

const List = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todoList.todos);
  const todoItems = useSelector(state => state.todoList.filteredTodos);
  const filters = useSelector(state => state.todoList.filters);
  const activeFilter = useSelector(state => state.todoList.activeFilter);

  // Re-render filtered todos on todo change
  React.useEffect(() => {
    dispatch(filterTodo());
  }, [allTodos]);

  return (
    <div className={'todo-list ' + styles.todoList}>
      <ul className={styles.listUl}>
        {todoItems.map(item => (
          <ListItem key={item.id} id={item.id} {...item} />
        ))}
      </ul>
      <div className={'todo-list-controls ' + styles.todoListControls}>
        <span className={'todo-list-info ' + styles.todoListInfo}>
          5 items left
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
        <button className="todo-list-clear">Clear Completed</button>
      </div>
    </div>
  );
};

export default List;
