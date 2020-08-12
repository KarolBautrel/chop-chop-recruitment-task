import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from './MainPage';

export const MainPageRoute = () => {
  const mainPagePath = '/posts';

  return (
    <Route path={mainPagePath} exact>
      <MainPage />
    </Route>
  );
};
