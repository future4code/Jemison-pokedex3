import React from "react";
import HeaderPokedex from '../../Header/HeaderPokedex'
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalContext";
import { Container, Message, PokemonList } from "./styles";


export function PokedexPage () {

      const { estados } = useContext(GlobalStateContext);
    
      const renderizaPokedex = () => {

        if (estados.pokedex.length === 0) {
          return <h1>A sua pokedex está vazia! </h1>;  // criar um alert diferente
        }
    
        return (
         
           estados.pokedex?.map((pokemon) => {
             return <CardPokedex  key={pokemon.name} url={pokemon.url} name={pokemon.name} pokemon={pokemon} />;
           })
         
       );
     };
   
     return (
       <Container>
        <HeaderPokedex title = "POKEDEX" />
        <PokemonList> {renderizaPokedex()}</PokemonList>
       </Container>
     );
   }
   
        