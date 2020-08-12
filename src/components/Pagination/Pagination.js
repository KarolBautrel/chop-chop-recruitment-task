import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { setActivePage } from 'actions/PostListActions';
import './pagination.scss';

export const Pagination = (props) => {
  const dispatch = useDispatch();
  const { page, totalPages } = props;
  const paginationButtons = [];

  const getPaginationButtons = (activePage, totalPages) => {
    for (let i = 1; i <= totalPages; i += 1) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => dispatch(setActivePage(i))}
          className={classNames('btn flat pagination__button', {
            'pagination__button-active green': i === activePage,
          })}
        >
          {i}
        </button>
      );
    }
  };

  getPaginationButtons(page, totalPages);

  return <div className='pagination'>{paginationButtons}</div>;
};
