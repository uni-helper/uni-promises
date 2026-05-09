import { promisify } from "../utils";

/**
 * 获取网络类型
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/network?id=getnetworktype
 */
export const getNetworkType = promisify(uni.getNetworkType);
