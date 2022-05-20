import { Form, Button } from 'react-bootstrap';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/configureStore';
import { singInUser } from './accountSlice';

export default function Login() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const {register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
    mode: "all"
  })

  async function submitForm(data: FieldValues) {
   await dispatch(singInUser(data));
   history.push("/shift-collection")
    
  }
    
   
  return (
   <>
   <h3>Login</h3>
    <Form onSubmit={handleSubmit(submitForm)}>
      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" placeholder="User Name"   {...register('username')} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   {...register('password')} required/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isValid}>
        Sign In
      </Button>
      <Link to="/register">
     <h6>Don't have an account? Sign Up</h6>
   </Link>
    </Form>
    </>
  );
}
