import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import { asyncAddComment } from '../states/threadComment/action';

function DetailPage() {
  const { id } = useParams();
  const detailThread = useSelector((state) => state.detailThread);
  const authUser = useSelector((state) => state.authUser);
  // @TODO: get talkDetail and authUser state from store
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ content }));
    dispatch(asyncReceiveThreadDetail(id));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <div className="detail-page">
      <ThreadDetail {...detailThread} authUser={authUser.id} />
      <div className="flex-detail-page">
        <CommentList
          addComment={onAddComment}
          comments={detailThread.comments}
          threadId={detailThread.id}
          authUser={authUser ? authUser.id : null}
        />
      </div>
    </div>
  );
}

export default DetailPage;
