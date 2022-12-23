import { promisify } from '../utils';

export const closeBluetoothAdapter = promisify(uni.closeBluetoothAdapter);
