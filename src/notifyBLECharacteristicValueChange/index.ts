import { promisify } from '../utils';

export const notifyBLECharacteristicValueChange = promisify(uni.notifyBLECharacteristicValueChange);
