import { promisify } from '../utils';

/**
 * 异步获取当前 storage 的相关信息
 *
 * 文档 http://uniapp.dcloud.net.cn/api/storage/storage?id=getstorageinfo
 */
export const getStorageInfo = promisify(uni.getStorageInfo);
