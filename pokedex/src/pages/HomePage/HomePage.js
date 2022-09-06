import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { goToPokedex } from '../../Routes/coordinator'
// styled img
import LogoPOKEMON  from '../../Imagens/logo.png'
import { Title ,HeaderConteiner,Logo,ButtonContainer,Button,} from '../../Header/styled'
import { PokemonCard } from '../../components/Card/Card'
import {Grid } from '@mui/material'
import { Container } from '@mui/system'




   export function HomePage () {
 
  const navegate= useNavigate() // navegação do botão

  const [pokemons , setPokemons  ] = useState([])

  
  useEffect(( ) =>{
    getPokemons()
  },[])

 // api
  const getPokemons =() => {

   // veririfacar  de laço e limitador 

    var endpoints =[]
    for (var i = 1; i < 21 ; i++  ){
      endpoints.push (`https://pokeapi.co/api/v2/pokemon/${i}/`)

    }
    // map dos pokemons e limitador dos pokemons 
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
     .then ((res) => setPokemons(res))
     .catch
  };
  


  return (

  <div>


  <HeaderConteiner>
    <ButtonContainer>
       <Button onClick={() =>goToPokedex(navegate)}> POKEDEX </Button>
    </ButtonContainer>
    <Logo src ={LogoPOKEMON} />
       <Title> LISTA DE POKEMONS</Title>
  </HeaderConteiner>

  <Container maxWidth="xg">
    <Grid container spacing={5}>
      {pokemons.map((pokemon , key) =>(
        <Grid item xs ={3}>

          <PokemonCard
          key={key}
          name={pokemon.data.name}
          image={pokemon.data.sprites.front_default}
          />


      </Grid>
      ))}
    </Grid>

</Container>

  
  
  </div>

  )
  
}

  



