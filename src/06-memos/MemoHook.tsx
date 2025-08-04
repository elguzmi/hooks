import {  useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"


const heavyStuff = ( iterationNumber=100 )=>{
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos... ')
    }

    return `${iterationNumber} iteracion realizadas`
} 

export const MemoHook = () => {
    const {counter, increment} = useCounter(100)
    const [ show  , setShow ] = useState(true)
    

    // Memo le dice a react memoriza el componente
  return (
    <>
        <h1> Counter  <Small  value={counter} />   </h1>
        <hr />

        <h4>{ heavyStuff(counter) }</h4>

        <button className="btn btn-primary" onClick={()=>increment(1)}>  Incrementar </button>
        <button className="btn btn-danger" onClick={()=>setShow(!show)}>
            Show/Hide { JSON.stringify(show)}
        </button>
    </>
  )
}

