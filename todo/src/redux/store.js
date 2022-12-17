import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './slices/themeSlice';
import todoListSlice from './slices/todoListSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    todoList: todoListSlice,
  },
});
