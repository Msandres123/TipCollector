import { Navbar, Container, Nav, Image, Row, Col } from 'react-bootstrap';
import { FaGlassCheers, FaSignInAlt, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/store/configureStore';
import NotSignedIn from './NotSignedIn';
import SignInMenu from './SignInMenu';

export default function NavBar() {
  const { user }: any = useAppSelector((state) => state.account);
  console.log(user);
  return (
    <Navbar className="nav-bar" bg="dark" expand="lg">
      <Container>
        <Nav className="ml-auto">
          <Image src="/images/Grat-Culatore.png" width="90px" height="70px" />
        </Nav>
        {!user ? <NotSignedIn /> : <SignInMenu />}
      </Container>
    </Navbar>
  );
}
