import React from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function Login() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignUpLink onPress={() => {}}>
          <SignUpLinkText>Criar conta gratuita</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}