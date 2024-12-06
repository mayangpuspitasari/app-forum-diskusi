import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function CreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="create-page min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create New Thread
        </h1>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}

export default CreatePage;
