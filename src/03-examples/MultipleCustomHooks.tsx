import { useCounter, useFecth } from "../hooks/index";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

const MultipleCustomHooks = () => {

  // Cada vez que el valor del contador cambie, se va a ejecutar el useFecth
  const { counter, increment, decrement } = useCounter(1)
  const { data , hasError, isLoading } = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  
    
  return (
    <div>
      <h1>Informacion de pokemon</h1>
      <hr />
      { isLoading  && <LoadingMessage />}
      
      { data && <PokemonCard id={counter} name={data?.name} sprites={data?.sprites} />}


        <button className="btn btn-primary" onClick={() => counter > 1 && decrement()} >Anteriores</button>
        <button className="btn btn-primary" onClick={() => increment()} >Siguiente</button>

    </div>
  )
}

export default MultipleCustomHooks
