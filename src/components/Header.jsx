import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
    return (
    
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand>
                <h1>{props.title}</h1>
            </Navbar.Brand>
        </Container>
    </Navbar>
    )
}

export default Header;