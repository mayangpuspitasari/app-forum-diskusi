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
    <div className="navigation">
      <h3>{name}</h3>
      <img src={avatar} alt={name} title={name} />
      <nav id="nav">
        <Link to="/">Threads</Link>
        <Link to="/leaderboard">LeaderBoards</Link>
        <Link to="/create">Create</Link>
      </nav>
      <button type="button" onClick={signOut}>
        <AiOutlineLogout />
        SignOut
      </button>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
