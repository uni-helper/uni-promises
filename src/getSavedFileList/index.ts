import { promisify } from '../utils';

export const getSavedFileList = promisify(uni.getSavedFileList);
