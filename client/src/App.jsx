import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ForgetPW from './components/forgetpw';
// import ForgetPWLandingPage from './components/forgetpwlandingpage';

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/forgetpassword"
          element={<ForgetPW />}
        />
        {/* <Route
            path="/forgetpwlandingpage"
            element={<ForgetPWLandingPage />}
          /> */}
      </Routes>
    </>
  );
};

export default App;
