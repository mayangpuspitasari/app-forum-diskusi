import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import CommentInput from './CommenInput';
import { commentShape } from './ThreadItem';

function CommentsList({ addComment, comments, authUser }) {
  return (
    <div className="bg-gray-800 m-3 p-6 rounded-lg shadow-md">
      {/* Input Komentar */}
      <CommentInput addComment={addComment} />

      {/* Judul Bagian Komentar */}
      <h1 className="text-xl font-bold text-white mt-6 mb-4 border-b border-gray-700 pb-2">
        Comments
      </h1>

      {/* Daftar Komentar */}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} authUser={authUser} {...comment} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-4">
          There are no comments yet.
        </p>
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
