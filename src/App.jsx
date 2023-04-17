import React, { Component, Suspense } from 'react';

import Container from './components/Container/Container';
import { Switch, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
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
          </ul>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>

              <Route path="/signup">
                <SignupPage />
              </Route>

              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Suspense>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
