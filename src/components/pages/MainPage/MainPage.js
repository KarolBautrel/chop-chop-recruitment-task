import React from 'react';
import { UserPage } from 'components/pages';
import { AppLayout } from 'components/containers';
import { PostList } from './PostList';
import './mainPage.scss';

export const MainPage = () => {
  return (
    <UserPage>
      <AppLayout>
        <PostList />
      </AppLayout>
    </UserPage>
  );
};
