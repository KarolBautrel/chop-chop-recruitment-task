import React, { Fragment } from 'react';
import {
  MainPageRoute,
  LoginPageRoute,
  GatewayPageRoute,
  PostDetailsPageRoute,
  NotFoundPageRoute,
} from 'components/pages';

export const Routes = () => {
  return (
    <Fragment>
      <LoginPageRoute />
      <GatewayPageRoute />
      <MainPageRoute />
      <PostDetailsPageRoute />
      <NotFoundPageRoute />
    </Fragment>
  );
};
