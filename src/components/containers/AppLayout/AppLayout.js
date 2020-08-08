import React from 'react';
import { Header } from './Header';
import './appLayout.scss';

export const AppLayout = (props) => {
  const { children } = props;

  return (
    <main className='app-layout'>
      <Header className='app-layout-header' />
      <section className='app-layout-body'>{children}</section>
    </main>
  );
};
