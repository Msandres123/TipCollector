import React, { useState } from 'react'
import { Alert, Button, ButtonGroup, Container, ListGroupItem } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons';
import agent from '../../app/api/agent'

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  function getValidationError() {
    agent.TestErrors.getValidationError()
    .then(() => console.log('should not see this'))
    .catch(error => setValidationErrors(error));
}

  return (
    <Container>
        <h2>Errors for testing purposes</h2>
        <ButtonGroup className='d-flex'>
            <Button onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 Error</Button>
            <Button onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 Error</Button>
            <Button onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
            <Button onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
            <Button onClick={getValidationError}>Test Validation Error</Button>
        </ButtonGroup>
        {validationErrors.length > 0 && 
          <Alert variant='danger'>
            <h2>Validation Errors</h2>
              {validationErrors.map(error => (
                  <p>{error}</p>
              ))}
            </Alert>
        }
    </Container>
  )
}
