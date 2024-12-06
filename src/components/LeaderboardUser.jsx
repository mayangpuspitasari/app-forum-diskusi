import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardUser({ user, score }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full border-2 border-gray-300"
        />
        <h3 className="font-semibold text-gray-800">{user.name}</h3>
      </div>

      {/* Score */}
      <div className="text-xl font-bold text-blue-600">
        {score} <span className="text-sm text-gray-500">XP</span>
      </div>
    </div>
  );
}

LeaderboardUser.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardUser;
