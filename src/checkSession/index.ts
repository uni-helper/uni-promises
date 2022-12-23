import { promisify } from '../utils';

/**
 * 登录
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/login?id=unichecksession
 */
export const checkSession = promisify(uni.checkSession);
