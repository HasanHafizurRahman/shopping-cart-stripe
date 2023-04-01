import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.details}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
