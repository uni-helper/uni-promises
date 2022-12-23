import { promisify } from '../utils';

export const addPhoneContact = promisify(uni.addPhoneContact);
