import { Container, ListGroup } from 'react-bootstrap';
import { Shift } from '../../app/models/shift';
import ShiftCard from './ShiftCard';

interface Props {
  shifts: Shift[];
}

export default function ShiftList({ shifts }: Props) {
  
  return (
    <Container fluid  style={{
        maxHeight: 500,
        minHeight: 250,
        overflow: 'auto',
        width: '20rem',
      }}>
       <ListGroup>
      {shifts.map((shift) => (
       <ShiftCard key={shift.id} shift={shift}/>
      ))}
    </ListGroup> 
    </Container>
    
  );
}
