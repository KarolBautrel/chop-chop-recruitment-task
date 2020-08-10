import React, { Fragment } from 'react';
import {
  MainPageRoute,
  LoginPageRoute,
  GatewayPageRoute,
  PostDetailsPage,
} from 'components/pages';

export const Routes = () => {
  return (
    <Fragment>
      <GatewayPageRoute />
      <LoginPageRoute />
      <MainPageRoute />
      <PostDetailsPage />
    </Fragment>
  );
};
