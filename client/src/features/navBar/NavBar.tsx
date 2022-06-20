import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { useAppSelector } from '../../app/store/configureStore';
import NotSignedIn from './NotSignedIn';
import SignInMenu from './SignInMenu';

export default function NavBar() {
  const { user }: any = useAppSelector((state) => state.account);
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
