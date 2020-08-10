import React from 'react';
import { useDispatch } from 'react-redux';
import { setPostIdToFetchDetails } from 'actions/PostListActions';
import { postPagePath } from 'components/pages/PostDetailsPage';
import { Link } from 'react-router-dom';

export const GridElement = (props) => {
  const { id, title, thumbnail } = props;

  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => dispatch(setPostIdToFetchDetails(id))}
      to={postPagePath.replace(':postId', id)}
      className='post-grid-view'
    >
      <p className='post-grid-view__title'>{title}</p>
      <img className='post-grid-view__image' src={thumbnail} alt={title} />
    </Link>
  );
};
