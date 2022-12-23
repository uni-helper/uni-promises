import { promisify } from '../utils';

export const getBluetoothAdapterState = promisify(uni.getBluetoothAdapterState);
