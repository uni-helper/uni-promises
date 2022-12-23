import { promisify } from '../utils';

export const getBLEDeviceCharacteristics = promisify(uni.getBLEDeviceCharacteristics);
