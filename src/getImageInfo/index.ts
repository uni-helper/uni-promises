import { promisify } from '../utils';

export const getImageInfo = promisify(uni.getImageInfo);
