import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "./RatingComponent";

const ProductComponent = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.productId}`}>
        <Card.Img src={product.imageUrl} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.productId}`}>
          <Card.Title as="div">
            <strong>{product.productName}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} numReviews={product.numberOfReviews} />
        </Card.Text>
        <Card.Text as="h3">${product.productPrice}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export { ProductComponent };
