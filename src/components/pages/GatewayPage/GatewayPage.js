import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const GatewayPage = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);

  console.log(isUserLoggedIn, 'gateway@@@@@@@@');

  if (!isUserLoggedIn) {
    return <Redirect to='/login' />;
  }

  return <Redirect to='/posts' />;
};
