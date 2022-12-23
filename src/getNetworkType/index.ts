import { promisify } from '../utils';

export const getNetworkType = promisify(uni.getNetworkType);
