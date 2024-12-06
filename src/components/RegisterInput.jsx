import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [email, onEmailChange] = useInput('');
  const [name, onNameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input bg-gray-800 text-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email"
          name="email"
          id="email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Enter your username"
          name="username"
          id="username"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Enter your password"
          name="password"
          id="password"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button
        type="button"
        onClick={() => register({ email, name, password })}
        className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-3 rounded-lg transition duration-300"
      >
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
