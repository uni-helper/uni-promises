import { promisify } from '../utils';

export const getSavedFileInfo = promisify(uni.getSavedFileInfo);
