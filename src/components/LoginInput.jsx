import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        id="login"
        name="login"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        id="password"
        name="password"
      />
      <button
        type="button"
        id="button"
        name="button"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
