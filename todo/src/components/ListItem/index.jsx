import React from 'react';

import styles from './ListItem.module.scss';

const ListItem = () => {
  return (
    <li className={'todo-list-item completed ' + styles.listItem}>
      <span className="todo-circle">
        <img src="./icons/icon-check.svg" alt="check" />
      </span>
      Complete online JavaScript course
    </li>
  );
};

export default ListItem;
