import { promisify } from '../utils';

export const showActionSheet = promisify(uni.showActionSheet);
