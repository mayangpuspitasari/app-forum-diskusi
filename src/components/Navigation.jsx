import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineLogout, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

function Navigation({ authUser, signOut }) {
  const { name, avatar } = authUser;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk kontrol menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Fungsi toggle menu

  return (
    <div className="navigation bg-gray-800 text-white shadow-lg p-4 flex items-center justify-between">
      {/* Logo dan Nama Pengguna */}
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          title={name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600"
        />
        <h3 className="text-md sm:text-lg font-semibold hidden sm:block">
          {name}
        </h3>
      </div>

      {/* Tombol Hamburger (hanya tampil di mobile) */}
      <button type="button" className="md:hidden text-2xl" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Menu Navigasi Desktop */}
      <nav className="hidden md:flex items-center space-x-6">
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
        className="hidden md:flex items-center space-x-2 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
      >
        <AiOutlineLogout className="w-5 h-5" />
        <span>Sign Out</span>
      </button>

      {/* Menu Navigasi Mobile */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-gray-900 text-white p-6 shadow-lg md:hidden transition-all`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-yellow-300 transition"
          >
            Threads
          </Link>
          <Link
            to="/leaderboard"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-yellow-300 transition"
          >
            LeaderBoards
          </Link>
          <Link
            to="/create"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-yellow-300 transition"
          >
            Create
          </Link>
          <button
            type="button"
            onClick={() => {
              signOut();
              toggleMenu();
            }}
            className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
          >
            <AiOutlineLogout className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
