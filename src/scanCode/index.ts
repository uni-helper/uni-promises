import { promisify } from '../utils';

export const scanCode = promisify(uni.scanCode);
