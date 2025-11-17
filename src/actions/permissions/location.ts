import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  PermissionStatus as RNPPermissionStatus,
} from 'react-native-permissions';
import {PermissionStatus} from '../../infraestructure/interfaces/permissions';
import {Platform} from 'react-native';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPPermissionStatus = 'unavailable';
    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unssoport plataform');
    }

    if (status === 'blocked') {
      await openSettings();
      return checkLocationPermission();
    }

    const permissionsMapper: Record<RNPPermissionStatus, PermissionStatus> = {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      unavailable: 'unavailable',
      limited: 'limited',
    };

    return permissionsMapper[status] ?? 'unavailable';
  };

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPPermissionStatus = 'unavailable';
  if (Platform.OS === 'ios') {
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unssoport plataform');
  }
  const permissionsMapper: Record<RNPPermissionStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    unavailable: 'unavailable',
    limited: 'limited',
  };
  return permissionsMapper[status] ?? 'unavailable';
};
