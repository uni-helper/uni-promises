import { promisify } from '../utils';

export const authorize = promisify(uni.authorize);
