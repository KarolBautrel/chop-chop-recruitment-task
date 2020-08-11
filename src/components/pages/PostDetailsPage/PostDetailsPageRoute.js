import React from 'react';
import { Route } from 'react-router-dom';
import { PostDetailsPage } from './PostDetailsPage';

export const postDetailsPagePath = '/posts/details/:postId';

export const PostDetailsPageRoute = () => {
  return (
    <Route exact path={postDetailsPagePath}>
      <PostDetailsPage />
    </Route>
  );
};
