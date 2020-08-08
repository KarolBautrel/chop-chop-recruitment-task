import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className='app-layout-header nav-wrapper blue'>
      <Link to='#!' className='brand-logo left'>
        Logo
      </Link>
      <Link className='right' to='http://google.com'>
        Post list
      </Link>
    </nav>
  );
};
