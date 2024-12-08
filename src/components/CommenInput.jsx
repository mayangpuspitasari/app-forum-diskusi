import React from 'react';
import PropTypes from 'prop-types';
import { IoSend } from 'react-icons/io5';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, handleComment, setComment] = useInput('');

  const handleSubmit = () => {
    if (!comment.trim()) return; // Mencegah pengiriman komentar kosong
    addComment({ content: comment });
    setComment(''); // Kosongkan input setelah mengirim komentar
  };

  return (
    <div className="flex items-center m-3 bg-gray-800 p-3 rounded-lg">
      <input
        type="text"
        id="comment"
        name="comment"
        placeholder="Tulis komentar Anda..."
        value={comment}
        onChange={handleComment}
        className="flex-1 bg-gray-900 text-white text-sm p-3 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 p-3 rounded-r-lg hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 text-white transition-all"
      >
        <IoSend className="text-xl" />
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
