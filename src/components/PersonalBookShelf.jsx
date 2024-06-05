// PersonalBookshelfPage.js
import React from 'react';

const PersonalBookshelfPage = ({ bookshelf }) => {
  return (
    <div>
      <h2>My Bookshelf</h2>
      <div className="card-list">
        {bookshelf.map((book, index) => (
          <div key={index} className="card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? `Author: ${book.author_name.join(', ')}` : 'Author: Unknown'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalBookshelfPage;
