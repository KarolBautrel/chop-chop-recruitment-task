import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { isPostListView } from 'services/componentsServices';
import { Loader, LoaderError } from 'components/Loader';
import { getPostList } from 'actions/PostListActions';
import { Post } from './Post';

export const PostList = () => {
  const [postListView, setPostListView] = useState('list');
  const {
    fetchingPostList,
    fetchingPostListFailed,
    postListData,
  } = useSelector((state) => state.postList);

  const { userToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList(userToken));
  }, [userToken, dispatch]);

  return (
    <div className='post-list-container container'>
      <div className='post-list-container__select'>
        <p className='post-list-container__select-label'>Display style:</p>
        <select
          className='post-list-container__select-input'
          defaultValue={postListView}
          onChange={(e) => setPostListView(e.target.value)}
        >
          <option value='list'>List</option>
          <option value='grid'>Grid</option>
        </select>
      </div>

      {fetchingPostList ? (
        <Loader />
      ) : (
        <div
          className={classNames('post-list-container__list-view', {
            'post-list-container__grid-view': !isPostListView(postListView),
          })}
        >
          {postListData &&
            postListData.data &&
            postListData.data.map((post) => (
              <Post
                key={post.id}
                postData={post}
                postListVisibility={postListView}
              />
            ))}
        </div>
      )}
      {fetchingPostListFailed && <LoaderError />}
    </div>
  );
};
