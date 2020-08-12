import React from 'react';
import { UserPage } from 'components/pages';
import { AppLayout } from 'components/containers';

export const NotFoundPage = () => {
  return (
    <UserPage>
      <AppLayout>Page not found</AppLayout>
    </UserPage>
  );
};
