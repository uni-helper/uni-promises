import { promisify } from '../utils';

export const closeSocket = () => promisify(uni.closeSocket);
