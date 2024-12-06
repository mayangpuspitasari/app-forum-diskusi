import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <article className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <LoginInput login={onLogin} />

        <p className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            Register
          </Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
