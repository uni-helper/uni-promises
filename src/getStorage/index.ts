import { promisify } from '../utils';

/**
 * 从本地缓存中异步获取指定 key 对应的内容
 *
 * 文档 http://uniapp.dcloud.io/api/storage/storage?id=getstorage
 */
export const getStorage = promisify(uni.getStorage);
