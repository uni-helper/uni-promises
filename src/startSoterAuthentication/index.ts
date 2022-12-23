import { promisify } from '../utils';

/**
 * 开始 SOTER 生物认证
 *
 * 文档 http://uniapp.dcloud.io/api/system/authentication?id=startsoterauthentication
 */
export const startSoterAuthentication = promisify(uni.startSoterAuthentication);
