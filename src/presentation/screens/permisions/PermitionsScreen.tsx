import React from 'react';
import {Pressable, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {globalStyles} from '../../../config/theme/styles';
import {usePermissionStore} from '../../strore/permitions/usePermissionStore';

export const PermitionsScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionStore();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Habilitar Ubicación</Text>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={{color: 'white'}}>Habilitar localicazacion</Text>
      </Pressable>
      <Text>Estado actual: {locationStatus}</Text>
    </View>
  );
};
