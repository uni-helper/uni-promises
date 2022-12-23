import { promisify } from '../utils';

export const chooseMessageFile = promisify(uni.chooseMessageFile);
