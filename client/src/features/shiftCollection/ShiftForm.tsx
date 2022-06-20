import { Form, Button } from 'react-bootstrap';
import { FieldValues, useForm } from 'react-hook-form';
import agent from '../../app/api/agent';
import { Shift } from '../../app/models/shift';
import { setShift } from '../shiftCollection/collectionSlice'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export default function ShiftForm() {
  const history = useHistory()
  const { user }: any = useAppSelector((state) => state.account);
  const { register, handleSubmit, setValue } = useForm({});
  const [creditCardTips, setCreditCardTips] = useState<number>(0);
  const [cashTips, setCashTips] = useState<number>(0);
  const today = new Date().toISOString().split("T")[0]

  const dispatch = useAppDispatch();

async function handleSubmitData(data: FieldValues) {
  try {
    let response: Shift;
    response = await agent.User.createShift(data);
    dispatch(setShift(response))
    history.push('/shift-collection')
    
  } catch(error) {
      console.log(error)
  }
}  

console.log(today)

  return (
      <>
      <Form onSubmit={handleSubmit((handleSubmitData))}>
        <Form.Group controlId="shiftDate">
          <Form.Label>Select Day of Shift</Form.Label>
          <Form.Control type='date' {...register("shiftDay")} max={today} required/>
        </Form.Group>
        <Form.Group controlId="cashTips">
          <Form.Label>Cash Tips</Form.Label>
          <Form.Control type="number"  onChange={(e) => setCashTips(parseInt(e.target.value) * 100)} required/>
        </Form.Group>
        <Form.Group controlId="creditTips">
          <Form.Label>Credit Card Tips Tips</Form.Label>
          <Form.Control type="number"  onChange={(e) => setCreditCardTips(parseInt(e.target.value) * 100)} required/>
        </Form.Group>
        <Form.Group controlId="shiftLength">
          <Form.Label>Length of Shift</Form.Label>
          <Form.Control type="number" {...register("shiftLength")} required/>
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit" onClick={() => {
          setValue('user', user?.username, { shouldValidate: true })
          setValue('userId', user?.id, { shouldValidate: true })
          setValue('cashTips', cashTips, { shouldValidate: true })
          setValue('creditCardTips', creditCardTips, { shouldValidate: true })
        }}>
          Submit
        </Button>
      </Form>
      </>

  );
}

