import React from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';
import TagItem from './TagItem';
import { asyncUpVoteThread } from '../states/threads/action';

function ThreadDetail({
  id,
  title,
  body,
  category = '',
  createdAt,
  owner,
}) {
  const dispatch = useDispatch();

  const handleUpVote = () => {
    dispatch(asyncUpVoteThread(id));
  };

  return (
    <div>
      {/* profile */}
      <div className="flex items-center gap-1">
        <img src={owner.avatar} alt={owner.name} className="rounded-full w-10" />
        <h3 className="text-base font-semibold">{owner.name}</h3>
        <span className="font-normal text-slate-400 text-xs">
          ▫
          {postedAt(createdAt)}
        </span>
      </div>
      {/* body */}
      <div className="mt-2">
        <h3 className="text-2xl text-blue-200 font-bold">{title}</h3>
        <p>{HTMLReactParser(body)}</p>
        <div className="my-3 flex gap-2">
          <TagItem text={category} />
        </div>
      </div>
      {/* footer */}
      <div className="flex items-center gap-5">
        <button type="button" onClick={handleUpVote}>
          <AiTwotoneLike className="text-xl inline-block text-blue-500" id="blueLike" />
        </button>
        <button type="button" onClick={handleUpVote}>
          <AiTwotoneLike className="text-xl inline-block" id="blueLike" />
        </button>
        <button type="button">
          <AiTwotoneDislike className="text-xl inline-block" id="redLike" />
        </button>
        <button type="button">
          <FaCommentDots className="text-xl inline-block" />
          See comments
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
