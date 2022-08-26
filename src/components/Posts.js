import React from 'react';
import PostItem from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/posts/postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  return (
    <div>
      <button
        onClick={() => dispatch(getPosts())}
        type="submit"
        className="bg-slate-400  hover:bg-lime-400 transition-all p-2 text-sm"
      >
        Get posts
      </button>

      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
