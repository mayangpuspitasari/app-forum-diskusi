import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div className="list-talk ">
      {threads.map((thread) => (
        <div key={thread.id} className="mb-6">
          {/* Memberikan jarak bawah untuk setiap postingan */}
          <ThreadItem {...thread} />
        </div>
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;

