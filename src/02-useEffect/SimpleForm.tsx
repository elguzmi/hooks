import { ChangeEvent, useEffect, useState } from "react"
import Message from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username:'ss',
    email:''
   });

  const {email, username} = formState;

  const onInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
    // utiliza el name para cambiar el valor dinamicamente del objeto
    const {name , value} = event.target
    setFormState({
      ...formState , 
      [name]: value
    })
  }

  // Es mejor tener separados en metodos los use effect
  // use efect es utilizado para disparar eventos segundarios
  useEffect(()=>{
    // cada ves que cambia el estado se va a llamar cuando el simple form se vuelve a redibujar si no se el coloca una dependencia
    //console.log('form state change') 
  }, [ formState] );

  useEffect(()=>{
    console.log('email change') 
  }, [ formState.email] );

  useEffect(()=>{
    
    // se utiliza el reutrun para limpiar o cancelar observables
    return ()=>{

    } 
  })
   
  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange} />

      <input type="email" className="form-control mt-2" placeholder="santiago@hotmail.com" name="email" value={email} onChange={onInputChange}  />

      {
          username == 'trading2' && <Message/>
      } 
      
    </>
  )
}