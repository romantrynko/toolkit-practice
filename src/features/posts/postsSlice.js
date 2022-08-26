import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// https://jsonplaceholder.typicode.com/
const initialState = {
  posts: []
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch(setPosts(response.data));
  }
);

export const deletePostById = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id));
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    }
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log(),
    [getPosts.pending]: () => console.log(),
    [getPosts.rejected]: () => console.log(),
    [deletePostById.fulfilled]: () => console.log(),
    [deletePostById.pending]: () => console.log(),
    [deletePostById.rejected]: () => console.log()
  }
});

export const { setPosts, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
