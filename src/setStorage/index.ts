import { promisify } from '../utils';

/**
 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容
 *
 * 文档 http://uniapp.dcloud.io/api/storage/storage?id=setstorage
 */
export const setStorage = promisify(uni.setStorage);
