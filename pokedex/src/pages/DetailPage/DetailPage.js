import react from 'react'
import { Title ,HeaderConteiner,Logo,ButtonContainer,Button} from '../../Header/styled'

export function DetailPage () {

  return (
    <HeaderConteiner>
       <Title> DETALHES DOS POKEMONS</Title>
    <ButtonContainer>
       <Button> VOLTAR </Button>
       <Button> ADICONAR/REMOVER DA POKEDEX </Button>
    </ButtonContainer>
  </HeaderConteiner>
  )
}