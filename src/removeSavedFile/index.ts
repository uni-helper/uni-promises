import { promisify } from '../utils';

export const removeSavedFile = promisify(uni.removeSavedFile);
