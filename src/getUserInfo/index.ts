import { promisify } from "../utils";

/**
 * 获取用户信息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/login?id=getuserinfo
 */
export const getUserInfo = promisify(uni.getUserInfo);
