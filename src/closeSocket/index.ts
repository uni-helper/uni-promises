import { simplePromisify } from '../utils';

export const closeSocket = () => simplePromisify(uni.closeSocket);
