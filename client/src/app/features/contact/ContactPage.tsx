import { decrement, increment } from "./counterReducers"
import { Button, ButtonGroup, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function ContactPage() {
  //const data = useSelector((state: CounterState) => state.data)
  //const dispatch = useDispatch();
  const { data } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">
        Contact page
      </Typography>
      <Typography variant="body1">
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))}>Decrement</Button>
        <Button onClick={() => dispatch(increment(1))}>Increment</Button>
        <Button onClick={() => dispatch(decrement(5))}>Decrement by 5</Button>
        <Button onClick={() => dispatch(increment(5))}>Increment by 5</Button>
      </ButtonGroup>
    </>
  )
}