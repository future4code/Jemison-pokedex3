import React from "react";
import { useNavigate } from "react-router";
import { goToDetailPokemons } from "../../Routes/coordinator";
import { goToHome } from "../../Routes/coordinator";
import HeaderPokedex from '../../Header/HeaderPokedex'


export function PokedexPage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

   return (
     <div>

        <HeaderPokedex title = "Pokedex" />
    
      </div>
   )


}