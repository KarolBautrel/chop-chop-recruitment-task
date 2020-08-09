import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dispatchSignIn } from 'actions/PostListActions';
import { Redirect } from 'react-router-dom';

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

  console.log(isUserLoggedIn, 'qweqw');

  if (isUserLoggedIn) {
    return <Redirect to='/posts' />;
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type='text'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          type='password'
          value={password}
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

export const LoginPage = withRouter(LoginPageComponent);
