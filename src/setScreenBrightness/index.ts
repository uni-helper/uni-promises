import { promisify } from '../utils';

export const setScreenBrightness = promisify(uni.setScreenBrightness);
