import React from 'react';
import { Route } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

const notFoundPagePath = '/not-found-page';

export const NotFoundPageRoute = () => {
  return (
    <Route exact path={notFoundPagePath}>
      <NotFoundPage />
    </Route>
  );
};
