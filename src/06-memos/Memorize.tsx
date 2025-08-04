import {  useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {
    const {counter, increment} = useCounter(10)
    const [ show  , setShow ] = useState(true)
    

    // Memo le dice a react memoriza el componente
  return (
    <>
        <h1>Counter  <Small  value={counter} />   </h1>
        <hr />

        <button className="btn btn-primary" onClick={()=>increment(1)}>  Incrementar </button>
        <button className="btn btn-danger" onClick={()=>setShow(!show)}>
            Show/Hide { JSON.stringify(show)}
        </button>
    </>
  )
}

