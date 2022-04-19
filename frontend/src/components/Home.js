import React from 'react'
import { Container, Carousel } from 'react-bootstrap';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Products from './Products';

export default function Home() {
    return (
        <>

            <Helmet>
                <title>Home page</title>
            </Helmet>

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=".././images/banner2.jpg"
                        alt="logo"
                    />
                    <Carousel.Caption>
                        <h3 style={{ textAlign: 'left', fontSize: '40px', fontWeight: '700', fontFamily: 'urbanist,sans-serif' }}>The Beauty Of Skin</h3>
                        <p style={{ textAlign: 'left', fontSize: '14px', fontWeight: '4', }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=".././images/banner3.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ textAlign: 'left', fontSize: '40px', fontWeight: '700', fontFamily: 'urbanist,sans-serif' }}>The Beauty Of Skin</h3>
                        <p style={{ textAlign: 'left', fontSize: '14px', fontWeight: '4', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=".././images/banner4.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ textAlign: 'left', fontSize: '40px', fontWeight: '700', fontFamily: 'urbanist,sans-serif' }}>The Beauty Of Skin</h3>
                        <p style={{ textAlign: 'left', fontSize: '14px', fontWeight: '4', }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container>
                <Products />
            </Container>
        </>
    )
}
