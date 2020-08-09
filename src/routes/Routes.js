import React, { Fragment } from 'react';
import {
  MainPageRoute,
  LoginPageRoute,
  GatewayPageRoute,
} from 'components/pages';

export const Routes = () => {
  return (
    <Fragment>
      <GatewayPageRoute />
      <LoginPageRoute />
      <MainPageRoute />
    </Fragment>
  );
};
