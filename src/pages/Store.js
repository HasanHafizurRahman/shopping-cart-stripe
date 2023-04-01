import React from "react";
import { Col, Row } from "react-bootstrap";
import { productArray } from "../productStore";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <div>
      <h1>Welcome to the store .</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          {productArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Store;
