import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BookSearchPage from './components/BookSearchPage';
import PersonalBookshelfPage from './components/PersonalBookShelf';

function App() {
  const [bookshelf, setBookshelf] = useState([]);

  const addToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<BookSearchPage addToBookshelf={addToBookshelf} />}/>
        <Route exact path="/bookshelf" element={<PersonalBookshelfPage bookshelf={bookshelf} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
