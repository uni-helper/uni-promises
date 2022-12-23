import { promisify } from '../utils';

export const requestSubscribeMessage = promisify(uni.requestSubscribeMessage);
