import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import 'react-native-gesture-handler';

export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={30} color='"black"' />
    </View>
  );
};
