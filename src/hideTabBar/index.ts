import { promisify } from '../utils';

/**
 * 隐藏 TabBar
 *
 * 文档 http://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbar
 */
export const hideTabBar = promisify(uni.hideTabBar);
