
import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia , Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router';
import { goToDetailPokemons } from '../../Routes/coordinator';

// o que esta sendo exibido na tela 


export function PokemonCard ({name , image}) {

const [tela , setTela]= useState();
 
const addToPokemon =(event) =>{
 event.preventDefault();
 
}



return(
  <Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  

  <CardMedia component="img" height="200" image={image} /> {/* CHAMANDO A IMAGEM DOS POKEMONS  */}

  <CardContent>
    <Box display="flex" justifyContent="space-between" alignItems="center">

      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      
    
      
    </Box>
  </CardContent>

  <CardContent>

  <Button>Detalhes</Button>  {/* IR AOS DETALHES DE CADA POKEMON  */}
  <Button>Adiocionar</Button>  {/* ADICIONAR UM POKEMON NA POKEDEX / VARIAVEL DE ESTADO PARA FAZER 
   */}
  </CardContent>

</CardActionArea>

</Card>


  


) }
