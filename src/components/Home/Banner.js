import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';
import bannerImg from '../../images/banner.png'

const Banner = () => {
    return (
        <Container className="banner">
            <Row>
                <Col md={5} className="mt-5">
                    <h2 className="banner__heading mb-3">
                        Let’s Grow Your
                        <br />
                        Knowledge To The
                        <br />
                        Next Level
                    </h2>
                    <p> LMS gives access to and manages all the books and resources in your cloud library </p>
                    <Button size="sm" variant="dark" className="btn-brand mt-3">Let's Take A Book</Button>
                </Col>
                <Col md={7}>
                    <Image src={bannerImg} className="banner__Img d-none d-md-block" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;