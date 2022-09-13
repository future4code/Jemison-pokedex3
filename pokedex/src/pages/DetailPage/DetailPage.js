
import React from "react";
import HeaderDetails from "../../Header/HeaderDetails"
import { CardDetail } from "../../components/CardDetail/CardDetail";
import GlobalStateContext from "../../global/GlobalContext";
import { useParams } from "react-router";
import { useContext } from "react";
import { useEffect } from "react";
import { PokemonsDetailList } from "./styles";

// FUNCÃO DE RENDERIZAÇÃO 

export function DetailPage () {
  
  const {
    estados,
    requisicao: { getPokemonDetail },
  } = useContext(GlobalStateContext);

  const { id } = useParams();

  useEffect(() => {
    getPokemonDetail(id);
  }, [id]);

  const renderDetails = () => {
    if (!estados.details) return null;


// MAP DO COMPONENTE CARDDETAIL
    return (
      <CardDetail
        url={"url"}
        name={estados.details.name}
        backImage={estados.details.sprites?.back_default}
        frontImage={estados.details.sprites?.front_default}
        stats={estados.details.stats}
        types={estados.details.types}
        abilities={estados.details.abilities}
      />
    );
  };
  
   return (
     <div>

      <HeaderDetails title ="DETALHES DOS POKEMONS" />
      <PokemonsDetailList>{renderDetails()}</PokemonsDetailList>

       


      </div>
   )


}
