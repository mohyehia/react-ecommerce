import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductComponent } from "../components";
import products from "../products";

const HomePage = () => {
  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <ProductComponent product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export { HomePage };
