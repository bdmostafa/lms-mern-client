import React from "react";
import { Card } from "react-bootstrap";
import './Books.css';

const BookCard = ({ book: { name, id, author, image } }) => {
  const handleEvent = () => {
    // setLoggedInUser({...loggedInUser, event: props.event})
    // history.push(`/register/${title}`);
  };

  return (
    <div onClick={handleEvent} className="bookCard col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="bookCard__body">
        <Card.Img variant="top" src={image} />
        <h4
          className="bookCard__text"
        >
          Book Name: {name}
          Book ID: {id}
          Author: {author}
        </h4>
      </Card>
    </div>
  );
};

export default BookCard;
