import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore"
import { decrement, increment} from "./counterSlice"

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const {data, title} = useAppSelector(state => state.counter)
  return (
    <>
    <h2>{title}</h2>
    <h5>data is: {data}</h5>
      <Button onClick={() => dispatch(increment(1))}>Increase by 1</Button>
      <Button onClick={() => dispatch(decrement(1))}>Decrease by 1</Button>
      <Button onClick={() => dispatch(increment(5))}>Increase by 5</Button>
    </>
  )
}
