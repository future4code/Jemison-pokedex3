import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import styled from "styled-components"
//

import { goToHome} from "../Routes/coordinator";
import { useNavigate } from "react-router";
import logoPokemon from '../Imagens/logo.png'
import {TitleHeader} from './styled'


export default function HeaderDetails({ title }) {

  // navegação

  const navegate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ backgroundColor: "#FF6347" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box component="img" src={logoPokemon} height="3em" />
              <TitleHeader>{title}</TitleHeader>

              <Button  onClick={() => goToHome(navegate)} variant="outlined" color ="error" width="5%" >
                 HOME
              </Button>
              <Button  variant="outlined" color ="error" width="5%" >
                 ADICIONAR DA POKEDEX
              </Button>
              <Button  variant="outlined" color ="error" width="5%" >
                 REMOVER DA POKEDEX
              </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
