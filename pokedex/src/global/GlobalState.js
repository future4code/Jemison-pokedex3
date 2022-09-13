import axios from "axios";
import { useState, useEffect } from "react"
import GlobalStateContext from "./GlobalContext"
import {URLBase} from '../Api/Api'

export function GlobalState(props){   

  
    //ESTADOS INICIAS

    const [pokemon, setPokemon] = useState([]);
    const [details, setDetails] = useState();
    const [pokedex, setPokedex] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
      const localPokedex = localStorage.getItem('pokedex')
      localPokedex && 
      setPokedex(JSON.parse(localPokedex))
    }, [])

    useEffect(() => {
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }, [pokedex])


     // "FUNCÃO QUE ADICIONA POKEMONS "
     
    const addPokedex = (pokemon) => {
      const isPokemonEmPokedex = pokedex.some((pokemonInPokedex) => {
        return pokemonInPokedex.name === pokemon.name;
      });
  
      if (!isPokemonEmPokedex) {
        setPokedex([...pokedex, pokemon]);
        alert("Pokemon Adicionado com Sucesso")        // criar um alert diferente 
      }
    };
 

    // "FUNCÃO QUE REMOVE POKEMONS "

    const removePokedex = (pokemon) => {
      const newPokedex = pokedex.filter((pokemonInPokedex) => {
        return pokemonInPokedex.name !== pokemon.name;
      });
      setPokedex(newPokedex);
      alert("Pokemon Removido com Sucesso")    // criar um alert diferente 
    }


  

   // REQUISIÇÃO DA LISTA DE POKEMONS 
    const getPokemonList = () => {
      axios
        .get(`${URLBase}?limit=${limit}`)
        .then((res) => {
          setPokemon(res.data.results);
        })
        .catch((error) => {
          console.log("não foi", error);
        });
    };

    // REQUISIÇÃO DOS DETALHES  DE POKEMONS 

    const getPokemonDetail = (id) => {
      axios
        .get(`${URLBase}/${id}`)
        .then((res) => {
          console.log("foi", res.data);
          setDetails(res.data);
        })
        .catch((error) => {
          console.log("não foi", error);
        });
    };

    //DADOS
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

    //BOTOES 

    const botoes = {
      addPokedex,
      removePokedex

    }
    // "EXPULSANDOS AS REQUISIÇÕES "

    const requisicao = {getPokemonList,getPokemonDetail}

    return (
            <GlobalStateContext.Provider value={{estados , requisicao , botoes }}>
                {props.children}
            </GlobalStateContext.Provider>
            )
}