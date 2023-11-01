import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOneToCount } from '../slices/mainSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.main);

  return (
    <div>
      {console.log('we are in linked file')}
      <h1> Link Worked! </h1>
      <button
        type="button"
        onClick={() => dispatch(addOneToCount(count))}
      >
        Click to count
      </button>
      {`count is ${count}`}
    </div>
  );
};

export default Dashboard;
