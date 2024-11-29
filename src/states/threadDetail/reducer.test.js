/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the detail thread when given by RECEIVE_DETAIL_THREAD action
 *  - should clear the detail thread when given by CLEAR_DETAIL_THREAD action
 *
 */
import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadsDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the detail thread when given by RECEIVE_DETAIL_THREAD action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_DETAIL_THREAD',
      payload: {
        detailThread: [
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

    // Act
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should clear the detail thread when given by CLEAR_DETAIL_THREAD action', () => {
    // Arrange
    const initialState = {
      detailThread: { id: 'thread-1', text: 'Thread Detail Test' },
    };
    const action = {
      type: 'CLEAR_DETAIL_THREAD',
    };

    // Act
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toBeNull();
  });
});
