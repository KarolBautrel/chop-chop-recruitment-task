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

  const urlPath = window.location.pathname;
  const urlPathID = getPostIdFromUrl(urlPath);

  useEffect(() => {
    detailedPostId
      ? dispatch(getPostDetails(detailedPostId))
      : dispatch(getPostDetails(urlPathID));
  }, [detailedPostId, dispatch, urlPathID]);

  return (
    <UserPage>
      <AppLayout>
        <PostDetailsView />
      </AppLayout>
    </UserPage>
  );
};
