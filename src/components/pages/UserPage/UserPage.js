import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authToken } from 'services/sessionServices';

export const UserPage = (props) => {
  const { children } = props;

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  if (!isUserLoggedIn) {
    return <Redirect to='/login' />;
  }

  return children;
};
