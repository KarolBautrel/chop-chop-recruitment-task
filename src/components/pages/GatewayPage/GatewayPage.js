import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const GatewayPage = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);

  if (!isUserLoggedIn) {
    return <Redirect to='/' />;
  }

  return <Redirect to='/posts' />;
};
