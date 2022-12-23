import { promisify } from '../utils';

export const chooseLocation = promisify(uni.chooseLocation);
