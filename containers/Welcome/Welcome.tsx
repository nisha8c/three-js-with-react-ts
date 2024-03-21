import {Container, Stack} from "react-bootstrap";
import './Welcome.scss';
import {Footer, Header} from "../../components";

function Welcome() {
    console.log('Welcome component is being rendered');
    return (
        <Stack className={"welcome-main"}>
            <Header />
            <Container className={"my-4"}>
                <h1>Welcome</h1>
            </Container>
            <Footer />
        </Stack>
    );
}
export default Welcome;