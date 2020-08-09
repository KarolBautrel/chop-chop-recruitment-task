import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { dispatchLogout } from 'actions/PostListActions';

export const HeaderComponent = (props) => {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  return (
    <nav className='app-layout-header nav-wrapper blue'>
      <Link to='#!' className=''>
        Logo
      </Link>
      <span className='app-layout-header__buttons'>
        <Link to='http://google.com'>Post list</Link>
        <button
          className='app-layout-header__buttons--logout-btn btn waves-effect waves-light'
          onClick={() => dispatch(dispatchLogout(push))}
        >
          Logout
        </button>
      </span>
    </nav>
  );
};

export const Header = withRouter(HeaderComponent);
