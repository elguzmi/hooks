import { useEffect, useState } from "react"
import { ResponsePokemon } from "../interfaces/PokemonModel"

interface PokemonRes {
    data : ResponsePokemon|null
    isLoading: boolean
    hasError :boolean
    error: null |{ code: string , message :string }
}


export const useFecth = ( url :string ) => {
    const [state , setState] = useState<PokemonRes>({
        data : null ,
        isLoading : true , 
        hasError : false , 
        error: null
    })

    
    useEffect(()=>{
        getFetch();
    },[ url])

    const setLoadingState = ()=>{
        setState({ error : null ,hasError :false, isLoading: true , data : null})
    }

    const getFetch = async ()=>{

        setLoadingState();
        const response = await fetch(url)

        //SLEEP
        await new Promise((res)=> setTimeout(res,2000))

        if(!response.ok){
            setState({
                data : null,
                isLoading : false,
                hasError: true,
                error : {
                    code : `${response.status}`,
                    message : response.statusText
                }
            })
            return
        }
        // extraer el json
        const data = await response.json()
        console.log(data);
        setState({ error : null ,hasError :false, isLoading: false , data : data})

        // MANEJO DEL CACHE

    }
  
    return {
        data : state.data,
        isLoading : state.isLoading,
        hasError : state.hasError
    }
}

