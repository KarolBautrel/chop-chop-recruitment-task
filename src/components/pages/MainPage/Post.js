import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleOpenModal,
  toggleOpenDescription,
} from 'actions/PostListActions';

export const Post = (props) => {
  const dispatch = useDispatch();
  const { activePostId } = useSelector((state) => state.postList);
  const {
    postData: { id, title, thumbnail, date, authorId, excerpt },
  } = props;

  return (
    <div className='post'>
      <div className='row post__row'>
        <img className='post__row-image col s3' src={thumbnail} alt={title} />
        <span className='col s7'>
          <p>{date}</p>
          <p>{title}</p>
        </span>
        <span className='col s2'>
          <button onClick={() => dispatch(toggleOpenModal(authorId))}>I</button>
          <button onClick={() => dispatch(toggleOpenDescription(id))}>E</button>
        </span>
      </div>
      {activePostId === id ? (
        <div className='post__row-description'>{excerpt}</div>
      ) : null}
    </div>
  );
};
