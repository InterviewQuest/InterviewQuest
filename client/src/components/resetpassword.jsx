import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const password = e.target.form.password.value;
    const email = e.target.form.email.value;

    try {
      await fetch('/user/resetpassword', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> this is reset password </h1>
      <form>
        Email:{' '}
        <input
          id="inputemail"
          type="text"
          name="email"
        ></input>
        Password:{' '}
        <input
          id="inputpassword"
          type="text"
          name="password"
        ></input>
        <br />
        <button
          type="button"
          onClick={(e) => handleClick(e)}
        >
          reset password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
