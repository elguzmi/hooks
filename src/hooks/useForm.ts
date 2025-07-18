import { ChangeEvent, useState } from "react";

export const useForm = ( initialForm : Record<string,string>) => {

    const [formState, setFormState] = useState(initialForm);

    //  const {email, username , password} = formState;

    const onInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
        // utiliza el name para cambiar el valor dinamicamente del objeto
        const {name , value} = event.target
        setFormState({
            ...formState , 
            [name]: value
            })
    }

    const onResetForm = ()=>{
        setFormState(initialForm)
    }


  return {
    ...formState,
    formState , onInputChange, onResetForm  
  }
}

export default useForm
