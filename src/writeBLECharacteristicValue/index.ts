import { promisify } from '../utils';

export const writeBLECharacteristicValue = promisify(uni.writeBLECharacteristicValue);
