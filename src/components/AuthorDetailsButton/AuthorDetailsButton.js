import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleOpenModal } from 'actions/PostListActions';

export const AuthorDetailsButton = (props) => {
  const { authorId } = props;

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleOpenModal(authorId))}>I</button>
    </>
  );
};
