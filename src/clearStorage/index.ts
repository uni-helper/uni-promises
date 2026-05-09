import { promisify } from "../utils";

/**
 * 清理本地数据缓存
 *
 * 文档 http://uniapp.dcloud.net.cn/api/storage/storage?id=clearstorage
 */
export const clearStorage = promisify(uni.clearStorage);
