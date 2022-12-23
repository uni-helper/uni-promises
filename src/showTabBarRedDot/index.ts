import { promisify } from '../utils';

/**
 * 显示 TabBar 某一项的右上角的红点
 *
 * 文档 http://uniapp.dcloud.io/api/ui/tabbar?id=showtabbarreddot
 */
export const showTabBarRedDot = promisify(uni.showTabBarRedDot);
