import { promisify } from '../utils';

/**
 * 动态设置当前页面的标题
 *
 * 文档 http://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle
 */
export const setNavigationBarTitle = promisify(uni.setNavigationBarTitle);
