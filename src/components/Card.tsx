import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import { MeuBotao } from './Button'
import { login } from '../services/login'

export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <MeuBotao onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
          Button
        </MeuBotao>
      </Center>
    </Box>
  </Box>
  )
}