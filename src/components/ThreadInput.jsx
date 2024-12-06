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
    <form
      className="thread-input bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
      onSubmit={onSubmit}
    >
      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter thread title"
        name="title"
        id="title"
        value={title}
        onChange={onTitleChange}
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Input */}
      <input
        type="text"
        placeholder="Enter category"
        name="category"
        id="category"
        value={category}
        onChange={onCategoryChange}
        required
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Body Input */}
      <div
        className="input-textarea w-full mb-4 px-4 py-2 border rounded-lg min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your thread content here..."
        name="body"
        id="body"
        value={body}
        onInput={onInputBody}
        contentEditable
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Create Thread
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
