import axios from "axios";
import React, {useState,useEffect} from "react";
import GlobalContext from "./GlobalContext";
import { URLbase } from "../Api/Api";
import {toast} from 'react-toastify'

import "react-toastify/dist/ReactToastify.css";
 // status das informações 

 export const GlobalState = (props) => {
  
    const [pokemon, setPokemon] = useState([]);
    const [details, setDetails] = useState();
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const [pokedex, setPokedex] = useState([]);




useEffect(()=>{
    const localPokedex=localStorage.getItem('pokedex')
     localPokedex&& setPokedex(JSON.parse(localPokedex))
      },[])
      
      useEffect(()=>{
      localStorage.setItem('pokedex',JSON.stringify(pokedex))
      },[pokedex])

// botao para adicionar os pokemons
  
    const addToPokedex = (pokemon) => {
      const isPokemonAlreadyInPokedex = pokedex.some((pokemonInPokedex) => {
        return pokemonInPokedex.name === pokemon.name;
      });
  
      if (!isPokemonAlreadyInPokedex) {
        setPokedex([...pokedex, pokemon]);
        toast.success("Pokémon adicionado com sucesso!");
      }
    };
// botao para remover pokemon 

    const removeFromPokedex = (pokemon) => {
      const newPokedex = pokedex.filter((pokemonInPokedex) => {
        return pokemonInPokedex.name !== pokemon.name;
      });
      setPokedex(newPokedex);
      toast.success("Pokémon removido com sucesso!");
    };

// requisicao para exibir os pokemons 
    const getPokemonList = () => {
      axios
        .get(`${URLbase}?offset=${offset}&limit=${limit}`)
        .then((res) => {
          setPokemon(res.data.results);
        })
        .catch((error) => {
          console.log("não foi", error);
        });
    };

// Detalis dos pokemons requisicao 
  
    const getPokemonDetail = (id) => {
      axios
        .get(`${URLbase}/${id}`)
           .then((res) => {
               console.log("foi", res.data);
          setDetails(res.data);
        })
        .catch((error) => {
          console.log("não foi", error);
        });
    };
  
    const state =  ({pokemon, details, limit, offset, pokedex}) ;
    const setters = {
      setPokemon,
      setDetails,
      setLimit,
      setOffset,
      setPokedex,
      addToPokedex,
      removeFromPokedex,
    };
    const requests = { getPokemonList, getPokemonDetail };
  
    return (
      <GlobalContext.Provider value={{ state, setters, requests }}>
        {props.children}
      </GlobalContext.Provider>
    );

}

 
  