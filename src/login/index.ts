import { promisify } from '../utils';

export const login = promisify(uni.login);
