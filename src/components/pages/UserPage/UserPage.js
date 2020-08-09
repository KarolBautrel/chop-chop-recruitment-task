import React from 'react';
import { Redirect } from 'react-router-dom';
import { authToken } from 'services/sessionServices';

export const UserPage = (props) => {
  const { children } = props;

  if (!authToken) {
    return <Redirect to='/' />;
  }

  return children;
};
