import { useCounter, useFecth } from "../hooks/index";
import { LoadingMessage, PokemonCard } from "../03-examples/index";

export const Layout = () => {

  // Cada vez que el valor del contador cambie, se va a ejecutar el useFecth
  const { counter, increment, decrement } = useCounter(1)
  const { data , hasError, isLoading } = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  
    
  return (
    <div>
      <h1>Informacion de pokemon</h1>
      <hr />
      { isLoading  && <LoadingMessage />}
      
      { data && 
        (<PokemonCard 
          key={data.id}
          id={counter} 
          name={data?.name} 
          sprites={[
            data?.sprites.front_default,
            data?.sprites.back_default,
            data?.sprites.front_shiny,
            data?.sprites.back_shiny,
          ]} 
        />)
      }
        <button className="btn btn-primary" onClick={() => counter > 1 && decrement()} >Anteriores</button>
        <button className="btn btn-primary" onClick={() => increment()} >Siguiente</button>

    </div>
  )
}
