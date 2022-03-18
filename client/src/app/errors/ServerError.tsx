import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';

export default function ServerError() {
  const history = useHistory();
  const { state } = useLocation<any>();
  return (
    <Container>
      {state?.error ? (
     <>
      <h5>{state.error.title || 'Internal Server Error'}</h5>
      <p>{state.error.detail || 'Internal Server Error'}</p>
       </>
      ) : (
        <h5>Server Error</h5>
      )
      }
      <Button onClick={() => history.push('/')}>Go Back to Home Page</Button>
    </Container>
  )
}
