import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Shift } from '../../app/models/shift'
import { currencyFormat, dateFormat } from '../../app/util/util'

interface Props {
    shift: Shift
}

export default function ShiftCard({ shift }: Props) {
  return (
    <Card className="mx-auto mb-2" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Shift: {dateFormat(shift.shiftDay)}</Card.Title>
      <Card.Text>Cash Tips: {currencyFormat(shift.cashTips)}</Card.Text>
      <Card.Text>
        Credit Card Tips: {currencyFormat(shift.creditCardTips)}
      </Card.Text>
      <Card.Text>Total Tips: {currencyFormat(shift.totalTips)}</Card.Text>
      <Card.Text>Hours Worked: {shift.shiftLength}</Card.Text>
      <Card.Text>
        Tips Per Hour: {currencyFormat(shift.totalTips / shift.shiftLength)}{' '}
      </Card.Text>
      <Link to={`/shift-collection/${shift.id}`}>
      <Button  variant='primary'  >Edit Shift</Button>
        </Link>
    </Card.Body>
  </Card>
  )
}
