import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const UserPage = (props) => {
  const { children } = props;

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  if (!isUserLoggedIn) {
    return <Redirect to='/' />;
  }

  return children;
};

UserPage.propTypes = {
  children: PropTypes.node.isRequired,
};
