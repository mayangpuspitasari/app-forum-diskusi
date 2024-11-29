import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineDislike, AiTwotoneLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import HTMLReactParser from 'html-react-parser';
import TagItem from './TagItem';
import { postedAt } from '../utils';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  user,
}) {
  return (
    <div className="profile">
      {/* profile */}
      <div className="thread-item">
        <img src={user.avatar} alt="avatar" className="thread-img" />
        <h3 className="text-thread">{user.name}</h3>
        <span className="thread-tgl">
          ▫
          {postedAt(createdAt)}
        </span>
      </div>
      {/* body */}
      <div className="mt-2">
        <Link
          to={`/threads/${id}`}
        >
          {title}
        </Link>
        <div className="threadBody">{HTMLReactParser(body)}</div>
        <div className="thread-category">
          <TagItem text={category} />
        </div>
      </div>
      {/* footer */}
      <div className="item-button">
        <button type="submit">
          <AiTwotoneLike />
        </button>
        <button type="submit">
          <AiOutlineDislike />
          {' '}
        </button>
        <button type="submit">
          <FaRegComment className="text-xl" />
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
