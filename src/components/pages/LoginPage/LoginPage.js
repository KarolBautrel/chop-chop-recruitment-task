import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dispatchSignIn } from 'actions/AuthActions';
import { Redirect } from 'react-router-dom';
import './loginPage.scss';

const LoginPageComponent = (props) => {
  const {
    history: { push },
  } = props;

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const user = {
    login,
    password,
  };

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(dispatchSignIn(user, push));
  };

  if (isUserLoggedIn) {
    return <Redirect to='/posts' />;
  }

  return (
    <div class='container login-form-container'>
      <form onSubmit={loginUser} class='login-form'>
        <label for='input_login' class='login-form-input'>
          Login
        </label>
        <input
          id='input_login'
          type='text'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <label for='input_password' class='login-form-input'>
          Password
        </label>
        <input
          id='input_password'
          type='password'
          value={password}
          class='file-field input-field'
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className='btn waves-effect waves-light'
          type='submit'
          name='action'
        >
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </form>
    </div>
  );
};

LoginPageComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export const LoginPage = withRouter(LoginPageComponent);
