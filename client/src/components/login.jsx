import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> this is login </h1>
      {/* <Link to ='/login'>
      <button type = 'button' id = 'gohomebutton'> go back to login </button>
      </Link> */}
    </div>
  );
};

export default Login;