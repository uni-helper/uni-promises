import { promisify } from '../utils';

export const setTabBarBadge = promisify(uni.setTabBarBadge);
