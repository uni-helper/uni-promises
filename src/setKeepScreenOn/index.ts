import { promisify } from '../utils';

export const setKeepScreenOn = promisify(uni.setKeepScreenOn);
