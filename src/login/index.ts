import { promisify } from '../utils';

/**
 * 登录
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/login?id=login
 */
export const login = promisify(uni.login);
