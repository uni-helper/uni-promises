import { promisify } from '../utils';

export const createPushMessage = promisify(uni.createPushMessage);
