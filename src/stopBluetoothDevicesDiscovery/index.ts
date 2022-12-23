import { promisify } from '../utils';

export const stopBluetoothDevicesDiscovery = promisify(uni.stopBluetoothDevicesDiscovery);
