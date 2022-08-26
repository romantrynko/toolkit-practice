import React from 'react';
import { useSelector } from 'react-redux';

const LastName = () => {
  const { lastName } = useSelector((state) => state.user);
  return <div className="font-bold">{lastName}</div>;
};

export default LastName;
