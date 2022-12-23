import { promisify } from '../utils';

/**
 * 移除 TabBar 某一项右上角的文本
 *
 * 文档 http://uniapp.dcloud.io/api/ui/tabbar?id=removetabbarbadge
 */
export const removeTabBarBadge = promisify(uni.removeTabBarBadge);
