import { useState } from "react"

export const useCounter = ( initialValue:number = 10 )=>{
  
  const [counter, setCounter] = useState(initialValue);
   
  const increment = ( value:number = 1):void=>{
    setCounter(counter+ value)
  }
  const decrement = (value:number = 1):void=>{
    console.log(value ,'t');
    if(counter === 0) return
    setCounter(counter - value)
  }
  const reset = ():void=>{
    setCounter(initialValue)
  }
  

  return {
    counter,
    increment,
    decrement,
    reset
  }
}