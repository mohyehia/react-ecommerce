import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductComponent } from "../components";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/v1/products');
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <ProductComponent product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export { HomePage };
