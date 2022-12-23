import { simplePromisify } from '../utils';

export const connectSocket = () => simplePromisify(uni.connectSocket);
