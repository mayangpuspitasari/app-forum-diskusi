import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input bg-gray-800 text-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto">
      
      <div>
        <label htmlFor="login" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email"
          id="login"
          name="login"
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
          id="password"
          name="password"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button
        type="button"
        id="button"
        name="button"
        onClick={() => login({ email, password })}
        className="w-full bg-blue-400 hover:bg-blue-500 text-black font-semibold py-3 rounded-lg transition duration-300"
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

// email : lskdklsj@gmail.com
// sandi :123456789