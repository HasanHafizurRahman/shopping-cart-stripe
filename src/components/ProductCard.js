import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
