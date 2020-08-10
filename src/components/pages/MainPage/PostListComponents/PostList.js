import React, { useEffect, useState, useMemo } from 'react';
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
    postListData: { data: posts },
  } = useSelector((state) => state.postList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  return (
    <div className='post-list'>
      <select
        className='post-list__select'
        defaultValue={postListView}
        onChange={(e) => setPostListView(e.target.value)}
      >
        <option value='list'>List</option>
        <option value='grid'>Grid</option>
      </select>

      {fetchingPostList ? (
        <Loader />
      ) : (
        <div
          className={classNames('post-list__list-view container', {
            'post-list__grid-view': !isPostListView(postListView),
          })}
        >
          {posts &&
            posts.map((post) => (
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
