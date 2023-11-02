import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store'; //imported RTK Store
import { Provider } from 'react-redux'; //imported Provider
import { useDispatch, useSelector } from 'react-redux'; //importeed dispatch and useSelector
import { addOneToCount } from './slices/mainSlice'; //actions
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Grommet } from 'grommet';
import Main from './Main';
import { TestComponent } from './components/TestComponent';

const theme = {
  global: {
    colors: {
      base: '#073B4C',
      highlight: '#118AB2',
      approve: '#06D6A0',
      warn: '#FFD166',
      danger: '#EF476F',
      gray0: 'F8F9FA',
      gray1: 'E9ECEF',
      gray2: '#DEE2E6',
      gray3: '#CED4DA',
      gray4: '#ADB5BD',
      gray5: '#6C757D',
      gray6: '#495057',
      gray7: '#343A40',
      gray8: '#212529',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export default function App() {
  return (
    //login route
    //dashboard route
    //neetcode
    //technologies
    // <Grommet>
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/test"
          element={<TestComponent />}
        />
        {/* <Route
          path="/d"
          element={<Dashboard />}
        /> */}
      </Routes>
    </div>
    // </Grommet>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Grommet
        theme={theme}
        full
      >
        <App />
      </Grommet>
    </BrowserRouter>
  </Provider>
);
