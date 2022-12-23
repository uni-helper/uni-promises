import { promisify } from '../utils';

// @ts-expect-error
export const vibrate = promisify(uni.vibrate);
