import { promisify } from "../utils";

/**
 * 检查登录状态是否过期
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/login?id=unichecksession
 */
export const checkSession = promisify(uni.checkSession);
