import { useContext } from "react";
import React from "react";
import { CardContainer, NameText, PriceContainer, ProductImage } from "./styles";
import GlobalContext from "../../global/GlobalContext";


export  function Card  ({name, url, pokemon}) {

  const [, id] = url.match(/pokemon\/(\d+)\//i);
    const { setters, state } = useContext(GlobalContext);
  
    const isDisabled = state.pokedex.some((p) => p.name === name);
  

  return(
    <CardContainer>
      <ProductImage
       name={pokemon.name}
       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}

      />

     <NameText>{name}</NameText>

     <PriceContainer>
      <button>DETALHES</button> {/* JOHN  */}
      <button disabled={isDisabled} onClick={() => setters.addPokedex(pokemon)}>ADICIONAR</button>
     </PriceContainer>
    </CardContainer>  

  )







}
