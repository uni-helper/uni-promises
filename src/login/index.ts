import { promisify } from "../utils";

/**
 * 登录
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/login?id=login
 */
export const login = promisify(uni.login);
