import { promisify } from '../utils';

export const getUserInfo = promisify(uni.getUserInfo);
