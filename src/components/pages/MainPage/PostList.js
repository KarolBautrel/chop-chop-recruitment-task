import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostList } from 'actions/PostListActions';

export const PostList = (props) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPostList());
  // }, []);

  return <div>qweqw</div>;
};
