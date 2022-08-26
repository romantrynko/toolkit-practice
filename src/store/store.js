import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice';
import todoSlice from '../features/todo/todoSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    posts: postsSlice
  }
});
