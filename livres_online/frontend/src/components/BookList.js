import React, { useState, useEffect } from 'react';
import API from '../services/api';
import BookForm from './BookForm';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const res = await API.get('/books');
    setBooks(res.data);
  };

  const handleSave = async (book) => {
    if (book._id) {
      await API.put(`/books/${book._id}`, book);
    } else {
      await API.post('/books', book);
    }
    setEditingBook(null);
    fetchBooks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/books/${id}`);
    fetchBooks();
  };

  useEffect(() => { fetchBooks(); }, []);

  return (
    <div>
      <BookForm book={editingBook} onSave={handleSave} />
      <ul>
        {books.map((b) => (
          <li key={b._id}>
            {b.title} par {b.author}
            <button onClick={() => setEditingBook(b)}>Éditer</button>
            <button onClick={() => handleDelete(b._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
