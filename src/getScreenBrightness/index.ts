import { promisify } from '../utils';

export const getScreenBrightness = promisify(uni.getScreenBrightness);
