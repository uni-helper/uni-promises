import { promisify } from '../utils';

export const getSystemInfo = promisify(uni.getSystemInfo);
