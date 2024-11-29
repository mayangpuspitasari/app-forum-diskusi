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
    <div className="thread-page-box">
      <div className="full">
        <ThreadsList threads={threadList} />
      </div>
    </div>
  );
}

export default ThreadPage;
