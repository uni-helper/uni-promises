import { promisify } from '../utils';

export const chooseAddress = promisify(uni.chooseAddress);
