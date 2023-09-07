import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/taskManager/TaskSlice'

export const store = configureStore({
  reducer: {
    roster: todoReducer,
  },
});
