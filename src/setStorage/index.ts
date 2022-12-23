import { promisify } from '../utils';

export const setStorage = promisify(uni.setStorage);
