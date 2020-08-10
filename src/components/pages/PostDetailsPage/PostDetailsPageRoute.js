import React from 'react';
import { Route } from 'react-router-dom';
import { PostDetailsPage } from './PostDetailsPage';

export const postPagePath = '/posts/:postId';

export const PostDetailsPageRoute = () => {
  return (
    <Route path={postPagePath} exact>
      <PostDetailsPage />
    </Route>
  );
};
