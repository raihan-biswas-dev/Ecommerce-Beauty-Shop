import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Rating from './Rating';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, ListGroup, Badge, Button, Spinner, NavItem } from 'react-bootstrap'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';




function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, product: action.payload };
        case 'FETCH_FAIL':
            return { ...state, loading: false, err: action.payload };
        default:
            return state
    }
}





export default function ProductDetails() {



    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        loading: false,
        err: '',
        product: {}
    });


    useEffect(async () => {
        dispatch({ type: 'FETCH_REQUEST' })
        try {
            let product = await axios.get(`/products/${params.slug}`);
            console.log(product.data)
            dispatch({ type: 'FETCH_SUCCESS', payload: product.data})
        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message })
        }
    }, [])



    let params = useParams();

    return (
        <>
            {/* <h2>{params.slug}</h2> */}

            <Container>
                <Helmet>
                    <title>{product.name}</title>
                </Helmet>
                <Row>
                    <Col lg={5}>
                        {/* <img src={product.img} width='380px' alt={product.name} /> */}
                        <InnerImageZoom src={product.img} zoomSrc={product.img} zoomScale={1.5} height='400px' alt={product.name} />
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h2>{product.name}</h2>
                                    <div>
                                        <h4 style={{ display: 'inline' }}>{product.price}$</h4>
                                        <h6 style={{ display: 'inline', marginLeft: '25px' }}>
                                            Stock {product.instock > 0

                                                ?
                                                <Badge Badge bg="success">
                                                    {product.instock}
                                                </Badge>
                                                :
                                                <Badge bg="danger">
                                                    {product.instock}
                                                </Badge>

                                            }
                                        </h6>
                                    </div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating rating={product.rating} numberofrating={product.numberofrating} />
                                </ListGroup.Item>
                                <ListGroup.Item>{product.description}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>Price</h3>
                                <h4>{product.price}$</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Button className='addToCart' variant="primary">Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
