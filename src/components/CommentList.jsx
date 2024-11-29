import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import CommentInput from './CommenInput';
import { commentShape } from './ThreadItem';

function CommentsList({ addComment, comments, authUser }) {
  return (
    <div className="comment-list">
      <CommentInput addComment={addComment} />
      <h1>
        Comments
      </h1>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} authUser={authUser} {...comment} />
        ))
      ) : (
        <p>there is no comments</p>
      )}
    </div>
  );
}

CommentsList.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default CommentsList;
