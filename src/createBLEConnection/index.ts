import { promisify } from '../utils';

export const createBLEConnection = promisify(uni.createBLEConnection);
