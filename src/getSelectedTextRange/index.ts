import { promisify } from '../utils';

export const getSelectedTextRange = promisify(uni.getSelectedTextRange);
