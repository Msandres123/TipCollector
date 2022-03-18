import { Navbar, Container, Nav, Image, Row, Col } from 'react-bootstrap';
import { FaGlassCheers, FaSignInAlt, FaUserEdit } from 'react-icons/fa';

export default function NavBar() {
  return (
    <Navbar className="nav-bar" bg="dark" expand="lg">
      <Container>
        <Nav className="ml-auto">
          <Image src="/images/Grat-Culatore.png" width="90px" height="70px" />
        </Nav>
        <Nav className="ml-auto">
          <Row>
            <Col>
              <Nav.Link className="text-primary">
                <FaSignInAlt size={30} />
                <p>Login</p>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link className="text-primary">
                <FaUserEdit size={30} />
                <p>SignUp</p>
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Container>
    </Navbar>
  );
}
