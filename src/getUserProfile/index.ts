import { promisify } from '../utils';

export const getUserProfile = promisify(uni.getUserProfile);
