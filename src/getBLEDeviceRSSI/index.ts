import { promisify } from '../utils';

export const getBLEDeviceRSSI = promisify(uni.getBLEDeviceRSSI);
