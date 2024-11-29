import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardUser from '../components/LeaderboardUser';
import { asyncPopulateUsersAndThreadsAndLeaderboards } from '../states/shared/action';

function LeaderboardPage() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((state) => state.leaderboards);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  return (
    <div className="leader-board">
      <h1>
        Leaderboard
      </h1>
      <p>
        Pengguna Aktif
      </p>

      <div className="page-board">
        {leaderboards.map((Leaderboard, i) => (
          <LeaderboardUser
            key={Leaderboard.user.id}
            {...Leaderboard}
            num={i + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
