import { ChangeEvent, useState } from "react"


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username:'ss',
    email:''
   });

  const {email, username} = formState;

  const onInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value)
    //setFormState({...formState , })
    //console.log(event.target.value , event.target.name)
  }
   
  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange} />

      <input type="email" className="form-control mt-2" placeholder="santiago@hotmail.com" name="email" value={email} />
    </>
  )
}