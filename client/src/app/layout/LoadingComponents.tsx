import {  Container, Spinner } from 'react-bootstrap';

export default function LoadingComponents() {
  return (
    <Container className="d-flex vh-100">
        <Spinner
        className="m-auto align-self-center"
        animation="border"
        role="status"
      >
      </Spinner>
    </Container>
  );
}
