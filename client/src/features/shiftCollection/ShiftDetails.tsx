import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom'
import NotFound from '../../app/errors/NotFound';
import LoadingComponents from '../../app/layout/LoadingComponents';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchShiftAsync, removeShift, setShift, shiftSelectors } from './collectionSlice';
import { Shift } from '../../app/models/shift';
import agent from '../../app/api/agent';


export default function ShiftDetails() {
  const history = useHistory()
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const { user }: any = useAppSelector((state) => state.account);
  const shift = useAppSelector(state => shiftSelectors.selectById(state, id));
  const {status} = useAppSelector(state => state.collection)
  const { register, handleSubmit, setValue } = useForm({});
  const [loading, setLoading] = useState(false);
  const [creditCardTips, setCreditCardTips] = useState<number>(shift!.creditCardTips);
  const [cashTips, setCashTips] = useState<number>(shift!.cashTips);

  useEffect(() => {
    if (!shift) dispatch(fetchShiftAsync(parseInt(id)))
  }, [shift, id, dispatch])

  async function handleDeleteShift(id: number) {
    setLoading(true)
    await agent.User.deleteShift(id)
    .then(() => dispatch(removeShift(id)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    history.push('/shift-collection')
  }


  if (status.includes('pending')) return <LoadingComponents/>

  if (!shift) return <NotFound/>

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Shift;
      response = await agent.User.updateShift(data);
      dispatch(setShift(response))
      history.push('/shift-collection')
      
    } catch(error) {
        console.log(error)
    }
  }  



  return (
    <Form onSubmit={handleSubmit((handleSubmitData))}>
    <Form.Group controlId="shiftDate">
      <Form.Label>Select Day of Shift</Form.Label>
      <Form.Control type="date" {...register("shiftDay")} required defaultValue={shift.shiftDay}/>
    </Form.Group>
    <Form.Group controlId="cashTips">
      <Form.Label>Cash Tips</Form.Label>
      <Form.Control type="number" onChange={(e) => setCashTips(parseInt(e.target.value) * 100)} required defaultValue={cashTips/100}/>
    </Form.Group>
    <Form.Group controlId="creditTips">
      <Form.Label>Credit Card Tips Tips</Form.Label>
      <Form.Control type="number" onChange={(e) => setCreditCardTips(parseInt(e.target.value) * 100)} required defaultValue={creditCardTips/100}/>
    </Form.Group>
    <Form.Group controlId="shiftLength">
      <Form.Label>Length of Shift</Form.Label>
      <Form.Control type="number" {...register("shiftLength")} required defaultValue={shift.shiftLength}/>
    </Form.Group>
    <Button className="mt-3" variant="primary" type="submit" 
    onClick={() => {
      setValue('user', user?.username, { shouldValidate: true })
      setValue('Id', shift.id, { shouldValidate: true })
      setValue('cashTips', cashTips, { shouldValidate: true })
      setValue('creditCardTips', creditCardTips, { shouldValidate: true })
    }}
    >
      Submit
    </Button> {" "}
    <Button className="mt-3"  variant="red" type='submit'
    onClick={() =>handleDeleteShift(shift.id) }
    >
      Delete Shift
    </Button>
    <Link to="/shift-collection"><p>View Your Shifts</p></Link>
  </Form>
  
  )
}
