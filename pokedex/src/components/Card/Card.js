import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { goToDetailPokemons } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import GlobalStateContext from "../../global/GlobalContext";




export  function PokemonsCard  ({name, url, pokemon}) {

  const navegate=useNavigate()

  const [, id] = url.match(/pokemon\/(\d+)\//i);

    const {estados, botoes } = useContext(GlobalStateContext);
  
    const isDisabled = estados.pokedex.some((p) => p.name === name);
  

  return(
      <Card sx={{ maxWidth:500}}>


    
        <CardActionArea>
          <CardMedia 
           component="img" height="250" alt="green iguana" 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}/>


          <CardContent>
            <Box display="grid" justifyContent="space-between" alignItems="center">

                <Typography gutterBottom variant="h5" component="div">
                {name}
                 </Typography>
                    <Typography gutterBottom variant="caption" component="div">

                     <Button  variant="outlined" color ="error" 
                     onClick={() =>goToDetailPokemons(navegate,id)}>  
                     
                     Detalhes </Button> 


                     <Button   component="div" color="success"
                      disabled={isDisabled} onClick={() => botoes.addPokedex(pokemon)}>ADICIONAR</Button>
                     
                
                    
                      
                      </Typography>
            </Box>
          </CardContent>
        </CardActionArea>

      </Card>
    )
 }

