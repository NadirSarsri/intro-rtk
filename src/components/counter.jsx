import { incremented, decremented, deleted } from "../features/countersSlice";
import { useDispatch } from "react-redux";

const Counter = ({ counter }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decremented(counter))}>-</button>
      <span>{counter.value}</span>
      <button onClick={() => dispatch(incremented(counter))}>+</button>
      <button onClick={() => dispatch(deleted(counter))}>Delete</button>
    </div>
  );
};

export default Counter;
