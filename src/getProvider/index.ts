import { promisify } from '../utils';

export const getProvider = promisify(uni.getProvider);
