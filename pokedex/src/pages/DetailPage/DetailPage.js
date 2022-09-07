import React from "react";
import { useNavigate } from "react-router";
import { goToHome } from "../../Routes/coordinator";



export function DetailPage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

   return (
     <div>

      <header> DETALHES DOS POKEMONS </header>
        <button onClick={() => goToHome(navegate)}>HOME</button>
        <button>ADICIONAR A POKEDEX</button>


      </div>
   )


}