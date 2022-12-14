import React from "react";
import { useNavigate } from "react-router";
import {PokemonsCard} from '../../components/Card/Card'
import GlobalStateContext from "../../global/GlobalContext";
import { useContext , useEffect } from "react";
import HeaderHomePage from "../../Header/HeaderHome";
import { ContainerPai,PokemonList } from "./styles";



export function HomePage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

  const {estados , requisicao} = useContext(GlobalStateContext);


  useEffect(() => {
    requisicao.getPokemonList();
  }, [estados]);

  const renderizarListaPokemons = () => {
    return estados.pokemon?.map((pokemon) => {

      return (

        <div>

        <PokemonsCard
          key={pokemon.name}
          url={pokemon.url}
          name={pokemon.name}
          pokemon={pokemon}
        />
         </div>   
      );
    });
  };
   return (
    
          <ContainerPai>
          <HeaderHomePage title = "LISTA DE POKEMONS" >  </HeaderHomePage>
          <PokemonList>{renderizarListaPokemons()}</PokemonList>
          </ContainerPai>
      
  
    
   )

}