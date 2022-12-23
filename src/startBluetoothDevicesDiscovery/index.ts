import { promisify } from '../utils';

export const startBluetoothDevicesDiscovery = promisify(uni.startBluetoothDevicesDiscovery);
