import { promisify } from '../utils';

/**
 * 关闭所有页面，打开到应用内的某个页面
 *
 * 文档 http://uniapp.dcloud.io/api/router?id=relaunch
 */
export const reLaunch = promisify(uni.reLaunch);
