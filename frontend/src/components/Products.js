import React, { useState, useEffect, useReducer } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import Rating from './Rating';
import { Container, Row, Col, Badge, Card, Button, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';


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

export default function Products() {


    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        loading: false,
        err: '',
        product: []
    });


    useEffect(async () => {
        dispatch({ type: 'FETCH_REQUEST' })
        try {
            let product = await axios.get("/products");
            dispatch({ type: 'FETCH_SUCCESS', payload: product.data })
        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message })
        }
    }, [])

    return (
        <>
            <Container>

                <Helmet>
                    <title>Product Page</title>
                </Helmet>

                <Row className='mt-5'>
                    <h1 style={{ textAlign: 'center', fontWeight: '400', fontSize: '35px', fontFamily: 'urbanist,sans-serif' }}>Products</h1>
                    {loading ? <div className='loading'>
                        <Spinner animation="grow" variant="success" />
                    </div>
                        :
                        product.map((item) => (
                            <Col className='mt-5' lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={item.img} />

                                    <Card.Body>
                                        <Card.Title style={{ color: '#000', fontWeight: '700', fontSize: '16px', textAlign: 'center' }}>{item.price}$ </Card.Title>

                                        <Card.Title style={{ color: '#000', fontFamily: 'urbanist,sans-serif', textAlign: 'center', fontSize: '15px', transition: 'all .2s' }}>
                                            <Link to={`/products/${item.slug}`}>{item.name}</Link>
                                        </Card.Title>

                                        <Card.Text style={{ textAlign: 'center' }}>
                                            <Rating rating={item.rating} numberofrating={item.numberofrating} />

                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'center', color: '#878787', fontFamily: 'urbanist,sans-serif', textAlign: 'center', fontSize: '13px', transition: 'all .2s' }}>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body style={{ textAlign: 'center', marginTop: '-20px' }}>
                                        <Button style={{ background: 'rgb(7 80 30)', color: '#fff', fontWeight: '600', fontSize: '12px' }} size="sm" variant="light">Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    )

}