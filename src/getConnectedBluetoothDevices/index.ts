import { promisify } from '../utils';

export const getConnectedBluetoothDevices = promisify(uni.getConnectedBluetoothDevices);
