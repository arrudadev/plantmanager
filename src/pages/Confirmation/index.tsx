import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { Button } from '../../components/Button';
import { styles } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } =
    routes.params as Params;

  function handleMoveOn() {
    navigation.dispatch(CommonActions.navigate({ name: nextScreen }));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}
