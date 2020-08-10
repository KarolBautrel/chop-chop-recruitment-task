import React from 'react';
import { AuthorDetailsButton } from 'components/AuthorDetailsButton';

export const PostViewDetails = (props) => {
  const { title, excerpt, thumbnail, date, content, authorId } = props;

  return (
    <div className='post-view__details'>
      <span className='post-view__details-header'>
        <p>{date}</p>
        <h3>{title}</h3>
      </span>
      <img src={thumbnail} />
      <AuthorDetailsButton authorId={authorId} />
      <p>
        Excerpt: <br /> {excerpt}
      </p>
      <p>
        Content: <br /> {content}
      </p>
    </div>
  );
};
