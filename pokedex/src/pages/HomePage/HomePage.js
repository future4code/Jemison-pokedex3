import react from 'react'
import LogoPOKEMON  from '../../Imagens/logo.png'
import { Title ,HeaderConteiner,Logo,ButtonContainer,Button} from '../../Header/styled'


export function HomePage () {

  return (
  <HeaderConteiner>
    <ButtonContainer>
       <Button> POKEDEX </Button>
    </ButtonContainer>
    <Logo src ={LogoPOKEMON} />
       <Title> LISTA DE POKEMONS</Title>
  </HeaderConteiner>

  )
}