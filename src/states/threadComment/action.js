import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  ADD_COMMENT_THREAD: 'ADD_COMMENT_THREAD',
};

function receiveCommentActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_COMMENT,
    payload: {
      comments,
    },
  };
}

function addCommentThreadActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT_THREAD,
    payload: {
      comment,
    },
  };
}

// function thunk
function asyncAddComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread } = getState();
    try {
      const comment = await api.createComment({ content, threadId: detailThread.id });
      dispatch(addCommentThreadActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveCommentActionCreator,
  addCommentThreadActionCreator, asyncAddComment,
};
