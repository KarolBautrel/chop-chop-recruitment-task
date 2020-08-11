import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import { Modal } from 'components/Modal';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Modal />
    </BrowserRouter>
  );
}

export default App;
