import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Post } from './Post';

import { getPostList } from 'actions/PostListActions';

export const PostList = () => {
  const [postListView, setPostListView] = useState(false);
  const {
    fetchingPostList,
    fetchingPostListFailed,
    postListData: { data: posts },
  } = useSelector((state) => state.postList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  return (
    <div>
      {fetchingPostList ? (
        <div>Loading...</div>
      ) : (
        <>
          <select
            defaultValue='list'
            onChange={() => setPostListView(!postListView)}
          >
            <option value='list'>List</option>
            <option value='grid'>Grid</option>
          </select>
          <div
            className={classNames('post-list container', {
              'post-list__grid': postListView,
            })}
          >
            {posts &&
              posts.map((post) => <Post key={post.id} postData={post} />)}
          </div>
        </>
      )}
      {fetchingPostListFailed && <div>An error ocured while loading data.</div>}
    </div>
  );
};
