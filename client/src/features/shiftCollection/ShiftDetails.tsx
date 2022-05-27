import { useEffect } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { FieldValues, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import NotFound from '../../app/errors/NotFound';
import LoadingComponents from '../../app/layout/LoadingComponents';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { currencyFormat, dateFormat } from '../../app/util/util';
import { fetchShiftAsync, setShift, shiftSelectors } from './collectionSlice';
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

  useEffect(() => {
    if (!shift) dispatch(fetchShiftAsync(parseInt(id)))
  }, [shift, id, dispatch])


  if (status.includes('pending')) return <LoadingComponents/>

  if (!shift) return <NotFound/>

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Shift;
      response = await agent.User.updateShift(data);
      dispatch(setShift(response))
      console.log(data)
      history.push('/shift-collection')
      
    } catch(error) {
        console.log(error)
        console.log(data)
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
      <Form.Control type="number" {...register("cashTips")} required defaultValue={shift.cashTips}/>
    </Form.Group>
    <Form.Group controlId="creditTips">
      <Form.Label>Credit Card Tips Tips</Form.Label>
      <Form.Control type="number" {...register("creditCardTips")} required defaultValue={shift.creditCardTips}/>
    </Form.Group>
    <Form.Group controlId="shiftLength">
      <Form.Label>Length of Shift</Form.Label>
      <Form.Control type="number" {...register("shiftLength")} required defaultValue={shift.shiftLength}/>
    </Form.Group>
    <Button className="mt-3" variant="primary" type="submit" 
    onClick={() => {
      setValue('user', user?.username, { shouldValidate: true })
      setValue('Id', shift.id, { shouldValidate: true })
    }}
    >
      Submit
    </Button>
  </Form>
  )
}
