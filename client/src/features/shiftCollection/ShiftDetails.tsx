import { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import NotFound from '../../app/errors/NotFound';
import LoadingComponents from '../../app/layout/LoadingComponents';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { currencyFormat } from '../../app/util/util';
import { fetchShiftAsync, shiftSelectors } from './collectionSlice';


export default function ShiftDetails() {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const shift = useAppSelector(state => shiftSelectors.selectById(state, id));
  const {status} = useAppSelector(state => state.collection)

  useEffect(() => {
    if (!shift) dispatch(fetchShiftAsync(parseInt(id)))
  }, [shift, id, dispatch])


  if (status.includes('pending')) return <LoadingComponents/>

  if (!shift) return <NotFound/>

  return (

    <Card className="mx-auto mb-2" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Shift: {shift.shiftDay}</Card.Title>
      <Card.Text>Cash Tips: {currencyFormat(shift.cashTips)}</Card.Text>
      <Card.Text>
        Credit Card Tips: {currencyFormat(shift.creditCardTips)}
      </Card.Text>
      <Card.Text>Total Tips: {currencyFormat(shift.totalTips)}</Card.Text>
      <Card.Text>Hours Worked: {shift.shiftLength}</Card.Text>
      <Card.Text>
        Hourly Wage: {currencyFormat(shift.totalTips / shift.shiftLength)}{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
