import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description:
        'Agora você já pode fazer login e aproveitar todos os recursos do app',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
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

      <Button onPress={submitForm} title="Cirar minha conta" mt="s48" />
    </Screen>
  );
}
