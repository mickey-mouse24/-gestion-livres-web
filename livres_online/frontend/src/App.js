import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/BookList';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div>
      {!loggedIn ? (
        <>
          <h2>Connexion</h2>
          <Login onLogin={() => setLoggedIn(true)} />
          <h2>Inscription</h2>
          <Register />
        </>
      ) : (
        <BookList />
      )}
    </div>
  );
}

export default App;
