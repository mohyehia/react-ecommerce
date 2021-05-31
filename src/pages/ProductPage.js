import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoaderComponent, MessageComponent, Rating } from "../components";
import { retrieveProductById } from "../redux/action/productAction";

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(retrieveProductById(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  }

  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.productName}</Breadcrumb.Item>
      </Breadcrumb>
      {
        loading ?
          (<LoaderComponent />) :
          error ?
            (<MessageComponent variant='danger'>{error}</MessageComponent>) :
            (<Row>
              <Col md={6}>
                <Image src={product.imageUrl} alt={product.productName} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.productName}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value={product.rating} numReviews={product.numberOfReviews} />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${product.productPrice}</ListGroup.Item>
                  <ListGroup.Item>Description: {product.productDescription}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price: </Col>
                        <Col>
                          <strong>${product.productPrice}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status: </Col>
                        <Col>
                          {product.stock?.inStock > 0 ? "In Stock" : "Out Of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {
                      product.countInStock > 0 &&
                      (
                        <ListGroup.Item>
                          <Row>
                            <Col>Qty</Col>
                            <Col>
                              <Form.Control as='select' value={qty} onChange={
                                (e) => setQty(e.target.value)}>
                                {
                                  [...Array(product.countInStock).keys()].map(
                                    x => (<option key={x + 1} value={x + 1}>{x + 1}</option>)
                                  )
                                }
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )
                    }
                    <ListGroup.Item>
                      <Row>
                        <button
                          onClick={addToCartHandler}
                          className="btn btn-block btn-dark"
                          type="button"
                          disabled={product.countInStock <= 0}
                        >
                          Add To Cart
                      </button>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>)}

    </Fragment>
  );
};

export { ProductPage };
