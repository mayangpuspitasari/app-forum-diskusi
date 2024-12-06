import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/');
  };

  return (
    <section className="register-page min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <article className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        <RegisterInput register={onRegister} />
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            Login
          </Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
