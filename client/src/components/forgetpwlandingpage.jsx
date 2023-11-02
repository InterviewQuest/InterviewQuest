import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ForgetPWLandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1> Please check your email to reset password </h1>
      {/* <Link to ='/login'>
      <button type = 'button' id = 'gohomebutton'> go back to login </button>
      </Link> */}
    </div>
  );
};

export default ForgetPWLandingPage;
