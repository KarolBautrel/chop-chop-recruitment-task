import React from 'react';

export const Post = (props) => {
  const {
    postData: { title, thumbnail, date },
  } = props;

  return (
    <article className='post row'>
      <img className='post__image col s3' src={thumbnail} alt={title} />
      <span className='col s7'>
        <p>{date}</p>
        <p>{title}</p>
      </span>
      <span className='col s2'>
        <button>I</button>
        <button>E</button>
      </span>
    </article>
  );
};
