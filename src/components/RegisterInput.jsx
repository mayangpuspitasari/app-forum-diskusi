import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [email, onEmailChange] = useInput('');
  const [name, onNameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        name="email"
        id="email"
      />
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Username"
        name="username"
        id="username"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        name="password"
        id="password"
      />
      <button type="button" onClick={() => register({ email, name, password })}>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterInput;

