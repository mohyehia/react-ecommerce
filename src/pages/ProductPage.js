import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoaderComponent, MessageComponent, Rating } from "../components";
import { retrieveProductById } from "../redux/action/productAction";

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(retrieveProductById(match.params.id));
  }, [dispatch, match])
  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
      {
        loading ?
          (<LoaderComponent />) :
          error ?
            (<MessageComponent variant='danger'>{error}</MessageComponent>) :
            (<Row>
              <Col md={6}>
                <Image src={product.imageUrl} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value={product.rating} numReviews={product.numReviews} />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                  <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price: </Col>
                        <Col>
                          <strong>${product.price}</strong>
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
                    <ListGroup.Item>
                      <Row>
                        <button
                          className="btn btn-block btn-dark"
                          type="button"
                          disabled={product.stock?.inStock <= 0}
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
