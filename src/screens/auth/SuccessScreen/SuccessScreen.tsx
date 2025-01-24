import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon, Screen, Text, Button} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button
        onPress={goBackBegin}
        title="Voltar ao inicio"
        preset="primary"
        mt="s40"
      />
    </Screen>
  );
}
