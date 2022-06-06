import { Form, Button } from 'react-bootstrap';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './accountSlice';

export default function Login() {
  const history = useHistory();
  const location = useLocation<any>();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'all',
  });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      history.push(location.state?.from?.pathname || '/shift-collection');
    
    }
      catch (error) {
       console.log(error)
       toast.error("Could not recognize user or password")
    }
     
  }

  return (
    <>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit(submitForm)} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="username"
            placeholder="User Name"
            {...register('username')}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password')}
            required
          />
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
