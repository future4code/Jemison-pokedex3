import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../Header/Header";
import GlobalContext from "../../global/GlobalContext";
import { Container, PokemonList } from "./styles";


export function HomePage () {
  const {state, requests} = useContext(GlobalContext);

  useEffect(() => {
    requests.getPokemonList();
  }, [state.offset]);

// map para exibir pokemons 

  const renderPokemonList = () => {
   return  state.pokemon.map((pokemon) => {
      return (
        <Card
          key={pokemon.name}
          url={pokemon.url}
          name={pokemon.name}
          pokemon={pokemon}
        />
      );
    });
  };

  return (
    <Container>
      <Header title="Lista de Pokémon" />
      <PokemonList>{renderPokemonList()}</PokemonList>
    </Container>
  );
}


