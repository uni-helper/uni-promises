import { simplePromisify } from '../utils';

export const sendSocketMessage = () => simplePromisify(uni.sendSocketMessage);
