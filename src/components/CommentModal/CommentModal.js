import React from 'react';
import ReactDOM from 'react-dom';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: '1000',
};

export const CommentModal = (props, isModalOpen) => {
  const { children } = props;

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>{children}</div>
    </div>,
    document.getElementById('comment-modal')
  );
};
