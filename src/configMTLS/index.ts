import { promisify } from "../utils";

/**
 * 设置 mTLS 双向认证，App 3.6.5+ 支持
 *
 * 文档 https://uniapp.dcloud.net.cn/api/request/request
 */
export const configMTLS = promisify(uni.configMTLS);
