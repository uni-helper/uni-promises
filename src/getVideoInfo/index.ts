import { promisify } from '../utils';

export const getVideoInfo = promisify(uni.getVideoInfo);
