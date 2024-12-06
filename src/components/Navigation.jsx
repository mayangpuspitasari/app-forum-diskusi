import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

function Navigation({ authUser, signOut }) {
  const { name, avatar } = authUser;
  return (
    <div className="navigation bg-gray-800 text-white shadow-lg p-4 flex items-center justify-between">
      {/* Logo dan Nama Pengguna */}
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          title={name}
          className="w-12 h-12 rounded-full border-2 border-gray-600"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex items-center space-x-6">
        <Link
          to="/"
          className="px-4 py-2 rounded hover:bg-gray-700 hover:text-yellow-300 transition"
        >
          Threads
        </Link>
        <Link
          to="/leaderboard"
          className="px-4 py-2 rounded hover:bg-gray-700 hover:text-yellow-300 transition"
        >
          LeaderBoards
        </Link>
        <Link
          to="/create"
          className="px-4 py-2 rounded hover:bg-gray-700 hover:text-yellow-300 transition"
        >
          Create
        </Link>
      </nav>

      {/* Tombol Logout */}
      <button
        type="button"
        onClick={signOut}
        className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
      >
        <AiOutlineLogout className="w-5 h-5" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
