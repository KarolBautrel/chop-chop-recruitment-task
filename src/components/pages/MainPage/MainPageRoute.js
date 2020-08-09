import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from './MainPage';

const mainPagePath = '/posts';

export const MainPageRoute = () => {
  return (
    <Route path={mainPagePath} exact>
      <MainPage />
    </Route>
  );
};
