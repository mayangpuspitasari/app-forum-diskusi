import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreadsAndLeaderboards } from '../states/shared/action';

function ThreadPage() {
  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div className="thread-page-container bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Threads
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ThreadsList threads={threadList} />
        </div>
      </div>
    </div>
  );
}

export default ThreadPage;
