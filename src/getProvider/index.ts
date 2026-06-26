import { promisify } from "../utils";

/**
 * 获取服务供应商
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/provider?id=getprovider
 */
export const getProvider = promisify(uni.getProvider);
