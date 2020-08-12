import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPostIdToFetchDetails } from 'actions/PostListActions';
import { AuthorDetailsButton } from 'components/AuthorDetailsButton';

import { postDetailsPagePath } from 'components/pages/PostDetailsPage';

export const ListElement = (props) => {
  const [toggleDescription, setToggleDescription] = React.useState(false);
  const { id, title, thumbnail, date, authorId, excerpt } = props;

  const dispatch = useDispatch();

  return (
    <>
      <div className='row post__row'>
        <img className='post__row-image col s3' src={thumbnail} alt={title} />
        <span className='col s7'>
          <p>{date}</p>
          <Link
            onClick={() => dispatch(setPostIdToFetchDetails(id))}
            to={postDetailsPagePath.replace(':postId', id)}
          >
            {title}
          </Link>
        </span>
        <span className='col s2'>
          <AuthorDetailsButton authorId={authorId} />
          <button onClick={() => setToggleDescription(!toggleDescription)}>
            E
          </button>
        </span>
      </div>
      {toggleDescription && (
        <div className='post__row-description'>{excerpt}</div>
      )}
    </>
  );
};

ListElement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
