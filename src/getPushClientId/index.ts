import { promisify } from '../utils';

export const getPushClientId = promisify(uni.getPushClientId);
