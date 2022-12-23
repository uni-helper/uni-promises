import { promisify } from '../utils';

/**
 * 隐藏返回首页按钮
 *
 * 文档 http://uniapp.dcloud.io/api/ui/navigationbar?id=hidehomebutton
 */
export const hideHomeButton = promisify(uni.hideHomeButton);
