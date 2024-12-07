import React from 'react';
import PropTypes from 'prop-types';
import { IoSend } from 'react-icons/io5';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, handleComment] = useInput('');

  return (
    <div className="commen-input">
      <input
        type="text"
        id="comment"
        name="comment"
        placeholder="Write your comment ..."
        value={comment}
        onChange={handleComment}
      />
      <button type="submit" onClick={() => addComment({ content: comment })}>
        <IoSend />
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
