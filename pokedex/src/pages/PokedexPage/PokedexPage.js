import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Title ,HeaderConteiner,Logo,ButtonContainer,Button} from '../../Header/styled'
import { goToHome } from '../../Routes/coordenator'


export function PokedexPage () {

  const navigate = useNavigate()

  //const onClickRemove = (product) => {
    //const productIndex = cart.findIndex((item) => item.id === product.id)//exemplo
    //const newCart = [...cart]//exemplo

    //if (newCart[productIndex].quantity === 1) {
      //newCart.splice(productIndex, 1)
    //} else {
     // newCart[productIndex].quantity--
    //}
    //setCart(newCart)
  //}
  return (
    <HeaderConteiner>
    <ButtonContainer>
       <Button onClick={() => goToHome(navigate)}> VOLTAR PARA LISTA DE POKEMONS </Button>
    </ButtonContainer>
    <Title> POKEDEX</Title>
  </HeaderConteiner>
  //// {cart.map((item) => {
   // return <CartItem key={item.id} item={item} onClickRemove={onClickRemove}
   //})}
  )
}