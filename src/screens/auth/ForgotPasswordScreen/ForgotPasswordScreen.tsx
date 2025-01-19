import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TextInput} from '../../../components/TextInput/TextInput';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen(props: ScreenProps) {
  function submitForm() {
    props.navigation.navigate('SuccessScreen', {
      title: 'Enviamos as instruções para seu e-mail',
      description: `Clique no link enviado no seu ${'\n'}e-mail para recuperar sua senha`,
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        boxProps={{mt: 's32'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button title="Recuperar senha" mt="s56" onPress={submitForm} />
    </Screen>
  );
}
