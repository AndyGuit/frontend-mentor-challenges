import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { isCompleted: true, text: 'Complete online JavaScript course' },
    { isCompleted: false, text: 'Jog around the park 3x' },
    { isCompleted: false, text: '10 minutes meditation' },
    { isCompleted: false, text: 'Read for 1 hour' },
    { isCompleted: false, text: 'Pick up groceries' },
    { isCompleted: false, text: 'Complete Todo App on Frontend Mentor' },
  ],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ isCompleted: false, text: action.payload });
    },
    setCompleted: (state, action) => {
      const newCompleted = !state.value[action.payload].isCompleted;

      state.value[action.payload].isCompleted = newCompleted;
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((_, i) => i !== action.payload);
    },
  },
});

export const { addTodo, setCompleted, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
