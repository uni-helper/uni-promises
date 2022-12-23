import { promisify } from '../utils';

export const clearStorage = promisify(uni.clearStorage);
