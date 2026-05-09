import { promisify } from "../utils";

/**
 * 异步获取系统信息
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/info?id=getsysteminfo
 */
export const getSystemInfo = promisify(uni.getSystemInfo);
