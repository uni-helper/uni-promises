import { promisify } from '../utils';

export const makePhoneCall = promisify(uni.makePhoneCall);
