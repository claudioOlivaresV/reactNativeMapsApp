import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen} from '../screens/loading/LoadingScreen';
import {MapsScreen} from '../screens/maps/MapsScreen';
import {PermitionsScreen} from '../screens/permisions/PermitionsScreen';
import React from 'react';

export type RootStackParams = {
  LoadingScreen: undefined;
  PermitionsScreen: undefined;
  MapsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      // initialRouteName="PermitionsScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapsScreen" component={MapsScreen} />
      <Stack.Screen name="PermitionsScreen" component={PermitionsScreen} />
    </Stack.Navigator>
  );
};
