import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 0, isCompleted: true, text: 'Complete online JavaScript course' },
    { id: 1, isCompleted: false, text: 'Jog around the park 3x' },
    { id: 2, isCompleted: false, text: '10 minutes meditation' },
    { id: 3, isCompleted: false, text: 'Read for 1 hour' },
    { id: 4, isCompleted: false, text: 'Pick up groceries' },
    { id: 5, isCompleted: false, text: 'Complete Todo App on Frontend Mentor' },
  ],
  filters: ['All', 'Active', 'Completed'],
  activeFilter: 'All',
  filteredTodos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length,
        isCompleted: false,
        text: action.payload,
      });
    },

    setCompleted: (state, action) => {
      state.todos.find(todo => {
        if (todo.id === action.payload) todo.isCompleted = !todo.isCompleted;
      });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
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
  },
});

export const {
  addTodo,
  setCompleted,
  deleteTodo,
  filterTodo,
  setActiveFilter,
} = todoListSlice.actions;

export default todoListSlice.reducer;
