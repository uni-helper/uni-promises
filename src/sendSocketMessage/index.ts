import { promisify } from '../utils';

export const sendSocketMessage = () => promisify(uni.sendSocketMessage);
