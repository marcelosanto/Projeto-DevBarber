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

import Signinput from '../../components/Signinput'

import BarbeLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () => {
  return (
    <Container>
      <BarbeLogo width="100%" height="160" />

      <InputArea>
        <Signinput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />

        <Signinput IconSvg={LockIcon} placeholder="Digite sua senha" />

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
