##Live Preview - https://personal-bookshelf-website.netlify.app/

# Personal Bookshelf Application

This is a Personal Bookshelf application that allows users to search for books and save them to their personal bookshelf. The application uses the OpenLibrary API for book search and localStorage to persist the bookshelf data.

## Features

- Search for books using the OpenLibrary API.
- Add books to a personal bookshelf.
- View the personal bookshelf on a separate page.
- Persist bookshelf data using localStorage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm. You can download them from [Node.js official website](https://nodejs.org/).

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/personal-bookshelf.git


2. **Navigate to the project directory:**

   ```bash
   cd personal-bookshelf
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running the Application

To run the application on your local machine, follow these steps:

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and go to:**

   ```
   http://localhost:3000
   ```

   The application should now be running, and you can search for books and add them to your personal bookshelf.

## Project Structure

The project structure is as follows:

```
personal-bookshelf/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── BookSearchPage.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── PersonalBookShelf.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Additional Information

- The `BookSearchPage` component handles book search and adding books to the bookshelf.
- The `PersonalBookShelf` component displays the books saved in the personal bookshelf.
- The bookshelf data is stored in `localStorage` to persist across page refreshes.
