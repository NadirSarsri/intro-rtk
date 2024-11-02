import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/countersSlice";

import Counter from "./counter";

const Counters = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counters.counters);
  //   console.log(counters);
  return (
    <>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
        {counters.map((counter) => (
          <Counter key={counter.id} counter={counter} />
        ))}
      </div>
    </>
  );
};

export default Counters;
