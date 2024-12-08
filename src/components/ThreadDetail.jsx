import React from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';
import TagItem from './TagItem';
import { asyncUpVoteThread } from '../states/threads/action';

function ThreadDetail({ id, title, body, category = '', createdAt, owner }) {
  const dispatch = useDispatch();

  const handleUpVote = () => {
    dispatch(asyncUpVoteThread(id));
  };

  return (
    <div className="bg-gray-900 m-3 text-white p-6 rounded-lg shadow-lg">
      {/* Profile Section */}
      <div className="flex items-center gap-3 border-b border-gray-700 pb-4">
        <img
          src={owner.avatar}
          alt={owner.name}
          className="rounded-full w-12 h-12 object-cover"
        />
        <div>
          <h3 className="text-base font-semibold">{owner.name}</h3>
          <span className="font-normal text-gray-400 text-xs">
            {postedAt(createdAt)}
          </span>
        </div>
      </div>

      {/* Body Section */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
        <div className="text-gray-300 leading-relaxed mb-4">
          {HTMLReactParser(body)}
        </div>

        {/* Tag */}
        {category && (
          <div className="my-3">
            <TagItem text={category} />
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between border-t border-gray-700 pt-4">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleUpVote}
            className="flex items-center gap-1 text-blue-500 hover:text-blue-400"
          >
            <AiTwotoneLike className="text-2xl" />
            <span>Like</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1 text-red-500 hover:text-red-400"
          >
            <AiTwotoneDislike className="text-2xl" />
            <span>Dislike</span>
          </button>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-gray-400 hover:text-gray-200"
        >
          <FaCommentDots className="text-2xl" />
          <span>See comments</span>
        </button>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadDetail;
