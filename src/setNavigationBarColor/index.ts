import { promisify } from '../utils';

/**
 * 设置导航条颜色
 *
 * 文档 http://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbarcolor
 */
export const setNavigationBarColor = promisify(uni.setNavigationBarColor);
