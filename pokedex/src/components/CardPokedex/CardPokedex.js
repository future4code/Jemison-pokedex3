import { useContext } from "react";
import React from "react";
import GlobalStateContext from "../../global/GlobalContext";

// 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { goToDetailPokemons } from "../../routes/coordinator";
import { useNavigate } from "react-router";
  

export default function CardPokedex  ({ pokemon, name, url }) {

  const navegate = useNavigate()

  const [, id] = url.match(/pokemon\/(\d+)\//i);
  const { botoes } = useContext(GlobalStateContext);

  return (
    <Card sx={{ maxWidth:345 }}>


    
    <CardActionArea>
      <CardMedia component="img" height="200" alt="green iguana" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}/>


      <CardContent>
        <Box display="grid" justifyContent="space-between" alignItems="center">

            <Typography gutterBottom variant="h5" component="div">
            {name}
             </Typography>
                <Typography gutterBottom variant="caption" component="div">

                 <Button  variant="outlined" color ="error" 
                 onClick={() =>goToDetailPokemons(navegate)}>  
                 
                 Detalhes </Button> 


                 <Button  component="div"  color ="error" 
                 onClick={() => botoes.removePokedex(pokemon)}>REMOVER</Button>

                 
            

                 
              
                  </Typography>
        </Box>
      </CardContent>
    </CardActionArea>

  </Card>
      
      
  );
  }