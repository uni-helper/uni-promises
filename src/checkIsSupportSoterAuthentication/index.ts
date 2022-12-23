import { promisify } from '../utils';

/**
 * 获取本机支持的 SOTER 生物认证方式
 *
 * 文档 http://uniapp.dcloud.io/api/system/authentication?id=checkissupportsoterauthentication
 */
export const checkIsSupportSoterAuthentication = promisify(uni.checkIsSupportSoterAuthentication);
