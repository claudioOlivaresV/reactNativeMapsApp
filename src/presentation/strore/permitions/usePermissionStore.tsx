import {PermissionStatus} from '../../../infraestructure/interfaces/permissions';
import {create} from 'zustand';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permissions/location';

interface PermissionState {
  locationStatus: PermissionStatus;
  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermision: () => Promise<PermissionStatus>;
}
export const usePermissionStore = create<PermissionState>()(set => ({
  locationStatus: 'undetermined',
  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({locationStatus: status});
    return status;
  },
  checkLocationPermision: async () => {
    const status = await checkLocationPermission();
    set({locationStatus: status});
    return status;
  },
}));
