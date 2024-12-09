import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { IoSend } from 'react-icons/io5';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, handleComment, setComment] = useInput('');
  const inputRef = useRef(null); // Referensi ke input agar bisa difokuskan kembali

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    const currentComment = comment.trim(); // Simpan nilai komentar saat ini
    if (!currentComment) return; // Cek jika komentar kosong

    addComment({ content: currentComment }); // Kirim komentar
    setComment(''); // Kosongkan input setelah mengirim
    inputRef.current.focus(); // Fokuskan kembali ke input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center m-3 bg-gray-800 p-3 rounded-lg"
    >
      <input
        type="text"
        id="comment"
        name="comment"
        placeholder="Tulis komentar Anda..."
        value={comment}
        onChange={handleComment}
        ref={inputRef} // Tambahkan referensi untuk fokus otomatis
        className="flex-1 bg-gray-900 text-white text-sm p-3 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
      />
      <button
        type="submit" // Menggunakan type="submit" agar bisa kirim dengan Enter
        className="bg-blue-500 p-3 rounded-r-lg hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 text-white transition-all"
      >
        <IoSend className="text-xl" />
      </button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
