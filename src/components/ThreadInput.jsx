import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setBody] = useState('');

  function onInputBody(e) {
    setBody(e.target.innerHTML);
  }

  function onSubmit(e) {
    e.preventDefault();
    addThread({ title, category, body });
  }

  return (
    <form className="thread-input" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        id="title"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        id="category"
        value={category}
        onChange={onCategoryChange}
        required
      />
      <div
        className="input-textarea"
        placeholder="Threads"
        name="body"
        id="body"
        value={body}
        onInput={onInputBody}
        contentEditable
      />
      <button type="submit">
        Create
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
