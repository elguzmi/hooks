import { useState } from "react"

const CounterApp = () => {
   const [ state , setCounter ] =  useState<{counter1:number,counter2:number, counter3:number}>({
        counter1: 10,
        counter2: 20,
        counter3: 30
   })
    return (
    <>
        <h1>Counter : { state.counter1 }</h1>
        <h1>Counter2 : { state.counter2 }</h1>
        <h1>Counter3 : { state.counter3 }</h1>
        <hr />
        <button className="btn btn-primary" onClick={()=> setCounter({...state, counter1:state.counter1+1 })}>+1</button>
    </>
  )
}

export default CounterApp
