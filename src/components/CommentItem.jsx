import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDislike, AiTwotoneLike } from 'react-icons/ai';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';

function CommentItem({ owner, content, createdAt, upVotesBy, downVotesBy }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      {/* Profil Pengguna */}
      <div className="flex items-center mb-3">
        <img
          src={owner.avatar}
          alt={owner.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="text-white font-semibold">{owner.name}</h3>
          <span className="text-sm text-gray-400">{postedAt(createdAt)}</span>
        </div>
      </div>

      {/* Konten Komentar */}
      <div className="mt-2 text-gray-200 text-sm">
        <p>{HTMLReactParser(content)}</p>
      </div>

      {/* Footer (Upvotes & Downvotes) */}
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-all"
        >
          <AiTwotoneLike className="text-xl" />
          <span className="text-sm">{upVotesBy.length}</span>
        </button>

        <button
          type="button"
          className="flex items-center space-x-1 text-red-500 hover:text-red-400 transition-all"
        >
          <AiOutlineDislike className="text-xl" />
          <span className="text-sm">{downVotesBy.length}</span>
        </button>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
