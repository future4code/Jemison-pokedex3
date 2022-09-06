
import { useNavigate } from 'react-router'
import { Title ,HeaderConteiner,ButtonContainer,Button} from '../../Header/styled'
import { goToHome } from '../../Routes/coordinator'

export function PokedexPage () {

  const navegate = useNavigate() // navegação do botão

  return (
    <HeaderConteiner>
    <ButtonContainer>
       <Button onClick={()=> goToHome(navegate)}> VOLTAR PARA LISTA DE POKEMONS </Button>
    </ButtonContainer>
    <Title> POKEDEX</Title>
  </HeaderConteiner>
  )
}