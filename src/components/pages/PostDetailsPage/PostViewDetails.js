import React, { useState } from 'react';
import { AuthorDetailsButton } from 'components/AuthorDetailsButton';
import { CommentForm } from './CommentForm';
import { CommentModal } from '../../CommentModal';

export const PostViewDetails = (props) => {
  const { title, excerpt, thumbnail, date, content, authorId, id } = props;
  const [commentForm, openCommentForm] = useState(false);

  return (
    <div className='post-view__details'>
      <span className='post-view__details-header'>
        <p>{date}</p>
        <h3>{title}</h3>
      </span>
      <img src={thumbnail} alt={title} />
      <AuthorDetailsButton authorId={authorId} />
      <p>
        Excerpt: <br /> {excerpt}
      </p>
      <p>
        Content: <br /> {content}
      </p>
      <button onClick={() => openCommentForm(!commentForm)}>
        Comment post
      </button>

      {commentForm ? (
        <CommentModal>
          <CommentForm
            openCommentForm={openCommentForm}
            formStatus={commentForm}
            postId={id}
          />
        </CommentModal>
      ) : null}
    </div>
  );
};
