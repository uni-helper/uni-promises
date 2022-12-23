import { promisify } from '../utils';

export const getClipboardData = promisify(uni.getClipboardData);
