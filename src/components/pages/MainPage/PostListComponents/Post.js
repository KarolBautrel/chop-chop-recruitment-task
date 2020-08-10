import React from 'react';
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
