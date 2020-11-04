import React from 'react'
import { Text } from 'react-native'

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles'

import BarbeLogo from '../../assets/barber.svg'

import Signinput from '../../components/Signinput'

export default () => {
  return (
    <Container>
      <BarbeLogo width="100%" height="160" />

      <InputArea>
        <Signinput />

        <Signinput />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}
