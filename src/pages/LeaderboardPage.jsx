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
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Leaderboard</h1>
      <p className="text-center text-gray-600 mb-8">Pengguna Aktif Terbaik</p>

      {/* Leaderboard List */}
      <div className="space-y-4">
        {leaderboards.map((leaderboard, i) => (
          <LeaderboardUser
            key={leaderboard.user.id}
            {...leaderboard}
            num={i + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
