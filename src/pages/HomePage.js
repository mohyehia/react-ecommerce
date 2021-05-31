import React, { Fragment, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LoaderComponent, MessageComponent, ProductComponent } from "../components";
import { retrieveProducts } from "../redux/action/productAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(retrieveProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      {
        loading ? (<LoaderComponent />) : error ? (<MessageComponent variant='danger'>{error}</MessageComponent>) :
          (<Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product.productId}>
                <ProductComponent product={product} />
              </Col>
            ))}
          </Row>)
      }
    </Fragment>
  );
};

export { HomePage };
