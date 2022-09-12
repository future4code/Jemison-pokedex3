import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




// FUNÇÃO PARA EXIBIR NA TELA

export function CardDetail({ name, frontImage, backImage, stats, types, abilities }) {

    const renderStats = () => {

      return stats.map(({ base_stat, stat }) => (
        <p key={stat.name}>
          {stat.name}: {base_stat}
        </p>
      ));
    };
  
    const renderTypes = () => {
      return types.map(({ name, type }) => {
        return <p key={name}>{type.name}</p>;
      });
    };
  
    const renderAbilities = () => {
      return abilities.map(({ ability, name }) => {
        return <p key={name}>{ability.name}</p>;
      });
    };
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4} >
          <Item>{name}</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}
              > 📷<img src={frontImage}></img>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}
              >📷<img src={backImage}></img>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Poderes 📕
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
              {renderStats()}
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Habilidades 📕
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
              {renderAbilities()}
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>GRUPO 3</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Tipos 📕</Item>
            </Grid>
            <Grid>
              <Item>{renderTypes()}</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );



  
};  