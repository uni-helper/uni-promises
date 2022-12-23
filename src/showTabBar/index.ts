import { promisify } from '../utils';

/**
 * 显示 tabBar
 *
 * 文档 http://uniapp.dcloud.io/api/ui/tabbar?id=showtabbar
 */
export const showTabBar = promisify(uni.showTabBar);
