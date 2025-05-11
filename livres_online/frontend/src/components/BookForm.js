import React, { useState, useEffect } from 'react';

export default function BookForm({ book, onSave }) {
  const [form, setForm] = useState({ title: '', author: '', description: '', publishedDate: '' });

  useEffect(() => {
    if (book) setForm(book);
  }, [book]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ title: '', author: '', description: '', publishedDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" required />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Auteur" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="publishedDate" type="date" value={form.publishedDate?.slice(0,10)} onChange={handleChange} />
      <button type="submit">{book ? 'Mettre à jour' : 'Ajouter'}</button>
    </form>
  );
}
