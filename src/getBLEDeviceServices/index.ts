import { promisify } from '../utils';

export const getBLEDeviceServices = promisify(uni.getBLEDeviceServices);
