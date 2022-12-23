import { promisify } from '../utils';

export const chooseFile = promisify(uni.chooseFile);
