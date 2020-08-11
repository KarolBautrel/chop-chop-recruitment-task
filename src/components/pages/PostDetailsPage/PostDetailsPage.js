import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserPage } from 'components/pages';
import { AppLayout } from 'components/containers';
import { getPostDetails } from 'actions/PostListActions';
import { getPostIdFromUrl } from 'services/componentsServices';
import { PostDetailsView } from './PostView';
import './postDetailsPage.scss';

export const PostDetailsPage = () => {
  const { detailedPostId } = useSelector((state) => state.postList);
  const dispatch = useDispatch();

  const postPathURL = window.location.pathname;

  // useEffect(() => {
  //   detailedPostId
  //     ? dispatch(getPostDetails(detailedPostId))
  //     : dispatch(getPostDetails(getPostIdFromUrl(postPathURL)));
  // }, []);

  useEffect(() => {
    detailedPostId && dispatch(getPostDetails(detailedPostId));
  }, [detailedPostId]);

  return (
    <UserPage>
      <AppLayout>
        <PostDetailsView />
      </AppLayout>
    </UserPage>
  );
};
