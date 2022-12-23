import { promisify } from '../utils';

export const saveFile = promisify(uni.saveFile);
