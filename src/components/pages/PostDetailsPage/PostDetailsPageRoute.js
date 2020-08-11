import React from 'react';
import { Route } from 'react-router-dom';
import { PostDetailsPage } from './PostDetailsPage';

export const postDetailsPagePath = `${process.env.PUBLIC_URL}/posts/details/:postId`;

export const PostDetailsPageRoute = () => {
  return (
    <Route exact path={postDetailsPagePath}>
      <PostDetailsPage />
    </Route>
  );
};
