import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { isPostListView } from 'services/componentsServices';
import { Loader, LoaderError } from 'components/Loader';
import { getPostList } from 'actions/PostListActions';
import { Pagination } from 'components/Pagination';
import { Post } from './Post';
import { PostListSelects } from './PostListSelects';

export const PostListComponent = (props) => {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();
  const [postListView, setPostListView] = useState('list');
  const [listOrder, setListOrder] = useState('asc');
  const [orderType, setListOrderType] = useState('title');
  const {
    fetchingPostList,
    fetchingPostListFailed,
    postListData,
    activePage,
  } = useSelector((state) => state.postList);

  useEffect(() => {
    dispatch(getPostList(push));
  }, [dispatch, activePage, listOrder, orderType]);

  return (
    <div className='post-list-container container'>
      <PostListSelects
        postListView={postListView}
        listOrder={listOrder}
        orderType={orderType}
        setPostListView={setPostListView}
        setListOrder={setListOrder}
        setListOrderType={setListOrderType}
      />
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
      <Pagination {...postListData.pagination} />
    </div>
  );
};

PostListComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export const PostList = withRouter(PostListComponent);
