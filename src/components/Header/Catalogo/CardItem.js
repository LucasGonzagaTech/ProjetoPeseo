import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const CardItem = ({ title, imageSrc, text }) => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-secondary">Assistir Aula</Button>{' '}
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default CardItem;