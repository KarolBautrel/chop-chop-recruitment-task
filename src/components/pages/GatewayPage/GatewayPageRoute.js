import React from 'react';
import { Route } from 'react-router-dom';

import { GatewayPage } from './GatewayPage';

export const gatewayPagePath = '/gateway';

export const GatewayPageRoute = () => {
  return (
    <Route path={gatewayPagePath} exact>
      <GatewayPage />
    </Route>
  );
};
