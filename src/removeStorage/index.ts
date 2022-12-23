import { promisify } from '../utils';

export const removeStorage = promisify(uni.removeStorage);
