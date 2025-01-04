import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <View style={{paddingHorizontal: 24}}>
        <Text marginBottom="s8" preset="headingLarge">
          Ola
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>
        <Box mb="s20">
          <TextInput label="E-mail" placeholder="Digite o seu e-mail" />
        </Box>

        <TextInput
          label="Senha"
          errorMessage="Error message"
          placeholder="Digite sua senha"
          RightComponent={<Icon color="gray2" name="eyeOn" />}
          boxProps={{mb: 's20'}}
        />

        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mt="s48" />
        <Button title="Criar uma conta" preset="outline" mt="s12" />
      </View>
    </Screen>
  );
}
