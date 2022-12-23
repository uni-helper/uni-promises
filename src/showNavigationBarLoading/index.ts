import { promisify } from '../utils';

/**
 * 在当前页面显示导航条加载动画
 *
 * 文档 http://uniapp.dcloud.io/api/ui/navigationbar?id=shownavigationbarloading
 */
export const showNavigationBarLoading = promisify(uni.showNavigationBarLoading);
