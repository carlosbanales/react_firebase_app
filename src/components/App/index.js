import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import MessageBoard from '../MessageBoard';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PortfolioPage from '../Portfolio';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Logo from './../../logo.png';
import './style.css';

const App = () => (
  <Router>
    <div className='box'>
      <img src={Logo} alt='Logo' className='Logo' />

      <Navigation />

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.MESSAGE_BOARD} component={MessageBoard} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.PORTFOLIO} component={PortfolioPage} />
    </div>
  </Router>
);

export default withAuthentication(App);