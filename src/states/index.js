import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';
import leaderboardsReducer from './leaderboards/reduce';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadCommentReducer from './threadComment/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    users: usersReducer,
    detailThread: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    threadComment: threadCommentReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
