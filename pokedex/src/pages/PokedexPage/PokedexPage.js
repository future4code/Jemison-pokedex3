import React from "react";
import { useNavigate } from "react-router";
import { goToDetailPokemons } from "../../Routes/coordinator";
import { goToHome } from "../../Routes/coordinator";


export function PokedexPage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

   return (
     <div>

      <header> DETALHES DOS POKEMONS </header>
        <button onClick={() => goToDetailPokemons(navegate)}>DETALHES DOS POKEMONS </button>
        <button onClick={() => goToHome(navegate)}>HOME</button>
      </div>
   )


}