import { promisify } from '../utils';

export const setClipboardData = promisify(uni.setClipboardData);
