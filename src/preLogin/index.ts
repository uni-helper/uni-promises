import { promisify } from "../utils";

/**
 * 预登录
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/login?id=prelogin
 */
export const preLogin = promisify(uni.preLogin);
