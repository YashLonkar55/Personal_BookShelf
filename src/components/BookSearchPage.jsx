// src/components/BookSearchPage.js
import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./BookSearchPage.css";

const BookSearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    // Call the search API after a short delay
    setTimeout(() => {
      if (value.trim() !== '') {
        searchBooks(value);
      } else {
        setResults([]);
      }
    }, 300); // Adjust the delay time as needed
  };

  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
      alert(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
          <Hero/>
      <div className="search-bar-container">
        <input type="text" placeholder="Search for books..." className='search-bar' value={query} onChange={handleChange} />
      </div>
      <div  className="loading">
      {loading && <p>Loading...</p>}
      </div>
      
      <div className="card-list">
        {results.map((book) => (
          <div key={book.key} className="card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? `Author: ${book.author_name.join(', ')}` : 'Author: Unknown'}</p>
            <div className="button-container">
              <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Link to="/bookshelf" className="button">Go to Bookshelf</Link>
      </div>
    </div>
  );
};

export default BookSearchPage;
