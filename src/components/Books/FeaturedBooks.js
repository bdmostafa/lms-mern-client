import React from 'react';
import { CardDeck } from 'react-bootstrap';
import books from '../../FakeData/Book';
import BookCard from './BookCard';
import './Books.css';

const FeaturedBooks = () => {
    return (
        <>
        <h2 style={{textAlign: "center"}}>Featured Books</h2>
        <CardDeck className="books__area">
        {
          books.map(book => {
            return (
              <BookCard key={book.id} book={book}> </BookCard>
            )
          })
        }
        
      </CardDeck>
      </>
    );
};

export default FeaturedBooks;