import { promisify } from '../utils';

/**
 * 异步获取系统信息
 *
 * 文档 http://uniapp.dcloud.io/api/system/info?id=getsysteminfo
 */
export const getSystemInfo = promisify(uni.getSystemInfo);
