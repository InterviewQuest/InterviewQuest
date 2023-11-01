import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOneToCount } from '../slices/mainSlice'

const dashboard = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.main);

  return (
    <div>
      <h1> Link Worked! </h1>
      <button type="button" onClick={() => dispatch(addOneToCount(count))}>Click to count</button>
      {`count is ${count}`}      
    </div>
  )
}

export default dashboard
