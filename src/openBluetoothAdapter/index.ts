import { promisify } from '../utils';

export const openBluetoothAdapter = promisify(uni.openBluetoothAdapter);
