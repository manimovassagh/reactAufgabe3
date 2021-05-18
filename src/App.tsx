// import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import { useState } from 'react';
import Book from './types/Book';


function App() {
  const [book, setBook] = useState<Book>()

  const showList = () => {
    setBook(undefined)
  }

  const showDetail = (book: Book) => {
    console.log(book)
    setBook(book)
  }
  return (
    <div className="ui container">
      {book ?
        <BookDetails showList={showList} book={book} />
        :
        <BookList showDetail={showDetail} />
      }
    </div>
  );
}

export default App;
