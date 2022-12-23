import { promisify } from '../utils';

export const getBatteryInfo = promisify(uni.getBatteryInfo);
