import { promisify } from '../utils';

export const getStorageInfo = promisify(uni.getStorageInfo);
