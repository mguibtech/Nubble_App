import React from 'react';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SuccessScreen() {
  function goBackBegin() {
    //TODO: go back to the first screen login
  }

  return (
    <Screen>
      <Icon name="messageRound" color="greenSuccess" />
      <Text preset="headingLarge" mt="s24">
        TITLE
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        Description
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
