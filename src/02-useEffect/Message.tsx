import { useEffect, useState } from "react"

const Message = () => {
    const [coords , setCoords] = useState({ x: 0 , y : 0})
    
    useEffect(()=>{
        

        const onMouseMove = ({x,y} :MouseEvent)=>{
            //const coords = {x,y}
            setCoords({x,y});
            console.log(x,y)
        }

        // se va acumulando porque crea un monton de listener cada qvez que se monta
        window.addEventListener('mousemove', onMouseMove );

        return()=>{
            // Es el unmounted del componente
            //console.log('message unMounted')
            window.removeEventListener('mousemove' , onMouseMove );
            // para eliminarlo se guarda en el espacio en memoria
            // se elimina el event listener que se almaceno en ese espacio en memoria
        }
    }, [])


  return (
    <>
        <strong> Usuario ya existe </strong>
        { JSON.stringify(coords) }
    </>
  )
}

export default Message
