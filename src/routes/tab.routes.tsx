import React from 'react';
import { Platform } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NewPlant } from '../pages/NewPlant';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
      }}
    >
      <Tab.Screen
        name="Nova Planta"
        component={NewPlant}
        options={{
          tabBarIcon: ({ size, color }: any) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
