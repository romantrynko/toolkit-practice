import React from 'react';

const TodoItem = () => {
  const completed = false;
  return (
    <div className="flex justify-between items-center my-2">
      <div className="text-sm px-4 py-2 cursor-pointer bg-slate-400 hover:bg-lime-400">
        Complete
      </div>
      <div
        className={`text-sm ${
          completed ? 'line-through font-medium text-slate-400' : ''
        }`}
      >
        Todo Text
      </div>
      <div className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer">
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
