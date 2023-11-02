import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setUserLeetCodeInformation } from '../slices/mainSlice';


const Login = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    let user;

    if (loginState) {
      user = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const parsed = await user.json();
      if (parsed.success) {
        console.log('pob: ', parsed);
        dispatch(setUserLeetCodeInformation(parsed))
        return navigate('/dashboard')
      } else {
        alert('Incorrect Username/Password');
        setEmail('');
        setPassword('');
      }

    } 
    else {
      user = await fetch('http://localhost:3000/user/addUser', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      console.log('user: ', user);
      if (user.status === 201) {
        alert('Welcome to Interview Quest!');
        setPassword(!password);
      } else {
        alert('Email already exists, if you forgot your password, click \'forgot password\'.');
        setEmail('');
        setPassword('');
      }


    }
  }
  if (loginState) {
    return (
      <div>
        <h1> Login </h1>
        <label htmlFor='username-field'></label>
        <input name='username-field' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label htmlFor='password-field'></label>
        <input name='password-field' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='button' onClick={handleClick}>Submit</button>
        <button type='button' onClick={() => setLoginState(!loginState)}>Signup Page</button>
        <Link to="/forgetpassword">Forgot your password?</Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1> Sign Up</h1>
      <label htmlFor='username-field'></label>
      <input name='username-field' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <label htmlFor='password-field'></label>
      <input name='password-field' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) }></input>
      <button type='button' onClick={handleClick}>Submit</button>
      <button type='button' onClick={() => setLoginState(!loginState)}>Login Page</button>
    </div>
    )
  }
    
};

export default Login;