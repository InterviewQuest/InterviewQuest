import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ForgetPW = () => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const email = e.target.form.email.value;
    try {
      const results = await fetch('/user/forgetpassword', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await results.json();

      console.log('this is results post', data);

      if (data.emailExists === false) {
        console.log('this is message', data.message);
        const response = document.querySelector('#forgetpw-response');
        response.innerHTML = data.message;
      } else navigate('/forgetpasswordlandingpage');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> Forget your password? </h1>
      <h4>Please enter the email associated with your account </h4>
      <h4
        id="forgetpw-response"
        style={{ color: 'red' }}
      ></h4>
      <form>
        Email:{' '}
        <input
          id="inputemail"
          type="text"
          name="email"
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

export default ForgetPW;
