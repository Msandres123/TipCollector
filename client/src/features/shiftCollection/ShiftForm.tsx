import { Form, Button } from 'react-bootstrap';
import { FieldValues, useForm } from 'react-hook-form';
import agent from '../../app/api/agent';
import { Shift } from '../../app/models/shift';
import { setShift } from '../shiftCollection/collectionSlice'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { useHistory } from 'react-router-dom';

export default function ShiftForm() {
  const history = useHistory()
  const { user }: any = useAppSelector((state) => state.account);
  const { register, handleSubmit, setValue } = useForm({});

  const dispatch = useAppDispatch()

async function handleSubmitData(data: FieldValues) {
  try {
    let response: Shift;
    response = await agent.User.createShift(data);
    dispatch(setShift(response))
    console.log(data)
    history.push('/shift-collection')
    
  } catch(error) {
      console.log(error)
      console.log(data)
  }
}  


  return (
      <>
      <Form onSubmit={handleSubmit((handleSubmitData))}>
        <Form.Group controlId="shiftDate">
          <Form.Label>Select Day of Shift</Form.Label>
          <Form.Control type="date" {...register("shiftDay")} required/>
        </Form.Group>
        <Form.Group controlId="cashTips">
          <Form.Label>Cash Tips</Form.Label>
          <Form.Control type="number" {...register("cashTips")} required/>
        </Form.Group>
        <Form.Group controlId="creditTips">
          <Form.Label>Credit Card Tips Tips</Form.Label>
          <Form.Control type="number" {...register("creditCardTips")} required/>
        </Form.Group>
        <Form.Group controlId="shiftLength">
          <Form.Label>Length of Shift</Form.Label>
          <Form.Control type="number" {...register("shiftLength")} required/>
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit" onClick={() => {
          setValue('user', user?.username, { shouldValidate: true })
          setValue('userId', user?.id, { shouldValidate: true })
        }}>
          Submit
        </Button>
      </Form>
      </>

  );
}

