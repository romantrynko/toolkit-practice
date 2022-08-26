import React from 'react';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <div>
      <button
        type="submit"
        className="bg-slate-400  hover:bg-lime-400 transition-all p-2 text-sm"
      >
        Get posts
      </button>
      <PostItem />
    </div>
  );
};

export default Posts;
