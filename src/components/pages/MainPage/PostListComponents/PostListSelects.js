import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  setPostListOrder,
  setPostListOrderType,
} from 'actions/PostListActions';

export const PostListSelects = (props) => {
  const {
    postListView,
    listOrder,
    orderType,
    setPostListView,
    setListOrder,
    setListOrderType,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className='selects-container'>
      <div className='selects-container__select'>
        <p className='selects-container__select-label'>Display style:</p>
        <select
          className='selects-container__select-input'
          defaultValue={postListView}
          onChange={(e) => setPostListView(e.target.value)}
        >
          <option value='list'>List</option>
          <option value='grid'>Grid</option>
        </select>
      </div>

      <div className='selects-container__select'>
        <p className='selects-container__select-label'>Set order sort:</p>
        <select
          className='selects-container__select-input'
          defaultValue={listOrder}
          onChange={(e) => {
            setListOrder(e.target.value);
            dispatch(setPostListOrder(e.target.value));
          }}
        >
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
      </div>

      <div className='selects-container__select'>
        <p className='selects-container__select-label'>Set order sort type:</p>
        <select
          className='selects-container__select-input'
          defaultValue={orderType}
          onChange={(e) => {
            setListOrderType(e.target.value);
            dispatch(setPostListOrderType(e.target.value));
          }}
        >
          <option value='title'>Title</option>
          <option value='id'>Id</option>
          <option value='date'>Date</option>
          <option value='content'>Content</option>
          <option value='authorId'>Author ID</option>
        </select>
      </div>
    </div>
  );
};

PostListSelects.propTypes = {
  postListView: PropTypes.string.isRequired,
  listOrder: PropTypes.string.isRequired,
  orderType: PropTypes.string.isRequired,
  setPostListView: PropTypes.func.isRequired,
  setListOrder: PropTypes.func.isRequired,
  setListOrderType: PropTypes.func.isRequired,
};
