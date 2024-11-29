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
    <div>
      <h1>Create New Thread</h1>
      <ThreadInput addThread={onAddThread} />
    </div>
  );
}

export default CreatePage;
