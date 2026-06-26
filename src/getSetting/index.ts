import { promisify } from "../utils";

/**
 * 获取用户的当前设置
 *
 * 文档 https://uniapp.dcloud.net.cn/api/other/setting?id=getsetting
 */
export const getSetting = promisify(uni.getSetting);
