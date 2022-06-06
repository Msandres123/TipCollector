import { Col, Nav, Row } from 'react-bootstrap'
import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa'
import { useAppDispatch } from '../../app/store/configureStore'
import { signOut } from '../account/accountSlice';

export default function SignInMenu() {
  const dispatch = useAppDispatch();
  return (
  <Nav>
    <Row>
      <Col>  
       <Nav.Link className="text-primary"  onClick={() => dispatch(signOut())}>
        <FaSignOutAlt  size={30} />
        <p>Sign Out</p>
      </Nav.Link>
    </Col>
    <Col>
       <Nav.Link className="text-primary" href='/create-shift'>
        <FaUserEdit size={30} />
        <p>AddShift</p>
      </Nav.Link>
    </Col>
    </Row>
</Nav>
  )
}
