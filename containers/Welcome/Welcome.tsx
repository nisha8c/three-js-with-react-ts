import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import './Welcome.scss';
import {Link} from "react-router-dom";
import healthyFood1 from '../../Images/healthy-pumpkin-risotto-lunch.jpg';

function Welcome() {
    console.log('Welcome component is being rendered');
    return (
        <Stack className={"welcome-main"}>
            <Container className={"white-font-color"}>
                <Row className={"row1"}>
                    <Col xs={12} md={8}>
                        <h1 className={"white-font-color"}>
                            Delicious Catering & Food Distribution Services
                        </h1>
                        <h6 className={"white-font-color"}>
                            Explore our wide range of food options for any event or occasion!
                        </h6>
                        <Link to={'/weekly-menu'}><Button className={"explore-menu-link"}>Explore Menu</Button></Link>
                    </Col>
                    <Col xs={6} md={4} className={"image-column"}>
                        <img
                            src={healthyFood1}
                            alt={"healthy-food1"}/>
                    </Col>
                </Row>
            </Container>
        </Stack>
    );
}

export default Welcome;