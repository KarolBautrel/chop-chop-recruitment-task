import React from 'react';
import { Route } from 'react-router-dom';

import { GatewayPage } from './GatewayPage';

export const gatewayPagePath = '/gateway';

export function GatewayPageRoute() {
  return <Route path={gatewayPagePath} component={GatewayPage} exact />;
}
