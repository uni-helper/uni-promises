import { promisify } from '../utils';

export const getSetting = promisify(uni.getSetting);
