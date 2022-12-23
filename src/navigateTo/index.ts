import { promisify } from '../utils';

/**
 * 保留当前页面，跳转到应用内的某个页面
 *
 * 文档 http://uniapp.dcloud.io/api/router?id=navigateto
 */
export const navigateTo = promisify(uni.navigateTo);
