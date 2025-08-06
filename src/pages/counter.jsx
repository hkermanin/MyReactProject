import { useCounter } from "../hooks/useCounter";

function Counter(){
  const {count, increment, decrement, reset} = useCounter();
  return(
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>)
}

export default Counter;