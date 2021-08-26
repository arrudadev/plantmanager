import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/Welcome';
import { TabRoutes } from './tab.routes';

const Stack = createNativeStackNavigator();

export const StackRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />

    <Stack.Screen name="UserIdentification" component={UserIdentification} />

    <Stack.Screen name="Confirmation" component={Confirmation} />

    <Stack.Screen name="NewPlant" component={TabRoutes} />
  </Stack.Navigator>
);
