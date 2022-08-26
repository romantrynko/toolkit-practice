import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompleted(id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div
        onClick={() => toggleTodoHandler(id)}
        className="text-sm px-4 py-2 cursor-pointer bg-slate-400 hover:bg-lime-400"
      >
        Complete
      </div>
      <div
        className={`text-sm ${
          completed ? 'line-through font-medium text-slate-400' : ''
        }`}
      >
        {text}
      </div>
      <div
        onClick={() => deleteHandler(id)}
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
      >
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
