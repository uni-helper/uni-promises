import { promisify } from '../utils';

/**
 * 关闭当前页面，跳转到应用内的某个页面
 *
 * 文档 http://uniapp.dcloud.io/api/router?id=redirectto
 */
export const redirectTo = promisify(uni.redirectTo);
