import { promisify } from '../utils';

export const connectSocket = () => promisify(uni.connectSocket);
