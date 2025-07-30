import { Sprites } from "../interfaces/PokemonModel"

export const PokemonCard = ({id , name , sprites} : {id:number ,  name:string , sprites :Sprites})=>{
  
  return(
    <section>
      <div className="card" style={{width:'18rem'}} >
        <img src={sprites.front_default} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name} {id}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          
        </div>
      </div>
    </section>
  )
}