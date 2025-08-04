import { memo } from "react"

// le estamod diciendo a react que memorice este componente
// UNICAMENTE CUANDO CAMBIEN LAS PROPS SE VA A VOLVER A REDNERIZAR


// METODO DE REACT
export const Small = memo(({value}: {value:number}) => {

    console.log('Me volvi a generar ')

  return (
    <>
        <small>{value}</small>
    </>
  )
})
