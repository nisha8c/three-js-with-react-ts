import {Button, Container, Stack} from "react-bootstrap";
import './Welcome.scss';
import {Footer, Header} from "../../components";
import {Link} from "react-router-dom";

function Welcome() {
    console.log('Welcome component is being rendered');
    return (
        <Stack className={"welcome-main"}>
            <Header />
            <Container className={"my-4"}>
                <h1 className={"white-font-color"}>Welcome</h1>
                <Link to={'/menu'}><Button>Explore Menu</Button></Link>
            </Container>
            <Footer />
        </Stack>
    );
}
export default Welcome;