import { promisify } from '../utils';

export const closeBLEConnection = promisify(uni.closeBLEConnection);
