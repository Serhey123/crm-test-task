import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectors, operations } from './redux/auth';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

import Container from './components/Container/Container';
import { Switch, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import Button from './UI/Button/Button';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectors.getToken);

  useEffect(() => {
    if (token) {
      dispatch(operations.fetchCurrentUser(token));
    }
  }, [dispatch, token]);

  const handler = () => {
    dispatch(operations.logOut());
  };

  return (
    <React.Fragment>
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <button onClick={handler}>Log Out</button>
          </li>
        </ul>
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute path="/login" restricted>
              <LoginPage />
            </PublicRoute>

            <PublicRoute path="/signup" restricted>
              <SignupPage />
            </PublicRoute>

            <PrivateRoute path="/">
              <HomePage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </React.Fragment>
  );
}

export default App;
