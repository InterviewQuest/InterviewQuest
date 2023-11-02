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
import theme from './components/styles/theme';

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
