import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/Welcome';

const StackRoutes = createNativeStackNavigator();

export const AppStackRoutes: React.FC = () => (
  <StackRoutes.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <StackRoutes.Screen name="Welcome" component={Welcome} />

    <StackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <StackRoutes.Screen name="Confirmation" component={Confirmation} />
  </StackRoutes.Navigator>
);
