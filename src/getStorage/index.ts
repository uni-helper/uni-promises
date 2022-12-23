import { promisify } from '../utils';

export const getStorage = promisify(uni.getStorage);
