import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "./store";
import { increment, decrement, incrementByNumber } from "./store/slices/counterSlice";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.count)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(incrementByNumber(5))}>+5</button>
    </>
  )
}

export default App