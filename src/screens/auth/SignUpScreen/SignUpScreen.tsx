import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <TextInput
        placeholder="@"
        label="Seu username"
        boxProps={{marginBottom: 's16'}}
      />
      <TextInput
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{marginBottom: 's16'}}
      />
      <TextInput
        placeholder="Digite o seu e-mail"
        label="E-mail"
        boxProps={{mb: 's16'}}
      />
      <PasswordInput label="Senha" placeholder="Digite sua senha" />
      <TextInput
        placeholder="Digite o seu e-mail"
        label="E-mail"
        boxProps={{mb: 's16'}}
      />

      <PasswordInput label="Senha" placeholder="Digite sua senha" />

      <Button title="Cirar minha conta" mt="s48" />
    </Screen>
  );
}
