import { promisify } from "../utils";

/**
 * 登录
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/login?id=unichecksession
 */
export const checkSession = promisify(uni.checkSession);
