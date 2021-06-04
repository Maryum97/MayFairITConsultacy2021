import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col xs="12">
                        <Carousel />
                    </Col>
                    <Col xs="6">
                        <InfoCard />
                    </Col>
                    <Col xs="6">
                        <InfoCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;