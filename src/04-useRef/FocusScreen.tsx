import { useRef } from "react"

export const FocusScreen = () => {

    //el ref va a enviar el html element y aparte permite que no se renderice el componente cada que cambie el valor

    const inputRef =  useRef<HTMLInputElement>(null);

    const onClick = ()=>{
        //document.querySelector('input')?.select();
        console.log(inputRef.current?.select())
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input ref={inputRef} type="text" name="" id="" className="form-control" placeholder="nombre" />
            <button className="btn btn-primary mt-2" onClick={onClick} >Focus to botton</button>
        </>
    )
}
