import { createSlice, current } from '@reduxjs/toolkit';

import { loadState, saveState } from '../helpers/localStorage';

const initialState = {
  todos: loadState(),
  filters: ['All', 'Active', 'Completed'],
  activeFilter: 'All',
  filteredTodos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoId = window.crypto.randomUUID();

      state.todos.push({
        id: todoId,
        isCompleted: false,
        text: action.payload,
      });

      saveState(state.todos);
    },

    setCompleted: (state, action) => {
      state.todos.find(todo => {
        if (todo.id === action.payload) todo.isCompleted = !todo.isCompleted;
      });

      saveState(state.todos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);

      saveState(state.todos);
    },

    filterTodo: state => {
      switch (state.activeFilter) {
        case 'Completed':
          state.filteredTodos = state.todos.filter(todo => todo.isCompleted);
          break;
        case 'Active':
          state.filteredTodos = state.todos.filter(todo => !todo.isCompleted);
          break;
        default:
          state.filteredTodos = [...state.todos];
      }
    },

    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },

    clearCompleted: state => {
      state.todos = state.todos.filter(todo => !todo.isCompleted);

      saveState(state.todos);
    },

    reorderItems: (state, action) => {
      const { to, from } = action.payload;
      const [selectedItem] = state.todos.splice(from, 1);
      state.todos.splice(to, 0, selectedItem);

      saveState(state.todos);
    },
  },
});

export const {
  addTodo,
  setCompleted,
  deleteTodo,
  filterTodo,
  setActiveFilter,
  clearCompleted,
  reorderItems,
} = todoListSlice.actions;

export default todoListSlice.reducer;
