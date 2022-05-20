import React from 'react'
import { Nav, Row, Col, NavDropdown, Button } from 'react-bootstrap'
import { FaSignInAlt, FaSignOutAlt, FaUserEdit } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { signOut } from '../account/accountSlice';

export default function SignInMenu() {
  const dispatch = useAppDispatch();
  return (
    <> 
  <Nav className="ml-auto">
  <Row>
    <Col >
      <NavDropdown.Item className="text-primary" onClick={() => dispatch(signOut())}>
        <FaSignOutAlt  size={30} />
        <p>Sign Out</p>
      </NavDropdown.Item>
    </Col>
    <Col>
      <Nav.Link className="text-primary" href='/register'>
        <FaUserEdit size={30} />
        <p>Add Shift</p>
      </Nav.Link>
    </Col>
  </Row>
</Nav>
    </>
  )
}
