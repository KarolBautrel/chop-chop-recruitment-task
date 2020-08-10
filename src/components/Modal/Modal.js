import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCloseModal } from 'actions/PostListActions';
import './modal.scss';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export const Modal = () => {
  const { isModalOpen, authorData } = useSelector((state) => state.postList);
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div className='modal-styles'>
        {authorData ? (
          <div className='modal-author-informations'>
            <img src={authorData.avatar} />
            <h3>{authorData.name}</h3>
            <p>Description: {authorData.description}</p>

            <button onClick={() => dispatch(toggleCloseModal())}>Close</button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>,
    document.getElementById('portal')
  );
};
