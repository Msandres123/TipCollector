import React from 'react'
import { Nav, Row, Col } from 'react-bootstrap'
import { FaSignInAlt, FaUserEdit } from 'react-icons/fa'

export default function NotSignedIn() {
    
  return (
    <>
    <Nav className="ml-auto">
    <Row>
      <Col>
        <Nav.Link className="text-primary" href='/login'>
          <FaSignInAlt size={30} />
          <p>Login</p>
        </Nav.Link>
      </Col>
      <Col>
        <Nav.Link className="text-primary" href='/register'>
          <FaUserEdit size={30} />
          <p>SignUp</p>
        </Nav.Link>
      </Col>
    </Row>
  </Nav> 
    </>
  )
}
