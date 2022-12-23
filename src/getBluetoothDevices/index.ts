import { promisify } from '../utils';

export const getBluetoothDevices = promisify(uni.getBluetoothDevices);
