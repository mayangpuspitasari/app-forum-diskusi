import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineDislike, AiTwotoneLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import HTMLReactParser from 'html-react-parser';
import TagItem from './TagItem';
import { postedAt } from '../utils';

function ThreadItem({ id, title, body, category, createdAt, user }) {
  return (
    <div className="profile bg-white rounded-lg shadow-md p-4 border border-gray-200">
      {/* profile */}
      <div className="thread-item flex items-center space-x-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full border-2 border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <span className="thread-tgl text-sm text-gray-500">
            ▫ {postedAt(createdAt)}
          </span>
        </div>
      </div>
      {/* body */}
      <div className="mt-4">
        <Link
          to={`/threads/${id}`}
          className="text-xl font-bold text-blue-600 hover:underline"
        >
          {title}
        </Link>
        <div className="threadBody mt-2 text-gray-700">
          {HTMLReactParser(body)}
        </div>
        <div className="thread-category mt-3">
          <TagItem text={category} />
        </div>
      </div>
      {/* footer */}
      <div className="item-button mt-4 flex space-x-4 text-gray-600">
        <button
          type="submit"
          className="flex items-center space-x-1 hover:text-blue-500"
        >
          <AiTwotoneLike className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button
          type="submit"
          className="flex items-center space-x-1 hover:text-red-500"
        >
          <AiOutlineDislike className="w-5 h-5" />
          <span>Dislike</span>
        </button>
        <button
          type="submit"
          className="flex items-center space-x-1 hover:text-green-500"
        >
          <FaRegComment className="w-5 h-5" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avathar: PropTypes.string,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export const commentShape = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadItem.defaultProps = {
  like: null,
};

export { userShape, threadItemShape };

export default ThreadItem;
