import { promisify } from '../utils';

export const requestPayment = promisify(uni.requestPayment);
