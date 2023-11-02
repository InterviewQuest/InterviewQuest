import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const ForgetPWLandingPage = () => {

  return (
    <div>
      <h1> Please check your email to reset password </h1>
      <Link to ='/login'>
      <button type = 'button' id = 'gohomebutton'> go back to login </button>
      </Link>
    </div>
  )
}

export default ForgetPWLandingPage
