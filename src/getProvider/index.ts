import { promisify } from '../utils';

/**
 * 获取服务供应商
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/provider?id=getprovider
 */
export const getProvider = promisify(uni.getProvider);
