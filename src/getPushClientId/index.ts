import { promisify } from "../utils";

/**
 * 获取客户端唯一的推送标识
 *
 * 文档 http://uniapp.dcloud.net.cn/api/plugins/push.html#getpushclientid
 */
export const getPushClientId = promisify(uni.getPushClientId);
