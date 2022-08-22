import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Mato Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Historia</Nav.Link>
                        <NavDropdown title="Consolas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PlayStation 5</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Xbox Series X/S
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Nintendo Switch</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Garantia
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;