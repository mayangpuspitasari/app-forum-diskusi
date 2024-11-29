import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardUser({ user, score }) {
  return (
    <div className="leaderboards-user">
      <div className="item-user">
        <img src={user.avatar} alt="avatar" className="thread-img" />
        <h3>{user.name}</h3>
      </div>
      <div className="score">
        {score}
        XP
      </div>
    </div>
  );
}

LeaderboardUser.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,

};

export default LeaderboardUser;
