import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Carousel from '../components/Carousel';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon1 from '../Assets/Icon1.png';
import Icon2 from '../Assets/Icon2.png';
import Icon3 from '../Assets/Icon3.png';
import Icon4 from '../Assets/Icon4.png';

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <br></br>
            <Container>
                <Row>
                    <Col xs="3">
                        <InfoCard 
                            title="SEARCH"
                            icon={Icon1}
                            text='Mayfair IT Consultancy will act as intermediate...'
                        />
                    </Col>
                    <Col xs="3">
                        <InfoCard 
                            title="APPLY"
                            icon={Icon2}
                            text='Applying is quick and simple - find the form below and fill it ...'
                        />
                    </Col>
                    <Col xs="3">
                        <InfoCard 
                            title="INTERVIEW"
                            icon={Icon3}
                            text='You will receive support from us to help you with the interview...'
                        />
                    </Col>
                    <Col xs="3">
                        <InfoCard 
                            title="RECRUIT"
                            icon={Icon4}
                            text='Once you are chosen as the candidate, we shall help you...'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs='5'></Col>
                    <Col xs='2'>
                        <Button>FORM</Button>
                    </Col>
                    <Col xs='5'></Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default LandingPage;