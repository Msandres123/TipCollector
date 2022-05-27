import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import agent from '../../app/api/agent';

export default function Register() {
  const history = useHistory();
  const [validationErrors, setValidationErrors] = useState([]);
  const {register, handleSubmit, setError, formState: {isSubmitting, errors, isValid}} = useForm({
    mode: "all"
  });

  function handleApiErrors(errors: any) {
    if (errors) {
        errors.forEach((error: string) => {
            if (error.includes('Password')) {
                setError('password', { message: error })
            } else if (error.includes('Email')) {
                setError('email', { message: error })
            } else if (error.includes('Username')) {
                setError('username', { message: error })
            }
        });
    }
    console.log(errors)
}

    
   
  return (
   <>
   <h3>Sing Up</h3>
    <Form onSubmit={handleSubmit((data) => agent.Account.register(data)
    .then(() => {
                toast.success('Registration successful - you can now login')
                history.push('/login')
            })
            .catch(error => handleApiErrors(error)))}>
      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" placeholder="User Name"   {...register('username')} required/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="Email"   {...register('email')} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   {...register('password')} required/>
      </Form.Group>
      {validationErrors.length > 0 && 
          <Alert variant='danger'>
            <h2>Validation Errors</h2>
              {validationErrors.map(error => (
                  <p>{error}</p>
              ))}
            </Alert>
        }
      <Button variant="primary" type="submit" disabled={!isValid}>
        Register
      </Button>
      <Link to="/login">
     <h6>Already have an account? Sign In</h6>
   </Link>
    </Form>
    </>
  );
}


  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>