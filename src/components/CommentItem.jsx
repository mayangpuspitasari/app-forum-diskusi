import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDislike, AiTwotoneLike } from 'react-icons/ai';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';

function CommentItem({ owner, content, createdAt, upVotesBy, downVotesBy }) {
  return (
    <div className="comment-item">
      {/* profile */}
      <div className="flex-comment-item">
        <img src={owner.avatar} alt="halo" className="thread-img" />
        <h3>{owner.name}</h3>
        <span>▫{postedAt(createdAt)}</span>
      </div>
      {/* body */}
      <div className="mt-2">
        <p>{HTMLReactParser(content)}</p>
      </div>
      {/* footer */}
      <div className="flex-item">
        <button type="submit">
          <AiTwotoneLike className="text" />
          {upVotesBy.length}
        </button>
        <button type="submit">
          <AiOutlineDislike className="text" /> {downVotesBy.length}
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
