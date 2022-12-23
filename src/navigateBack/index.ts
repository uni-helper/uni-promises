import { promisify } from '../utils';

/**
 * 关闭当前页面，返回上一页面或多级页面
 *
 * 文档 http://uniapp.dcloud.io/api/router?id=navigateback
 */
export const navigateBack = promisify(uni.navigateBack);
