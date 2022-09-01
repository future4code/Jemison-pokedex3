import react from 'react'
import { Title ,HeaderConteiner,Logo,ButtonContainer,Button} from '../../Header/styled'
export function PokedexPage () {

  return (
    <HeaderConteiner>
    <ButtonContainer>
       <Button> VOLTAR PARA LISTA DE POKEMONS </Button>
    </ButtonContainer>
    <Title> POKEDEX</Title>
  </HeaderConteiner>
  )
}