import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOneToCount } from '../slices/mainSlice';
import { Button } from 'grommet';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.main);

  return (
    <div>
      <h1> Link Worked! </h1>
      {/* <Button
        onClick={() => dispatch(addOneToCount(count))}
      >
        Click
      </Button> */}
      <Button
        color="approve"
        primary
        label="Click to Count"
        onClick={() => dispatch(addOneToCount(count))}
      />
      {`count is ${count}`}
    </div>
  );
};

export default Dashboard;
