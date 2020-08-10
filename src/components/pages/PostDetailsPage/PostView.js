import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, LoaderError } from 'components/Loader';
import { PostViewDetails } from './PostViewDetails';

export const PostDetailsView = () => {
  const {
    postDetailsDataLoading,
    postDetailsDataLoadingFailed,
    postDetailsData,
  } = useSelector((state) => state.postList);

  return (
    <div className='post-view'>
      {postDetailsDataLoading ? (
        <Loader />
      ) : (
        <PostViewDetails {...postDetailsData} />
      )}
      {postDetailsDataLoadingFailed && <LoaderError />}
    </div>
  );
};
