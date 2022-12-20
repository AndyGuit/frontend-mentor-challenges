import './scss/app.scss';

import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux';

import { reorderItems } from './redux/slices/todoListSlice';

import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // If user drops outside of the list
    if (!destination) return;

    // if user drops at the same place, where item have been
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // destination - moved to index
    // source - moved from index
    // console.log(destination, source);

    dispatch(reorderItems({ to: destination.index, from: source.index }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`${theme} App`}>
        <div className="bg-container"></div>
        <div className="container">
          <Header />
          <Input />
          <List />
          <p className="todo-list-drag-n-drop">Drag and drop to reorder list</p>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
