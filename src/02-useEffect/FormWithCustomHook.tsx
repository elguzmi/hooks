import useForm from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState ,onInputChange , onResetForm , userName , email, password}  = useForm({
    userName : '',
    email: '',
    password: ''
  })

  //const {userName , email , password} = formState


  // REACT HOOK FORM

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />

      <input type="text" className="form-control" placeholder="userName" name="userName" value={userName} onChange={onInputChange} />

      <input type="email" className="form-control mt-2" placeholder="santiago@hotmail.com" name="email" value={email} onChange={onInputChange}  />

      <input type="password" className="form-control mt-2" placeholder="password" name="password" value={password} onChange={onInputChange}  />

      <button className="btn btn-primary mt-2" onClick={onResetForm} >Borrar</button>

    </>
  )
}