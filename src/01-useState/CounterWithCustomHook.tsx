import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {
  
  const { counter, increment , decrement,reset } = useCounter()

  // el primer evento que recibe es el evento del click
  return (
    <>
        <h1>Counter with hook {counter} </h1>
        <hr />
        <button className="btn btn-primary" onClick={(event:Event)=>increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>reset</button>
        <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
