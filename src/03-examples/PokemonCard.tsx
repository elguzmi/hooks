import { useLayoutEffect, useRef } from "react"

export const PokemonCard = ({id , name , sprites} : {id:number ,  name:string , sprites :string[] })=>{
  const h2Ref = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(()=>{
    console.log(h2Ref);
    if (h2Ref.current) {
      const { height, width } = h2Ref.current.getBoundingClientRect();
      console.log({ height ,  width});
    }
  })
  
  return(
    <section>
      <div className="card w-100" style={{width:'18rem'}} >
        <div className="row ">
          {
            sprites.map( (sprite,index) => (
              <div className="col-1" key={index}>
                <img src={sprite} className="card-img-top" alt={name}  height={100}/>
              </div>
            ))
          }
        </div>
        
        <div className="card-body">
          <h5 ref={h2Ref} className="card-title">{name} {id}</h5>
        </div>
      </div>
    </section>
  )
}