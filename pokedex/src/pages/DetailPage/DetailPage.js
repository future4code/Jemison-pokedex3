import React from "react";
import { useNavigate } from "react-router";
import HeaderDetails from "../../Header/HeaderDetails"



export function DetailPage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

   return (
     <div>

      <HeaderDetails title ="NOME DO POKEMONS" />
       


      </div>
   )


}