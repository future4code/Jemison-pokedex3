import axios from "axios";
import { useState } from "react"
import GlobalStateContext from "./GlobalContext"
import useRequestData from "../Hooks/useRequestData";
import {URLBase} from '../Api/Api'

export function GlobalState(props){   

    //Requisições
 /*    const data = useRequestData(`${URLBase}/pokemon?limit=20&offset=0`)
 */
    //estados
    const [pokemon, setPokemon] = useState([]);
    const [details, setDetails] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [limit, setLimit] = useState(20);

   // requisição para lista 

    const getPokemonList = () => {
      axios
        .get(`${URLBase}pokemon?limit=${limit}`)
        .then((res) => {
          setPokemon(res.data.results);
        })
        .catch((error) => {
          console.log("não foi", error);
        });
    };
    

    //dados
    const estados ={
       pokemon,
       setPokedex,
       details,
       setDetails,
       pokedex,
       setPokemon,
       limit,
        setLimit   
    }
    const requisicao = {getPokemonList}

    return (
            <GlobalStateContext.Provider value={{estados , requisicao}}>
                {props.children}
            </GlobalStateContext.Provider>
            )
}
