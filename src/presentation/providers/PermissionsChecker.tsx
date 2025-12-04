import React, {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {usePermissionStore} from '../strore/permitions/usePermissionStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermision} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // Corrección: escuchar cambios en locationStatus
  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        routes: [{name: 'MapsScreen'}],
      });
    } else if (locationStatus === 'undetermined') {
      navigation.reset({
        routes: [{name: 'PermitionsScreen'}],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermision();
  }, []);

  useEffect(() => {
    const subs = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermision();
      }
    });

    return () => subs.remove();
  }, []);

  return <>{children}</>;
};
