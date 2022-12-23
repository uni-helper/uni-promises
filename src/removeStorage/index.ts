import { promisify } from '../utils';

/**
 * 从本地缓存中异步移除指定 key
 *
 * 文档 http://uniapp.dcloud.io/api/storage/storage?id=removestorage
 */
export const removeStorage = promisify(uni.removeStorage);
