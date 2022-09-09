import React from "react";
import { useNavigate } from "react-router";
import HeaderDetails from "../../Header/HeaderDetails"
import { CardDetail } from "../../components/CardDetail/CardDetail";



export function DetailPage () {
  
  //navegação dos botoes 
  const navegate = useNavigate()

   return (
     <div>

      <HeaderDetails title ="NOME DO POKEMONS" />
      <CardDetail></CardDetail>

       


      </div>
   )


}