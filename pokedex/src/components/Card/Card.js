import { useContext } from "react";
import React from "react";
import { CardContainer, NameText, PriceContainer, ProductImage } from "./styles";


export  function Card  ({name, url, pokemon}) {

  const [, id] = url.match(/pokemon\/(\d+)\//i);

  return(
    <CardContainer>
      <ProductImage
       name={pokemon.name}
       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}

      />

     <NameText>{name}</NameText>

     <PriceContainer>
      <button>DETALHES</button> {/* JOHN  */}
      <button>ADICIONAR</button> {/* ADAUTO  */}
     </PriceContainer>
    </CardContainer>
  

  )







}
