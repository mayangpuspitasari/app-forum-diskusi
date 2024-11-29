import React from 'react';
import PropTypes from 'prop-types';

function TagItem({ text }) {
  return (
    <span>
      #
      {text}
    </span>
  );
}

TagItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TagItem;
