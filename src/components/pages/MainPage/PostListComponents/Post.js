import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isPostListView } from 'services/componentsServices';
import { ListElement } from './ListElement';
import { GridElement } from './GridElement';

export const Post = (props) => {
  const { activePostId } = useSelector((state) => state.postList);
  const { postData, postListVisibility } = props;

  return (
    <div className='post'>
      {isPostListView(postListVisibility) ? (
        <ListElement {...postData} activePostId={activePostId} />
      ) : (
        <GridElement {...postData} />
      )}
    </div>
  );
};

Post.propTypes = {
  activePostId: PropTypes.number,
};

Post.defaultProps = {
  activePostId: null,
};
