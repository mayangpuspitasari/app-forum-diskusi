/**
 * test scenario for threadsReducer
 *
 * - talkReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD',
      payload: {
        threads: [
          {
            id: 'thread-1',
            text: 'Thread Test 1',
            user: 'user-1',
            replyTo: '',
            createdAt: '2022-09-22T10:06:55.588Z',
          },
          {
            id: 'thread-2',
            text: 'Thread Test 2',
            user: 'user-2',
            replyTo: '',
            createdAt: '2022-09-22T10:06:55.588Z',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the talks with the new talk when given by ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        text: 'Thread Test 1',
        user: 'user-1',
        replyTo: '',
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          text: 'Thread Test 2',
          user: 'user-2',
          replyTo: '',
          createdAt: '2022-09-22T10:06:56.588Z',
        },
      },
    };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
