import { promisify } from '../utils';

/**
 * 获取用户信息
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/login?id=getUserProfile
 */
export const getUserProfile = promisify(uni.getUserProfile);
