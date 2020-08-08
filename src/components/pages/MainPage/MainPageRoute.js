import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from './MainPage';

const mainPagePath = '/';

export const MainPageRoute = () => {
  return (
    <Route path={mainPagePath}>
      <MainPage />
    </Route>
  );
};
