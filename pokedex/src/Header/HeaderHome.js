import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import styled from "styled-components"
//

import { goToPokedex } from "../Routes/coordinator";
import { useNavigate } from "react-router";
import logoPokemon from '../Imagens/logo.png'
import {TitleHeader} from './styled'


export default function HeaderHomePage({ title }) {

  // navegação

  const navegate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ backgroundColor: "#FF6347" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box component="img" src={logoPokemon} height="3em" />
              <TitleHeader>{title}</TitleHeader>

              <Button  onClick={() => goToPokedex(navegate)} variant="outlined" color ="error" width="5%" > POKEDEX
          </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
