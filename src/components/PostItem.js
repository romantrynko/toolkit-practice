import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../features/posts/postsSlice';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const { title } = post;
  return (
    <div
      onClick={() => dispatch(deletePost(post.id))}
      className="flex w-full bg-slate-400 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
    >
      {title}
    </div>
  );
};

export default PostItem;
