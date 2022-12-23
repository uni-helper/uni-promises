import { promisify } from '../utils';

export const checkSession = promisify(uni.checkSession);
