import { promisify } from '../utils';

export const readBLECharacteristicValue = promisify(uni.readBLECharacteristicValue);
