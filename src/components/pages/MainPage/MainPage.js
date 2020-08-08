import React from 'react';
import { AppLayout } from 'components/containers';
import { PostList } from './PostList';

export const MainPage = () => {
  return (
    <AppLayout>
      <div>mainPage</div>
      <PostList />
    </AppLayout>
  );
};
