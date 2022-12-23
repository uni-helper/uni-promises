import { promisify } from '../utils';

export const getLocation = promisify(uni.getLocation);
