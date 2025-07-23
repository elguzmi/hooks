import { useFecth } from "../hooks/index";
const MultipleCustomHooks = () => {

    const { data , isLoading } = useFecth('https://pokeapi.co/api/v2/pokemon/4')
  
    
  return (
    <div>
      <h1>Informacion de pokemon</h1>
      <hr />
      <h1>
        { isLoading  && 'Cargando' }

      </h1>
        <h2>
            { data?.name }
        </h2>

        <button className="btn btn-primary">Anteriores</button>
        <button className="btn btn-primary">Siguiente</button>

    </div>
  )
}

export default MultipleCustomHooks
