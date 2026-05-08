import { promisify } from '../utils';

/**
 * 提前向用户发起授权请求
 *
 * 文档 http://uniapp.dcloud.net.cn/api/other/authorize?id=authorize
 */
export const authorize = promisify(uni.authorize);
