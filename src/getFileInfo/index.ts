import { promisify } from '../utils';

export const getFileInfo = promisify(uni.getFileInfo);
