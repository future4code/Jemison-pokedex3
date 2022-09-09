import React from "react";
import { useNavigate } from "react-router";
import { goToPokedex } from "../../routes/coordinator";
import {Card} from '../../components/Card/Card'
import GlobalStateContext from "../../global/GlobalContext";
import { useContext , useEffect } from "react";


export function HomePage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

  const {estados , requisicao} = useContext(GlobalStateContext);


  useEffect(() => {
    requisicao.getPokemonList();
  }, [estados]);

  const renderPokemonList = () => {
    return estados.pokemon?.map((pokemon) => {

      return (

        <div>

        <Card
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
    <>

          <header> PAGINA INICIAL </header>
          <button onClick={() => goToPokedex(navegate)}> POKEDEX</button>

          <div >{renderPokemonList()}</div>
      
    </>
    
   )

}