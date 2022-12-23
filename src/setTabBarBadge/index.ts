import { promisify } from '../utils';

/**
 * 为 TabBar 某一项的右上角添加文本
 *
 * 文档 http://uniapp.dcloud.io/api/ui/tabbar?id=settabbarbadge
 */
export const setTabBarBadge = promisify(uni.setTabBarBadge);
