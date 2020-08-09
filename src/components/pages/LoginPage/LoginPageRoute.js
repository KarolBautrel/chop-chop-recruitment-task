import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';

const loginPagePath = '/';

export const LoginPageRoute = () => {
  return (
    <Route path={loginPagePath} exact>
      <LoginPage />
    </Route>
  );
};
