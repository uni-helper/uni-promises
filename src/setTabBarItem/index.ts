import { promisify } from '../utils';

/**
 * 动态设置 TabBar 某一项的内容
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem
 */
export const setTabBarItem = promisify(uni.setTabBarItem);
